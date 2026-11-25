import { createClient, type Session, type SupabaseClient, type User } from '@supabase/supabase-js';
import type {
  StudentAccountType,
  StudentProfile,
  StudentRegistrationInput,
} from '../types/platform';

const rawUrl = (import.meta.env.VITE_SUPABASE_URL as string | undefined)?.trim() ?? '';
const rawAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)?.trim() ?? '';

function isValidSupabaseUrl(url: string): boolean {
  if (!url || url === 'MY_SUPABASE_URL') return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

export const isSupabaseConfigured: boolean =
  isValidSupabaseUrl(rawUrl) &&
  rawAnonKey.length > 20 &&
  rawAnonKey !== 'MY_SUPABASE_ANON_KEY';

const REMEMBER_PREF_KEY = 'gsp_remember_session';

function getPreferredStorage(): Storage {
  if (typeof window === 'undefined') {
    return undefined as unknown as Storage;
  }
  const usePersistent = window.localStorage.getItem(REMEMBER_PREF_KEY) !== 'false';
  return usePersistent ? window.localStorage : window.sessionStorage;
}

const adaptiveStorage = {
  getItem: (key: string): string | null => {
    if (typeof window === 'undefined') return null;
    return (
      window.localStorage.getItem(key) ?? window.sessionStorage.getItem(key)
    );
  },
  setItem: (key: string, value: string): void => {
    if (typeof window === 'undefined') return;
    const target = getPreferredStorage();
    const other =
      target === window.localStorage
        ? window.sessionStorage
        : window.localStorage;
    other.removeItem(key);
    target.setItem(key, value);
  },
  removeItem: (key: string): void => {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(key);
    window.sessionStorage.removeItem(key);
  },
};

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(rawUrl, rawAnonKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        storage: adaptiveStorage,
      },
    })
  : null;

export interface AuthResult {
  session: Session | null;
  user: User | null;
  requiresEmailConfirmation: boolean;
  profile: StudentProfile | null;
}

export function buildFallbackProfileFromUser(user: User): StudentProfile {
  const meta = user.user_metadata ?? {};
  const rawAccountType = meta.account_type;
  const accountType: StudentAccountType =
    rawAccountType === 'refugee_displaced' ? 'refugee_displaced' : 'other_learner';

  return {
    id: user.id,
    first_name:
      typeof meta.first_name === 'string' && meta.first_name.trim()
        ? meta.first_name.trim()
        : 'Learner',
    last_name:
      typeof meta.last_name === 'string' ? meta.last_name.trim() : '',
    email: user.email ?? '',
    phone: typeof meta.phone === 'string' ? meta.phone : '',
    country_of_residence:
      typeof meta.country_of_residence === 'string'
        ? meta.country_of_residence
        : '',
    nationality:
      typeof meta.nationality === 'string' && meta.nationality.trim()
        ? meta.nationality.trim()
        : null,
    location:
      typeof meta.location === 'string' && meta.location.trim()
        ? meta.location.trim()
        : null,
    account_type: accountType,
    registration_date: user.created_at ?? new Date().toISOString(),
  };
}

export async function fetchOrProvisionStudentProfile(
  user: User
): Promise<{ profile: StudentProfile; warning?: string }> {
  if (!supabase) {
    throw new Error('Supabase authentication is not configured.');
  }

  const { data: existing, error: fetchError } = await supabase
    .from('students')
    .select(
      'id, first_name, last_name, email, phone, country_of_residence, nationality, location, account_type, registration_date, updated_at'
    )
    .eq('id', user.id)
    .maybeSingle();

  if (existing && !fetchError) {
    return { profile: existing as StudentProfile };
  }

  // Fallback provisioning when trigger has not run or profile row is missing
  const fallback = buildFallbackProfileFromUser(user);
  const { data: inserted, error: insertError } = await supabase
    .from('students')
    .upsert(
      {
        id: user.id,
        first_name: fallback.first_name,
        last_name: fallback.last_name,
        email: fallback.email,
        phone: fallback.phone,
        country_of_residence: fallback.country_of_residence,
        nationality: fallback.nationality,
        location: fallback.location,
        account_type: fallback.account_type,
        registration_date: fallback.registration_date,
      },
      { onConflict: 'id' }
    )
    .select(
      'id, first_name, last_name, email, phone, country_of_residence, nationality, location, account_type, registration_date, updated_at'
    )
    .maybeSingle();

  if (inserted && !insertError) {
    return { profile: inserted as StudentProfile };
  }

  return {
    profile: fallback,
    warning:
      'Signed in successfully, but the students profile table could not be synced yet. Ensure migration 001_create_students_table.sql has been applied in Supabase.',
  };
}

