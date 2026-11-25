import { Compass, Eye, ShieldCheck, Users } from 'lucide-react';
import { ABOUT_IMAGE_PATH, TARGET_AUDIENCE_GROUPS } from '../data/platformContent';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#F7F9FC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Narrative & Mission/Vision Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-3">
              About Global Skills Passport
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A] text-balance mb-5">
              Reducing Educational Inequality Across Borders
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-2xl">
              Millions of capable learners face interrupted schooling, unrecognized
              credentials, and geographic exclusion simply because of displacement.
              Global Skills Passport exists to dismantle those barriers by connecting
              structured, career-focused training with accountable assessment and
              international opportunity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] text-white flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-2">
                  Our Mission
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Deliver accessible, high-standard professional education, practical
                  competency training, and credible qualification pathways for
                  refugees and displaced communities worldwide.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#0D9488] text-white flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-2">
                  Our Vision
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  A world where displacement, nationality, financial circumstances, or
                  geography never prevent talented individuals from learning,
                  proving their ability, and building dignified careers.
                </p>
              </div>
            </div>
          </div>

          {/* Photography Column */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs flex flex-col">
              <div className="flex-1 min-h-[260px] lg:min-h-[340px]">
                <ResilientImage
                  src={ABOUT_IMAGE_PATH}
                  alt="Experienced professional mentor reviewing coursework on a laptop with two international adult learners"
                  className="w-full h-full object-cover"
                  fallbackLabel="Mentorship & Accessible Education"
                />
              </div>
              <div className="p-5 bg-white border-t border-slate-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  Designed for mobility and resilience: modular curricula, clear
                  competency standards, and human mentorship across regions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Serve — 5 Target User Groups */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-2">
                <Users className="w-4 h-4" aria-hidden="true" />
                <span>Ecosystem Participants</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#0B1F3A]">
                Who Global Skills Passport Serves
              </h3>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              A coordinated multi-stakeholder platform uniting learners, educators,
              employers, and accredited awarding institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {TARGET_AUDIENCE_GROUPS.map((group, idx) => (
              <div
                key={group.role}
                className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between"
              >
                <div>
                  <p className="font-mono text-xs text-slate-400 tabular-nums mb-2">
                    0{idx + 1}
                  </p>
                  <h4 className="font-display text-base font-bold text-[#0B1F3A] mb-2">
                    {group.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {group.description}
                  </p>
                </div>
                <p className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-[#0F766E]">
                  {group.primaryBenefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
