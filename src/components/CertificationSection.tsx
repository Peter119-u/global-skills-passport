import { Award, CheckCircle2, FileCheck2, Info } from 'lucide-react';
import { CERTIFICATION_IMAGE_PATH } from '../data/platformContent';
import type { PortalAccessIntent } from '../types/platform';
import { ResilientImage } from './ResilientImage';

interface CertificationSectionProps {
  onLearnMorePortal: (intent: PortalAccessIntent) => void;
  onOpenPartners?: () => void;
  onOpenVerify?: () => void;
}

const ASSESSMENT_PRINCIPLES = [
  {
    icon: FileCheck2,
    title: 'Competency-Based Practical Assessment',
    description:
      'Every pathway requires learners to submit real, evaluated deliverables—codebases, financial models, security audits, or design systems—reviewed against explicit industry rubrics.',
  },
  {
    icon: Award,
    title: 'Accredited Institutions & Awarding Partners',
    description:
      'Internationally recognized certification will be provided through formal agreements with accredited universities, vocational faculties, and approved awarding partners.',
  },
  {
    icon: CheckCircle2,
    title: 'Planned Verifiable Credential Registry',
    description:
      'In Phase 2, partner-issued qualifications and verified capstone portfolios will be anchored in a tamper-evident verification registry for employers and admissions officers.',
  },
];

export function CertificationSection({
  onLearnMorePortal,
  onOpenPartners,
  onOpenVerify,
}: CertificationSectionProps) {
  return (
    <section id="certifications" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Image Column */}
          <div className="lg:col-span-5 flex order-2 lg:order-1">
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs flex flex-col">
              <div className="flex-1 min-h-[280px] lg:min-h-[380px]">
                <ResilientImage
                  src={CERTIFICATION_IMAGE_PATH}
                  alt="Focused student completing a practical software engineering competency assessment on a laptop"
                  className="w-full h-full object-cover"
                  fallbackLabel="Competency-Based Assessment"
                />
              </div>
              <div className="p-5 bg-[#0B1F3A] text-white">
                <p className="text-xs font-medium text-teal-300 mb-1">
                  Qualification Integrity Standard
                </p>
                <p className="text-sm leading-relaxed text-slate-200">
                  Rigorous practical assessment designed to earn genuine trust from
                  employers and partner academic institutions.
                </p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-3">
              Credible Qualifications
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A] text-balance mb-4">
              Competency-Based Assessment &amp; Partner Certification
            </h2>
            <p className="text-base leading-relaxed text-slate-600 mb-8 max-w-2xl">
              Trust in a credential comes from transparency and rigorous evaluation.
              Global Skills Passport separates hands-on skill verification from
              formal academic awarding authority so learners and employers always
              know exactly what a qualification represents.
            </p>

            <div className="space-y-5 mb-8">
              {ASSESSMENT_PRINCIPLES.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F0FDFA] border border-teal-200 text-[#0F766E] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#0B1F3A] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Explicit Academic & Equivalency Transparency Notice */}
            <div className="rounded-xl border border-slate-200 bg-[#F7F9FC] p-5">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#0B1F3A] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-2">
                  <h4 className="font-display text-sm font-bold text-[#0B1F3A]">
                    Accreditation &amp; Degree Equivalency Disclosure
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Internationally recognized certifications will be provided
                    exclusively through accredited institutions and approved
                    awarding partners. Global Skills Passport&apos;s own
                    certificates of completion verify practical coursework and
                    assessment outcomes, and are not automatically equivalent to
                    university degrees or sovereign national qualifications.
                  </p>
                  <div className="pt-1 flex flex-wrap items-center gap-5">
                    {onOpenVerify && (
                      <button
                        type="button"
                        onClick={onOpenVerify}
                        className="text-xs font-semibold text-[#0F766E] hover:text-[#0B1F3A] underline underline-offset-4 cursor-pointer"
                      >
                        Verify a Learner Credential
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() =>
                        onOpenPartners
                          ? onOpenPartners()
                          : onLearnMorePortal({ mode: 'get_started' })
                      }
                      className="text-xs font-semibold text-[#0B1F3A] hover:text-[#0F766E] underline underline-offset-4 cursor-pointer"
                    >
                      Partner as an Awarding Institution
                    </button>
                    <button
                      type="button"
                      onClick={() => onLearnMorePortal({ mode: 'get_started' })}
                      className="text-xs font-semibold text-slate-600 hover:text-[#0B1F3A] underline underline-offset-4 cursor-pointer"
                    >
                      View Phase 2 Learner Portal Roadmap
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
