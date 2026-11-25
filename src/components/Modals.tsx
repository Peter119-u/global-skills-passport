import { useEffect, useState, type FormEvent } from 'react';
import { Award, CheckCircle2, Clock, Database, Layers, ShieldAlert, X } from 'lucide-react';
import { PHASE_2_ARCHITECTURE_MODULES } from '../lib/supabaseArchitecture';
import type { LearningPathway, PortalAccessIntent, UserRole } from '../types/platform';

interface PathwayDetailModalProps {
  pathway: LearningPathway | null;
  onClose: () => void;
  onExpressInterest: (intent: PortalAccessIntent) => void;
  onOpenSampleLesson?: (pathway: LearningPathway) => void;
}

export function PathwayDetailModal({
  pathway,
  onClose,
  onExpressInterest,
  onOpenSampleLesson,
}: PathwayDetailModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!pathway) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pathway-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 overflow-y-auto"
    >
      <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#0F766E]">
              {pathway.code} · {pathway.categoryLabel}
            </p>
            <h2
              id="pathway-modal-title"
              className="font-display text-2xl font-bold text-[#0B1F3A]"
            >
              {pathway.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close pathway syllabus"
            className="w-10 h-10 rounded-lg text-slate-500 hover:text-[#0B1F3A] hover:bg-slate-100 flex items-center justify-center shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {pathway.summary}
          </p>

          <div className="flex flex-wrap gap-6 text-xs text-slate-600 py-3 px-4 rounded-xl bg-[#F7F9FC] border border-slate-200 tabular-nums">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#0D9488]" aria-hidden="true" />
              Estimated Duration: {pathway.estimatedWeeks} Weeks
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#0D9488]" aria-hidden="true" />
              {pathway.modules.length} Structured Modules
            </span>
            <span>Level: {pathway.level}</span>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-[#0B1F3A] mb-3">
              Structured Course Modules
            </h3>
            <div className="space-y-3">
              {pathway.modules.map((mod) => (
                <div
                  key={mod.id}
                  className="rounded-xl border border-slate-200 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#0B1F3A]">
                      0{mod.order}. {mod.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Practical Deliverable: {mod.deliverable}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-slate-500 whitespace-nowrap shrink-0 tabular-nums">
                    {mod.durationWeeks} Weeks · {mod.estimatedHours} Hours
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-[#F7F9FC] p-4 space-y-2">
            <p className="text-xs font-bold text-[#0B1F3A]">
              Capstone Competency Project
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {pathway.practicalCapstone}
            </p>
          </div>

          <div className="flex items-start gap-3 text-xs text-slate-600">
            <Award className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed">
              {pathway.partnerRecognitionNote} Formal recognized certifications
              are issued solely through accredited institutions and approved
              awarding partners.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 px-6 py-4 bg-[#F7F9FC] flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-[#0B1F3A] cursor-pointer min-h-[44px]"
          >
            Close
          </button>
          <div className="flex flex-wrap items-center gap-2.5">
            {onOpenSampleLesson && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenSampleLesson(pathway);
                }}
                className="px-4 py-2.5 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0D9488] rounded-xl transition-colors cursor-pointer min-h-[44px]"
              >
                Start Lessons &amp; Quiz
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                const title = pathway.title;
                onClose();
                onExpressInterest({ mode: 'pathway_cohort', pathwayTitle: title });
              }}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl transition-colors cursor-pointer min-h-[44px]"
            >
              Register Cohort Interest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface UpcomingPortalModalProps {
  intent: PortalAccessIntent | null;
  onClose: () => void;
}

export function UpcomingPortalModal({
  intent,
  onClose,
}: UpcomingPortalModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>('learner');
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!intent) return null;

  const headingByMode: Record<PortalAccessIntent['mode'], string> = {
    sign_in: 'Learner & Partner Sign In (Phase 2)',
    get_started: 'Get Started with Global Skills Passport',
    start_learning: 'Start Learning — Upcoming Cohort Onboarding',
    pathway_cohort: `Cohort Interest: ${intent.pathwayTitle ?? 'Learning Pathway'}`,
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (fullName.trim().length < 2) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFormError('Please provide a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 overflow-y-auto"
    >
      <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-[#0F766E]">
              Upcoming Functionality · Phase 2 Rollout
            </p>
            <h2
              id="portal-modal-title"
              className="font-display text-xl sm:text-2xl font-bold text-[#0B1F3A]"
            >
              {headingByMode[intent.mode]}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close portal preview"
            className="w-10 h-10 rounded-lg text-slate-500 hover:text-[#0B1F3A] hover:bg-slate-100 flex items-center justify-center shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="rounded-xl border border-slate-200 bg-[#F7F9FC] p-4 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#0B1F3A] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-slate-600 leading-relaxed">
              This is the Phase 1 public platform foundation. Live learner
              authentication, student dashboards, assessment submissions, and
              verifiable credential lookup are intentionally scheduled for
              Phase 2 with Supabase integration—no simulated logins are active
              here.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F3A] mb-3">
              <Database className="w-4 h-4 text-[#0F766E]" aria-hidden="true" />
              <span>Planned Phase 2 Platform Capabilities</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PHASE_2_ARCHITECTURE_MODULES.map((mod) => (
                <div
                  key={mod.moduleName}
                  className="rounded-xl border border-slate-200 p-3.5"
                >
                  <p className="text-xs font-bold text-[#0B1F3A] mb-1">
                    {mod.moduleName}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <h3 className="font-display text-base font-bold text-[#0B1F3A] mb-1">
              Early Cohort &amp; Partner Notification
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              Preview how onboarding role selection will be structured when
              Phase 2 registration opens.
            </p>

            {submitted ? (
              <div className="rounded-xl border border-teal-200 bg-[#F0FDFA] p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm text-slate-700 space-y-1">
                  <p className="font-semibold text-[#0B1F3A]">
                    Interest preview confirmed for {fullName}
                  </p>
                  <p>
                    Selected role: <span className="capitalize font-medium">{role}</span>.
                    Live account provisioning will open in Phase 2 via Supabase Auth.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                {formError && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-xs text-red-800"
                  >
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="portal-name"
                      className="block text-xs font-semibold text-[#0B1F3A] mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      id="portal-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:border-[#0D9488] focus:outline-none min-h-[42px]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="portal-email"
                      className="block text-xs font-semibold text-[#0B1F3A] mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      id="portal-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.org"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:border-[#0D9488] focus:outline-none min-h-[42px]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="portal-role"
                    className="block text-xs font-semibold text-[#0B1F3A] mb-1"
                  >
                    Planned Account Role
                  </label>
                  <select
                    id="portal-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value as UserRole)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:border-[#0D9488] focus:outline-none min-h-[42px]"
                  >
                    <option value="learner">Refugee or Displaced Learner</option>
                    <option value="mentor">Teacher or Professional Mentor</option>
                    <option value="employer">Employer or Recruitment Partner</option>
                    <option value="institution">University or Accredited Institution</option>
                  </select>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#0B1F3A] cursor-pointer min-h-[42px]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-lg transition-colors cursor-pointer min-h-[42px]"
                  >
                    Confirm Interest Preview
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
