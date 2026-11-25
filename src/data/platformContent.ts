import type {
  LearningPathway,
  OpportunityTrack,
  ProcessStage,
  SdgGoal,
  TargetAudienceGroup,
} from '../types/platform';

export const HERO_IMAGE_PATH =
  '/src/assets/images/hero_students_learning_1795596730883.jpg';
export const ABOUT_IMAGE_PATH =
  '/src/assets/images/about_community_mentorship_1795596731634.jpg';
export const CERTIFICATION_IMAGE_PATH =
  '/src/assets/images/certification_assessment_studio_1795596732353.jpg';
export const OPPORTUNITIES_IMAGE_PATH =
  '/src/assets/images/opportunities_remote_workspace_1795596732778.jpg';

export const TARGET_AUDIENCE_GROUPS: TargetAudienceGroup[] = [
  {
    role: 'learner',
    title: 'Refugee & Displaced Learners',
    description:
      'Talented youth and adults whose formal education or career trajectories were interrupted by conflict, displacement, or cross-border relocation.',
    primaryBenefit: 'Structured, low-barrier professional training and verified skill portfolios.',
  },
  {
    role: 'mentor',
    title: 'Teachers & Professional Mentors',
    description:
      'Experienced engineers, analysts, designers, and educators contributing structured instruction, project reviews, and career guidance.',
    primaryBenefit: 'Guided mentorship cohorts and standardized competency rubrics.',
  },
  {
    role: 'employer',
    title: 'Employers & Recruitment Partners',
    description:
      'International organizations and remote-first companies seeking skilled, vetted candidates based on demonstrated practical capability.',
    primaryBenefit: 'Transparent evidence of project execution and partner-reviewed readiness.',
  },
  {
    role: 'institution',
    title: 'Universities & Accredited Institutions',
    description:
      'Higher education faculties and recognized awarding bodies collaborating on formal assessment standards and recognized qualifications.',
    primaryBenefit: 'Aligned curriculum mapping and accountable credential governance.',
  },
  {
    role: 'admin',
    title: 'Platform Governance & Administrators',
    description:
      'Program coordinators overseeing academic integrity, safeguarding standards, partner onboarding, and equitable regional access.',
    primaryBenefit: 'Auditable oversight across cohorts, assessments, and institutional partners.',
  },
];

export const HOW_IT_WORKS_STAGES: ProcessStage[] = [
  {
    stepNumber: '01',
    title: 'Create your account',
    description:
      'Register your learner profile with accessible onboarding designed for displaced and mobile learners, including low-bandwidth regions.',
    actor: 'Learner Onboarding',
  },
  {
    stepNumber: '02',
    title: 'Choose a professional learning pathway',
    description:
      'Select a career-aligned track across software, AI, data, cybersecurity, business, project management, or design based on your goals.',
    actor: 'Pathway Selection',
  },
  {
    stepNumber: '03',
    title: 'Learn from structured courses',
    description:
      'Progress through modular, industry-relevant lessons combining foundational theory, real-world case studies, and guided workshops.',
    actor: 'Structured Curriculum',
  },
  {
    stepNumber: '04',
    title: 'Complete practical assignments and assessments',
    description:
      'Build real portfolio artifacts and complete competency-based evaluations reviewed against transparent professional rubrics.',
    actor: 'Competency Review',
  },
  {
    stepNumber: '05',
    title: 'Earn qualifications through recognized certification partners',
    description:
      'Upon meeting assessment standards, qualify for accredited examinations or joint credentials issued with approved awarding partners.',
    actor: 'Partner Certification',
  },
  {
    stepNumber: '06',
    title: 'Connect with employers and global opportunities',
    description:
      'Transition into mentorship networks, remote internships, international employment pipelines, and continuing academic pathways.',
    actor: 'Global Placement',
  },
];

