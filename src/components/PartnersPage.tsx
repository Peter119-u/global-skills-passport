import { useState, type FormEvent } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Globe,
  Printer,
  ShieldCheck,
  Users2,
} from 'lucide-react';
import { LEARNING_PATHWAYS } from '../data/platformContent';
import {
  ACCOUNTABILITY_PILLARS,
  PARTNER_TRACKS,
  type PartnerTrackSpec,
} from '../data/partnersContent';
import {
  generatePartnerReferenceId,
  savePartnerInquiry,
} from '../lib/partnerStorage';
import type {
  PartnerInquiryRecord,
  PartnerTrackId,
  PublicPageId,
} from '../types/platform';

interface PartnersPageProps {
  onNavigatePage: (page: PublicPageId, sectionId?: string) => void;
}

const TRACK_ICONS: Record<PartnerTrackId, typeof Users2> = {
  mentor: Users2,
  employer: Briefcase,
  institution: Building2,
};

const TRACK_LABELS: Record<PartnerTrackId, string> = {
  mentor: 'Industry Mentor & Assessor',
  employer: 'Global Employer / Hiring Partner',
  institution: 'University, NGO or Credentialing Body',
};

function buildPartnershipOverviewText(
  submittedRecord: PartnerInquiryRecord | null
): string {
  const headerLines = [
    'GLOBAL SKILLS PASSPORT (GSP) – EDUCATION WITHOUT BORDERS',
    'OFFICIAL PARTNERSHIP & MENTORSHIP OVERVIEW',
    '====================================================================',
    '',
  ];

  const inquirySection = submittedRecord
    ? [
        'SUBMITTED PARTNER INQUIRY SUMMARY',
        `Reference ID:    ${submittedRecord.referenceId}`,
        `Submitted On:    ${new Date(submittedRecord.submittedAt).toUTCString()}`,
        `Contact:         ${submittedRecord.fullName} (${submittedRecord.titleRole})`,
        `Organization:    ${submittedRecord.organizationName || 'Independent / Individual Mentor'}`,
        `Website:         ${submittedRecord.website || 'Not provided'}`,
        `Work Email:      ${submittedRecord.workEmail}`,
        `Country / TZ:    ${submittedRecord.countryTimezone}`,
        `Selected Track:  ${TRACK_LABELS[submittedRecord.track]}`,
        `Skill Domains:   ${submittedRecord.skillDomains.join(', ')}`,
        `Collaboration:   ${submittedRecord.collaborationMessage}`,
        '',
        '--------------------------------------------------------------------',
        '',
      ]
    : [];

  const trackLines = PARTNER_TRACKS.flatMap((t) => [
    `${t.title.toUpperCase()} (${t.commitment})`,
    t.summary,
    'Contributions:',
    ...t.contributions.map((c) => `  - ${c}`),
    'Next Steps:',
    ...t.onboardingSteps.map((s, idx) => `  ${idx + 1}. ${s}`),
    '',
  ]);

  const accountabilityLines = [
    'VERIFICATION & ACCOUNTABILITY STANDARDS',
    ...ACCOUNTABILITY_PILLARS.map(
      (p) => `${p.code}. ${p.title}: ${p.description}`
    ),
    '',
    'Contact: partnerships@globalskillspassport.org (Placeholder Governance Contact)',
  ];

  return [...headerLines, ...inquirySection, ...trackLines, ...accountabilityLines].join(
    '\n'
  );
}

