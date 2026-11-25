import type { LessonContent } from '../types/platform';

export const SOFTWARE_DEVELOPMENT_LESSONS: LessonContent[] = [
  // MODULE 1
  {
    id: 'sd-1-1',
    moduleOrder: 1,
    lessonNumber: '1.1',
    title: 'Computational Thinking, Variables & Control Flow',
    estimatedMinutes: 18,
    learningObjectives: [
      'Break a real-world community problem into clear input, processing, and output steps.',
      'Declare strongly typed variables and pure functions in TypeScript.',
      'Write branching logic and loops that handle edge cases safely.',
    ],
    sections: [
      {
        heading: '1. Decomposition: Turning Ambiguous Problems into Algorithms',
        body: 'Software engineering begins long before opening a code editor. When asked to build a scholarship eligibility tool for displaced learners, start by decomposing the rule set into discrete inputs (age, completed modules, language track), deterministic rules (minimum completion threshold), and clear outputs (eligible, pending prerequisites, or missing fields).',
        keyTakeaway: 'Clear problem decomposition prevents over-complicated code and makes edge cases visible early.',
      },
      {
        heading: '2. Explicit Types and Predictable State',
        body: 'In TypeScript, declaring explicit interfaces prevents silent runtime mismatches such as treating a text string "20" as the number 20. Always model domain concepts explicitly using types rather than loose objects.',
        exampleOrTemplate: {
          label: 'TypeScript Example · Eligibility Evaluator',
          content: `interface LearnerRecord {
  firstName: string;
  completedModules: number;
  hasCapstone: boolean;
}

function checkReadiness(learner: LearnerRecord): string {
  if (learner.completedModules >= 4 && learner.hasCapstone) {
    return 'Ready for partner assessment';
  }
  return 'Continue core modules';
}`,
        },
      },
      {
        heading: '3. Guard Clauses & Defensive Control Flow',
        body: 'Deeply nested if/else pyramids are difficult to read and maintain. Prefer early return guard clauses that reject invalid or missing inputs at the top of a function, leaving the primary happy-path logic clean and unindented.',
        keyTakeaway: 'Use guard clauses at function entry points so invalid inputs never propagate into calculations.',
      },
    ],
    quiz: [
      {
        id: 'sd-1-1-q1',
        question: 'Why do engineers write early-return guard clauses at the start of a function?',
        options: [
          'To handle invalid inputs immediately and keep the main logic flat and readable.',
          'To make the compiled JavaScript file larger.',
          'To bypass TypeScript type checking.',
        ],
        correctIndex: 0,
        explanation: 'Guard clauses exit early on invalid state, eliminating deep nesting and preventing downstream bugs.',
      },
      {
        id: 'sd-1-1-q2',
        question: 'What is the main advantage of defining a TypeScript interface for a LearnerRecord?',
        options: [
          'It automatically encrypts the browser cache.',
          'It catches misspelled property names and wrong value types before the code runs.',
          'It replaces the need for automated unit tests.',
        ],
        correctIndex: 1,
        explanation: 'Static type checking catches structural mismatches at compile time rather than in front of users.',
      },
      {
        id: 'sd-1-1-q3',
        question: 'What is the first step of computational decomposition?',
        options: [
          'Choosing button colors before reading requirements.',
          'Splitting a complex workflow into smaller inputs, rules, and expected outputs.',
          'Copying code from unrelated projects.',
        ],
        correctIndex: 1,
        explanation: 'Identifying inputs, deterministic rules, and outputs turns vague goals into implementable steps.',
      },
    ],
  },
  {
    id: 'sd-1-2',
    moduleOrder: 1,
    lessonNumber: '1.2',
    title: 'Modular Functions, Type Safety & Clean Code',
    estimatedMinutes: 20,
    learningObjectives: [
      'Separate pure domain functions from UI or I/O side effects.',
      'Write descriptive function and variable names that communicate intent.',
      'Handle missing or optional fields safely using union types and nullish coalescing.',
    ],
    sections: [
      {
        heading: '1. Pure Functions & Single Responsibility',
        body: 'A pure function always returns the same output for the same arguments and triggers no hidden side effects like network calls or global state mutations. Keeping date formatting, score calculation, and validation in pure functions makes them trivial to test offline.',
        keyTakeaway: 'Pure functions are deterministic, portable, and easy for teammates to verify.',
      },
      {
        heading: '2. Safe Handling of Optional Data',
        body: 'Displaced learners may not have every optional field filled in (such as a secondary phone number or formal transcript ID). Use TypeScript optional properties and explicit fallbacks rather than assuming fields always exist.',
        exampleOrTemplate: {
          label: 'TypeScript Example · Safe Fallback Formatting',
          content: `function formatLocation(city?: string | null, country?: string): string {
  const cleanCity = city?.trim();
  const cleanCountry = country?.trim() || 'Region unspecified';
  return cleanCity ? \`\${cleanCity}, \${cleanCountry}\` : cleanCountry;
}`,
        },
      },
      {
        heading: '3. Naming That Eliminates Guesswork',
        body: 'Avoid cryptic abbreviations like fn1, dta, or tmp. A function named calculateRemainingStudyHours communicates far more than calc() and reduces onboarding time for distributed contributors.',
      },
    ],
    quiz: [
      {
        id: 'sd-1-2-q1',
        question: 'Which characteristic defines a pure function?',
        options: [
          'It always mutates a global array.',
          'Given identical inputs, it always returns the same output with no side effects.',
          'It must perform at least one fetch() request.',
        ],
        correctIndex: 1,
        explanation: 'Pure functions rely only on their parameters and cause no external mutations, making them reliable and testable.',
      },
      {
        id: 'sd-1-2-q2',
        question: 'Why should optional user fields be trimmed and checked with safe fallbacks?',
        options: [
          'Because whitespace-only strings or undefined values can cause formatting bugs or runtime crashes.',
          'Because JavaScript deletes optional properties automatically.',
          'To prevent CSS stylesheets from loading.',
        ],
        correctIndex: 0,
        explanation: 'Normalizing optional strings prevents blank commas, "undefined" text in UI, and null dereference errors.',
      },
      {
        id: 'sd-1-2-q3',
        question: 'Why is separating business logic from React JSX components helpful?',
        options: [
          'It allows validation and calculation logic to be unit-tested without rendering a browser DOM.',
          'React forbids functions inside component files.',
          'It doubles network bandwidth usage.',
        ],
        correctIndex: 0,
        explanation: 'Decoupled logic modules can be reused across web, mobile, and server scripts and tested rapidly.',
      },
    ],
  },
  {
    id: 'sd-1-3',
    moduleOrder: 1,
    lessonNumber: '1.3',
    title: 'Git Branching, Pull Requests & Peer Code Review',
    estimatedMinutes: 18,
    learningObjectives: [
      'Create isolated feature branches without disrupting the main production branch.',
      'Write clear commit messages and pull request summaries for asynchronous teams.',
      'Conduct constructive, respectful peer code reviews.',
    ],
    sections: [
      {
        heading: '1. Why Branching Protects Team Velocity',
        body: 'In remote engineering teams spanning multiple time zones, the main branch must always stay deployable. Feature branches allow each contributor to experiment, run tests, and refine code independently before proposing a merge.',
        exampleOrTemplate: {
          label: 'Git Workflow Commands',
          content: `git checkout -b feat/pathway-progress-bar
git status
git add src/lib/progressStorage.ts
git commit -m "feat: persist lesson completion in localStorage"
git push -u origin feat/pathway-progress-bar`,
        },
      },
      {
        heading: '2. Writing Asynchronous Pull Requests',
        body: 'A strong pull request explains WHY a change was made, WHAT files were touched, and HOW the author verified it (unit tests, manual responsive checks, or screenshots). This saves reviewers hours of guesswork.',
        keyTakeaway: 'Treat every pull request description as documentation for a teammate waking up six hours later.',
      },
      {
        heading: '3. Constructive Code Review Culture',
        body: 'Good reviewers critique code behavior—edge cases, accessibility, readability—never the author personally. Frame feedback as clear questions or concrete suggestions.',
      },
    ],
    quiz: [
      {
        id: 'sd-1-3-q1',
        question: 'Why should new features be built on a dedicated Git branch rather than directly on main?',
        options: [
          'So main remains stable and deployable while changes are tested and reviewed.',
          'Because Git forbids more than one commit on main.',
          'Because branches compress image files.',
        ],
        correctIndex: 0,
        explanation: 'Feature branches isolate work-in-progress until tests and peer review pass.',
      },
      {
        id: 'sd-1-3-q2',
        question: 'What belongs in a well-written Pull Request summary?',
        options: [
          'Only the word "done".',
          'Purpose of the change, key decisions, and verification steps performed.',
          'Your database administrator password.',
        ],
        correctIndex: 1,
        explanation: 'Context and verification steps let reviewers evaluate correctness quickly and never expose secrets.',
      },
      {
        id: 'sd-1-3-q3',
        question: 'What is the best tone for peer code review comments?',
        options: [
          'Specific, objective suggestions focused on edge cases, clarity, and user impact.',
          'Vague criticism such as "this looks bad".',
          'Approving immediately without reading the diff.',
        ],
        correctIndex: 0,
        explanation: 'Actionable, respectful review comments raise code quality and help teams grow.',
      },
    ],
  },
  // MODULE 2
  {
    id: 'sd-2-1',
    moduleOrder: 2,
    lessonNumber: '2.1',
    title: 'Semantic HTML5 & Low-Bandwidth Responsive Layouts',
    estimatedMinutes: 20,
    learningObjectives: [
      'Use semantic landmarks (<header>, <main>, <nav>, <article>, <footer>) for screen readers.',
      'Build fluid CSS Grid and Flexbox layouts that adapt cleanly from 320px mobile to 1440px desktop.',
      'Minimize payload weight for learners on metered or slow mobile connections.',
    ],
    sections: [
      {
        heading: '1. Semantic Landmarks Are Accessibility Infrastructure',
        body: 'Replacing generic <div> soup with <main>, <nav>, <section>, and proper heading hierarchy (<h1> followed by <h2>, never skipping levels) lets assistive screen readers jump directly to key content without forcing users to tab through dozens of links.',
        keyTakeaway: 'Semantic HTML gives keyboard and screen-reader users free navigation structure.',
      },
      {
        heading: '2. Mobile-First Fluid Grids',
        body: 'Design grids starting from single-column mobile stacks (grid-cols-1) and progressively expand to 2 or 3 columns (md:grid-cols-2 lg:grid-cols-3) as screen width increases. Never hardcode fixed 1200px widths that trigger horizontal scrollbars on phones.',
        exampleOrTemplate: {
          label: 'Responsive Grid Pattern (Tailwind CSS)',
          content: `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <article key={item.id} className="rounded-xl border border-slate-200 p-6">
      ...
    </article>
  ))}
</div>`,
        },
      },
      {
        heading: '3. Low-Bandwidth Asset Discipline',
        body: 'A single unoptimized hero image can consume 4 MB of mobile data. Compress photographs, use crisp inline SVGs for logos/icons, and avoid auto-playing background videos so learners on constrained data plans can study smoothly.',
      },
    ],
    quiz: [
      {
        id: 'sd-2-1-q1',
        question: 'Why should interactive actions use <button> elements instead of clickable <div> elements?',
        options: [
          '<button> natively supports keyboard focus, Enter/Space activation, and screen reader announcements.',
          '<div> elements cannot have CSS classes.',
          '<button> elements load faster over HTTP.',
        ],
        correctIndex: 0,
        explanation: 'Native buttons provide keyboard accessibility and ARIA semantics automatically.',
      },
      {
        id: 'sd-2-1-q2',
        question: 'What problem does a fixed width like width: 1200px cause on a 375px smartphone screen?',
        options: [
          'Horizontal overflow that forces awkward sideways scrolling and clips content.',
          'Automatic font smoothing.',
          'Faster battery charging.',
        ],
        correctIndex: 0,
        explanation: 'Fluid max-w containers paired with responsive grid columns prevent horizontal overflow.',
      },
      {
        id: 'sd-2-1-q3',
        question: 'Which icon format is lightest and sharpest at any screen density?',
        options: ['Uncompressed BMP', 'Inline vector SVG', 'Animated GIF'],
        correctIndex: 1,
        explanation: 'SVGs are tiny text-based vector paths that render crisply at any zoom level.',
      },
    ],
  },
  {
    id: 'sd-2-2',
    moduleOrder: 2,
    lessonNumber: '2.2',
    title: 'React Component State & Accessible Form Validation',
    estimatedMinutes: 22,
    learningObjectives: [
      'Manage controlled form inputs cleanly in React with TypeScript.',
      'Validate inputs on submit and bind clear error messages via aria-invalid.',
      'Provide immediate loading and confirmation states so users never double-submit.',
    ],
    sections: [
      {
        heading: '1. Controlled Inputs & Predictable Form State',
        body: 'Keeping input values in React state lets your component trim whitespace, toggle password visibility, and display exact field-level error hints without losing what the user already typed.',
        keyTakeaway: 'Never clear a user’s entire form when a single validation check fails.',
      },
      {
        heading: '2. Accessible Field Labels & Error Binding',
        body: 'Every input needs an explicit <label htmlFor="..."> rather than relying solely on placeholder text, which disappears as soon as typing begins. Pair error text directly beneath the input and announce form-level alerts with role="alert".',
        exampleOrTemplate: {
          label: 'Accessible Input Pattern',
          content: `<label htmlFor="email" className="block text-xs font-semibold">
  Email Address *
</label>
<input
  id="email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  aria-invalid={Boolean(error)}
/>
{error && <p className="text-xs text-red-700">{error}</p>}`,
        },
      },
      {
        heading: '3. Disabling Duplicate Submissions During Async Requests',
        body: 'On slow networks, users often tap Submit twice if nothing appears to happen. Always set an isSubmitting boolean to disable the submit button and display a clear progress label like "Saving..." until the request resolves.',
      },
    ],
    quiz: [
      {
        id: 'sd-2-2-q1',
        question: 'Why is placeholder text alone insufficient as a form field label?',
        options: [
          'Placeholders disappear when the user starts typing and often have low color contrast.',
          'HTML5 prohibits placeholders on email inputs.',
          'Placeholders block form submission.',
        ],
        correctIndex: 0,
        explanation: 'Persistent <label> elements ensure users and screen readers always know what each field expects.',
      },
      {
        id: 'sd-2-2-q2',
        question: 'Why should submit buttons show a loading state and disable during async submission?',
        options: [
          'To prevent duplicate requests and inform users on slow networks that work is in progress.',
          'To force users to refresh the browser.',
          'To reset input values automatically.',
        ],
        correctIndex: 0,
        explanation: 'Clear pending feedback prevents double-submissions and confusion.',
      },
      {
        id: 'sd-2-2-q3',
        question: 'Which ARIA role immediately announces a form submission error to assistive technologies?',
        options: ['role="presentation"', 'role="alert"', 'role="banner"'],
        correctIndex: 1,
        explanation: 'role="alert" creates an assertive live region that notifies screen readers when an error appears.',
      },
    ],
  },
  {
    id: 'sd-2-3',
    moduleOrder: 2,
    lessonNumber: '2.3',
    title: 'WCAG AA Contrast, Keyboard Navigation & Error States',
    estimatedMinutes: 18,
    learningObjectives: [
      'Audit foreground-to-background contrast ratios against WCAG 2.1 AA standards.',
      'Ensure all modals, tabs, and menus work cleanly with Tab, Enter, Space, and Escape.',
      'Design state indicators that combine icons and text instead of relying on color alone.',
    ],
    sections: [
      {
        heading: '1. Never Signal Meaning by Color Alone',
        body: 'Roughly 1 in 12 men and 1 in 200 women experience color vision deficiency. A quiz option that turns red or green without an icon or text label leaves color-blind learners guessing. Always pair semantic hues with explicit text ("Correct" / "Review Concept") and distinct icons.',
        keyTakeaway: 'Color reinforces state; icons and plain text carry the meaning.',
      },
      {
        heading: '2. Keyboard Focus Rings & Escape Handling',
        body: 'Never disable browser focus outlines with outline: none unless replacing them with an equally visible :focus-visible ring. Dialogs and drawers should close cleanly when pressing Escape.',
      },
      {
        heading: '3. Touch Targets for Mobile Learners',
        body: 'Most learners in displaced settings study on smartphones. Ensure every interactive button and link meets at least 40–44px height/tap area so users do not accidentally tap adjacent controls.',
      },
    ],
    quiz: [
      {
        id: 'sd-2-3-q1',
        question: 'How should a quiz feedback banner communicate a correct vs. incorrect answer?',
        options: [
          'Only change a thin border from grey to green.',
          'Combine color contrast with an icon (check/cross) and clear text ("Correct" / "Review Concept").',
          'Play an unmuted audio buzzer automatically.',
        ],
        correctIndex: 1,
        explanation: 'Combining icon, text, and color ensures accessibility for color-blind and screen-reader users.',
      },
      {
        id: 'sd-2-3-q2',
        question: 'What is the recommended minimum mobile touch target size for buttons?',
        options: ['16px by 16px', '44px by 44px', '120px by 120px'],
        correctIndex: 1,
        explanation: '44px targets reduce tap errors on mobile touchscreens.',
      },
      {
        id: 'sd-2-3-q3',
        question: 'What keyboard shortcut should always close an open modal dialog?',
        options: ['Escape', 'Backspace', 'F5'],
        correctIndex: 0,
        explanation: 'Supporting Escape follows standard WAI-ARIA dialog interaction patterns.',
      },
    ],
  },
  // MODULE 3
  {
    id: 'sd-3-1',
    moduleOrder: 3,
    lessonNumber: '3.1',
    title: 'Designing Normalized Relational Schemas',
    estimatedMinutes: 22,
    learningObjectives: [
      'Model primary keys, foreign keys, and one-to-many relationships cleanly.',
      'Avoid duplicating mutable data across unrelated tables.',
      'Choose appropriate constraints (NOT NULL, CHECK, UNIQUE) to enforce integrity.',
    ],
    sections: [
      {
        heading: '1. Entities, Keys & Foreign Key Integrity',
        body: 'In a learning platform, students, pathways, and lesson_completions are distinct entities. Linking lesson_completions.student_id to students.id with a foreign key ensures orphan completions cannot exist if an account is deleted.',
        exampleOrTemplate: {
          label: 'PostgreSQL Schema Example',
          content: `create table public.enrollments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  pathway_code text not null,
  enrolled_at timestamptz not null default now(),
  unique (student_id, pathway_code)
);`,
        },
      },
      {
        heading: '2. Database Constraints as the Last Line of Defense',
        body: 'Application code changes frequently, whereas database CHECK and UNIQUE constraints protect data consistency regardless of which client or script writes to the table.',
        keyTakeaway: 'Enforce uniqueness and allowed enum values at the database level as well as in the UI.',
      },
      {
        heading: '3. Audit Timestamps',
        body: 'Always include created_at and updated_at timestamptz columns in UTC so cross-border teams can trace when records were created or modified without timezone ambiguity.',
      },
    ],
    quiz: [
      {
        id: 'sd-3-1-q1',
        question: 'What does a UNIQUE (student_id, pathway_code) constraint prevent?',
        options: [
          'Enrolling the exact same student twice in the same pathway.',
          'Two different students enrolling in the same pathway.',
          'Updating a student phone number.',
        ],
        correctIndex: 0,
        explanation: 'A composite unique constraint enforces one enrollment record per student-pathway pair.',
      },
      {
        id: 'sd-3-1-q2',
        question: 'Why store timestamps in timestamptz (UTC-aware) rather than local text strings?',
        options: [
          'UTC timestamps sort accurately and display correctly across every learner timezone.',
          'Text strings cannot store years.',
          'timestamptz hides dates from administrators.',
        ],
        correctIndex: 0,
        explanation: 'Timezone-aware UTC timestamps avoid ambiguity for global users.',
      },
      {
        id: 'sd-3-1-q3',
        question: 'What is the purpose of ON DELETE CASCADE on a foreign key?',
        options: [
          'Automatically removes dependent child rows when the parent record is deleted, preventing orphans.',
          'Deletes the entire database.',
          'Prevents any rows from being inserted.',
        ],
        correctIndex: 0,
        explanation: 'Cascading deletes keep referential integrity clean when parent accounts are removed.',
      },
    ],
  },
  {
    id: 'sd-3-2',
    moduleOrder: 3,
    lessonNumber: '3.2',
    title: 'RESTful API Endpoints, Status Codes & Input Validation',
    estimatedMinutes: 20,
    learningObjectives: [
      'Map HTTP methods (GET, POST, PATCH, DELETE) to clear resource semantics.',
      'Return accurate HTTP status codes (200, 201, 400, 401, 403, 404).',
      'Validate and sanitize every request payload before running database queries.',
    ],
    sections: [
      {
        heading: '1. Predictable Resource Endpoints & Status Codes',
        body: 'Consistent APIs reduce client integration bugs. Return 201 Created when provisioning a resource, 400 Bad Request for invalid fields, 401 Unauthorized when unauthenticated, and 403 Forbidden when authenticated without ownership.',
        keyTakeaway: 'Never return HTTP 200 OK with an error string buried in JSON—use real status codes.',
      },
      {
        heading: '2. Parameterized Queries Only',
        body: 'Concatenating user input directly into SQL strings opens the door to SQL injection. Always pass user values as bound query parameters so the database treats them strictly as data, never executable SQL.',
        exampleOrTemplate: {
          label: 'Safe Parameterized Query vs. Unsafe Concatenation',
          content: `// SAFE: Bound parameter
await db.query('SELECT id, first_name FROM students WHERE id = $1', [userId]);

// UNSAFE (Never do this):
// db.query(\`SELECT * FROM students WHERE email = '\${email}'\`);`,
        },
      },
      {
        heading: '3. Safe Error Messages',
        body: 'Log detailed stack traces on the server for engineers, but return concise, safe messages to clients so internal table names or SQL structure are never leaked.',
      },
    ],
    quiz: [
      {
        id: 'sd-3-2-q1',
        question: 'Which HTTP status code best indicates an authenticated user tried to edit another user’s private record?',
        options: ['200 OK', '403 Forbidden', '404 Not Found only for CSS'],
        correctIndex: 1,
        explanation: '401 means unauthenticated; 403 means authenticated but lacking permission for the resource.',
      },
      {
        id: 'sd-3-2-q2',
        question: 'How do parameterized SQL queries stop SQL injection?',
        options: [
          'They keep user input strictly separated as bound data values rather than SQL syntax.',
          'They remove all vowels from user names.',
          'They disable HTTPS.',
        ],
        correctIndex: 0,
        explanation: 'The SQL engine compiles the statement structure independently from bound parameters.',
      },
      {
        id: 'sd-3-2-q3',
        question: 'Why avoid sending raw database stack traces in API error responses?',
        options: [
          'They confuse learners and can expose internal schema details useful to attackers.',
          'JSON does not support strings longer than 20 characters.',
          'Stack traces slow down CSS animations.',
        ],
        correctIndex: 0,
        explanation: 'Clean user-facing messages maintain usability and security hygiene.',
      },
    ],
  },
  {
    id: 'sd-3-3',
    moduleOrder: 3,
    lessonNumber: '3.3',
    title: 'Authentication Flows & Row-Level Data Access Rules',
    estimatedMinutes: 22,
    learningObjectives: [
      'Explain how token-based authentication verifies identity on every request.',
      'Author PostgreSQL Row Level Security (RLS) policies scoped to auth.uid().',
      'Separate public profile metadata from sensitive private records.',
    ],
    sections: [
      {
        heading: '1. Identity Verification vs. Authorization',
        body: 'Authentication answers "Who are you?" while authorization answers "What are you permitted to read or modify?" Every protected API endpoint or database table must verify BOTH.',
        keyTakeaway: 'Authentication alone is not enough—always check resource ownership.',
      },
      {
        heading: '2. Row Level Security in Practice',
        body: 'In Postgres/Supabase, enabling RLS blocks all table access by default until explicit policies allow specific operations. Scoping SELECT and UPDATE policies to auth.uid() = id ensures no student can query another learner’s private details.',
        exampleOrTemplate: {
          label: 'PostgreSQL RLS Policy Example',
          content: `alter table public.students enable row level security;

create policy "Students can view own profile"
  on public.students for select
  to authenticated
  using (auth.uid() = id);`,
        },
      },
      {
        heading: '3. Never Store Passwords in Profile Tables',
        body: 'Let dedicated auth services manage salted password hashes, token rotation, and reset workflows. Application profile tables should hold only user attributes linked by user ID.',
      },
    ],
    quiz: [
      {
        id: 'sd-3-3-q1',
        question: 'What happens immediately after you run ALTER TABLE students ENABLE ROW LEVEL SECURITY with zero policies?',
        options: [
          'All non-admin client reads and writes are denied by default until explicit policies allow them.',
          'Everyone on the internet gains write access.',
          'Existing rows are deleted.',
        ],
        correctIndex: 0,
        explanation: 'RLS operates on a default-deny posture until explicit policies grant access.',
      },
      {
        id: 'sd-3-3-q2',
        question: 'Why must an UPDATE RLS policy include WITH CHECK (auth.uid() = id) as well as USING?',
        options: [
          'USING filters existing rows you can touch, while WITH CHECK guarantees the updated row still belongs to your user ID.',
          'WITH CHECK formats phone numbers.',
          'It is only required for DELETE statements.',
        ],
        correctIndex: 0,
        explanation: 'WITH CHECK prevents a user from modifying the id column to claim another user’s identity.',
      },
      {
        id: 'sd-3-3-q3',
        question: 'Should a public.students profile table ever store a password column?',
        options: [
          'No; dedicated auth systems manage hashed credentials separately.',
          'Yes, in plaintext for convenience.',
          'Only for new accounts.',
        ],
        correctIndex: 0,
        explanation: 'Separating authentication secrets from profile data sharply reduces breach impact.',
      },
    ],
  },
  // MODULE 4
  {
    id: 'sd-4-1',
    moduleOrder: 4,
    lessonNumber: '4.1',
    title: 'Automated Integration Testing & Edge-Case Coverage',
    estimatedMinutes: 18,
    learningObjectives: [
      'Write unit and integration tests covering empty, boundary, and error inputs.',
      'Verify business rules without brittle UI selector dependencies.',
      'Run TypeScript type checks and build checks before merging changes.',
    ],
    sections: [
      {
        heading: '1. Testing Behavior, Not Implementation Trivia',
        body: 'Tests should verify observable outcomes: "Given a mismatched confirm password, validation returns an error and does not call signUp." When tests check behavior rather than CSS class names, refactoring remains safe and fast.',
        keyTakeaway: 'Test boundary inputs: empty strings, whitespace, very long text, and unauthorized access.',
      },
      {
        heading: '2. Arrange, Act, Assert Pattern',
        body: 'Structure every test into three clear phases: Arrange the sample input, Act by calling the function or handler, and Assert the exact expected return value or error.',
        exampleOrTemplate: {
          label: 'TypeScript Test Pattern',
          content: `// Arrange
const input = { password: 'Password123', confirm: 'Password999' };
// Act
const result = validatePasswordMatch(input.password, input.confirm);
// Assert
expect(result).toBe('Passwords do not match.');`,
        },
      },
      {
        heading: '3. Continuous Verification Before Deployment',
        body: 'Running tsc --noEmit alongside vite build catches missing imports, broken prop types, and syntax mistakes before learners ever encounter a broken screen.',
      },
    ],
    quiz: [
      {
        id: 'sd-4-1-q1',
        question: 'Which inputs are most important to include in automated validation tests?',
        options: [
          'Only one ideal valid example.',
          'Valid cases plus boundary cases (empty strings, invalid formats, mismatched passwords).',
          'Only random colors.',
        ],
        correctIndex: 1,
        explanation: 'Boundary and failure cases reveal where real users get stuck.',
      },
      {
        id: 'sd-4-1-q2',
        question: 'What does running tsc --noEmit verify?',
        options: [
          'TypeScript type soundness across all components and data files without emitting build artifacts.',
          'That all images are under 10KB.',
          'That Supabase billing is active.',
        ],
        correctIndex: 0,
        explanation: 'tsc --noEmit catches undefined symbols, mismatched props, and null-safety errors.',
      },
      {
        id: 'sd-4-1-q3',
        question: 'In the Arrange-Act-Assert pattern, what happens during "Act"?',
        options: [
          'You execute the function or user action under test.',
          'You deploy to production.',
          'You delete test assertions.',
        ],
        correctIndex: 0,
        explanation: 'Arrange sets up state, Act triggers behavior, and Assert verifies outcomes.',
      },
    ],
  },
  {
    id: 'sd-4-2',
    moduleOrder: 4,
    lessonNumber: '4.2',
    title: 'Preventing Injection, XSS & Secret Exposure',
    estimatedMinutes: 20,
    learningObjectives: [
      'Understand how Cross-Site Scripting (XSS) occurs and how React text escaping prevents it.',
      'Validate dynamic URLs to block javascript: protocol injection.',
      'Audit repositories to ensure secrets live in environment variables, never git commits.',
    ],
    sections: [
      {
        heading: '1. Safe Rendering & Blocking Unsafe URLs',
        body: 'React automatically escapes text inside JSX curly braces ({userName}), neutralizing HTML tags. Danger arises only when developers bypass this with dangerouslySetInnerHTML or render unvalidated user-supplied href links starting with javascript:.',
        keyTakeaway: 'Never inject unescaped HTML and always validate external URLs start with https:// or http://.',
      },
      {
        heading: '2. Public Keys vs. Private Server Secrets',
        body: 'Environment variables prefixed with VITE_ are bundled into browser JavaScript—they are public by definition. Keep private database credentials, admin service keys, and third-party API secrets strictly in server-side process.env.',
        exampleOrTemplate: {
          label: 'Safe Environment Variable Boundary',
          content: `// Browser-safe (scoped public key enforced by RLS):
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

// Server-only (NEVER prefix with VITE_):
// const adminKey = process.env.SUPABASE_SERVICE_ROLE_KEY;`,
        },
      },
      {
        heading: '3. Pre-Release Security Hygiene',
        body: 'Before shipping any capstone project, run a dependency audit and search your codebase for hardcoded tokens, console-logged credentials, or missing authorization checks.',
      },
    ],
    quiz: [
      {
        id: 'sd-4-2-q1',
        question: 'Why must a private admin API key NEVER use the VITE_ prefix in a Vite React app?',
        options: [
          'Variables starting with VITE_ are embedded directly into public browser bundles anyone can inspect.',
          'Vite rejects underscore characters.',
          'VITE_ variables only work in CSS files.',
        ],
        correctIndex: 0,
        explanation: 'Anything shipped to the client bundle is visible to every visitor; private secrets belong strictly on the server.',
      },
      {
        id: 'sd-4-2-q2',
        question: 'How does React protect against XSS by default when rendering {student.firstName}?',
        options: [
          'React treats string values as plain text and escapes special HTML characters automatically.',
          'React deletes spaces from names.',
          'React blocks all network requests.',
        ],
        correctIndex: 0,
        explanation: 'Default JSX interpolation escapes HTML tags rather than executing them as script.',
      },
      {
        id: 'sd-4-2-q3',
        question: 'What URL scheme must be blocked if users can submit portfolio links?',
        options: ['https://', 'javascript:', 'mailto:'],
        correctIndex: 1,
        explanation: 'javascript: URLs execute arbitrary script when clicked.',
      },
    ],
  },
  {
    id: 'sd-4-3',
    moduleOrder: 4,
    lessonNumber: '4.3',
    title: 'Production Deployment, Monitoring & Technical Documentation',
    estimatedMinutes: 18,
    learningObjectives: [
      'Write a clear README explaining architecture, environment variables, and setup steps.',
      'Verify production builds locally before publishing.',
      'Prepare a clean portfolio case study for mentors and global employers.',
    ],
    sections: [
      {
        heading: '1. Documentation Is Part of the Product',
        body: 'Employers reviewing your GitHub portfolio check your README first. A concise README explaining the problem solved, tech stack, schema setup, and security model demonstrates senior engineering discipline.',
        keyTakeaway: 'If a stranger cannot run or understand your project from its README, the project is incomplete.',
      },
      {
        heading: '2. Production Build Verification',
        body: 'Development servers mask bundle issues like missing static asset copies or dead production routes. Always run npm run build and inspect the generated dist output prior to deployment.',
        exampleOrTemplate: {
          label: 'Pre-Release Verification Checklist',
          content: `1. npm run lint (tsc --noEmit) -> 0 errors
2. npm run build (vite build) -> bundle succeeds
3. Verify .env.example lists required keys with no secrets
4. Confirm mobile (375px) & desktop (1440px) responsiveness`,
        },
      },
      {
        heading: '3. Presenting Your Capstone to Mentors & Employers',
        body: 'In your capstone walkthrough, highlight concrete engineering trade-offs—how you kept page weight low, protected learner privacy, and structured database policies—rather than listing libraries alone.',
      },
    ],
    quiz: [
      {
        id: 'sd-4-3-q1',
        question: 'What should .env.example contain in a public repository?',
        options: [
          'Placeholder variable names documenting required configuration with NO real secrets.',
          'Live production database passwords.',
          'User email addresses.',
        ],
        correctIndex: 0,
        explanation: '.env.example documents required config keys safely without exposing credentials.',
      },
      {
        id: 'sd-4-3-q2',
        question: 'Why run npm run build even when the local dev server appears to work?',
        options: [
          'Production builds catch bundling, asset-path, and strict minification issues dev mode skips.',
          'npm run build installs React.',
          'It resets Git history.',
        ],
        correctIndex: 0,
        explanation: 'Verifying the production bundle ensures assets and chunks resolve reliably after deployment.',
      },
      {
        id: 'sd-4-3-q3',
        question: 'What makes a capstone portfolio case study stand out to technical hiring managers?',
        options: [
          'Explaining architecture decisions, constraints solved, testing, and security safeguards clearly.',
          'Listing 40 buzzwords without any live code.',
          'Hiding known limitations.',
        ],
        correctIndex: 0,
        explanation: 'Clear engineering reasoning proves you understand how systems work in production.',
      },
    ],
  },
];

