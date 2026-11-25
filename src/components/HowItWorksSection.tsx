import { HOW_IT_WORKS_STAGES } from '../data/platformContent';

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] mb-3">
            Structured Learner Journey
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A] text-balance mb-4">
            How Global Skills Passport Works
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From accessible registration to verified portfolio mastery and global
            employer connections, every learner follows six transparent stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_IT_WORKS_STAGES.map((stage) => (
            <div
              key={stage.stepNumber}
              className="rounded-xl border border-slate-200 bg-[#F7F9FC] p-6 flex flex-col justify-between transition-colors duration-150 hover:border-[#0D9488]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="font-display text-2xl font-bold text-[#0D9488] tabular-nums">
                    {stage.stepNumber}.
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {stage.actor}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#0B1F3A] mb-2.5">
                  {stage.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
