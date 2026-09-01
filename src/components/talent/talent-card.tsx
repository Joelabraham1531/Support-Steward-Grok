import { Link } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { Portrait } from "@/components/talent/portrait";
import { useDesk } from "@/lib/desk";
import { useT } from "@/lib/i18n";
import { type Candidate, fullName, roleOf, savingsPct } from "@/lib/talent";
import { gbp } from "@/lib/utils";

export function TalentCard({ candidate }: { candidate: Candidate; compact?: boolean }) {
  const ids = useDesk((s) => s.ids);
  const toggle = useDesk((s) => s.toggle);
  const saved = ids.includes(candidate.id);
  const t = useT();

  return (
    <article className="relative min-w-0 w-full overflow-hidden border border-line bg-surface">
      <span className="absolute inset-y-0 left-0 w-1 bg-accent" />
      <Link
        to="/talent/$id"
        params={{ id: candidate.id }}
        className="flex min-w-0 items-center gap-4 py-3 pl-5 pr-14"
      >
        <div className="size-14 shrink-0 overflow-hidden bg-sage sm:size-16">
          <Portrait candidate={candidate} className="size-full" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-heading text-lg text-navy">{fullName(candidate)}</h3>
          <p className="truncate text-sm text-muted">
            {roleOf(candidate)} · {candidate.city}, {candidate.country}
          </p>
        </div>
        <div className="hidden shrink-0 text-right sm:block">
          <p className="font-heading text-lg tabular-nums text-navy">{gbp(candidate.monthlyEur)}</p>
          <p className="text-xs text-muted">{t("talent.under", { pct: savingsPct(candidate) })}</p>
        </div>
      </Link>
      <p className="px-5 pb-3 font-heading text-base tabular-nums text-navy sm:hidden">
        {gbp(candidate.monthlyEur)}
        <span className="ml-1 font-sans text-xs text-faint">{t("talent.month")}</span>
      </p>
      <button
        type="button"
        aria-label={saved ? t("talent.unsave") : t("talent.save")}
        onClick={() => toggle(candidate.id)}
        className="absolute right-2 top-3 inline-flex size-10 items-center justify-center text-muted hover:text-navy"
      >
        {saved ? <BookmarkCheck className="size-4 text-accent" /> : <Bookmark className="size-4" />}
      </button>
    </article>
  );
}
