import type { LessonContent } from '../types/platform';

export const DATA_SCIENCE_LESSONS: LessonContent[] = [
  // MODULE 1
  {
    id: 'ds-1-1',
    moduleOrder: 1,
    lessonNumber: '1.1',
    title: 'Data Types, Missing Values & Tidy Table Structure',
    estimatedMinutes: 18,
    learningObjectives: [
      'Apply tidy data principles: one variable per column, one observation per row.',
      'Distinguish numeric, categorical, boolean, and ISO-8601 date types.',
      'Handle missing values explicitly without distorting averages.',
    ],
    sections: [
      {
        heading: '1. What Makes a Dataset "Tidy"?',
        body: 'In international program spreadsheets, teams often put months across 12 separate columns ("Jan", "Feb", ...) or merge region and country inside one cell. Tidy data keeps one variable per column (region, month, enrolled_count) and one observation per row so sorting, filtering, and SQL imports work effortlessly.',
        keyTakeaway: 'Never encode data values inside column headers—use a dedicated column instead.',
      },
      {
        heading: '2. Explicit Nulls vs. Zeroes',
        body: 'Replacing a missing attendance score with 0 drags down regional averages falsely. Distinguish "unknown/not reported" (NULL) from a measured 0 so summary metrics remain truthful.',
        exampleOrTemplate: {
          label: 'Tidy Format Example',
          content: `cohort_id | country | month      | active_learners
GSP-01    | Kenya   | 2026-03-01 | 142
GSP-01    | Jordan  | 2026-03-01 | 98`,
        },
      },
      {
        heading: '3. ISO-8601 Dates Eliminate Ambiguity',
        body: 'Does "04/05/2026" mean April 5 or May 4? Standardizing dates to YYYY-MM-DD prevents cross-border reporting mistakes and sorts chronologically as plain text.',
      },
    ],
    quiz: [
      {
        id: 'ds-1-1-q1',
        question: 'Why is replacing missing survey scores with 0 dangerous in analytics?',
        options: [
          'It treats "not reported" as the lowest possible measured score, biasing averages downward.',
          'Spreadsheets cannot sum zeroes.',
          'Zeroes automatically delete rows.',
        ],
        correctIndex: 0,
        explanation: 'NULL represents missingness; 0 represents a true measured zero.',
      },
      {
        id: 'ds-1-1-q2',
        question: 'Which date format avoids US vs. European day/month confusion?',
        options: ['MM/DD/YY', 'YYYY-MM-DD (ISO-8601)', 'DD-MM'],
        correctIndex: 1,
        explanation: 'ISO-8601 (YYYY-MM-DD) is unambiguous globally and sorts chronologically.',
      },
      {
        id: 'ds-1-1-q3',
        question: 'In tidy data, what belongs in each row?',
        options: [
          'One distinct observation.',
          'Subtotal formulas mixed with raw entries.',
          'Merged multi-line headers.',
        ],
        correctIndex: 0,
        explanation: 'Keeping subtotals out of raw observation rows prevents double-counting.',
      },
    ],
  },
  {
    id: 'ds-1-2',
    moduleOrder: 1,
    lessonNumber: '1.2',
    title: 'Pivot Tables, Conditional Aggregations & Audit Checks',
    estimatedMinutes: 18,
    learningObjectives: [
      'Summarize multi-category metrics cleanly with pivot tables and COUNTIFS/SUMIFS.',
      'Run reconciliation checks comparing raw row sums against summary tables.',
      'Spot duplicate IDs before presenting totals to stakeholders.',
    ],
    sections: [
      {
        heading: '1. Cross-Tabulating Without Destroying Source Data',
        body: 'Never edit raw imported rows to squeeze out a summary. Use pivot tables or structured formula tabs that reference the immutable raw sheet so numbers stay traceable.',
        keyTakeaway: 'Keep raw data untouched in one tab and build calculations in separate analysis tabs.',
      },
      {
        heading: '2. Reconciliation & Checksum Discipline',
        body: 'Every analytical table should include a reconciliation check verifying that the sum of regional subtotals equals the grand total of unique records—catching dropped categories or filters immediately.',
        exampleOrTemplate: {
          label: 'Spreadsheet Audit Formula Example',
          content: `=SUM(Summary!B2:B10) = COUNTA(RawLearners!A2:A500)
// Should evaluate to TRUE before publishing any report`,
        },
      },
      {
        heading: '3. Checking Unique Counts vs. Row Counts',
        body: 'If one student attends three workshops, counting rows measures workshop attendances, not unique students. Label every count explicitly ("Unique Learners" vs. "Workshop Sessions").',
      },
    ],
    quiz: [
      {
        id: 'ds-1-2-q1',
        question: 'Why keep raw imported data in an untouched tab separate from summary formulas?',
        options: [
          'To preserve an auditable source of truth and prevent accidental data corruption.',
          'Because Excel limits files to two tabs.',
          'To make fonts bold automatically.',
        ],
        correctIndex: 0,
        explanation: 'Separating raw inputs from derived views preserves traceability.',
      },
      {
        id: 'ds-1-2-q2',
        question: 'What does a reconciliation check between regional subtotals and raw row counts catch?',
        options: [
          'Missing categories, filter exclusions, or accidental duplicate counting.',
          'Broken CSS borders.',
          'Slow Wi-Fi connections.',
        ],
        correctIndex: 0,
        explanation: 'Comparing grand totals against subgroup sums catches silent omissions immediately.',
      },
      {
        id: 'ds-1-2-q3',
        question: 'If a table has one row per workshop attendance, what does COUNT(rows) measure?',
        options: ['Total workshop attendances, not unique learners.', 'Unique learners.', 'Monthly budget.'],
        correctIndex: 0,
        explanation: 'Row count always reflects the table’s unit of observation (granularity).',
      },
    ],
  },
  {
    id: 'ds-1-3',
    moduleOrder: 1,
    lessonNumber: '1.3',
    title: 'Recognizing Sampling Bias & Misleading Averages',
    estimatedMinutes: 16,
    learningObjectives: [
      'Identify survivorship and self-selection bias in learner surveys.',
      'Compare mean vs. median when extreme values skew distributions.',
      'Report sample sizes (n) and denominators alongside every percentage.',
    ],
    sections: [
      {
        heading: '1. Who Is Missing from Your Survey?',
        body: 'If you send an online feedback form requiring high-speed video streaming, learners in low-connectivity settlements cannot respond. Concluding "95% of learners have fiber internet" reflects sampling bias—you only measured those who could load the survey.',
        keyTakeaway: 'Always ask who was excluded by your data collection channel before generalizing findings.',
      },
      {
        heading: '2. Why Percentages Need Explicit Denominators',
        body: '"Completion increased 100%!" sounds dramatic if enrollment grew from 1 person to 2 people. Always pair percentages with raw counts (e.g., "80%, 16 of 20 learners").',
      },
      {
        heading: '3. Median Protects Against Outliers',
        body: 'Nine graduates earning $400/month and one earning $10,000/month yield a mean of $1,360—representing nobody—while the median ($400) accurately reflects typical earnings.',
      },
    ],
    quiz: [
      {
        id: 'ds-1-3-q1',
        question: 'Why must percentages always include the underlying sample size (n)?',
        options: [
          'Small denominators can make trivial changes look huge (e.g., 1 of 1 = 100%).',
          'Percentages are illegal without n.',
          'Sample sizes replace charts.',
        ],
        correctIndex: 0,
        explanation: 'Raw counts provide critical context about precision and scale.',
      },
      {
        id: 'ds-1-3-q2',
        question: 'What bias occurs if you survey only graduates who finished a program and ignore dropouts?',
        options: ['Survivorship bias', 'Rounding error', 'SQL join fan-out'],
        correctIndex: 0,
        explanation: 'Survivorship bias overlooks challenges faced by participants who left early.',
      },
      {
        id: 'ds-1-3-q3',
        question: 'Which metric better represents typical household income when a few outliers earn 20x the rest?',
        options: ['Median', 'Mean', 'Maximum'],
        correctIndex: 0,
        explanation: 'The median is resistant to extreme outliers at the top or bottom.',
      },
    ],
  },
  // MODULE 2
  {
    id: 'ds-2-1',
    moduleOrder: 2,
    lessonNumber: '2.1',
    title: 'Filtering, Grouping & Aggregating with SELECT and GROUP BY',
    estimatedMinutes: 20,
    learningObjectives: [
      'Write clean SELECT, WHERE, GROUP BY, and HAVING SQL clauses.',
      'Understand the difference between row-level WHERE filters and group-level HAVING filters.',
      'Alias aggregated columns clearly for stakeholder exports.',
    ],
    sections: [
      {
        heading: '1. Logical Query Execution Order',
        body: 'Although we write SELECT first, SQL evaluates FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY. Understanding this order explains why you cannot use a SELECT column alias inside a WHERE clause.',
        exampleOrTemplate: {
          label: 'SQL Grouping Example',
          content: `SELECT
  country_of_residence,
  COUNT(*) AS learner_count
FROM public.students
WHERE account_type = 'refugee_displaced'
GROUP BY country_of_residence
HAVING COUNT(*) >= 10
ORDER BY learner_count DESC;`,
        },
      },
      {
        heading: '2. WHERE vs. HAVING',
        body: 'Use WHERE to filter individual rows BEFORE grouping (e.g., only active accounts), and HAVING to filter aggregated groups AFTER counting (e.g., only countries with at least 10 learners).',
        keyTakeaway: 'Filter rows as early as possible with WHERE to keep queries fast and clear.',
      },
      {
        heading: '3. Counting Distinct Entities',
        body: 'Use COUNT(DISTINCT student_id) whenever a table can hold multiple rows per learner.',
      },
    ],
    quiz: [
      {
        id: 'ds-2-1-q1',
        question: 'Which SQL clause filters groups AFTER COUNT(*) has been computed?',
        options: ['WHERE', 'HAVING', 'ORDER BY'],
        correctIndex: 1,
        explanation: 'WHERE filters raw rows before grouping; HAVING filters aggregated group results.',
      },
      {
        id: 'ds-2-1-q2',
        question: 'What happens if you SELECT a non-aggregated column that is missing from GROUP BY?',
        options: [
          'Standard SQL raises a grouping error because the column value per group is ambiguous.',
          'SQL picks the largest font.',
          'The query runs twice.',
        ],
        correctIndex: 0,
        explanation: 'Every non-aggregated SELECT column must appear in GROUP BY.',
      },
      {
        id: 'ds-2-1-q3',
        question: 'How do you count unique students inside an enrollments table?',
        options: ['COUNT(DISTINCT student_id)', 'SUM(student_id)', 'GROUP BY *'],
        correctIndex: 0,
        explanation: 'COUNT(DISTINCT ...) counts each student ID only once.',
      },
    ],
  },
  {
    id: 'ds-2-2',
    moduleOrder: 2,
    lessonNumber: '2.2',
    title: 'Inner vs. Left Joins Across Normalized Tables',
    estimatedMinutes: 20,
    learningObjectives: [
      'Select INNER JOIN vs. LEFT JOIN deliberately depending on whether unmatched rows matter.',
      'Avoid accidental row duplication during one-to-many joins.',
      'Spot NULLs introduced by LEFT JOINs when filtering.',
    ],
    sections: [
      {
        heading: '1. Preserving Zero-Activity Learners with LEFT JOIN',
        body: 'Suppose you want to know how many modules each registered student completed, including students who registered yesterday and have completed 0 modules so far. An INNER JOIN drops those students silently; a LEFT JOIN keeps every student with 0 counted accurately.',
        keyTakeaway: 'When measuring participation rates, start FROM the full population table and LEFT JOIN activity.',
      },
      {
        heading: '2. Careful with WHERE on the Right Table',
        body: 'If you LEFT JOIN enrollments and then write WHERE enrollments.status = \'completed\', SQL turns your LEFT JOIN back into an INNER JOIN because NULL rows fail the equality check. Put right-table conditions inside the ON clause instead.',
        exampleOrTemplate: {
          label: 'Safe LEFT JOIN Condition Placement',
          content: `SELECT s.id, COUNT(e.id) AS completed_count
FROM public.students s
LEFT JOIN public.enrollments e
  ON e.student_id = s.id
  AND e.status = 'completed'
GROUP BY s.id;`,
        },
      },
      {
        heading: '3. Checking Row Counts Before and After Joins',
        body: 'If your student table has 250 rows and a joined query suddenly has 740 rows before grouping, inspect the join key—you joined a one-to-many table.',
      },
    ],
    quiz: [
      {
        id: 'ds-2-2-q1',
        question: 'Which join ensures learners with zero completed courses still appear in your report?',
        options: ['LEFT JOIN from students to completions', 'INNER JOIN', 'CROSS JOIN'],
        correctIndex: 0,
        explanation: 'LEFT JOIN keeps all rows from the left (students) table regardless of matches.',
      },
      {
        id: 'ds-2-2-q2',
        question: 'Why can placing a right-table filter in WHERE undo a LEFT JOIN?',
        options: [
          'Unmatched rows have NULL on the right side, which fails WHERE right_col = value.',
          'WHERE deletes the left table.',
          'SQL ignores WHERE after JOIN.',
        ],
        correctIndex: 0,
        explanation: 'Put right-table filters in the ON clause when you want to keep unmatched left rows.',
      },
      {
        id: 'ds-2-2-q3',
        question: 'What does a sudden row-count jump after a JOIN usually indicate?',
        options: ['A one-to-many or duplicate-key match.', 'Faster CPU speed.', 'Missing permissions.'],
        correctIndex: 0,
        explanation: 'Joining onto multiple child rows multiplies parent rows.',
      },
    ],
  },
  {
    id: 'ds-2-3',
    moduleOrder: 2,
    lessonNumber: '2.3',
    title: 'Window Functions & Common Table Expressions (CTEs)',
    estimatedMinutes: 22,
    learningObjectives: [
      'Structure complex multi-step SQL cleanly with WITH (CTE) blocks.',
      'Rank and compute running totals using OVER (PARTITION BY ... ORDER BY ...).',
      'Pre-aggregate child tables in CTEs to eliminate join fan-out.',
    ],
    sections: [
      {
        heading: '1. Readable Multi-Step Queries with CTEs',
        body: 'Nested subqueries quickly become unreadable. Common Table Expressions (WITH) let you name intermediate steps—clean_enrollments, regional_totals—so reviewers read SQL top-to-bottom like prose.',
        exampleOrTemplate: {
          label: 'CTE + Window Function Example',
          content: `WITH module_counts AS (
  SELECT student_id, COUNT(*) AS modules_done
  FROM public.lesson_completions
  GROUP BY student_id
)
SELECT
  s.country_of_residence,
  AVG(COALESCE(m.modules_done, 0)) AS avg_modules
FROM public.students s
LEFT JOIN module_counts m ON m.student_id = s.id
GROUP BY s.country_of_residence;`,
        },
      },
      {
        heading: '2. Window Functions Keep Row Detail Intact',
        body: 'Unlike GROUP BY, which collapses rows into one row per group, window functions like ROW_NUMBER() OVER (PARTITION BY country ORDER BY score DESC) compute rankings or running sums while keeping every individual row visible.',
        keyTakeaway: 'Use CTEs to pre-aggregate before joining and window functions for ranks and running totals.',
      },
      {
        heading: '3. Coalescing Missing Child Aggregates',
        body: 'Wrap LEFT JOINed counts in COALESCE(count_col, 0) so students without activity show 0 instead of NULL in averages.',
      },
    ],
    quiz: [
      {
        id: 'ds-2-3-q1',
        question: 'How does a window function differ from GROUP BY?',
        options: [
          'Window functions compute aggregates/ranks without collapsing individual rows.',
          'Window functions delete duplicate rows.',
          'GROUP BY only works in Python.',
        ],
        correctIndex: 0,
        explanation: 'Window functions keep row granularity while computing values across a partition.',
      },
      {
        id: 'ds-2-3-q2',
        question: 'Why pre-aggregate a child table inside a CTE before joining to students?',
        options: [
          'To ensure a clean 1-to-1 join that prevents double-counting parent rows.',
          'To hide column names.',
          'To disable indexes.',
        ],
        correctIndex: 0,
        explanation: 'Pre-aggregating aligns granularity before joining.',
      },
      {
        id: 'ds-2-3-q3',
        question: 'What does COALESCE(m.modules_done, 0) return when m.modules_done is NULL?',
        options: ['0', 'NULL', 'Error'],
        correctIndex: 0,
        explanation: 'COALESCE returns its first non-NULL argument.',
      },
    ],
  },
  // MODULE 3
  {
    id: 'ds-3-1',
    moduleOrder: 3,
    lessonNumber: '3.1',
    title: 'Distributions, Medians, Percentiles & Outlier Analysis',
    estimatedMinutes: 18,
    learningObjectives: [
      'Inspect shape, skewness, and spread before picking summary statistics.',
      'Calculate interquartile range (IQR) to flag extreme anomalies responsibly.',
      'Decide when to investigate vs. retain valid extreme observations.',
    ],
    sections: [
      {
        heading: '1. Look at the Distribution Before Summarizing',
        body: 'Two cohorts can share the exact same mean study hours (12 hrs/week) while having completely different realities: one clustered tightly at 10–14 hours, the other split between 2 hours and 40 hours. Histograms and percentiles reveal the full spread.',
        keyTakeaway: 'Pair center (median/mean) with spread (IQR/standard deviation) in every study.',
      },
      {
        heading: '2. Investigating Outliers Instead of Deleting Blindly',
        body: 'An age of 999 is clearly a data-entry placeholder; a study week of 45 hours might be a real dedicated full-time learner. Never drop outliers automatically without checking their cause.',
      },
      {
        heading: '3. Quantiles in Python Pandas',
        body: 'Using df["hours"].describe(percentiles=[0.25, 0.5, 0.75, 0.9]) immediately highlights skew and range in one line.',
      },
    ],
    quiz: [
      {
        id: 'ds-3-1-q1',
        question: 'What does the Interquartile Range (IQR = P75 - P25) measure?',
        options: [
          'The spread of the middle 50% of observations.',
          'The maximum value minus zero.',
          'The sample size.',
        ],
        correctIndex: 0,
        explanation: 'IQR captures central spread while ignoring extreme 25% tails.',
      },
      {
        id: 'ds-3-1-q2',
        question: 'What should you do when you spot an extreme outlier like age = 999?',
        options: [
          'Investigate whether it is a placeholder/error code and document how it is handled.',
          'Ignore it and average it into youth age metrics.',
          'Delete the whole dataset.',
        ],
        correctIndex: 0,
        explanation: 'Sentinel values like 999 often encode missing responses and distort averages if left uncleaned.',
      },
      {
        id: 'ds-3-1-q3',
        question: 'Why can two groups with identical means still behave differently?',
        options: [
          'They may have very different variance, bimodality, or skewness.',
          'Means cannot be compared across groups.',
          'Python rounds means randomly.',
        ],
        correctIndex: 0,
        explanation: 'Center alone hides spread and multi-modal clusters.',
      },
    ],
  },
  {
    id: 'ds-3-2',
    moduleOrder: 3,
    lessonNumber: '3.2',
    title: 'Correlation vs. Causation in Program Evaluation',
    estimatedMinutes: 18,
    learningObjectives: [
      'Spot confounding variables in observational education datasets.',
      'Avoid causal language ("X caused Y") when data is purely observational.',
      'Propose controlled comparisons or natural experiments responsibly.',
    ],
    sections: [
      {
        heading: '1. Confounders Explain Spurious Links',
        body: 'Suppose learners who attend optional evening webinars earn higher scores. Did the webinar alone cause higher scores, or do learners with reliable electricity and fewer caregiving duties have more time both to attend webinars AND to study?',
        keyTakeaway: 'When observing natural behavior without randomization, look for hidden confounders like access, time, or prior schooling.',
      },
      {
        heading: '2. Honest Language in Reports',
        body: 'Write "Webinar attendees averaged 14% higher quiz scores (associated with prior connectivity access)" rather than claiming "Webinars guarantee 14% higher grades." Decision-makers respect rigor.',
      },
      {
        heading: '3. Comparing Like With Like',
        body: 'Stratifying comparisons by starting skill level or connectivity tier isolates program effects much more fairly than raw unadjusted averages.',
      },
    ],
    quiz: [
      {
        id: 'ds-3-2-q1',
        question: 'What is a confounding variable?',
        options: [
          'An unmeasured third factor influencing both the apparent cause and the outcome.',
          'A typo in a column name.',
          'A SQL primary key.',
        ],
        correctIndex: 0,
        explanation: 'Confounders create misleading associations unless controlled for.',
      },
      {
        id: 'ds-3-2-q2',
        question: 'Which phrasing is accurate for an observational correlation study?',
        options: [
          '"Completing practice quizzes is associated with higher capstone pass rates."',
          '"Practice quizzes mathematically force 100% employment."',
          '"Correlation proves zero confounders exist."',
        ],
        correctIndex: 0,
        explanation: 'Observational analysis demonstrates association rather than guaranteed causation.',
      },
      {
        id: 'ds-3-2-q3',
        question: 'How does randomized assignment (A/B testing) help establish causation?',
        options: [
          'Randomization balances both known and unknown confounders across groups.',
          'It eliminates sample size requirements.',
          'It removes the need for ethics review.',
        ],
        correctIndex: 0,
        explanation: 'Randomization makes treatment and control groups comparable on average.',
      },
    ],
  },
  {
    id: 'ds-3-3',
    moduleOrder: 3,
    lessonNumber: '3.3',
    title: 'Confidence Intervals & Hypothesis Testing Basics',
    estimatedMinutes: 20,
    learningObjectives: [
      'Interpret 95% confidence intervals as uncertainty bounds around an estimate.',
      'Understand p-values without confusing statistical significance for practical importance.',
      'Communicate uncertainty transparently to non-technical leaders.',
    ],
    sections: [
      {
        heading: '1. Point Estimates Without Margin of Error Mislead',
        body: 'Saying "62% completion" from a pilot of 15 learners carries a wide confidence interval (roughly 35% to 84%), whereas 62% across 1,500 learners is tightly bounded (59.5% to 64.5%). Confidence intervals communicate precision honestly.',
        keyTakeaway: 'Larger samples narrow uncertainty; tiny pilots require wide uncertainty intervals.',
      },
      {
        heading: '2. Statistical Significance vs. Practical Impact',
        body: 'With 100,000 rows, a tiny 0.2% score difference can yield p < 0.01 ("statistically significant") while offering zero practical benefit to learners. Always report effect size alongside p-values.',
      },
      {
        heading: '3. Checking Assumptions First',
        body: 'Verify sample independence and check whether skewed metrics call for non-parametric tests or bootstrap intervals.',
      },
    ],
    quiz: [
      {
        id: 'ds-3-3-q1',
        question: 'What happens to the width of a 95% confidence interval as sample size grows from 20 to 2,000?',
        options: [
          'The confidence interval becomes much narrower (higher precision).',
          'It grows wider.',
          'It stays identical.',
        ],
        correctIndex: 0,
        explanation: 'More independent observations reduce sampling uncertainty.',
      },
      {
        id: 'ds-3-3-q2',
        question: 'Why can a difference with p = 0.001 still be unimportant in practice?',
        options: [
          'Huge samples can make a tiny, meaningless difference statistically detectable.',
          'p = 0.001 means 99.9% error.',
          'p-values only apply to colors.',
        ],
        correctIndex: 0,
        explanation: 'Always check effect size (how big the difference actually is) alongside statistical significance.',
      },
      {
        id: 'ds-3-3-q3',
        question: 'What does reporting a confidence interval add beyond a single average?',
        options: [
          'It shows the plausible range of uncertainty around the estimate.',
          'It deletes outliers.',
          'It replaces sample size.',
        ],
        correctIndex: 0,
        explanation: 'Confidence intervals keep decision-makers aware of estimation uncertainty.',
      },
    ],
  },
  // MODULE 4
  {
    id: 'ds-4-1',
    moduleOrder: 4,
    lessonNumber: '4.1',
    title: 'Choosing Honest Charts & Accessible Color Palettes',
    estimatedMinutes: 18,
    learningObjectives: [
      'Match chart types (bar, line, scatter) to comparison vs. trend questions.',
      'Start bar chart value axes at zero to avoid visual exaggeration.',
      'Use colorblind-safe palettes and direct data labels.',
    ],
    sections: [
      {
        heading: '1. Zero Baselines on Bar Charts',
        body: 'Truncating a bar chart y-axis at 78% makes an 82% bar look four times taller than an 80% bar—a classic distortion. Bar lengths encode quantities relative to zero; keep bar baselines at 0.',
        keyTakeaway: 'Never truncate bar chart baselines; use line charts with labeled axes when small variations matter.',
      },
      {
        heading: '2. Avoid Rainbow & Red-Green-Only Encodings',
        body: 'Pair distinct hues (deep navy vs. teal/amber) with clear direct labels or line styles so charts remain legible in black-and-white printouts and for color-blind readers.',
      },
      {
        heading: '3. Direct Labels Reduce Eye Ping-Pong',
        body: 'Putting concise numbers directly above bars removes the need for readers to trace across gridlines and color legends.',
      },
    ],
    quiz: [
      {
        id: 'ds-4-1-q1',
        question: 'Why should bar charts always begin at a zero baseline?',
        options: [
          'Readers judge bar quantities by relative bar length; non-zero baselines distort ratios.',
          'Browsers cannot draw negative bars.',
          'Zero baselines reduce file size.',
        ],
        correctIndex: 0,
        explanation: 'Bar length visually encodes proportion from zero.',
      },
      {
        id: 'ds-4-1-q2',
        question: 'Which chart type is best for showing monthly enrollment trends over 24 months?',
        options: ['Line chart', '3D Pie chart', 'Word cloud'],
        correctIndex: 0,
        explanation: 'Line charts clearly depict continuous progression across time.',
      },
      {
        id: 'ds-4-1-q3',
        question: 'Why avoid relying solely on red vs. green lines in a chart?',
        options: [
          'Red-green color blindness is common; pairing distinct patterns or direct labels keeps charts accessible.',
          'Green ink costs more.',
          'Screen readers read hex codes aloud.',
        ],
        correctIndex: 0,
        explanation: 'Accessible charts combine high-contrast palettes with direct labels or line styles.',
      },
    ],
  },
  {
    id: 'ds-4-2',
    moduleOrder: 4,
    lessonNumber: '4.2',
    title: 'Designing Executive KPI Briefs with Explicit Context',
    estimatedMinutes: 16,
    learningObjectives: [
      'Write action-oriented chart titles that state the finding.',
      'Include timeframe, unit, and cohort scope on every KPI.',
      'Surface limitations alongside headline results.',
    ],
    sections: [
      {
        heading: '1. Titles That Answer "So What?"',
        body: 'Instead of a generic chart title like "Enrollments by Region", write "East Africa Cohorts Account for 64% of Q2 Completions (n = 310)". Busy stakeholders grasp the insight immediately.',
        keyTakeaway: 'Every metric needs four anchors: value, unit, timeframe, and cohort scope.',
      },
      {
        heading: '2. Explicit Placeholder Discipline',
        body: 'When building dashboard mockups before live cohort data exists, label sample figures clearly as "Illustrative Placeholder" rather than presenting invented numbers as real impact.',
      },
      {
        heading: '3. One Page, One Clear Decision',
        body: 'Prioritize three to four decision-driving metrics over twenty decorative vanity gauges.',
      },
    ],
    quiz: [
      {
        id: 'ds-4-2-q1',
        question: 'Which KPI presentation meets quantitative rigor standards?',
        options: [
          '"78% Module 1 Completion (156 of 200 Q1 Learners, Jan–Mar 2026)"',
          '"High Completion!"',
          '"99% Impact Score"',
        ],
        correctIndex: 0,
        explanation: 'Explicit units, counts, and timeframes make metrics verifiable.',
      },
      {
        id: 'ds-4-2-q2',
        question: 'What should a pre-launch dashboard display where real impact data is not yet collected?',
        options: [
          'Clearly labeled illustrative placeholders noting when real data will populate.',
          'Fabricated numbers presented as historical facts.',
          'Broken error messages.',
        ],
        correctIndex: 0,
        explanation: 'Transparent placeholders uphold institutional integrity.',
      },
      {
        id: 'ds-4-2-q3',
        question: 'What makes an executive chart title effective?',
        options: [
          'Stating the core takeaway plus timeframe/scope clearly.',
          'Using internal database column names like tbl_usr_cnt.',
          'Writing all-caps slogans.',
        ],
        correctIndex: 0,
        explanation: 'Insight-driven titles help stakeholders interpret visuals accurately.',
      },
    ],
  },
  {
    id: 'ds-4-3',
    moduleOrder: 4,
    lessonNumber: '4.3',
    title: 'Capstone Presentation & Data Storytelling Critique',
    estimatedMinutes: 16,
    learningObjectives: [
      'Structure an analytical brief: Context -> Methodology -> Findings -> Recommendations.',
      'Document SQL queries and data cleaning assumptions for reproducibility.',
      'Defend analytical limitations transparently during mentor Q&A.',
    ],
    sections: [
      {
        heading: '1. Narrative Arc for Analytical Briefs',
        body: 'Start with the decision question, briefly explain data sources and cleaning exclusions, present 2–3 focused findings backed by charts, and end with concrete, feasible next steps.',
        keyTakeaway: 'Lead with the decision question and insight, keeping technical appendix SQL neatly linked below.',
      },
      {
        heading: '2. Anticipating Skeptical Questions',
        body: 'Strong analysts welcome questions about missing rows, selection bias, and edge cases—and prepare clear sensitivity checks showing whether conclusions hold under slightly different assumptions.',
      },
      {
        heading: '3. Packaging for GitHub & Employers',
        body: 'Include your clean SQL files, reproducible Python notebook, and a 2-page PDF/Markdown executive brief so non-technical hiring leads and senior analysts can both evaluate your work.',
      },
    ],
    quiz: [
      {
        id: 'ds-4-3-q1',
        question: 'What belongs at the beginning of a stakeholder analytics brief?',
        options: [
          'The core decision question and headline finding.',
          '200 lines of raw SQL imports.',
          'A list of Python package versions.',
        ],
        correctIndex: 0,
        explanation: 'Executives need the question and finding upfront before diving into technical appendices.',
      },
      {
        id: 'ds-4-3-q2',
        question: 'How should you respond when a reviewer asks about missing values in your dataset?',
        options: [
          'Explain the exact missingness rate, possible bias, and how your cleaning rules handled it.',
          'Claim the dataset had zero imperfections.',
          'Hide the raw row count.',
        ],
        correctIndex: 0,
        explanation: 'Transparent methodology builds credibility.',
      },
      {
        id: 'ds-4-3-q3',
        question: 'Why include both an executive brief and SQL/code scripts in your portfolio?',
        options: [
          'Hiring managers review communication clarity while technical peers verify query accuracy.',
          'Because PDFs cannot contain numbers.',
          'To double the file size.',
        ],
        correctIndex: 0,
        explanation: 'Serving both audiences demonstrates end-to-end analytical maturity.',
      },
    ],
  },
];

