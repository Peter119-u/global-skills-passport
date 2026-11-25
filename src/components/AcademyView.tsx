import { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Layers, Search } from 'lucide-react';
import { PATHWAY_LESSONS } from '../data/lessonsRegistry';
import { LEARNING_PATHWAYS } from '../data/platformContent';
import { readProgressMap } from '../lib/progressStorage';
import type { LearningPathway, PathwayCategory, PortalAccessIntent, PublicPageId } from '../types/platform';
import { PathwayCourseView, type CourseViewTab } from './PathwayCourseView';

interface AcademyViewProps {
  initialPathway?: LearningPathway | null;
  initialTab?: CourseViewTab;
  onClearInitialPathway?: () => void;
  onBackHome: () => void;
  onNavigatePage: (page: PublicPageId, sectionId?: string) => void;
  onOpenPortalModal: (intent: PortalAccessIntent) => void;
}

export function AcademyView({
  initialPathway = null,
  initialTab = 'syllabus',
  onClearInitialPathway,
  onBackHome,
  onNavigatePage,
  onOpenPortalModal,
}: AcademyViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState<PathwayCategory>('all');
  const [activePathway, setActivePathway] = useState<LearningPathway | null>(
    initialPathway
  );
  const [activeCourseTab, setActiveCourseTab] =
    useState<CourseViewTab>(initialTab);
  const [progressMap, setProgressMap] = useState(() => readProgressMap());

  const refreshProgress = () => {
    setProgressMap(readProgressMap());
  };

  const openCourse = (
    pathway: LearningPathway,
    tab: CourseViewTab = 'syllabus'
  ) => {
    setActiveCourseTab(tab);
    setActivePathway(pathway);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (activePathway) {
    return (
      <PathwayCourseView
        key={`${activePathway.id}-${activeCourseTab}`}
        pathway={activePathway}
        initialTab={activeCourseTab}
        onBackAcademy={() => {
          refreshProgress();
          setActivePathway(null);
          onClearInitialPathway?.();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigatePage={onNavigatePage}
        onProgressChange={refreshProgress}
        onStartPathwayAction={() =>
          onOpenPortalModal({
            mode: 'pathway_cohort',
            pathwayTitle: activePathway.title,
          })
        }
      />
    );
  }

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filtered = LEARNING_PATHWAYS.filter((pathway) => {
    const matchesCategory =
      category === 'all' || pathway.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;
    return (
      pathway.title.toLowerCase().includes(normalizedQuery) ||
      pathway.summary.toLowerCase().includes(normalizedQuery) ||
      pathway.coreSkills.some((skill) =>
        skill.toLowerCase().includes(normalizedQuery)
      )
    );
  });

  return (
    <main className="bg-[#F7F9FC] min-h-[75vh] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0B1F3A] mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Home Overview
        </button>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-2">
                Global Skills Passport Academy
              </p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A] text-balance mb-3">
                Open Curriculum &amp; Self-Paced Lessons
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">
                Start studying any of the eight professional pathways
                immediately—no account required. Read full Modules 1–4 lessons,
                check your knowledge with interactive quizzes, track progress
                locally, and review capstone grading rubrics.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenPortalModal({ mode: 'start_learning' })}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
            >
              Register for Phase 2 Cohorts
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Search & Category Controls */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            <div className="relative flex-1 max-w-md">
              <Search
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pathways or skills (e.g. SQL, Agile, AI)..."
                aria-label="Search learning pathways"
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#F7F9FC] border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:border-[#0D9488] focus:bg-white focus:outline-none min-h-[44px]"
              />
            </div>

            <div
              role="tablist"
              aria-label="Academy pathway category filter"
              className="inline-flex items-center gap-1 p-1 bg-slate-100 rounded-xl self-start md:self-auto"
            >
              <button
                type="button"
                role="tab"
                aria-selected={category === 'all'}
                onClick={() => setCategory('all')}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  category === 'all'
                    ? 'bg-white text-[#0B1F3A] shadow-xs'
                    : 'text-slate-600 hover:text-[#0B1F3A]'
                }`}
              >
                All ({LEARNING_PATHWAYS.length})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={category === 'technology'}
                onClick={() => setCategory('technology')}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  category === 'technology'
                    ? 'bg-white text-[#0B1F3A] shadow-xs'
                    : 'text-slate-600 hover:text-[#0B1F3A]'
                }`}
              >
                Technology &amp; Data
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={category === 'business_design'}
                onClick={() => setCategory('business_design')}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  category === 'business_design'
                    ? 'bg-white text-[#0B1F3A] shadow-xs'
                    : 'text-slate-600 hover:text-[#0B1F3A]'
                }`}
              >
                Business &amp; Design
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-3" aria-hidden="true" />
            <h2 className="font-display text-lg font-bold text-[#0B1F3A] mb-1">
              No matching learning pathways found
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Try clearing your search filter or viewing all eight pathways.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setCategory('all');
              }}
              className="px-4 py-2 text-sm font-semibold text-[#0B1F3A] border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((pathway) => {
              const totalHours = pathway.modules.reduce(
                (acc, mod) => acc + mod.estimatedHours,
                0
              );
              const pathwayLessons = PATHWAY_LESSONS[pathway.id] ?? [];
              const totalLessons = pathwayLessons.length || 12;
              const completedIds = new Set(progressMap[pathway.id] ?? []);
              const completedCount = pathwayLessons.filter((l) =>
                completedIds.has(l.id)
              ).length;
              const progressPct = Math.round(
                (completedCount / totalLessons) * 100
              );

              return (
                <article
                  key={pathway.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 text-xs text-slate-500 mb-3">
                      <span className="font-semibold text-[#0F766E]">
                        {pathway.categoryLabel}
                      </span>
                      <span className="font-mono tabular-nums">{pathway.code}</span>
                    </div>

                    <h2 className="font-display text-xl font-bold text-[#0B1F3A] mb-2.5">
                      {pathway.title}
                    </h2>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {pathway.summary}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 mb-5 tabular-nums">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#0D9488]" aria-hidden="true" />
                        {pathway.estimatedWeeks} Weeks · {totalHours} Hours
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#0D9488]" aria-hidden="true" />
                        {pathway.modules.length} Modules · {totalLessons} Lessons
                      </span>
                      <span>{pathway.level}</span>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-[#0B1F3A] mb-1.5">
                          Core Competencies Covered
                        </p>
                        <p className="text-sm text-slate-600">
                          {pathway.coreSkills.join(' · ')}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs tabular-nums">
                          <span className="font-medium text-slate-600">
                            Local Study Progress
                          </span>
                          <span className="font-semibold text-[#0F766E]">
                            {completedCount} / {totalLessons} Lessons ·{' '}
                            {progressPct}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full bg-[#0D9488] transition-all duration-300"
                            style={{ width: `${progressPct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => openCourse(pathway, 'syllabus')}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1F3A] hover:text-[#0F766E] cursor-pointer min-h-[40px]"
                      >
                        Syllabus &amp; Lessons
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => openCourse(pathway, 'assignments')}
                        className="text-xs font-semibold text-slate-600 hover:text-[#0B1F3A] cursor-pointer min-h-[40px]"
                      >
                        Capstone &amp; Rubric
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => openCourse(pathway, 'lesson')}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#0F766E] hover:bg-[#0D9488] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[40px]"
                    >
                      {completedCount > 0 ? 'Continue Studying' : 'Start Lesson 1.1'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