export const LEARNING_PATHWAYS: LearningPathway[] = [
  {
    id: 'software-development',
    code: 'GSP-101',
    title: 'Software Development',
    category: 'technology',
    categoryLabel: 'Technology & Engineering',
    summary:
      'Build production web applications, RESTful APIs, and tested software architectures using modern engineering workflows.',
    level: 'Foundation to Professional',
    estimatedWeeks: 20,
    coreSkills: [
      'TypeScript & JavaScript',
      'Full-Stack Web Systems',
      'Relational Databases',
      'Git & Automated Testing',
    ],
    skillBadgeTitle: 'Verified Full-Stack Web Builder Milestone',
    practicalCapstone:
      'Architect and deploy an accessible community resource directory with documented API endpoints and unit tests.',
    partnerRecognitionNote:
      'Mapped toward external software engineering micro-credentials with accredited academic partners.',
    modules: [
      {
        id: 'sd-1',
        order: 1,
        title: 'Programming Foundations & Version Control',
        durationWeeks: 4,
        estimatedHours: 24,
        lessons: [
          'Lesson 1.1: Computational Thinking, Variables & Control Flow',
          'Lesson 1.2: Modular Functions, Type Safety & Clean Code',
          'Lesson 1.3: Git Branching, Pull Requests & Peer Code Review',
        ],
        deliverable: 'CLI Utility & Git Workflow',
        projectDescription:
          'Build a command-line community scholarship eligibility checker in TypeScript with clean Git commit history and unit assertions.',
      },
      {
        id: 'sd-2',
        order: 2,
        title: 'Frontend Interfaces & Accessible Web Design',
        durationWeeks: 5,
        estimatedHours: 30,
        lessons: [
          'Lesson 2.1: Semantic HTML5 & Low-Bandwidth Responsive Layouts',
          'Lesson 2.2: React Component State & Accessible Form Validation',
          'Lesson 2.3: WCAG AA Contrast, Keyboard Navigation & Error States',
        ],
        deliverable: 'Responsive Web Application',
        projectDescription:
          'Create a lightweight, mobile-first service locator interface that remains usable on 3G connections and screen readers.',
      },
      {
        id: 'sd-3',
        order: 3,
        title: 'Backend Services & Database Modeling',
        durationWeeks: 6,
        estimatedHours: 36,
        lessons: [
          'Lesson 3.1: Designing Normalized Relational Schemas',
          'Lesson 3.2: RESTful API Endpoints, Status Codes & Input Validation',
          'Lesson 3.3: Authentication Flows & Row-Level Data Access Rules',
        ],
        deliverable: 'Authenticated REST API',
        projectDescription:
          'Implement an API service with parameterized queries, user role checks, and structured JSON error responses.',
      },
      {
        id: 'sd-4',
        order: 4,
        title: 'Testing, Security & Capstone Delivery',
        durationWeeks: 5,
        estimatedHours: 30,
        lessons: [
          'Lesson 4.1: Automated Integration Testing & Edge-Case Coverage',
          'Lesson 4.2: Preventing Injection, XSS & Secret Exposure',
          'Lesson 4.3: Production Deployment, Monitoring & Technical Documentation',
        ],
        deliverable: 'Reviewed Production Portfolio Project',
        projectDescription:
          'Complete an end-to-end community resource directory reviewed by a senior engineering mentor against industry rubrics.',
      },
    ],
    sampleLesson: {
      moduleTitle: 'Module 01 · Programming Foundations & Version Control',
      lessonTitle: 'Designing Resilient, Low-Bandwidth Software Architecture',
      estimatedMinutes: 15,
      learningObjectives: [
        'Explain why separating data validation from UI rendering prevents brittle bugs.',
        'Identify three practical techniques that keep web apps fast on constrained mobile networks.',
        'Apply clear Git commit structure when collaborating across time zones.',
      ],
      sections: [
        {
          heading: '1. Engineering for Real-World Constraints',
          body: 'Many displaced learners and remote teams connect over shared mobile hotspots or intermittent 3G networks. Reliable software engineering begins by respecting bandwidth and device limits: keeping payloads small, validating user input immediately before network requests, and avoiding unnecessary third-party scripts.',
          keyTakeaway:
            'Fast, resilient applications treat slow connections as a baseline requirement rather than an edge case.',
        },
        {
          heading: '2. Separation of Concerns in Practice',
          body: 'When building an application, keep business rules (such as email validation, access checks, and data formatting) in pure, testable TypeScript modules separate from visual React components. This allows mentors and automated test suites to verify your logic independently of the interface.',
        },
      ],
      quiz: [
        {
          id: 'sd-q1',
          question:
            'Why is client-side validation paired with server-side validation in production web apps?',
          options: [
            'Client-side validation gives instant user feedback, while server-side validation enforces security and data integrity.',
            'Client-side validation replaces the need for database constraints completely.',
            'Server-side validation is only used to style error messages.',
          ],
          correctIndex: 0,
          explanation:
            'Client-side checks save users from wasted round trips on slow networks, while server-side validation protects the system from tampered or bypassed requests.',
        },
        {
          id: 'sd-q2',
          question:
            'Which practice best supports asynchronous engineering collaboration across regions?',
          options: [
            'Pushing all weekly work into a single commit labeled "updates".',
            'Writing small, focused pull requests with clear descriptions and passing tests.',
            'Hardcoding API keys directly inside frontend components for faster setup.',
          ],
          correctIndex: 1,
          explanation:
            'Focused pull requests with clear descriptions allow mentors and teammates in other time zones to review code accurately without live meetings.',
        },
        {
          id: 'sd-q3',
          question:
            'What makes a web interface resilient on low-bandwidth connections?',
          options: [
            'Loading multiple unoptimized 4K background videos on page open.',
            'Using semantic HTML, lightweight assets, and clear offline/error states.',
            'Requiring users to reload the full page after every form field.',
          ],
          correctIndex: 1,
          explanation:
            'Semantic HTML, compressed assets, and informative error states minimize data usage and keep core workflows accessible on constrained connections.',
        },
      ],
    },
  },
  {
    id: 'artificial-intelligence',
    code: 'GSP-102',
    title: 'Artificial Intelligence',
    category: 'technology',
    categoryLabel: 'Technology & Engineering',
    summary:
      'Understand applied machine learning, large language model integration, responsible AI governance, and evaluation workflows.',
    level: 'Intermediate',
    estimatedWeeks: 18,
    coreSkills: [
      'Python for ML',
      'Applied Model Evaluation',
      'LLM Application Design',
      'Responsible AI Ethics',
    ],
    skillBadgeTitle: 'Applied AI & Evaluation Practitioner Milestone',
    practicalCapstone:
      'Build a multilingual educational study assistant with documented evaluation benchmarks and bias safeguards.',
    partnerRecognitionNote:
      'Structured for formal evaluation alongside accredited applied computing partners.',
    modules: [
      {
        id: 'ai-1',
        order: 1,
        title: 'Mathematics & Python Foundations for AI',
        durationWeeks: 4,
        estimatedHours: 22,
        lessons: [
          'Lesson 1.1: Vectors, Matrices & Probability Intuition in Python',
          'Lesson 1.2: Data Cleaning & Feature Preparation with NumPy and Pandas',
          'Lesson 1.3: Reproducible Experiments & Notebook Hygiene',
        ],
        deliverable: 'Data Pipeline Notebook',
        projectDescription:
          'Prepare a multilingual educational text corpus with reproducible preprocessing scripts and summary statistics.',
      },
      {
        id: 'ai-2',
        order: 2,
        title: 'Supervised Learning & Model Validation',
        durationWeeks: 5,
        estimatedHours: 28,
        lessons: [
          'Lesson 2.1: Regression, Classification & Train/Test Splitting',
          'Lesson 2.2: Precision, Recall, F1 & Class Imbalance Traps',
          'Lesson 2.3: Preventing Data Leakage & Overfitting',
        ],
        deliverable: 'Classification Evaluation Report',
        projectDescription:
          'Train and compare two classification models on a real civic dataset, documenting error rates across demographic subgroups.',
      },
      {
        id: 'ai-3',
        order: 3,
        title: 'Generative AI & Retrieval Systems',
        durationWeeks: 5,
        estimatedHours: 30,
        lessons: [
          'Lesson 3.1: How Large Language Models Process Context & Tokens',
          'Lesson 3.2: Grounding Answers with Retrieval-Augmented Generation (RAG)',
          'Lesson 3.3: Structured Outputs, Citations & Hallucination Mitigation',
        ],
        deliverable: 'Grounded Document Assistant',
        projectDescription:
          'Design a document question-answering workflow that cites exact source passages and declines to guess when evidence is missing.',
      },
      {
        id: 'ai-4',
        order: 4,
        title: 'AI Safety, Governance & Capstone',
        durationWeeks: 4,
        estimatedHours: 24,
        lessons: [
          'Lesson 4.1: Fairness, Privacy & Human-in-the-Loop Safeguards',
          'Lesson 4.2: Building Automated Benchmark Suites for Prompts',
          'Lesson 4.3: Capstone Review & Model Card Documentation',
        ],
        deliverable: 'Audited AI System Specification',
        projectDescription:
          'Publish a complete AI model card, evaluation benchmark suite, and risk mitigation plan for a community learning assistant.',
      },
    ],
    sampleLesson: {
      moduleTitle: 'Module 03 · Generative AI & Retrieval Systems',
      lessonTitle: 'Grounding AI Outputs with Retrieval & Citation Checks',
      estimatedMinutes: 15,
      learningObjectives: [
        'Explain why ungrounded language models can fabricate plausible-sounding facts.',
        'Describe how Retrieval-Augmented Generation (RAG) anchors responses in verified documents.',
        'Identify evaluation metrics that matter for high-stakes educational tools.',
      ],
      sections: [
        {
          heading: '1. Why Grounding Matters in Education and Public Services',
          body: 'Language models predict probable continuations of text rather than consulting a verified fact ledger by default. In refugee legal guidance, healthcare, or credential counseling, a fabricated citation can cause real harm. Grounding ensures the system retrieves relevant, verified excerpts first and constrains its answer strictly to that evidence.',
          keyTakeaway:
            'Always require source attribution and an explicit "insufficient evidence" fallback for factual AI assistants.',
        },
        {
          heading: '2. Evaluating Beyond Vibes',
          body: 'Professional AI builders measure system reliability with test sets—curated questions with known source answers—tracking citation accuracy, refusal correctness when data is absent, and latency across languages.',
        },
      ],
      quiz: [
        {
          id: 'ai-q1',
          question:
            'What is the primary purpose of Retrieval-Augmented Generation (RAG)?',
          options: [
            'To increase model font size in the browser.',
            'To retrieve verified source documents and ground the model response in real evidence.',
            'To eliminate the need for any human testing or review.',
          ],
          correctIndex: 1,
          explanation:
            'RAG supplies authoritative context chunks at query time so the model answers from verified records rather than relying solely on parametric memory.',
        },
        {
          id: 'ai-q2',
          question:
            'When evaluating a classifier on an imbalanced dataset (e.g., 95% negative, 5% positive), why is accuracy alone misleading?',
          options: [
            'A model predicting "negative" for every case still scores 95% accuracy while missing all positive cases.',
            'Accuracy cannot be calculated on binary datasets.',
            'Precision and recall always equal 100% when accuracy is 95%.',
          ],
          correctIndex: 0,
          explanation:
            'On imbalanced classes, precision, recall, and F1 reveal whether the model actually detects the minority class rather than guessing the majority class.',
        },
        {
          id: 'ai-q3',
          question:
            'What should a grounded educational assistant do when retrieved documents do not contain an answer?',
          options: [
            'Invent a likely answer so the user is never told no.',
            'State clearly that the verified source materials do not contain that information.',
            'Copy random paragraphs from unrelated modules.',
          ],
          correctIndex: 1,
          explanation:
            'Honest abstention protects learner trust and prevents misinformation from spreading.',
        },
      ],
    },
  },
  {
    id: 'data-science-analytics',
    code: 'GSP-103',
    title: 'Data Science and Analytics',
    category: 'technology',
    categoryLabel: 'Data & Analytics',
    summary:
      'Transform raw operational and humanitarian datasets into rigorous statistical analysis, SQL models, and executive reporting.',
    level: 'Foundation to Professional',
    estimatedWeeks: 16,
    coreSkills: [
      'SQL & Data Warehousing',
      'Python Statistical Analysis',
      'Data Visualization',
      'Impact Measurement',
    ],
    skillBadgeTitle: 'Applied SQL & Data Analytics Milestone',
    practicalCapstone:
      'Clean, analyze, and present an open international development dataset with reproducible SQL queries and visual briefs.',
    partnerRecognitionNote:
      'Aligned with international data literacy and applied analytics assessment frameworks.',
    modules: [
      {
        id: 'ds-1',
        order: 1,
        title: 'Spreadsheet Modeling & Data Literacy',
        durationWeeks: 3,
        estimatedHours: 18,
        lessons: [
          'Lesson 1.1: Data Types, Missing Values & Tidy Table Structure',
          'Lesson 1.2: Pivot Tables, Conditional Aggregations & Audit Checks',
          'Lesson 1.3: Recognizing Sampling Bias & Misleading Averages',
        ],
        deliverable: 'Cleaned Analytical Workbook',
        projectDescription:
          'Audit and standardize a multi-region education attendance spreadsheet with documented cleaning rules.',
      },
      {
        id: 'ds-2',
        order: 2,
        title: 'Relational Querying with SQL',
        durationWeeks: 4,
        estimatedHours: 24,
        lessons: [
          'Lesson 2.1: Filtering, Grouping & Aggregating with SELECT and GROUP BY',
          'Lesson 2.2: Inner vs. Left Joins Across Normalized Tables',
          'Lesson 2.3: Window Functions & Common Table Expressions (CTEs)',
        ],
        deliverable: 'Multi-Table Reporting Queries',
        projectDescription:
          'Write reproducible SQL queries analyzing cohort completion trends across regions without duplicating row counts.',
      },
      {
        id: 'ds-3',
        order: 3,
        title: 'Python Exploratory Analysis & Statistics',
        durationWeeks: 5,
        estimatedHours: 28,
        lessons: [
          'Lesson 3.1: Distributions, Medians, Percentiles & Outlier Analysis',
          'Lesson 3.2: Correlation vs. Causation in Program Evaluation',
          'Lesson 3.3: Confidence Intervals & Hypothesis Testing Basics',
        ],
        deliverable: 'Statistical Hypothesis Study',
        projectDescription:
          'Analyze open UNESCO/UNHCR-style educational access metrics in Python and summarize uncertainty transparently.',
      },
      {
        id: 'ds-4',
        order: 4,
        title: 'Decision Dashboards & Stakeholder Briefing',
        durationWeeks: 4,
        estimatedHours: 22,
        lessons: [
          'Lesson 4.1: Choosing Honest Charts & Accessible Color Palettes',
          'Lesson 4.2: Designing Executive KPI Briefs with Explicit Context',
          'Lesson 4.3: Capstone Presentation & Data Storytelling Critique',
        ],
        deliverable: 'Executive Analytics Case Study',
        projectDescription:
          'Deliver a clear, stakeholder-ready analytical brief pairing visual charts with SQL methodology notes.',
      },
    ],
    sampleLesson: {
      moduleTitle: 'Module 02 · Relational Querying with SQL',
      lessonTitle: 'Avoiding Double-Counting When Joining Normalized Tables',
      estimatedMinutes: 14,
      learningObjectives: [
        'Distinguish between one-to-many and many-to-many relationships in SQL joins.',
        'Use pre-aggregated CTEs to compute accurate totals across related tables.',
        'Verify query totals with independent row-count sanity checks.',
      ],
      sections: [
        {
          heading: '1. The Hidden Join Multiplication Trap',
          body: 'Suppose a student table has one row per learner, and an enrollments table has three rows per learner. If you join them directly and sum a student-level scholarship column, each student amount gets counted three times. In humanitarian and financial reporting, join fan-out is one of the most frequent analytical errors.',
          keyTakeaway:
            'Always check table granularity before summing metrics across a SQL JOIN.',
        },
        {
          heading: '2. Aggregating Before Joining',
          body: 'Using a Common Table Expression (CTE) to aggregate child rows first—such as counting completed modules per learner_id—ensures a clean one-to-one join back to the parent table and preserves exact totals.',
        },
      ],
      quiz: [
        {
          id: 'ds-q1',
          question:
            'If Table A has 1 row per learner and Table B has 4 module rows per learner, what happens if you sum a learner-level stipend after joining A to B directly?',
          options: [
            'The stipend total will be inflated by roughly 4x due to row multiplication.',
            'SQL automatically divides the stipend by 4.',
            'The query fails with a syntax error.',
          ],
          correctIndex: 0,
          explanation:
            'Direct one-to-many joins duplicate parent attributes across every matching child row, inflating sums unless aggregated beforehand.',
        },
        {
          id: 'ds-q2',
          question:
            'Which SQL join retains all learners even if they have zero rows in the enrollments table?',
          options: ['INNER JOIN', 'LEFT JOIN from learners to enrollments', 'CROSS JOIN'],
          correctIndex: 1,
          explanation:
            'A LEFT JOIN preserves every row from the left (learners) table and fills unmatched right-side columns with NULL.',
        },
        {
          id: 'ds-q3',
          question:
            'When reporting skewed income or study-hour distributions, which summary pair is most informative?',
          options: [
            'Mean alone without sample size.',
            'Median alongside interquartile range (25th–75th percentiles) and sample count.',
            'Only the highest maximum value.',
          ],
          correctIndex: 1,
          explanation:
            'Median and percentiles resist extreme outliers and show decision-makers the typical experience plus spread.',
        },
      ],
    },
  },
  {
    id: 'cybersecurity',
    code: 'GSP-104',
    title: 'Cybersecurity',
    category: 'technology',
    categoryLabel: 'Security & Infrastructure',
    summary:
      'Develop practical defensive security capabilities across network resilience, threat analysis, access control, and incident response.',
    level: 'Intermediate',
    estimatedWeeks: 18,
    coreSkills: [
      'Network Security',
      'Identity & Access Control',
      'Vulnerability Assessment',
      'Incident Triage',
    ],
    skillBadgeTitle: 'Defensive Security & Access Governance Milestone',
    practicalCapstone:
      'Conduct a structured security posture audit and write an incident response playbook for a distributed remote organization.',
    partnerRecognitionNote:
      'Prepares learners for recognized third-party cybersecurity certification examinations.',
    modules: [
      {
        id: 'cs-1',
        order: 1,
        title: 'Operating Systems & Networking Fundamentals',
        durationWeeks: 4,
        estimatedHours: 24,
        lessons: [
          'Lesson 1.1: TCP/IP, DNS, TLS & How Packets Travel Safely',
          'Lesson 1.2: Linux Permissions, Processes & Hardening Basics',
          'Lesson 1.3: Inspecting Network Traffic & Port Exposure',
        ],
        deliverable: 'Network Topology & Traffic Lab',
        projectDescription:
          'Map a small remote organization network, identify unnecessary open ports, and document firewall rules.',
      },
      {
        id: 'cs-2',
        order: 2,
        title: 'Identity, Cryptography & Access Controls',
        durationWeeks: 5,
        estimatedHours: 28,
        lessons: [
          'Lesson 2.1: Least Privilege, RBAC & Multi-Factor Authentication',
          'Lesson 2.2: Password Hashing vs. Encryption & Key Management',
          'Lesson 2.3: Protecting Displaced User Data & Privacy Boundaries',
        ],
        deliverable: 'Zero-Trust Access Policy',
        projectDescription:
          'Design a role-based access control matrix and secret-handling policy protecting sensitive learner records.',
      },
      {
        id: 'cs-3',
        order: 3,
        title: 'Threat Detection & Security Operations',
        durationWeeks: 5,
        estimatedHours: 30,
        lessons: [
          'Lesson 3.1: Phishing, Credential Stuffing & Common Attack Vectors',
          'Lesson 3.2: Reading Authentication & Web Server Logs for Anomalies',
          'Lesson 3.3: Structured Incident Triage, Containment & Recovery',
        ],
        deliverable: 'Log Triage Investigation',
        projectDescription:
          'Analyze simulated authentication logs to reconstruct a brute-force attempt and write containment steps.',
      },
      {
        id: 'cs-4',
        order: 4,
        title: 'Risk Governance & Defensive Audit',
        durationWeeks: 4,
        estimatedHours: 24,
        lessons: [
          'Lesson 4.1: OWASP Top 10 & Secure Code Review Essentials',
          'Lesson 4.2: Threat Modeling Entry Points & Trust Boundaries',
          'Lesson 4.3: Capstone Security Audit & Incident Playbook',
        ],
        deliverable: 'Comprehensive Security Audit Brief',
        projectDescription:
          'Deliver a practical security posture report and incident response playbook reviewed by a security practitioner.',
      },
    ],
    sampleLesson: {
      moduleTitle: 'Module 02 · Identity, Cryptography & Access Controls',
      lessonTitle: 'Least Privilege & Protecting Sensitive User Records',
      estimatedMinutes: 15,
      learningObjectives: [
        'Apply the Principle of Least Privilege to user roles and database policies.',
        'Explain why passwords must be salted and hashed rather than encrypted or stored in plaintext.',
        'Identify common secret-leakage mistakes in client-side web applications.',
      ],
      sections: [
        {
          heading: '1. Why Least Privilege Protects Vulnerable Communities',
          body: 'In humanitarian and education platforms, user records can include sensitive location or contact details. Least privilege means every user account, API key, and database policy grants only the minimum access needed for its exact purpose—so a student can read and edit only their own profile, never someone else’s.',
          keyTakeaway:
            'Enforce ownership checks at the database or server boundary, never solely by hiding buttons in the UI.',
        },
        {
          heading: '2. Credential Boundaries in Web Apps',
          body: 'Browser code is always visible to anyone inspecting network traffic or source bundles. Private keys (such as database admin keys or third-party service secrets) must remain exclusively on the server, while client code uses scoped public keys backed by strict Row Level Security.',
        },
      ],
      quiz: [
        {
          id: 'cs-q1',
          question:
            'Where should a student profile ownership check ("user can only update their own record") be enforced?',
          options: [
            'Only by hiding the Edit button in React.',
            'On the database/server boundary (e.g., Row Level Security or server auth middleware).',
            'Inside CSS stylesheets.',
          ],
          correctIndex: 1,
          explanation:
            'Attackers can bypass frontend UI checks easily; database RLS and server-side authorization enforce access control on every request.',
        },
        {
          id: 'cs-q2',
          question:
            'How should user passwords be handled in a modern web application?',
          options: [
            'Stored in a public profile table so admins can email them back.',
            'Managed by an authentication provider using strong salted hashing, never stored in profile tables.',
            'Encoded with Base64 in browser localStorage.',
          ],
          correctIndex: 1,
          explanation:
            'Base64 is reversible encoding, not security, and profile tables should never hold password hashes or plaintext passwords.',
        },
        {
          id: 'cs-q3',
          question:
            'What does Multi-Factor Authentication (MFA) protect against?',
          options: [
            'Account takeover even if a password is leaked or guessed.',
            'Slow internet bandwidth.',
            'CSS layout overflow on mobile devices.',
          ],
          correctIndex: 0,
          explanation:
            'MFA requires a second independent factor beyond a password, blocking most credential-stuffing and phishing takeovers.',
        },
      ],
    },
  },
  {
    id: 'digital-marketing',
    code: 'GSP-201',
    title: 'Digital Marketing',
    category: 'business_design',
    categoryLabel: 'Growth & Communications',
    summary:
      'Master audience research, ethical campaign analytics, search strategy, and cross-border digital communications for organizations.',
    level: 'Foundation',
    estimatedWeeks: 14,
    coreSkills: [
      'Search & Content Strategy',
      'Campaign Analytics',
      'Conversion Copywriting',
      'Social Channel Planning',
    ],
    skillBadgeTitle: 'Digital Growth & Campaign Strategy Milestone',
    practicalCapstone:
      'Design a measurable multi-channel launch plan with attribution metrics and budget allocation for a social enterprise.',
    partnerRecognitionNote:
      'Assessed via live campaign planning rubrics reviewed by industry practitioners.',
    modules: [
      {
        id: 'dm-1',
        order: 1,
        title: 'Digital Strategy & Audience Positioning',
        durationWeeks: 3,
        estimatedHours: 16,
        lessons: [
          'Lesson 1.1: Mapping Learner & Customer Journeys Across Channels',
          'Lesson 1.2: Crafting Clear, Trustworthy Value Propositions',
          'Lesson 1.3: Ethical Messaging & Cultural Sensitivity in Global Markets',
        ],
        deliverable: 'Audience & Channel Brief',
        projectDescription:
          'Research two target audience segments for a cross-border social enterprise and map their primary information channels.',
      },
      {
        id: 'dm-2',
        order: 2,
        title: 'Search Visibility & Editorial Content',
        durationWeeks: 4,
        estimatedHours: 22,
        lessons: [
          'Lesson 2.1: Search Intent, Keyword Architecture & Page Structure',
          'Lesson 2.2: Writing Action-Oriented, Plain-Language Web Copy',
          'Lesson 2.3: Building Sustainable Editorial Calendars',
        ],
        deliverable: 'SEO Content Architecture',
        projectDescription:
          'Build a 6-article search and content brief designed to attract organic traffic without paid ad spend.',
      },
      {
        id: 'dm-3',
        order: 3,
        title: 'Performance Campaigns & Paid Media',
        durationWeeks: 4,
        estimatedHours: 22,
        lessons: [
          'Lesson 3.1: Campaign Objectives, Funnel Stages & Landing Page Fit',
          'Lesson 3.2: Budgeting, Cost-Per-Acquisition & Testing Creatives',
          'Lesson 3.3: Privacy-Respecting Audience Targeting',
        ],
        deliverable: 'Campaign Funnel Blueprint',
        projectDescription:
          'Allocate a sample quarterly media budget across search and social channels with testable hypotheses.',
      },
      {
        id: 'dm-4',
        order: 4,
        title: 'Attribution, Reporting & Capstone',
        durationWeeks: 3,
        estimatedHours: 18,
        lessons: [
          'Lesson 4.1: UTM Tracking, Conversion Events & Funnel Drop-Offs',
          'Lesson 4.2: Separating Vanity Metrics from Meaningful Outcomes',
          'Lesson 4.3: Capstone Campaign Launch & Audit Presentation',
        ],
        deliverable: 'Full Campaign Audit Presentation',
        projectDescription:
          'Present a full multi-channel campaign dossier with realistic KPIs, tracking schema, and optimization plan.',
      },
    ],
    sampleLesson: {
      moduleTitle: 'Module 04 · Attribution, Reporting & Capstone',
      lessonTitle: 'Separating Vanity Metrics from Real Campaign Outcomes',
      estimatedMinutes: 12,
      learningObjectives: [
        'Distinguish reach/impressions from qualified conversions and retention.',
        'Structure UTM parameters consistently for clean channel attribution.',
        'Diagnose landing-page drop-offs using funnel conversion rates.',
      ],
      sections: [
        {
          heading: '1. Why Clicks Alone Do Not Measure Success',
          body: 'A social post with 50,000 views feels exciting, yet if visitors immediately leave the landing page without signing up or contacting your team, the campaign failed its objective. Effective digital marketers measure each stage of the funnel: awareness, qualified engagement, and completed action.',
          keyTakeaway:
            'Tie every campaign to one primary measurable action rather than raw impression counts.',
        },
        {
          heading: '2. Clean Tracking with UTM Conventions',
          body: 'Using consistent lowercase UTM tags (utm_source, utm_medium, utm_campaign) ensures analytics reports accurately distinguish newsletter traffic from organic social or partner referrals.',
        },
      ],
      quiz: [
        {
          id: 'dm-q1',
          question:
            'If an ad receives high click-through rates (CTR) but almost zero sign-ups on the destination page, what is the most likely issue?',
          options: [
            'Mismatch between the ad promise and the landing page message or usability.',
            'The ad color was not bright enough.',
            'Too many people shared the link.',
          ],
          correctIndex: 0,
          explanation:
            'High CTR paired with low landing-page conversion usually signals a disconnect between ad expectations and landing page clarity or speed.',
        },
        {
          id: 'dm-q2',
          question: 'Which metric best reflects bottom-of-funnel campaign effectiveness?',
          options: [
            'Total page impressions',
            'Cost per qualified registration or completed inquiry',
            'Number of internal team meetings',
          ],
          correctIndex: 1,
          explanation:
            'Cost per qualified action ties spending directly to meaningful organizational outcomes.',
        },
        {
          id: 'dm-q3',
          question: 'Why should teams standardize UTM naming conventions?',
          options: [
            'Inconsistent casing like "Email" vs "email" fragments analytics reports across separate rows.',
            'UTMs encrypt user passwords.',
            'Search engines require UTMs to index a homepage.',
          ],
          correctIndex: 0,
          explanation:
            'Consistent lowercase UTM tags keep channel attribution clean and comparable over time.',
        },
      ],
    },
  },
  {
    id: 'business-entrepreneurship',
    code: 'GSP-202',
    title: 'Business and Entrepreneurship',
    category: 'business_design',
    categoryLabel: 'Venture & Operations',
    summary:
      'Acquire practical financial literacy, business model validation, operational planning, and sustainable enterprise management skills.',
    level: 'Foundation',
    estimatedWeeks: 14,
    coreSkills: [
      'Financial Modeling',
      'Market Validation',
      'Operations & Unit Economics',
      'Stakeholder Pitching',
    ],
    skillBadgeTitle: 'Venture Validation & Financial Literacy Milestone',
    practicalCapstone:
      'Develop a 12-month operating plan, cash-flow forecast, and customer validation dossier for a sustainable local or remote venture.',
    partnerRecognitionNote:
      'Supports readiness for formal enterprise incubation and partner business diplomas.',
    modules: [
      {
        id: 'be-1',
        order: 1,
        title: 'Problem Discovery & Value Proposition',
        durationWeeks: 3,
        estimatedHours: 16,
        lessons: [
          'Lesson 1.1: Identifying Real Customer Pain vs. Assumed Needs',
          'Lesson 1.2: Conducting Unbiased Customer Discovery Interviews',
          'Lesson 1.3: Testing Demand with Minimal Viable Offers',
        ],
        deliverable: 'Customer Discovery Summary',
        projectDescription:
          'Synthesize 10 structured problem-discovery interviews into a clear value proposition statement.',
      },
      {
        id: 'be-2',
        order: 2,
        title: 'Financial Literacy & Unit Economics',
        durationWeeks: 4,
        estimatedHours: 22,
        lessons: [
          'Lesson 2.1: Revenue, Gross Margin, Fixed vs. Variable Costs',
          'Lesson 2.2: Cash-Flow Timing & Avoiding Working-Capital Shortfalls',
          'Lesson 2.3: Pricing Models & Break-Even Analysis',
        ],
        deliverable: 'Cash-Flow & Pricing Model',
        projectDescription:
          'Construct a 12-month spreadsheet model calculating break-even volume and monthly cash runway.',
      },
      {
        id: 'be-3',
        order: 3,
        title: 'Operations, Compliance & Partnerships',
        durationWeeks: 4,
        estimatedHours: 20,
        lessons: [
          'Lesson 3.1: Designing Repeatable Service Delivery Workflows',
          'Lesson 3.2: Cross-Border Payment, Tax & Legal Basics',
          'Lesson 3.3: Supplier Agreements & Quality Assurance',
        ],
        deliverable: 'Operational Governance Plan',
        projectDescription:
          'Document standard operating procedures, supplier risk backups, and basic compliance checklists.',
      },
      {
        id: 'be-4',
        order: 4,
        title: 'Growth Strategy & Venture Review',
        durationWeeks: 3,
        estimatedHours: 18,
        lessons: [
          'Lesson 4.1: Customer Retention & Referral Economics',
          'Lesson 4.2: Presenting Evidence-Based Venture Briefs',
          'Lesson 4.3: Capstone Venture Review Panel',
        ],
        deliverable: 'Investor-Grade Venture Dossier',
        projectDescription:
          'Present a validated business dossier combining interview evidence, unit economics, and 12-month execution milestones.',
      },
    ],
    sampleLesson: {
      moduleTitle: 'Module 02 · Financial Literacy & Unit Economics',
      lessonTitle: 'Why Profitable Sales Can Still Cause a Cash-Flow Crisis',
      estimatedMinutes: 14,
      learningObjectives: [
        'Differentiate between accounting profit and actual cash on hand.',
        'Calculate gross margin and monthly break-even units.',
        'Plan payment terms so operating bills stay covered.',
      ],
      sections: [
        {
          heading: '1. Profit on Paper vs. Cash in the Bank',
          body: 'A small enterprise can sign a profitable contract today and still run out of money next week if suppliers require cash upfront while clients pay 60 days after delivery. Tracking weekly cash inflows and outflows separately from invoiced revenue keeps ventures solvent.',
          keyTakeaway:
            'Always forecast when cash actually arrives and leaves, not just when invoices are issued.',
        },
        {
          heading: '2. Understanding Unit Economics',
          body: 'Before scaling sales, verify that every single unit sold yields positive contribution margin—meaning revenue per unit minus direct delivery cost covers more than zero and steadily pays down fixed monthly overhead.',
        },
      ],
      quiz: [
        {
          id: 'be-q1',
          question:
            'A freelance studio bills $1,000 in Month 1 (paid in Month 3) and must pay $600 in software/contractor costs in Month 1. What does Month 1 cash flow show?',
          options: [
            '+$400 cash surplus',
            '-$600 net cash outflow in Month 1 despite positive paper profit later',
            '$0 cash movement',
          ],
          correctIndex: 1,
          explanation:
            'Cash flow measures real timing of money in and out; delayed customer payments create temporary cash gaps that must be planned for.',
        },
        {
          id: 'be-q2',
          question:
            'If a product sells for $25 and costs $15 in direct materials and shipping to fulfill, what is its gross margin per unit?',
          options: ['$40', '$10 (40% gross margin)', '$15'],
          correctIndex: 1,
          explanation:
            '$25 revenue minus $15 direct cost leaves $10 contribution toward fixed expenses and profit ($10 / $25 = 40%).',
        },
        {
          id: 'be-q3',
          question:
            'What is the main goal of customer discovery interviews before building a full product?',
          options: [
            'To verify real customer problems and willingness to pay before committing major capital.',
            'To persuade friends to compliment your idea.',
            'To skip financial modeling.',
          ],
          correctIndex: 0,
          explanation:
            'Evidence from real prospective buyers lowers the risk of building something nobody needs or will pay for.',
        },
      ],
    },
  },
  {
    id: 'project-management',
    code: 'GSP-203',
    title: 'Project Management',
    category: 'business_design',
    categoryLabel: 'Delivery & Leadership',
    summary:
      'Lead distributed teams and complex programs using structured Agile, Scrum, risk management, and humanitarian delivery methods.',
    level: 'Foundation to Professional',
    estimatedWeeks: 16,
    coreSkills: [
      'Agile & Hybrid Delivery',
      'Risk & Scope Control',
      'Stakeholder Governance',
      'Budget & Schedule Tracking',
    ],
    skillBadgeTitle: 'Agile & Program Delivery Coordinator Milestone',
    practicalCapstone:
      'Author a complete program charter, work breakdown structure, risk register, and sprint delivery schedule for a cross-border team.',
    partnerRecognitionNote:
      'Structured to build foundational readiness for internationally recognized project management credentials.',
    modules: [
      {
        id: 'pm-1',
        order: 1,
        title: 'Project Initiation & Scope Architecture',
        durationWeeks: 4,
        estimatedHours: 20,
        lessons: [
          'Lesson 1.1: Writing Clear Project Charters & Success Criteria',
          'Lesson 1.2: Stakeholder Mapping & RACI Responsibility Matrices',
          'Lesson 1.3: Work Breakdown Structures (WBS) & Preventing Scope Creep',
        ],
        deliverable: 'Approved Project Charter',
        projectDescription:
          'Author a charter, explicit out-of-scope boundaries, and RACI matrix for a multi-country digital literacy rollout.',
      },
      {
        id: 'pm-2',
        order: 2,
        title: 'Scheduling, Budgeting & Resource Planning',
        durationWeeks: 4,
        estimatedHours: 22,
        lessons: [
          'Lesson 2.1: Critical Path Dependencies & Realistic Milestones',
          'Lesson 2.2: Bottom-Up Cost Estimation & Contingency Reserves',
          'Lesson 2.3: Balancing Scope, Time, Cost & Quality Constraints',
        ],
        deliverable: 'Baseline Schedule & Budget',
        projectDescription:
          'Build a dependency-aware milestone schedule with buffer reserves for external vendor delays.',
      },
      {
        id: 'pm-3',
        order: 3,
        title: 'Agile Execution & Distributed Teams',
        durationWeeks: 4,
        estimatedHours: 24,
        lessons: [
          'Lesson 3.1: Backlog Prioritization, User Stories & Acceptance Criteria',
          'Lesson 3.2: Running Focused Standups & Retrospectives Across Time Zones',
          'Lesson 3.3: Measuring Delivery Flow Without Micromanagement',
        ],
        deliverable: 'Sprint Retrospective & Velocity Log',
        projectDescription:
          'Decompose a 6-week product release into two-week sprints with clear acceptance criteria and retrospective actions.',
      },
      {
        id: 'pm-4',
        order: 4,
        title: 'Risk Mitigation & Program Closure',
        durationWeeks: 4,
        estimatedHours: 22,
        lessons: [
          'Lesson 4.1: Risk Registers, Likelihood/Impact Scoring & Owners',
          'Lesson 4.2: Managing Change Requests Transparently',
          'Lesson 4.3: Handover Documentation & Lessons-Learned Closure',
        ],
        deliverable: 'End-to-End Delivery Playbook',
        projectDescription:
          'Assemble a complete program delivery package including risk register, escalation paths, and stakeholder sign-off checklist.',
      },
    ],
    sampleLesson: {
      moduleTitle: 'Module 01 · Project Initiation & Scope Architecture',
      lessonTitle: 'Controlling Scope Creep with Explicit Boundaries & Change Control',
      estimatedMinutes: 14,
      learningObjectives: [
        'Define clear "In Scope" and "Out of Scope" statements in a project charter.',
        'Use a RACI matrix to eliminate ambiguity over decision ownership.',
        'Evaluate trade-offs when stakeholders request mid-project additions.',
      ],
      sections: [
        {
          heading: '1. Why "Out of Scope" Is Your Most Protective Section',
          body: 'Most project delays do not come from a single catastrophe; they come from dozens of small, unrecorded "quick favors" added mid-delivery. Explicitly documenting what a project will NOT build during Phase 1 gives teams clarity and keeps launch dates realistic.',
          keyTakeaway:
            'Every unreviewed addition changes timeline, budget, or quality—make trade-offs visible before saying yes.',
        },
        {
          heading: '2. Clarity via RACI Governance',
          body: 'Assigning exactly one Accountable (A) owner per deliverable prevents tasks from stalling between teams, while keeping Consulted (C) and Informed (I) stakeholders aligned.',
        },
      ],
      quiz: [
        {
          id: 'pm-q1',
          question:
            'In a RACI matrix, how many people should hold the "Accountable" (A) role for a single deliverable?',
          options: [
            'Exactly one person, so final decision ownership is unambiguous.',
            'Everyone on the team so nobody feels left out.',
            'Zero people; only external clients are accountable.',
          ],
          correctIndex: 0,
          explanation:
            'Multiple people can be Responsible (R) for executing work, but having one Accountable (A) owner prevents confusion over final sign-off.',
        },
        {
          id: 'pm-q2',
          question:
            'A stakeholder asks to add a major new feature two weeks before launch. What is the best first response?',
          options: [
            'Secretly work unpaid weekends without mentioning any schedule impact.',
            'Assess the impact on timeline, cost, and quality, and decide together whether to defer it to Phase 2 or adjust scope.',
            'Delete existing tested features without telling the team.',
          ],
          correctIndex: 1,
          explanation:
            'Transparent change control lets sponsors weigh schedule and budget trade-offs intentionally.',
        },
        {
          id: 'pm-q3',
          question: 'What defines a strong Agile user story acceptance criterion?',
          options: [
            'A vague hope such as "Make the dashboard nice."',
            'Testable conditions that clearly verify when the work is complete.',
            'A 10-page legal contract for every button.',
          ],
          correctIndex: 1,
          explanation:
            'Testable acceptance criteria give developers, designers, and reviewers a shared definition of done.',
        },
      ],
    },
  },
  {
    id: 'graphic-design',
    code: 'GSP-204',
    title: 'Graphic Design',
    category: 'business_design',
    categoryLabel: 'Visual Systems & Media',
    summary:
      'Develop disciplined typographic systems, accessible brand identities, editorial layouts, and digital communication assets.',
    level: 'Foundation to Professional',
    estimatedWeeks: 16,
    coreSkills: [
      'Typography & Grid Systems',
      'Brand Identity Design',
      'Accessible Visual Hierarchy',
      'Print & Digital Production',
    ],
    skillBadgeTitle: 'Brand Systems & Editorial Design Milestone',
    practicalCapstone:
      'Create a comprehensive visual identity manual, editorial publication layout, and accessible social campaign kit.',
    partnerRecognitionNote:
      'Evaluated through structured design critiques by working creative directors and partner faculties.',
    modules: [
      {
        id: 'gd-1',
        order: 1,
        title: 'Visual Principles, Grids & Composition',
        durationWeeks: 4,
        estimatedHours: 22,
        lessons: [
          'Lesson 1.1: Alignment, Balance, Contrast & Intentional Whitespace',
          'Lesson 1.2: Modular Grid Systems for Print and Digital Screens',
          'Lesson 1.3: Creating Clear Focal Anchors Without Clutter',
        ],
        deliverable: 'Swiss Grid Poster Series',
        projectDescription:
          'Design a three-poster educational event series built strictly on an asymmetric 12-column grid.',
      },
      {
        id: 'gd-2',
        order: 2,
        title: 'Typography & Editorial Hierarchy',
        durationWeeks: 4,
        estimatedHours: 22,
        lessons: [
          'Lesson 2.1: Pairing Display & Body Typefaces with Discipline',
          'Lesson 2.2: Line Length (Measure), Leading & Scannable Hierarchy',
          'Lesson 2.3: Multilingual Type Considerations & Clean Captions',
        ],
        deliverable: 'Multi-Page Editorial Spread',
        projectDescription:
          'Typeset a 6-page annual impact report spread prioritizing 65-character reading comfort and crisp tabular figures.',
      },
      {
        id: 'gd-3',
        order: 3,
        title: 'Brand Systems & Inclusive Design',
        durationWeeks: 4,
        estimatedHours: 24,
        lessons: [
          'Lesson 3.1: Designing Simple, Memorable Vector Marks',
          'Lesson 3.2: 60-30-10 Color Discipline & WCAG Contrast Compliance',
          'Lesson 3.3: Documenting Usage Rules in a Brand Guidelines Book',
        ],
        deliverable: 'Identity Guidelines Book',
        projectDescription:
          'Develop a cohesive brand manual including logo clear-space rules, accessible color tokens, and typography scale.',
      },
      {
        id: 'gd-4',
        order: 4,
        title: 'Portfolio Curation & Client Delivery',
        durationWeeks: 4,
        estimatedHours: 22,
        lessons: [
          'Lesson 4.1: Exporting Print-Ready PDFs vs. Lightweight Web SVGs',
          'Lesson 4.2: Presenting Design Rationale to Non-Design Stakeholders',
          'Lesson 4.3: Portfolio Case Study Critique & Final Review',
        ],
        deliverable: 'Production Portfolio Case Study',
        projectDescription:
          'Publish an end-to-end brand and campaign case study explaining every layout and accessibility choice.',
      },
    ],
    sampleLesson: {
      moduleTitle: 'Module 02 · Typography & Editorial Hierarchy',
      lessonTitle: 'Designing Readable Typography & Accessible Contrast',
      estimatedMinutes: 13,
      learningObjectives: [
        'Apply the 60-30-10 color balance to preserve visual calm and clarity.',
        'Set comfortable body line lengths and line-height for effortless reading.',
        'Verify WCAG AA contrast ratios for text over colored or photographic surfaces.',
      ],
      sections: [
        {
          heading: '1. Hierarchy Guides Attention Before Anyone Reads a Word',
          body: 'Readers scan before they read. By pairing a clear typographic scale—distinct display headlines, comfortable 15–16px body prose, and quiet metadata—you guide the eye effortlessly from the primary message to supporting details without decorative boxes or visual noise.',
          keyTakeaway:
            'Use size, weight, and generous whitespace to separate content instead of wrapping every label in heavy borders.',
        },
        {
          heading: '2. Contrast Is Both Aesthetic and Ethical',
          body: 'Low-contrast grey text on bright backgrounds excludes readers with low vision and washes out on older screens in bright daylight. Ensuring at least 4.5:1 contrast for body text keeps educational material legible for everyone.',
        },
      ],
      quiz: [
        {
          id: 'gd-q1',
          question:
            'What is the minimum WCAG AA contrast ratio required for normal-sized body text?',
          options: ['1.5:1', '4.5:1', '10:1 only for logos'],
          correctIndex: 1,
          explanation:
            'WCAG AA specifies at least 4.5:1 contrast for normal body text (and 3:1 for large display text) to ensure broad legibility.',
        },
        {
          id: 'gd-q2',
          question:
            'Why do editorial designers constrain body text columns to roughly 60–75 characters per line?',
          options: [
            'Very wide lines make it tiring for the eye to track back to the start of the next line.',
            'Browsers cannot render lines longer than 80 characters.',
            'Short lines eliminate the need for headings.',
          ],
          correctIndex: 0,
          explanation:
            'A balanced reading measure (around 65ch) keeps eye-tracking smooth and reduces reading fatigue.',
        },
        {
          id: 'gd-q3',
          question:
            'When placing white text over a photograph, how should a designer guarantee readability?',
          options: [
            'Use ultra-thin light font weight without any backdrop.',
            'Apply a measured dark gradient scrim behind the text to ensure >= 4.5:1 contrast across the frame.',
            'Hide the text on mobile screens.',
          ],
          correctIndex: 1,
          explanation:
            'A subtle gradient scrim preserves photographic atmosphere while ensuring text meets contrast standards across light and dark areas.',
        },
      ],
    },
  },
];

