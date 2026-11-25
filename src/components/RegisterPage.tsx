import { useState, type FormEvent } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
  ShieldCheck,
  UserPlus,
} from 'lucide-react';
import { COUNTRY_OPTIONS } from '../data/countries';
import { isSupabaseConfigured, registerStudent } from '../lib/supabaseClient';
import type { PublicPageId, StudentAccountType, StudentProfile } from '../types/platform';
import { SupabaseSetupNotice } from './SupabaseSetupNotice';

interface RegisterPageProps {
  onNavigatePage: (page: PublicPageId, sectionId?: string) => void;
  onAuthSuccess: (profile: StudentProfile | null, welcomeFirstName: string) => void;
}

export function RegisterPage({
  onNavigatePage,
  onAuthSuccess,
}: RegisterPageProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dialCode, setDialCode] = useState('+254');
  const [phoneLocal, setPhoneLocal] = useState('');
  const [countryOfResidence, setCountryOfResidence] = useState('Kenya');
  const [nationality, setNationality] = useState('');
  const [location, setLocation] = useState('');
  const [accountType, setAccountType] =
    useState<StudentAccountType>('refugee_displaced');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedPolicies, setAcceptedPolicies] = useState(false);

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState('');
  const [phase2Notice, setPhase2Notice] = useState('');
  const [confirmationEmail, setConfirmationEmail] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCountryChange = (selectedCountry: string) => {
    setCountryOfResidence(selectedCountry);
    const match = COUNTRY_OPTIONS.find((c) => c.name === selectedCountry);
    if (match && match.dialCode !== '+') {
      setDialCode(match.dialCode);
    }
  };

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!firstName.trim()) {
      errors.firstName = 'First name is required.';
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last name is required.';
    }
    const cleanEmail = email.trim();
    if (!cleanEmail) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      errors.email = 'Please enter a valid email address.';
    }

    const digitsOnly = phoneLocal.replace(/\D/g, '');
    if (!phoneLocal.trim()) {
      errors.phone = 'Phone number is required.';
    } else if (digitsOnly.length < 6 || digitsOnly.length > 15) {
      errors.phone = 'Enter a valid phone number (6 to 15 digits).';
    }

    if (!countryOfResidence.trim()) {
      errors.countryOfResidence = 'Country of residence is required.';
    }

    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    if (!acceptedPolicies) {
      errors.acceptedPolicies =
        'You must accept the Terms and Conditions and Privacy Policy to create an account.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setPhase2Notice('');

    if (!validate()) {
      return;
    }

    if (!isSupabaseConfigured) {
      setPhase2Notice(
        'Your registration details are valid. Live account creation opens in Phase 2—explore our Learning Academy syllabi and sample lessons in the meantime.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const fullPhone = `${dialCode.trim()} ${phoneLocal.trim()}`.trim();
      const result = await registerStudent({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: fullPhone,
        countryOfResidence: countryOfResidence.trim(),
        nationality: nationality.trim() || undefined,
        location: location.trim() || undefined,
        accountType,
        password,
      });

      if (result.requiresEmailConfirmation) {
        setConfirmationEmail(email.trim());
      } else {
        onAuthSuccess(result.profile, firstName.trim());
      }
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : 'Registration failed. Please check your details and try again.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#F7F9FC] min-h-[82vh] py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigatePage('home', 'top')}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0B1F3A] mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Institutional Context Column */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#0B1F3A] text-white rounded-2xl p-6 sm:p-7 space-y-4">
              <p className="text-xs font-semibold tracking-widest uppercase text-teal-300">
                Student Registration
              </p>
              <h1 className="font-display text-2xl font-bold leading-snug text-balance">
                Begin Your Global Skills Passport
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed">
                Create your personal learner account to access structured
                professional pathways, mentorship guidance, and competency-based
                assessments.
              </p>
              <div className="pt-4 border-t border-white/15 space-y-3 text-xs text-slate-200">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck
                    className="w-4 h-4 text-teal-300 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>
                    Protected by Supabase authentication and Row Level Security
                    so only you can access your personal profile.
                  </span>
                </div>
              </div>
            </div>

            {!isSupabaseConfigured && (
              <SupabaseSetupNotice
                onExploreAcademy={() => onNavigatePage('academy')}
              />
            )}
          </aside>

          {/* Right Registration Form Column */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs">
            {confirmationEmail ? (
              <div className="py-6 space-y-5">
                <div className="w-12 h-12 rounded-xl bg-[#F0FDFA] border border-teal-200 text-[#0F766E] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h2 className="font-display text-2xl font-bold text-[#0B1F3A]">
                    Verify Your Email to Activate Your Account
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Your Global Skills Passport account has been created for{' '}
                    <span className="font-semibold text-[#0B1F3A]">
                      {confirmationEmail}
                    </span>
                    . Please check your inbox and click the verification link to
                    sign in to your personal dashboard.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => onNavigatePage('login')}
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl transition-colors cursor-pointer min-h-[44px]"
                  >
                    Go to Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigatePage('home', 'top')}
                    className="px-5 py-2.5 text-sm font-medium text-slate-700 border border-slate-300 rounded-xl hover:bg-slate-50 cursor-pointer min-h-[44px]"
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-7 pb-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0B1F3A]">
                      Create Student Account
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      Fields marked with * are required.
                    </p>
                  </div>
                  <p className="text-sm text-slate-600">
                    Already registered?{' '}
                    <button
                      type="button"
                      onClick={() => onNavigatePage('login')}
                      className="font-semibold text-[#0F766E] hover:text-[#0B1F3A] underline underline-offset-4 cursor-pointer"
                    >
                      Sign In
                    </button>
                  </p>
                </div>

                {phase2Notice && (
                  <div
                    role="status"
                    className="mb-6 rounded-xl border border-teal-200 bg-[#F0FDFA] p-4 sm:p-5 flex items-start gap-3.5"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="space-y-3">
                      <p className="text-sm text-[#0B1F3A] leading-relaxed font-medium">
                        {phase2Notice}
                      </p>
                      <button
                        type="button"
                        onClick={() => onNavigatePage('academy')}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0D9488] rounded-lg transition-colors cursor-pointer min-h-[38px]"
                      >
                        Explore Learning Academy
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div
                    role="alert"
                    className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-800"
                  >
                    {submitError}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Account Type Selection */}
                  <fieldset>
                    <legend className="block text-xs font-semibold text-[#0B1F3A] mb-2">
                      Account Type *
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label
                        className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                          accountType === 'refugee_displaced'
                            ? 'border-[#0D9488] bg-[#F0FDFA]/60'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="accountType"
                          value="refugee_displaced"
                          checked={accountType === 'refugee_displaced'}
                          onChange={() => setAccountType('refugee_displaced')}
                          className="mt-1 accent-[#0F766E]"
                        />
                        <div>
                          <span className="block text-sm font-semibold text-[#0B1F3A]">
                            Refugee / Displaced Learner
                          </span>
                          <span className="block text-xs text-slate-600 mt-0.5">
                            For refugees, asylum seekers, and internally displaced learners.
                          </span>
                        </div>
                      </label>

                      <label
                        className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                          accountType === 'other_learner'
                            ? 'border-[#0D9488] bg-[#F0FDFA]/60'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="accountType"
                          value="other_learner"
                          checked={accountType === 'other_learner'}
                          onChange={() => setAccountType('other_learner')}
                          className="mt-1 accent-[#0F766E]"
                        />
                        <div>
                          <span className="block text-sm font-semibold text-[#0B1F3A]">
                            Other Learner
                          </span>
                          <span className="block text-xs text-slate-600 mt-0.5">
                            For host-community learners and international participants.
                          </span>
                        </div>
                      </label>
                    </div>
                  </fieldset>

                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="reg-first-name"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        First Name *
                      </label>
                      <input
                        id="reg-first-name"
                        type="text"
                        autoComplete="given-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        aria-invalid={Boolean(fieldErrors.firstName)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                        placeholder="e.g. Amina"
                      />
                      {fieldErrors.firstName && (
                        <p className="mt-1 text-xs text-red-700">
                          {fieldErrors.firstName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="reg-last-name"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Last Name *
                      </label>
                      <input
                        id="reg-last-name"
                        type="text"
                        autoComplete="family-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        aria-invalid={Boolean(fieldErrors.lastName)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                        placeholder="e.g. Hassan"
                      />
                      {fieldErrors.lastName && (
                        <p className="mt-1 text-xs text-red-700">
                          {fieldErrors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="reg-email"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="reg-email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={Boolean(fieldErrors.email)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                        placeholder="you@example.org"
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-xs text-red-700">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="reg-phone"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Phone Number (with Country Code) *
                      </label>
                      <div className="flex gap-2">
                        <select
                          aria-label="Phone country dialing code"
                          value={dialCode}
                          onChange={(e) => setDialCode(e.target.value)}
                          className="w-28 px-2.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:border-[#0D9488] focus:outline-none min-h-[44px] font-mono tabular-nums"
                        >
                          {COUNTRY_OPTIONS.map((c) => (
                            <option key={`${c.name}-${c.dialCode}`} value={c.dialCode}>
                              {c.dialCode} ({c.name.slice(0, 3).toUpperCase()})
                            </option>
                          ))}
                        </select>
                        <input
                          id="reg-phone"
                          type="tel"
                          autoComplete="tel-national"
                          value={phoneLocal}
                          onChange={(e) => setPhoneLocal(e.target.value)}
                          aria-invalid={Boolean(fieldErrors.phone)}
                          className="flex-1 min-w-0 px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px] tabular-nums"
                          placeholder="712 345 678"
                        />
                      </div>
                      {fieldErrors.phone && (
                        <p className="mt-1 text-xs text-red-700">
                          {fieldErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Residence, Nationality, Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="reg-country"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Country of Residence *
                      </label>
                      <select
                        id="reg-country"
                        value={countryOfResidence}
                        onChange={(e) => handleCountryChange(e.target.value)}
                        aria-invalid={Boolean(fieldErrors.countryOfResidence)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl bg-white focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                      >
                        {COUNTRY_OPTIONS.map((c) => (
                          <option key={c.name} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                      {fieldErrors.countryOfResidence && (
                        <p className="mt-1 text-xs text-red-700">
                          {fieldErrors.countryOfResidence}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="reg-nationality"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Nationality (Optional)
                      </label>
                      <input
                        id="reg-nationality"
                        type="text"
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="reg-location"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Location / Settlement (Optional)
                      </label>
                      <input
                        id="reg-location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                        placeholder="City or settlement"
                      />
                    </div>
                  </div>

                  {/* Password Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="reg-password"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Password *
                      </label>
                      <div className="relative">
                        <input
                          id="reg-password"
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="new-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          aria-invalid={Boolean(fieldErrors.password)}
                          className="w-full pl-3.5 pr-11 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                          placeholder="Minimum 8 characters"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-slate-500 hover:text-[#0B1F3A] cursor-pointer"
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      {fieldErrors.password && (
                        <p className="mt-1 text-xs text-red-700">
                          {fieldErrors.password}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="reg-confirm-password"
                        className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                      >
                        Confirm Password *
                      </label>
                      <div className="relative">
                        <input
                          id="reg-confirm-password"
                          type={showConfirmPassword ? 'text' : 'password'}
                          autoComplete="new-password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          aria-invalid={Boolean(fieldErrors.confirmPassword)}
                          className="w-full pl-3.5 pr-11 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                          placeholder="Re-enter password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword((prev) => !prev)}
                          aria-label={
                            showConfirmPassword
                              ? 'Hide confirm password'
                              : 'Show confirm password'
                          }
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center text-slate-500 hover:text-[#0B1F3A] cursor-pointer"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      {fieldErrors.confirmPassword && (
                        <p className="mt-1 text-xs text-red-700">
                          {fieldErrors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Terms & Privacy Policy Acceptance */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={acceptedPolicies}
                        onChange={(e) => setAcceptedPolicies(e.target.checked)}
                        className="mt-1 w-4 h-4 accent-[#0F766E] rounded shrink-0"
                      />
                      <span className="text-sm text-slate-600 leading-relaxed">
                        I accept the Global Skills Passport{' '}
                        <button
                          type="button"
                          onClick={() => onNavigatePage('terms')}
                          className="font-semibold text-[#0B1F3A] underline underline-offset-2 hover:text-[#0F766E] cursor-pointer"
                        >
                          Terms and Conditions
                        </button>{' '}
                        and{' '}
                        <button
                          type="button"
                          onClick={() => onNavigatePage('privacy')}
                          className="font-semibold text-[#0B1F3A] underline underline-offset-2 hover:text-[#0F766E] cursor-pointer"
                        >
                          Privacy Policy
                        </button>
                        . *
                      </span>
                    </label>
                    {fieldErrors.acceptedPolicies && (
                      <p className="mt-1.5 text-xs text-red-700">
                        {fieldErrors.acceptedPolicies}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] disabled:opacity-60 rounded-xl transition-colors cursor-pointer min-h-[46px]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                          Creating Account...
                        </>
                      ) : (
                        <>
                          <UserPlus className="w-4 h-4" aria-hidden="true" />
                          Create Account
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-500">
                      Passwords are managed securely by Supabase Auth and never
                      stored in profile tables.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
