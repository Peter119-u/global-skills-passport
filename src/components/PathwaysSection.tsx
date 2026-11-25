import { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  BrainCircuit,
  Code2,
  FolderKanban,
  Megaphone,
  Palette,
  Shield,
} from 'lucide-react';
import { LEARNING_PATHWAYS } from '../data/platformContent';
import type { LearningPathway, PathwayCategory } from '../types/platform';

interface PathwaysSectionProps {
  onSelectPathway: (pathway: LearningPathway) => void;
  onExploreAcademy: () => void;
}

const PATHWAY_ICONS: Record<string, typeof Code2> = {
  'software-development': Code2,
  'artificial-intelligence': BrainCircuit,
  'data-science-analytics': BarChart3,
  cybersecurity: Shield,
  'digital-marketing': Megaphone,
  'business-entrepreneurship': Briefcase,
  'project-management': FolderKanban,
  'graphic-design': Palette,
};

export function PathwaysSection({
  onSelectPathway,
  onExploreAcademy,
}: PathwaysSectionProps) {
  const [activeCategory, setActiveCategory] = useState<PathwayCategory>('all');

  const filteredPathways =
    activeCategory === 'all'
      ? LEARNING_PATHWAYS
      : LEARNING_PATHWAYS.filter((p) => p.category === activeCategory);

  return (
    <section id="pathways" className="py-16 lg:py-24 bg-[#F7F9FC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Interactive Segmented Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-3">
              Learning Academy Pathways
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A] text-balance mb-3">
              Professional Learning Pathways
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Eight career-aligned disciplines structured around real-world projects,
              mentor feedback, and transparent competency standards.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter learning pathways by discipline"
            className="inline-flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl self-start lg:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
                activeCategory === 'all'
                  ? 'bg-white text-[#0B1F3A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              All Pathways (8)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'technology'}
              onClick={() => setActiveCategory('technology')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
                activeCategory === 'technology'
                  ? 'bg-white text-[#0B1F3A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              Technology &amp; Data
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'business_design'}
              onClick={() => setActiveCategory('business_design')}
              className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
                activeCategory === 'business_design'
                  ? 'bg-white text-[#0B1F3A] shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1F3A]'
              }`}
            >
              Business &amp; Design
            </button>
          </div>
        </div>

        {/* Pathway Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPathways.map((pathway) => {
            const Icon = PATHWAY_ICONS[pathway.id] ?? Code2;
            return (
              <button
                key={pathway.id}
                type="button"
                onClick={() => onSelectPathway(pathway)}
                className="group text-left bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between transition-all duration-150 hover:border-[#0D9488] hover:shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-[#0D9488]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#0B1F3A]/5 text-[#0B1F3A] group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-150 flex items-center justify-center">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 tabular-nums">
                      {pathway.code}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-[#0F766E] mb-1.5">
                    {pathway.categoryLabel}
                  </p>

                  <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-2.5 group-hover:text-[#0F766E] transition-colors">
                    {pathway.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {pathway.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 w-full space-y-3">
                  <p className="text-xs text-slate-500 tabular-nums">
                    {pathway.estimatedWeeks} Weeks · {pathway.modules.length} Modules · {pathway.level}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1F3A] group-hover:text-[#0F766E]">
                    Inspect Syllabus
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Academy Callout Link */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white rounded-xl border border-slate-200 p-6">
          <div>
            <h3 className="font-display text-base font-bold text-[#0B1F3A]">
              Compare full module syllabi and capstone requirements
            </h3>
            <p className="text-sm text-slate-600 mt-0.5">
              Browse the full Learning Academy catalog to review prerequisites,
              deliverables, and partner recognition notes.
            </p>
          </div>
          <button
            type="button"
            onClick={onExploreAcademy}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
          >
            Open Learning Academy
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
