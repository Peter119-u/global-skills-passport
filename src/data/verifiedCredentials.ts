import type { VerifiedCredentialRecord } from '../types/platform';

export const VERIFIED_CREDENTIALS: Record<string, VerifiedCredentialRecord> = {
  'GSP-2026-8492': {
    credentialId: 'GSP-2026-8492',
    pathwayId: 'software-development',
    pathwayCode: 'GSP-101',
    pathwayTitle: 'Software Development',
    issueDate: '18 October 2026',
    issuingPartner: 'Nordic Open Technology Institute & GSP Assessment Board',
    assessorNameAndRole: 'Henrik Lindqvist · Principal Systems Assessor',
    verificationHash:
      'sha256:9f4c2b8e10d74a3c61e80b5f29c4d1a87e2b90f3c6a184d2e7b519c0a319e642',
    learnerSummary: {
      fullName: 'Amina Al-Hassan',
      cohortRegion: 'Middle East & North Africa Remote Cohort',
      readinessLevel: 'Job-Ready · Capstone Passed with Distinction',
      studyHoursCompleted: 112,
    },
    moduleScores: [
      {
        moduleOrder: 1,
        moduleTitle: 'Programming Foundations & Logic',
        deliverable: 'Modular TypeScript CLI Study Tracker + Unit Tests',
        scorePercent: 94,
      },
      {
        moduleOrder: 2,
        moduleTitle: 'Frontend Interfaces & Accessible Web Design',
        deliverable: 'Low-Bandwidth Community Resource Directory UI',
        scorePercent: 96,
      },
      {
        moduleOrder: 3,
        moduleTitle: 'Backend APIs & Relational Databases',
        deliverable: 'Parameterized PostgreSQL Enrollment & Resource API',
        scorePercent: 92,
      },
      {
        moduleOrder: 4,
        moduleTitle: 'Testing, Git Collaboration & Deployment',
        deliverable: 'Automated Integration Test Suite & Deployment Spec',
        scorePercent: 95,
      },
    ],
    capstoneTitle: 'Community Resource Locator & Resilient Web Application',
    capstoneOverallPercent: 95,
    capstoneAwardLevel: 'Distinction',
    capstoneCriteria: [
      {
        criterion: 'Technical Execution & Type Safety',
        weightPercent: 30,
        scorePercent: 96,
        assessorNote:
          'Strict TypeScript domain models separated cleanly from Express route handlers with zero compiler warnings.',
      },
      {
        criterion: 'Problem Solving, Security & Validation',
        weightPercent: 25,
        scorePercent: 94,
        assessorNote:
          'Server-side schema validation and parameterized SQL queries verified against edge-case payloads.',
      },
      {
        criterion: 'Accessibility & Low-Bandwidth Impact',
        weightPercent: 25,
        scorePercent: 97,
        assessorNote:
          'Full keyboard navigation, WCAG AA contrast across all views, and total initial transfer under 160 KB.',
      },
      {
        criterion: 'Documentation & Automated Testing',
        weightPercent: 20,
        scorePercent: 92,
        assessorNote:
          'Comprehensive Vitest unit/integration suite plus clear README documenting deployment and limitations.',
      },
    ],
    assessorEndorsement:
      'Amina demonstrated disciplined engineering judgment throughout her capstone—prioritizing low-bandwidth resilience, clean API boundaries, and thorough automated test coverage. Ready immediately for junior full-stack or frontend engineering roles on distributed teams.',
    portfolioArtifacts: [
      {
        id: 'sd-art-1',
        title: 'Community Resource Locator Web App & REST API',
        artifactType: 'Full-Stack Capstone Repository',
        summary:
          'Bilingual, low-bandwidth directory enabling newcomers to search local language hubs, legal clinics, and training centers with offline fallback caching.',
        toolsUsed: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Vitest'],
        highlights: [
          'Parameterized SQL search endpoint with pagination and strict input validation.',
          '98/100 Lighthouse Accessibility score verified across 375px mobile viewports.',
          '24 automated unit and API boundary tests passing in CI.',
        ],
        previewSnippetLabel: 'Verified API Handler Excerpt · src/routes/resources.ts',
        previewSnippet: `export async function searchVerifiedResources(
  query: ResourceFilterInput,
  db: DatabasePool
): Promise<ResourceRecord[]> {
  const limit = Math.min(Math.max(query.limit ?? 20, 1), 50);
  const category = VALID_CATEGORIES.has(query.category) ? query.category : null;

  const { rows } = await db.query<ResourceRecord>(
    \`SELECT id, title, category, city, languages, updated_at
     FROM community_resources
     WHERE is_verified = TRUE
       AND ($1::text IS NULL OR category = $1)
       AND ($2::text = '' OR title ILIKE '%' || $2 || '%')
     ORDER BY updated_at DESC
     LIMIT $3\`,
    [category, query.searchText.trim(), limit]
  );
  return rows;
}`,
      },
      {
        id: 'sd-art-2',
        title: 'Automated Edge-Case & Validation Test Suite',
        artifactType: 'Quality Assurance Artifact',
        summary:
          'Deterministic test suite verifying guard clauses, empty query behavior, and unauthorized mutation rejection.',
        toolsUsed: ['Vitest', 'TypeScript', 'Supertest'],
        highlights: [
          'Covers boundary pagination limits, malformed IDs, and missing optional fields.',
          'Confirms zero stack-trace leakage in client-facing error JSON.',
        ],
        previewSnippetLabel: 'Verified Test Output Summary · vitest run',
        previewSnippet: `PASS  tests/resources.validation.test.ts (14 tests)
PASS  tests/eligibility.pure.test.ts (10 tests)
-------------------------------------------------------
Test Files  2 passed (2)
     Tests  24 passed (24)
  Duration  412ms`,
      },
    ],
  },

  'GSP-2026-3107': {
    credentialId: 'GSP-2026-3107',
    pathwayId: 'data-science-analytics',
    pathwayCode: 'GSP-103',
    pathwayTitle: 'Data Science & Analytics',
    issueDate: '04 November 2026',
    issuingPartner: 'International Applied Analytics Guild & GSP Assessment Board',
    assessorNameAndRole: 'Dr. Priya Ramanathan · Lead Data Scientist',
    verificationHash:
      'sha256:4d81a6e3c20b9f7412e6a5c0d83f1b72e9a4c6018b3f5d209c7e41a8d2f603b1',
    learnerSummary: {
      fullName: 'Daniel Okafor',
      cohortRegion: 'East & West Africa Regional Cohort',
      readinessLevel: 'Job-Ready · Capstone Passed with Distinction',
      studyHoursCompleted: 96,
    },
    moduleScores: [
      {
        moduleOrder: 1,
        moduleTitle: 'Spreadsheet Modeling & Data Literacy',
        deliverable: 'Standardized Multi-Region Attendance Workbook',
        scorePercent: 93,
      },
      {
        moduleOrder: 2,
        moduleTitle: 'Relational Querying with SQL',
        deliverable: 'Fan-Out-Safe CTE Cohort Reporting Queries',
        scorePercent: 97,
      },
      {
        moduleOrder: 3,
        moduleTitle: 'Python Exploratory Analysis & Statistics',
        deliverable: 'Confidence-Interval Retention Hypothesis Study',
        scorePercent: 91,
      },
      {
        moduleOrder: 4,
        moduleTitle: 'Decision Dashboards & Stakeholder Briefing',
        deliverable: 'Executive Access & Retention Analytics Brief',
        scorePercent: 95,
      },
    ],
    capstoneTitle: 'Cross-Border Education Access Analytics Study & Executive Brief',
    capstoneOverallPercent: 94,
    capstoneAwardLevel: 'Distinction',
    capstoneCriteria: [
      {
        criterion: 'SQL Accuracy & Join Granularity Control',
        weightPercent: 30,
        scorePercent: 98,
        assessorNote:
          'Exemplary pre-aggregation CTE design eliminating stipend double-counting across one-to-many enrollments.',
      },
      {
        criterion: 'Statistical Rigor & Bias Awareness',
        weightPercent: 25,
        scorePercent: 92,
        assessorNote:
          'Reported median/IQR alongside sample sizes and flagged survivorship bias across mobile survey respondents.',
      },
      {
        criterion: 'Visual Clarity & Honest Chart Design',
        weightPercent: 25,
        scorePercent: 93,
        assessorNote:
          'Clean horizontal comparisons with non-zero baselines and direct data labels.',
      },
      {
        criterion: 'Decision Relevance & Documentation',
        weightPercent: 20,
        scorePercent: 94,
        assessorNote:
          'Concise executive brief linking regional retention insights to concrete mobile study packet actions.',
      },
    ],
    assessorEndorsement:
      'Daniel brings uncommon rigor to messy operational data—catching join fan-out traps proactively and communicating statistical uncertainty clearly for non-technical program directors. Strongly recommended for Data Analyst or Impact Measurement positions.',
    portfolioArtifacts: [
      {
        id: 'ds-art-1',
        title: 'Fan-Out-Safe Regional Completion SQL Warehouse Model',
        artifactType: 'Reproducible SQL Query Suite',
        summary:
          'Multi-table PostgreSQL reporting layer reconciling learner stipends, module completions, and regional dropout timing with verified control checksums.',
        toolsUsed: ['PostgreSQL', 'SQL CTEs', 'Window Functions', 'Python'],
        highlights: [
          'Pre-aggregates module completions per learner before joining regional grant records.',
          'Includes automated row-count sanity checks confirming zero duplication.',
        ],
        previewSnippetLabel: 'Verified SQL Reporting Excerpt · cohort_summary.sql',
        previewSnippet: `WITH module_counts AS (
  SELECT learner_id, COUNT(*) FILTER (WHERE status = 'completed') AS modules_done
  FROM module_enrollments
  GROUP BY learner_id
)
SELECT
  l.region_code,
  COUNT(l.id) AS total_learners,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY COALESCE(m.modules_done, 0)) AS median_modules,
  SUM(l.study_stipend_usd) AS verified_stipend_total
FROM learners l
LEFT JOIN module_counts m ON m.learner_id = l.id
GROUP BY l.region_code
ORDER BY total_learners DESC;`,
      },
      {
        id: 'ds-art-2',
        title: 'Executive Retention & Access Brief (4-Region Study)',
        artifactType: 'Stakeholder Decision Dossier',
        summary:
          '2-page analytical memo synthesizing Python hypothesis tests and accessible visualizations on low-bandwidth study completion rates.',
        toolsUsed: ['Python', 'Pandas', 'Matplotlib', 'Statistical CIs'],
        highlights: [
          'Quantifies 95% confidence intervals comparing offline-packet vs. streaming cohorts.',
          'Explicitly documents confounding connectivity variables without overclaiming causation.',
        ],
        previewSnippetLabel: 'Executive Key Finding · Methodology Digest',
        previewSnippet: `Cohort Finding (n = 1,420 learners across 4 hubs):
- Offline printable summaries correlated with +19 percentage-point Module 2 completion (95% CI: +13.4% to +24.6%).
- Caveat: Observational comparison; baseline study-hour availability differs across hubs.`,
      },
    ],
  },

  'GSP-2026-5921': {
    credentialId: 'GSP-2026-5921',
    pathwayId: 'cybersecurity',
    pathwayCode: 'GSP-104',
    pathwayTitle: 'Cybersecurity',
    issueDate: '12 November 2026',
    issuingPartner: 'Resilient Infrastructure Security Forum & GSP Assessment Board',
    assessorNameAndRole: 'Marcus Vance · Principal Security Architect',
    verificationHash:
      'sha256:7b19e40c8a35d2f16904c8e27a51b3d04f8c62a91e507d3b82c419f6a0e851c3',
    learnerSummary: {
      fullName: 'Olena Kovalenko',
      cohortRegion: 'Central & Eastern Europe Remote Cohort',
      readinessLevel: 'Job-Ready · Capstone Passed with Merit',
      studyHoursCompleted: 106,
    },
    moduleScores: [
      {
        moduleOrder: 1,
        moduleTitle: 'Operating Systems & Networking Fundamentals',
        deliverable: 'Remote Network Port Exposure & Firewall Baseline',
        scorePercent: 89,
      },
      {
        moduleOrder: 2,
        moduleTitle: 'Identity, Cryptography & Access Controls',
        deliverable: 'Zero-Trust RBAC & Row-Level Security Spec',
        scorePercent: 93,
      },
      {
        moduleOrder: 3,
        moduleTitle: 'Threat Detection & Security Operations',
        deliverable: 'Authentication Log Brute-Force Triage Report',
        scorePercent: 90,
      },
      {
        moduleOrder: 4,
        moduleTitle: 'Risk Governance & Defensive Audit',
        deliverable: 'Security Posture Audit & Incident Playbook',
        scorePercent: 91,
      },
    ],
    capstoneTitle: 'Distributed Organization Security Audit & Incident Response Playbook',
    capstoneOverallPercent: 91,
    capstoneAwardLevel: 'Merit',
    capstoneCriteria: [
      {
        criterion: 'Access Control & Trust Boundary Precision',
        weightPercent: 30,
        scorePercent: 94,
        assessorNote:
          'Strong RLS policy scoping ensuring displaced learner records remain strictly isolated at the database boundary.',
      },
      {
        criterion: 'Threat Modeling & Vulnerability Detection',
        weightPercent: 25,
        scorePercent: 90,
        assessorNote:
          'Correctly diagnosed 5 of 5 planted OWASP risks and supplied clean copy-ready remediation patches.',
      },
      {
        criterion: 'Log Investigation & Incident Triage Accuracy',
        weightPercent: 25,
        scorePercent: 89,
        assessorNote:
          'Reconstructed credential-stuffing timeline cleanly with practical rate-limiting and token revocation actions.',
      },
      {
        criterion: 'Operational Readiness of Playbook',
        weightPercent: 20,
        scorePercent: 90,
        assessorNote:
          'Well-sequenced containment and escalation checklists suitable for small distributed IT teams.',
      },
    ],
    assessorEndorsement:
      'Olena excels at translating defensive security standards into practical, enforceable safeguards for resource-constrained remote teams—with particular strength in identity governance and authentication log triage. Well prepared for Junior SOC Analyst or Security Operations roles.',
    portfolioArtifacts: [
      {
        id: 'cs-art-1',
        title: 'Zero-Trust RBAC & Learner Data Privacy Policy',
        artifactType: 'Access Governance Specification',
        summary:
          'Role-based access matrix and declarative PostgreSQL Row-Level Security specification safeguarding displaced user profiles.',
        toolsUsed: ['PostgreSQL RLS', 'RBAC', 'Threat Modeling', 'OWASP'],
        highlights: [
          'Enforces strict `auth.uid() = id` row isolation at database policy layer.',
          'Eliminates client-side secret exposure by isolating third-party tokens behind server routes.',
        ],
        previewSnippetLabel: 'Verified Policy Specification · rls_learner_profiles.sql',
        previewSnippet: `ALTER TABLE public.student_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Learners read own profile only"
  ON public.student_profiles
  FOR SELECT TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Learners update own non-role fields only"
  ON public.student_profiles
  FOR UPDATE TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);`,
      },
      {
        id: 'cs-art-2',
        title: 'Incident Response Playbook & Log Triage Brief',
        artifactType: 'Security Operations Artifact',
        summary:
          'Actionable containment sequence and forensic log reconstruction covering credential-stuffing triage and non-destructive evidence preservation.',
        toolsUsed: ['Auth Log Analysis', 'NIST IR Lifecycle', 'MFA Hardening'],
        highlights: [
          'Defines 15-minute containment triage vs. full session revocation order.',
          'Includes plain-language breach notification template protecting learner trust.',
        ],
        previewSnippetLabel: 'Containment Sequence · Playbook Section 3',
        previewSnippet: `1. Preserve volatile auth & proxy logs before rotating compromised credentials.
2. Revoke active refresh tokens for affected accounts and enforce MFA re-verification.
3. Apply sliding-window IP + account-level rate limits on /auth/login.
4. Audit privileged role-change events across the preceding 72-hour window.`,
      },
    ],
  },
};

export const SAMPLE_CREDENTIAL_SUMMARIES = [
  {
    id: 'GSP-2026-8492',
    pathway: 'Software Development',
    holder: 'Amina Al-Hassan',
  },
  {
    id: 'GSP-2026-3107',
    pathway: 'Data Science & Analytics',
    holder: 'Daniel Okafor',
  },
  {
    id: 'GSP-2026-5921',
    pathway: 'Cybersecurity',
    holder: 'Olena Kovalenko',
  },
] as const;
