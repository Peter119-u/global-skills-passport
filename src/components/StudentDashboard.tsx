import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Edit3,
  Globe,
  Loader2,
  LogOut,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import type { Session } from '@supabase/supabase-js';
import { COUNTRY_OPTIONS } from '../data/countries';
import { LEARNING_PATHWAYS } from '../data/platformContent';
import { updateStudentProfile } from '../lib/supabaseClient';
import type {
  LearningPathway,
  PublicPageId,
  StudentAccountType,
  StudentProfile,
} from '../types/platform';

interface StudentDashboardProps {
  session: Session | null;
  profile: StudentProfile | null;
  welcomeName: string | null;
  profileSyncWarning?: string | null;
  onProfileUpdated: (updated: StudentProfile) => void;
  onSignOut: () => Promise<void>;
  onNavigatePage: (page: PublicPageId, sectionId?: string) => void;
  onSelectPathway: (pathway: LearningPathway) => void;
}

export function StudentDashboard({
  session,
  profile,
  welcomeName,
  profileSyncWarning,
  onProfileUpdated,
  onSignOut,
  onNavigatePage,
  onSelectPathway,
}: StudentDashboardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(profile?.first_name ?? '');
  const [lastName, setLastName] = useState(profile?.last_name ?? '');
  const [phone, setPhone] = useState(profile?.phone ?? '');
  const [country, setCountry] = useState(profile?.country_of_residence ?? '');
  const [nationality, setNationality] = useState(profile?.nationality ?? '');
  const [location, setLocation] = useState(profile?.location ?? '');
  const [accountType, setAccountType] = useState<StudentAccountType>(
    profile?.account_type ?? 'refugee_displaced'
  );

  const [isSaving, setIsSaving] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [saveError, setSaveError] = useState('');

  // Defense-in-depth route protection
  if (!session) {
    return (
      <main className="bg-[#F7F9FC] min-h-[75vh] py-16">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-4">
            <ShieldCheck className="w-10 h-10 text-[#0B1F3A] mx-auto" />
            <h1 className="font-display text-xl font-bold text-[#0B1F3A]">
              Authentication Required
            </h1>
            <p className="text-sm text-slate-600">
              Please sign in to access your personal Student Dashboard.
            </p>
            <button
              type="button"
              onClick={() => onNavigatePage('login')}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] rounded-xl hover:bg-[#122D52] cursor-pointer min-h-[44px]"
            >
              Go to Sign In
            </button>
          </div>
        </div>
      </main>
    );
  }

  const displayFirstName =
    profile?.first_name?.trim() ||
    welcomeName?.trim() ||
    (typeof session.user.user_metadata?.first_name === 'string'
      ? session.user.user_metadata.first_name
      : 'Learner');

  const accountTypeLabel =
    (profile?.account_type ?? session.user.user_metadata?.account_type) ===
    'refugee_displaced'
      ? 'Refugee / Displaced Learner'
      : 'Other Learner';

  const registrationFormatted = new Date(
    profile?.registration_date ?? session.user.created_at
  ).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const startEditing = () => {
    setFirstName(profile?.first_name ?? displayFirstName);
    setLastName(profile?.last_name ?? '');
    setPhone(profile?.phone ?? '');
    setCountry(profile?.country_of_residence ?? 'Kenya');
    setNationality(profile?.nationality ?? '');
    setLocation(profile?.location ?? '');
    setAccountType(profile?.account_type ?? 'refugee_displaced');
    setSaveError('');
    setSaveMessage('');
    setIsEditing(true);
  };

  const handleSaveProfile = async (e: FormEvent) => {
    e.preventDefault();
    setSaveError('');
    setSaveMessage('');

    if (!firstName.trim() || !lastName.trim() || !phone.trim() || !country.trim()) {
      setSaveError('First name, last name, phone, and country of residence are required.');
      return;
    }

    setIsSaving(true);
    try {
      const updated = await updateStudentProfile(session.user.id, {
        first_name: firstName,
        last_name: lastName,
        phone,
        country_of_residence: country,
        nationality: nationality || null,
        location: location || null,
        account_type: accountType,
      });
      onProfileUpdated(updated);
      setIsEditing(false);
      setSaveMessage('Your student profile has been updated.');
    } catch (err) {
      setSaveError(
        err instanceof Error ? err.message : 'Unable to save profile changes.'
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleSignOutClick = async () => {
    setIsSigningOut(true);
    try {
      await onSignOut();
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <main className="bg-[#F7F9FC] min-h-[82vh] py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Welcome Header Banner */}
        <section className="bg-[#0B1F3A] text-white rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-300">
              Student Dashboard · {accountTypeLabel}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Welcome, {displayFirstName}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              Your Global Skills Passport account is active. Manage your
              learner profile below and explore professional learning pathways.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigatePage('academy')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0B1F3A] bg-white hover:bg-slate-100 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
            >
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              Browse Academy
            </button>
            <button
              type="button"
              disabled={isSigningOut}
              onClick={handleSignOutClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white border border-white/25 hover:bg-white/10 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
            >
              {isSigningOut ? (
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              ) : (
                <LogOut className="w-4 h-4" aria-hidden="true" />
              )}
              Sign Out
            </button>
          </div>
        </section>

        {profileSyncWarning && (
          <div
            role="status"
            className="rounded-xl border border-amber-300 bg-amber-50 px-5 py-3.5 text-sm text-amber-900"
          >
            {profileSyncWarning}
          </div>
        )}

        {saveMessage && (
          <div
            role="status"
            className="rounded-xl border border-teal-200 bg-[#F0FDFA] px-5 py-3.5 text-sm text-[#0F766E] flex items-center gap-2 font-medium"
          >
            <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
            {saveMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Personal Profile Card */}
          <section className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-6">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <h2 className="font-display text-lg font-bold text-[#0B1F3A]">
                  Personal Learner Profile
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Protected by Supabase Row Level Security
                </p>
              </div>
              {!isEditing && (
                <button
                  type="button"
                  onClick={startEditing}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#0B1F3A] border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer min-h-[38px]"
                >
                  <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                  Edit Profile
                </button>
              )}
            </div>

            {isEditing ? (
              <form onSubmit={handleSaveProfile} className="space-y-4">
                {saveError && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs text-red-800"
                  >
                    {saveError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="dash-first"
                      className="block text-xs font-semibold text-[#0B1F3A] mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="dash-first"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:border-[#0D9488] focus:outline-none min-h-[42px]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="dash-last"
                      className="block text-xs font-semibold text-[#0B1F3A] mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      id="dash-last"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:border-[#0D9488] focus:outline-none min-h-[42px]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="dash-phone"
                    className="block text-xs font-semibold text-[#0B1F3A] mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="dash-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:border-[#0D9488] focus:outline-none min-h-[42px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="dash-country"
                    className="block text-xs font-semibold text-[#0B1F3A] mb-1"
                  >
                    Country of Residence
                  </label>
                  <select
                    id="dash-country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:border-[#0D9488] focus:outline-none min-h-[42px]"
                  >
                    {COUNTRY_OPTIONS.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="dash-nationality"
                      className="block text-xs font-semibold text-[#0B1F3A] mb-1"
                    >
                      Nationality (Optional)
                    </label>
                    <input
                      id="dash-nationality"
                      type="text"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:border-[#0D9488] focus:outline-none min-h-[42px]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="dash-location"
                      className="block text-xs font-semibold text-[#0B1F3A] mb-1"
                    >
                      Location / Settlement
                    </label>
                    <input
                      id="dash-location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:border-[#0D9488] focus:outline-none min-h-[42px]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="dash-account-type"
                    className="block text-xs font-semibold text-[#0B1F3A] mb-1"
                  >
                    Account Type
                  </label>
                  <select
                    id="dash-account-type"
                    value={accountType}
                    onChange={(e) =>
                      setAccountType(e.target.value as StudentAccountType)
                    }
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:border-[#0D9488] focus:outline-none min-h-[42px]"
                  >
                    <option value="refugee_displaced">
                      Refugee / Displaced Learner
                    </option>
                    <option value="other_learner">Other Learner</option>
                  </select>
                </div>

                <div className="flex items-center justify-end gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0B1F3A] cursor-pointer min-h-[40px]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] disabled:opacity-60 rounded-lg cursor-pointer min-h-[40px]"
                  >
                    {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <dl className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <UserCheck className="w-4 h-4 text-[#0F766E] shrink-0 mt-1" />
                  <div>
                    <dt className="text-xs text-slate-500">Full Name</dt>
                    <dd className="font-semibold text-[#0B1F3A]">
                      {displayFirstName} {profile?.last_name ?? ''}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0F766E] shrink-0 mt-1" />
                  <div>
                    <dt className="text-xs text-slate-500">Email Address</dt>
                    <dd className="text-slate-800">
                      {profile?.email || session.user.email}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0F766E] shrink-0 mt-1" />
                  <div>
                    <dt className="text-xs text-slate-500">Phone</dt>
                    <dd className="text-slate-800 tabular-nums">
                      {profile?.phone || 'Not provided'}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#0F766E] shrink-0 mt-1" />
                  <div>
                    <dt className="text-xs text-slate-500">
                      Country of Residence &amp; Nationality
                    </dt>
                    <dd className="text-slate-800">
                      {profile?.country_of_residence || 'Not specified'}
                      {profile?.nationality ? ` · Nationality: ${profile.nationality}` : ''}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0F766E] shrink-0 mt-1" />
                  <div>
                    <dt className="text-xs text-slate-500">
                      Current Location / Settlement
                    </dt>
                    <dd className="text-slate-800">
                      {profile?.location || 'Not specified'}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-[#0F766E] shrink-0 mt-1" />
                  <div>
                    <dt className="text-xs text-slate-500">Registration Date</dt>
                    <dd className="text-slate-800 tabular-nums">
                      {registrationFormatted}
                    </dd>
                  </div>
                </div>
              </dl>
            )}
          </section>

          {/* Right: Learning Pathways Quick Access */}
          <section className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 mb-5">
                <div>
                  <h2 className="font-display text-lg font-bold text-[#0B1F3A]">
                    Available Professional Learning Pathways
                  </h2>
                  <p className="text-sm text-slate-600">
                    Inspect structured module syllabi and capstone requirements.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigatePage('academy')}
                  className="text-xs font-semibold text-[#0F766E] hover:text-[#0B1F3A] underline underline-offset-4 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Open Full Catalog
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {LEARNING_PATHWAYS.slice(0, 6).map((pathway) => (
                  <button
                    key={pathway.id}
                    type="button"
                    onClick={() => onSelectPathway(pathway)}
                    className="text-left rounded-xl border border-slate-200 p-4 hover:border-[#0D9488] transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-1">
                      <span className="font-medium text-[#0F766E]">
                        {pathway.categoryLabel}
                      </span>
                      <span className="font-mono tabular-nums">{pathway.code}</span>
                    </div>
                    <p className="font-display text-base font-bold text-[#0B1F3A] group-hover:text-[#0F766E] mb-1">
                      {pathway.title}
                    </p>
                    <p className="text-xs text-slate-500 tabular-nums mb-2">
                      {pathway.estimatedWeeks} Weeks · {pathway.modules.length} Modules
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B1F3A]">
                      View Syllabus
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
