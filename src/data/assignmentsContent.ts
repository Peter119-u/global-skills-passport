import type { PathwayAssignments } from '../types/platform';

export const PATHWAY_ASSIGNMENTS: Record<string, PathwayAssignments> = {
  'software-development': {
    capstoneTitle: 'Community Resource Locator & Resilient Web Application',
    capstoneOverview:
      'Design, build, and document an accessible full-stack web directory that helps newcomers locate local language classes, community legal clinics, and training hubs—engineered for fast loading on constrained mobile networks.',
    capstoneSteps: [
      'Model relational tables (`resources`, `categories`, `verified_updates`) with strict TypeScript interfaces and input validation.',
      'Build a responsive search and category filter UI obeying WCAG AA contrast (>= 4.5:1) and keyboard navigation.',
      'Implement REST API endpoints with parameterized queries, structured JSON error responses, and server-side validation.',
      'Author an automated unit test suite covering edge cases (empty search, missing optional fields, invalid query params).',
      'Publish a clean repository README documenting setup instructions, architecture trade-offs, and deployment steps.',
    ],
    submissionChecklist: [
      'TypeScript strict compilation passes with zero `any` bypasses or syntax errors.',
      'Mobile layout verified at 375px width with zero horizontal overflow.',
      'All user-submitted parameters validated server-side before database queries execute.',
      'Automated test suite runs and passes cleanly via a single command.',
    ],
    moduleAssignments: [
      {
        moduleOrder: 1,
        title: 'CLI Habit & Study Hours Tracker',
        deliverable: 'Modular TypeScript CLI Script + Unit Tests',
        estimatedHours: 6,
        steps: [
          'Define a `StudySession` TypeScript interface with date, moduleId, and durationMinutes.',
          'Write pure functions to aggregate total hours per module and detect invalid negative inputs via guard clauses.',
          'Persist entries to a clean local JSON file and handle corrupted or missing file states gracefully.',
        ],
      },
      {
        moduleOrder: 2,
        title: 'Accessible Community Resource Directory Page',
        deliverable: 'Responsive Semantic HTML/CSS & Component UI',
        estimatedHours: 8,
        steps: [
          'Build semantic landmarks (`<header>`, `<main>`, `<nav>`, `<article>`) with single H1 and logical heading order.',
          'Implement an interactive category filter and search box with visible keyboard focus rings.',
          'Audit total page transfer size and color contrast on mobile viewport width.',
        ],
      },
      {
        moduleOrder: 3,
        title: 'Task & Enrollment REST API with Relational Storage',
        deliverable: 'Express/PostgreSQL API + Migration Schema',
        estimatedHours: 10,
        steps: [
          'Create normalized SQL schema separating users, enrollments, and tasks with foreign key constraints.',
          'Expose GET/POST/PATCH endpoints returning accurate HTTP status codes (200, 201, 400, 404).',
          'Enforce ownership checks and parameterized queries to prevent unauthorized access or SQL injection.',
        ],
      },
      {
        moduleOrder: 4,
        title: 'Production Hardening & Automated Test Suite',
        deliverable: 'Tested Repository + Deployment Architecture Note',
        estimatedHours: 8,
        steps: [
          'Write unit and integration tests covering happy paths and missing-field edge cases.',
          'Eliminate unused secrets or hardcoded keys, documenting all variables inside `.env.example`.',
          'Prepare a concise 1-page architecture summary for mentor code review.',
        ],
      },
    ],
    gradingRubric: [
      {
        criterion: 'Code Quality, Modularity & Type Safety',
        weightPercent: 30,
        competentStandard:
          'Clean modular functions, explicit TypeScript interfaces, and zero compiler or lint errors.',
        distinctionStandard:
          'Pure domain logic cleanly decoupled from UI/API I/O with thoughtful guard clauses and concise inline rationale.',
      },
      {
        criterion: 'Accessibility, UX & Low-Bandwidth Craft',
        weightPercent: 25,
        competentStandard:
          'Semantic HTML, responsive layout across mobile/desktop, and readable contrast.',
        distinctionStandard:
          'Full keyboard usability, WCAG AA compliance, graceful empty/loading/error states, and lean asset payload.',
      },
      {
        criterion: 'Security, Validation & Data Integrity',
        weightPercent: 25,
        competentStandard:
          'Input validation on boundaries, parameterized queries, and zero exposed private keys.',
        distinctionStandard:
          'Comprehensive server-side authorization checks, sanitized error messages, and verified `.env.example` hygiene.',
      },
      {
        criterion: 'Testing & Documentation Clarity',
        weightPercent: 20,
        competentStandard:
          'Core logic covered by passing tests and a readable README setup guide.',
        distinctionStandard:
          'Edge-case tests included alongside honest documentation of limitations and Phase 2 improvements.',
      },
    ],
  },
  'artificial-intelligence': {
    capstoneTitle: 'Grounded Multilingual Study Assistant & Model Card Dossier',
    capstoneOverview:
      'Architect and audit a Retrieval-Augmented Generation (RAG) educational Q&A prototype backed by curated curriculum documents, complete with an automated evaluation benchmark and formal AI Model Card.',
    capstoneSteps: [
      'Chunk a verified 10-document educational reference corpus with preserved section titles and source IDs.',
      'Implement a retrieval pipeline returning top-k relevant passages alongside citation metadata.',
      'Configure strict system prompt instructions requiring inline source citations and explicit abstention when answers are absent.',
      'Build a 20-question golden evaluation test set (including 5 deliberately unanswerable trap questions) and measure citation accuracy.',
      'Publish an institutional AI Model Card documenting intended use, language limitations, privacy safeguards, and human-in-the-loop escalation.',
    ],
    submissionChecklist: [
      'Every factual claim produced by the assistant references an exact retrieved document ID.',
      'Unanswerable benchmark queries trigger honest abstention rather than fabricated guesses.',
      'Evaluation report logs precision/recall or citation pass rate clearly in a reproducible table.',
      'Zero sensitive learner PII logged inside prompt telemetry or sample evaluation transcripts.',
    ],
    moduleAssignments: [
      {
        moduleOrder: 1,
        title: 'Clean Dataset Split & Leakage Audit',
        deliverable: 'Structured Data Pipeline + Bias & Split Audit Note',
        estimatedHours: 6,
        steps: [
          'Inspect a tabular educational completion dataset for missing values, duplicate IDs, and class imbalance.',
          'Implement an 80/20 stratified train/test split ensuring zero scaler or duplicate leakage.',
          'Document potential representation gaps across languages or regions.',
        ],
      },
      {
        moduleOrder: 2,
        title: 'Baseline Classifier & Error Matrix Analysis',
        deliverable: 'Precision/Recall Evaluation Report',
        estimatedHours: 8,
        steps: [
          'Train a simple interpretable baseline model (logistic regression or decision tree) first.',
          'Generate confusion matrix metrics (precision, recall, F1) instead of reporting accuracy alone.',
          'Analyze top 10 misclassified examples and propose data or threshold fixes.',
        ],
      },
      {
        moduleOrder: 3,
        title: 'Grounded RAG Prototype With Citation Enforcement',
        deliverable: 'Retrieval Prompt Spec + Grounded Q&A Demo',
        estimatedHours: 10,
        steps: [
          'Split curriculum guides into semantic 300–500 token chunks with source identifiers.',
          'Construct a prompt contract instructing the model to cite chunk IDs or answer "Not in verified sources."',
          'Test retrieval edge cases including multi-hop questions and out-of-scope prompts.',
        ],
      },
      {
        moduleOrder: 4,
        title: 'Automated Benchmark & Ethical Model Card',
        deliverable: '20-Case Eval Suite + Complete AI Model Card',
        estimatedHours: 8,
        steps: [
          'Author a deterministic evaluation suite verifying citation fidelity and abstention behavior.',
          'Draft privacy, human-override, and failure-mode sections of an institutional Model Card.',
          'Present key trade-offs between latency, cost, and accuracy.',
        ],
      },
    ],
    gradingRubric: [
      {
        criterion: 'Grounding Integrity & Hallucination Prevention',
        weightPercent: 30,
        competentStandard:
          'Retrieval supplies relevant context and prompts require citations to source chunks.',
        distinctionStandard:
          'Consistently abstains on unanswerable queries with verified citation traceability on >= 90% of benchmark cases.',
      },
      {
        criterion: 'Data Hygiene & Evaluation Rigor',
        weightPercent: 30,
        competentStandard:
          'Clean train/test separation and appropriate metrics (precision/recall/F1) reported accurately.',
        distinctionStandard:
          'Includes stratified analysis, error taxonomy on failures, and reproducible automated eval runs.',
      },
      {
        criterion: 'Privacy, Fairness & Human Safeguards',
        weightPercent: 20,
        competentStandard:
          'Identifies potential dataset skews and omits sensitive personal data from prompts.',
        distinctionStandard:
          'Establishes explicit human-in-the-loop escalation triggers and multilingual accuracy caveats.',
      },
      {
        criterion: 'Model Card & Technical Communication',
        weightPercent: 20,
        competentStandard:
          'Clear Model Card summarizing purpose, metrics, and constraints.',
        distinctionStandard:
          'Executive-ready documentation clearly delineating supported vs. out-of-scope deployment contexts.',
      },
    ],
  },
  'data-science-analytics': {
    capstoneTitle: 'Cross-Border Education Access Analytics Study & Executive Brief',
    capstoneOverview:
      'Clean, query, and statistically analyze a multi-region open development dataset—producing reproducible SQL reporting models, uncertainty-aware charts, and a clear stakeholder decision memo.',
    capstoneSteps: [
      'Audit raw CSV/spreadsheet extracts for inconsistent country codes, duplicate records, and missing values, documenting every cleaning rule.',
      'Load normalized tables (`regions`, `cohorts`, `completions`) and write CTE-backed SQL queries preventing one-to-many join inflation.',
      'Compute descriptive statistics (median, IQR, sample sizes) and test one clear hypothesis comparing cohort retention drivers.',
      'Design 3 honest, accessible visualizations (direct labels, zero truncated y-axes, colorblind-safe palette).',
      'Compile a 2-page Executive Analytics Brief pairing visual insights with transparent methodology caveats.',
    ],
    submissionChecklist: [
      'Every SQL sum reconciles independently against single-table control totals.',
      'All averages on skewed distributions report median, 25th–75th percentiles, and sample size (n).',
      'Charts feature explicit units, clear titles stating the main takeaway, and non-zero baselines on bar charts.',
      'Correlations are interpreted carefully without unsupported causal claims.',
    ],
    moduleAssignments: [
      {
        moduleOrder: 1,
        title: 'Multi-Region Attendance Workbook Audit',
        deliverable: 'Standardized Tidy Spreadsheet + Cleaning Log',
        estimatedHours: 6,
        steps: [
          'Convert wide cross-tabulated sheets into tidy long-format rows (one observation per row).',
          'Standardize date formats (ISO 8601 `YYYY-MM-DD`) and flag out-of-range anomalies.',
          'Build summary pivot tables with cross-check checksums.',
        ],
      },
      {
        moduleOrder: 2,
        title: 'Fan-Out-Safe SQL Cohort Reporting',
        deliverable: 'Commented `.sql` Query Suite',
        estimatedHours: 8,
        steps: [
          'Write multi-table `LEFT JOIN` queries retaining learners with zero module submissions.',
          'Pre-aggregate child enrollment rows inside CTEs before joining stipend or demographic totals.',
          'Use window functions (`ROW_NUMBER`, `SUM OVER`) to compute cohort running completions.',
        ],
      },
      {
        moduleOrder: 3,
        title: 'Exploratory Statistics & Hypothesis Brief',
        deliverable: 'Python/Notebook Statistical Analysis',
        estimatedHours: 8,
        steps: [
          'Plot distributions and inspect outliers across regional study hours.',
          'Compute confidence intervals around subgroup completion rates.',
          'Document confounding variables explaining why observed differences are correlational.',
        ],
      },
      {
        moduleOrder: 4,
        title: 'Executive KPI Narrative & Chart Critique',
        deliverable: '2-Page Stakeholder Analytics Dossier',
        estimatedHours: 6,
        steps: [
          'Replace cluttered pie charts with clean horizontal bar or slope charts.',
          'Pair every chart with one concrete program recommendation.',
          'Attach an appendix listing data freshness and coverage limitations.',
        ],
      },
    ],
    gradingRubric: [
      {
        criterion: 'SQL Accuracy & Join Granularity Control',
        weightPercent: 30,
        competentStandard:
          'Queries execute cleanly, use appropriate JOIN types, and avoid obvious double-counting.',
        distinctionStandard:
          'Well-structured CTEs and window functions verified explicitly against independent row-count sanity checks.',
      },
      {
        criterion: 'Statistical Rigor & Bias Awareness',
        weightPercent: 25,
        competentStandard:
          'Reports appropriate central tendency/spread and avoids mistaking correlation for causation.',
        distinctionStandard:
          'Explicitly quantifies uncertainty (sample sizes, CIs) and surfaces selection or survivorship bias clearly.',
      },
      {
        criterion: 'Visual Clarity & Honest Chart Design',
        weightPercent: 25,
        competentStandard:
          'Readable charts with accurate scales, clear labels, and accessible colors.',
        distinctionStandard:
          'Action-oriented titles, zero clutter, direct data labels, and dual-coded accessibility.',
      },
      {
        criterion: 'Decision Relevance & Documentation',
        weightPercent: 20,
        competentStandard:
          'Insights tie logically to organizational decisions and cleaning steps are logged.',
        distinctionStandard:
          'Concise executive brief empowering leadership to act immediately while knowing exact data caveats.',
      },
    ],
  },
  cybersecurity: {
    capstoneTitle: 'Distributed Organization Security Audit & Incident Response Playbook',
    capstoneOverview:
      'Perform a comprehensive defensive posture review for a remote educational NGO—producing an asset/trust-boundary threat model, Row-Level Security access matrix, log triage report, and actionable Incident Response Playbook.',
    capstoneSteps: [
      'Map network topology, external exposure points, and sensitive data stores across web client, API, and database layers.',
      'Construct a threat model identifying trust boundaries and top OWASP risks (broken access control, secret exposure, injection).',
      'Draft an RBAC & Least-Privilege access matrix ensuring displaced learner records are strictly scoped to owners and authorized mentors.',
      'Analyze simulated authentication logs to identify brute-force or credential-stuffing IOCs and trace timeline events.',
      'Write a step-by-step Incident Response Playbook covering Preparation, Containment, Eradication, Recovery, and Learner Notification.',
    ],
    submissionChecklist: [
      'Authorization checks specified at server/database boundaries (never solely hidden UI buttons).',
      'All secrets separated cleanly into server-side environment variables rather than browser bundles.',
      'Log investigation cites exact timestamps, IP patterns, and concrete remediation steps.',
      'Incident playbook defines unambiguous escalation owners and non-destructive evidence preservation.',
    ],
    moduleAssignments: [
      {
        moduleOrder: 1,
        title: 'Remote Network Exposure & Firewall Baseline',
        deliverable: 'Port Audit & Hardening Checklist',
        estimatedHours: 6,
        steps: [
          'Audit a sample server port scan and classify necessary vs. exposed administrative services (e.g., open SSH/DB ports).',
          'Specify restrictive ingress firewall rules and TLS enforcement.',
          'Document Linux least-privilege service account permissions.',
        ],
      },
      {
        moduleOrder: 2,
        title: 'Zero-Trust RBAC & Data Privacy Architecture',
        deliverable: 'Access Control Matrix + RLS Policy Spec',
        estimatedHours: 8,
        steps: [
          'Map permissions across Learner, Mentor, Employer, and Admin roles.',
          'Write declarative Row Level Security rules restricting profile mutations to `auth.uid() = id`.',
          'Define password hashing, MFA enforcement, and secret rotation standards.',
        ],
      },
      {
        moduleOrder: 3,
        title: 'Authentication Log Triage & Brute-Force Investigation',
        deliverable: 'Incident Triage Timeline Report',
        estimatedHours: 8,
        steps: [
          'Parse simulated auth & HTTP logs to isolate anomalous failed-login bursts and user-agent anomalies.',
          'Determine whether any unauthorized session succeeded.',
          'Recommend immediate containment actions (token revocation, rate-limiting, MFA prompt).',
        ],
      },
      {
        moduleOrder: 4,
        title: 'Secure Code Review & Threat Modeling Capstone',
        deliverable: 'Complete Security Posture Report & IR Playbook',
        estimatedHours: 8,
        steps: [
          'Identify 5 planted vulnerabilities (XSS, missing auth check, exposed secret, SQL concatenation) in a sample codebase.',
          'Write exact patched code snippets for each finding.',
          'Integrate findings into the final Incident Response Playbook.',
        ],
      },
    ],
    gradingRubric: [
      {
        criterion: 'Access Control & Trust Boundary Precision',
        weightPercent: 30,
        competentStandard:
          'Applies least privilege cleanly across roles and enforces checks server-side/database-side.',
        distinctionStandard:
          'Zero-trust defense-in-depth design safeguarding vulnerable learner metadata with clear RLS/auth proofs.',
      },
      {
        criterion: 'Threat Modeling & Vulnerability Detection',
        weightPercent: 25,
        competentStandard:
          'Accurately identifies major OWASP risks and proposes valid technical fixes.',
        distinctionStandard:
          'Prioritizes vulnerabilities clearly by exploitability and impact, providing clean copy-ready patches.',
      },
      {
        criterion: 'Log Investigation & Incident Triage Accuracy',
        weightPercent: 25,
        competentStandard:
          'Reconstructs attack timeline accurately from logs without misreading benign traffic.',
        distinctionStandard:
          'Provides forensic timeline, blast-radius check, and non-destructive containment sequencing.',
      },
      {
        criterion: 'Operational Readiness of Playbook',
        weightPercent: 20,
        competentStandard:
          'Clear containment, recovery, and communication steps understandable under pressure.',
        distinctionStandard:
          'Actionable checklists with named escalation roles, secret rotation order, and ethical disclosure protocol.',
      },
    ],
  },
  'digital-marketing': {
    capstoneTitle: 'Cross-Border Social Enterprise Multi-Channel Launch Dossier',
    capstoneOverview:
      'Build an end-to-end, privacy-respecting digital launch strategy for a community enterprise or education cohort—combining audience journey mapping, organic SEO architecture, A/B budget allocation, and UTM attribution governance.',
    capstoneSteps: [
      'Define two distinct target personas, mapping their 4-stage journey and bandwidth constraints.',
      'Craft a plain-language value proposition and landing page wireframe aligned strictly to user intent.',
      'Design a 6-article evergreen SEO & editorial calendar targeting real informational and program queries.',
      'Allocate a quarterly test budget using the 80/20 rule with one controlled single-variable A/B creative test.',
      'Establish a standardized lowercase UTM taxonomy, conversion funnel targets, and 30-day optimization stop/scale rules.',
    ],
    submissionChecklist: [
      'Value proposition avoids unrealistic "guaranteed job" claims and respects consent/privacy rules.',
      'UTM conventions use consistent lowercase syntax and contain zero PII.',
      'Landing page message matches outreach ad promise word-for-concept.',
      'Primary KPIs measure qualified conversions/completions rather than raw impressions alone.',
    ],
    moduleAssignments: [
      {
        moduleOrder: 1,
        title: 'Audience Journey & Ethical Messaging Brief',
        deliverable: 'Persona Matrix + Dignity-Centered Copy Guide',
        estimatedHours: 6,
        steps: [
          'Map Awareness -> Consideration -> Action -> Retention questions for two audience groups.',
          'Write a verified four-part Value Proposition statement.',
          'Audit draft copy for plain-language clarity and multilingual readiness.',
        ],
      },
      {
        moduleOrder: 2,
        title: 'Evergreen Search & Editorial Architecture',
        deliverable: '6-Piece Content Calendar + SEO Briefs',
        estimatedHours: 8,
        steps: [
          'Map 6 target search queries by intent and define clean H1/meta structure per page.',
          'Write one 600-word pillar guide using inverted-pyramid scannability.',
          'Design a realistic two-week repurposing cadence.',
        ],
      },
      {
        moduleOrder: 3,
        title: 'Funnel Math & Controlled Campaign Test Plan',
        deliverable: 'Budget Allocation & A/B Hypothesis Sheet',
        estimatedHours: 8,
        steps: [
          'Model expected impressions -> clicks -> landing-page actions -> CPA.',
          'Design one clean A/B experiment isolating a single creative variable.',
          'Apply contextual, consent-first targeting rules.',
        ],
      },
      {
        moduleOrder: 4,
        title: 'UTM Schema & Outcome Reporting Deck',
        deliverable: 'Attribution Specification + Launch Audit',
        estimatedHours: 6,
        steps: [
          'Build a reusable UTM builder table covering email, social, and partner links.',
          'Draft a sample monthly executive dashboard separating vanity metrics from outcome KPIs.',
          'Present risk thresholds and optimization triggers.',
        ],
      },
    ],
    gradingRubric: [
      {
        criterion: 'Strategic Clarity & Audience Alignment',
        weightPercent: 25,
        competentStandard:
          'Channels, messaging, and landing experience fit realistic audience constraints.',
        distinctionStandard:
          'Sharp, plain-language positioning grounded in user barriers and low-bandwidth accessibility.',
      },
      {
        criterion: 'Organic Search & Content Craft',
        weightPercent: 25,
        competentStandard:
          'Logical search intent mapping, scannable copy, and realistic editorial cadence.',
        distinctionStandard:
          'Cohesive pillar-and-spoke ecosystem with compelling calls to action and high readability.',
      },
      {
        criterion: 'Attribution, Funnel Math & Testing Discipline',
        weightPercent: 30,
        competentStandard:
          'Accurate CPA/CVR math, clean UTM naming, and valid single-variable test design.',
        distinctionStandard:
          'Rigorous outcome KPIs paired with clear pre-committed pause/scale thresholds.',
      },
      {
        criterion: 'Ethics, Consent & Privacy Compliance',
        weightPercent: 20,
        competentStandard:
          'Respects consent, excludes PII from URLs, and avoids exaggerated claims.',
        distinctionStandard:
          'Exemplary dignity-centered storytelling and privacy-preserving first-party growth loop.',
      },
    ],
  },
  'business-entrepreneurship': {
    capstoneTitle: 'Evidence-Backed 12-Month Venture Operating & Cash-Flow Dossier',
    capstoneOverview:
      'Produce an incubator-grade launch dossier for a local or remote venture—integrating customer discovery evidence, unit economics, a 12-month cash-flow forecast, operational SOPs, and supplier risk controls.',
    capstoneSteps: [
      'Conduct and synthesize 8–10 structured past-behavior customer discovery interviews documenting urgent workarounds.',
      'Validate pricing through a low-cost Minimal Viable Offer or concierge pilot plan with clear pass/fail metrics.',
      'Build a transparent unit economics model (price, direct variable costs, gross margin %, monthly fixed costs, break-even volume).',
      'Construct a 12-month monthly cash-flow forecast reflecting realistic client payment timing and tax/contingency reserves.',
      'Document core delivery SOPs, cross-border invoicing/compliance checklists, and backup vendor plans.',
    ],
    submissionChecklist: [
      'Sales projections in the narrative reconcile directly with delivery hours and variable costs in the spreadsheet.',
      'Cash-flow forecast tracks when money enters/leaves the bank rather than accrual invoice dates.',
      'Interview summary quotes real past behavior rather than leading "would you buy" questions.',
      'Operational plan identifies at least one single-point failure and backup supplier.',
    ],
    moduleAssignments: [
      {
        moduleOrder: 1,
        title: 'Customer Discovery & Minimal Viable Offer',
        deliverable: 'Interview Synthesis + Concierge Pilot Plan',
        estimatedHours: 6,
        steps: [
          'Draft a non-leading interview script focused on recent customer workarounds.',
          'Summarize recurring pains across 8–10 conversations.',
          'Design a manual pilot offer testing real commitment before heavy spending.',
        ],
      },
      {
        moduleOrder: 2,
        title: 'Unit Economics & 12-Month Cash Runway Model',
        deliverable: 'Financial Model Spreadsheet',
        estimatedHours: 8,
        steps: [
          'Itemize direct variable costs per unit including payment and shipping fees.',
          'Calculate contribution margin and exact monthly break-even units.',
          'Project 12 monthly cash balances accounting for 30–60 day payment delays.',
        ],
      },
      {
        moduleOrder: 3,
        title: 'Service Delivery SOP & Compliance Checklist',
        deliverable: 'Operations & Risk Playbook',
        estimatedHours: 6,
        steps: [
          'Write a step-by-step onboarding-to-delivery checklist with revision boundaries.',
          'Draft a compliant international invoice template and separate tax reserve rule.',
          'Specify backup vendors and asset ownership safeguards.',
        ],
      },
      {
        moduleOrder: 4,
        title: 'Venture Review Brief & Retention Loop',
        deliverable: 'Executive Venture Dossier',
        estimatedHours: 6,
        steps: [
          'Calculate LTV:CAC sanity check under conservative retention assumptions.',
          'Cross-check financial, marketing, and operational consistency.',
          'Write a crisp 2-minute executive thesis and 90-day milestone table.',
        ],
      },
    ],
    gradingRubric: [
      {
        criterion: 'Customer Evidence & Validation Rigor',
        weightPercent: 25,
        competentStandard:
          'Clear problem definition backed by unbiased interview notes and testable pilot design.',
        distinctionStandard:
          'Compelling discovery synthesis proving urgent existing workaround costs and concrete buyer commitment.',
      },
      {
        criterion: 'Unit Economics & Cash-Flow Accuracy',
        weightPercent: 30,
        competentStandard:
          'Correct separation of fixed vs. variable costs, break-even math, and cash timing ledger.',
        distinctionStandard:
          'Conservative, internally consistent 12-month forecast surfacing working-capital pinch points and mitigation.',
      },
      {
        criterion: 'Operational Resilience & Governance',
        weightPercent: 25,
        competentStandard:
          'Repeatable SOPs, separate business bookkeeping, and backup supplier awareness.',
        distinctionStandard:
          'Thorough quality gates, clean IP/domain ownership governance, and proactive compliance verification plan.',
      },
      {
        criterion: 'Executive Coherence & Realism',
        weightPercent: 20,
        competentStandard:
          'Readable dossier with clear 90-day next steps.',
        distinctionStandard:
          'Candid risk disclosure paired with seamless numerical alignment between demand, capacity, and finances.',
      },
    ],
  },
  'project-management': {
    capstoneTitle: 'Cross-Border Program Charter, Sprint Plan & Risk Playbook',
    capstoneOverview:
      'Produce a complete end-to-end delivery package for a multi-country digital program—covering charter & RACI governance, 100%-rule WBS, Critical Path schedule, Agile sprint backlog, risk register, and handover checklist.',
    capstoneSteps: [
      'Author a 1-page Project Charter defining measurable success criteria, priority constraints, and explicit Out-of-Scope boundaries.',
      'Build a RACI responsibility matrix assigning singular Accountable ownership across cross-functional deliverables.',
      'Decompose full delivery (including QA, translation, and closure) into a WBS and identify Critical Path dependencies.',
      'Convert the release plan into prioritized user stories with testable Given/When/Then acceptance criteria and WIP limits.',
      'Compile a scored Risk Register (Likelihood x Impact), change-control template, and operational closure checklist.',
    ],
    submissionChecklist: [
      'Every WBS row accounts for verification, localization, and handover—zero invisible work.',
      'Every RACI deliverable has strictly ONE "A" (Accountable) owner.',
      'Schedule identifies Critical Path duration vs. tasks with float.',
      'High-exposure risks pair named owners with both preventive mitigations and fallback triggers.',
    ],
    moduleAssignments: [
      {
        moduleOrder: 1,
        title: 'Program Charter, RACI & 100%-Rule WBS',
        deliverable: 'Initiation & Scope Governance Pack',
        estimatedHours: 6,
        steps: [
          'Write measurable charter targets and explicit Phase 1 exclusions.',
          'Map stakeholders and build a clean RACI table.',
          'Break deliverables down to actionable 4–20 hour work packages.',
        ],
      },
      {
        moduleOrder: 2,
        title: 'Critical Path Schedule & Three-Point Budget',
        deliverable: 'Baseline Dependency Plan & PERT Estimate',
        estimatedHours: 8,
        steps: [
          'Sequence dependencies to calculate total Critical Path duration.',
          'Apply PERT three-point estimation to uncertain engineering and QA tasks.',
          'Separate transparent contingency reserve from base task estimates.',
        ],
      },
      {
        moduleOrder: 3,
        title: 'Agile Backlog & Distributed Ceremony Guide',
        deliverable: 'Prioritized Sprint Plan + Async Playbook',
        estimatedHours: 8,
        steps: [
          'Prioritize 10 backlog items using MoSCoW and write testable acceptance criteria.',
          'Define async daily update templates across time zones and WIP limits.',
          'Outline a 30-minute blameless retrospective format.',
        ],
      },
      {
        moduleOrder: 4,
        title: 'Scored Risk Register & Closure Runbook',
        deliverable: 'Risk Matrix + Handover Sign-Off Package',
        estimatedHours: 6,
        steps: [
          'Score 6 program risks (Likelihood x Impact) with owners and triggers.',
          'Draft a lightweight Change Request evaluation log.',
          'Finalize operational runbook and stakeholder closure checklist.',
        ],
      },
    ],
    gradingRubric: [
      {
        criterion: 'Scope Architecture & Governance Clarity',
        weightPercent: 25,
        competentStandard:
          'Clear charter, unambiguous In/Out of Scope, and singular RACI accountability.',
        distinctionStandard:
          'Comprehensive 100%-rule WBS seamlessly balancing Scope, Schedule, Cost, and Quality.',
      },
      {
        criterion: 'Scheduling, Dependencies & Estimation Rigor',
        weightPercent: 25,
        competentStandard:
          'Accurate Critical Path identification and realistic three-point cost/effort estimates.',
        distinctionStandard:
          'Smart parallelization that protects deadlines alongside disciplined contingency reserve management.',
      },
      {
        criterion: 'Agile Delivery & Distributed Team Flow',
        weightPercent: 25,
        competentStandard:
          'Prioritized stories with testable acceptance criteria and time-zone-respectful async workflows.',
        distinctionStandard:
          'Thoughtful WIP flow governance and blameless continuous improvement loops.',
      },
      {
        criterion: 'Risk Management & Handover Readiness',
        weightPercent: 25,
        competentStandard:
          'Actionable risk register, transparent change process, and complete closure checklist.',
        distinctionStandard:
          'Proactive early-warning triggers paired with an institutional-grade operational handover package.',
      },
    ],
  },
  'graphic-design': {
    capstoneTitle: 'Institutional Visual Identity Manual, Editorial Spread & Accessible Campaign Kit',
    capstoneOverview:
      'Develop a cohesive visual design system—including an accessible 12-column editorial layout, disciplined type scale, monochrome-tested vector mark, WCAG-compliant color tokens, and print/web export specifications.',
    capstoneSteps: [
      'Design a simple geometric SVG brand mark verified cleanly at 16px favicon scale in flat monochrome.',
      'Establish a 60-30-10 color palette verifying >= 4.5:1 WCAG AA contrast across all foreground/background text tokens.',
      'Pair a display and body typeface into a harmonic modular scale with tabular numerals and 65ch prose measure.',
      'Typeset a multi-page editorial impact report spread on a strict 12-column grid respecting multilingual spacing.',
      'Compile a Brand Guidelines & Production Spec documenting clear-space rules, Do/Do-Not comparisons, CMYK 300 DPI print exports, and lightweight web SVGs.',
    ],
    submissionChecklist: [
      'Logo mark reads cleanly in 1-color black on white at 16px height.',
      'All body and metadata text pairs pass >= 4.5:1 WCAG AA contrast (documented with exact ratios).',
      'Body columns sit within comfortable 55–75 character reading measure with balanced headings.',
      'Separate production specifications exist for print (CMYK, 3mm bleed, 300 DPI) and web (SVG/compressed WebP).',
    ],
    moduleAssignments: [
      {
        moduleOrder: 1,
        title: 'Swiss Grid Educational Poster Series',
        deliverable: '3 Asymmetric 12-Column Posters',
        estimatedHours: 7,
        steps: [
          'Construct an asymmetric 12-column grid with consistent 8px-multiple spacing.',
          'Create three distinct posters sharing unified focal hierarchy without decorative box clutter.',
          'Validate the 5-second squint test on each composition.',
        ],
      },
      {
        moduleOrder: 2,
        title: 'Multilingual Editorial Impact Spread',
        deliverable: '4–6 Page Typeset Publication Layout',
        estimatedHours: 8,
        steps: [
          'Set display/body pairings with tight headline leading and ~1.6 body line-height.',
          'Enable tabular numerals on statistical tables and test 30% longer translated headings.',
          'Maintain clean left-aligned margins and 65ch body reading columns.',
        ],
      },
      {
        moduleOrder: 3,
        title: 'Vector Identity & WCAG Brand Book',
        deliverable: 'Brand Guidelines Manual (8 Pages)',
        estimatedHours: 8,
        steps: [
          'Refine geometric vector mark and document clear-space and minimum sizing.',
          'Document 60-30-10 HEX/RGB/CMYK palette and exact WCAG contrast audit table.',
          'Create visual "Do / Do Not" guidance slides.',
        ],
      },
      {
        moduleOrder: 4,
        title: 'Pre-Flight Export & Case Study Defense',
        deliverable: 'Print PDF + Web Asset Kit + Portfolio Case Study',
        estimatedHours: 6,
        steps: [
          'Export commercial print PDF with 3mm bleed and 300 DPI imagery alongside minified web SVGs.',
          'Write a structured 5-minute portfolio case study explaining accessibility and grid rationale.',
          'Conduct final cross-device legibility audit.',
        ],
      },
    ],
    gradingRubric: [
      {
        criterion: 'Grid Discipline, Balance & Visual Restraint',
        weightPercent: 25,
        competentStandard:
          'Consistent edge alignment, clean spacing rhythm, and uncluttered focal hierarchy.',
        distinctionStandard:
          'Effortless institutional polish where generous whitespace and precision grids carry authority.',
      },
      {
        criterion: 'Typography & Editorial Craft',
        weightPercent: 25,
        competentStandard:
          'Disciplined 2-font pairing, comfortable measure/leading, and clean tabular figures.',
        distinctionStandard:
          'Resilient multilingual readiness with balanced headline wrapping and crisp scannability.',
      },
      {
        criterion: 'Accessibility, Contrast & Brand System Cohesion',
        weightPercent: 30,
        competentStandard:
          'Verified >= 4.5:1 text contrast, scalable vector mark, and coherent 60-30-10 color balance.',
        distinctionStandard:
          'Exemplary dual-coded states, monochrome-resilient emblem, and foolproof Do/Do-Not brand rules.',
      },
      {
        criterion: 'Production Readiness & Design Rationale',
        weightPercent: 20,
        competentStandard:
          'Correctly separated print (bleed/CMYK) vs. web (lightweight SVG) files plus readable case study.',
        distinctionStandard:
          'Persuasive stakeholder rationale linking every aesthetic choice directly to comprehension and inclusion.',
      },
    ],
  },
};
