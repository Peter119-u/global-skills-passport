import type { LessonContent } from '../types/platform';

export const DIGITAL_MARKETING_LESSONS: LessonContent[] = [
  // MODULE 1
  {
    id: 'dm-1-1',
    moduleOrder: 1,
    lessonNumber: '1.1',
    title: 'Mapping Learner & Customer Journeys Across Channels',
    estimatedMinutes: 16,
    learningObjectives: [
      'Map the four core stages of an audience journey from awareness to advocacy.',
      'Identify the real questions and barriers prospective users face at each stage.',
      'Select appropriate communication channels for low-bandwidth and mobile-first audiences.',
    ],
    sections: [
      {
        heading: '1. Understanding How Real People Discover Opportunities',
        body: 'Effective digital marketing does not begin by broadcasting ads everywhere. It begins by mapping how a prospective learner, donor, or customer actually discovers a need, compares trustworthy options, and decides to act. For displaced learners or small business buyers, trust, clarity, and low mobile data consumption matter far more than flashy visuals.',
        keyTakeaway:
          'Meet people in the channels they already trust with clear, practical answers rather than chasing every trending platform.',
      },
      {
        heading: '2. The Four-Stage Journey Blueprint',
        body: 'Break every campaign journey into four explicit stages—Awareness, Consideration, Action, and Retention—and assign one concrete metric and content asset to each step.',
        exampleOrTemplate: {
          label: 'Channel Journey Template · Vocational Training Outreach',
          content: `Stage 1 (Awareness): Short community radio/social post -> Goal: Click to program overview
Stage 2 (Consideration): Syllabus PDF or mobile FAQ page -> Goal: Compare study hours & prerequisites
Stage 3 (Action): Lightweight registration form (< 60 sec) -> Goal: Complete onboarding inquiry
Stage 4 (Retention): Weekly study reminder digest -> Goal: Finish Module 1 within 14 days`,
        },
      },
      {
        heading: '3. Auditing Channel Friction',
        body: 'Whenever drop-offs occur between Awareness and Action, inspect technical and linguistic friction first: Does the page load cleanly on a 3G mobile connection? Is the next action unmistakable without scrolling past dense jargon?',
      },
    ],
    quiz: [
      {
        id: 'dm-1-1-q1',
        question: 'What should guide your choice of digital outreach channels for an international education initiative?',
        options: [
          'Where your target audience already searches for information and communicates reliably.',
          'Whichever social network has the newest visual filters.',
          'Publishing identical dense brochures on every network regardless of bandwidth.',
        ],
        correctIndex: 0,
        explanation: 'Channel selection must reflect where real prospective learners spend time and what their connectivity supports.',
      },
      {
        id: 'dm-1-1-q2',
        question: 'During the Consideration stage, what type of content builds the highest trust?',
        options: [
          'Vague slogans without any curriculum details.',
          'Transparent syllabus summaries, time commitments, and honest eligibility criteria.',
          'Aggressive countdown timers that pressure users to click immediately.',
        ],
        correctIndex: 1,
        explanation: 'Prospective learners in the consideration phase evaluate whether a program fits their real schedule and goals.',
      },
      {
        id: 'dm-1-1-q3',
        question: 'If many visitors read an announcement but abandon the sign-up page, what should you inspect first?',
        options: [
          'Page load speed, mobile readability, and whether the form asks unnecessary questions.',
          'Changing the brand logo color every day.',
          'Stopping all measurement tools.',
        ],
        correctIndex: 0,
        explanation: 'High abandonment at registration usually stems from mobile friction, slow pages, or confusing form requirements.',
      },
    ],
  },
  {
    id: 'dm-1-2',
    moduleOrder: 1,
    lessonNumber: '1.2',
    title: 'Crafting Clear, Trustworthy Value Propositions',
    estimatedMinutes: 15,
    learningObjectives: [
      'Write a concise value proposition stating audience, outcome, and proof.',
      'Replace exaggerated marketing hype with concrete, verifiable benefits.',
      'Align headline promises with supporting evidence on the landing page.',
    ],
    sections: [
      {
        heading: '1. Clarity Beats Cleverness Every Time',
        body: 'Visitors decide within seconds whether an organization is relevant to their lives. Clever wordplay or abstract slogans force readers to guess what you actually offer. A trustworthy value proposition states plainly who the offer serves, what tangible skill or outcome it delivers, and why the pathway is credible.',
        keyTakeaway:
          'If a first-time visitor cannot explain what your organization does after reading the hero section, rewrite for plain clarity.',
      },
      {
        heading: '2. Structured Value Proposition Formula',
        body: 'Test your positioning statement using a four-part proof template before designing any graphics or ad creatives.',
        exampleOrTemplate: {
          label: 'Copy Template · Value Proposition Framework',
          content: `For: [Specific audience — e.g., multilingual remote career starters]
Who need: [Urgent problem — e.g., practical, employer-recognized digital skills]
We provide: [Concrete mechanism — e.g., mentor-reviewed project modules & open study guides]
Backed by: [Evidence — e.g., structured rubrics aligned with international awarding partners]`,
        },
      },
      {
        heading: '3. Avoiding Misleading Claims',
        body: 'Never promise guaranteed jobs, instant visas, or accredited diplomas that your organization does not directly issue. Honest expectations protect learner welfare and build long-term institutional credibility with employers.',
      },
    ],
    quiz: [
      {
        id: 'dm-1-2-q1',
        question: 'Which headline best demonstrates a clear, trustworthy value proposition?',
        options: [
          'Unlock Infinite Tomorrow Today!',
          'Practical Software and Data Pathways Reviewed by Industry Mentors.',
          'The World’s Greatest Guaranteed Job Machine.',
        ],
        correctIndex: 1,
        explanation: 'Specific, verifiable phrasing tells visitors exactly what is offered without unrealistic promises.',
      },
      {
        id: 'dm-1-2-q2',
        question: 'Why must landing page body copy match the promise made in an outreach post or ad?',
        options: [
          'Message consistency prevents confusion and increases completed inquiries.',
          'Search engines forbid repeating keywords on landing pages.',
          'It lets teams avoid testing their forms.',
        ],
        correctIndex: 0,
        explanation: 'When the landing page fulfills the exact expectation set by the link or ad, bounce rates drop sharply.',
      },
      {
        id: 'dm-1-2-q3',
        question: 'What is the ethical risk of overpromising "guaranteed employment" in outreach copy?',
        options: [
          'It misleads vulnerable applicants and damages trust with institutional partners.',
          'It improves long-term graduate retention.',
          'It reduces mobile data usage.',
        ],
        correctIndex: 0,
        explanation: 'Transparent outcomes build durable trust with both learners and employers.',
      },
    ],
  },
  {
    id: 'dm-1-3',
    moduleOrder: 1,
    lessonNumber: '1.3',
    title: 'Ethical Messaging & Cultural Sensitivity in Global Markets',
    estimatedMinutes: 15,
    learningObjectives: [
      'Apply dignity-centered storytelling principles when representing diverse communities.',
      'Avoid extractive framing and obtain informed consent for any public testimonials.',
      'Adapt idioms, date formats, and examples so global readers feel included.',
    ],
    sections: [
      {
        heading: '1. Dignity-First Storytelling',
        body: 'Global NGOs, social enterprises, and educational institutions often communicate across cultures. Ethical communicators depict learners and entrepreneurs as capable professionals building their futures—never reducing people to passive helplessness just to generate clicks.',
        keyTakeaway:
          'Highlight agency, competence, and real craft rather than sensationalizing hardship.',
      },
      {
        heading: '2. Informed Consent and Privacy Safeguards',
        body: 'Before publishing any learner quote, photo, or case study, verify explicit written consent covering where the story will appear, whether a pseudonym should be used, and how the person can request removal later. Never disclose sensitive immigration status or precise shelter locations.',
      },
      {
        heading: '3. Writing for Multilingual Global Readers',
        body: 'Use direct active verbs, short sentences, and universally understood date formats (e.g., "25 November 2026" instead of ambiguous "11/25/26"). Avoid regional sports metaphors or slang that lose meaning in translation.',
        exampleOrTemplate: {
          label: 'Editorial Checklist · Cross-Cultural Copy Review',
          content: `- Active voice and < 22 words per sentence on average
- Ambiguous numeric dates replaced with Month Name + Year
- Consent record verified for every quoted individual
- Zero sensitive location or legal-status disclosures`,
        },
      },
    ],
    quiz: [
      {
        id: 'dm-1-3-q1',
        question: 'What is a core requirement before publishing a community member’s story in a campaign?',
        options: [
          'Explicit informed consent with the option to use a pseudonym or withdraw later.',
          'Only verbal permission from an unrelated colleague.',
          'Including exact residential coordinates for transparency.',
        ],
        correctIndex: 0,
        explanation: 'Informed consent and privacy safeguards protect participant safety and autonomy.',
      },
      {
        id: 'dm-1-3-q2',
        question: 'Which date format avoids confusion between US and international readers?',
        options: ['04/07/2026', '7 April 2026', '07-04-26'],
        correctIndex: 1,
        explanation: 'Writing out the month name prevents ambiguity between day-first and month-first conventions.',
      },
      {
        id: 'dm-1-3-q3',
        question: 'Why should global marketing copy avoid regional idioms and complex slang?',
        options: [
          'Plain language translates accurately and respects readers using English as an additional language.',
          'Idioms increase server hosting costs.',
          'Search engines penalize short words.',
        ],
        correctIndex: 0,
        explanation: 'Clear, direct phrasing improves comprehension across linguistic and cultural backgrounds.',
      },
    ],
  },
  // MODULE 2
  {
    id: 'dm-2-1',
    moduleOrder: 2,
    lessonNumber: '2.1',
    title: 'Search Intent, Keyword Architecture & Page Structure',
    estimatedMinutes: 18,
    learningObjectives: [
      'Classify search queries by informational, navigational, and transactional intent.',
      'Organize topic clusters so each page targets one primary question clearly.',
      'Write semantic HTML headings, meta titles, and descriptions that reflect real page content.',
    ],
    sections: [
      {
        heading: '1. Search Intent Drives Useful Content',
        body: 'Search engine optimization is simply matching a real human question with the clearest, fastest answer on the web. Someone searching "what is SQL join" seeks an informational tutorial, whereas someone searching "remote data analytics syllabus" wants structured program details and outcomes.',
        keyTakeaway:
          'Match page format to the searcher’s underlying intent rather than forcing a sales pitch onto an educational query.',
      },
      {
        heading: '2. Clean On-Page Information Architecture',
        body: 'Use a single descriptive H1 heading, logical H2/H3 subheadings, descriptive image alt text, and concise URL slugs. Avoid stuffing repetitive keywords into sentences—modern search engines evaluate topical depth and user engagement.',
        exampleOrTemplate: {
          label: 'SEO Brief Template · Topic Page Spec',
          content: `Target Query: "beginner project management syllabus"
Intent Type: Informational / Program Evaluation
Page Title (<title>): Project Management Syllabus & Practice Projects | GSP Academy
Meta Description: Review Modules 1-4, study hours, and capstone rubric for the GSP Project Management pathway.
H1: Project Management Pathway Syllabus & Hands-On Assignments`,
        },
      },
      {
        heading: '3. Internal Linking That Helps Readers Navigate',
        body: 'Connect educational guides logically to related modules and practical assignments using descriptive anchor text ("Explore the SQL Reporting Brief") instead of generic "click here" links.',
      },
    ],
    quiz: [
      {
        id: 'dm-2-1-q1',
        question: 'Someone searches "difference between gross margin and net profit." What search intent is this?',
        options: ['Informational', 'Navigational login', 'Hardware purchase'],
        correctIndex: 0,
        explanation: 'The user wants an educational explanation before taking any commercial action.',
      },
      {
        id: 'dm-2-1-q2',
        question: 'Which anchor text is best for both accessibility and search clarity?',
        options: ['Click here', 'Read more', 'Inspect the Cybersecurity Audit Rubric'],
        correctIndex: 2,
        explanation: 'Descriptive link text tells screen-reader users and search crawlers exactly what the destination page covers.',
      },
      {
        id: 'dm-2-1-q3',
        question: 'Why is keyword stuffing counterproductive?',
        options: [
          'It degrades readability for humans and triggers quality penalties in search ranking systems.',
          'It increases font contrast.',
          'It makes pages load instantaneously.',
        ],
        correctIndex: 0,
        explanation: 'Search systems reward clear, natural prose that thoroughly answers the topic.',
      },
    ],
  },
  {
    id: 'dm-2-2',
    moduleOrder: 2,
    lessonNumber: '2.2',
    title: 'Writing Action-Oriented, Plain-Language Web Copy',
    estimatedMinutes: 15,
    learningObjectives: [
      'Apply the inverted pyramid structure so key facts appear immediately.',
      'Replace passive bureaucratic prose with active, scannable copy.',
      'Write specific call-to-action labels that state what happens next.',
    ],
    sections: [
      {
        heading: '1. Lead With the Outcome (Inverted Pyramid)',
        body: 'Web readers scan in an F-shaped pattern, reading headlines, first sentences, and bullet points before committing to deep paragraphs. Put the critical conclusion or requirement in the very first sentence of each section.',
        keyTakeaway:
          'Never bury deadlines, prerequisites, or core benefits at the bottom of a long paragraph.',
      },
      {
        heading: '2. Specific Calls to Action Reduce Anxiety',
        body: 'Ambiguous buttons like "Submit" or "Continue" create hesitation because users do not know what happens after clicking. Compare "Submit" against "Save Lesson Progress" or "Inspect Module 2 Syllabus"—specific verbs build confidence.',
        exampleOrTemplate: {
          label: 'Before & After · Scannable Web Editing',
          content: `Before: "It is recommended that applicants ensure all required fields in the registration portal are duly completed prior to submission."
After:  "Fill in your name, email, and country of residence below to preview the registration workflow."`,
        },
      },
      {
        heading: '3. Formatting for Mobile Screens',
        body: 'Keep paragraphs to 2–4 lines on desktop so they remain comfortable on narrow phone screens. Use clear subheadings every 150–200 words to give readers natural resting points.',
      },
    ],
    quiz: [
      {
        id: 'dm-2-2-q1',
        question: 'Which button label gives the user clearest expectation before clicking?',
        options: ['Go', 'View Grading Rubric & Capstone Steps', 'Click Now'],
        correctIndex: 1,
        explanation: 'Explicit action labels tell users exactly where the interaction leads.',
      },
      {
        id: 'dm-2-2-q2',
        question: 'What is the goal of the inverted pyramid writing style?',
        options: [
          'Place the most important information and key takeaway at the top before supporting details.',
          'Hide the main conclusion until the last sentence.',
          'Use centered alignment for every paragraph.',
        ],
        correctIndex: 0,
        explanation: 'Readers immediately grasp the essential message even if they only skim the top of a section.',
      },
      {
        id: 'dm-2-2-q3',
        question: 'Why should web paragraphs stay relatively short?',
        options: [
          'Walls of text become hard to scan on mobile screens and increase abandonment.',
          'Long paragraphs disable browser scrolling.',
          'Short paragraphs remove the need for accurate spelling.',
        ],
        correctIndex: 0,
        explanation: 'Concise paragraphs with strong headings preserve scannability across screen sizes.',
      },
    ],
  },
  {
    id: 'dm-2-3',
    moduleOrder: 2,
    lessonNumber: '2.3',
    title: 'Building Sustainable Editorial Calendars',
    estimatedMinutes: 16,
    learningObjectives: [
      'Balance evergreen educational resources with timely announcements.',
      'Repurpose one thoroughly researched guide across multiple formats efficiently.',
      'Establish realistic publishing cadences small teams can sustain without burnout.',
    ],
    sections: [
      {
        heading: '1. Consistency Outperforms Short Bursts',
        body: 'Many small organizations launch an ambitious daily posting schedule in Week 1 and go silent by Week 4. A sustainable cadence—such as one deep evergreen guide per fortnight paired with two concise social summaries—compounds organic reach reliably over months.',
        keyTakeaway:
          'Plan a publishing schedule around your smallest realistic team capacity, not peak enthusiasm.',
      },
      {
        heading: '2. Pillar-and-Spoke Repurposing',
        body: 'Turn one substantial asset (like a career readiness guide or employer survey summary) into a long-form web article, an email digest highlight, three Q&A posts, and a downloadable checklist.',
        exampleOrTemplate: {
          label: 'Editorial Matrix · 2-Week Cycle',
          content: `Week 1 Tue | Pillar Article: "How Remote Tech Employers Evaluate Portfolio Projects" (Owner: Content Lead)
Week 1 Thu | LinkedIn Carousel: 4 Rubric Takeaways from Pillar Article (Owner: Design)
Week 2 Tue | Email Digest: Monthly Study Pathways & Open Quiz Links (Owner: Community)
Week 2 Fri | Audit Check: Review search clicks & landing-page completions`,
        },
      },
      {
        heading: '3. Reviewing and Updating Evergreen Assets',
        body: 'Schedule quarterly refreshes for your highest-traffic guides so broken links, outdated statistics, or changed requirements never undermine reader trust.',
      },
    ],
    quiz: [
      {
        id: 'dm-2-3-q1',
        question: 'What is "evergreen content" in an editorial calendar?',
        options: [
          'Educational material that stays useful and relevant over long periods with minor updates.',
          'News announcements valid only for 24 hours.',
          'Posts written only in green font.',
        ],
        correctIndex: 0,
        explanation: 'Evergreen guides continuously attract searchers and support learners year-round.',
      },
      {
        id: 'dm-2-3-q2',
        question: 'How does the pillar-and-spoke workflow help small teams?',
        options: [
          'One well-researched guide feeds multiple smaller social and newsletter formats consistently.',
          'It forces teams to invent completely unrelated topics every day.',
          'It eliminates editorial review.',
        ],
        correctIndex: 0,
        explanation: 'Repurposing high-value research multiplies distribution without multiplying research hours.',
      },
      {
        id: 'dm-2-3-q3',
        question: 'Why schedule quarterly content audits?',
        options: [
          'To fix broken links, refresh outdated examples, and keep top guides accurate.',
          'To delete all articles older than 30 days.',
          'To stop tracking analytics.',
        ],
        correctIndex: 0,
        explanation: 'Periodic maintenance preserves search rankings and audience confidence.',
      },
    ],
  },
  // MODULE 3
  {
    id: 'dm-3-1',
    moduleOrder: 3,
    lessonNumber: '3.1',
    title: 'Campaign Objectives, Funnel Stages & Landing Page Fit',
    estimatedMinutes: 17,
    learningObjectives: [
      'Select the right campaign objective based on organizational goals.',
      'Design focused landing pages with minimal distraction and single conversion goals.',
      'Calculate funnel drop-off rates from impression to completed action.',
    ],
    sections: [
      {
        heading: '1. Aligning Objective With Actual Outcome',
        body: 'Paid and organic campaigns fail when teams optimize for the wrong objective. Optimizing an ad platform for cheap "link clicks" often sends low-intent traffic that bounces immediately, whereas optimizing for verified sign-up completions trains delivery toward genuinely interested users.',
        keyTakeaway:
          'Always align campaign optimization events with the real business or educational outcome you value.',
      },
      {
        heading: '2. Anatomy of a High-Converting Landing Page',
        body: 'Unlike a general homepage with dozens of navigation paths, a campaign landing page focuses on one audience need: confirm relevance in the headline, show concrete proof or syllabus structure, address top objections, and provide one clear action.',
        exampleOrTemplate: {
          label: 'Funnel Math Example · Cohort Outreach',
          content: `Impressions: 20,000
Clicks (2.5% CTR): 500 visitors
Landing Page Actions (12% CVR): 60 completed inquiries
Cost per Action ($300 budget): $300 / 60 = $5.00 per qualified inquiry`,
        },
      },
      {
        heading: '3. Diagnosing the Weakest Link First',
        body: 'Improving a landing page conversion rate from 6% to 12% doubles total outcomes without spending a single extra dollar on media. Fix page clarity and speed before scaling spend.',
      },
    ],
    quiz: [
      {
        id: 'dm-3-1-q1',
        question: 'If 400 visitors arrive on a landing page and 40 complete the registration inquiry, what is the conversion rate (CVR)?',
        options: ['1%', '10%', '40%'],
        correctIndex: 1,
        explanation: '40 completed actions divided by 400 visitors equals 0.10, or 10%.',
      },
      {
        id: 'dm-3-1-q2',
        question: 'Why should teams fix landing-page conversion issues before increasing ad budget?',
        options: [
          'Sending more traffic to a confusing or broken page wastes budget on lost visitors.',
          'Ad platforms refuse money from fast websites.',
          'Conversion rate automatically rises when budget doubles.',
        ],
        correctIndex: 0,
        explanation: 'Improving conversion efficiency multiplies the return on every subsequent dollar spent.',
      },
      {
        id: 'dm-3-1-q3',
        question: 'What distinguishes a focused campaign landing page from a general homepage?',
        options: [
          'It aligns directly with one campaign promise and guides visitors toward one primary action.',
          'It hides all contact and privacy links.',
          'It contains ten unrelated pop-ups.',
        ],
        correctIndex: 0,
        explanation: 'Dedicated landing pages minimize competing links and reinforce the exact ad message.',
      },
    ],
  },
  {
    id: 'dm-3-2',
    moduleOrder: 3,
    lessonNumber: '3.2',
    title: 'Budgeting, Cost-Per-Acquisition & Testing Creatives',
    estimatedMinutes: 18,
    learningObjectives: [
      'Calculate Cost Per Click (CPC), Cost Per Acquisition (CPA), and budget pacing.',
      'Run disciplined A/B tests changing one major variable at a time.',
      'Reserve testing budget separately from proven core campaigns.',
    ],
    sections: [
      {
        heading: '1. Unit Economics of Paid Outreach',
        body: 'Knowing what an organization can sustainably spend to acquire a qualified learner, customer, or partner inquiry prevents runaway budgets. Track Cost Per Acquisition (Total Spend / Completed Actions) rather than vanity metrics like cost per thousand impressions alone.',
        keyTakeaway:
          'Never scale an ad campaign unless its Cost Per Acquisition makes sense within your broader operating budget.',
      },
      {
        heading: '2. Controlled Creative Experiments',
        body: 'When testing two ad variations, avoid changing headline, image, audience, and landing page simultaneously—otherwise you will not know which change caused the result. Test one clear hypothesis per cycle with enough sample size to avoid random noise.',
        exampleOrTemplate: {
          label: 'Experiment Log Template · Creative A/B Test',
          content: `Hypothesis: Leading with "16-Week Mentor-Reviewed SQL Curriculum" outperforms "Learn Tech Online" on qualified syllabus clicks.
Variable Changed: Primary Headline Only (Visual & Audience identical)
Budget Split: 50% / 50% over 14 days
Success Metric: Cost per completed syllabus download`,
        },
      },
      {
        heading: '3. The 80/20 Budget Allocation Rule',
        body: 'Allocate roughly 80% of media budget to proven channels and messages, and dedicate 20% to structured experiments testing new audiences, formats, or regional languages.',
      },
    ],
    quiz: [
      {
        id: 'dm-3-2-q1',
        question: 'A campaign spends $450 and generates 30 qualified partner leads. What is the Cost Per Acquisition (CPA)?',
        options: ['$10', '$15', '$30'],
        correctIndex: 1,
        explanation: '$450 divided by 30 leads equals $15 per acquired lead.',
      },
      {
        id: 'dm-3-2-q2',
        question: 'Why should an A/B test change only one primary variable between Version A and Version B?',
        options: [
          'So you can attribute any performance difference confidently to that specific change.',
          'Because spreadsheets only hold two columns.',
          'To ensure neither version receives clicks.',
        ],
        correctIndex: 0,
        explanation: 'Isolating a single variable turns guesswork into repeatable learning.',
      },
      {
        id: 'dm-3-2-q3',
        question: 'What is the purpose of reserving ~20% of budget for structured experiments?',
        options: [
          'To discover higher-performing messages or channels without risking core campaign results.',
          'To spend leftover money without tracking outcomes.',
          'To disable conversion tracking.',
        ],
        correctIndex: 0,
        explanation: 'Controlled experimentation avoids stagnation while protecting the baseline pipeline.',
      },
    ],
  },
  {
    id: 'dm-3-3',
    moduleOrder: 3,
    lessonNumber: '3.3',
    title: 'Privacy-Respecting Audience Targeting',
    estimatedMinutes: 15,
    learningObjectives: [
      'Distinguish contextual targeting from invasive third-party behavioral tracking.',
      'Respect regional data protection principles (GDPR/consent-first analytics).',
      'Build ethical first-party subscriber relationships through genuine utility.',
    ],
    sections: [
      {
        heading: '1. Contextual Relevance Without Surveillance',
        body: 'You do not need intrusive cross-site tracking cookies to reach the right learners. Contextual placement—sponsoring relevant educational newsletters, open-source developer communities, or search terms people actively type—reaches high-intent audiences while respecting privacy.',
        keyTakeaway:
          'Contextual intent and helpful first-party resources age better than brittle third-party tracking pixels.',
      },
      {
        heading: '2. Explicit Consent and Data Minimization',
        body: 'Collect only the personal data genuinely needed for communication. Provide clear unsubscribe links in every newsletter and never upload private learner lists to external ad platforms without explicit opt-in permission.',
      },
      {
        heading: '3. Earning First-Party Trust',
        body: 'When a learner willingly subscribes to weekly study guides or cohort updates because your materials genuinely help them progress, your organization owns a durable, direct communication channel independent of changing social algorithms.',
        exampleOrTemplate: {
          label: 'Privacy Checklist · Outreach Operations',
          content: `- Collect minimum fields (e.g., email + optional track preference)
- Plain-language consent checkbox (never pre-checked)
- One-click opt-out included on every email
- Zero uploading of sensitive learner lists to ad retargeting networks`,
        },
      },
    ],
    quiz: [
      {
        id: 'dm-3-3-q1',
        question: 'What is contextual targeting?',
        options: [
          'Placing relevant messages alongside topics and search queries the reader is actively exploring.',
          'Buying leaked personal phone databases.',
          'Tracking a user across unrelated medical websites.',
        ],
        correctIndex: 0,
        explanation: 'Contextual targeting relies on page topic or search query relevance rather than personal surveillance profiles.',
      },
      {
        id: 'dm-3-3-q2',
        question: 'Which practice violates data minimization principles?',
        options: [
          'Requiring passport numbers just to download a free public course syllabus.',
          'Asking only for a name and email address to send cohort updates.',
          'Providing a one-click unsubscribe button.',
        ],
        correctIndex: 0,
        explanation: 'Data minimization limits collection strictly to what is necessary for the stated purpose.',
      },
      {
        id: 'dm-3-3-q3',
        question: 'Why are opt-in first-party newsletters valuable for educational organizations?',
        options: [
          'They build a direct, resilient relationship that does not depend on third-party algorithm changes.',
          'They eliminate the need for useful content.',
          'They automatically double website server RAM.',
        ],
        correctIndex: 0,
        explanation: 'First-party subscribers explicitly chose to hear from you and tend to engage deeply.',
      },
    ],
  },
  // MODULE 4
  {
    id: 'dm-4-1',
    moduleOrder: 4,
    lessonNumber: '4.1',
    title: 'UTM Tracking, Conversion Events & Funnel Drop-Offs',
    estimatedMinutes: 17,
    learningObjectives: [
      'Construct clean, consistent UTM query strings for multi-channel links.',
      'Define meaningful conversion events beyond simple page loads.',
      'Pinpoint exact drop-off stages across multi-step user journeys.',
    ],
    sections: [
      {
        heading: '1. Why Clean Attribution Starts With Discipline',
        body: 'Without campaign tagging, social shares, email newsletters, and partner referrals frequently collapse into vague "Direct" traffic in analytics tools. Standardizing UTM parameters across your entire team gives you clear visibility into which outreach efforts actually bring committed learners.',
        keyTakeaway:
          'Maintain one shared lowercase UTM naming spreadsheet so "linkedin" and "LinkedIn" never split reports.',
      },
      {
        heading: '2. Constructing Standard UTM Links',
        body: 'Use the three core UTM parameters consistently on every external campaign link: utm_source (the platform or partner), utm_medium (the channel type like email or social), and utm_campaign (the specific initiative).',
        exampleOrTemplate: {
          label: 'URL Template · Standardized Campaign Tagging',
          content: `https://example.org/academy?utm_source=partner_digest&utm_medium=email&utm_campaign=q2_cybersecurity_cohort&utm_content=syllabus_cta

Rules:
- Lowercase only, underscores instead of spaces
- Never put personal info (emails/names) in URL parameters
- Never use UTMs on internal links between pages of your own site`,
        },
      },
      {
        heading: '3. Why Internal Links Must Never Have UTMs',
        body: 'Adding UTM tags to internal homepage buttons overwrites the visitor’s original acquisition source, destroying attribution accuracy. Reserve UTMs strictly for external links pointing into your site.',
      },
    ],
    quiz: [
      {
        id: 'dm-4-1-q1',
        question: 'What happens if you place UTM parameters on an internal navigation button inside your own website?',
        options: [
          'It overwrites the visitor’s true external referral source and corrupts channel attribution.',
          'It speeds up CSS rendering.',
          'It improves search engine crawling.',
        ],
        correctIndex: 0,
        explanation: 'UTMs start new campaign attribution context; using them internally erases how the user originally arrived.',
      },
      {
        id: 'dm-4-1-q2',
        question: 'Why must teams avoid placing a user’s email address inside a UTM URL parameter?',
        options: [
          'URLs are logged in browser history, proxies, and analytics servers, creating a serious privacy leak.',
          'Browsers reject URLs with @ symbols.',
          'It makes fonts render italic.',
        ],
        correctIndex: 0,
        explanation: 'Never pass personally identifiable information (PII) in query strings.',
      },
      {
        id: 'dm-4-1-q3',
        question: 'Which UTM parameter identifies the channel category such as "email" or "organic_social"?',
        options: ['utm_medium', 'utm_source', 'utm_campaign'],
        correctIndex: 0,
        explanation: 'utm_medium groups traffic by broader channel type, while utm_source identifies the specific publisher or platform.',
      },
    ],
  },
  {
    id: 'dm-4-2',
    moduleOrder: 4,
    lessonNumber: '4.2',
    title: 'Separating Vanity Metrics from Meaningful Outcomes',
    estimatedMinutes: 15,
    learningObjectives: [
      'Distinguish vanity indicators (raw impressions, likes) from outcome metrics.',
      'Build concise monthly marketing reports tied to organizational goals.',
      'Interpret cohort retention alongside top-of-funnel volume.',
    ],
    sections: [
      {
        heading: '1. The Trap of Big Numbers Without Context',
        body: 'Reporting "120,000 impressions this month" sounds impressive in a slide deck, yet it answers zero operational questions if fewer people completed Module 1 than the month prior. Vanity metrics make teams feel busy without proving mission impact.',
        keyTakeaway:
          'Every dashboard metric should inform a real decision—if nothing changes when a number moves, stop starring it.',
      },
      {
        heading: '2. Pairing Acquisition With Quality',
        body: 'Always evaluate volume metrics next to quality or retention metrics. Channel A might bring 500 sign-ups with 5% module completion, while Channel B brings 120 sign-ups with 60% completion. Channel B delivers nearly triple the genuine learners.',
        exampleOrTemplate: {
          label: 'Reporting Comparison · Vanity vs. Outcome',
          content: `Vanity Metric:   Total social post likes = 4,200
Actionable KPI:  Qualified academy completions from social = 84 (Cost/Completion: $4.10)

Vanity Metric:   Total email list size = 12,000
Actionable KPI:  Active learners opening & completing quizzes = 1,950`,
        },
      },
      {
        heading: '3. Writing Honest Decision Summaries',
        body: 'Conclude every analytics report with three plain sentences: what worked, what underperformed, and one concrete adjustment for next month.',
      },
    ],
    quiz: [
      {
        id: 'dm-4-2-q1',
        question: 'Channel A brings 300 registrations with 10% finishing Lesson 1. Channel B brings 100 registrations with 50% finishing Lesson 1. Which channel produced more engaged learners?',
        options: ['Channel A (30 learners)', 'Channel B (50 learners)', 'Both are identical'],
        correctIndex: 1,
        explanation: 'Evaluating volume alongside downstream completion reveals Channel B delivered 50 engaged learners vs. 30.',
      },
      {
        id: 'dm-4-2-q2',
        question: 'What defines a "vanity metric"?',
        options: [
          'A large surface-level number that looks flattering but does not guide decisions or prove real outcomes.',
          'Any metric reported in a table.',
          'Completed capstone submissions.',
        ],
        correctIndex: 0,
        explanation: 'Vanity metrics like raw impressions lack connection to meaningful organizational impact.',
      },
      {
        id: 'dm-4-2-q3',
        question: 'What should conclude every monthly campaign report?',
        options: [
          'Clear recommendations describing what to keep, adjust, or stop next cycle.',
          'Fifty unannotated raw spreadsheets.',
          'Removing negative numbers from charts.',
        ],
        correctIndex: 0,
        explanation: 'Analytics creates value only when findings translate into concrete next actions.',
      },
    ],
  },
  {
    id: 'dm-4-3',
    moduleOrder: 4,
    lessonNumber: '4.3',
    title: 'Capstone Campaign Launch & Audit Presentation',
    estimatedMinutes: 16,
    learningObjectives: [
      'Synthesize audience research, SEO plan, budget, and UTM schema into one dossier.',
      'Present trade-offs, risks, and contingency plans transparently to leadership.',
      'Audit a finished campaign brief against ethical and measurable quality gates.',
    ],
    sections: [
      {
        heading: '1. From Fragmented Tactics to Cohesive Strategy',
        body: 'In real organizations, marketing specialists are rarely asked to write a single tweet in isolation—they are asked to plan an entire launch coherently. Your capstone links positioning, organic search content, paid experiments, landing-page fit, and UTM reporting into one unified narrative.',
        keyTakeaway:
          'Strong campaign dossiers connect every budget line and content piece back to one clear organizational goal.',
      },
      {
        heading: '2. Stress-Testing Assumptions Before Launch',
        body: 'Before requesting sign-off, stress-test your numbers: What happens if conversion rate is half of your estimate? Which channel gets paused first if CPA exceeds ceiling? Including a pre-mortem builds credibility with leadership.',
        exampleOrTemplate: {
          label: 'Capstone Dossier Structure · 6-Section Executive Brief',
          content: `1. Objective & Target Audience Summary (1 page)
2. Core Value Proposition & Cultural Safeguards
3. Organic Search & Editorial Calendar (6 topics)
4. Channel Budget & A/B Experiment Plan
5. Standardized UTM Schema & Funnel KPIs
6. Risk Mitigation & 30-Day Review Cadence`,
        },
      },
      {
        heading: '3. Clear Stakeholder Presentation',
        body: 'Lead with your recommendation and expected impact in the first two minutes, then walk partners through evidence, timeline, and risk controls.',
      },
    ],
    quiz: [
      {
        id: 'dm-4-3-q1',
        question: 'Why include a pre-mortem and contingency thresholds in a campaign launch proposal?',
        options: [
          'It prepares clear rules for pausing underperforming channels before budget is wasted.',
          'It guarantees zero external changes ever happen.',
          'It replaces the need for audience research.',
        ],
        correctIndex: 0,
        explanation: 'Pre-agreed stop/adjust rules enable fast, objective optimization once live data arrives.',
      },
      {
        id: 'dm-4-3-q2',
        question: 'When presenting a campaign strategy to leadership, what belongs at the very beginning?',
        options: [
          'The core goal, recommended strategy, budget summary, and expected measurable outcome.',
          'Twenty minutes of minor font comparisons.',
          'Raw unformatted server logs.',
        ],
        correctIndex: 0,
        explanation: 'Decision-makers need the strategic recommendation and resource ask upfront before diving into details.',
      },
      {
        id: 'dm-4-3-q3',
        question: 'Which sign indicates a campaign plan is genuinely integrated?',
        options: [
          'Audience research, landing page copy, budget tests, and UTM tracking all point to the same measurable goal.',
          'Each channel uses an unrelated brand name and separate metrics.',
          'Tracking is added only after the campaign ends.',
        ],
        correctIndex: 0,
        explanation: 'Alignment across message, landing experience, and measurement ensures coherent execution.',
      },
    ],
  },
];