export const ARTIFICIAL_INTELLIGENCE_LESSONS: LessonContent[] = [
  // MODULE 1
  {
    id: 'ai-1-1',
    moduleOrder: 1,
    lessonNumber: '1.1',
    title: 'Vectors, Matrices & Probability Intuition in Python',
    estimatedMinutes: 20,
    learningObjectives: [
      'Represent text and tabular features numerically as vectors and matrices.',
      'Interpret conditional probability in classification predictions.',
      'Use clean NumPy vectorization instead of slow nested Python loops.',
    ],
    sections: [
      {
        heading: '1. Why Machine Learning Models Speak in Vectors',
        body: 'Computers cannot directly compare the meaning of two sentences or student profiles as raw letters. Instead, features are encoded into ordered lists of numbers called vectors—allowing models to measure similarity using dot products and cosine distance.',
        exampleOrTemplate: {
          label: 'Python NumPy Vector Similarity',
          content: `import numpy as np

a = np.array([0.8, 0.2, 0.5])
b = np.array([0.7, 0.3, 0.4])
cosine_sim = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))
print(round(cosine_sim, 3))`,
        },
      },
      {
        heading: '2. Probability as Calibrated Confidence',
        body: 'A classifier outputting 0.85 is estimating an 85% likelihood under its training distribution—not certainty. Understanding base rates and conditional probability keeps practitioners from over-trusting raw scores.',
        keyTakeaway: 'Always inspect base rates alongside model probability scores.',
      },
      {
        heading: '3. Vectorization for Speed & Clarity',
        body: 'NumPy executes matrix math in optimized C routines, running orders of magnitude faster than manual Python for-loops on large datasets.',
      },
    ],
    quiz: [
      {
        id: 'ai-1-1-q1',
        question: 'Why are text passages converted into embedding vectors in AI search?',
        options: [
          'So semantic similarity between concepts can be measured mathematically.',
          'To make font sizes larger.',
          'To compress video files.',
        ],
        correctIndex: 0,
        explanation: 'Vectors capture semantic relationships so related ideas sit close together in vector space.',
      },
      {
        id: 'ai-1-1-q2',
        question: 'Why prefer NumPy vectorized operations over nested Python loops on 100,000 rows?',
        options: [
          'Vectorized operations run much faster in compiled low-level routines and produce cleaner code.',
          'Python forbids for-loops in data files.',
          'NumPy skips missing values silently.',
        ],
        correctIndex: 0,
        explanation: 'NumPy avoids Python interpreter loop overhead across large arrays.',
      },
      {
        id: 'ai-1-1-q3',
        question: 'What does a cosine similarity close to 1.0 between two normalized vectors indicate?',
        options: [
          'They point in nearly the same direction (high similarity).',
          'They are completely unrelated.',
          'One vector contains null values.',
        ],
        correctIndex: 0,
        explanation: 'Cosine similarity near 1 means a tiny angle between vectors, indicating strong alignment.',
      },
    ],
  },
  {
    id: 'ai-1-2',
    moduleOrder: 1,
    lessonNumber: '1.2',
    title: 'Data Cleaning & Feature Preparation with NumPy and Pandas',
    estimatedMinutes: 20,
    learningObjectives: [
      'Detect missing, duplicated, and inconsistently encoded records in Pandas.',
      'Prevent target leakage when engineering features.',
      'Document every cleaning transformation reproducibly.',
    ],
    sections: [
      {
        heading: '1. Garbage In, Biased Model Out',
        body: 'Real-world humanitarian and educational datasets contain typos, inconsistent country spellings ("UK" vs "United Kingdom"), and missing optional survey fields. Cleaning must happen systematically in code—never by hand-editing spreadsheets without a record.',
        keyTakeaway: 'Script every cleaning step so results can be audited and rerun on updated data.',
      },
      {
        heading: '2. Spotting Target Leakage Early',
        body: 'Target leakage occurs when a training feature contains information only known AFTER the outcome occurs (for instance, using "graduation_certificate_id" to predict whether a student will complete a course). Leakage produces fake 99% test scores that collapse in production.',
        exampleOrTemplate: {
          label: 'Pandas Cleaning Pipeline Snippet',
          content: `df['country'] = df['country'].str.strip().str.title()
df['nationality'] = df['nationality'].fillna('Not Specified')
df = df.drop_duplicates(subset=['learner_id'])`,
        },
      },
      {
        heading: '3. Encoding Categorical & Numeric Columns Properly',
        body: 'Never encode unordered categories like countries as 1, 2, 3 if a linear model might falsely treat Country 3 as "greater than" Country 1; use one-hot or target-safe encoding.',
      },
    ],
    quiz: [
      {
        id: 'ai-1-2-q1',
        question: 'What is target leakage in machine learning?',
        options: [
          'Including a feature that reveals future outcome information unavailable at prediction time.',
          'Deleting duplicate rows.',
          'Saving a CSV with UTF-8 encoding.',
        ],
        correctIndex: 0,
        explanation: 'Leakage inflates offline metrics artificially because the model cheats using post-outcome clues.',
      },
      {
        id: 'ai-1-2-q2',
        question: 'Why should data cleaning steps live in Python scripts rather than manual spreadsheet edits?',
        options: [
          'Scripts are reproducible, reviewable, and repeatable when new batches arrive.',
          'Spreadsheets cannot open CSV files.',
          'Scripts double the number of rows.',
        ],
        correctIndex: 0,
        explanation: 'Reproducible scripts ensure consistent transformations across training and evaluation.',
      },
      {
        id: 'ai-1-2-q3',
        question: 'Why is assigning numbers 1, 2, 3 to unordered categories like cities risky for linear models?',
        options: [
          'The model may falsely assume City 3 > City 2 > City 1 mathematically.',
          'Python cannot store integers.',
          'It deletes missing values.',
        ],
        correctIndex: 0,
        explanation: 'Arbitrary integer codes imply false ordering; one-hot encoding avoids false magnitude assumptions.',
      },
    ],
  },
  {
    id: 'ai-1-3',
    moduleOrder: 1,
    lessonNumber: '1.3',
    title: 'Reproducible Experiments & Notebook Hygiene',
    estimatedMinutes: 16,
    learningObjectives: [
      'Set fixed random seeds for repeatable train/test splits and experiments.',
      'Organize notebooks top-to-bottom so "Restart & Run All" always passes.',
      'Track experiment parameters and metrics systematically.',
    ],
    sections: [
      {
        heading: '1. Eliminating Hidden Notebook State',
        body: 'Executing Jupyter cells out of order creates phantom variables that vanish when a teammate runs your notebook from top to bottom. Before sharing any experiment, always run "Restart Kernel and Run All Cells" to prove reproducibility.',
        keyTakeaway: 'An experiment is only credible if another practitioner can rerun it cleanly from line one.',
      },
      {
        heading: '2. Pinning Seeds & Dependency Versions',
        body: 'Randomly shuffling rows without setting random_state=42 yields slightly different scores every run, making it impossible to tell whether a model change helped or just got lucky on an easier split.',
        exampleOrTemplate: {
          label: 'Reproducible Split Setup',
          content: `RANDOM_SEED = 42
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=RANDOM_SEED
)`,
        },
      },
      {
        heading: '3. Lightweight Experiment Logs',
        body: 'Record dataset version, model hyperparameters, and validation metrics in a concise Markdown table or JSON file so you can compare iterations objectively.',
      },
    ],
    quiz: [
      {
        id: 'ai-1-3-q1',
        question: 'Why set random_state=42 when splitting a dataset?',
        options: [
          'So repeated runs produce the exact same split, enabling fair model comparisons.',
          'Because 42 is the maximum number of rows.',
          'To encrypt the dataset.',
        ],
        correctIndex: 0,
        explanation: 'Fixed seeds make random splitting deterministic across runs.',
      },
      {
        id: 'ai-1-3-q2',
        question: 'What does "Restart & Run All" verify in a Jupyter notebook?',
        options: [
          'That no out-of-order cell executions or deleted-cell variables are hiding bugs.',
          'That your Wi-Fi speed is above 100 Mbps.',
          'That GPU drivers are disabled.',
        ],
        correctIndex: 0,
        explanation: 'Top-to-bottom execution confirms the notebook is genuinely self-contained.',
      },
      {
        id: 'ai-1-3-q3',
        question: 'What does stratify=y accomplish during train_test_split?',
        options: [
          'Preserves the same class proportions in both training and test sets.',
          'Removes minority classes completely.',
          'Sorts names alphabetically.',
        ],
        correctIndex: 0,
        explanation: 'Stratification prevents rare classes from accidentally disappearing from the test set.',
      },
    ],
  },
  // MODULE 2
  {
    id: 'ai-2-1',
    moduleOrder: 2,
    lessonNumber: '2.1',
    title: 'Regression, Classification & Train/Test Splitting',
    estimatedMinutes: 18,
    learningObjectives: [
      'Choose between regression and classification based on target variable type.',
      'Fit a simple baseline model before attempting complex neural networks.',
      'Keep test data strictly unseen until final evaluation.',
    ],
    sections: [
      {
        heading: '1. Start with a Simple Baseline',
        body: 'Before deploying heavy models, establish a fast, interpretable baseline—such as Logistic Regression for classification or Ridge Regression for continuous targets. A simple baseline tells you whether fancy models genuinely add value.',
        keyTakeaway: 'Never deploy a complex model unless it measurably outperforms a simple baseline.',
      },
      {
        heading: '2. Respecting the Holdout Test Set',
        body: 'If you tune hyperparameters repeatedly against the test set, your model indirectly memorizes the test split. Use cross-validation on the training split for tuning, touching the holdout test set only once at the end.',
      },
      {
        heading: '3. Checking Prediction Sanity',
        body: 'Inspect actual misclassified examples rather than staring only at aggregate numbers; human inspection often uncovers labeling errors or missing edge cases immediately.',
      },
    ],
    quiz: [
      {
        id: 'ai-2-1-q1',
        question: 'Which task type predicts a continuous number such as estimated study hours remaining?',
        options: ['Regression', 'Binary classification', 'Clustering'],
        correctIndex: 0,
        explanation: 'Regression predicts continuous numerical values, whereas classification assigns discrete categories.',
      },
      {
        id: 'ai-2-1-q2',
        question: 'Why establish a simple baseline model first?',
        options: [
          'It sets an honest performance benchmark and surfaces data pipeline bugs fast.',
          'Simple baselines never make errors.',
          'Complex models cannot run on CSV files.',
        ],
        correctIndex: 0,
        explanation: 'Baselines validate your pipeline and reveal whether added complexity is justified.',
      },
      {
        id: 'ai-2-1-q3',
        question: 'When should you evaluate on the final holdout test set?',
        options: [
          'After every single feature tweak.',
          'Once, after model selection and tuning via cross-validation are complete.',
          'Never.',
        ],
        correctIndex: 1,
        explanation: 'Reserving the test set for final evaluation gives an unbiased estimate of generalization.',
      },
    ],
  },
  {
    id: 'ai-2-2',
    moduleOrder: 2,
    lessonNumber: '2.2',
    title: 'Precision, Recall, F1 & Class Imbalance Traps',
    estimatedMinutes: 20,
    learningObjectives: [
      'Compute precision, recall, and F1 from a confusion matrix.',
      'Select metrics aligned with real-world false-positive vs. false-negative costs.',
      'Spot misleading accuracy scores on imbalanced datasets.',
    ],
    sections: [
      {
        heading: '1. Confusion Matrices Tell the Full Story',
        body: 'Precision asks: "Of everything the model flagged positive, how many were truly positive?" Recall asks: "Of all truly positive cases, how many did the model find?" In scholarship outreach or medical screening, missing a positive case (low recall) often carries higher human cost than a false alarm.',
        exampleOrTemplate: {
          label: 'Metric Definitions',
          content: `Precision = True Positives / (True Positives + False Positives)
Recall    = True Positives / (True Positives + False Negatives)
F1 Score  = 2 * (Precision * Recall) / (Precision + Recall)`,
        },
      },
      {
        heading: '2. The 98% Accuracy Illusion',
        body: 'If only 2% of transactions are fraudulent, a broken model that predicts "Not Fraud" 100% of the time scores 98% accuracy while catching zero fraud. Always inspect per-class precision, recall, and PR-AUC.',
        keyTakeaway: 'Never rely on raw accuracy for imbalanced real-world classification tasks.',
      },
      {
        heading: '3. Adjusting Decision Thresholds',
        body: 'Depending on program capacity, moving a model probability threshold from 0.50 to 0.35 increases recall so fewer eligible learners are overlooked.',
      },
    ],
    quiz: [
      {
        id: 'ai-2-2-q1',
        question: 'A model predicts "Eligible" for 10 students; 8 actually are eligible, and 2 are not. What is its precision?',
        options: ['80%', '20%', '100%'],
        correctIndex: 0,
        explanation: '8 true positives out of 10 predicted positives equals 80% precision.',
      },
      {
        id: 'ai-2-2-q2',
        question: 'If missing a high-risk safety alert is far worse than reviewing a false alarm, which metric should you prioritize?',
        options: ['High Recall', 'Raw Accuracy only', 'Model file size'],
        correctIndex: 0,
        explanation: 'High recall minimizes false negatives so critical cases are not missed.',
      },
      {
        id: 'ai-2-2-q3',
        question: 'Why does a model always predicting the majority class achieve 95% accuracy on a 95/5 split?',
        options: [
          'Because 95% of rows belong to the majority class, hiding 0% recall on the minority class.',
          'Because the model learned deep patterns.',
          'Because F1 equals 95%.',
        ],
        correctIndex: 0,
        explanation: 'Accuracy weights all rows equally and masks complete failure on rare classes.',
      },
    ],
  },
  {
    id: 'ai-2-3',
    moduleOrder: 2,
    lessonNumber: '2.3',
    title: 'Preventing Data Leakage & Overfitting',
    estimatedMinutes: 18,
    learningObjectives: [
      'Diagnose overfitting by comparing training vs. validation error curves.',
      'Apply scalers and imputers strictly inside cross-validation folds.',
      'Use regularization and simpler feature sets to improve generalization.',
    ],
    sections: [
      {
        heading: '1. Memorization vs. Generalization',
        body: 'An overfitted model scores 99% on training rows because it memorized noise and coincidences, yet drops to 62% on new learners. Compare training and validation metrics side by side to detect overfitting early.',
        keyTakeaway: 'A large gap between training performance and validation performance signals overfitting.',
      },
      {
        heading: '2. Fit Preprocessing Only on Training Data',
        body: 'Computing dataset-wide mean or standard deviation across the entire table before splitting leaks validation distribution statistics into training. Wrap scalers and models together inside a scikit-learn Pipeline.',
        exampleOrTemplate: {
          label: 'Leak-Free Pipeline Pattern',
          content: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipe = make_pipeline(StandardScaler(), LogisticRegression(C=1.0))
pipe.fit(X_train, y_train)`,
        },
      },
      {
        heading: '3. Regularization & Pruning',
        body: 'Penalizing overly large weights (L2 regularization) or limiting decision tree depth keeps models smooth and resilient when deployed to unseen regions.',
      },
    ],
    quiz: [
      {
        id: 'ai-2-3-q1',
        question: 'Training accuracy is 99% and validation accuracy is 64%. What is happening?',
        options: ['Overfitting (memorizing training noise)', 'Underfitting', 'Perfect generalization'],
        correctIndex: 0,
        explanation: 'High training score paired with poor validation score is classic overfitting.',
      },
      {
        id: 'ai-2-3-q2',
        question: 'Why put StandardScaler inside a Pipeline rather than scaling X before splitting?',
        options: [
          'So mean and variance are computed strictly from training folds without leaking test statistics.',
          'Because StandardScaler crashes on training sets.',
          'To skip cross-validation.',
        ],
        correctIndex: 0,
        explanation: 'Fitting scalers inside pipelines prevents subtle statistical leakage from validation/test rows.',
      },
      {
        id: 'ai-2-3-q3',
        question: 'Which adjustment usually reduces overfitting in a decision tree?',
        options: [
          'Limiting maximum depth (max_depth) or requiring larger minimum leaf samples.',
          'Growing unlimited depth until every single row has its own leaf.',
          'Duplicating training rows 10 times.',
        ],
        correctIndex: 0,
        explanation: 'Constraining tree depth stops the tree from memorizing individual noisy samples.',
      },
    ],
  },
  // MODULE 3
  {
    id: 'ai-3-1',
    moduleOrder: 3,
    lessonNumber: '3.1',
    title: 'How Large Language Models Process Context & Tokens',
    estimatedMinutes: 18,
    learningObjectives: [
      'Understand tokenization and why token count differs across languages.',
      'Manage context window budgets efficiently.',
      'Recognize deterministic vs. probabilistic sampling parameters.',
    ],
    sections: [
      {
        heading: '1. Subword Tokens & Multilingual Cost Awareness',
        body: 'Language models split text into subword chunks called tokens. English words often take 1–2 tokens, whereas underrepresented languages may split into 3–6 tokens per word—increasing latency and cost if prompts are bloated.',
        keyTakeaway: 'Design concise, structured prompts so multilingual learners experience fast responses.',
      },
      {
        heading: '2. Context Windows Have Finite Attention',
        body: 'Even large context windows degrade when stuffed with irrelevant noise. Passing only the three most relevant syllabus paragraphs yields sharper answers than pasting an entire 80-page manual.',
      },
      {
        heading: '3. Temperature & Deterministic Tasks',
        body: 'For classification, data extraction, or quiz grading, keep temperature low (0.0–0.2) for repeatable outputs; reserve higher temperature for brainstorming exercises.',
      },
    ],
    quiz: [
      {
        id: 'ai-3-1-q1',
        question: 'What is a token in a Large Language Model?',
        options: [
          'A subword unit of text processed numerically by the model.',
          'A hardware graphics card.',
          'An HTTP cookie.',
        ],
        correctIndex: 0,
        explanation: 'Models break words and punctuation into subword tokens before encoding them.',
      },
      {
        id: 'ai-3-1-q2',
        question: 'When extracting structured JSON fields from a syllabus, which temperature setting is best?',
        options: ['Low temperature (0.0–0.2) for predictable output', 'Very high temperature (1.8)', 'Random temperature'],
        correctIndex: 0,
        explanation: 'Low temperature reduces randomness and improves schema adherence.',
      },
      {
        id: 'ai-3-1-q3',
        question: 'Why does stuffing huge amounts of unrelated text into a prompt hurt quality?',
        options: [
          'Irrelevant context increases distraction, latency, and token cost.',
          'Models refuse inputs over 10 words.',
          'Prompts must always be poetry.',
        ],
        correctIndex: 0,
        explanation: 'Focused, relevant context helps the model attend to the exact facts needed.',
      },
    ],
  },
  {
    id: 'ai-3-2',
    moduleOrder: 3,
    lessonNumber: '3.2',
    title: 'Grounding Answers with Retrieval-Augmented Generation (RAG)',
    estimatedMinutes: 20,
    learningObjectives: [
      'Explain why ungrounded models fabricate citations.',
      'Design a chunking and retrieval pipeline over verified course guides.',
      'Enforce explicit "insufficient evidence" fallbacks.',
    ],
    sections: [
      {
        heading: '1. Anchoring Responses in Verified Sources',
        body: 'Instead of asking a model to recall refugee scholarship rules from memory—where policies shift yearly—RAG retrieves up-to-date excerpts from your curated database and instructs the model to answer strictly from those passages.',
        keyTakeaway: 'Separate knowledge storage (retrievable documents) from language reasoning.',
      },
      {
        heading: '2. Chunking Documents with Context Intact',
        body: 'Splitting a PDF mid-sentence strips away headings and conditions. Chunk documents along logical headings with small overlaps and preserve metadata (module title, page, update date) on every chunk.',
        exampleOrTemplate: {
          label: 'Grounded Prompt Contract',
          content: `System: Answer ONLY using the provided Context Passages.
If the answer is not in the Context Passages, say:
"The verified guide does not cover this question."
Always cite [Source ID] for each factual claim.`,
        },
      },
      {
        heading: '3. Hybrid Search Beats Vectors Alone',
        body: 'Exact course codes like "GSP-104" or legal article numbers often match better with keyword search (BM25) paired with semantic vector search.',
      },
    ],
    quiz: [
      {
        id: 'ai-3-2-q1',
        question: 'Why combine keyword search with vector search in a RAG assistant?',
        options: [
          'Keyword search catches exact codes/acronyms while vector search captures paraphrased meaning.',
          'Vector search only works on numbers.',
          'Keyword search removes citations.',
        ],
        correctIndex: 0,
        explanation: 'Hybrid retrieval handles both exact identifiers and conceptual phrasing reliably.',
      },
      {
        id: 'ai-3-2-q2',
        question: 'What happens if chunks strip away section titles and dates?',
        options: [
          'Retrieved snippets lose context, risking outdated or misapplied rules.',
          'Responses become twice as accurate.',
          'Token costs drop to zero.',
        ],
        correctIndex: 0,
        explanation: 'Preserving headings and dates in metadata keeps retrieved passages unambiguous.',
      },
      {
        id: 'ai-3-2-q3',
        question: 'What is the safest response when retrieved passages lack the answer?',
        options: [
          'Guess based on general internet patterns.',
          'Explicitly state that the verified documents do not contain that answer.',
          'Hide the response box.',
        ],
        correctIndex: 1,
        explanation: 'Honest abstention builds institutional trust and avoids hallucinations.',
      },
    ],
  },
  {
    id: 'ai-3-3',
    moduleOrder: 3,
    lessonNumber: '3.3',
    title: 'Structured Outputs, Citations & Hallucination Mitigation',
    estimatedMinutes: 18,
    learningObjectives: [
      'Enforce JSON schemas when integrating AI outputs into applications.',
      'Verify cited source IDs programmatically before rendering answers.',
      'Measure hallucination rates across test cases.',
    ],
    sections: [
      {
        heading: '1. Schema-Constrained Responses',
        body: 'Free-form prose breaks downstream UI code. Define strict JSON schemas requiring fields like answer, citations[], and confidence_status so your frontend renders verified data predictably.',
        keyTakeaway: 'Validate AI JSON outputs with the same strictness as external user input.',
      },
      {
        heading: '2. Programmatic Citation Verification',
        body: 'Never assume a citation tag like [Source 3] is real. Verify in application code that Source 3 actually appeared in the retrieved context array before displaying the link to learners.',
      },
      {
        heading: '3. Guarding Against Prompt Injection',
        body: 'Untrusted user documents may contain hidden instructions like "Ignore previous rules." Isolate retrieved text inside clear delimiters and never grant user text system-level privileges.',
      },
    ],
    quiz: [
      {
        id: 'ai-3-3-q1',
        question: 'Why validate AI-generated JSON against a schema in application code?',
        options: [
          'To guarantee required fields and types exist before rendering or saving to a database.',
          'Because browsers cannot parse JSON.',
          'To increase token count.',
        ],
        correctIndex: 0,
        explanation: 'Schema validation catches malformed or incomplete outputs gracefully.',
      },
      {
        id: 'ai-3-3-q2',
        question: 'How can software verify that an AI citation is not fabricated?',
        options: [
          'Check programmatically that each cited ID matches an actual document returned by retrieval.',
          'Trust any footnote number automatically.',
          'Delete all citations.',
        ],
        correctIndex: 0,
        explanation: 'Cross-checking cited IDs against retrieved context catches invented references instantly.',
      },
      {
        id: 'ai-3-3-q3',
        question: 'What is indirect prompt injection?',
        options: [
          'Malicious instructions embedded inside retrieved external documents trying to override system rules.',
          'A faster keyboard shortcut.',
          'A CSS animation bug.',
        ],
        correctIndex: 0,
        explanation: 'Untrusted document text must be treated strictly as data, not instructions.',
      },
    ],
  },
  // MODULE 4
  {
    id: 'ai-4-1',
    moduleOrder: 4,
    lessonNumber: '4.1',
    title: 'Fairness, Privacy & Human-in-the-Loop Safeguards',
    estimatedMinutes: 20,
    learningObjectives: [
      'Identify where historical bias can enter training data and evaluation metrics.',
      'Keep sensitive personal identifiers out of external LLM prompts.',
      'Design human-in-the-loop review for high-stakes decisions.',
    ],
    sections: [
      {
        heading: '1. Fairness Across Subgroups',
        body: 'An overall 90% accuracy score can hide a 55% error rate for learners typing in a second language or using non-Western name formats. Disaggregate evaluation scores across language, region, and demographic groups.',
        keyTakeaway: 'Aggregate metrics can conceal severe disparities; always test subgroup performance.',
      },
      {
        heading: '2. Privacy-First Prompt Redaction',
        body: 'Never send passport numbers, phone numbers, or camp locations to third-party AI endpoints when a study question only needs course content. Strip or anonymize PII before inference.',
      },
      {
        heading: '3. Keeping Humans Accountable',
        body: 'Automated tools may assist mentors by summarizing submissions or suggesting rubric checks, but final credential awards and admission decisions must always remain accountable to qualified human reviewers.',
      },
    ],
    quiz: [
      {
        id: 'ai-4-1-q1',
        question: 'Why must AI systems never autonomously reject refugee scholarship or credential applications?',
        options: [
          'High-stakes human opportunities require transparent criteria, appeal paths, and human accountability.',
          'AI models cannot read PDFs.',
          'Humans never use rubrics.',
        ],
        correctIndex: 0,
        explanation: 'Accountable human review protects fairness, dignity, and contestability.',
      },
      {
        id: 'ai-4-1-q2',
        question: 'What should happen to personal identifiers (phone, location) before sending study text to an AI assistant?',
        options: [
          'Strip or omit unneeded PII to uphold data minimization.',
          'Include full home addresses in every prompt.',
          'Publish them in public logs.',
        ],
        correctIndex: 0,
        explanation: 'Minimizing PII reduces privacy risk without hurting educational assistance.',
      },
      {
        id: 'ai-4-1-q3',
        question: 'How do you detect whether an AI tutor performs worse for non-native English prompts?',
        options: [
          'Slice evaluation benchmarks by language and prompt style rather than checking only the overall average.',
          'Increase font weight.',
          'Delete non-English test cases.',
        ],
        correctIndex: 0,
        explanation: 'Subgroup evaluation uncovers performance gaps hidden by global averages.',
      },
    ],
  },
  {
    id: 'ai-4-2',
    moduleOrder: 4,
    lessonNumber: '4.2',
    title: 'Building Automated Benchmark Suites for Prompts',
    estimatedMinutes: 18,
    learningObjectives: [
      'Create repeatable golden evaluation sets with expected facts and refusal cases.',
      'Prevent prompt regressions when modifying instructions.',
      'Score groundedness, relevance, and format compliance systematically.',
    ],
    sections: [
      {
        heading: '1. Golden Datasets Turn Prompting into Engineering',
        body: 'Tweaking a prompt to fix one question often breaks three others silently. Maintain a golden dataset of 30–50 representative questions—including edge cases and out-of-scope traps—and run the entire suite after every edit.',
        keyTakeaway: 'Treat prompt edits like code changes: run regression benchmarks before shipping.',
      },
      {
        heading: '2. Testing Three Essential Dimensions',
        body: 'Evaluate (1) Factual Groundedness against source context, (2) Refusal Accuracy on unanswerable queries, and (3) Format Compliance (valid JSON, concise length for mobile readers).',
        exampleOrTemplate: {
          label: 'Evaluation Case Structure',
          content: `{
  "id": "eval-07",
  "question": "Are GSP certificates automatically equivalent to a university degree?",
  "must_include": ["accredited institutions", "not automatically equivalent"],
  "must_abstain": false
}`,
        },
      },
      {
        heading: '3. Combining Deterministic Checks with Human Spot Audits',
        body: 'Use deterministic assertions for JSON validity and required keywords first, then perform periodic human rubric reviews on sampled outputs.',
      },
    ],
    quiz: [
      {
        id: 'ai-4-2-q1',
        question: 'What problem does a golden evaluation suite solve when editing AI prompts?',
        options: [
          'It catches regressions where fixing one case accidentally breaks other cases.',
          'It eliminates the need for source documents.',
          'It converts Python to CSS.',
        ],
        correctIndex: 0,
        explanation: 'Automated eval suites verify all key behaviors stay intact across prompt updates.',
      },
      {
        id: 'ai-4-2-q2',
        question: 'Why include "unanswerable" questions in your benchmark suite?',
        options: [
          'To test whether the assistant honestly abstains instead of fabricating answers.',
          'To lower overall scores intentionally.',
          'To increase server costs.',
        ],
        correctIndex: 0,
        explanation: 'Measuring abstention accuracy verifies hallucination safeguards actually work.',
      },
      {
        id: 'ai-4-2-q3',
        question: 'Which check is fastest and 100% deterministic to run on every AI output?',
        options: [
          'Schema/JSON parsing and citation-ID existence checks.',
          'Waiting six months for user surveys.',
          'Manual translation into ten languages.',
        ],
        correctIndex: 0,
        explanation: 'Programmatic schema and reference checks catch structural failures instantaneously.',
      },
    ],
  },
  {
    id: 'ai-4-3',
    moduleOrder: 4,
    lessonNumber: '4.3',
    title: 'Capstone Review & Model Card Documentation',
    estimatedMinutes: 16,
    learningObjectives: [
      'Author a transparent Model Card covering intended use, limitations, and metrics.',
      'Document failure modes honestly for partner institutions.',
      'Present a complete AI capstone deliverable ready for technical critique.',
    ],
    sections: [
      {
        heading: '1. What Belongs in a Credible Model Card',
        body: 'Inspired by responsible AI standards, a Model Card clearly states what your system is designed for, what data/documents it relies on, measured benchmark scores, and explicit out-of-scope uses where humans must take over.',
        keyTakeaway: 'Honesty about system limitations is a hallmark of trustworthy AI engineering.',
      },
      {
        heading: '2. Documenting Trade-Offs & Latency Budgets',
        body: 'Explain why you chose smaller, faster models or concise retrieval chunks so learners in low-connectivity environments receive reliable answers within 2 seconds.',
      },
      {
        heading: '3. Preparing for Partner Review',
        body: 'Package your repository, evaluation results, and Model Card cleanly so mentors and external evaluators can reproduce your benchmarks and inspect safety boundaries.',
      },
    ],
    quiz: [
      {
        id: 'ai-4-3-q1',
        question: 'What is the primary purpose of an AI Model Card?',
        options: [
          'To document intended use, evaluation benchmarks, subgroup limitations, and safety boundaries transparently.',
          'To hide failure rates from users.',
          'To replace privacy policies.',
        ],
        correctIndex: 0,
        explanation: 'Model Cards communicate capabilities, benchmarks, and known boundaries clearly to stakeholders.',
      },
      {
        id: 'ai-4-3-q2',
        question: 'Should a Model Card list out-of-scope or unsupported uses?',
        options: [
          'Yes—explicitly stating where the system must not be used prevents misuse.',
          'No—claim the system works everywhere.',
          'Only in encrypted files.',
        ],
        correctIndex: 0,
        explanation: 'Clear boundaries protect end users from relying on AI outside tested domains.',
      },
      {
        id: 'ai-4-3-q3',
        question: 'Why document latency and token budgets alongside accuracy?',
        options: [
          'Because slow or costly systems become unusable for learners on mobile networks.',
          'Because latency replaces accuracy.',
          'Because CSS requires token budgets.',
        ],
        correctIndex: 0,
        explanation: 'Real-world utility depends on speed and accessibility as well as correctness.',
      },
    ],
  },
];
