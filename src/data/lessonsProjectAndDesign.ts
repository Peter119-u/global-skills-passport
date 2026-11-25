import type { LessonContent } from '../types/platform';

export const PROJECT_MANAGEMENT_LESSONS: LessonContent[] = [
  // MODULE 1
  {
    id: 'pm-1-1',
    moduleOrder: 1,
    lessonNumber: '1.1',
    title: 'Writing Clear Project Charters & Success Criteria',
    estimatedMinutes: 17,
    learningObjectives: [
      'Author a concise one-page project charter aligning sponsors and delivery teams.',
      'Define explicit "In Scope" and "Out of Scope" boundaries before execution begins.',
      'Write measurable success criteria rather than vague aspirations.',
    ],
    sections: [
      {
        heading: '1. Why Projects Drift Without an Initiation Charter',
        body: 'Many initiatives fail in the very first week—not because the team lacks skill, but because the sponsor, engineering lead, and community partners each hold a different mental picture of what "done" looks like. A concise project charter aligns expectations in writing before budgets or coding begin.',
        keyTakeaway:
          'A project charter is a living alignment contract—short enough to read in five minutes, specific enough to settle scope debates.',
      },
      {
        heading: '2. Anatomy of an Actionable Charter',
        body: 'Avoid 30-page templates nobody reads. Capture purpose, measurable success metrics, key deliverables, explicit exclusions ("Out of Scope"), assumptions, and decision authority.',
        exampleOrTemplate: {
          label: 'Charter Template · Digital Literacy Rollout',
          content: `Project: East Africa Mobile Study Hub Pilot (12 Weeks)
Objective: Enable 300 learners across 3 centers to complete Module 1 offline.
Success Criteria: >= 75% quiz completion rate; <= 2% sync error rate on 3G networks.
In Scope: Offline lesson reader, local progress storage, printed study packets.
Out of Scope (Phase 1): Live video streaming, automated external exam billing.
Sponsor Sign-Off: Program Director | Delivery Lead: Project Manager`,
        },
      },
      {
        heading: '3. Protecting Teams With "Out of Scope"',
        body: 'Listing what Phase 1 will intentionally NOT build prevents mid-project arguments and gives stakeholders confidence those features are tracked for Phase 2 rather than forgotten.',
      },
    ],
    quiz: [
      {
        id: 'pm-1-1-q1',
        question: 'Why is an explicit "Out of Scope" section essential in a project charter?',
        options: [
          'It prevents unreviewed additions from silently delaying deadlines and blowing budgets.',
          'It forbids ever building Phase 2 features later.',
          'It replaces the need for a sponsor.',
        ],
        correctIndex: 0,
        explanation: 'Clear exclusions align expectations early and establish a disciplined boundary against scope creep.',
      },
      {
        id: 'pm-1-1-q2',
        question: 'Which statement represents a measurable success criterion?',
        options: [
          '"Make the training portal really awesome."',
          '"Deliver mobile-friendly modules scoring >= 90 Lighthouse accessibility with < 300KB page weight."',
          '"Everyone feels happy at the end."',
        ],
        correctIndex: 1,
        explanation: 'Objective thresholds allow teams and sponsors to verify completion without ambiguity.',
      },
      {
        id: 'pm-1-1-q3',
        question: 'Who authorizes the initial project charter and its core constraints?',
        options: [
          'The project sponsor alongside the delivery lead.',
          'Only external website visitors.',
          'Nobody; charters are secret drafts.',
        ],
        correctIndex: 0,
        explanation: 'Sponsor authorization confirms organizational backing for scope, timeline, and resources.',
      },
    ],
  },
  {
    id: 'pm-1-2',
    moduleOrder: 1,
    lessonNumber: '1.2',
    title: 'Stakeholder Mapping & RACI Responsibility Matrices',
    estimatedMinutes: 16,
    learningObjectives: [
      'Map stakeholders by influence and interest to tailor communication cadence.',
      'Build a RACI matrix assigning Responsible, Accountable, Consulted, and Informed roles.',
      'Eliminate stalled deliverables caused by shared or missing accountability.',
    ],
    sections: [
      {
        heading: '1. Mapping Stakeholders Beyond the Core Team',
        body: 'Every program impacts people outside your immediate working group: partner universities, IT security reviewers, mentors, translators, and learners. Mapping stakeholders early by level of impact and decision power prevents last-minute legal or technical blockers right before launch.',
        keyTakeaway:
          'Engage compliance, security, and local community reviewers early—never treat them as a surprise checkpoint on launch eve.',
      },
      {
        heading: '2. RACI Governance in Practice',
        body: 'For every key deliverable, assign exactly one Accountable (A) decision-maker, one or more Responsible (R) doers, subject-matter Consulted (C) advisors, and Informed (I) stakeholders kept updated on milestones.',
        exampleOrTemplate: {
          label: 'RACI Matrix · Curriculum Launch Deliverables',
          content: `Deliverable               | PM | Curriculum Lead | Security Lead | Sponsor
--------------------------+----+-----------------+---------------+--------
Lesson Content Accuracy   | I  | A / R           | C             | I
Authentication & RLS Audit| C  | I               | A / R         | I
Launch Go/No-Go Sign-Off  | R  | C               | C             | A`,
        },
      },
      {
        heading: '3. Why Only One "A" Per Row',
        body: 'If two people share "Accountable" on one deliverable, both assume the other approved it—and critical bugs slip through. Keep accountability singular and unmistakable.',
      },
    ],
    quiz: [
      {
        id: 'pm-1-2-q1',
        question: 'In a RACI matrix, what happens when two managers are both marked "A" (Accountable) for the same deliverable?',
        options: [
          'Ownership blurs and decisions stall because each assumes the other has final responsibility.',
          'Tasks automatically finish twice as fast.',
          'Consulted experts no longer need to respond.',
        ],
        correctIndex: 0,
        explanation: 'Best practice mandates strictly one Accountable owner per deliverable.',
      },
      {
        id: 'pm-1-2-q2',
        question: 'What is the difference between Consulted (C) and Informed (I) stakeholders?',
        options: [
          'Consulted stakeholders provide two-way input before decisions finalize; Informed stakeholders receive one-way updates.',
          'Informed stakeholders write all the code.',
          'They mean the exact same thing.',
        ],
        correctIndex: 0,
        explanation: 'Distinguishing two-way consultation from broadcast updates keeps meetings lean and focused.',
      },
      {
        id: 'pm-1-2-q3',
        question: 'When should high-influence stakeholders such as legal or security reviewers be consulted?',
        options: [
          'Early during architecture and planning, not the night before launch.',
          'After the public press release.',
          'Never.',
        ],
        correctIndex: 0,
        explanation: 'Early consultation prevents expensive rework at the end of a timeline.',
      },
    ],
  },
  {
    id: 'pm-1-3',
    moduleOrder: 1,
    lessonNumber: '1.3',
    title: 'Work Breakdown Structures (WBS) & Preventing Scope Creep',
    estimatedMinutes: 17,
    learningObjectives: [
      'Decompose high-level project goals into deliverable-oriented Work Breakdown Structures.',
      'Apply the 100% Rule so no hidden tasks or testing work are omitted.',
      'Handle mid-project scope requests through structured trade-off evaluation.',
    ],
    sections: [
      {
        heading: '1. Deliverable-Oriented Decomposition',
        body: 'A Work Breakdown Structure (WBS) breaks a complex project into concrete deliverables and manageable work packages (typically 4–20 hours of work each). Avoid vague buckets like "Programming" or "Marketing"—instead list tangible outputs such as "Quiz Engine Component" or "Translated Arabic Onboarding Guide."',
        keyTakeaway:
          'If a work package cannot be clearly marked done or assigned an owner, break it down one level further.',
      },
      {
        heading: '2. Following the 100% Rule',
        body: 'Every level of a WBS must capture 100% of the work needed—including testing, documentation, security checks, translation review, and user training. Leaving QA and handover off the WBS guarantees late-stage schedule overruns.',
        exampleOrTemplate: {
          label: 'WBS Snippet · Certification Portal Module',
          content: `1.0 Assessment Portal Release
  1.1 Learner Quiz UI (1.1.1 Component Build, 1.1.2 Accessibility Audit)
  1.2 Progress Persistence (1.2.1 Storage Schema, 1.2.2 Offline Edge-Case Tests)
  1.3 Documentation & Rollout (1.3.1 Mentor Guide, 1.3.2 Partner Walkthrough)`,
        },
      },
      {
        heading: '3. Saying "Yes, With Trade-Offs" to New Requests',
        body: 'When a sponsor asks for a new feature mid-project, never simply say "no" or quietly absorb overtime. Present the exact options: extend the launch date by X days, add Y resources, or move an existing lower-priority item to Phase 2.',
      },
    ],
    quiz: [
      {
        id: 'pm-1-3-q1',
        question: 'What does the WBS "100% Rule" mean?',
        options: [
          'The WBS must include all work required to finish the project—including testing, docs, and handover—and nothing outside scope.',
          'Every task must take 100 hours.',
          '100% of stakeholders attend every meeting.',
        ],
        correctIndex: 0,
        explanation: 'Capturing testing, documentation, and rollout work inside the WBS keeps estimates realistic.',
      },
      {
        id: 'pm-1-3-q2',
        question: 'Which WBS item is better defined?',
        options: [
          '"Do backend stuff"',
          '"Implement & test /api/progress endpoint with input validation"',
          '"Work on site"',
        ],
        correctIndex: 1,
        explanation: 'Specific deliverable-based items clarify ownership and testing boundaries.',
      },
      {
        id: 'pm-1-3-q3',
        question: 'How should a project manager handle an urgent new feature request mid-delivery?',
        options: [
          'Evaluate schedule/budget impact and align with the sponsor on adjusting scope, date, or Phase 2 deferral.',
          'Silently drop automated testing to fit it in.',
          'Add it secretly without updating plans.',
        ],
        correctIndex: 0,
        explanation: 'Transparent trade-offs keep delivery predictable and quality intact.',
      },
    ],
  },
  // MODULE 2
  {
    id: 'pm-2-1',
    moduleOrder: 2,
    lessonNumber: '2.1',
    title: 'Critical Path Dependencies & Realistic Milestones',
    estimatedMinutes: 18,
    learningObjectives: [
      'Map finish-to-start dependencies across cross-functional tasks.',
      'Identify the Critical Path that determines minimum possible project duration.',
      'Build schedule buffers before high-risk external handoffs.',
    ],
    sections: [
      {
        heading: '1. Understanding Why Some Delays Cascade',
        body: 'Not all task delays affect the launch date equally. If designing social banners takes 3 days longer while software engineering still has 10 days left, the launch stays on track (the banner task has "float"). However, any delay on the Critical Path—the longest chain of dependent tasks—pushes the launch date back day for day.',
        keyTakeaway:
          'Focus daily schedule monitoring relentlessly on Critical Path bottlenecks and external approvals.',
      },
      {
        heading: '2. Parallelizing Work Safely',
        body: 'Once task dependencies are mapped clearly, identify tasks that can run in parallel rather than waiting sequentially. Draft user guides and translation glossaries while engineers build final API endpoints using agreed contracts.',
        exampleOrTemplate: {
          label: 'Dependency Trace · Critical Path Example',
          content: `Path A: Write Spec (3d) -> Build UI (6d) -> QA & Accessibility (3d) = 12 days [CRITICAL PATH]
Path B: Write Spec (3d) -> Draft Print Study Summary (4d) -> Review (1d) = 8 days (4 days float)
Result: Delaying Build UI by 2 days extends total launch to 14 days.`,
        },
      },
      {
        heading: '3. Protecting Milestones With Buffer Time',
        body: 'Avoid stacking 100% utilization with zero breathing room. Add explicit contingency buffer before external partner reviews or regulatory sign-offs.',
      },
    ],
    quiz: [
      {
        id: 'pm-2-1-q1',
        question: 'What defines the Critical Path in a project schedule?',
        options: [
          'The longest sequence of dependent tasks determining the shortest possible completion time.',
          'The shortest task on the team.',
          'Tasks assigned only to senior executives.',
        ],
        correctIndex: 0,
        explanation: 'Any delay on the Critical Path directly delays the final milestone unless mitigated.',
      },
      {
        id: 'pm-2-1-q2',
        question: 'If Task X has 5 days of "float" (slack) and slips by 2 days, what happens to the final launch date?',
        options: [
          'The final launch date stays on schedule because slack absorbs the 2-day slip.',
          'The launch delays by 7 days.',
          'The entire project cancels.',
        ],
        correctIndex: 0,
        explanation: 'Float represents scheduling flexibility before a non-critical task affects the Critical Path.',
      },
      {
        id: 'pm-2-1-q3',
        question: 'How can teams shorten total project duration without cutting quality?',
        options: [
          'Identify dependent chains that can safely run in parallel using agreed interface contracts.',
          'Skip quality assurance.',
          'Hide deadlines from contributors.',
        ],
        correctIndex: 0,
        explanation: 'Parallel execution compresses calendar duration while preserving verification steps.',
      },
    ],
  },
  {
    id: 'pm-2-2',
    moduleOrder: 2,
    lessonNumber: '2.2',
    title: 'Bottom-Up Cost Estimation & Contingency Reserves',
    estimatedMinutes: 17,
    learningObjectives: [
      'Estimate task effort using bottom-up ranges (optimistic, likely, pessimistic).',
      'Include often-forgotten indirect costs such as QA, localization, and software licenses.',
      'Separate tracked contingency reserves from baseline task estimates.',
    ],
    sections: [
      {
        heading: '1. Escaping Single-Point Guessing',
        body: 'Asking an engineer "How long will this take?" invites optimistic best-case guesses. Using three-point estimation—(Optimistic + 4 × Most Likely + Pessimistic) / 6—accounts naturally for realistic friction such as bugs, illness, or unclear requirements.',
        keyTakeaway:
          'Bottom-up estimates built from individual WBS work packages consistently outperform top-down wishful numbers.',
      },
      {
        heading: '2. Worked Three-Point Estimation Formula',
        body: 'Compute realistic expected effort and budget explicitly before committing numbers to donors or clients.',
        exampleOrTemplate: {
          label: 'PERT Formula · Effort Estimation',
          content: `Task: Offline Quiz & Progress Sync Testing
Optimistic (O):   6 hours
Most Likely (M): 10 hours
Pessimistic (P): 20 hours

Expected Effort = (6 + 4*10 + 20) / 6 = 66 / 6 = 11 hours
Contingency Reserve: +15% held at project level for unknown technical blockers`,
        },
      },
      {
        heading: '3. Tracking Burn Rate Early',
        body: 'Compare planned cost against actual hours spent at 25% and 50% completion—catching budget variance early leaves time to adjust scope cleanly.',
      },
    ],
    quiz: [
      {
        id: 'pm-2-2-q1',
        question: 'Using PERT three-point estimation (O=4h, M=8h, P=18h), what is the weighted expected estimate?',
        options: ['8 hours', '9 hours', '12 hours'],
        correctIndex: 1,
        explanation: '(4 + 4×8 + 18) / 6 = 54 / 6 = 9 hours.',
      },
      {
        id: 'pm-2-2-q2',
        question: 'Why hold a separate contingency reserve instead of padding every single task secretly?',
        options: [
          'Visible reserves can be governed transparently for genuine unexpected risks rather than wasted passively.',
          'Secret padding improves team trust.',
          'Reserves remove the need to track spending.',
        ],
        correctIndex: 0,
        explanation: 'Transparent contingency governance supports honest tracking and sponsor accountability.',
      },
      {
        id: 'pm-2-2-q3',
        question: 'Which hidden cost frequently breaks tight project budgets?',
        options: [
          'Forgetting to budget translation reviews, accessibility audits, and post-launch bug fixes.',
          'Using standard TypeScript types.',
          'Writing a WBS.',
        ],
        correctIndex: 0,
        explanation: 'Non-coding verification and localization steps consume significant real hours and must be estimated.',
      },
    ],
  },
  {
    id: 'pm-2-3',
    moduleOrder: 2,
    lessonNumber: '2.3',
    title: 'Balancing Scope, Time, Cost & Quality Constraints',
    estimatedMinutes: 15,
    learningObjectives: [
      'Explain the interconnected project constraint model (Scope, Schedule, Budget, Quality).',
      'Classify constraints by priority (fixed, flexible, negotiable) with sponsors early.',
      'Protect foundational quality and accessibility even under tight timelines.',
    ],
    sections: [
      {
        heading: '1. The Iron Triangle in Real Life',
        body: 'Scope, time, and cost are tightly linked around quality. If a sponsor cuts the schedule in half without adding budget, either scope must shrink (defer non-essential features to Phase 2) or quality collapses. Pretending all three stay untouched invites failure.',
        keyTakeaway:
          'Never sacrifice security, data integrity, or accessibility as an invisible shortcut to hit a date—shrink scope honestly instead.',
      },
      {
        heading: '2. Establishing a Priority Matrix',
        body: 'At project kickoff, ask the sponsor to rank Scope, Time, and Budget so only one is strictly fixed, one is flexible, and one accepts managed adjustments.',
        exampleOrTemplate: {
          label: 'Constraint Matrix · Phase 1 Launch Example',
          content: `Constraint | Status       | Decision Rule
-----------+--------------+-----------------------------------------
Schedule   | Fixed        | Must launch before Fall Cohort opens
Budget     | Constrained  | No extra contractor spend beyond reserve
Scope      | Flexible     | Trim nice-to-have filters to hit launch cleanly`,
        },
      },
      {
        heading: '3. Communicating Constraint Trade-Offs Early',
        body: 'Surfacing trade-offs two months ahead turns crisis meetings into calm strategic choices.',
      },
    ],
    quiz: [
      {
        id: 'pm-2-3-q1',
        question: 'If launch date is strictly fixed and budget cannot rise, what is the healthiest lever to protect quality?',
        options: [
          'Defer secondary scope items to Phase 2 while delivering core features cleanly.',
          'Skip security testing and accessibility checks.',
          'Force double unpaid hours indefinitely.',
        ],
        correctIndex: 0,
        explanation: 'Reducing Phase 1 scope preserves reliability and prevents technical debt.',
      },
      {
        id: 'pm-2-3-q2',
        question: 'Why ask sponsors to rank Scope, Time, and Cost priorities at kickoff?',
        options: [
          'It creates pre-agreed decision rules when unexpected changes occur later.',
          'It lets teams ignore budgets.',
          'It eliminates written requirements.',
        ],
        correctIndex: 0,
        explanation: 'Clear priority rankings resolve future trade-off debates quickly.',
      },
      {
        id: 'pm-2-3-q3',
        question: 'What usually happens when teams attempt to cut quality to meet an aggressive deadline?',
        options: [
          'Post-launch defects and rework end up taking far longer than building it properly.',
          'User trust rises immediately.',
          'Maintenance costs drop to zero.',
        ],
        correctIndex: 0,
        explanation: 'Rushed shortcuts accumulate rework that consumes future sprints.',
      },
    ],
  },
  // MODULE 3
  {
    id: 'pm-3-1',
    moduleOrder: 3,
    lessonNumber: '3.1',
    title: 'Backlog Prioritization, User Stories & Acceptance Criteria',
    estimatedMinutes: 17,
    learningObjectives: [
      'Prioritize backlogs using MoSCoW or value-versus-effort scoring.',
      'Write clear user stories connecting user role, capability, and tangible benefit.',
      'Author testable acceptance criteria defining "Done" unambiguously.',
    ],
    sections: [
      {
        heading: '1. Prioritizing Value Over Noise',
        body: 'Everything cannot be "Priority 1." Using MoSCoW (Must have, Should have, Could have, Won’t have right now) forces stakeholders to separate mission-critical requirements from optional polish.',
        keyTakeaway:
          'A prioritized backlog has one clear order from #1 downward—never twenty items tied for top priority.',
      },
      {
        heading: '2. Writing Testable User Stories',
        body: 'A strong user story explains who needs a feature, what they want to do, and why it matters—backed by explicit Given/When/Then acceptance tests.',
        exampleOrTemplate: {
          label: 'User Story & Acceptance Criteria Template',
          content: `Story: As a learner on a slow mobile connection, I want a printable study summary so I can review lessons offline.

Acceptance Criteria:
1. Given I am viewing any pathway Assignments tab, when I click "Printable Study Summary", the summary renders cleanly in single-column layout.
2. Given I click "Print / Save PDF", navigation chrome hides cleanly via @media print rules.
3. All 4 modules, key takeaways, capstone steps, and grading rubric appear without truncated text.`,
        },
      },
      {
        heading: '3. Definition of Done (DoD)',
        body: 'Agree on a team-wide Definition of Done covering TypeScript checks, responsiveness on mobile widths, keyboard accessibility, and peer review.',
      },
    ],
    quiz: [
      {
        id: 'pm-3-1-q1',
        question: 'In MoSCoW prioritization, what does the "W" stand for?',
        options: [
          'Won’t have in this release (explicitly deferred to protect core priorities).',
          'Weekly wish list.',
          'Wait indefinitely without recording.',
        ],
        correctIndex: 0,
        explanation: 'Explicitly marking items as "Won’t have now" keeps current sprint focus sharp.',
      },
      {
        id: 'pm-3-1-q2',
        question: 'What makes an acceptance criterion genuinely useful to engineers and testers?',
        options: [
          'Specific, observable pass/fail behaviors rather than subjective adjectives.',
          'Vague phrases like "make it pop."',
          'Omission of edge cases.',
        ],
        correctIndex: 0,
        explanation: 'Observable criteria remove ambiguity during QA verification.',
      },
      {
        id: 'pm-3-1-q3',
        question: 'Why does a user story include the "so that [benefit]" clause?',
        options: [
          'Understanding the user’s underlying goal helps the team design simpler, better solutions.',
          'To increase word count.',
          'To bypass code review.',
        ],
        correctIndex: 0,
        explanation: 'Outcome context empowers engineers and designers to make smart trade-offs.',
      },
    ],
  },
  {
    id: 'pm-3-2',
    moduleOrder: 3,
    lessonNumber: '3.2',
    title: 'Running Focused Standups & Retrospectives Across Time Zones',
    estimatedMinutes: 16,
    learningObjectives: [
      'Design asynchronous-first ceremonies respectful of distributed global teams.',
      'Keep daily syncs focused on blockers rather than status theater.',
      'Facilitate blameless retrospectives yielding concrete process experiments.',
    ],
    sections: [
      {
        heading: '1. Async-First Respect for Global Contributors',
        body: 'When engineers, mentors, and coordinators collaborate across Amman, Berlin, Nairobi, and Toronto, scheduling daily live calls forces someone into midnight meetings. Use crisp written async check-ins for routine updates and reserve brief synchronous overlap strictly for collaborative problem-solving.',
        keyTakeaway:
          'Default to clear written updates across time zones; use live calls for high-bandwidth decisions and blockers.',
      },
      {
        heading: '2. Blameless Sprint Retrospectives',
        body: 'At the end of every two-week sprint, reflect on what helped delivery, what slowed the team down, and pick one or two concrete improvements with assigned owners for the next sprint.',
        exampleOrTemplate: {
          label: 'Retrospective Agenda · 30-Minute Distributed Format',
          content: `1. Wins & Shout-Outs (5 min): Celebrate shipped milestones & peer help
2. Friction & Root Causes (10 min): Focus on systems/process, never personal blame
3. 1–2 Concrete Actions (10 min): Assign Owner + Target Date (e.g., "Add PR checklist by Tue")
4. Close & Confirm Next Sprint Goal (5 min)`,
        },
      },
      {
        heading: '3. Unblocking Quickly',
        body: 'A project manager’s highest-leverage service in Agile delivery is clearing external blockers—missing API credentials, delayed vendor feedback, or ambiguous requirements—before contributors sit idle.',
      },
    ],
    quiz: [
      {
        id: 'pm-3-2-q1',
        question: 'Why do effective distributed teams favor written asynchronous status check-ins?',
        options: [
          'They respect diverse time zones and preserve deep focus hours for builders.',
          'They prevent teams from ever speaking.',
          'They hide blockers.',
        ],
        correctIndex: 0,
        explanation: 'Async updates ensure equitable participation globally without meeting fatigue.',
      },
      {
        id: 'pm-3-2-q2',
        question: 'What is the primary goal of a blameless retrospective?',
        options: [
          'Improve workflows and prevent recurring friction by fixing systems rather than blaming individuals.',
          'Assign personal blame for missed estimates.',
          'List 20 unowned complaints.',
        ],
        correctIndex: 0,
        explanation: 'Psychological safety enables honest root-cause analysis and real improvement.',
      },
      {
        id: 'pm-3-2-q3',
        question: 'How many action items should a team realistically commit to after one retrospective?',
        options: [
          '1 to 2 specific, owned actions likely to actually get implemented.',
          '15 vague slogans.',
          'Zero actions.',
        ],
        correctIndex: 0,
        explanation: 'Focusing on 1–2 concrete improvements ensures real follow-through.',
      },
    ],
  },
  {
    id: 'pm-3-3',
    moduleOrder: 3,
    lessonNumber: '3.3',
    title: 'Measuring Delivery Flow Without Micromanagement',
    estimatedMinutes: 15,
    learningObjectives: [
      'Track cycle time, work-in-progress (WIP) limits, and sprint goal reliability.',
      'Spot stalled tasks sitting in "In Review" or "Blocked" columns early.',
      'Explain why lines of code or hours logged are flawed productivity metrics.',
    ],
    sections: [
      {
        heading: '1. Flow Metrics Over Vanity Output',
        body: 'Counting lines of code or mouse clicks incentivizes bloated software and burnout. Instead, healthy teams observe flow: Cycle Time (how long an item takes from starting work to verified done) and Work In Progress (how many half-finished tasks sit open simultaneously).',
        keyTakeaway:
          'Stop starting, start finishing—limiting Work In Progress dramatically speeds up actual completions.',
      },
      {
        heading: '2. Diagnosing Board Bottlenecks',
        body: 'Look at your Kanban board columns from right to left (Done -> QA -> Code Review -> In Progress). If six tickets are piling up in Code Review while new tickets keep getting pulled into In Progress, help clear reviews first.',
        exampleOrTemplate: {
          label: 'Flow Health Snapshot · Sprint Review',
          content: `WIP Limit per Column: Max 3 items In Progress, Max 3 items In Review
Median Cycle Time: 2.8 days (down from 4.5 days last sprint)
Goal Achievement: 5 of 6 committed stories completed & verified`,
        },
      },
      {
        heading: '3. Outcome Accountability',
        body: 'Measure success by working, accessible software and satisfied learners—never by hours sat in front of a screen.',
      },
    ],
    quiz: [
      {
        id: 'pm-3-3-q1',
        question: 'What happens when a team limits Work In Progress (WIP) on its Kanban board?',
        options: [
          'Tasks move to completion faster with less context-switching and fewer review bottlenecks.',
          'Nothing ever ships.',
          'Code quality drops.',
        ],
        correctIndex: 0,
        explanation: 'Limiting WIP concentrates team focus on finishing started work.',
      },
      {
        id: 'pm-3-3-q2',
        question: 'Which metric best measures how long a task takes once work actively begins until verified done?',
        options: ['Cycle Time', 'Total lines of CSS', 'Number of calendar invites'],
        correctIndex: 0,
        explanation: 'Cycle time tracks true delivery speed from start to verified completion.',
      },
      {
        id: 'pm-3-3-q3',
        question: 'Why should managers avoid measuring engineer productivity by lines of code written?',
        options: [
          'Concise, refactored solutions are often higher quality than verbose, duplicated code.',
          'Engineers cannot count.',
          'Git does not store line history.',
        ],
        correctIndex: 0,
        explanation: 'Good engineering often removes unnecessary lines while solving harder problems cleanly.',
      },
    ],
  },
  // MODULE 4
  {
    id: 'pm-4-1',
    moduleOrder: 4,
    lessonNumber: '4.1',
    title: 'Risk Registers, Likelihood/Impact Scoring & Owners',
    estimatedMinutes: 17,
    learningObjectives: [
      'Identify technical, operational, security, and partner risks early.',
      'Score risks systematically by Likelihood × Impact to prioritize mitigations.',
      'Assign each active risk an owner, preventive mitigation, and trigger-based contingency.',
    ],
    sections: [
      {
        heading: '1. Proactive Risk Governance vs. Firefighting',
        body: 'Risks are uncertain future events that could threaten outcomes; issues are problems happening right now. A living Risk Register spots high-likelihood or high-impact threats early so teams implement inexpensive safeguards before emergencies strike.',
        keyTakeaway:
          'Every high-severity risk requires an explicit named owner and an early warning trigger.',
      },
      {
        heading: '2. Scoring and Mitigating Top Risks',
        body: 'Score Likelihood (1–5) and Impact (1–5), multiply for Exposure Score (1–25), and focus active mitigation plans on the top items.',
        exampleOrTemplate: {
          label: 'Risk Register Entry · Remote Delivery Program',
          content: `Risk: Partner institution API format changes 2 weeks before pilot
Likelihood: 3/5 | Impact: 5/5 | Exposure: 15 (High)
Owner: Integration Lead
Mitigation: Request frozen schema spec by Week 4; write automated contract tests.
Contingency Trigger: If API breaks after Week 8, fall back to verified CSV batch export.`,
        },
      },
      {
        heading: '3. Reviewing Risks Weekly',
        body: 'Keep the Risk Register alive in a 10-minute weekly check: retire closed risks, escalate rising threats, and verify mitigation tasks are actually completed.',
      },
    ],
    quiz: [
      {
        id: 'pm-4-1-q1',
        question: 'What is the difference between a Risk and an Issue?',
        options: [
          'A Risk is a potential future event that might happen; an Issue is an active problem occurring now.',
          'Risks only apply to budgets; issues only apply to software.',
          'They have identical definitions.',
        ],
        correctIndex: 0,
        explanation: 'Managing risks early prevents them from turning into costly active issues.',
      },
      {
        id: 'pm-4-1-q2',
        question: 'What is a "contingency plan" inside a risk register?',
        options: [
          'The pre-planned fallback action triggered if the risk actually occurs despite mitigation.',
          'Ignoring the risk completely.',
          'Deleting the schedule.',
        ],
        correctIndex: 0,
        explanation: 'Preventive mitigation lowers odds/impact; contingency dictates what to do if it hits anyway.',
      },
      {
        id: 'pm-4-1-q3',
        question: 'Who should be assigned as Risk Owner?',
        options: [
          'One specific person best positioned to monitor the warning trigger and execute mitigation.',
          'The whole department collectively.',
          'Only external users.',
        ],
        correctIndex: 0,
        explanation: 'Singular ownership ensures proactive monitoring.',
      },
    ],
  },
  {
    id: 'pm-4-2',
    moduleOrder: 4,
    lessonNumber: '4.2',
    title: 'Managing Change Requests Transparently',
    estimatedMinutes: 15,
    learningObjectives: [
      'Run a lightweight, auditable change request evaluation workflow.',
      'Document schedule, budget, and dependency impacts objectively.',
      'Keep decision logs clear so future team members understand why scope shifted.',
    ],
    sections: [
      {
        heading: '1. Change Is Inevitable—Chaos Is Optional',
        body: 'As users test early prototypes, new insights legitimately emerge. A disciplined Change Control process does not block good ideas; it ensures every change is evaluated openly for impact on timeline, budget, and dependencies before approval.',
        keyTakeaway:
          'Good change control prevents silent scope creep while keeping sponsors empowered to adapt intentionally.',
      },
      {
        heading: '2. Lightweight Change Impact Log',
        body: 'Even small 3-person teams benefit from a short decision record documenting who requested the change, why, its exact cost in hours/days, and who approved the adjustment.',
        exampleOrTemplate: {
          label: 'Change Request Record · CR-04',
          content: `Request: Add Printable Low-Bandwidth Study Summary to Assignments tab
Requested By: Field Partner Coordinators
Estimated Effort: 8 hours (1.5 days)
Impact Assessment: Zero impact on Phase 1 launch date if non-essential animation polish is deferred.
Decision: APPROVED by Sponsor on 18 Nov 2026.`,
        },
      },
      {
        heading: '3. Communicating Approved Changes Broadly',
        body: 'Once a change is approved, update the WBS, acceptance criteria, and stakeholder status summary immediately so engineering, QA, and docs work from one single source of truth.',
      },
    ],
    quiz: [
      {
        id: 'pm-4-2-q1',
        question: 'What is the purpose of a formal Change Request workflow?',
        options: [
          'To evaluate schedule, cost, and quality impacts transparently before approving scope changes.',
          'To reject every user improvement automatically.',
          'To hide project delays from leadership.',
        ],
        correctIndex: 0,
        explanation: 'Change control turns ad-hoc requests into informed, documented trade-offs.',
      },
      {
        id: 'pm-4-2-q2',
        question: 'After a change request is approved, what must happen immediately?',
        options: [
          'Update requirements, acceptance criteria, and team plans so everyone aligns on the updated truth.',
          'Keep it verbal between two people.',
          'Delete previous documentation.',
        ],
        correctIndex: 0,
        explanation: 'Updating shared artifacts prevents stale assumptions in QA and delivery.',
      },
      {
        id: 'pm-4-2-q3',
        question: 'Why record declined or deferred change requests in a decision log?',
        options: [
          'It preserves context for Phase 2 planning and prevents relitigating the same debate weekly.',
          'To embarrass requesters.',
          'To slow down builds.',
        ],
        correctIndex: 0,
        explanation: 'Decision logs preserve institutional memory across sprints and leadership transitions.',
      },
    ],
  },
  {
    id: 'pm-4-3',
    moduleOrder: 4,
    lessonNumber: '4.3',
    title: 'Handover Documentation & Lessons-Learned Closure',
    estimatedMinutes: 16,
    learningObjectives: [
      'Complete operational runbooks and ownership handovers before closing a project.',
      'Archive lessons learned so future cohorts avoid repeating avoidable mistakes.',
      'Obtain formal stakeholder sign-off against charter success criteria.',
    ],
    sections: [
      {
        heading: '1. Crossing the Finish Line Cleanly',
        body: 'Too many projects sprint to launch day and collapse before completing handover docs, monitoring guides, or credential transfers. A project is only truly closed when operations or client teams can run and maintain it independently without calling the original builder daily.',
        keyTakeaway:
          'Plan closure tasks—runbooks, sign-off, and archival—into the final sprint rather than as an unpaid afterthought.',
      },
      {
        heading: '2. Handover Package Essentials',
        body: 'Package architecture diagrams, admin procedures, known technical limitations, escalation contacts, and archived lessons learned cleanly in one accessible location.',
        exampleOrTemplate: {
          label: 'Closure Checklist · Program Sign-Off',
          content: `[x] Acceptance criteria verified against original Charter
[x] Operational runbook & troubleshooting guide reviewed by support team
[x] All credentials, domains & repos owned by institutional accounts
[x] Lessons-learned workshop held & summary archived
[x] Formal Sponsor closure confirmation recorded`,
        },
      },
      {
        heading: '3. Preserving Institutional Wisdom',
        body: 'Summarize three estimation surprises, three practices worth repeating, and recommended Phase 2 improvements—turning every completed project into a blueprint for faster future launches.',
      },
    ],
    quiz: [
      {
        id: 'pm-4-3-q1',
        question: 'Why must operational runbooks and credential ownership transfers be completed before project closure?',
        options: [
          'So maintenance teams can operate, update, and troubleshoot the system independently.',
          'To make launch harder.',
          'Because code stops compiling after closure.',
        ],
        correctIndex: 0,
        explanation: 'Smooth handover protects long-term sustainability after the delivery team rotates.',
      },
      {
        id: 'pm-4-3-q2',
        question: 'Against what benchmark should final project acceptance be verified at closure?',
        options: [
          'The documented success criteria and approved changes from the project charter.',
          'Unrecorded verbal hallway chats.',
          'Only total team meeting hours.',
        ],
        correctIndex: 0,
        explanation: 'Measuring against charter criteria and approved changes keeps sign-off objective.',
      },
      {
        id: 'pm-4-3-q3',
        question: 'What value do archived "Lessons Learned" summaries provide an organization?',
        options: [
          'Future teams refine estimates, spot recurring vendor risks earlier, and reuse proven templates.',
          'They satisfy no practical purpose.',
          'They delete project histories.',
        ],
        correctIndex: 0,
        explanation: 'Capturing operational lessons raises organizational delivery maturity over time.',
      },
    ],
  },
];

