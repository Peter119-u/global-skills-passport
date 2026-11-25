import { Globe2 } from 'lucide-react';
import { SDG_ALIGNMENTS } from '../data/platformContent';

export function ImpactSection() {
  return (
    <section id="impact" className="py-16 lg:py-24 bg-[#0B1F3A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-teal-300 mb-3">
              <Globe2 className="w-4 h-4" aria-hidden="true" />
              <span>United Nations Sustainable Development Goals</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance mb-3">
              Measurable Alignment &amp; Transparent Impact Reporting
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              Our curriculum and institutional governance are built in alignment
              with five core UN Sustainable Development Goals. Verified outcome
              figures will be published transparently once initial learner cohorts
              complete assessment.
            </p>
          </div>

          <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs text-slate-200 max-w-sm">
            <p className="font-semibold text-teal-300 mb-1">
              Reporting Integrity Notice
            </p>
            <p className="leading-relaxed text-slate-300">
              Below are illustrative reporting placeholders showing how cohort
              outcomes will be tracked in Phase 2. No live partnerships or
              synthetic statistics are claimed prior to launch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {SDG_ALIGNMENTS.map((sdg) => (
            <div
              key={sdg.number}
              className="rounded-xl border border-white/15 bg-[#122D52] p-5 flex flex-col justify-between"
            >
              <div>
                <p className="font-mono text-xs text-teal-300 tabular-nums mb-2">
                  SDG {sdg.number}
                </p>
                <h3 className="font-display text-lg font-bold text-white mb-2.5">
                  {sdg.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {sdg.alignmentSummary}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-[11px] font-medium text-slate-400 mb-1">
                  {sdg.placeholderMetricLabel}
                </p>
                <p className="font-mono text-xs font-medium text-teal-300 tabular-nums">
                  {sdg.placeholderValue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