export const BUSINESS_ENTREPRENEURSHIP_LESSONS: LessonContent[] = [
  // MODULE 1
  {
    id: 'be-1-1',
    moduleOrder: 1,
    lessonNumber: '1.1',
    title: 'Identifying Real Customer Pain vs. Assumed Needs',
    estimatedMinutes: 16,
    learningObjectives: [
      'Distinguish unvalidated founder assumptions from observed customer pain points.',
      'Frame problem statements around urgent, recurring, and expensive friction.',
      'Identify who experiences the problem vs. who controls purchasing decisions.',
    ],
    sections: [
      {
        heading: '1. Falling in Love With the Problem, Not the First Idea',
        body: 'New founders often build an entire app, storefront, or service based on what they assume neighbors or businesses want—only to launch to silence. Sustainable enterprises start by verifying an urgent problem people already try to solve with awkward workarounds.',
        keyTakeaway:
          'When prospective customers already spend time or money on messy workarounds, you have found a real problem worth solving.',
      },
      {
        heading: '2. Problem Framing Checklist',
        body: 'Evaluate candidate business ideas against four practical filters before committing savings or inventory.',
        exampleOrTemplate: {
          label: 'Validation Matrix · Problem Severity Check',
          content: `1. Frequency: How often does the customer hit this problem? (Daily/weekly beats once a year)
2. Urgency: What happens if they ignore it? (Lost revenue, wasted hours, compliance risk)
3. Current Workaround: What clumsy method do they use today?
4. Economic Buyer: Who actually holds the budget and authorizes payment?`,
        },
      },
      {
        heading: '3. Separating Users From Payers',
        body: 'In B2B services, training, or childcare tools, the end user and the paying buyer may be different people. Mapping both viewpoints keeps your offer practical for users and defensible for the budget holder.',
      },
    ],
    quiz: [
      {
        id: 'be-1-1-q1',
        question: 'What is a strong signal that a customer problem is real and urgent?',
        options: [
          'Customers already cobble together manual workarounds or pay for imperfect alternatives.',
          'Friends politely say "that sounds cool" at dinner.',
          'No one has ever thought about the problem before.',
        ],
        correctIndex: 0,
        explanation: 'Existing workarounds and spending prove customers value fixing the pain point enough to act.',
      },
      {
        id: 'be-1-1-q2',
        question: 'Why must founders identify both the end user and the economic buyer?',
        options: [
          'Because the product must delight the user while satisfying the buyer’s budget and ROI criteria.',
          'Because buyers never care about price.',
          'To avoid writing an invoice.',
        ],
        correctIndex: 0,
        explanation: 'Understanding both roles ensures adoption and sustainable payment.',
      },
      {
        id: 'be-1-1-q3',
        question: 'What risk arises when founders focus only on their favorite solution before validating the problem?',
        options: [
          'Building inventory or software nobody wants to pay for.',
          'Launching too profitably too soon.',
          'Collecting too many customer testimonials.',
        ],
        correctIndex: 0,
        explanation: 'Validating the problem first prevents wasted capital on unwanted products.',
      },
    ],
  },
  {
    id: 'be-1-2',
    moduleOrder: 1,
    lessonNumber: '1.2',
    title: 'Conducting Unbiased Customer Discovery Interviews',
    estimatedMinutes: 17,
    learningObjectives: [
      'Ask open-ended behavioral questions about past actions instead of hypothetical futures.',
      'Avoid leading questions that Fish for polite compliments.',
      'Synthesize interview transcripts into repeatable patterns.',
    ],
    sections: [
      {
        heading: '1. Why "Would You Buy This?" Fails Every Time',
        body: 'Humans are polite. If you show an acquaintance a prototype and ask, "Would you pay $20 a month for this?", most will say yes to encourage you—and never open their wallets later. Ask about concrete past behavior instead of hypothetical promises.',
        keyTakeaway:
          'Past actions reveal truth; future hypotheticals invite polite fiction.',
      },
      {
        heading: '2. High-Signal Interview Questions',
        body: 'Keep interviews conversational (15–20 minutes), listen 80% of the time, and focus strictly on how the interviewee handled the problem last week or last month.',
        exampleOrTemplate: {
          label: 'Interview Script · Past-Behavior Prompts',
          content: `Avoid: "Do you think an automated bookkeeping app would help your shop?"
Ask:   "Walk me through the last time you calculated monthly supplier expenses—what took the longest?"
Avoid: "Would you use a remote translation service?"
Ask:   "When you last needed a document translated, how did you find someone, what did it cost, and what went wrong?"`,
        },
      },
      {
        heading: '3. Spotting Patterns After 10 Interviews',
        body: 'Log notes immediately after every call using consistent tags (pain point, frequency, current cost, quote). Look for issues raised unprompted by at least 6 out of 10 interviewees.',
      },
    ],
    quiz: [
      {
        id: 'be-1-2-q1',
        question: 'Which interview question produces the most reliable customer evidence?',
        options: [
          '"Would you definitely buy my product if I launch it next month?"',
          '"Tell me about the last time you dealt with this task—what tools did you use and what frustrated you?"',
          '"Don’t you agree my logo looks professional?"',
        ],
        correctIndex: 1,
        explanation: 'Asking for concrete stories about past behavior uncovers real friction and spending.',
      },
      {
        id: 'be-1-2-q2',
        question: 'During a discovery interview, roughly what share of the time should the entrepreneur spend listening vs. pitching?',
        options: [
          'Listen ~80%, prompt concisely ~20%.',
          'Pitch nonstop for 95% of the meeting.',
          'Read terms and conditions aloud.',
        ],
        correctIndex: 0,
        explanation: 'Discovery interviews fail when founders pitch too early instead of learning from the customer.',
      },
      {
        id: 'be-1-2-q3',
        question: 'Why should interview notes be tagged and reviewed across at least 8–12 conversations?',
        options: [
          'To separate recurring market patterns from one-off personal preferences.',
          'To double the price arbitrarily.',
          'To skip building a financial forecast.',
        ],
        correctIndex: 0,
        explanation: 'Consistent patterns across multiple independent interviews reduce bias.',
      },
    ],
  },
  {
    id: 'be-1-3',
    moduleOrder: 1,
    lessonNumber: '1.3',
    title: 'Testing Demand with Minimal Viable Offers',
    estimatedMinutes: 16,
    learningObjectives: [
      'Design low-cost experiments that test real willingness to pay or commit.',
      'Deliver manual "concierge" pilots before investing in heavy automation or stock.',
      'Define clear pass/fail criteria before running a demand test.',
    ],
    sections: [
      {
        heading: '1. Commitment Over Compliments',
        body: 'Before leasing a storefront or hiring engineers to build complex automation, test demand with a Minimal Viable Offer (MVO): a manual service pilot, pre-order reservation, or scoped trial deliverable with a clear price tag.',
        keyTakeaway:
          'Real validation happens when a customer invests real money, time, or deposit—not a social media like.',
      },
      {
        heading: '2. The Concierge Pilot Approach',
        body: 'If you plan to launch a bookkeeping or localization service, fulfill the first five clients manually using spreadsheets and existing tools. You learn every operational edge case while earning revenue on Day 1.',
        exampleOrTemplate: {
          label: 'MVO Experiment Card · Pre-Build Test',
          content: `Offer: Weekly Bilingual Invoice & Cash-Flow Summary for 5 local traders
Delivery Method: Manual Google Sheet + PDF delivered via WhatsApp/Email (Zero custom software)
Test Goal: 5 paying pilot clients at $25/month within 14 days
Pivot Trigger: Fewer than 2 paying pilots after 20 direct outreach conversations`,
        },
      },
      {
        heading: '3. Learning From Failed Tests Quickly',
        body: 'A failed low-cost experiment is a victory: it saves months of wasted savings and reveals whether the pricing, audience segment, or core problem needs adjustment.',
      },
    ],
    quiz: [
      {
        id: 'be-1-3-q1',
        question: 'What is the purpose of a manual "concierge" pilot before building software?',
        options: [
          'To validate willingness to pay and learn real operational edge cases at minimal cost.',
          'To hide pricing from customers indefinitely.',
          'To avoid ever talking to buyers.',
        ],
        correctIndex: 0,
        explanation: 'Delivering the service manually confirms genuine value before committing capital to automation.',
      },
      {
        id: 'be-1-3-q2',
        question: 'Which outcome provides the strongest validation of demand?',
        options: [
          '15 customers pay a small pilot fee or sign a scoped purchase order.',
          '100 people click "Like" on an announcement image.',
          'Your cousin promises to tell his friends.',
        ],
        correctIndex: 0,
        explanation: 'Financial or contractual commitment validates value far more reliably than passive attention.',
      },
      {
        id: 'be-1-3-q3',
        question: 'Why define a pass/fail threshold before starting an experiment?',
        options: [
          'So emotional attachment does not tempt you to keep funding an unresponsive offer.',
          'To guarantee 100% conversion automatically.',
          'To replace customer interviews.',
        ],
        correctIndex: 0,
        explanation: 'Pre-committed thresholds encourage objective decisions based on evidence.',
      },
    ],
  },
  // MODULE 2
  {
    id: 'be-2-1',
    moduleOrder: 2,
    lessonNumber: '2.1',
    title: 'Revenue, Gross Margin, Fixed vs. Variable Costs',
    estimatedMinutes: 18,
    learningObjectives: [
      'Classify venture expenses accurately into fixed overhead and variable direct costs.',
      'Calculate gross profit and gross margin percentage for products or services.',
      'Determine contribution margin per unit before scaling marketing spend.',
    ],
    sections: [
      {
        heading: '1. Revenue Is Not Profit',
        body: 'Selling $5,000 worth of goods means nothing if materials, shipping, payment fees, and packaging cost $5,200. Founders must separate top-line revenue from gross profit and net operating profit from the very first transaction.',
        keyTakeaway:
          'Never scale a business model with negative unit economics—selling more units only accelerates losses.',
      },
      {
        heading: '2. Fixed Costs vs. Variable Costs',
        body: 'Variable costs (COGS / direct delivery labor, packaging, transaction fees) rise and fall directly with each sale. Fixed costs (monthly rent, core accounting software, base salaries) must be paid even if zero units sell that month.',
        exampleOrTemplate: {
          label: 'Unit Economics Formula · Catering / Craft Venture',
          content: `Selling Price per Box:        $30.00
Direct Ingredients & Box:    -$12.00
Delivery & Payment Fee:       -$3.00
-------------------------------------
Contribution Margin / Unit:   $15.00 (50% Gross Margin)

Monthly Fixed Overhead (Kitchen rent + utilities): $900.00`,
        },
      },
      {
        heading: '3. Protecting Margin Against Hidden Fees',
        body: 'Always include currency conversion fees, payment gateway percentages, returns, and realistic contractor hours inside direct costs so margins stay honest.',
      },
    ],
    quiz: [
      {
        id: 'be-2-1-q1',
        question: 'A digital studio charges $200 for a web audit and pays a freelancer $120 directly per audit. What is the gross margin percentage?',
        options: ['40%', '60%', '80%'],
        correctIndex: 0,
        explanation: '$200 minus $120 leaves $80 gross profit; $80 / $200 = 40%.',
      },
      {
        id: 'be-2-1-q2',
        question: 'Which expense is an example of a fixed monthly cost?',
        options: [
          'Packaging cardboard used per shipped order',
          'Base monthly workshop rent',
          'Payment processing percentage charged per sale',
        ],
        correctIndex: 1,
        explanation: 'Base rent remains constant regardless of whether you fulfill 5 orders or 50 orders in a month.',
      },
      {
        id: 'be-2-1-q3',
        question: 'Why must payment gateway and shipping fees be counted inside variable costs?',
        options: [
          'They scale with every transaction and directly reduce true contribution margin.',
          'They are optional donations.',
          'They increase gross revenue.',
        ],
        correctIndex: 0,
        explanation: 'Omitting transaction-linked fees overstates profitability and leads to underpricing.',
      },
    ],
  },
  {
    id: 'be-2-2',
    moduleOrder: 2,
    lessonNumber: '2.2',
    title: 'Cash-Flow Timing & Avoiding Working-Capital Shortfalls',
    estimatedMinutes: 17,
    learningObjectives: [
      'Build a weekly or monthly cash-flow ledger separating cash inflows from invoiced revenue.',
      'Calculate cash runway and identify timing gaps before balances turn negative.',
      'Negotiate deposit milestones and supplier terms to protect working capital.',
    ],
    sections: [
      {
        heading: '1. Why Healthy Businesses Still Run Out of Cash',
        body: 'Growth consumes cash before it returns cash. If you buy supplies upfront on Day 1, deliver work on Day 15, and wait 45 days for a corporate client’s invoice payment, you face a 60-day cash valley even on a profitable contract.',
        keyTakeaway:
          'Profitability measures long-term viability; cash flow determines whether you survive next month.',
      },
      {
        heading: '2. Practical Cash-Flow Forecast Layout',
        body: 'Record opening bank balance, actual cash collected, actual cash paid out, and ending cash balance for every period.',
        exampleOrTemplate: {
          label: '3-Month Cash Forecast Snapshot',
          content: `                  Month 1     Month 2     Month 3
Opening Cash:     $1,200        $650        $250
Cash Collected:     +$400       +$800     +$1,900
Cash Paid Out:     -$950     -$1,200     -$1,050
-------------------------------------------------
Ending Cash:        $650        $250      $1,100  <-- Watch Month 2 tight buffer!`,
        },
      },
      {
        heading: '3. Three Levers to Smooth Working Capital',
        body: 'Request a 30–50% upfront deposit on project work, offer small early-payment incentives or clear invoice due dates, and avoid tying up scarce cash in slow-moving excess inventory.',
      },
    ],
    quiz: [
      {
        id: 'be-2-2-q1',
        question: 'How does requesting a 40% client deposit at project kickoff improve venture resilience?',
        options: [
          'It funds direct delivery costs upfront and shrinks working-capital gaps.',
          'It eliminates the need to deliver quality work.',
          'It doubles fixed rent automatically.',
        ],
        correctIndex: 0,
        explanation: 'Upfront milestone deposits match cash inflows closer to when expenses are incurred.',
      },
      {
        id: 'be-2-2-q2',
        question: 'If a venture has $3,000 in the bank and loses $750 net cash per month, what is its cash runway?',
        options: ['2 months', '4 months', '12 months'],
        correctIndex: 1,
        explanation: '$3,000 divided by $750 net monthly burn equals 4 months of runway.',
      },
      {
        id: 'be-2-2-q3',
        question: 'When should a cash-flow spreadsheet record a $1,000 customer invoice that has Net-60 payment terms?',
        options: [
          'In the future month when cash actually arrives in the bank account.',
          'Immediately as cash-on-hand on Day 1.',
          'Never record it anywhere.',
        ],
        correctIndex: 0,
        explanation: 'Cash-flow ledgers track real money movement rather than accrual invoice dates.',
      },
    ],
  },
  {
    id: 'be-2-3',
    moduleOrder: 2,
    lessonNumber: '2.3',
    title: 'Pricing Models & Break-Even Analysis',
    estimatedMinutes: 16,
    learningObjectives: [
      'Compute monthly break-even sales volume from fixed costs and unit contribution.',
      'Compare cost-plus, competitive, and value-based pricing strategies.',
      'Recognize why underpricing erodes service quality and sustainability.',
    ],
    sections: [
      {
        heading: '1. Computing Your Break-Even Point',
        body: 'Break-even analysis tells you the exact number of units or billable hours needed each month so total contribution margin equals fixed overhead. Below break-even, the business loses money; above break-even, each unit builds surplus.',
        keyTakeaway:
          'Break-Even Units = Monthly Fixed Costs / (Selling Price per Unit - Variable Cost per Unit).',
      },
      {
        heading: '2. Pricing Beyond Cost-Plus',
        body: 'Cost-plus pricing adds a flat markup to direct cost, which protects baseline margin but often undercharges for high-impact expertise. Value-based pricing anchors fees to the measurable outcome delivered (hours saved, errors avoided, revenue enabled).',
        exampleOrTemplate: {
          label: 'Worked Example · Break-Even Calculation',
          content: `Monthly Fixed Costs = $900
Price per Unit      = $30
Variable Cost/Unit  = $15
Contribution/Unit   = $30 - $15 = $15

Break-Even Volume   = $900 / $15 = 60 units per month (or ~2 units/day)`,
        },
      },
      {
        heading: '3. Avoiding the Race to the Bottom',
        body: 'Trying to beat every competitor solely on rock-bottom price traps solo founders in exhaustion with zero budget for tools, taxes, or support. Compete on reliability, clarity, and specialized trust instead.',
      },
    ],
    quiz: [
      {
        id: 'be-2-3-q1',
        question: 'Fixed costs are $1,200/month. Selling price is $50 and variable cost is $20 per unit. How many units are needed to break even?',
        options: ['24 units', '40 units', '60 units'],
        correctIndex: 1,
        explanation: 'Contribution margin is $50 - $20 = $30/unit. $1,200 / $30 = 40 units.',
      },
      {
        id: 'be-2-3-q2',
        question: 'What is a common danger of pricing purely as the cheapest option in the market?',
        options: [
          'Thin margins leave no room for quality assurance, unexpected delays, or growth.',
          'Customers demand higher prices automatically.',
          'Fixed costs drop to zero.',
        ],
        correctIndex: 0,
        explanation: 'Sustainable pricing must cover full delivery, overhead, and contingency buffers.',
      },
      {
        id: 'be-2-3-q3',
        question: 'What anchors value-based pricing?',
        options: [
          'The tangible economic or operational benefit the customer gains from the solution.',
          'Random guessing without cost checks.',
          'Only raw paper cost.',
        ],
        correctIndex: 0,
        explanation: 'Value-based pricing aligns price with customer outcome while ensuring healthy margin above cost.',
      },
    ],
  },
  // MODULE 3
  {
    id: 'be-3-1',
    moduleOrder: 3,
    lessonNumber: '3.1',
    title: 'Designing Repeatable Service Delivery Workflows',
    estimatedMinutes: 15,
    learningObjectives: [
      'Document end-to-end delivery steps from client onboarding to final sign-off.',
      'Create lightweight Standard Operating Procedures (SOPs) to prevent dropped tasks.',
      'Spot single-point bottlenecks before adding new clients.',
    ],
    sections: [
      {
        heading: '1. Systems Turn Heroic Effort Into Consistent Quality',
        body: 'When a founder remembers every step only in their head, quality drops whenever volume rises or someone falls sick. A one-page Standard Operating Procedure (SOP) checklist ensures every client receives dependable, repeatable execution.',
        keyTakeaway:
          'Document any operational workflow the third time you repeat it.',
      },
      {
        heading: '2. Mapping Delivery Bottlenecks',
        body: 'List each step from payment deposit to final handover, noting average wait time and handoff owner. Often 70% of total delivery duration sits in waiting for missing client assets or unclear approvals.',
        exampleOrTemplate: {
          label: 'SOP Checklist · Client Onboarding Flow',
          content: `Step 1: Send scoped agreement & 40% deposit invoice (Owner: Ops)
Step 2: Confirm deposit cleared + send 5-question intake form (Owner: Ops)
Step 3: 20-min kickoff call to verify deliverables & due date (Owner: Lead)
Step 4: Mid-point draft review at Day 5 before final export`,
        },
      },
      {
        heading: '3. Setting Clear Boundaries With Clients',
        body: 'Include revision limits, communication hours, and response-time expectations inside onboarding notes so teamwork remains respectful and sustainable.',
      },
    ],
    quiz: [
      {
        id: 'be-3-1-q1',
        question: 'What is the main benefit of writing concise Standard Operating Procedures (SOPs)?',
        options: [
          'Consistent quality, fewer missed handoffs, and easier delegation as volume grows.',
          'Making simple tasks take ten times longer.',
          'Eliminating customer communication.',
        ],
        correctIndex: 0,
        explanation: 'Clear checklists standardize quality and free mental bandwidth.',
      },
      {
        id: 'be-3-1-q2',
        question: 'Where do most delays occur in small service businesses?',
        options: [
          'Waiting on missing intake files, unconfirmed approvals, and ambiguous handoffs.',
          'Typing too cleanly.',
          'Using checklists.',
        ],
        correctIndex: 0,
        explanation: 'Structured onboarding intake eliminates back-and-forth delays later.',
      },
      {
        id: 'be-3-1-q3',
        question: 'Why state revision limits and communication hours during onboarding?',
        options: [
          'Clear expectations protect project profitability and prevent scope burnout.',
          'To upset paying clients.',
          'To hide project deadlines.',
        ],
        correctIndex: 0,
        explanation: 'Shared boundaries create professional, predictable partnerships.',
      },
    ],
  },
  {
    id: 'be-3-2',
    moduleOrder: 3,
    lessonNumber: '3.2',
    title: 'Cross-Border Payment, Tax & Legal Basics',
    estimatedMinutes: 17,
    learningObjectives: [
      'Separate personal finances from business revenue and expense accounts.',
      'Document cross-border invoices cleanly with required tax and currency details.',
      'Seek qualified local legal/accounting verification before signing international agreements.',
    ],
    sections: [
      {
        heading: '1. Clean Bookkeeping Protects Displaced and Remote Founders',
        body: 'Commingling personal groceries and business software receipts in one account creates chaos during tax season and blocks access to grants or partner contracts. Keep dedicated ledgers and receipts from Day 1.',
        keyTakeaway:
          'Separate business records and set aside a fixed tax reserve percentage from every client payment immediately.',
      },
      {
        heading: '2. Essential Elements of an International Invoice',
        body: 'Remote service providers working across borders need clear invoicing showing legal names, invoice number, issue/due dates, itemized scope, currency (e.g., USD or EUR), and verified payout instructions.',
        exampleOrTemplate: {
          label: 'Invoice Checklist · Cross-Border Services',
          content: `- Unique sequential Invoice ID (e.g., INV-2026-014)
- Provider legal name, address/jurisdiction & contact email
- Client legal entity name & billing contact
- Clear itemized service description & milestone reference
- Currency, subtotal, applicable tax status, total due & Net-14 due date`,
        },
      },
      {
        heading: '3. Navigating Regulatory Rules Responsibly',
        body: 'Work-permit, business registration, and VAT/withholding tax laws vary significantly by country of residence. Always consult a vetted local legal clinic, chamber of commerce, or licensed accountant for binding compliance advice.',
      },
    ],
    quiz: [
      {
        id: 'be-3-2-q1',
        question: 'What is the most important first financial habit for a new freelancer or venture?',
        options: [
          'Separate business income/expenses from personal spending and keep organized receipts.',
          'Mix all funds in cash envelopes without notes.',
          'Wait three years before checking tax obligations.',
        ],
        correctIndex: 0,
        explanation: 'Separated ledgers ensure accurate profitability tracking and compliance readiness.',
      },
      {
        id: 'be-3-2-q2',
        question: 'Why must cross-border invoices specify currency explicitly (e.g., USD vs. CAD)?',
        options: [
          'To prevent costly payment disputes or short-paid balances from exchange differences.',
          'Because banks cannot read numbers.',
          'To hide the invoice date.',
        ],
        correctIndex: 0,
        explanation: 'Explicit currency codes avoid ambiguity across international banking rails.',
      },
      {
        id: 'be-3-2-q3',
        question: 'How should founders treat general online articles about tax and registration rules?',
        options: [
          'As starting education—always verify binding requirements with a local licensed advisor or legal aid clinic.',
          'As legally binding exemptions everywhere in the world.',
          'Ignore local laws completely if working online.',
        ],
        correctIndex: 0,
        explanation: 'Local residency and tax obligations require jurisdiction-specific verification.',
      },
    ],
  },
  {
    id: 'be-3-3',
    moduleOrder: 3,
    lessonNumber: '3.3',
    title: 'Supplier Agreements & Quality Assurance',
    estimatedMinutes: 15,
    learningObjectives: [
      'Identify single-supplier concentration risks and build secondary backups.',
      'Define measurable acceptance standards before accepting vendor work.',
      'Document clear delivery, confidentiality, and termination terms.',
    ],
    sections: [
      {
        heading: '1. Never Rely on a Single Point of Failure',
        body: 'If your business relies on one local printer, one payment processor, or one freelance developer with no backup, one unexpected disruption halts all customer deliveries. Identify critical dependencies and qualify at least one alternate vendor.',
        keyTakeaway:
          'Resilient operations maintain backup suppliers and documented asset ownership (domains, repositories, designs).',
      },
      {
        heading: '2. Written Quality Standards Prevent Disputes',
        body: 'When outsourcing components or collaborating with contractors, specify measurable acceptance criteria upfront rather than arguing over taste later.',
        exampleOrTemplate: {
          label: 'Vendor Brief Template · Quality & Ownership',
          content: `- Deliverable Spec: Exact file formats, dimensions, or test cases required
- Delivery Milestone: Draft review date + final delivery date
- IP Ownership: Client owns final paid deliverables; credentials transferred to org vault
- Backup Plan: Secondary vendor pre-vetted for peak periods`,
        },
      },
      {
        heading: '3. Pre-Delivery Inspection Gates',
        body: 'Inspect every batch or digital deliverable against a 3-minute quality checklist before handing it to your customer—catching typos or defective items internally protects your brand.',
      },
    ],
    quiz: [
      {
        id: 'be-3-3-q1',
        question: 'Why should an enterprise avoid relying on a single unbacked vendor for a critical operational input?',
        options: [
          'Vendor outages, price spikes, or delays can immediately halt all customer deliveries.',
          'Having two vetted vendors decreases reliability.',
          'Backups double monthly rent.',
        ],
        correctIndex: 0,
        explanation: 'Secondary supplier options protect continuity during unexpected supply chain disruptions.',
      },
      {
        id: 'be-3-3-q2',
        question: 'Which asset ownership issue commonly harms small ventures working with contractors?',
        options: [
          'Domain names or code repositories registered solely under a contractor’s personal account.',
          'Using version control.',
          'Keeping clear written briefs.',
        ],
        correctIndex: 0,
        explanation: 'Always register domains, hosting, and primary accounts under organization-owned credentials.',
      },
      {
        id: 'be-3-3-q3',
        question: 'What is the purpose of a pre-delivery QA checklist?',
        options: [
          'Catch errors internally before the customer experiences a defect.',
          'Delay invoices unnecessarily.',
          'Eliminate supplier contracts.',
        ],
        correctIndex: 0,
        explanation: 'Consistent QA builds reliability and reduces costly rework.',
      },
    ],
  },
  // MODULE 4
  {
    id: 'be-4-1',
    moduleOrder: 4,
    lessonNumber: '4.1',
    title: 'Customer Retention & Referral Economics',
    estimatedMinutes: 16,
    learningObjectives: [
      'Explain why retaining existing customers is dramatically cheaper than acquiring new ones.',
      'Calculate basic Customer Lifetime Value (LTV) vs. Customer Acquisition Cost (CAC).',
      'Design ethical follow-up loops that earn repeat business and word-of-mouth referrals.',
    ],
    sections: [
      {
        heading: '1. The Silent Leak of High Churn',
        body: 'Acquiring a new client requires outreach, proposals, and trust-building. If 40% of clients leave after one month due to poor follow-up, you run on an exhausting treadmill. Small improvements in retention compound profitability rapidly.',
        keyTakeaway:
          'Sustainable ventures grow by delighting existing buyers first so they renew and refer peers.',
      },
      {
        heading: '2. Comparing LTV to CAC',
        body: 'Track how much gross profit an average customer generates over their relationship (LTV) against what it cost in time and marketing to win them (CAC).',
        exampleOrTemplate: {
          label: 'Retention Economics · Example Comparison',
          content: `Average Monthly Retainer Gross Profit: $80
Average Retention (Scenario A - High Churn): 2 months -> LTV = $160
Average Retention (Scenario B - Strong Onboarding): 8 months -> LTV = $640
If CAC = $100: Scenario A barely survives; Scenario B generates healthy 6.4x LTV:CAC.`,
        },
      },
      {
        heading: '3. Asking for Feedback and Referrals Naturally',
        body: 'After delivering a clear win—never during a mistake—ask clients two concise questions: "What was most useful?" and "Do you know one peer facing a similar challenge?"',
      },
    ],
    quiz: [
      {
        id: 'be-4-1-q1',
        question: 'If Customer Acquisition Cost (CAC) is $120 and Customer Lifetime Gross Profit (LTV) is $90, what happens as sales grow?',
        options: [
          'The venture loses money on every newly acquired customer.',
          'Profit grows automatically.',
          'Fixed costs become zero.',
        ],
        correctIndex: 0,
        explanation: 'When CAC exceeds LTV, acquisition is unsustainable until retention, margin, or acquisition cost improves.',
      },
      {
        id: 'be-4-1-q2',
        question: 'When is the best moment to ask a customer for a testimonial or peer referral?',
        options: [
          'Immediately after delivering a clear, verified success or milestone.',
          'Before delivering anything.',
          'While resolving a billing complaint.',
        ],
        correctIndex: 0,
        explanation: 'Clients gladly recommend partners right after experiencing tangible value.',
      },
      {
        id: 'be-4-1-q3',
        question: 'Why does reducing monthly customer churn dramatically improve venture stability?',
        options: [
          'Existing customers generate predictable recurring revenue without repeating full acquisition costs.',
          'It eliminates invoicing.',
          'It removes quality standards.',
        ],
        correctIndex: 0,
        explanation: 'Strong retention compounds base revenue and stabilizes monthly cash flow.',
      },
    ],
  },
  {
    id: 'be-4-2',
    moduleOrder: 4,
    lessonNumber: '4.2',
    title: 'Presenting Evidence-Based Venture Briefs',
    estimatedMinutes: 15,
    learningObjectives: [
      'Structure a concise 12-month operating brief grounded in real evidence.',
      'Highlight assumptions, unit economics, and key operational risks honestly.',
      'Tailor pitch emphasis for grant panels, incubators, or commercial partners.',
    ],
    sections: [
      {
        heading: '1. Evidence Persuades Serious Partners',
        body: 'Incubator reviewers, ethical lenders, and commercial partners see dozens of overly optimistic projections ("if we capture just 1% of the global market..."). Grounded founders earn trust by showing real discovery quotes, pilot sales numbers, unit costs, and honest constraints.',
        keyTakeaway:
          'Ten paying pilot customers and clear unit margins beat giant hypothetical market charts every time.',
      },
      {
        heading: '2. Six-Part Venture Brief Architecture',
        body: 'Keep your executive dossier tight and readable—around 4 to 6 structured pages or 8 focused slides.',
        exampleOrTemplate: {
          label: 'Venture Brief Outline · Incubator & Partner Ready',
          content: `1. Problem & Evidence: Real workaround costs from 10+ interviews
2. Solution & Scope: Exact product/service delivered in Year 1
3. Validation Traction: Pilot numbers, deposits, or conversion rates
4. Unit Economics & Cash Plan: Price, variable cost, break-even, 12-month cash runway
5. Operations & Risk Controls: Key SOPs, backup vendors, legal check
6. Next 90-Day Milestones: Specific, measurable targets`,
        },
      },
      {
        heading: '3. Handling Hard Questions Calmly',
        body: 'If a reviewer spots a gap or risk, acknowledge it directly ("We have not tested region B yet; our first 60 days test region A only") rather than improvising vague answers.',
      },
    ],
    quiz: [
      {
        id: 'be-4-2-q1',
        question: 'What makes a financial projection credible to an incubator or partner panel?',
        options: [
          'Building bottom-up assumptions from real pilot pricing, variable costs, and capacity limits.',
          'Claiming 1% of a trillion-dollar global market with zero expenses.',
          'Omitting fixed costs.',
        ],
        correctIndex: 0,
        explanation: 'Bottom-up unit models grounded in real pilot data show operational realism.',
      },
      {
        id: 'be-4-2-q2',
        question: 'How should a founder respond when a reviewer points out an untested assumption?',
        options: [
          'Acknowledge the gap candidly and state the concrete experiment planned to test it.',
          'Claim no risks exist.',
          'Argue about unrelated slides.',
        ],
        correctIndex: 0,
        explanation: 'Intellectual honesty demonstrates maturity and sound risk management.',
      },
      {
        id: 'be-4-2-q3',
        question: 'Why emphasize customer discovery quotes and pilot traction early in a venture brief?',
        options: [
          'Evidence proves real-world demand before asking partners for support or capital.',
          'It fills empty space without data.',
          'It replaces pricing analysis.',
        ],
        correctIndex: 0,
        explanation: 'Early proof validates that the enterprise solves a genuine need.',
      },
    ],
  },
  {
    id: 'be-4-3',
    moduleOrder: 4,
    lessonNumber: '4.3',
    title: 'Capstone Venture Review Panel',
    estimatedMinutes: 16,
    learningObjectives: [
      'Audit all four module deliverables into one consistent venture dossier.',
      'Reconcile discovery evidence, financial model, and operational SOPs for internal consistency.',
      'Prepare a crisp 5-minute executive walkthrough and Q&A defense.',
    ],
    sections: [
      {
        heading: '1. Cross-Checking Numerical Consistency',
        body: 'Before submitting your capstone dossier, check that numbers align across every section: if your marketing plan projects 40 clients in Month 3, does your operational plan include sufficient staff hours, and does your cash-flow forecast include the variable costs for 40 deliveries?',
        keyTakeaway:
          'Coherence across customer demand, operational capacity, and cash runway separates ready ventures from rough drafts.',
      },
      {
        heading: '2. Final Pre-Panel Audit Checklist',
        body: 'Walk through the exact rubric mentors and incubator partners apply when reviewing venture capstones.',
        exampleOrTemplate: {
          label: 'Capstone Audit · Pre-Submission Verification',
          content: `- Discovery Log: 10+ interviews summarized with clear problem pattern
- Unit Economics: Price, variable cost, gross margin %, and monthly break-even verified
- Cash-Flow Table: 12 months showing opening/ending cash with realistic payment lags
- Ops & Risk Plan: Written SOPs + compliance & supplier backup notes`,
        },
      },
      {
        heading: '3. Turning Critique Into Immediate Iteration',
        body: 'Treat panel feedback as free senior advisory consulting. Log every suggestion, separate quick fixes from strategic pivots, and update your operating model within 48 hours.',
      },
    ],
    quiz: [
      {
        id: 'be-4-3-q1',
        question: 'What is a classic inconsistency reviewers immediately catch in capstone business plans?',
        options: [
          'Projecting high sales growth in the narrative while forgetting to include delivery costs or labor hours in the cash model.',
          'Using consistent currency formatting.',
          'Documenting supplier backups.',
        ],
        correctIndex: 0,
        explanation: 'Sales projections, operational capacity, and cost forecasts must reconcile directly.',
      },
      {
        id: 'be-4-3-q2',
        question: 'How long should an executive capstone summary take to state the core venture thesis?',
        options: [
          'Under 2 minutes—clearly stating problem, customer, economics, and 90-day goal.',
          '45 minutes before mentioning what the business sells.',
          'Only written in footnotes.',
        ],
        correctIndex: 0,
        explanation: 'Crisp opening framing helps reviewers focus on high-value feedback.',
      },
      {
        id: 'be-4-3-q3',
        question: 'What is the most productive attitude toward tough panel review questions?',
        options: [
          'Use constructive critique to strengthen blind spots before risking real capital.',
          'Ignore all feedback.',
          'Delete financial sheets entirely.',
        ],
        correctIndex: 0,
        explanation: 'Early scrutiny identifies vulnerabilities cheaply before live market launch.',
      },
    ],
  },
];