export async function registerStudent(
  input: StudentRegistrationInput
): Promise<AuthResult> {
  if (!supabase) {
    throw new Error(
      'Supabase is not connected yet. Configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable real account registration.'
    );
  }

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(REMEMBER_PREF_KEY, 'true');
  }

  const { data, error } = await supabase.auth.signUp({
    email: input.email.trim(),
    password: input.password,
    options: {
      emailRedirectTo:
        typeof window !== 'undefined' ? window.location.origin : undefined,
      data: {
        first_name: input.firstName.trim(),
        last_name: input.lastName.trim(),
        phone: input.phone.trim(),
        country_of_residence: input.countryOfResidence.trim(),
        nationality: input.nationality?.trim() || null,
        location: input.location?.trim() || null,
        account_type: input.accountType,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  const user = data.user;
  const session = data.session;

  if (!user) {
    throw new Error('Account creation did not return a valid user record.');
  }

  // Supabase returns identities: [] when an email is already registered with confirmation enabled
  if (Array.isArray(user.identities) && user.identities.length === 0) {
    throw new Error(
      'An account with this email address already exists. Please sign in or reset your password.'
    );
  }

  let profile: StudentProfile | null = null;
  if (session) {
    const synced = await fetchOrProvisionStudentProfile(user);
    profile = synced.profile;
  }

  return {
    session,
    user,
    requiresEmailConfirmation: !session,
    profile,
  };
}

export async function signInStudent(
  email: string,
  password: string,
  rememberMe: boolean
): Promise<AuthResult> {
  if (!supabase) {
    throw new Error(
      'Supabase is not connected yet. Configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to enable real authentication.'
    );
  }

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(REMEMBER_PREF_KEY, rememberMe ? 'true' : 'false');
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  const synced = await fetchOrProvisionStudentProfile(data.user);

  return {
    session: data.session,
    user: data.user,
    requiresEmailConfirmation: false,
    profile: synced.profile,
  };
}

export async function requestPasswordReset(email: string): Promise<void> {
  if (!supabase) {
    throw new Error(
      'Supabase is not connected yet. Configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to send password reset emails.'
    );
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
    redirectTo: typeof window !== 'undefined' ? window.location.origin : undefined,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateRecoveredPassword(newPassword: string): Promise<void> {
  if (!supabase) {
    throw new Error('Supabase authentication is not configured.');
  }

  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateStudentProfile(
  userId: string,
  updates: Pick<
    StudentProfile,
    | 'first_name'
    | 'last_name'
    | 'phone'
    | 'country_of_residence'
    | 'nationality'
    | 'location'
    | 'account_type'
  >
): Promise<StudentProfile> {
  if (!supabase) {
    throw new Error('Supabase is not connected.');
  }

  const { data, error } = await supabase
    .from('students')
    .update({
      first_name: updates.first_name.trim(),
      last_name: updates.last_name.trim(),
      phone: updates.phone.trim(),
      country_of_residence: updates.country_of_residence.trim(),
      nationality: updates.nationality?.trim() || null,
      location: updates.location?.trim() || null,
      account_type: updates.account_type,
    })
    .eq('id', userId)
    .select(
      'id, first_name, last_name, email, phone, country_of_residence, nationality, location, account_type, registration_date, updated_at'
    )
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as StudentProfile;
}

export async function signOutStudent(): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}
