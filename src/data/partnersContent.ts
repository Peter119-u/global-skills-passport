import type { PartnerTrackId } from '../types/platform';

export interface PartnerTrackSpec {
  id: PartnerTrackId;
  shortLabel: string;
  title: string;
  audienceLabel: string;
  commitment: string;
  summary: string;
  primaryCTA: string;
  contributions: string[];
  gspSupport: string[];
  onboardingSteps: string[];
}

export const PARTNER_TRACKS: PartnerTrackSpec[] = [
  {
    id: 'mentor',
    shortLabel: 'Industry Mentors & Assessors',
    title: 'Industry Mentors & Competency Assessors',
    audienceLabel: 'Experienced Practitioners & Educators',
    commitment: 'Flexible · ~2–4 Hours / Month',
    summary:
      'Support displaced and underserved learners across any of our eight career pathways by reviewing practical module deliverables, evaluating capstone portfolios against published GSP rubrics, and offering constructive career guidance.',
    primaryCTA: 'Apply as an Industry Mentor',
    contributions: [
      'Review capstone submissions asynchronously using GSP’s 100%-weighted competency rubrics.',
      'Provide specific, actionable feedback on codebases, financial models, security audits, or design systems.',
      'Endorse verified practical skill portfolios for learners demonstrating job-ready craft.',
      'Optionally host one small-group Q&A or office hour session per cohort.',
    ],
    gspSupport: [
      'Pre-structured grading rubrics and clear module checklists—zero lesson authoring required.',
      'Asynchronous-first workflows designed around global time zones.',
      'Written safeguarding and privacy guidelines before any learner interaction.',
    ],
    onboardingSteps: [
      'Submit your domain background and preferred pathway(s) below.',
      'Receive our Mentor Rubric Guide and safeguarding charter within 3–5 business days.',
      'Shadow one capstone review before joining an active learner cohort.',
    ],
  },
  {
    id: 'employer',
    shortLabel: 'Global Employers & Hiring Partners',
    title: 'Global Employers & Remote Hiring Partners',
    audienceLabel: 'Technology Firms, Agencies & Distributed Teams',
    commitment: 'Project Apprenticeships · Remote Internships · Junior Roles',
    summary:
      'Access vetted, resilient talent trained in Software Development, AI, Data Science & Analytics, Cybersecurity, Digital Marketing, Business Operations, Project Management, and Graphic Design—backed by inspectable capstone portfolios rather than unverified resumes.',
    primaryCTA: 'Partner as a Hiring Organization',
    contributions: [
      'Open remote internships, guided project apprenticeships, or entry-level distributed roles.',
      'Inspect rubric-evaluated capstone work, GitHub repositories, SQL models, or design case studies directly.',
      'Co-design real-world practice briefs that mirror skills your engineering, data, or operations teams hire for.',
      'Commit to fair, transparent compensation and bias-free remote technical interviews.',
    ],
    gspSupport: [
      'Curated talent shortlists filtered by pathway, assessed competency score, and language readiness.',
      'Structured remote onboarding checklists helping hiring managers support cross-border hires.',
      'Clear pre-vetting on practical deliverables so your team saves initial screening hours.',
    ],
    onboardingSteps: [
      'Share your target skill domains, hiring model, and time-zone preferences below.',
      'Review anonymized sample capstone portfolios with our Partnerships team.',
      'Launch a scoped remote apprenticeship or junior hiring pipeline.',
    ],
  },
  {
    id: 'institution',
    shortLabel: 'Universities, NGOs & Credentialing Bodies',
    title: 'Universities, NGOs & Credentialing Bodies',
    audienceLabel: 'Accredited Institutions, Humanitarian Agencies & Awarding Partners',
    commitment: 'Credit Pathways · Scholarships · Co-Issued Credentials',
    summary:
      'Collaborate with Global Skills Passport to recognize verified practical coursework for university credit transfer, bridge scholarships, community study center access, or co-issued accredited micro-credentials.',
    primaryCTA: 'Explore Institutional Partnership',
    contributions: [
      'Evaluate GSP Modules 1–4 syllabi and rubrics for prior-learning recognition or credit pathways.',
      'Co-issue accredited micro-credentials or formal certifications under your institution’s awarding authority.',
      'Extend tuition waivers, exam vouchers, or community learning center internet access to displaced cohorts.',
      'Share program impact research aligned with UN SDG 4, SDG 8, and SDG 10.',
    ],
    gspSupport: [
      'Complete audit transparency across all 96 lessons, assignment deliverables, and 100%-weighted rubrics.',
      'Strict separation between GSP completion records and accredited institutional awarding status.',
      'Dedicated data-minimization architecture respecting displaced learner safety.',
    ],
    onboardingSteps: [
      'Submit your institution or organization details and collaboration focus below.',
      'Receive our full Academic & Curriculum Audit Packet for faculty or board review.',
      'Draft a scoped Memorandum of Understanding (MoU) defining recognition and co-issuance.',
    ],
  },
];

export interface AccountabilityPillar {
  code: string;
  title: string;
  description: string;
  standardNote: string;
}

export const ACCOUNTABILITY_PILLARS: AccountabilityPillar[] = [
  {
    code: '01',
    title: 'Learner Privacy & Dignity Safeguards',
    description:
      'GSP never requires displaced learners to upload sensitive immigration documentation or expose precise settlement locations to study or apply. Partner access to learner portfolios operates strictly on explicit, opt-in learner consent.',
    standardNote: 'Minimal Data Collection · Consent-First Sharing',
  },
  {
    code: '02',
    title: 'Transparent Rubric-Based Verification',
    description:
      'Every endorsed milestone links to tangible module projects and our published 100%-weighted grading rubrics—never subjective stamps. Formal academic degrees or regulated credentials are issued exclusively through accredited partner institutions.',
    standardNote: 'Published 100% Rubrics · Clear Credential Boundaries',
  },
  {
    code: '03',
    title: 'Ethical & Fair Remote Employment Standards',
    description:
      'All hiring partners commit to transparent role expectations, fair compensation aligned with skill level, respectful cross-border contracting guidance, and zero unpaid exploitative labor masked as internships.',
    standardNote: 'Equitable Pay · Non-Discriminatory Evaluation',
  },
];
