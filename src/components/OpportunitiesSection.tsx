import { ArrowUpRight, Briefcase, Compass, GraduationCap, Network, Users2 } from 'lucide-react';
import { OPPORTUNITIES_IMAGE_PATH, OPPORTUNITY_TRACKS } from '../data/platformContent';
import type { PortalAccessIntent } from '../types/platform';
import { ResilientImage } from './ResilientImage';

interface OpportunitiesSectionProps {
  onConnectOpportunities: (intent: PortalAccessIntent) => void;
  onOpenPartners?: () => void;
}

const TRACK_ICONS: Record<string, typeof Users2> = {
  mentorship: Users2,
  internships: Compass,
  'remote-employment': Briefcase,
  networking: Network,
  'further-education': GraduationCap,
};

export function OpportunitiesSection({
  onConnectOpportunities,
  onOpenPartners,
}: OpportunitiesSectionProps) {
  return (
    <section id="opportunities" className="py-16 lg:py-24 bg-[#F7F9FC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-3">
              Beyond the Classroom
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A] text-balance mb-4">
              Global Opportunities Without Geographic Limits
            </h2>
            <p className="text-base leading-relaxed text-slate-600 max-w-xl mb-6">
              Education reaches its full promise when learners can translate verified
              skills into meaningful livelihoods. Global Skills Passport connects
              pathway graduates with mentors, remote internships, international
              employers, and university progression tracks.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  onOpenPartners
                    ? onOpenPartners()
                    : onConnectOpportunities({ mode: 'get_started' })
                }
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0D9488] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
              >
                Partner With Us or Become a Mentor
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onConnectOpportunities({ mode: 'get_started' })}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#0B1F3A] bg-white border border-slate-300 hover:border-[#0D9488] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[44px]"
              >
                Join as a Learner
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs aspect-[16/10]">
              <ResilientImage
                src={OPPORTUNITIES_IMAGE_PATH}
                alt="Diverse young professionals collaborating remotely in a bright international coworking space"
                className="w-full h-full object-cover"
                fallbackLabel="Global Employment & Mentorship"
              />
            </div>
          </div>
        </div>

        {/* 5 Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {OPPORTUNITY_TRACKS.map((track) => {
            const Icon = TRACK_ICONS[track.id] ?? Briefcase;
            return (
              <div
                key={track.id}
                className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-medium text-[#0F766E] mb-1">
                    {track.category}
                  </p>
                  <h3 className="font-display text-base font-bold text-[#0B1F3A] mb-2">
                    {track.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {track.description}
                  </p>
                </div>
                <p className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 leading-snug">
                  {track.readinessCriteria}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
