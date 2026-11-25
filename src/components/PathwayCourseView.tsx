import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
  ClipboardCheck,
  Clock,
  FileText,
  Layers,
  Printer,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import { PATHWAY_ASSIGNMENTS } from '../data/assignmentsContent';
import { PATHWAY_LESSONS } from '../data/lessonsRegistry';
import {
  getCompletedLessonIds,
  resetPathwayProgress,
  toggleLessonCompletion,
} from '../lib/progressStorage';
import type {
  LearningPathway,
  LessonContent,
  PublicPageId,
} from '../types/platform';

export type CourseViewTab = 'syllabus' | 'lesson' | 'assignments';

interface PathwayCourseViewProps {
  pathway: LearningPathway;
  initialTab?: CourseViewTab;
  onBackAcademy: () => void;
  onNavigatePage: (page: PublicPageId, sectionId?: string) => void;
  onStartPathwayAction: () => void;
  onProgressChange?: () => void;
}

export function PathwayCourseView({
  pathway,
  initialTab = 'syllabus',
  onBackAcademy,
  onNavigatePage,
  onStartPathwayAction,
  onProgressChange,
}: PathwayCourseViewProps) {
  const lessons: LessonContent[] = useMemo(
    () => PATHWAY_LESSONS[pathway.id] ?? [],
    [pathway.id]
  );
  const assignments = PATHWAY_ASSIGNMENTS[pathway.id];

  const [activeTab, setActiveTab] = useState<CourseViewTab>(initialTab);
  const [activeLessonId, setActiveLessonId] = useState<string>(
    lessons[0]?.id ?? ''
  );
  const [completedIds, setCompletedIds] = useState<string[]>(() =>
    getCompletedLessonIds(pathway.id)
  );
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>(
    {}
  );
  const [showPrintableSummary, setShowPrintableSummary] = useState(false);

  useEffect(() => {
    setCompletedIds(getCompletedLessonIds(pathway.id));
    setActiveLessonId(lessons[0]?.id ?? '');
    setSelectedAnswers({});
    setShowPrintableSummary(false);
  }, [pathway.id, lessons]);

  const totalStudyHours = pathway.modules.reduce(
    (sum, mod) => sum + mod.estimatedHours,
    0
  );

  const completedSet = useMemo(() => new Set(completedIds), [completedIds]);
  const totalLessonsCount = lessons.length || 12;
  const completedCount = lessons.filter((l) => completedSet.has(l.id)).length;
  const progressPercent = Math.round(
    (completedCount / totalLessonsCount) * 100
  );

  const activeLessonIndex = Math.max(
    0,
    lessons.findIndex((l) => l.id === activeLessonId)
  );
  const activeLesson = lessons[activeLessonIndex] ?? lessons[0];
  const prevLesson =
    activeLessonIndex > 0 ? lessons[activeLessonIndex - 1] : null;
  const nextLesson =
    activeLessonIndex < lessons.length - 1
      ? lessons[activeLessonIndex + 1]
      : null;

  const isCurrentLessonComplete = activeLesson
    ? completedSet.has(activeLesson.id)
    : false;

  const handleOpenLesson = (lessonId: string) => {
    setActiveLessonId(lessonId);
    setActiveTab('lesson');
    setShowPrintableSummary(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleComplete = (lessonId: string) => {
    const updated = toggleLessonCompletion(pathway.id, lessonId);
    setCompletedIds(updated);
    onProgressChange?.();
  };

  const handleResetPathwayProgress = () => {
    resetPathwayProgress(pathway.id);
    setCompletedIds([]);
    onProgressChange?.();
  };

  const quizQuestions = activeLesson?.quiz ?? [];
  const answeredCount = quizQuestions.filter(
    (q) => selectedAnswers[q.id] !== undefined
  ).length;
  const correctCount = quizQuestions.filter(
    (q) => selectedAnswers[q.id] === q.correctIndex
  ).length;

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const handleResetLessonQuiz = () => {
    if (!activeLesson) return;
    setSelectedAnswers((prev) => {
      const copy = { ...prev };
      for (const q of activeLesson.quiz) {
        delete copy[q.id];
      }
      return copy;
    });
  };

  const totalRubricWeight =
    assignments?.gradingRubric.reduce(
      (sum, item) => sum + item.weightPercent,
      0
    ) ?? 100;

  return (
    <main className="bg-[#F7F9FC] min-h-[82vh] py-10 lg:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb Navigation */}
        <div className="no-print flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <button
              type="button"
              onClick={onBackAcademy}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#0B1F3A] cursor-pointer min-h-[40px]"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Learning Academy
            </button>
            <span className="text-slate-300" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              onClick={() => onNavigatePage('home', 'top')}
              className="text-slate-600 hover:text-[#0B1F3A] cursor-pointer min-h-[40px]"
            >
              Home
            </button>
          </div>
          <span className="font-mono text-xs text-slate-500 tabular-nums">
            {pathway.code}
          </span>
        </div>

        {/* Pathway Hero Summary & Progress Header */}
        <section className="no-print bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E]">
                {pathway.categoryLabel}
              </p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A] text-balance">
                {pathway.title}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">
                {pathway.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              {activeTab !== 'lesson' ? (
                <button
                  type="button"
                  onClick={() => {
                    setShowPrintableSummary(false);
                    setActiveTab('lesson');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0D9488] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
                >
                  <BookOpen className="w-4 h-4" aria-hidden="true" />
                  Open Lesson Reader
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setShowPrintableSummary(false);
                    setActiveTab('syllabus');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B1F3A] bg-white border border-slate-300 hover:border-[#0D9488] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
                >
                  <Layers className="w-4 h-4" aria-hidden="true" />
                  View Full Syllabus
                </button>
              )}
              <button
                type="button"
                onClick={onStartPathwayAction}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
              >
                Start Pathway
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Study Metrics + Local Progress Bar */}
          <div className="pt-5 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            <div className="lg:col-span-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-600 tabular-nums">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0D9488]" aria-hidden="true" />
                {pathway.estimatedWeeks} Weeks · {totalStudyHours} Study Hours
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#0D9488]" aria-hidden="true" />
                {pathway.modules.length} Modules · {totalLessonsCount} Lessons
              </span>
              <span>Level: {pathway.level}</span>
            </div>

            <div className="lg:col-span-5 space-y-2">
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="font-semibold text-[#0B1F3A] tabular-nums">
                  Local Study Progress: {completedCount} / {totalLessonsCount}{' '}
                  Lessons ({progressPercent}%)
                </span>
                {completedCount > 0 && (
                  <button
                    type="button"
                    onClick={handleResetPathwayProgress}
                    className="text-slate-500 hover:text-[#0B1F3A] underline cursor-pointer shrink-0"
                  >
                    Reset
                  </button>
                )}
              </div>
              <div
                role="progressbar"
                aria-valuenow={progressPercent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Pathway lesson completion progress"
                className="w-full h-2 rounded-full bg-slate-100 overflow-hidden"
              >
                <div
                  className="h-full bg-[#0D9488] transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Interactive 3-Tab Switcher */}
          <div
            role="tablist"
            aria-label="Course workspace sections"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-xl"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'syllabus'}
              onClick={() => {
                setShowPrintableSummary(false);
                setActiveTab('syllabus');
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] ${
                activeTab === 'syllabus'
                  ? 'bg-white text-[#0B1F3A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              Course Syllabus (Modules 1–4)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'lesson'}
              onClick={() => {
                setShowPrintableSummary(false);
                setActiveTab('lesson');
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] ${
                activeTab === 'lesson'
                  ? 'bg-white text-[#0B1F3A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              Lesson Reader &amp; Quiz ({totalLessonsCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'assignments'}
              onClick={() => setActiveTab('assignments')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[40px] ${
                activeTab === 'assignments'
                  ? 'bg-white text-[#0B1F3A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              Practical Assignments &amp; Capstone
            </button>
          </div>
        </section>

        {/* TAB 1: CLICKABLE MODULES 1-4 SYLLABUS */}
        {activeTab === 'syllabus' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
              <p className="text-sm text-slate-600">
                Click any lesson below to open its full reading guide, worked
                examples, and 3-question knowledge check.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('assignments');
                  setShowPrintableSummary(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F766E] hover:text-[#0B1F3A] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                Open Low-Bandwidth / Printable Study Summary
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {pathway.modules.map((mod) => {
                const modLessons = lessons.filter(
                  (l) => l.moduleOrder === mod.order
                );
                const modCompletedCount = modLessons.filter((l) =>
                  completedSet.has(l.id)
                ).length;

                return (
                  <article
                    key={mod.id}
                    className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                      <div>
                        <p className="font-mono text-xs text-[#0F766E] tabular-nums">
                          Module 0{mod.order} · {mod.durationWeeks} Weeks ·{' '}
                          {mod.estimatedHours} Study Hours · {modCompletedCount}/
                          {modLessons.length || mod.lessons.length} Completed
                        </p>
                        <h2 className="font-display text-lg sm:text-xl font-bold text-[#0B1F3A] mt-1">
                          {mod.title}
                        </h2>
                      </div>
                      <p className="text-xs font-medium text-slate-500">
                        Deliverable: {mod.deliverable}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                      <div className="lg:col-span-7 space-y-2.5">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Interactive Module Lessons
                        </h3>
                        <div className="space-y-2">
                          {modLessons.map((lessonItem) => {
                            const done = completedSet.has(lessonItem.id);
                            return (
                              <button
                                key={lessonItem.id}
                                type="button"
                                onClick={() => handleOpenLesson(lessonItem.id)}
                                className="w-full text-left rounded-xl border border-slate-200 hover:border-[#0D9488] hover:bg-[#F7F9FC] px-4 py-3 flex items-center justify-between gap-3 transition-colors cursor-pointer group min-h-[46px]"
                              >
                                <span className="flex items-start gap-2.5 min-w-0">
                                  {done ? (
                                    <CheckCircle2
                                      className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <Circle
                                      className="w-4 h-4 text-slate-400 group-hover:text-[#0D9488] shrink-0 mt-0.5"
                                      aria-hidden="true"
                                    />
                                  )}
                                  <span className="text-sm font-medium text-[#0B1F3A] leading-snug">
                                    <span className="font-mono text-xs text-slate-500 mr-1.5 tabular-nums">
                                      Lesson {lessonItem.lessonNumber}:
                                    </span>
                                    {lessonItem.title}
                                  </span>
                                </span>

                                <span className="text-xs font-semibold text-[#0F766E] whitespace-nowrap shrink-0 flex items-center gap-1 tabular-nums">
                                  {done
                                    ? 'Completed'
                                    : `${lessonItem.estimatedMinutes} min`}
                                  <ChevronRight
                                    className="w-3.5 h-3.5"
                                    aria-hidden="true"
                                  />
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-[#F7F9FC] p-4 flex flex-col justify-between gap-4">
                        <div className="space-y-1.5">
                          <h3 className="text-xs font-bold text-[#0B1F3A]">
                            Practical Module Project
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {mod.projectDescription}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setShowPrintableSummary(false);
                            setActiveTab('assignments');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] hover:text-[#0F766E] cursor-pointer self-start"
                        >
                          View Assignment Steps &amp; Rubric
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Capstone & Certification Readiness */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
                  Final Assessment
                </p>
                <h3 className="font-display text-lg font-bold text-[#0B1F3A]">
                  Capstone Competency Project
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pathway.practicalCapstone}
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
                  <Award className="w-4 h-4" aria-hidden="true" />
                  <span>Skill Milestone &amp; Partner Pathway</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B1F3A]">
                  {pathway.skillBadgeTitle}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pathway.partnerRecognitionNote} Formal recognized
                  certifications are issued solely through accredited
                  institutions and approved awarding partners.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FULL MULTI-LESSON READER & INTERACTIVE QUIZ */}
        {activeTab === 'lesson' && activeLesson && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Lesson Navigator Sidebar (Modules 1-4) */}
            <aside
              aria-label="Course lessons navigation"
              className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 space-y-4 lg:sticky lg:top-20"
            >
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between gap-2">
                <h2 className="font-display text-sm font-bold text-[#0B1F3A]">
                  All Pathway Lessons
                </h2>
                <span className="font-mono text-xs text-[#0F766E] tabular-nums">
                  {completedCount}/{totalLessonsCount} Done
                </span>
              </div>

              <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-1">
                {pathway.modules.map((mod) => {
                  const modLessons = lessons.filter(
                    (l) => l.moduleOrder === mod.order
                  );
                  return (
                    <div key={mod.id} className="space-y-1.5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-2">
                        Module 0{mod.order} · {mod.title}
                      </p>
                      <div className="space-y-1">
                        {modLessons.map((item) => {
                          const isCurrent = item.id === activeLesson.id;
                          const isDone = completedSet.has(item.id);
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => handleOpenLesson(item.id)}
                              aria-current={isCurrent ? 'page' : undefined}
                              className={`w-full text-left px-3 py-2.5 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 transition-colors cursor-pointer ${
                                isCurrent
                                  ? 'bg-[#0B1F3A] text-white font-semibold'
                                  : 'text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              {isDone ? (
                                <CheckCircle2
                                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                                    isCurrent
                                      ? 'text-teal-300'
                                      : 'text-[#0F766E]'
                                  }`}
                                  aria-hidden="true"
                                />
                              ) : (
                                <Circle
                                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                                    isCurrent
                                      ? 'text-slate-300'
                                      : 'text-slate-400'
                                  }`}
                                  aria-hidden="true"
                                />
                              )}
                              <span className="leading-snug">
                                <span
                                  className={`font-mono mr-1.5 tabular-nums ${
                                    isCurrent
                                      ? 'text-teal-300'
                                      : 'text-slate-400'
                                  }`}
                                >
                                  {item.lessonNumber}
                                </span>
                                {item.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </aside>

            {/* Main Lesson Reader & Quiz Column */}
            <div className="lg:col-span-8 space-y-6">
              <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
                <div className="pb-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-[#0F766E] tabular-nums">
                      Module 0{activeLesson.moduleOrder} · Lesson{' '}
                      {activeLesson.lessonNumber} ·{' '}
                      {activeLesson.estimatedMinutes} min study time
                    </p>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F3A]">
                      {activeLesson.title}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleToggleComplete(activeLesson.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[42px] ${
                      isCurrentLessonComplete
                        ? 'bg-[#F0FDFA] text-[#0F766E] border-teal-300 hover:bg-teal-100/70'
                        : 'bg-[#0B1F3A] text-white border-[#0B1F3A] hover:bg-[#122D52]'
                    }`}
                  >
                    {isCurrentLessonComplete ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                        Lesson Completed
                      </>
                    ) : (
                      <>
                        <Circle className="w-4 h-4" aria-hidden="true" />
                        Mark Lesson Complete
                      </>
                    )}
                  </button>
                </div>

                {/* Learning Objectives */}
                <div className="rounded-xl border border-slate-200 bg-[#F7F9FC] p-5 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                    Learning Objectives
                  </h3>
                  <ul className="space-y-1.5">
                    {activeLesson.learningObjectives.map((obj) => (
                      <li
                        key={obj}
                        className="text-sm text-slate-700 flex items-start gap-2 leading-relaxed"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Educational Sections + Code / Templates */}
                <div className="space-y-6 max-w-prose">
                  {activeLesson.sections.map((section) => (
                    <section key={section.heading} className="space-y-3">
                      <h3 className="font-display text-lg font-bold text-[#0B1F3A]">
                        {section.heading}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {section.body}
                      </p>

                      {section.exampleOrTemplate && (
                        <div className="rounded-xl border border-slate-200 bg-slate-950 text-slate-100 overflow-hidden">
                          <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-teal-300">
                            {section.exampleOrTemplate.label}
                          </div>
                          <pre className="p-4 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed whitespace-pre-wrap">
                            <code>{section.exampleOrTemplate.content}</code>
                          </pre>
                        </div>
                      )}

                      {section.keyTakeaway && (
                        <div className="rounded-xl border border-teal-200 bg-[#F0FDFA] p-4 text-sm text-[#0F766E]">
                          <span className="font-semibold text-[#0B1F3A]">
                            Key Takeaway:{' '}
                          </span>
                          {section.keyTakeaway}
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              </article>

              {/* Interactive 3-Question Self-Check Quiz */}
              <section
                aria-labelledby="self-check-heading"
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#0F766E] mb-1">
                      Interactive Knowledge Check · Lesson{' '}
                      {activeLesson.lessonNumber}
                    </p>
                    <h3
                      id="self-check-heading"
                      className="font-display text-xl font-bold text-[#0B1F3A]"
                    >
                      3-Question Self-Check Quiz
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    <p className="text-sm font-medium text-slate-700 tabular-nums">
                      {answeredCount} / {quizQuestions.length} Answered ·{' '}
                      <span className="font-bold text-[#0F766E]">
                        {correctCount} Correct
                      </span>
                    </p>
                    {answeredCount > 0 && (
                      <button
                        type="button"
                        onClick={handleResetLessonQuiz}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                        Reset
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  {quizQuestions.map((q, qIdx) => {
                    const chosenIndex = selectedAnswers[q.id];
                    const isAnswered = chosenIndex !== undefined;
                    const isCorrect = chosenIndex === q.correctIndex;

                    return (
                      <div
                        key={q.id}
                        className="rounded-xl border border-slate-200 p-5 space-y-3"
                      >
                        <p className="font-display text-base font-bold text-[#0B1F3A]">
                          {qIdx + 1}. {q.question}
                        </p>

                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => {
                            const isSelected = chosenIndex === optIdx;
                            const isRightOption = optIdx === q.correctIndex;

                            let buttonStyle =
                              'border-slate-200 bg-white text-slate-700 hover:border-[#0D9488]';
                            if (isAnswered) {
                              if (isRightOption) {
                                buttonStyle =
                                  'border-teal-500 bg-[#F0FDFA] text-[#0B1F3A] font-medium';
                              } else if (isSelected && !isRightOption) {
                                buttonStyle =
                                  'border-red-300 bg-red-50 text-red-900';
                              } else {
                                buttonStyle =
                                  'border-slate-200 bg-slate-50 text-slate-500';
                              }
                            }

                            return (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => handleSelectOption(q.id, optIdx)}
                                className={`w-full text-left px-4 py-3 text-sm rounded-xl border transition-colors cursor-pointer min-h-[44px] flex items-start gap-3 ${buttonStyle}`}
                              >
                                <span className="font-mono text-xs text-slate-500 mt-0.5 shrink-0">
                                  {String.fromCharCode(65 + optIdx)}.
                                </span>
                                <span className="flex-1">{opt}</span>
                              </button>
                            );
                          })}
                        </div>

                        {isAnswered && (
                          <div
                            role="status"
                            className={`rounded-xl border p-4 flex items-start gap-3 text-sm ${
                              isCorrect
                                ? 'border-teal-200 bg-[#F0FDFA] text-slate-800'
                                : 'border-amber-200 bg-amber-50 text-slate-800'
                            }`}
                          >
                            {isCorrect ? (
                              <CheckCircle2
                                className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                            ) : (
                              <XCircle
                                className="w-5 h-5 text-amber-800 shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                            )}
                            <div className="space-y-1">
                              <p className="font-semibold text-[#0B1F3A]">
                                {isCorrect ? 'Correct' : 'Review Concept'}
                              </p>
                              <p className="text-slate-700 leading-relaxed">
                                {q.explanation}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Completion & Lesson Navigation Bar */}
                <div className="pt-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    disabled={!prevLesson}
                    onClick={() => prevLesson && handleOpenLesson(prevLesson.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-slate-700 border border-slate-300 rounded-xl hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer min-h-[44px]"
                  >
                    <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                    Previous Lesson
                  </button>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleToggleComplete(activeLesson.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl border transition-colors cursor-pointer min-h-[44px] ${
                        isCurrentLessonComplete
                          ? 'bg-[#F0FDFA] text-[#0F766E] border-teal-300'
                          : 'bg-[#0F766E] text-white border-[#0F766E] hover:bg-[#0D9488]'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                      {isCurrentLessonComplete
                        ? 'Completed (Saved)'
                        : 'Mark Lesson Complete'}
                    </button>

                    {nextLesson ? (
                      <button
                        type="button"
                        onClick={() => handleOpenLesson(nextLesson.id)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl cursor-pointer min-h-[44px]"
                      >
                        Next: Lesson {nextLesson.lessonNumber}
                        <ChevronRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setShowPrintableSummary(false);
                          setActiveTab('assignments');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl cursor-pointer min-h-[44px]"
                      >
                        Go to Capstone &amp; Rubric
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* TAB 3: PRACTICAL ASSIGNMENTS, GRADING RUBRIC & PRINTABLE STUDY SUMMARY */}
        {activeTab === 'assignments' && assignments && (
          <div className="space-y-6">
            {/* Mode Switcher Bar */}
            <div className="no-print bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#0F766E]">
                  Competency Assessment &amp; Offline Access
                </p>
                <p className="text-sm text-slate-600">
                  Review step-by-step project briefs, mentor grading criteria,
                  or switch to a clean low-bandwidth printable study summary.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setShowPrintableSummary((prev) => !prev)
                  }
                  className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl border transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[42px] ${
                    showPrintableSummary
                      ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
                      : 'bg-white text-[#0B1F3A] border-slate-300 hover:border-[#0D9488]'
                  }`}
                >
                  <FileText className="w-4 h-4" aria-hidden="true" />
                  {showPrintableSummary
                    ? 'Interactive Assignments View'
                    : 'Low-Bandwidth / Printable Study Summary'}
                </button>

                {showPrintableSummary && (
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0D9488] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[42px]"
                  >
                    <Printer className="w-4 h-4" aria-hidden="true" />
                    Print / Save PDF
                  </button>
                )}
              </div>
            </div>

            {showPrintableSummary ? (
              /* LOW-BANDWIDTH / PRINTABLE STUDY SUMMARY VIEW */
              <article className="print-container bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 space-y-8">
                <header className="pb-6 border-b border-slate-200 space-y-2">
                  <p className="font-mono text-xs text-slate-500">
                    Global Skills Passport (GSP) · {pathway.code} · Study
                    Summary Packet
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B1F3A]">
                    {pathway.title} — Complete Module &amp; Capstone Summary
                  </h2>
                  <p className="text-sm text-slate-700 leading-relaxed max-w-prose">
                    {pathway.summary} Duration: {pathway.estimatedWeeks} weeks (
                    {totalStudyHours} study hours across 4 modules and 12
                    lessons).
                  </p>
                </header>

                {/* Condensed Modules 1-4 Objectives & Takeaways */}
                <section className="space-y-6">
                  <h3 className="font-display text-lg font-bold text-[#0B1F3A]">
                    1. Core Lessons &amp; Key Takeaways (Modules 1–4)
                  </h3>
                  {pathway.modules.map((mod) => {
                    const modLessons = lessons.filter(
                      (l) => l.moduleOrder === mod.order
                    );
                    return (
                      <div
                        key={mod.id}
                        className="space-y-3 pb-5 border-b border-slate-200 last:border-b-0"
                      >
                        <h4 className="font-display text-base font-bold text-[#0B1F3A]">
                          Module 0{mod.order}: {mod.title} ({mod.estimatedHours}h
                          · Deliverable: {mod.deliverable})
                        </h4>
                        <div className="space-y-3 pl-3">
                          {modLessons.map((lessonItem) => (
                            <div key={lessonItem.id} className="space-y-1">
                              <p className="text-sm font-semibold text-[#0B1F3A]">
                                Lesson {lessonItem.lessonNumber}:{' '}
                                {lessonItem.title} (
                                {lessonItem.estimatedMinutes} min)
                              </p>
                              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-0.5">
                                {lessonItem.learningObjectives.map((obj) => (
                                  <li key={obj}>{obj}</li>
                                ))}
                              </ul>
                              {lessonItem.sections
                                .filter((s) => s.keyTakeaway)
                                .map((s) => (
                                  <p
                                    key={s.heading}
                                    className="text-xs sm:text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2"
                                  >
                                    <span className="font-semibold">
                                      Key Takeaway:{' '}
                                    </span>
                                    {s.keyTakeaway}
                                  </p>
                                ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </section>

                {/* Module Assignment Briefs */}
                <section className="space-y-4">
                  <h3 className="font-display text-lg font-bold text-[#0B1F3A]">
                    2. Module Practical Assignments
                  </h3>
                  <div className="space-y-4">
                    {assignments.moduleAssignments.map((brief) => (
                      <div
                        key={brief.moduleOrder}
                        className="border border-slate-200 rounded-xl p-4 space-y-2"
                      >
                        <p className="text-sm font-bold text-[#0B1F3A]">
                          Module 0{brief.moduleOrder}: {brief.title} (
                          {brief.estimatedHours}h · {brief.deliverable})
                        </p>
                        <ol className="list-decimal pl-5 text-xs sm:text-sm text-slate-700 space-y-1">
                          {brief.steps.map((step) => (
                            <li key={step}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Capstone Brief */}
                <section className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-[#0B1F3A]">
                    3. Final Capstone Project: {assignments.capstoneTitle}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {assignments.capstoneOverview}
                  </p>
                  <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-1">
                    {assignments.capstoneSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-600 pt-2">
                    Submission Verification Checklist
                  </p>
                  <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-1">
                    {assignments.submissionChecklist.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                {/* Rubric Summary */}
                <section className="space-y-3">
                  <h3 className="font-display text-lg font-bold text-[#0B1F3A]">
                    4. Mentor &amp; Partner Evaluation Rubric (100%)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-slate-300 text-[#0B1F3A]">
                          <th className="py-2 pr-4 font-bold">Criterion</th>
                          <th className="py-2 pr-4 font-bold tabular-nums">
                            Weight
                          </th>
                          <th className="py-2 pr-4 font-bold">
                            Competent Standard
                          </th>
                          <th className="py-2 font-bold">
                            Distinction Standard
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {assignments.gradingRubric.map((row) => (
                          <tr
                            key={row.criterion}
                            className="border-b border-slate-200 align-top"
                          >
                            <td className="py-2.5 pr-4 font-semibold text-[#0B1F3A]">
                              {row.criterion}
                            </td>
                            <td className="py-2.5 pr-4 font-mono tabular-nums">
                              {row.weightPercent}%
                            </td>
                            <td className="py-2.5 pr-4 text-slate-700">
                              {row.competentStandard}
                            </td>
                            <td className="py-2.5 text-slate-700">
                              {row.distinctionStandard}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </article>
            ) : (
              /* INTERACTIVE PRACTICAL ASSIGNMENTS, CAPSTONE & RUBRIC VIEW */
              <div className="space-y-6">
                {/* Capstone Competency Project Brief */}
                <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
                  <div className="space-y-2 pb-5 border-b border-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#0F766E]">
                      Final Competency Assessment · {pathway.code}
                    </p>
                    <h2 className="font-display text-2xl font-bold text-[#0B1F3A]">
                      Capstone Project: {assignments.capstoneTitle}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
                      {assignments.capstoneOverview}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                        Step-by-Step Capstone Requirements
                      </h3>
                      <ol className="space-y-3">
                        {assignments.capstoneSteps.map((step, idx) => (
                          <li
                            key={step}
                            className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed"
                          >
                            <span className="w-6 h-6 rounded-full bg-[#0B1F3A] text-white font-mono text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5 tabular-nums">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="lg:col-span-5 rounded-xl border border-slate-200 bg-[#F7F9FC] p-5 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                        <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
                        <span>Pre-Submission Checklist</span>
                      </div>
                      <ul className="space-y-2.5">
                        {assignments.submissionChecklist.map((check) => (
                          <li
                            key={check}
                            className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{check}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Module 1-4 Practical Assignment Briefs */}
                <section className="space-y-4">
                  <div className="px-1">
                    <h3 className="font-display text-xl font-bold text-[#0B1F3A]">
                      Modules 1–4 Practical Assignment Briefs
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Each module culminates in an applied artifact demonstrating
                      job-ready execution prior to your capstone.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {assignments.moduleAssignments.map((brief) => (
                      <article
                        key={brief.moduleOrder}
                        className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#0F766E] tabular-nums">
                            <span>Module 0{brief.moduleOrder} Brief</span>
                            <span>~{brief.estimatedHours} Hours</span>
                          </div>
                          <div>
                            <h4 className="font-display text-lg font-bold text-[#0B1F3A]">
                              {brief.title}
                            </h4>
                            <p className="text-xs font-medium text-slate-500 mt-0.5">
                              Deliverable: {brief.deliverable}
                            </p>
                          </div>

                          <ol className="space-y-2 pt-2 border-t border-slate-100">
                            {brief.steps.map((step, sIdx) => (
                              <li
                                key={step}
                                className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed"
                              >
                                <span className="font-mono text-xs font-semibold text-[#0F766E] mt-0.5 shrink-0 tabular-nums">
                                  0{sIdx + 1}.
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>

                {/* Mentor & Partner Grading Rubric */}
                <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-200">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#0F766E] mb-1">
                        Transparent Evaluation Standards
                      </p>
                      <h3 className="font-display text-xl font-bold text-[#0B1F3A]">
                        Mentor &amp; Partner Grading Rubric
                      </h3>
                    </div>
                    <p className="font-mono text-xs text-slate-500 tabular-nums">
                      Total Assessment Weight: {totalRubricWeight}%
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                          <th className="py-3 pr-4 font-semibold">
                            Competency Criterion
                          </th>
                          <th className="py-3 pr-4 font-semibold tabular-nums">
                            Weight
                          </th>
                          <th className="py-3 pr-4 font-semibold">
                            Competent (Pass)
                          </th>
                          <th className="py-3 font-semibold">Distinction</th>
                        </tr>
                      </thead>
                      <tbody>
                        {assignments.gradingRubric.map((row) => (
                          <tr
                            key={row.criterion}
                            className="border-b border-slate-100 align-top"
                          >
                            <td className="py-4 pr-4 font-semibold text-[#0B1F3A] min-w-[180px]">
                              {row.criterion}
                            </td>
                            <td className="py-4 pr-4 font-mono text-sm font-semibold text-[#0F766E] tabular-nums whitespace-nowrap">
                              {row.weightPercent}%
                            </td>
                            <td className="py-4 pr-4 text-slate-700 leading-relaxed min-w-[220px]">
                              {row.competentStandard}
                            </td>
                            <td className="py-4 text-slate-700 leading-relaxed min-w-[220px]">
                              {row.distinctionStandard}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
