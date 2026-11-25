import { useState, type FormEvent } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Loader2,
  LogIn,
} from 'lucide-react';
import {
  isSupabaseConfigured,
  requestPasswordReset,
  signInStudent,
  updateRecoveredPassword,
} from '../lib/supabaseClient';
import type { PublicPageId, StudentProfile } from '../types/platform';
import { SupabaseSetupNotice } from './SupabaseSetupNotice';

interface LoginPageProps {
  notice?: string | null;
  isPasswordRecovery?: boolean;
  onNavigatePage: (page: PublicPageId, sectionId?: string) => void;
  onLoginSuccess: (profile: StudentProfile | null, fallbackName: string) => void;
  onRecoveryComplete: () => void;
}

export function LoginPage({
  notice,
  isPasswordRecovery = false,
  onNavigatePage,
  onLoginSuccess,
  onRecoveryComplete,
}: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const [mode, setMode] = useState<'login' | 'forgot_password'>('login');
  const [resetSentEmail, setResetSentEmail] = useState<string | null>(null);

  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [authError, setAuthError] = useState('');
  const [phase2Notice, setPhase2Notice] = useState('');
  const [recoveryDone, setRecoveryDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateLogin = (): boolean => {
    const errors: Record<string, string> = {};
    const cleanEmail = email.trim();
    if (!cleanEmail) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!password) {
      errors.password = 'Password is required.';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setPhase2Notice('');
    if (!validateLogin()) return;

    if (!isSupabaseConfigured) {
      setPhase2Notice(
        'Your sign-in details are valid. Live learner accounts and personalized dashboards open in Phase 2—explore our Learning Academy previews in the meantime.'
      );
      return;
    }

    setIsLoading(true);
    try {
      const result = await signInStudent(email.trim(), password, rememberMe);
      const firstName = result.profile?.first_name ?? 'Learner';
      onLoginSuccess(result.profile, firstName);
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Unable to sign in. Please verify your email and password.';
      setAuthError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setPhase2Notice('');
    setFieldErrors({});

    const cleanEmail = email.trim();
    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setFieldErrors({ email: 'Please enter a valid email address.' });
      return;
    }

    if (!isSupabaseConfigured) {
      setPhase2Notice(
        'Your email format is valid. Password reset emails will be active when the Student Portal launches in Phase 2.'
      );
      return;
    }

    setIsLoading(true);
    try {
      await requestPasswordReset(cleanEmail);
      setResetSentEmail(cleanEmail);
    } catch (err) {
      setAuthError(
        err instanceof Error ? err.message : 'Unable to send reset email.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecoveryUpdate = async (e: FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const errors: Record<string, string> = {};
    if (newPassword.length < 8) {
      errors.newPassword = 'New password must be at least 8 characters.';
    }
    if (newPassword !== confirmNewPassword) {
      errors.confirmNewPassword = 'Passwords do not match.';
    }
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsLoading(true);
    try {
      await updateRecoveredPassword(newPassword);
      setRecoveryDone(true);
      onRecoveryComplete();
    } catch (err) {
      setAuthError(
        err instanceof Error ? err.message : 'Could not update password.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-[#F7F9FC] min-h-[80vh] py-10 lg:py-16">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <button
          type="button"
          onClick={() => onNavigatePage('home', 'top')}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0B1F3A] mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Home
        </button>

        {!isSupabaseConfigured && (
          <div className="mb-6">
            <SupabaseSetupNotice
              onExploreAcademy={() => onNavigatePage('academy')}
            />
          </div>
        )}

        {notice && (
          <div
            role="status"
            className="mb-6 rounded-xl border border-teal-200 bg-[#F0FDFA] px-4 py-3 text-sm text-[#0F766E] font-medium"
          >
            {notice}
          </div>
        )}

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          {isPasswordRecovery ? (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-1">
                  Account Recovery
                </p>
                <h1 className="font-display text-2xl font-bold text-[#0B1F3A]">
                  Set a New Password
                </h1>
              </div>

              {recoveryDone ? (
                <div className="space-y-4">
                  <div className="rounded-xl border border-teal-200 bg-[#F0FDFA] p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700">
                      Your password has been updated. You can now continue to your
                      Student Dashboard.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigatePage('dashboard')}
                    className="w-full py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl cursor-pointer min-h-[44px]"
                  >
                    Continue to Dashboard
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRecoveryUpdate} noValidate className="space-y-4">
                  {authError && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    >
                      {authError}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="rec-pass"
                      className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                    >
                      New Password
                    </label>
                    <input
                      id="rec-pass"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                    />
                    {fieldErrors.newPassword && (
                      <p className="mt-1 text-xs text-red-700">
                        {fieldErrors.newPassword}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="rec-confirm"
                      className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                    >
                      Confirm New Password
                    </label>
                    <input
                      id="rec-confirm"
                      type="password"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                    />
                    {fieldErrors.confirmNewPassword && (
                      <p className="mt-1 text-xs text-red-700">
                        {fieldErrors.confirmNewPassword}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl cursor-pointer min-h-[44px]"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Updating Password...
                      </>
                    ) : (
                      'Save New Password'
                    )}
                  </button>
                </form>
              )}
            </div>
          ) : mode === 'forgot_password' ? (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-1">
                  Password Recovery
                </p>
                <h1 className="font-display text-2xl font-bold text-[#0B1F3A]">
                  Reset Your Password
                </h1>
                <p className="text-sm text-slate-600 mt-1">
                  Enter the email address associated with your student account
                  and we will send a secure reset link.
                </p>
              </div>

              {resetSentEmail ? (
                <div className="space-y-4">
                  <div className="rounded-xl border border-teal-200 bg-[#F0FDFA] p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">
                      If an account exists for{' '}
                      <span className="font-semibold">{resetSentEmail}</span>, a
                      password reset link has been sent. Check your inbox and
                      spam folder.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setResetSentEmail(null);
                      setMode('login');
                    }}
                    className="w-full py-3 text-sm font-semibold text-[#0B1F3A] border border-slate-300 rounded-xl hover:bg-slate-50 cursor-pointer min-h-[44px]"
                  >
                    Return to Sign In
                  </button>
                </div>
              ) : (
                <form onSubmit={handleForgotSubmit} noValidate className="space-y-4">
                  {phase2Notice && (
                    <div
                      role="status"
                      className="rounded-xl border border-teal-200 bg-[#F0FDFA] p-4 flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="space-y-2.5">
                        <p className="text-sm text-[#0B1F3A] leading-relaxed font-medium">
                          {phase2Notice}
                        </p>
                        <button
                          type="button"
                          onClick={() => onNavigatePage('academy')}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#0F766E] hover:bg-[#0D9488] rounded-lg transition-colors cursor-pointer"
                        >
                          Explore Learning Academy
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  )}

                  {authError && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    >
                      {authError}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="reset-email"
                      className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="reset-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                      placeholder="you@example.org"
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-xs text-red-700">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] disabled:opacity-60 rounded-xl transition-colors cursor-pointer min-h-[44px]"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                          Sending Reset Link...
                        </>
                      ) : (
                        <>
                          <KeyRound className="w-4 h-4" aria-hidden="true" />
                          Send Password Reset Link
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setAuthError('');
                        setPhase2Notice('');
                        setFieldErrors({});
                        setMode('login');
                      }}
                      className="w-full py-2.5 text-sm font-medium text-slate-600 hover:text-[#0B1F3A] cursor-pointer min-h-[40px]"
                    >
                      Back to Sign In
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-1">
                  Learner Portal
                </p>
                <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F3A]">
                  Sign In to Your Account
                </h1>
                <p className="text-sm text-slate-600 mt-1">
                  Access your Global Skills Passport dashboard and learning
                  pathways.
                </p>
              </div>

              {phase2Notice && (
                <div
                  role="status"
                  className="rounded-xl border border-teal-200 bg-[#F0FDFA] p-4 flex items-start gap-3"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="space-y-2.5">
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

              {authError && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                >
                  {authError}
                </div>
              )}

              <form onSubmit={handleLoginSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="login-email"
                    className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="login-email"
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
                    htmlFor="login-password"
                    className="block text-xs font-semibold text-[#0B1F3A] mb-1.5"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="login-password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-invalid={Boolean(fieldErrors.password)}
                      className="w-full pl-3.5 pr-11 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#0D9488] focus:outline-none min-h-[44px]"
                      placeholder="Enter your password"
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

                <div className="flex items-center justify-between gap-4">
                  <label className="inline-flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 accent-[#0F766E] rounded"
                    />
                    <span>Remember me</span>
                  </label>

                  <button
                    type="button"
                    onClick={() => {
                      setAuthError('');
                      setPhase2Notice('');
                      setFieldErrors({});
                      setMode('forgot_password');
                    }}
                    className="text-sm font-medium text-[#0F766E] hover:text-[#0B1F3A] underline underline-offset-4 cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] disabled:opacity-60 rounded-xl transition-colors cursor-pointer min-h-[46px]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      Signing In...
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4" aria-hidden="true" />
                      Sign In
                    </>
                  )}
                </button>
              </form>

              <div className="pt-5 border-t border-slate-200 text-center">
                <p className="text-sm text-slate-600">
                  New to Global Skills Passport?{' '}
                  <button
                    type="button"
                    onClick={() => onNavigatePage('register')}
                    className="font-semibold text-[#0F766E] hover:text-[#0B1F3A] underline underline-offset-4 cursor-pointer"
                  >
                    Create a new account
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