export const OPPORTUNITY_TRACKS: OpportunityTrack[] = [
  {
    id: 'mentorship',
    title: 'Professional Mentorship',
    category: '1-on-1 & Cohort Guidance',
    description:
      'Structured pairing with vetted engineers, analysts, designers, and leaders who review practical assignments and guide career planning.',
    readinessCriteria: 'Open upon enrollment in any Foundation or Professional pathway.',
  },
  {
    id: 'internships',
    title: 'Remote & Regional Internships',
    category: 'Applied Experience',
    description:
      'Guided project placements with partner NGOs, technology teams, and social enterprises to build verifiable workplace experience.',
    readinessCriteria: 'Available after completing core pathway modules and first competency review.',
  },
  {
    id: 'remote-employment',
    title: 'Remote Employment Pipelines',
    category: 'Borderless Work',
    description:
      'Direct introductions to international employers hiring across borders based on verified project portfolios rather than local networks.',
    readinessCriteria: 'Requires capstone completion and verified portfolio assessment.',
  },
  {
    id: 'networking',
    title: 'Global Professional Networking',
    category: 'Peer & Industry Forums',
    description:
      'Cross-border alumni circles, technical seminars, and employer roundtables connecting displaced professionals with global peers.',
    readinessCriteria: 'Active across all GSP learner and mentor cohorts.',
  },
  {
    id: 'further-education',
    title: 'Further Education & Academic Bridges',
    category: 'Continuing Study',
    description:
      'Pathways toward university bridging programs, scholarship preparedness, and accredited diploma progression with partner institutions.',
    readinessCriteria: 'Guided by institutional academic advisors upon pathway completion.',
  },
];

