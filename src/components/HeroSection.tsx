import { ArrowRight, BookOpen } from 'lucide-react';
import { HERO_IMAGE_PATH } from '../data/platformContent';
import type { PortalAccessIntent } from '../types/platform';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onStartLearning: (intent: PortalAccessIntent) => void;
  onExploreCourses: () => void;
}

const INSTITUTIONAL_PILLARS = [
  {
    label: 'Curriculum Scope',
    value: '8 Career Pathways',
    detail: 'Structured from foundational literacy to professional execution',
  },
  {
    label: 'Assessment Model',
    value: 'Competency-Reviewed',
    detail: 'Practical portfolio deliverables graded against industry rubrics',
  },
  {
    label: 'Credential Integrity',
    value: 'Partner-Aligned',
    detail: 'Recognized pathways developed with accredited awarding bodies',
  },
  {
    label: 'Opportunity Access',
    value: 'Global & Remote',
    detail: 'Mentorship, internships, remote work, and academic progression',
  },
];

export function HeroSection({
  onStartLearning,
  onExploreCourses,
}: HeroSectionProps) {
  return (
    <section id="top" className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-4">
              Global Skills Passport · Education Without Borders
            </p>

            <h1 className="font-display text-[clamp(2.2rem,3.8vw,3.45rem)] font-bold tracking-tight leading-[1.1] text-[#0B1F3A] text-balance mb-6">
              Your Talent Has No Borders. Your Future Shouldn&apos;t Either.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mb-8">
              Access world-class learning, develop practical professional skills,
              earn credible qualifications, and connect with global opportunities
              regardless of where your journey begins.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onStartLearning({ mode: 'start_learning' })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0B1F3A] hover:bg-[#122D52] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-sm min-h-[44px]"
              >
                Start Learning
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreCourses}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#0B1F3A] bg-white border border-slate-300 hover:border-[#0D9488] hover:text-[#0F766E] rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                Explore Courses
              </button>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-slate-500">
              Built for Refugee &amp; Displaced Learners · Professional Mentors · Global Employers · Accredited Institutions
            </p>
          </div>

          {/* Right Media Column */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
              <ResilientImage
                src={HERO_IMAGE_PATH}
                alt="Diverse African and international students collaborating around laptops inside a sunlit modern learning center"
                className="w-full h-full lg:h-full object-cover"
                fallbackLabel="Education Without Borders"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/45 via-transparent to-transparent pointer-events-none"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between gap-4 text-white">
                <p className="text-xs sm:text-sm font-medium drop-shadow-sm">
                  Collaborative cohort study and applied technology training across borders
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Institutional Summary Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {INSTITUTIONAL_PILLARS.map((pillar) => (
            <div key={pillar.label} className="space-y-1.5">
              <p className="text-xs font-medium text-slate-500">
                {pillar.label}
              </p>
              <p className="font-display text-lg font-bold text-[#0B1F3A] tabular-nums">
                {pillar.value}
              </p>
              <p className="text-sm text-slate-600 leading-snug">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