export function PartnersPage({ onNavigatePage }: PartnersPageProps) {
  const [activeTrackTab, setActiveTrackTab] =
    useState<PartnerTrackId>('mentor');
  const [showOverviewSheet, setShowOverviewSheet] = useState(false);

  // Inquiry Form State
  const [fullName, setFullName] = useState('');
  const [titleRole, setTitleRole] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [website, setWebsite] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [countryTimezone, setCountryTimezone] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<PartnerTrackId>('mentor');
  const [selectedDomains, setSelectedDomains] = useState<string[]>([
    'Software Development',
  ]);
  const [collaborationMessage, setCollaborationMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [submittedRecord, setSubmittedRecord] =
    useState<PartnerInquiryRecord | null>(null);

  const activeTrack: PartnerTrackSpec =
    PARTNER_TRACKS.find((t) => t.id === activeTrackTab) ?? PARTNER_TRACKS[0];

  const handleApplyForTrack = (trackId: PartnerTrackId) => {
    setActiveTrackTab(trackId);
    setSelectedTrack(trackId);
    setSubmittedRecord(null);
    const formEl = document.getElementById('partner-inquiry-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleDomain = (pathwayTitle: string) => {
    setSelectedDomains((prev) =>
      prev.includes(pathwayTitle)
        ? prev.filter((item) => item !== pathwayTitle)
        : [...prev, pathwayTitle]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError('');

    const cleanName = fullName.trim();
    const cleanRole = titleRole.trim();
    const cleanOrg = organizationName.trim();
    const cleanWebsite = website.trim();
    const cleanEmail = workEmail.trim();
    const cleanCountryTz = countryTimezone.trim();
    const cleanMsg = collaborationMessage.trim();

    if (cleanName.length < 2) {
      setFormError('Please enter your full name.');
      return;
    }
    if (cleanRole.length < 2) {
      setFormError('Please enter your current title or professional role.');
      return;
    }
    if (selectedTrack !== 'mentor' && cleanOrg.length < 2) {
      setFormError(
        'Please enter your organization, company, or institution name.'
      );
      return;
    }
    if (cleanWebsite.length > 0 && !/^https?:\/\/.+\..+/i.test(cleanWebsite)) {
      setFormError(
        'If providing a website URL, please include https:// or http:// (e.g., https://organization.org).'
      );
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setFormError('Please provide a valid work or contact email address.');
      return;
    }
    if (cleanCountryTz.length < 2) {
      setFormError(
        'Please specify your country and primary time zone (e.g., Germany · CET / UTC+1).'
      );
      return;
    }
    if (selectedDomains.length === 0) {
      setFormError(
        'Please select at least one primary skill domain of interest.'
      );
      return;
    }
    if (cleanMsg.length < 15) {
      setFormError(
        'Please share a brief note (at least 15 characters) describing how you would like to collaborate.'
      );
      return;
    }

    const record: PartnerInquiryRecord = {
      referenceId: generatePartnerReferenceId(),
      submittedAt: new Date().toISOString(),
      fullName: cleanName,
      titleRole: cleanRole,
      organizationName: cleanOrg,
      website: cleanWebsite,
      workEmail: cleanEmail,
      countryTimezone: cleanCountryTz,
      track: selectedTrack,
      skillDomains: selectedDomains,
      collaborationMessage: cleanMsg,
    };

    savePartnerInquiry(record);
    setSubmittedRecord(record);
    setShowOverviewSheet(true);
    window.scrollTo({
      top:
        (document.getElementById('partner-inquiry-form')?.offsetTop ?? 200) -
        80,
      behavior: 'smooth',
    });
  };

  const handleDownloadOverview = () => {
    const content = buildPartnershipOverviewText(submittedRecord);
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = submittedRecord
      ? `gsp-partnership-overview-${submittedRecord.referenceId.toLowerCase()}.txt`
      : 'gsp-partnership-overview.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleResetForm = () => {
    setSubmittedRecord(null);
    setFormError('');
    setCollaborationMessage('');
  };

  return (
    <main className="bg-[#F7F9FC] min-h-[82vh] py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
            /partners · Mentors, Employers &amp; Institutions
          </span>
        </div>

        {/* Hero / Editorial Intro */}
        <section className="no-print bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E]">
                Global Partnerships &amp; Mentorship Network
              </p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0B1F3A] leading-[1.15] text-balance">
                Build Credible Borderless Pathways With Global Skills Passport
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Connect your technical expertise, remote hiring pipelines, or
                institutional accreditation frameworks with resilient learners
                demonstrating real, rubric-verified professional capabilities.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
              <button
                type="button"
                onClick={() => handleApplyForTrack(activeTrackTab)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
              >
                Submit Partnership Inquiry
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleDownloadOverview}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B1F3A] bg-white border border-slate-300 hover:border-[#0D9488] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
              >
                <Download className="w-4 h-4 text-[#0F766E]" aria-hidden="true" />
                Download Partnership Overview
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: THREE CLEAR PARTNER TRACKS (INTERACTIVE TABS + COMPARISON CARDS) */}
        <section aria-labelledby="partner-tracks-heading" className="no-print space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E]">
                Three Collaboration Tracks
              </p>
              <h2
                id="partner-tracks-heading"
                className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F3A]"
              >
                How Organizations &amp; Professionals Partner
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Inspect each partnership model below to review scope, time
                expectations, and how GSP supports every partner track.
              </p>
            </div>

            {/* Interactive Segmented Track Selector */}
            <div
              role="tablist"
              aria-label="Select partner track"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-xl self-start lg:self-auto"
            >
              {PARTNER_TRACKS.map((track) => {
                const isSelected = activeTrackTab === track.id;
                return (
                  <button
                    key={track.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveTrackTab(track.id)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] ${
                      isSelected
                        ? 'bg-white text-[#0B1F3A] shadow-xs'
                        : 'text-slate-600 hover:text-[#0B1F3A]'
                    }`}
                  >
                    {track.shortLabel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick 3-Track Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PARTNER_TRACKS.map((track) => {
              const Icon = TRACK_ICONS[track.id];
              const isSelected = activeTrackTab === track.id;

              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => setActiveTrackTab(track.id)}
                  className={`text-left rounded-2xl border p-6 flex flex-col justify-between transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#0D9488] ring-1 ring-[#0D9488]'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isSelected
                            ? 'bg-[#0F766E] text-white'
                            : 'bg-[#0B1F3A]/5 text-[#0B1F3A]'
                        }`}
                      >
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-medium text-[#0F766E]">
                        {isSelected ? 'Selected Track' : 'Inspect Track'}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-slate-500">
                      {track.audienceLabel}
                    </p>
                    <h3 className="font-display text-lg font-bold text-[#0B1F3A]">
                      {track.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {track.summary}
                    </p>
                  </div>

                  <p className="mt-5 pt-3 border-t border-slate-100 text-xs font-mono text-slate-500 tabular-nums">
                    {track.commitment}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Track Detailed Breakdown Panel */}
          <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="space-y-1.5">
                <p className="text-xs font-mono text-[#0F766E] tabular-nums">
                  {activeTrack.audienceLabel} · {activeTrack.commitment}
                </p>
                <h3 className="font-display text-2xl font-bold text-[#0B1F3A]">
                  {activeTrack.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => handleApplyForTrack(activeTrack.id)}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0D9488] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
              >
                {activeTrack.primaryCTA}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                  Key Contributions &amp; Impact
                </h4>
                <ul className="space-y-3">
                  {activeTrack.contributions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-[#F7F9FC] p-5 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                    How GSP Supports You
                  </h4>
                  <ul className="space-y-2">
                    {activeTrack.gspSupport.map((support) => (
                      <li
                        key={support}
                        className="text-sm text-slate-700 leading-relaxed flex items-start gap-2"
                      >
                        <span
                          className="font-mono text-xs text-[#0F766E] mt-0.5 shrink-0"
                          aria-hidden="true"
                        >
                          ·
                        </span>
                        <span>{support}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-600">
                  <Clock className="w-4 h-4 text-[#0D9488] shrink-0" aria-hidden="true" />
                  <span>
                    Onboarding timeline: initial review within 3–5 business days.
                  </span>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* SECTION 3: TRUST & ACCOUNTABILITY ("How Verification & Accountability Work") */}
        <section
          aria-labelledby="verification-accountability-heading"
          className="no-print bg-[#0B1F3A] text-white rounded-2xl p-6 sm:p-10 lg:p-12 space-y-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-teal-300">
                <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                <span>Governance &amp; Learner Protection</span>
              </div>
              <h2
                id="verification-accountability-heading"
                className="font-display text-2xl sm:text-3xl font-bold tracking-tight"
              >
                How Verification &amp; Accountability Work
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Credible international pathways require strong protections for
                displaced learners alongside honest competency standards for
                employers and universities.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigatePage('academy')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#0B1F3A] bg-white hover:bg-slate-100 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[42px]"
            >
              Inspect Public Grading Rubrics
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ACCOUNTABILITY_PILLARS.map((pillar) => (
              <div
                key={pillar.code}
                className="rounded-xl border border-white/15 bg-white/5 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <p className="font-mono text-xs text-teal-300 tabular-nums">
                    {pillar.code}
                  </p>
                  <h3 className="font-display text-lg font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <p className="pt-3 border-t border-white/10 text-xs font-medium text-teal-300">
                  {pillar.standardNote}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE PARTNER INQUIRY & ONBOARDING FORM */}
        <section
          id="partner-inquiry-form"
          aria-labelledby="partner-inquiry-heading"
          className="space-y-6"
        >
          <div className="no-print max-w-2xl space-y-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E]">
              Partner &amp; Mentor Onboarding
            </p>
            <h2
              id="partner-inquiry-heading"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1F3A]"
            >
              Submit a Partnership or Mentorship Inquiry
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Complete this inquiry form to register your interest. Submissions
              are stored locally in your browser with an immediate reference ID
              and printable partnership overview—ready for Phase 2 partner
              portal synchronization.
            </p>
          </div>

          {submittedRecord ? (
            /* INSTANT CONFIRMATION SUMMARY + PRINTABLE / DOWNLOADABLE PARTNERSHIP OVERVIEW */
            <div className="space-y-6">
              <section className="no-print bg-white rounded-2xl border border-teal-200 p-6 sm:p-8 lg:p-10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-200">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#F0FDFA] border border-teal-200 text-[#0F766E] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
                        Inquiry Recorded Locally
                      </p>
                      <h3 className="font-display text-2xl font-bold text-[#0B1F3A]">
                        Thank You, {submittedRecord.fullName}
                      </h3>
                      <p className="text-sm text-slate-600">
                        Reference ID:{' '}
                        <span className="font-mono font-semibold text-[#0B1F3A] tabular-nums">
                          {submittedRecord.referenceId}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 shrink-0">
                    <button
                      type="button"
                      onClick={handleDownloadOverview}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#0B1F3A] bg-white border border-slate-300 hover:border-[#0D9488] rounded-xl cursor-pointer min-h-[42px]"
                    >
                      <Download className="w-4 h-4 text-[#0F766E]" aria-hidden="true" />
                      Download Overview (.txt)
                    </button>
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0D9488] rounded-xl cursor-pointer min-h-[42px]"
                    >
                      <Printer className="w-4 h-4" aria-hidden="true" />
                      Print / Save PDF Overview
                    </button>
                  </div>
                </div>

                {/* Inquiry Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-sm">
                  <div className="rounded-xl border border-slate-200 bg-[#F7F9FC] p-4 space-y-1">
                    <p className="text-xs font-semibold text-slate-500">
                      Partnership Track
                    </p>
                    <p className="font-semibold text-[#0B1F3A]">
                      {TRACK_LABELS[submittedRecord.track]}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-[#F7F9FC] p-4 space-y-1">
                    <p className="text-xs font-semibold text-slate-500">
                      Organization &amp; Role
                    </p>
                    <p className="font-semibold text-[#0B1F3A]">
                      {submittedRecord.organizationName
                        ? `${submittedRecord.organizationName} · ${submittedRecord.titleRole}`
                        : `Independent · ${submittedRecord.titleRole}`}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-[#F7F9FC] p-4 space-y-1">
                    <p className="text-xs font-semibold text-slate-500">
                      Contact &amp; Time Zone
                    </p>
                    <p className="font-semibold text-[#0B1F3A]">
                      {submittedRecord.workEmail}
                    </p>
                    <p className="text-xs text-slate-600">
                      {submittedRecord.countryTimezone}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Selected Skill Domains ({submittedRecord.skillDomains.length})
                  </p>
                  <p className="text-sm font-medium text-[#0B1F3A]">
                    {submittedRecord.skillDomains.join(' · ')}
                  </p>
                </div>

                {/* Expected Next Steps */}
                <div className="rounded-xl border border-slate-200 bg-[#F7F9FC] p-5 space-y-3">
                  <h4 className="font-display text-sm font-bold text-[#0B1F3A]">
                    Recommended Next Steps for{' '}
                    {TRACK_LABELS[submittedRecord.track]}
                  </h4>
                  <ol className="space-y-2">
                    {(
                      PARTNER_TRACKS.find(
                        (t) => t.id === submittedRecord.track
                      )?.onboardingSteps ?? []
                    ).map((step, idx) => (
                      <li
                        key={step}
                        className="flex items-start gap-2.5 text-sm text-slate-700"
                      >
                        <span className="font-mono text-xs font-semibold text-[#0F766E] mt-0.5 tabular-nums">
                          0{idx + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setShowOverviewSheet((prev) => !prev)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F766E] hover:text-[#0B1F3A] cursor-pointer"
                  >
                    <FileText className="w-4 h-4" aria-hidden="true" />
                    {showOverviewSheet
                      ? 'Hide Printable Partnership Overview'
                      : 'Preview Printable Partnership Overview'}
                  </button>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-4 py-2 text-sm font-semibold text-[#0B1F3A] border border-slate-300 rounded-xl hover:bg-slate-50 cursor-pointer min-h-[42px]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </section>

              {/* Printable GSP Partnership Overview Summary */}
              {showOverviewSheet && (
                <article className="print-container bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-6">
                  <header className="pb-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs text-slate-500 tabular-nums">
                        Global Skills Passport · Reference{' '}
                        {submittedRecord.referenceId}
                      </p>
                      <h3 className="font-display text-2xl font-bold text-[#0B1F3A] mt-1">
                        GSP Partnership Overview &amp; Inquiry Summary
                      </h3>
                    </div>
                    <Award
                      className="w-7 h-7 text-[#0F766E] shrink-0"
                      aria-hidden="true"
                    />
                  </header>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-xs font-semibold text-slate-500">
                        Partner Representative
                      </p>
                      <p className="font-semibold text-[#0B1F3A]">
                        {submittedRecord.fullName} — {submittedRecord.titleRole}
                      </p>
                      <p className="text-slate-600">
                        {submittedRecord.organizationName ||
                          'Individual / Independent Mentor'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">
                        Track &amp; Region
                      </p>
                      <p className="font-semibold text-[#0B1F3A]">
                        {TRACK_LABELS[submittedRecord.track]}
                      </p>
                      <p className="text-slate-600">
                        {submittedRecord.workEmail} ·{' '}
                        {submittedRecord.countryTimezone}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-sm">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Collaboration Focus
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      {submittedRecord.collaborationMessage}
                    </p>
                    <p className="text-xs text-slate-600 pt-1">
                      Domains: {submittedRecord.skillDomains.join(', ')}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700">
                    <p className="font-bold text-[#0B1F3A]">
                      GSP Partnership Principles
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      {ACCOUNTABILITY_PILLARS.map((p) => (
                        <li key={p.code}>
                          <span className="font-semibold">{p.title}:</span>{' '}
                          {p.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="no-print bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 space-y-6"
            >
              {formError && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
                >
                  {formError}
                </div>
              )}

              {/* Partnership Track Selector */}
              <div className="space-y-2.5">
                <label className="block text-sm font-semibold text-[#0B1F3A]">
                  Partnership Track *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {PARTNER_TRACKS.map((track) => {
                    const isChecked = selectedTrack === track.id;
                    return (
                      <button
                        key={track.id}
                        type="button"
                        onClick={() => {
                          setSelectedTrack(track.id);
                          setActiveTrackTab(track.id);
                        }}
                        className={`text-left rounded-xl border p-4 transition-colors cursor-pointer ${
                          isChecked
                            ? 'border-[#0D9488] bg-[#F0FDFA] ring-1 ring-[#0D9488]'
                            : 'border-slate-300 bg-[#F7F9FC] hover:bg-white'
                        }`}
                      >
                        <p className="text-sm font-bold text-[#0B1F3A]">
                          {TRACK_LABELS[track.id]}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">
                          {track.commitment}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Contact & Organization Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="partner-full-name"
                    className="block text-sm font-semibold text-[#0B1F3A] mb-1.5"
                  >
                    Full Name *
                  </label>
                  <input
                    id="partner-full-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Dr. Nadia Mansour"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F7F9FC] border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-[#0D9488] focus:bg-white focus:outline-none min-h-[44px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="partner-title-role"
                    className="block text-sm font-semibold text-[#0B1F3A] mb-1.5"
                  >
                    Title / Professional Role *
                  </label>
                  <input
                    id="partner-title-role"
                    type="text"
                    required
                    value={titleRole}
                    onChange={(e) => setTitleRole(e.target.value)}
                    placeholder="Principal Software Engineer / Academic Director"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F7F9FC] border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-[#0D9488] focus:bg-white focus:outline-none min-h-[44px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="partner-org-name"
                    className="block text-sm font-semibold text-[#0B1F3A] mb-1.5"
                  >
                    Organization / Institution Name{' '}
                    {selectedTrack === 'mentor' ? '(Optional for Mentors)' : '*'}
                  </label>
                  <input
                    id="partner-org-name"
                    type="text"
                    value={organizationName}
                    onChange={(e) => setOrganizationName(e.target.value)}
                    placeholder="e.g., Horizon Digital or Independent"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F7F9FC] border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-[#0D9488] focus:bg-white focus:outline-none min-h-[44px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="partner-website"
                    className="block text-sm font-semibold text-[#0B1F3A] mb-1.5"
                  >
                    Website or LinkedIn URL (Optional)
                  </label>
                  <input
                    id="partner-website"
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://organization.org"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F7F9FC] border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-[#0D9488] focus:bg-white focus:outline-none min-h-[44px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="partner-email"
                    className="block text-sm font-semibold text-[#0B1F3A] mb-1.5"
                  >
                    Work Email *
                  </label>
                  <input
                    id="partner-email"
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="name@organization.org"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F7F9FC] border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-[#0D9488] focus:bg-white focus:outline-none min-h-[44px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="partner-country-tz"
                    className="block text-sm font-semibold text-[#0B1F3A] mb-1.5"
                  >
                    Country &amp; Primary Time Zone *
                  </label>
                  <div className="relative">
                    <Globe
                      className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      id="partner-country-tz"
                      type="text"
                      required
                      value={countryTimezone}
                      onChange={(e) => setCountryTimezone(e.target.value)}
                      placeholder="e.g., United Kingdom · GMT / UTC+0"
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-[#F7F9FC] border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-[#0D9488] focus:bg-white focus:outline-none min-h-[44px]"
                    />
                  </div>
                </div>
              </div>

              {/* Multi-Select Primary Skill Domains */}
              <fieldset className="space-y-3 pt-2">
                <legend className="text-sm font-semibold text-[#0B1F3A]">
                  Primary Skill Domains of Interest (Select all that apply) *
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {LEARNING_PATHWAYS.map((pathway) => {
                    const checked = selectedDomains.includes(pathway.title);
                    return (
                      <label
                        key={pathway.id}
                        className={`flex items-start gap-2.5 rounded-xl border p-3.5 text-sm cursor-pointer transition-colors ${
                          checked
                            ? 'border-[#0D9488] bg-[#F0FDFA] text-[#0B1F3A] font-medium'
                            : 'border-slate-200 bg-[#F7F9FC] text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleDomain(pathway.title)}
                          className="mt-0.5 w-4 h-4 accent-[#0F766E] rounded cursor-pointer shrink-0"
                        />
                        <span className="leading-snug">{pathway.title}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {/* Collaboration Message */}
              <div>
                <label
                  htmlFor="partner-collaboration-message"
                  className="block text-sm font-semibold text-[#0B1F3A] mb-1.5"
                >
                  How Would You Like to Collaborate? *
                </label>
                <textarea
                  id="partner-collaboration-message"
                  rows={4}
                  required
                  value={collaborationMessage}
                  onChange={(e) => setCollaborationMessage(e.target.value)}
                  placeholder="Share your interest in capstone mentoring, remote internship hosting, hiring pipelines, or institutional accreditation..."
                  className="w-full px-3.5 py-3 text-sm bg-[#F7F9FC] border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-[#0D9488] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Phase 1 Local Preview: Your inquiry generates a reference ID
                  and printable summary without transmitting external PII.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
                >
                  Submit Partnership Inquiry
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