export const SDG_ALIGNMENTS: SdgGoal[] = [
  {
    number: 4,
    title: 'Quality Education',
    alignmentSummary:
      'Expanding inclusive, equitable professional learning and lifelong skill development for communities displaced from formal classrooms.',
    placeholderMetricLabel: 'Illustrative Placeholder · Enrolled Learners',
    placeholderValue: 'Phase 1 Launch Metric Pending',
  },
  {
    number: 8,
    title: 'Decent Work and Economic Growth',
    alignmentSummary:
      'Equipping learners with market-relevant digital and managerial capabilities that unlock dignified, remote-compatible livelihoods.',
    placeholderMetricLabel: 'Illustrative Placeholder · Employer Placements',
    placeholderValue: 'Baseline Tracking Upon Cohort 1',
  },
  {
    number: 10,
    title: 'Reduced Inequalities',
    alignmentSummary:
      'Ensuring geographic displacement, legal status, or financial constraints do not dictate access to high-caliber professional training.',
    placeholderMetricLabel: 'Illustrative Placeholder · Regions Reached',
    placeholderValue: 'Illustrative Regional Target Slot',
  },
  {
    number: 16,
    title: 'Peace, Justice and Strong Institutions',
    alignmentSummary:
      'Building transparent, accountable credential governance and verifiable competency records that respect learner dignity and institutional rigor.',
    placeholderMetricLabel: 'Illustrative Placeholder · Verified Portfolios',
    placeholderValue: 'Phase 2 Audit Registry Planned',
  },
  {
    number: 17,
    title: 'Partnerships for the Goals',
    alignmentSummary:
      'Uniting universities, awarding bodies, mentors, and global employers into a shared coalition for borderless human potential.',
    placeholderMetricLabel: 'Illustrative Placeholder · Awarding Partners',
    placeholderValue: 'Partner Onboarding In Progress',
  },
];
