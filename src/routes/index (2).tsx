import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TalentCard } from "@/components/talent/talent-card";
import { SavingsCalc } from "@/components/talent/savings-calc";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
import { CANDIDATES, DEPOSIT_EUR, GUARANTEE_MONTHS, loc, REGIONS } from "@/lib/talent";
import { gbp } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const t = useT();
  const featured = CANDIDATES.filter((c) => c.featured);
  const deposit = gbp(DEPOSIT_EUR);

  return (
    <>
      <section className="border-b border-line bg-canvas">
        <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
          <div className="flex flex-col justify-center border-l-4 border-accent px-4 py-10 sm:px-8 sm:py-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t("home.kicker")}</p>
            <h1 className="mt-3 max-w-xl font-heading text-4xl text-navy sm:text-5xl">{t("home.headline")}</h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              {t("home.sub", { deposit })}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/talent">
                  {t("home.cta")} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/pricing">{t("home.cta2")}</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-64 overflow-hidden bg-navy lg:min-h-full">
            <img
              src="/hero-office.jpg"
              alt={t("hero.alt")}
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/25" />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-navy text-accent-fg">
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {[
            [deposit, t("home.stat1")],
            ["20%", t("home.stat2")],
            ["1–500", t("home.stat3")],
            [`${GUARANTEE_MONTHS} mo`, t("home.stat4")],
          ].map(([k, v]) => (
            <div key={String(v)} className="border-accent-fg/10 px-4 py-5 sm:border-l first:border-l-0">
              <p className="font-heading text-2xl text-accent-fg sm:text-3xl">{k}</p>
              <p className="mt-1 text-xs tracking-wide text-accent-fg/70">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t("home.musterKicker")}</p>
            <h2 className="mt-2 font-heading text-3xl text-navy sm:text-4xl">{t("home.musterTitle")}</h2>
          </div>
          <Link to="/talent" className="text-sm text-navy hover:underline">
            {t("home.all", { n: CANDIDATES.length })}
          </Link>
        </div>
        <div className="mt-8 grid gap-3">
          {featured.map((c) => (
            <TalentCard key={c.id} candidate={c} />
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t("home.runKicker")}</p>
          <h2 className="mt-2 max-w-xl font-heading text-3xl text-navy sm:text-4xl">{t("home.runTitle")}</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              ["01", t("home.s1t"), t("home.s1b")],
              ["02", t("home.s2t"), t("home.s2b")],
              ["03", t("home.s3t"), t("home.s3b")],
            ].map(([n, title, body]) => (
              <li key={n} className="border border-line p-5">
                <p className="text-xs font-semibold tracking-widest text-accent">{n}</p>
                <h3 className="mt-2 font-heading text-xl text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <SavingsCalc />
      </section>

      <section className="border-t border-line bg-navy text-accent-fg">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-heading text-3xl sm:text-4xl">{t("home.where")}</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {REGIONS.map((r) => (
              <Link
                key={r.slug}
                to="/regions/$slug"
                params={{ slug: r.slug }}
                className="border border-accent-fg/20 p-5 transition-colors hover:border-accent"
              >
                <p className="font-heading text-lg">{loc(r.label)}</p>
                <p className="mt-2 text-sm text-accent-fg/75">{r.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <h2 className="font-heading text-3xl text-navy sm:text-4xl">{t("home.faqTitle")}</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {[
            [t("home.q1"), t("home.a1")],
            [t("home.q2"), t("home.a2")],
            [t("home.q3"), t("home.a3", { deposit })],
            [t("home.q4"), t("home.a4")],
          ].map(([q, a]) => (
            <div key={q} className="py-5">
              <h3 className="font-heading text-lg text-navy">{q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
