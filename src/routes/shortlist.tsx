import { createFileRoute, Link } from "@tanstack/react-router";
import { TalentCard } from "@/components/talent/talent-card";
import { Button } from "@/components/ui/button";
import { useDesk } from "@/lib/desk";
import { useT } from "@/lib/i18n";
import { DEPOSIT_EUR, getCandidate } from "@/lib/talent";
import { eur } from "@/lib/utils";

export const Route = createFileRoute("/shortlist")({ component: Shortlist });

function Shortlist() {
  const t = useT();
  const ids = useDesk((s) => s.ids);
  const inquiries = useDesk((s) => s.inquiries);
  const people = ids.map(getCandidate).filter((c) => c != null);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal">{t("saved.kicker")}</p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        {t("saved.title")}
      </h1>
      <p className="mt-3 max-w-xl text-muted">{t("saved.lead", { deposit: eur(DEPOSIT_EUR) })}</p>

      {people.length === 0 ? (
        <div className="mt-10 border border-dashed border-line px-6 py-16 text-center">
          <p className="font-medium">{t("saved.empty")}</p>
          <p className="mt-2 text-sm text-muted">{t("saved.emptyHint")}</p>
          <Button asChild className="mt-6">
            <Link to="/talent">{t("saved.browse")}</Link>
          </Button>
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-3">
            {people.map((c) => (
              <TalentCard key={c.id} candidate={c} />
            ))}
          </div>
          <Button asChild className="mt-8">
            <Link to="/hire">{t("saved.fromList")}</Link>
          </Button>
        </>
      )}

      {inquiries.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">{t("saved.searches")}</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {inquiries.map((i) => (
              <li key={i.id} className="flex flex-wrap items-baseline justify-between gap-2 py-3 text-sm">
                <span className="font-medium">{i.company}</span>
                <span className="text-muted">
                  {i.role}
                  {i.candidateId ? ` · ${i.candidateId}` : ""}
                </span>
                <span className="text-xs text-faint tabular-nums">
                  {new Date(i.at).toLocaleDateString("de-DE")}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
