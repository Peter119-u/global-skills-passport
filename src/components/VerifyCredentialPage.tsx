import { useEffect, useState, type FormEvent } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Code2,
  FileSearch,
  Lock,
  Printer,
  RotateCcw,
  Search,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
  X,
} from 'lucide-react';
import {
  SAMPLE_CREDENTIAL_SUMMARIES,
  VERIFIED_CREDENTIALS,
} from '../data/verifiedCredentials';
import type {
  PublicPageId,
  VerifiedCredentialRecord,
  VerifiedPortfolioArtifact,
} from '../types/platform';

interface VerifyCredentialPageProps {
  onNavigatePage: (page: PublicPageId, sectionId?: string) => void;
}

export function VerifyCredentialPage({
  onNavigatePage,
}: VerifyCredentialPageProps) {
  const [queryInput, setQueryInput] = useState('');
  const [searchedId, setSearchedId] = useState<string | null>(null);
  const [verifiedRecord, setVerifiedRecord] =
    useState<VerifiedCredentialRecord | null>(null);
  const [verifiedTimestamp, setVerifiedTimestamp] = useState<string | null>(
    null
  );
  const [inputError, setInputError] = useState('');
  const [activeArtifact, setActiveArtifact] =
    useState<VerifiedPortfolioArtifact | null>(null);

  const runVerificationLookup = (rawId: string) => {
    const normalized = rawId.trim().toUpperCase();
    setInputError('');

    if (!normalized) {
      setInputError(
        'Please enter a Credential ID (for example, GSP-2026-8492) or select a sample record below.'
      );
      return;
    }

    setQueryInput(normalized);
    setSearchedId(normalized);
    setActiveArtifact(null);

    const match = VERIFIED_CREDENTIALS[normalized] ?? null;
    setVerifiedRecord(match);
    setVerifiedTimestamp(
      match
        ? new Date().toLocaleString('en-GB', {
            dateStyle: 'medium',
            timeStyle: 'medium',
            timeZone: 'UTC',
          }) + ' UTC'
        : null
    );
  };

  // Support direct URL ?id=GSP-2026-8492 if shared by an employer or learner
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const initialId = params.get('id');
    if (initialId && initialId.trim()) {
      runVerificationLookup(initialId);
    }
  }, []);

  useEffect(() => {
    if (!activeArtifact) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveArtifact(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeArtifact]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    runVerificationLookup(queryInput);
  };

  const handleClear = () => {
    setQueryInput('');
    setSearchedId(null);
    setVerifiedRecord(null);
    setVerifiedTimestamp(null);
    setInputError('');
    setActiveArtifact(null);
  };

  const isNotFound = searchedId !== null && verifiedRecord === null;

  return (
    <main className="bg-[#F7F9FC] min-h-[82vh] py-10 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Breadcrumb */}
        <div className="no-print flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onNavigatePage('home', 'top')}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0B1F3A] cursor-pointer min-h-[40px]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Home Overview
          </button>
          <span className="font-mono text-xs text-slate-500">
            /verify · Public Credential Verification Registry
          </span>
        </div>

        {/* VERIFICATION SEARCH CARD */}
        <section
          aria-labelledby="verify-heading"
          className="no-print bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 space-y-6"
        >
          <div className="max-w-2xl space-y-2.5">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E]">
              Employer &amp; Institutional Verification
            </p>
            <h1
              id="verify-heading"
              className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A] text-balance"
            >
              Verify a Global Skills Passport Credential
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Enter a learner’s Credential ID below to inspect verified module
              competency scores, rubric-graded capstone evaluations, assessor
              endorsements, and privacy-safe portfolio artifacts.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-3">
            {inputError && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
              >
                {inputError}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search
                  className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="credential-id-input"
                  type="text"
                  value={queryInput}
                  onChange={(e) => setQueryInput(e.target.value)}
                  placeholder="Enter Credential ID (e.g., GSP-2026-8492)"
                  aria-label="Credential ID"
                  className="w-full pl-11 pr-4 py-3 text-sm sm:text-base font-mono uppercase tracking-wide bg-[#F7F9FC] border border-slate-300 rounded-xl text-[#0B1F3A] placeholder:text-slate-400 placeholder:normal-case placeholder:font-sans placeholder:tracking-normal focus:border-[#0D9488] focus:bg-white focus:outline-none min-h-[48px]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[48px]"
              >
                <ShieldCheck className="w-4 h-4 text-teal-300" aria-hidden="true" />
                Verify Credential
              </button>

              {(searchedId || queryInput) && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-600 border border-slate-300 rounded-xl hover:bg-slate-50 whitespace-nowrap shrink-0 cursor-pointer min-h-[48px]"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  Clear
                </button>
              )}
            </div>
          </form>

          {/* 3 Clickable Sample Credential IDs */}
          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Try a Sample Verified Credential ID
            </p>
            <div className="flex flex-wrap gap-2.5">
              {SAMPLE_CREDENTIAL_SUMMARIES.map((sample) => {
                const isActive = verifiedRecord?.credentialId === sample.id;
                return (
                  <button
                    key={sample.id}
                    type="button"
                    onClick={() => runVerificationLookup(sample.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl border transition-colors cursor-pointer min-h-[40px] ${
                      isActive
                        ? 'border-[#0D9488] bg-[#F0FDFA] text-[#0B1F3A] font-semibold'
                        : 'border-slate-200 bg-[#F7F9FC] text-slate-700 hover:border-[#0D9488] hover:bg-white'
                    }`}
                  >
                    <span className="font-mono font-semibold text-[#0F766E] tabular-nums">
                      {sample.id}
                    </span>
                    <span className="text-slate-400" aria-hidden="true">
                      ·
                    </span>
                    <span>{sample.pathway}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* CREDENTIAL NOT FOUND STATE */}
        {isNotFound && (
          <section
            role="status"
            aria-labelledby="not-found-heading"
            className="no-print bg-white rounded-2xl border border-amber-200 p-6 sm:p-8 space-y-4"
          >
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  Verification Status: No Match Found
                </p>
                <h2
                  id="not-found-heading"
                  className="font-display text-xl font-bold text-[#0B1F3A]"
                >
                  Credential Not Found for &ldquo;{searchedId}&rdquo;
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                  We could not locate a public verification record matching that
                  identifier. Please double-check the standard GSP credential
                  format (<span className="font-mono">GSP-YYYY-XXXX</span>, e.g.,{' '}
                  <span className="font-mono">GSP-2026-8492</span>) and ensure no
                  extra characters were included.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
              <p>
                Need manual verification assistance for an older or partner-issued
                record?
              </p>
              <button
                type="button"
                onClick={() => onNavigatePage('contact')}
                className="inline-flex items-center gap-1.5 font-semibold text-[#0F766E] hover:text-[#0B1F3A] cursor-pointer"
              >
                Contact GSP Verification Support
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </section>
        )}

        {/* INITIAL EMPTY GUIDANCE WHEN NOTHING SEARCHED YET */}
        {!searchedId && (
          <section className="no-print bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-1.5">
                <p className="font-mono text-xs text-[#0F766E]">01</p>
                <h2 className="font-display text-base font-bold text-[#0B1F3A]">
                  Rubric-Backed Transparency
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Every verified passport exposes exact module scores, capstone
                  rubric criteria, and assessor feedback rather than vague badges.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-mono text-xs text-[#0F766E]">02</p>
                <h2 className="font-display text-base font-bold text-[#0B1F3A]">
                  Inspectable Portfolio Proof
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Review real code excerpts, SQL models, and security artifacts
                  produced during the learner’s final assessment.
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="font-mono text-xs text-[#0F766E]">03</p>
                <h2 className="font-display text-base font-bold text-[#0B1F3A]">
                  Privacy-Preserving by Default
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Verification records omit personal contact details, exact
                  addresses, and sensitive immigration documentation.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* OFFICIAL PRINTABLE VERIFIED SKILL PASSPORT DOSSIER */}
        {verifiedRecord && (
          <div className="space-y-6">
            {/* Screen Print Action Bar */}
            <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0B1F3A] text-white rounded-2xl px-6 py-4">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  className="w-5 h-5 text-teal-300 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm">
                  Official verification record loaded for{' '}
                  <span className="font-semibold">
                    {verifiedRecord.learnerSummary.fullName}
                  </span>{' '}
                  (
                  <span className="font-mono text-teal-300 tabular-nums">
                    {verifiedRecord.credentialId}
                  </span>
                  ).
                </p>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#0B1F3A] bg-white hover:bg-slate-100 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[42px]"
              >
                <Printer className="w-4 h-4 text-[#0F766E]" aria-hidden="true" />
                Print / Save Official Verification PDF
              </button>
            </div>

            <article className="print-container bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8">
              {/* 1. VERIFICATION STATUS HEADER */}
              <header className="pb-6 border-b border-slate-200 space-y-5">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-900 text-xs font-semibold">
                      <CheckCircle2
                        className="w-4 h-4 text-emerald-700 shrink-0"
                        aria-hidden="true"
                      />
                      <span>Verified Authentic Credential</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F3A]">
                      Global Skills Passport — Verified Skill Dossier
                    </h2>
                    <p className="text-sm text-slate-600">
                      {verifiedRecord.pathwayCode} ·{' '}
                      {verifiedRecord.pathwayTitle}
                    </p>
                  </div>

                  <div className="text-left md:text-right space-y-1 shrink-0">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                      Credential ID
                    </p>
                    <p className="font-mono text-lg font-bold text-[#0B1F3A] tabular-nums">
                      {verifiedRecord.credentialId}
                    </p>
                    <p className="text-xs text-slate-500 tabular-nums">
                      Issued: {verifiedRecord.issueDate}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-xl border border-slate-200 bg-[#F7F9FC] p-4 text-xs sm:text-sm">
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-500">
                      Issuing Partner / Awarding Body
                    </p>
                    <p className="font-semibold text-[#0B1F3A]">
                      {verifiedRecord.issuingPartner}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-slate-500">
                      Verification Timestamp
                    </p>
                    <p className="font-mono text-[#0B1F3A] tabular-nums">
                      {verifiedTimestamp}
                    </p>
                  </div>
                  <div className="md:col-span-2 pt-2 border-t border-slate-200 space-y-1">
                    <p className="font-semibold text-slate-500">
                      Cryptographic Registry Hash
                    </p>
                    <p className="font-mono text-xs text-slate-700 break-all">
                      {verifiedRecord.verificationHash}
                    </p>
                  </div>
                </div>
              </header>

              {/* 2. PRIVACY-SAFE LEARNER PROFILE SUMMARY */}
              <section className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
                    <UserCheck className="w-4 h-4" aria-hidden="true" />
                    <span>Learner Profile Summary (Privacy-Safe)</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                    <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                    Sensitive personal contact &amp; legal records omitted
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="rounded-xl border border-slate-200 p-4 space-y-1">
                    <p className="text-xs text-slate-500 font-medium">
                      Credential Holder
                    </p>
                    <p className="font-display text-base font-bold text-[#0B1F3A]">
                      {verifiedRecord.learnerSummary.fullName}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 space-y-1">
                    <p className="text-xs text-slate-500 font-medium">
                      Primary Pathway
                    </p>
                    <p className="text-sm font-semibold text-[#0B1F3A]">
                      {verifiedRecord.pathwayTitle}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 space-y-1">
                    <p className="text-xs text-slate-500 font-medium">
                      Cohort / Region
                    </p>
                    <p className="text-sm font-semibold text-[#0B1F3A]">
                      {verifiedRecord.learnerSummary.cohortRegion}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 space-y-1">
                    <p className="text-xs text-slate-500 font-medium">
                      Verified Readiness Level
                    </p>
                    <p className="text-sm font-semibold text-[#0F766E]">
                      {verifiedRecord.learnerSummary.readinessLevel}
                    </p>
                    <p className="text-xs text-slate-500 tabular-nums">
                      {verifiedRecord.learnerSummary.studyHoursCompleted} Verified
                      Study Hours
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. COMPETENCY & RUBRIC BREAKDOWN */}
              <section className="space-y-6 pt-2 border-t border-slate-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* 4 Pathway Modules Scores */}
                  <div className="lg:col-span-5 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
                        Modules 1–4 Competency Scores
                      </p>
                      <h3 className="font-display text-lg font-bold text-[#0B1F3A] mt-0.5">
                        Pathway Module Performance
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {verifiedRecord.moduleScores.map((mod) => (
                        <div
                          key={mod.moduleOrder}
                          className="rounded-xl border border-slate-200 p-4 space-y-2"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="font-mono text-xs text-slate-500 tabular-nums">
                                Module 0{mod.moduleOrder}
                              </p>
                              <p className="text-sm font-bold text-[#0B1F3A]">
                                {mod.moduleTitle}
                              </p>
                            </div>
                            <span className="font-mono text-sm font-bold text-[#0F766E] tabular-nums shrink-0">
                              {mod.scorePercent}%
                            </span>
                          </div>
                          <div
                            role="progressbar"
                            aria-valuenow={mod.scorePercent}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${mod.moduleTitle} score`}
                            className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden"
                          >
                            <div
                              className="h-full bg-[#0D9488]"
                              style={{ width: `${mod.scorePercent}%` }}
                            />
                          </div>
                          <p className="text-xs text-slate-600">
                            Verified Deliverable: {mod.deliverable}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Capstone Project Evaluation & Assessor Endorsement */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
                          Final Assessment Breakdown
                        </p>
                        <h3 className="font-display text-lg font-bold text-[#0B1F3A] mt-0.5">
                          Capstone: {verifiedRecord.capstoneTitle}
                        </h3>
                      </div>
                      <p className="font-mono text-sm font-bold text-[#0B1F3A] tabular-nums shrink-0">
                        Composite: {verifiedRecord.capstoneOverallPercent}% ·{' '}
                        {verifiedRecord.capstoneAwardLevel}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {verifiedRecord.capstoneCriteria.map((item) => (
                        <div
                          key={item.criterion}
                          className="rounded-xl border border-slate-200 p-4 space-y-1.5"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-bold text-[#0B1F3A]">
                              {item.criterion}{' '}
                              <span className="font-mono text-xs font-normal text-slate-500 tabular-nums">
                                ({item.weightPercent}% Weight)
                              </span>
                            </p>
                            <span className="font-mono text-sm font-bold text-[#0F766E] tabular-nums shrink-0">
                              {item.scorePercent}%
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.assessorNote}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Verified Assessor Endorsement */}
                    <div className="rounded-xl border border-teal-200 bg-[#F0FDFA] p-5 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                        <Award className="w-4 h-4" aria-hidden="true" />
                        <span>Verified Assessor Endorsement</span>
                      </div>
                      <p className="text-sm text-slate-800 leading-relaxed">
                        &ldquo;{verifiedRecord.assessorEndorsement}&rdquo;
                      </p>
                      <p className="text-xs font-semibold text-[#0B1F3A] pt-1">
                        Endorsed by: {verifiedRecord.assessorNameAndRole}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 4. VERIFIED CAPSTONE PORTFOLIO ARTIFACTS */}
              <section className="space-y-4 pt-6 border-t border-slate-200">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
                    Inspectable Evidence of Work
                  </p>
                  <h3 className="font-display text-lg font-bold text-[#0B1F3A] mt-0.5">
                    Verified Capstone Portfolio Artifacts
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {verifiedRecord.portfolioArtifacts.map((artifact) => (
                    <button
                      key={artifact.id}
                      type="button"
                      onClick={() => setActiveArtifact(artifact)}
                      className="text-left rounded-xl border border-slate-200 hover:border-[#0D9488] hover:shadow-sm bg-[#F7F9FC] hover:bg-white p-5 flex flex-col justify-between gap-4 transition-all cursor-pointer group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-mono text-[#0F766E]">
                            {artifact.artifactType}
                          </span>
                          <Code2
                            className="w-4 h-4 text-slate-400 group-hover:text-[#0F766E]"
                            aria-hidden="true"
                          />
                        </div>
                        <h4 className="font-display text-base font-bold text-[#0B1F3A] group-hover:text-[#0F766E]">
                          {artifact.title}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {artifact.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-200 space-y-2.5 w-full">
                        <p className="font-mono text-xs text-slate-500">
                          Tools: {artifact.toolsUsed.join(' · ')}
                        </p>
                        <span className="no-print inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] group-hover:text-[#0F766E]">
                          <FileSearch className="w-3.5 h-3.5" aria-hidden="true" />
                          Inspect Project Artifact Preview
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              {/* Official Print Footer Disclosure */}
              <footer className="pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p>
                  Accreditation Notice: GSP completion records verify practical
                  coursework and rubric-evaluated assessments. Recognized degrees
                  or regulated credentials are awarded exclusively by named
                  accredited partners.
                </p>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="no-print inline-flex items-center gap-1.5 font-semibold text-[#0F766E] hover:text-[#0B1F3A] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" aria-hidden="true" />
                  Print Official Record
                </button>
              </footer>
            </article>
          </div>
        )}
      </div>

      {/* ARTIFACT PREVIEW MODAL */}
      {activeArtifact && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="artifact-modal-title"
          className="no-print fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 overflow-y-auto"
        >
          <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-mono text-[#0F766E]">
                  {activeArtifact.artifactType} · Verified Artifact Preview
                </p>
                <h3
                  id="artifact-modal-title"
                  className="font-display text-xl font-bold text-[#0B1F3A]"
                >
                  {activeArtifact.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveArtifact(null)}
                aria-label="Close artifact preview"
                className="w-10 h-10 rounded-lg text-slate-500 hover:text-[#0B1F3A] hover:bg-slate-100 flex items-center justify-center shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeArtifact.summary}
              </p>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Verified Deliverable Highlights
                </p>
                <ul className="space-y-2">
                  {activeArtifact.highlights.map((hl) => (
                    <li
                      key={hl}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-950 text-slate-100 overflow-hidden">
                <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-teal-300">
                  {activeArtifact.previewSnippetLabel}
                </div>
                <pre className="p-4 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed whitespace-pre-wrap">
                  <code>{activeArtifact.previewSnippet}</code>
                </pre>
              </div>

              <p className="font-mono text-xs text-slate-500">
                Verified Stack: {activeArtifact.toolsUsed.join(' · ')}
              </p>
            </div>

            <div className="border-t border-slate-200 px-6 py-4 bg-[#F7F9FC] flex justify-end">
              <button
                type="button"
                onClick={() => setActiveArtifact(null)}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl cursor-pointer min-h-[42px]"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