export const GRAPHIC_DESIGN_LESSONS: LessonContent[] = [
  // MODULE 1
  {
    id: 'gd-1-1',
    moduleOrder: 1,
    lessonNumber: '1.1',
    title: 'Alignment, Balance, Contrast & Intentional Whitespace',
    estimatedMinutes: 16,
    learningObjectives: [
      'Use crisp edge alignment to bring instant order to complex layouts.',
      'Apply intentional negative space so key messages breathe without visual clutter.',
      'Distinguish symmetrical stability from dynamic asymmetrical balance.',
    ],
    sections: [
      {
        heading: '1. Whitespace Is Not Empty—It Is Structural',
        body: 'Beginning designers often try to fill every square centimeter of a poster or screen with borders, icons, and shadows. Professional visual communication relies on generous whitespace (negative space) to group related ideas through proximity and direct the viewer’s eye effortlessly.',
        keyTakeaway:
          'When a layout feels crowded, remove a decorative border or double padding before shrinking font sizes.',
      },
      {
        heading: '2. Alignment Eliminates Visual Friction',
        body: 'Nothing should look placed at random. Every headline, caption, and card edge should align cleanly to shared vertical and horizontal axes—creating invisible visual rails that feel calm and authoritative.',
        exampleOrTemplate: {
          label: 'Composition Audit · 4-Point Visual Check',
          content: `1. Alignment: Do headings, body text, and metadata share a strict left rail?
2. Proximity: Are labels physically closer to their own content than neighboring blocks?
3. Contrast: Does one clear primary focal headline stand above secondary details?
4. Whitespace: Is outer margin at least 1.5x–2x larger than internal spacing?`,
        },
      },
      {
        heading: '3. Asymmetric Balance Over Rigid Centering',
        body: 'Center-aligning long blocks of body text creates ragged left edges that tire the eye. Reserve centered alignment for brief ceremonial headings and anchor multi-line prose cleanly to the left (or right in RTL scripts).',
      },
    ],
    quiz: [
      {
        id: 'gd-1-1-q1',
        question: 'What is the most effective first fix when an editorial card feels visually cramped?',
        options: [
          'Increase internal padding and remove redundant nested borders so typography breathes.',
          'Add bright drop shadows around every word.',
          'Center-align all body paragraphs.',
        ],
        correctIndex: 0,
        explanation: 'Whitespace and removing unnecessary boxes reduce cognitive load cleanly.',
      },
      {
        id: 'gd-1-1-q2',
        question: 'Why should multi-line body text generally avoid centered alignment?',
        options: [
          'Uneven left starting points force readers’ eyes to hunt for each new line.',
          'Browsers do not support centered paragraphs.',
          'Centered text uses more file bytes.',
        ],
        correctIndex: 0,
        explanation: 'Consistent starting margins enable smooth scanning and reading rhythm.',
      },
      {
        id: 'gd-1-1-q3',
        question: 'How does the principle of proximity communicate structure without borders?',
        options: [
          'Placing related items close together and adding generous space between distinct groups signals relationships visually.',
          'Making every word the exact same size.',
          'Using neon backgrounds.',
        ],
        correctIndex: 0,
        explanation: 'Spatial grouping naturally conveys hierarchy and association.',
      },
    ],
  },
  {
    id: 'gd-1-2',
    moduleOrder: 1,
    lessonNumber: '1.2',
    title: 'Modular Grid Systems for Print and Digital Screens',
    estimatedMinutes: 17,
    learningObjectives: [
      'Construct 12-column and modular baseline grids for editorial and web layouts.',
      'Use consistent spacing tokens (4px/8px rhythmic scales) across components.',
      'Break grid spans purposefully without losing underlying structural harmony.',
    ],
    sections: [
      {
        heading: '1. The Quiet Discipline of the Grid',
        body: 'Swiss editorial designers pioneered modular grids to organize dense multilingual information cleanly across books, posters, and wayfinding signage. A shared 12-column grid adapts effortlessly—supporting symmetric 2-up, 3-up, 4-up, or asymmetric 7/5 editorial splits.',
        keyTakeaway:
          'A grid constrains chaos so typography, photography, and data lock together with mathematical calm.',
      },
      {
        heading: '2. Spacing Scales & Gutter Rhythm',
        body: 'Pick a base unit (such as 8px in digital UI or 4mm in print) and derive margins, gutters, and padding cleanly as multiples rather than arbitrary numbers like 13px next to 19px.',
        exampleOrTemplate: {
          label: 'Grid Spec · 12-Column Responsive Architecture',
          content: `Desktop Container: max-width 1280px | 12 Columns | 24px Gutter | 32px Outer Margin
Tablet Breakpoint: 8 Columns | 20px Gutter | 24px Outer Margin
Mobile Breakpoint: 4 Columns | 16px Gutter | 16px Outer Margin
Editorial Split:   7 Columns Prose + 5 Columns Supporting Sidebar`,
        },
      },
      {
        heading: '3. Knowing When to Break the Grid',
        body: 'Once a strict grid is established, bleeding a single hero photograph full-width creates purposeful drama specifically because everything else honors the grid.',
      },
    ],
    quiz: [
      {
        id: 'gd-1-2-q1',
        question: 'Why do both editorial designers and web engineers favor a 12-column grid?',
        options: [
          '12 divides evenly by 2, 3, 4, and 6—supporting varied symmetric and asymmetric layouts on one system.',
          '12 is the maximum number of CSS rules allowed.',
          'It eliminates all margins.',
        ],
        correctIndex: 0,
        explanation: 'High divisibility makes 12-column grids extraordinarily versatile across screen widths.',
      },
      {
        id: 'gd-1-2-q2',
        question: 'What is the benefit of sticking to an 8px spacing scale (8, 16, 24, 32, 48px)?',
        options: [
          'Visual rhythm remains coherent and prevents awkward, arbitrary gaps between components.',
          'It doubles image resolution.',
          'It replaces font selection.',
        ],
        correctIndex: 0,
        explanation: 'Systematic spacing tokens create subconscious order across complex interfaces.',
      },
      {
        id: 'gd-1-2-q3',
        question: 'In a multi-column grid, what is a "gutter"?',
        options: [
          'The consistent space separating adjacent columns so content blocks never collide.',
          'The footer copyright notice.',
          'An image file extension.',
        ],
        correctIndex: 0,
        explanation: 'Consistent gutters maintain clean breathing room between grid columns.',
      },
    ],
  },
  {
    id: 'gd-1-3',
    moduleOrder: 1,
    lessonNumber: '1.3',
    title: 'Creating Clear Focal Anchors Without Clutter',
    estimatedMinutes: 15,
    learningObjectives: [
      'Design a three-level visual hierarchy (Primary, Secondary, Supporting) per viewport.',
      'Use scale, weight, and tonal restraint to prevent competing elements.',
      'Apply the squint test to audit focal clarity within five seconds.',
    ],
    sections: [
      {
        heading: '1. If Everything Shouts, Nothing Is Heard',
        body: 'When a poster or webpage features five bright badges, three bold red banners, and competing uppercase subheadings, viewers feel overwhelmed and look away. Strong visual hierarchy picks ONE clear primary anchor, ONE secondary path, and keeps supporting details calm.',
        keyTakeaway:
          'Limit prominent visual emphasis to one focal point per section or poster.',
      },
      {
        heading: '2. The Five-Second Squint Test',
        body: 'Step back from your screen or squint slightly so fine text blurs. Which element pulls your eye first? It should be the primary headline or call to action—never a decorative side badge or repetitive pill tag.',
        exampleOrTemplate: {
          label: 'Hierarchy Plan · Event Poster Series',
          content: `Level 1 (Dominant): Bold 56pt Event Title & Date
Level 2 (Supporting): 18pt Two-line Summary + High-contrast CTA / QR URL
Level 3 (Quiet):      11pt Venue, Partner Credits & Accessibility Note`,
        },
      },
      {
        heading: '3. Restraint Signals Institutional Authority',
        body: 'International universities, scientific journals, and credible certification bodies earn trust through quiet precision—generous margins, disciplined typography, and clean photography rather than visual noise.',
      },
    ],
    quiz: [
      {
        id: 'gd-1-3-q1',
        question: 'What does the "squint test" evaluate in a graphic layout?',
        options: [
          'Whether the primary focal element stands out immediately above secondary details when fine text blurs.',
          'Whether image files are compressed as PNG.',
          'How fast a user can type.',
        ],
        correctIndex: 0,
        explanation: 'Squinting isolates value contrast and scale hierarchy instantly.',
      },
      {
        id: 'gd-1-3-q2',
        question: 'What happens when a single card wraps every tag, hour count, and label in bright bordered pills?',
        options: [
          'Competing boxes scatter attention away from the title and action button.',
          'Readers find the main heading faster.',
          'Accessibility contrast doubles automatically.',
        ],
        correctIndex: 0,
        explanation: 'Unboxed typographic metadata keeps hierarchy focused on the headline and primary action.',
      },
      {
        id: 'gd-1-3-q3',
        question: 'How many clear primary focal points should anchor a single poster or hero section?',
        options: ['One unmistakable primary focal point', 'Six competing focal points', 'Zero'],
        correctIndex: 0,
        explanation: 'One dominant entry point establishes an effortless reading path.',
      },
    ],
  },
  // MODULE 2
  {
    id: 'gd-2-1',
    moduleOrder: 2,
    lessonNumber: '2.1',
    title: 'Pairing Display & Body Typefaces with Discipline',
    estimatedMinutes: 16,
    learningObjectives: [
      'Pair a distinct display typeface with a highly legible workhorse body font.',
      'Limit designs to a maximum of two type families (plus optional monospace for code/IDs).',
      'Build a harmonic modular type scale from H1 down to captions.',
    ],
    sections: [
      {
        heading: '1. Restraint in Typeface Selection',
        body: 'Using four unrelated fonts on one page looks chaotic and slows web page load times on constrained networks. Select one characterful display font for headlines and one crisp, neutral sans-serif (or readable serif) for body copy—and vary weights and sizes intentionally.',
        keyTakeaway:
          'Two well-matched font families with clear weight contrast outperform five mismatched decorative fonts.',
      },
      {
        heading: '2. Modular Type Scale & Tabular Figures',
        body: 'Define fixed semantic roles rather than picking ad-hoc pixel sizes. When displaying schedules, percentages, or credential codes, enable tabular numerals (`font-variant-numeric: tabular-nums`) so numbers align vertically in columns and never jitter when counters update.',
        exampleOrTemplate: {
          label: 'Type System Tokens · Institutional Editorial Spec',
          content: `Display (Headlines): Plus Jakarta Sans Bold, -0.02em tracking
Body (Prose/UI):     DM Sans Regular/Medium, 16px, 1.6 line-height
Mono (Codes/IDs):    IBM Plex Mono, tabular-nums
Scale Ratio (~1.25): 12px -> 14px -> 16px -> 20px -> 28px -> 40px`,
        },
      },
      {
        heading: '3. Contrast in Voice, Harmony in Proportions',
        body: 'When pairing two fonts, compare their x-height (the height of lowercase letters like x) so switching from subheading to body feels seamless.',
      },
    ],
    quiz: [
      {
        id: 'gd-2-1-q1',
        question: 'Why do UI and editorial designers apply `tabular-nums` on progress meters, tables, and lesson hours?',
        options: [
          'Each digit occupies identical horizontal width so columns align cleanly and counters never shift sideways.',
          'It translates numbers into Roman numerals.',
          'It forces text uppercase.',
        ],
        correctIndex: 0,
        explanation: 'Fixed-width numerals keep tables aligned and live counters rock-steady.',
      },
      {
        id: 'gd-2-1-q2',
        question: 'How many primary font families should most cohesive brand systems combine?',
        options: [
          '1 to 2 families (plus an optional monospace font for code or serial IDs).',
          'At least 6 contrasting novelty scripts.',
          'A different font for every paragraph.',
        ],
        correctIndex: 0,
        explanation: 'Typographic restraint strengthens visual identity and speeds web loading.',
      },
      {
        id: 'gd-2-1-q3',
        question: 'What typographic quality matters most for long-form educational body paragraphs?',
        options: [
          'Open counters, generous x-height, and effortless legibility at 15–16px.',
          'Ultra-condensed decorative curls.',
          'All-caps formatting.',
        ],
        correctIndex: 0,
        explanation: 'Legibility and low eye strain are paramount for learning materials.',
      },
    ],
  },
  {
    id: 'gd-2-2',
    moduleOrder: 2,
    lessonNumber: '2.2',
    title: 'Line Length (Measure), Leading & Scannable Hierarchy',
    estimatedMinutes: 15,
    learningObjectives: [
      'Constrain editorial line length (measure) to 55–75 characters for comfortable reading.',
      'Set proportional line-height (leading) for headings vs. multi-line body prose.',
      'Eliminate orphaned headlines and awkward wall-of-text density.',
    ],
    sections: [
      {
        heading: '1. The Optimal Reading Measure',
        body: 'Lines stretching across an entire 1440px widescreen monitor exhaust the eye as it scans back to find the next line. Conversely, cramped 25-character columns chop reading flow awkwardly. Target 60–70 characters per line (`max-w-prose` in CSS) for educational articles and lesson readers.',
        keyTakeaway:
          'Set body prose containers around 65ch regardless of how wide the outer layout shell stretches.',
      },
      {
        heading: '2. Tuning Line-Height (Leading) by Scale',
        body: 'Large display headlines look loose and disconnected if given tall 1.7 line-height—tighten display leading to ~1.1–1.2. Body prose needs room for eyes to track lines cleanly—target ~1.55–1.65.',
        exampleOrTemplate: {
          label: 'Micro-Typography Rules · Screen & Print',
          content: `Display H1 (36–48px): line-height 1.15 | letter-spacing -0.02em | text-wrap: balance
Section H2 (22–28px): line-height 1.25 | margin-bottom 12px
Body Copy  (16px):    line-height 1.60 | max-width 65ch
Captions   (12–13px): line-height 1.45 | minimum 4.5:1 contrast`,
        },
      },
      {
        heading: '3. Balanced Headline Wrapping',
        body: 'Use `text-wrap: balance` (or manual breaks in print) on centered or two-line headings so a single lonely word never dangles awkwardly on the second line.',
      },
    ],
    quiz: [
      {
        id: 'gd-2-2-q1',
        question: 'What happens when body copy spans full-width across a wide desktop monitor (~130 characters per line)?',
        options: [
          'Readers lose their place easily when jumping back from the end of one line to the start of the next.',
          'Reading speed doubles.',
          'Contrast ratio improves.',
        ],
        correctIndex: 0,
        explanation: 'Constraining prose to ~60–75 characters keeps reading comfortable and focused.',
      },
      {
        id: 'gd-2-2-q2',
        question: 'How should line-height differ between a 44px headline and 16px body prose?',
        options: [
          'Headlines use tighter line-height (~1.15) while body paragraphs need looser breathing room (~1.6).',
          'Headlines always need 2.5 line-height.',
          'Both must share exact pixel leading.',
        ],
        correctIndex: 0,
        explanation: 'Larger type needs tighter relative leading to hold multi-line headlines together visually.',
      },
      {
        id: 'gd-2-2-q3',
        question: 'What does `text-wrap: balance` solve on multi-line headings?',
        options: [
          'It distributes words evenly across lines so single orphan words do not dangle alone.',
          'It justifies body copy with huge gaps.',
          'It hides punctuation.',
        ],
        correctIndex: 0,
        explanation: 'Balanced wrapping creates cleaner, more deliberate headline silhouettes.',
      },
    ],
  },
  {
    id: 'gd-2-3',
    moduleOrder: 2,
    lessonNumber: '2.3',
    title: 'Multilingual Type Considerations & Clean Captions',
    estimatedMinutes: 16,
    learningObjectives: [
      'Plan layout expansion room for languages that run longer than English (e.g., French, German).',
      'Ensure bidirectional (RTL/LTR) readiness and diacritic vertical clearance.',
      'Write purposeful photographic captions and accessible alt descriptions.',
    ],
    sections: [
      {
        heading: '1. Designing Beyond English Assumptions',
        body: 'Educational platforms serving refugees and global partners often translate interfaces into Arabic, French, Ukrainian, Spanish, or Swahili. Fixed-width buttons or tight boxes built solely around English strings break immediately when French labels expand by 30% or Arabic tall diacritics collide with cramped line-heights.',
        keyTakeaway:
          'Design flexible button widths (`min-h`, horizontal padding) and generous vertical breathing room so translations never clip.',
      },
      {
        heading: '2. Supporting Diacritics and Bi-Directional Layouts',
        body: 'In Arabic or accented Latin scripts, overly tight line-height clips diacritical marks above or below glyphs. Avoid relying on directional icons like hard-coded right arrows without considering RTL mirroring, and avoid italicizing scripts that do not traditionally italicize cleanly.',
        exampleOrTemplate: {
          label: 'Multilingual Resilience Checklist',
          content: `- Buttons allow wrapping or clean width growth (no fixed px widths on text controls)
- Never use uppercase-only CSS on scripts where casing alters meaning or loses accents
- Leave >= 1.5 line-height on UI labels using Arabic or stacked diacritics
- Provide descriptive alt text summarizing image meaning rather than file names`,
        },
      },
      {
        heading: '3. Purposeful Captions vs. Decorative Clutter',
        body: 'Every photograph in an editorial layout earns its space when paired with a quiet caption or clean visual role—never stamp floating stickers over human faces.',
      },
    ],
    quiz: [
      {
        id: 'gd-2-3-q1',
        question: 'Why must UI buttons and navigation links avoid rigid fixed pixel widths (e.g., `width: 90px`)?',
        options: [
          'Translated labels in other languages frequently expand and will clip or overflow fixed boxes.',
          'Fixed pixel widths disable hover states.',
          'Browsers ignore padding inside buttons.',
        ],
        correctIndex: 0,
        explanation: 'Flexible padding allows labels across languages to fit cleanly without truncation.',
      },
      {
        id: 'gd-2-3-q2',
        question: 'What issue occurs when an interface uses ultra-tight line-height (`1.0`) on multilingual text?',
        options: [
          'Accents, ascenders, and Arabic diacritics get clipped by tight line boxes.',
          'Font files grow larger.',
          'Colors invert automatically.',
        ],
        correctIndex: 0,
        explanation: 'Comfortable vertical line spacing preserves diacritical legibility across scripts.',
      },
      {
        id: 'gd-2-3-q3',
        question: 'How should photographic alt text be written for accessibility?',
        options: [
          'Describe the informative subject and context concisely without repeating "image of".',
          'Paste the raw filename like IMG_4029.jpg.',
          'Leave alt empty on meaningful editorial photos.',
        ],
        correctIndex: 0,
        explanation: 'Clear descriptive alt text ensures screen-reader users receive the full editorial context.',
      },
    ],
  },
  // MODULE 3
  {
    id: 'gd-3-1',
    moduleOrder: 3,
    lessonNumber: '3.1',
    title: 'Designing Simple, Memorable Vector Marks',
    estimatedMinutes: 17,
    learningObjectives: [
      'Evaluate logos against scalability, single-color legibility, and distinctiveness.',
      'Construct clean geometric SVG marks using minimal anchor points.',
      'Define clear-space rules and minimum size thresholds for brand marks.',
    ],
    sections: [
      {
        heading: '1. Complexity Breaks at Small Sizes',
        body: 'A mark packed with thin swooshes, gradients, and tiny text looks muddy when shrunk down to a 24px mobile favicon or embroidered onto a notebook. Great institutional marks—from Red Cross to modern tech identities—work cleanly in pure black on white at 16px tall.',
        keyTakeaway:
          'Test every brand mark in pure 1-color monochrome at tiny favicon scale before approving gradients or color palettes.',
      },
      {
        heading: '2. Clean Vector Construction & Clear Space',
        body: 'Use crisp geometric primitives and clean SVG viewBoxes. Protect the logo with an explicit clear-space rule (e.g., equal to half the mark’s height on all sides) so surrounding text or borders never crowd the emblem.',
        exampleOrTemplate: {
          label: 'Logo Specification · Partner Guidelines',
          content: `Primary Lockup: Emblem + Wordmark (horizontal)
Standalone Icon: 32x32 viewBox | >= 16px minimum screen height
Clear Space Rule: Minimum 0.5x emblem width around all four sides
Monochrome Tests: Approved in #0B1F3A on white, and pure #FFFFFF on dark navy`,
        },
      },
      {
        heading: '3. Avoiding Generic Visual Clichés',
        body: 'Before sketching, list the three most overused clichés in your sector (e.g., globes, graduation caps, swooshes) and explore fresher symbolic geometry representing movement, bridges, or precision.',
      },
    ],
    quiz: [
      {
        id: 'gd-3-1-q1',
        question: 'Why should designers verify a new logo mark in flat monochrome (black/white) at small sizes first?',
        options: [
          'It proves the silhouette and geometry remain recognizable without relying on color gradients or fine details.',
          'Printers no longer support color ink.',
          'Monochrome logos cannot be saved as SVG.',
        ],
        correctIndex: 0,
        explanation: 'Strong structural form ensures readability across favicons, stamps, and monochrome print.',
      },
      {
        id: 'gd-3-1-q2',
        question: 'What is the purpose of a logo "clear-space" rule in brand guidelines?',
        options: [
          'It defines minimum protective whitespace around the mark so neighboring text or edges never crowd it.',
          'It requires centering every paragraph.',
          'It sets font color to light gray.',
        ],
        correctIndex: 0,
        explanation: 'Clear-space protects visual integrity when partners place the logo on diverse materials.',
      },
      {
        id: 'gd-3-1-q3',
        question: 'Why prefer SVG over PNG for digital brand marks and UI icons?',
        options: [
          'SVGs scale infinitely sharp at any retina resolution with tiny file sizes.',
          'SVGs automatically translate text.',
          'PNGs cannot show transparency.',
        ],
        correctIndex: 0,
        explanation: 'Vector paths render razor-sharp on every screen density at minimal bandwidth.',
      },
    ],
  },
  {
    id: 'gd-3-2',
    moduleOrder: 3,
    lessonNumber: '3.2',
    title: '60-30-10 Color Discipline & WCAG Contrast Compliance',
    estimatedMinutes: 16,
    learningObjectives: [
      'Apply the 60-30-10 visual budget across surfaces, primary brand anchors, and accents.',
      'Calculate and verify WCAG AA (4.5:1) and AAA (7:1) text contrast ratios.',
      'Ensure state indicators (success, warning, error) never rely solely on color hue.',
    ],
    sections: [
      {
        heading: '1. Why Disciplined Color Calms Complex Products',
        body: 'In serious education platforms, color exists to establish trust, organize structure, and highlight primary actions—not decorate every corner. Following the 60-30-10 guideline keeps ~60% clean neutral surfaces (white/off-white), ~30% deep structural tones (deep navy and slate typography), and ~10% deliberate action accent (teal).',
        keyTakeaway:
          'Neutral backgrounds make your single primary accent color unmistakably actionable.',
      },
      {
        heading: '2. Accessibility Is Non-Negotiable',
        body: 'Learners reading on budget phones outdoors in bright sunlight—or users with color-vision deficiency—cannot read pale gray text on white or bright cyan text on light backgrounds. Enforce >= 4.5:1 contrast for body copy and pair every status color with an icon and explicit text label.',
        exampleOrTemplate: {
          label: 'Accessible Token Palette · High-Contrast Reference',
          content: `Surface Base:    #FFFFFF & #F7F9FC (Light Slate)
Primary Text:    #0F172A on #FFFFFF -> > 15:1 contrast
Brand Navy:      #0B1F3A with #FFFFFF text -> > 14:1 contrast
Brand Teal Text: #0F766E on #FFFFFF -> ~5.4:1 (Passes WCAG AA!)
Avoid on white:  Bright yellow/mint text (< 3:1 contrast fails accessibility)`,
        },
      },
      {
        heading: '3. Dual-Coding State Feedback',
        body: 'Never signal "Correct" or "Error" using green vs. red background tint alone—always accompany color with explicit icons (checkmark / alert icon) and plain text ("Correct", "Review Concept").',
      },
    ],
    quiz: [
      {
        id: 'gd-3-2-q1',
        question: 'In a 60-30-10 color architecture, what occupies the ~60% share?',
        options: [
          'Clean neutral backgrounds and quiet whitespace so content remains effortless to read.',
          'Bright neon accent banners everywhere.',
          'Solid black boxes.',
        ],
        correctIndex: 0,
        explanation: 'Calm neutral surfaces give visual breathing room and let primary brand accents stand out clearly.',
      },
      {
        id: 'gd-3-2-q2',
        question: 'Why should quiz feedback include both an icon/text label ("Correct") and a border tint?',
        options: [
          'So users with color-vision deficiency receive clear state feedback without relying on hue alone.',
          'To double page loading time.',
          'Because CSS ignores green borders.',
        ],
        correctIndex: 0,
        explanation: 'Pairing color with icons and clear text satisfies WCAG accessibility guidelines.',
      },
      {
        id: 'gd-3-2-q3',
        question: 'What is the minimum WCAG AA contrast ratio for normal-sized body text?',
        options: ['4.5:1', '1.8:1', '2.5:1'],
        correctIndex: 0,
        explanation: '4.5:1 ensures readable contrast across varied vision abilities and lighting environments.',
      },
    ],
  },
  {
    id: 'gd-3-3',
    moduleOrder: 3,
    lessonNumber: '3.3',
    title: 'Documenting Usage Rules in a Brand Guidelines Book',
    estimatedMinutes: 15,
    learningObjectives: [
      'Compile logo, color, typography, and imagery rules into a practical brand manual.',
      'Show clear "Do / Do Not" visual examples to prevent partner misuse.',
      'Package reusable design tokens (HEX, RGB, CMYK, font sizes) for engineers and printers.',
    ],
    sections: [
      {
        heading: '1. Guidelines Empower Distributed Contributors',
        body: 'When partner NGOs, volunteer mentors, or regional chapters produce flyers and slides, a concise 8-page Brand Guidelines book stops brand drift before it starts. Good manuals stay practical—giving exact copy-paste HEX codes, font pairings, and unambiguous "Do / Do Not" visual comparisons.',
        keyTakeaway:
          'Show concrete side-by-side "Correct vs. Incorrect" examples rather than vague paragraphs.',
      },
      {
        heading: '2. Bridging Design and Engineering Handoff',
        body: 'Include digital CSS hex values alongside print CMYK approximations so web teams and print shops reproduce consistent navy and teal tones without guesswork.',
        exampleOrTemplate: {
          label: 'Brand Manual Contents · Minimum Viable Spec',
          content: `1. Mission Voice & Visual Tone (2–3 precise adjectives)
2. Logo Lockups, Clear Space & Forbidden Edits (no stretching, no recoloring)
3. Color Tokens (HEX + RGB for screen, CMYK for print + WCAG pairings)
4. Typography Scale & Fallback System Fonts
5. Photography Tone & Ethical Consent Rule`,
        },
      },
      {
        heading: '3. Keeping Guidelines Lightweight and Accessible',
        body: 'Host brand assets alongside a small web-readable spec so partners on slow connections do not have to download a 150MB file just to find one hex code.',
      },
    ],
    quiz: [
      {
        id: 'gd-3-3-q1',
        question: 'Why include side-by-side "Do / Do Not" examples in a brand guidelines document?',
        options: [
          'Visual comparisons immediately prevent common errors like stretching logos or placing light text on bright backgrounds.',
          'They triple print ink cost.',
          'They replace color tokens.',
        ],
        correctIndex: 0,
        explanation: 'Concrete visual boundaries prevent accidental misuse by non-designers.',
      },
      {
        id: 'gd-3-3-q2',
        question: 'Why list both HEX/RGB and CMYK values for brand colors?',
        options: [
          'Screens mix additive RGB light while commercial printers mix subtractive CMYK inks.',
          'HEX only works on Tuesdays.',
          'CMYK is required for HTML buttons.',
        ],
        correctIndex: 0,
        explanation: 'Providing calibrated screen and print values preserves brand consistency across media.',
      },
      {
        id: 'gd-3-3-q3',
        question: 'What fallback guidance belongs in digital typography guidelines?',
        options: [
          'Safe system font stacks (e.g., ui-sans-serif, system-ui) if custom webfonts fail on slow connections.',
          'Blocking page rendering forever until custom fonts download.',
          'Using Wingdings as fallback.',
        ],
        correctIndex: 0,
        explanation: 'Graceful system fallbacks ensure immediate readability under low-bandwidth conditions.',
      },
    ],
  },
  // MODULE 4
  {
    id: 'gd-4-1',
    moduleOrder: 4,
    lessonNumber: '4.1',
    title: 'Exporting Print-Ready PDFs vs. Lightweight Web SVGs',
    estimatedMinutes: 16,
    learningObjectives: [
      'Prepare commercial print files with bleed, trim marks, 300 DPI raster images, and CMYK.',
      'Optimize web graphics using clean SVGs, WebP/compressed JPEGs, and target byte budgets.',
      'Verify pre-flight checklists before sending materials to external print houses.',
    ],
    sections: [
      {
        heading: '1. Why Screen Exports Fail on Physical Paper',
        body: 'An awesome 72 DPI banner exported for social media looks pixelated when printed on a large A3 poster, and edge-to-edge backgrounds leave ugly white slivers when paper trimmers cut even 1 millimeter off. Print and web require fundamentally different export pipelines.',
        keyTakeaway:
          'Never send an uncompressed 20MB PDF to web visitors, and never send a 72 DPI web screenshot to a print shop.',
      },
      {
        heading: '2. Print Pre-Flight vs. Web Bandwidth Optimization',
        body: 'For commercial printing, extend background graphics 3mm past the cut edge ("bleed"), use 300 DPI photographs, and embed or outline fonts. For web delivery, compress photos to < 180KB where possible and export crisp vector icons as clean SVGs.',
        exampleOrTemplate: {
          label: 'Export Spec Comparison · Print vs. Web',
          content: `PRINT (A4 Brochure / Poster):
- Color Mode: CMYK | Resolution: 300 DPI | Bleed: 3mm all sides + Crop Marks
- Format: PDF/X-1a or PDF/X-4 with embedded fonts

WEB (Low-Bandwidth Friendly):
- Color Mode: sRGB | Icons/Logos: Clean Minified SVG (< 5KB)
- Photography: Compressed JPEG/WebP sized cleanly to container (< 150KB)`,
        },
      },
      {
        heading: '3. Naming Deliverables Cleanly',
        body: 'Replace `poster_final_FINAL_v3_real.pdf` with clear semantic filenames (`gsp-annual-report-2026-print-bleed.pdf` vs `gsp-annual-report-2026-web.pdf`) so partners never publish the wrong version.',
      },
    ],
    quiz: [
      {
        id: 'gd-4-1-q1',
        question: 'Why must edge-to-edge background colors extend 3mm past the page trim line ("bleed") in print files?',
        options: [
          'Physical paper cutting blades have slight tolerances; bleed prevents thin white paper strips along trimmed edges.',
          'It shrinks the paper size.',
          'Browsers require 3mm bleed.',
        ],
        correctIndex: 0,
        explanation: 'Bleed guarantees clean borderless color right to the physical edge after trimming.',
      },
      {
        id: 'gd-4-1-q2',
        question: 'Why compress photographic assets carefully for international educational websites?',
        options: [
          'Large unoptimized images waste costly mobile data and delay learning on slow connections.',
          'Compressed JPEGs turn into vector files.',
          'Print shops prefer tiny 72 DPI images.',
        ],
        correctIndex: 0,
        explanation: 'Lightweight assets respect learners on metered mobile connections while improving page speed.',
      },
      {
        id: 'gd-4-1-q3',
        question: 'What minimum image resolution is standard for crisp commercial printing?',
        options: ['300 DPI at actual print size', '72 DPI thumbnail', '12 DPI'],
        correctIndex: 0,
        explanation: '300 dots per inch provides sharp photographic reproduction on coated and uncoated paper.',
      },
    ],
  },
  {
    id: 'gd-4-2',
    moduleOrder: 4,
    lessonNumber: '4.2',
    title: 'Presenting Design Rationale to Non-Design Stakeholders',
    estimatedMinutes: 15,
    learningObjectives: [
      'Frame design decisions around user comprehension, accessibility, and organizational goals.',
      'Separate subjective personal taste ("I like blue") from objective design principles.',
      'Guide stakeholder feedback meetings so comments stay constructive and actionable.',
    ],
    sections: [
      {
        heading: '1. Defending Decisions With User Goals, Not Ego',
        body: 'If you present a layout simply asking "What do you think?", reviewers naturally offer personal opinions ("Make the logo bigger, change the teal to orange"). Anchor every presentation in the original project brief: explain how your typography scale helps low-vision readers, or why a simplified hero raises CTA visibility.',
        keyTakeaway:
          'Connect every visual choice back to legibility, user trust, or conversion clarity.',
      },
      {
        heading: '2. Framing Critique Questions Intentionally',
        body: 'Teach stakeholders how to review work productively by steering questions toward communication effectiveness.',
        exampleOrTemplate: {
          label: 'Presentation Prompts · Guiding Productive Reviews',
          content: `Instead of: "Do you like these colors?"
Ask:        "Does the primary CTA stand out immediately above the pathway description?"
Instead of: "Is this layout pretty?"
Ask:        "Is the prerequisite checklist effortless to scan in under 10 seconds on mobile?"`,
        },
      },
      {
        heading: '3. Listening Behind Specific Prescriptions',
        body: 'When a stakeholder says "Make the heading 48pt red," ask what concern sparked the comment—often they actually worry readers might miss a deadline, which you can solve more elegantly with hierarchy and placement.',
      },
    ],
    quiz: [
      {
        id: 'gd-4-2-q1',
        question: 'How should a designer respond when a stakeholder asks to shrink body text to fit more decorative banners?',
        options: [
          'Explain the readability and accessibility impact calmly and propose an uncluttered alternative that highlights key messages.',
          'Delete all headings silently.',
          'Argue about personal artistic taste.',
        ],
        correctIndex: 0,
        explanation: 'Grounding pushback in user comprehension and accessibility keeps reviews objective.',
      },
      {
        id: 'gd-4-2-q2',
        question: 'Why ask specific goal-oriented review questions instead of "Do you like it?"',
        options: [
          'It shifts feedback from subjective taste to whether the design achieves communication goals.',
          'It forces reviewers to stay silent.',
          'It removes deadlines.',
        ],
        correctIndex: 0,
        explanation: 'Targeted questions elicit high-signal feedback that strengthens the work.',
      },
      {
        id: 'gd-4-2-q3',
        question: 'When a client suggests an awkward visual tweak, what should you uncover first?',
        options: [
          'The underlying communication worry prompting their suggestion.',
          'Which font they used in high school.',
          'Whether to quit the project.',
        ],
        correctIndex: 0,
        explanation: 'Understanding the root concern lets you craft an accessible, cohesive fix.',
      },
    ],
  },
  {
    id: 'gd-4-3',
    moduleOrder: 4,
    lessonNumber: '4.3',
    title: 'Portfolio Case Study Critique & Final Review',
    estimatedMinutes: 16,
    learningObjectives: [
      'Write structured case studies showing process, constraints, and before/after thinking.',
      'Document measurable accessibility and usability checks inside portfolio artifacts.',
      'Curate 3–4 deep, varied projects rather than 15 uncontextualized mockups.',
    ],
    sections: [
      {
        heading: '1. Employers Hire Thinkers, Not Just Software Operators',
        body: 'Dropping three glossy screenshots on a page without context tells a creative director nothing about how you solve real problems. Strong portfolio case studies show the brief, real constraints (such as low bandwidth or multilingual text), grid/type iterations, accessibility checks, and final deliverables.',
        keyTakeaway:
          'Show your decision-making process concisely: Context -> Constraints -> Exploration -> Final System -> Outcome.',
      },
      {
        heading: '2. Quality Over Quantity in Portfolio Curation',
        body: 'Three deeply documented projects—for instance, a brand identity book, an editorial impact report spread, and an accessible campaign kit—outperform twenty shallow practice logos. Remove weak early exercises ruthlessly.',
        exampleOrTemplate: {
          label: 'Case Study Structure · 5-Minute Employer Read',
          content: `1. Brief & Audience (2 sentences): Who needed this and what constraint mattered most?
2. Typographic & Grid System: Show exact font pairing, spacing rules & WCAG contrast scores.
3. Key Iteration: One clear problem spotted during critique and how you fixed it.
4. Production Deliverables: Print-ready PDF spread + crisp web/mobile social kit.`,
        },
      },
      {
        heading: '3. Final Critique Before Sharing Externally',
        body: 'Check every portfolio link, spelling detail, and mobile viewport cleanly before sending your dossier to employers or partner institutions.',
      },
    ],
    quiz: [
      {
        id: 'gd-4-3-q1',
        question: 'What do creative directors look for most inside a graphic design portfolio case study?',
        options: [
          'Clear problem framing, typographic/grid discipline, accessibility checks, and thoughtful rationale.',
          'Fifty unannotated practice icons.',
          'Tiny unreadable screenshots.',
        ],
        correctIndex: 0,
        explanation: 'Explaining process and constraints demonstrates professional readiness beyond tool proficiency.',
      },
      {
        id: 'gd-4-3-q2',
        question: 'Should a designer show 15 uneven beginner exercises or 3 deeply crafted, well-explained projects?',
        options: [
          '3 deeply crafted projects—employers judge portfolios by their weakest piece.',
          '15 unfinished sketches.',
          'Only one font specimen.',
        ],
        correctIndex: 0,
        explanation: 'Curated depth proves consistent judgment and high standards.',
      },
      {
        id: 'gd-4-3-q3',
        question: 'Why document WCAG contrast verification directly inside brand identity case studies?',
        options: [
          'It proves your color system is practical and inclusive for real digital and print communication.',
          'It makes colors invisible.',
          'It replaces grid rules.',
        ],
        correctIndex: 0,
        explanation: 'Demonstrating inclusive accessibility raises credibility with modern product and institutional teams.',
      },
    ],
  },
];