export const CYBERSECURITY_LESSONS: LessonContent[] = [
  // MODULE 1
  {
    id: 'cs-1-1',
    moduleOrder: 1,
    lessonNumber: '1.1',
    title: 'TCP/IP, DNS, TLS & How Packets Travel Safely',
    estimatedMinutes: 20,
    learningObjectives: [
      'Trace how a browser resolves a domain via DNS and establishes a TLS connection.',
      'Differentiate between encrypted transport (HTTPS/TLS) and unencrypted traffic.',
      'Identify common network ports (22, 80, 443, 5432) and why unused ports increase risk.',
    ],
    sections: [
      {
        heading: '1. From Domain Name to Encrypted Tunnel',
        body: 'When a learner visits Global Skills Passport, DNS translates the domain into an IP address, TCP performs a handshake, and TLS verifies the server certificate before encrypting traffic. Without TLS (plain HTTP), anyone on a shared Wi-Fi hotspot can read or alter traffic.',
        keyTakeaway: 'Always enforce HTTPS/TLS end-to-end, especially when learners connect over public or shared hotspots.',
      },
      {
        heading: '2. Ports as Doors into a Server',
        body: 'Each running network service listens on a numbered port—443 for HTTPS web traffic, 22 for SSH administration, 5432 for PostgreSQL. Exposing database ports like 5432 directly to the public internet invites automated brute-force scanners.',
        exampleOrTemplate: {
          label: 'Baseline Firewall Posture',
          content: `ALLOW IN  443/tcp  from 0.0.0.0/0   (Public HTTPS Web)
ALLOW IN  22/tcp   from <AdminVPN>  (Restricted SSH)
DENY  IN  5432/tcp from 0.0.0.0/0   (Database Private Only)`,
        },
      },
      {
        heading: '3. DNS Integrity & Phishing Defenses',
        body: 'Attackers register look-alike domains (typosquatting) to steal credentials. Organizations protect email and domain trust using SPF, DKIM, and DMARC records.',
      },
    ],
    quiz: [
      {
        id: 'cs-1-1-q1',
        question: 'Why is HTTPS (TLS) critical for learners using shared public Wi-Fi?',
        options: [
          'It encrypts credentials and coursework in transit against local eavesdropping and tampering.',
          'It makes Wi-Fi hardware free.',
          'It bypasses DNS.',
        ],
        correctIndex: 0,
        explanation: 'TLS protects confidentiality and integrity on untrusted networks.',
      },
      {
        id: 'cs-1-1-q2',
        question: 'Should a PostgreSQL database port (5432) be open to 0.0.0.0/0 on the public internet?',
        options: [
          'No; keep database ports restricted to private networks or authorized application servers.',
          'Yes, so browsers connect faster.',
          'Only on weekends.',
        ],
        correctIndex: 0,
        explanation: 'Reducing exposed ports shrinks the attack surface dramatically.',
      },
      {
        id: 'cs-1-1-q3',
        question: 'What does DNS do when you open a website URL?',
        options: [
          'Translates the human-readable domain name into an IP address.',
          'Hashes your password.',
          'Compiles TypeScript.',
        ],
        correctIndex: 0,
        explanation: 'DNS maps domain names to routable IP addresses.',
      },
    ],
  },
  {
    id: 'cs-1-2',
    moduleOrder: 1,
    lessonNumber: '1.2',
    title: 'Linux Permissions, Processes & Hardening Basics',
    estimatedMinutes: 18,
    learningObjectives: [
      'Read Linux file permission masks (rwx, 600, 755) accurately.',
      'Run web services as non-root users to contain compromise.',
      'Audit running processes and apply security patches promptly.',
    ],
    sections: [
      {
        heading: '1. Owner, Group, Other Permissions',
        body: 'In Linux, sensitive files like .env secrets or SSH private keys should never be world-readable. Setting chmod 600 ensures only the owning service account can read or write the file.',
        exampleOrTemplate: {
          label: 'Linux Permission Reference',
          content: `chmod 600 .env          # Owner read/write only (-rw-------)
chmod 755 deploy.sh     # Owner rwx, group/others rx (-rwxr-xr-x)`,
        },
      },
      {
        heading: '2. Never Run Application Servers as Root',
        body: 'If a Node.js or Python web server running as root has a file-traversal flaw, the attacker gains full control of the machine. Always run apps under a dedicated unprivileged user.',
        keyTakeaway: 'Unprivileged service accounts contain blast radius if an application process is compromised.',
      },
      {
        heading: '3. Patching & Minimal Images',
        body: 'Remove unused packages and compilers from production containers so attackers have fewer tools available.',
      },
    ],
    quiz: [
      {
        id: 'cs-1-2-q1',
        question: 'Which permission mode restricts a private key or .env file strictly to its owner?',
        options: ['777', '600', '644'],
        correctIndex: 1,
        explanation: '600 grants read/write to the owner and zero permissions to group or others.',
      },
      {
        id: 'cs-1-2-q2',
        question: 'Why avoid running web application processes as the Linux root user?',
        options: [
          'Any vulnerability in the web app would grant root-level control over the whole host.',
          'Root cannot open port 3000.',
          'Non-root users automatically encrypt SQL.',
        ],
        correctIndex: 0,
        explanation: 'Running as a dedicated non-root user limits damage if a process is exploited.',
      },
      {
        id: 'cs-1-2-q3',
        question: 'Why keep production containers minimal?',
        options: [
          'Fewer installed packages mean fewer vulnerabilities to patch and exploit.',
          'Containers cannot run Node.js otherwise.',
          'It disables TLS.',
        ],
        correctIndex: 0,
        explanation: 'Minimal images shrink attack surface and simplify maintenance.',
      },
    ],
  },
  {
    id: 'cs-1-3',
    moduleOrder: 1,
    lessonNumber: '1.3',
    title: 'Inspecting Network Traffic & Port Exposure',
    estimatedMinutes: 18,
    learningObjectives: [
      'Identify listening sockets and exposed services on a host.',
      'Spot unexpected outbound connections during triage.',
      'Verify TLS certificates and security headers on web endpoints.',
    ],
    sections: [
      {
        heading: '1. Visibility Before Defense',
        body: 'You cannot defend services you do not know are running. Periodically listing open listening ports reveals forgotten staging servers or test databases left exposed.',
        exampleOrTemplate: {
          label: 'Inspecting Listening Ports & Headers',
          content: `ss -tulnp                 # List TCP/UDP listening sockets
curl -I https://example.org  # Inspect HTTP security headers`,
        },
      },
      {
        heading: '2. Essential HTTP Security Headers',
        body: 'Headers like Strict-Transport-Security (HSTS) and X-Content-Type-Options: nosniff tell modern browsers to enforce HTTPS and avoid MIME-type confusion.',
        keyTakeaway: 'Audit both open network ports and HTTP response headers as part of routine checks.',
      },
      {
        heading: '3. Baseline Network Diagrams',
        body: 'Keep an updated one-page diagram showing public entry points, private APIs, and database boundaries.',
      },
    ],
    quiz: [
      {
        id: 'cs-1-3-q1',
        question: 'What is the purpose of inspecting listening ports during a security audit?',
        options: [
          'To detect unintended or forgotten network services exposed to attackers.',
          'To speed up CSS rendering.',
          'To reset user passwords.',
        ],
        correctIndex: 0,
        explanation: 'Port audits reveal exposed services that violate firewall policy.',
      },
      {
        id: 'cs-1-3-q2',
        question: 'What does Strict-Transport-Security (HSTS) instruct a browser to do?',
        options: [
          'Always connect over HTTPS rather than downgrading to insecure HTTP.',
          'Allow any self-signed certificate.',
          'Store passwords in plaintext.',
        ],
        correctIndex: 0,
        explanation: 'HSTS prevents SSL-stripping downgrade attacks.',
      },
      {
        id: 'cs-1-3-q3',
        question: 'Why keep an accurate network topology diagram?',
        options: [
          'Teams can quickly spot trust boundaries and unexpected connections during incidents.',
          'Diagrams replace firewalls.',
          'Browsers download diagrams automatically.',
        ],
        correctIndex: 0,
        explanation: 'Clear architecture maps accelerate threat modeling and incident triage.',
      },
    ],
  },
  // MODULE 2
  {
    id: 'cs-2-1',
    moduleOrder: 2,
    lessonNumber: '2.1',
    title: 'Least Privilege, RBAC & Multi-Factor Authentication',
    estimatedMinutes: 20,
    learningObjectives: [
      'Design Role-Based Access Control (RBAC) matrices for learners, mentors, and admins.',
      'Enforce server-side and database-level ownership checks.',
      'Prioritize MFA for staff and administrative accounts.',
    ],
    sections: [
      {
        heading: '1. Least Privilege Across Platform Roles',
        body: 'A mentor needs to read assigned cohort submissions, not export every learner’s phone number across other cohorts. Define explicit permissions per role and deny everything else by default.',
        keyTakeaway: 'Grant each role only the minimum data and actions required for its responsibility.',
      },
      {
        heading: '2. Enforcing Authorization Where Data Lives',
        body: 'Hiding an "Admin Panel" link in the navigation bar does not stop someone from sending a direct API request. Enforce role and ownership checks inside backend routes or database Row Level Security.',
      },
      {
        heading: '3. Protecting Privileged Accounts with MFA',
        body: 'Administrative, mentor, and institutional accounts hold elevated trust—require phishing-resistant MFA or authenticator apps rather than passwords alone.',
      },
    ],
    quiz: [
      {
        id: 'cs-2-1-q1',
        question: 'What does the Principle of Least Privilege state?',
        options: [
          'Accounts and services should receive only the minimum permissions necessary to perform their task.',
          'Every user should start as an admin.',
          'Passwords should be short.',
        ],
        correctIndex: 0,
        explanation: 'Minimizing privileges limits damage from stolen credentials or bugs.',
      },
      {
        id: 'cs-2-1-q2',
        question: 'Why is hiding an admin button in React NOT sufficient access control?',
        options: [
          'Anyone can call API endpoints or database queries directly without using the button.',
          'React buttons cannot be hidden.',
          'CSS hides server routes.',
        ],
        correctIndex: 0,
        explanation: 'Authorization must be verified on the server or database on every request.',
      },
      {
        id: 'cs-2-1-q3',
        question: 'Which accounts most urgently require Multi-Factor Authentication?',
        options: [
          'All accounts, especially administrators, mentors, and institutional partners with elevated access.',
          'Only guest accounts.',
          'None if the password has 8 characters.',
        ],
        correctIndex: 0,
        explanation: 'Compromised admin accounts expose entire systems; MFA blocks password-only attacks.',
      },
    ],
  },
  {
    id: 'cs-2-2',
    moduleOrder: 2,
    lessonNumber: '2.2',
    title: 'Password Hashing vs. Encryption & Key Management',
    estimatedMinutes: 20,
    learningObjectives: [
      'Distinguish one-way salted password hashing from reversible encryption.',
      'Explain why slow, memory-hard hashes (Argon2/bcrypt/scrypt) defeat brute forcing.',
      'Manage API keys and rotation cleanly.',
    ],
    sections: [
      {
        heading: '1. Why Passwords Are Hashed, Never Encrypted',
        body: 'Encryption is reversible with a key—if an attacker steals the key, every password is exposed. One-way salted hashing (like Argon2id, bcrypt, or scrypt) verifies a login attempt without ever being able to decrypt stored passwords back to plaintext.',
        keyTakeaway: 'Never store plaintext or reversibly encrypted passwords; rely on salted adaptive hashing.',
      },
      {
        heading: '2. Unique Salts Stop Rainbow Tables',
        body: 'Adding a unique random salt per user guarantees that two learners who accidentally pick the same password still produce completely different stored hashes.',
      },
      {
        heading: '3. Never Commit Secrets to Git',
        body: 'Even if you delete an API key in a later commit, it remains forever in Git history. Store secrets in platform secret managers or server .env files ignored by .gitignore, and rotate any leaked key immediately.',
      },
    ],
    quiz: [
      {
        id: 'cs-2-2-q1',
        question: 'What is the key difference between password hashing and encryption?',
        options: [
          'Hashing is a one-way transformation; encryption is designed to be reversed with a key.',
          'Encryption cannot use numbers.',
          'Hashing is reversible.',
        ],
        correctIndex: 0,
        explanation: 'Systems verify passwords by re-hashing the candidate input and comparing digests.',
      },
      {
        id: 'cs-2-2-q2',
        question: 'Why add a unique random salt to each user password before hashing?',
        options: [
          'To defeat precomputed lookup tables and ensure identical passwords produce different hashes.',
          'To shorten the password.',
          'To make passwords readable by admins.',
        ],
        correctIndex: 0,
        explanation: 'Salts force attackers to crack each hash individually.',
      },
      {
        id: 'cs-2-2-q3',
        question: 'If an API key is accidentally committed to GitHub and pushed, what must you do?',
        options: [
          'Revoke and rotate the key immediately, then remove it from code.',
          'Leave it if you delete it in the next commit.',
          'Rename the file.',
        ],
        correctIndex: 0,
        explanation: 'Git history preserves prior commits and automated bots scan public commits within seconds.',
      },
    ],
  },
  {
    id: 'cs-2-3',
    moduleOrder: 2,
    lessonNumber: '2.3',
    title: 'Protecting Displaced User Data & Privacy Boundaries',
    estimatedMinutes: 18,
    learningObjectives: [
      'Apply data minimization when onboarding refugee and displaced learners.',
      'Separate sensitive identity data from public portfolio showcases.',
      'Establish consent-driven data sharing with external employers.',
    ],
    sections: [
      {
        heading: '1. Data You Do Not Collect Cannot Be Breached',
        body: 'Displaced learners should never be asked to upload sensitive asylum papers or government IDs merely to study software or business skills. Collect only essential profile fields needed for education and mentorship.',
        keyTakeaway: 'Data minimization is the strongest privacy control for vulnerable communities.',
      },
      {
        heading: '2. Explicit Consent Before Sharing Portfolios',
        body: 'Employers should see a graduate’s verified project portfolio only when the learner chooses to share it—never through unsolicited public scraping of personal contact details.',
      },
      {
        heading: '3. Avoiding Sensitive PII in Logs & URLs',
        body: 'Never put email addresses, tokens, or location parameters into URL query strings (?email=...) where browser history and proxy logs store them in plaintext.',
      },
    ],
    quiz: [
      {
        id: 'cs-2-3-q1',
        question: 'Why should an education platform avoid requiring asylum or refugee ID documents during initial account signup?',
        options: [
          'Data minimization protects displaced learners from unnecessary privacy and safety exposure.',
          'Databases cannot store PDF filenames.',
          'Employers require zero learning accounts.',
        ],
        correctIndex: 0,
        explanation: 'Collecting unnecessary sensitive documents creates high breach risk and excludes learners.',
      },
      {
        id: 'cs-2-3-q2',
        question: 'Why avoid putting session tokens or emails inside URL query parameters?',
        options: [
          'URLs are recorded in browser history, server access logs, and HTTP Referer headers.',
          'URLs only allow lowercase letters.',
          'Query strings break HTTPS.',
        ],
        correctIndex: 0,
        explanation: 'Sensitive tokens belong in Authorization headers or HttpOnly cookies, never URLs.',
      },
      {
        id: 'cs-2-3-q3',
        question: 'When should external employers view a learner’s contact details?',
        options: [
          'Only with explicit learner consent and authorization.',
          'Automatically upon registration without consent.',
          'Via public search engines.',
        ],
        correctIndex: 0,
        explanation: 'Consent-based disclosure respects learner agency and safety.',
      },
    ],
  },
  // MODULE 3
  {
    id: 'cs-3-1',
    moduleOrder: 3,
    lessonNumber: '3.1',
    title: 'Phishing, Credential Stuffing & Common Attack Vectors',
    estimatedMinutes: 18,
    learningObjectives: [
      'Recognize phishing indicators in spoofed scholarship or reset emails.',
      'Understand why password reuse enables credential stuffing.',
      'Apply rate limiting and lockout protections safely.',
    ],
    sections: [
      {
        heading: '1. Social Engineering Targets Urgency & Hope',
        body: 'Attackers craft urgent fake scholarship or account-suspension emails linking to look-alike login domains. Train teams to verify exact domain spelling and never enter credentials from unverified links.',
        keyTakeaway: 'Encourage password managers so autofill refuses to populate credentials on spoofed look-alike domains.',
      },
      {
        heading: '2. Credential Stuffing & Rate Limiting',
        body: 'When users reuse passwords from breached third-party sites, bots replay millions of leaked pairs against login forms. Defenses include rate limiting, progressive delays, and breach-password checks.',
      },
      {
        heading: '3. Safe Error Messages on Login',
        body: 'Return a generic "Invalid email or password" rather than confirming which emails are registered (avoiding account enumeration).',
      },
    ],
    quiz: [
      {
        id: 'cs-3-1-q1',
        question: 'How does a password manager help defend against phishing sites?',
        options: [
          'It matches the exact authentic domain and refuses to autofill on look-alike spoofed URLs.',
          'It deletes incoming emails.',
          'It disables HTTPS.',
        ],
        correctIndex: 0,
        explanation: 'Password managers inspect the true domain origin rather than visual page styling.',
      },
      {
        id: 'cs-3-1-q2',
        question: 'What is credential stuffing?',
        options: [
          'Automated replay of username/password pairs leaked from other breached websites.',
          'Encrypting a database twice.',
          'Adding extra columns to SQL.',
        ],
        correctIndex: 0,
        explanation: 'Reusing passwords across sites makes accounts vulnerable when any single site is breached.',
      },
      {
        id: 'cs-3-1-q3',
        question: 'Why return "Invalid email or password" instead of "Email not found"?',
        options: [
          'To prevent attackers from enumerating which learners hold accounts.',
          'To save 10 bytes of bandwidth.',
          'Because databases cannot check emails.',
        ],
        correctIndex: 0,
        explanation: 'Generic login failure responses reduce user enumeration.',
      },
    ],
  },
  {
    id: 'cs-3-2',
    moduleOrder: 3,
    lessonNumber: '3.2',
    title: 'Reading Authentication & Web Server Logs for Anomalies',
    estimatedMinutes: 20,
    learningObjectives: [
      'Spot bursts of 401/403 status codes and path-scanning probes in web logs.',
      'Correlate timestamps and IP addresses to reconstruct an incident timeline.',
      'Avoid logging sensitive tokens or passwords inside server logs.',
    ],
    sections: [
      {
        heading: '1. Signals Hidden in Routine Access Logs',
        body: 'Normal users trigger occasional 404s; automated scanners fire hundreds of requests per minute for /.env, /wp-login.php, or repeated 401 login failures from rotating IPs.',
        exampleOrTemplate: {
          label: 'Sample Web Log Snippet',
          content: `2026-11-24T04:12:01Z IP=203.0.113.45 POST /api/login 401
2026-11-24T04:12:02Z IP=203.0.113.45 POST /api/login 401
2026-11-24T04:12:03Z IP=203.0.113.45 GET  /.env      404`,
        },
      },
      {
        heading: '2. Structured JSON Logging & UTC Timestamps',
        body: 'Structured logs with UTC ISO timestamps allow rapid filtering during high-stress triage without regex guesswork.',
        keyTakeaway: 'Never log raw request bodies on login routes—passwords and tokens must stay redacted.',
      },
      {
        heading: '3. Separating Noise from Real Compromise',
        body: 'Hundreds of blocked 404 scans mean defenses worked; a sudden 200 OK after 500 failed 401s demands immediate investigation.',
      },
    ],
    quiz: [
      {
        id: 'cs-3-2-q1',
        question: 'In web logs, which pattern warrants immediate triage?',
        options: [
          '500 rapid 401 login failures from an IP followed by a 200 OK login.',
          'A single learner downloading a syllabus PDF.',
          'Normal 200 OK homepage views.',
        ],
        correctIndex: 0,
        explanation: 'Repeated failures followed by a success suggests a brute-force or stuffing breach.',
      },
      {
        id: 'cs-3-2-q2',
        question: 'What must NEVER appear inside application log files?',
        options: [
          'Passwords, session tokens, or private API keys.',
          'HTTP status codes.',
          'UTC timestamps.',
        ],
        correctIndex: 0,
        explanation: 'Log aggregation tools are widely readable by staff; secrets in logs leak credentials.',
      },
      {
        id: 'cs-3-2-q3',
        question: 'Why standardize all server logs to UTC?',
        options: [
          'So events across distributed servers align on a single consistent timeline.',
          'Because local timezones forbid timestamps.',
          'To compress images.',
        ],
        correctIndex: 0,
        explanation: 'UTC prevents off-by-hours confusion when correlating events across cloud regions.',
      },
    ],
  },
  {
    id: 'cs-3-3',
    moduleOrder: 3,
    lessonNumber: '3.3',
    title: 'Structured Incident Triage, Containment & Recovery',
    estimatedMinutes: 18,
    learningObjectives: [
      'Follow the NIST-aligned incident lifecycle: Prepare, Detect, Contain, Eradicate, Recover, Learn.',
      'Preserve forensic evidence before wiping compromised hosts.',
      'Write blameless post-incident reviews that fix root causes.',
    ],
    sections: [
      {
        heading: '1. Contain First, Preserve Evidence',
        body: 'When an account or server shows active compromise, revoke active sessions, rotate affected keys, and isolate network access—while snapshotting logs so you can determine how entry occurred.',
        keyTakeaway: 'Rebooting or deleting a host blindly erases memory and log clues needed to prevent re-infection.',
      },
      {
        heading: '2. Communication Under Pressure',
        body: 'Maintain a calm, factual incident log noting who owns containment, what was verified, and when impacted users should be notified transparently.',
      },
      {
        heading: '3. Post-Incident Hardening',
        body: 'Every incident ends with concrete engineering fixes—such as adding missing RLS policies or automated alerts—not blaming individuals.',
      },
    ],
    quiz: [
      {
        id: 'cs-3-3-q1',
        question: 'What is the immediate goal of the Containment phase?',
        options: [
          'Stop ongoing damage (revoke sessions, block access) while preserving diagnostic evidence.',
          'Delete all logs so nobody knows.',
          'Blame junior team members.',
        ],
        correctIndex: 0,
        explanation: 'Containment stops active spread while preserving evidence for root-cause fixes.',
      },
      {
        id: 'cs-3-3-q2',
        question: 'Why write a blameless post-incident review?',
        options: [
          'To uncover systemic gaps and build safeguards so the failure cannot recur.',
          'To punish engineers.',
          'To skip rotating keys.',
        ],
        correctIndex: 0,
        explanation: 'Focus on system design fixes produces lasting resilience.',
      },
      {
        id: 'cs-3-3-q3',
        question: 'What should happen to all potentially exposed credentials during recovery?',
        options: [
          'Revoke and rotate them completely.',
          'Keep using them if no files look changed.',
          'Email them to the whole team.',
        ],
        correctIndex: 0,
        explanation: 'Unrotated keys allow attackers silent re-entry.',
      },
    ],
  },
  // MODULE 4
  {
    id: 'cs-4-1',
    moduleOrder: 4,
    lessonNumber: '4.1',
    title: 'OWASP Top 10 & Secure Code Review Essentials',
    estimatedMinutes: 20,
    learningObjectives: [
      'Spot Broken Access Control, Injection, and Security Misconfiguration in code reviews.',
      'Verify server-side ownership checks on every mutation endpoint.',
      'Use automated static checks alongside manual review.',
    ],
    sections: [
      {
        heading: '1. Broken Access Control Remains #1',
        body: 'Insecure Direct Object Reference (IDOR) occurs when an endpoint accepts /api/students/123 and returns record 123 without verifying that the signed-in caller actually owns ID 123. Always scope queries to the authenticated user ID.',
        keyTakeaway: 'Never trust client-supplied IDs without verifying ownership on the server or via RLS.',
      },
      {
        heading: '2. SSRF & Untrusted Outbound Fetches',
        body: 'If a server route fetches a URL provided by a user, validate that the URL uses https:// and block loopback or cloud metadata IPs (127.0.0.1, 169.254.169.254).',
      },
      {
        heading: '3. Dependency Hygiene',
        body: 'Audit third-party npm or Python packages routinely so known vulnerabilities in transitive libraries are patched.',
      },
    ],
    quiz: [
      {
        id: 'cs-4-1-q1',
        question: 'What vulnerability occurs when changing /api/profile?id=42 to id=43 reveals another user’s profile?',
        options: ['Broken Access Control / IDOR', 'CSS Overflow', 'DNS caching'],
        correctIndex: 0,
        explanation: 'Insecure Direct Object Reference lets users access records they do not own.',
      },
      {
        id: 'cs-4-1-q2',
        question: 'What does SSRF (Server-Side Request Forgery) target?',
        options: [
          'Tricking a backend server into making unintended requests to internal services or metadata endpoints.',
          'Styling buttons with rounded borders.',
          'Compressing fonts.',
        ],
        correctIndex: 0,
        explanation: 'SSRF abuses backend fetch calls to probe internal private networks.',
      },
      {
        id: 'cs-4-1-q3',
        question: 'How do you prevent IDOR on student profile updates?',
        options: [
          'Derive user identity from the verified auth session (auth.uid() / JWT) rather than trusting client body IDs.',
          'Use longer numeric IDs.',
          'Disable HTTPS.',
        ],
        correctIndex: 0,
        explanation: 'Binding queries to verified server session identity prevents tampering.',
      },
    ],
  },
  {
    id: 'cs-4-2',
    moduleOrder: 4,
    lessonNumber: '4.2',
    title: 'Threat Modeling Entry Points & Trust Boundaries',
    estimatedMinutes: 18,
    learningObjectives: [
      'Ask the four core threat-modeling questions before coding.',
      'Map trust boundaries between browser, API, and database.',
      'Prioritize mitigations by exploitability and human impact.',
    ],
    sections: [
      {
        heading: '1. Four Questions Every Team Should Ask',
        body: 'Threat modeling takes 30 minutes and saves weeks of rework: (1) What are we building? (2) What can go wrong? (3) What are we going to do about it? (4) Did we do a good job?',
        keyTakeaway: 'Every line crossing a trust boundary—browser to API, API to third-party service—must be validated and authorized.',
      },
      {
        heading: '2. Prioritizing Realistic Risks',
        body: 'Focus first on internet-facing entry points handling PII, authentication, and file uploads rather than theoretical low-probability issues.',
      },
      {
        heading: '3. Living Threat Models',
        body: 'Update your threat model whenever you add a new integration, user role, or external webhook.',
      },
    ],
    quiz: [
      {
        id: 'cs-4-2-q1',
        question: 'What is a trust boundary in a web application?',
        options: [
          'Any point where data crosses between components with different privilege levels (e.g., browser to server).',
          'A CSS margin.',
          'A footer divider.',
        ],
        correctIndex: 0,
        explanation: 'Validation and authorization checks belong strictly at trust boundaries.',
      },
      {
        id: 'cs-4-2-q2',
        question: 'When is the best time to threat-model a new registration flow?',
        options: [
          'During design and before writing production code.',
          'Only after a public data breach.',
          'Never.',
        ],
        correctIndex: 0,
        explanation: 'Early threat modeling prevents structural flaws cheaply.',
      },
      {
        id: 'cs-4-2-q3',
        question: 'Which risk deserves highest priority?',
        options: [
          'Missing authentication on a public API exposing displaced learner records.',
          'A slightly misaligned footer icon.',
          'A typo in an internal code comment.',
        ],
        correctIndex: 0,
        explanation: 'Prioritize vulnerabilities with high likelihood and severe human impact.',
      },
    ],
  },
  {
    id: 'cs-4-3',
    moduleOrder: 4,
    lessonNumber: '4.3',
    title: 'Capstone Security Audit & Incident Playbook',
    estimatedMinutes: 18,
    learningObjectives: [
      'Write actionable, prioritized remediation findings (Severity, Evidence, Fix).',
      'Draft a clear 1-page incident response playbook for remote teams.',
      'Present defensive findings constructively to engineering leaders.',
    ],
    sections: [
      {
        heading: '1. Actionable Audit Reporting',
        body: 'A strong security audit never just says "your app is insecure." Each finding documents the exact affected component, realistic impact, reproduction steps, and concrete code or policy fix.',
        keyTakeaway: 'Pair every risk finding with a clear, practical remediation step.',
      },
      {
        heading: '2. Incident Playbooks Save Minutes During Crises',
        body: 'Include clear contact escalation, session-revocation commands, key-rotation links, and user-communication templates so responders act calmly under stress.',
      },
      {
        heading: '3. Portfolio Readiness',
        body: 'Presenting a defensive security audit and playbook shows global employers you think systematically about protecting real people and production systems.',
      },
    ],
    quiz: [
      {
        id: 'cs-4-3-q1',
        question: 'What makes a security audit finding truly useful to developers?',
        options: [
          'Clear severity, affected endpoint/file, impact explanation, and concrete remediation steps.',
          'Vague fear-mongering with no code references.',
          'Posting user passwords publicly.',
        ],
        correctIndex: 0,
        explanation: 'Developers can fix issues rapidly when evidence and remediation guidance are explicit.',
      },
      {
        id: 'cs-4-3-q2',
        question: 'Why pre-write incident playbooks before an emergency occurs?',
        options: [
          'Clear checklists prevent panic mistakes like deleting logs or skipping key rotation.',
          'Playbooks disable firewalls.',
          'They replace backups.',
        ],
        correctIndex: 0,
        explanation: 'Prepared procedures reduce response time and human error.',
      },
      {
        id: 'cs-4-3-q3',
        question: 'Who benefits most from defensive security reviews in education platforms?',
        options: [
          'Learners, mentors, and partner institutions whose trust and privacy are safeguarded.',
          'Only hardware vendors.',
          'Nobody.',
        ],
        correctIndex: 0,
        explanation: 'Security protects human safety and institutional credibility.',
      },
    ],
  },
];
