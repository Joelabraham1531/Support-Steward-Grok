import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { Portrait } from "@/components/talent/portrait";
import { TalentCard } from "@/components/talent/talent-card";
import { Button } from "@/components/ui/button";
import { useDesk } from "@/lib/desk";
import { useI18n, useT } from "@/lib/i18n";
import {
  annualPay,
  fullName,
  getCandidate,
  loc,
  placementFee,
  roleOf,
  savingsPct,
  savingsVsDe,
  similarTo,
} from "@/lib/talent";
import { eur } from "@/lib/utils";

export const Route = createFileRoute("/talent/$id")({
  component: Profile,
});

function Profile() {
  const t = useT();
  const lang = useI18n((s) => s.lang);
  const { id } = Route.useParams();
  const c = getCandidate(id);
  if (!c) throw notFound();

  const ids = useDesk((s) => s.ids);
  const toggle = useDesk((s) => s.toggle);
  const saved = ids.includes(c.id);
  const similar = similarTo(c);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-sm text-muted">
        <Link to="/talent" className="hover:text-ink">
          {t("nav.talent")}
        </Link>
        <span className="mx-2">/</span>
        {fullName(c)}
      </p>

      <div className="mt-6 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="overflow-hidden border border-line bg-sage">
            <Portrait candidate={c} className="aspect-square w-full" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-india">
            {c.city}, {loc(c.country, lang)} · {c.timezone}
          </p>
          <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
            {fullName(c)}
          </h1>
          <p className="mt-1 text-lg text-muted">{roleOf(c, lang)}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Stat label={t("profile.monthly")} value={eur(c.monthlyEur)} />
            <Stat label={t("profile.vs")} value={t("profile.less", { pct: savingsPct(c) })} />
            <Stat label={t("profile.exp")} value={t("profile.years", { n: c.yearsExp })} />
            <Stat label={t("profile.english")} value={t(`en.${c.english}`)} />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/90">{loc(c.bio, lang)}</p>
          <p className="mt-3 text-sm text-muted">{t("profile.prev", { co: loc(c.previouslyAt, lang) })}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {c.skills.map((s) => (
              <span key={s} className="bg-sage px-3 py-1.5 text-sm text-ink">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-8 border border-navy bg-surface p-5">
            <p className="text-sm text-muted">
              {t("profile.pack", {
                year: eur(annualPay(c)),
                de: eur(c.deAnnual),
                keep: eur(savingsVsDe(c)),
                fee: eur(placementFee(c)),
              })}
            </p>
            <p className="mt-2 text-sm text-muted">
              {t("profile.avail", {
                when: t(`avail.${c.availability}`).toLowerCase(),
                en: t(`en.${c.english}`),
                de: t(`de.${c.german}`),
              })}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link to="/hire" search={{ candidate: c.id, role: c.roleSlug }}>
                  {t("profile.intro")}
                </Link>
              </Button>
              <Button type="button" variant="outline" onClick={() => toggle(c.id)}>
                {saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
                {saved ? t("talent.saved") : t("talent.save")}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {similar.length > 0 ? (
        <section className="mt-16">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-navy">
            {t("profile.similar")}
          </h2>
          <div className="mt-6 grid gap-3">
            {similar.map((x) => (
              <TalentCard key={x.id} candidate={x} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-sage px-3 py-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted">{label}</p>
      <p className="mt-1 font-medium tabular-nums">{value}</p>
    </div>
  );
}
