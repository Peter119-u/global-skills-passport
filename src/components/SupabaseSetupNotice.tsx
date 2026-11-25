import { ArrowRight, BookOpen, Clock } from 'lucide-react';

interface SupabaseSetupNoticeProps {
  onExploreAcademy?: () => void;
}

export function SupabaseSetupNotice({
  onExploreAcademy,
}: SupabaseSetupNoticeProps) {
  return (
    <div
      role="status"
      className="rounded-xl border border-slate-200 bg-white p-5 text-slate-800 space-y-3.5 shadow-xs"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#F0FDFA] border border-teal-200 text-[#0F766E] flex items-center justify-center shrink-0">
          <Clock className="w-4 h-4" aria-hidden="true" />
        </div>
        <div className="space-y-1.5">
          <h2 className="font-display text-sm font-bold text-[#0B1F3A]">
            Student Portal Launching Soon
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Student Portal Launching Soon: Live account creation and
            personalized dashboards are opening in Phase 2. Explore our full
            Learning Academy and course previews below.
          </p>
        </div>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed">
        All form validation remains active so learners and partners can preview
        the registration and sign-in experience smoothly.
      </p>

      {onExploreAcademy && (
        <button
          type="button"
          onClick={onExploreAcademy}
          className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0F766E] hover:bg-[#0D9488] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[42px]"
        >
          <BookOpen className="w-4 h-4" aria-hidden="true" />
          Explore Learning Academy
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
