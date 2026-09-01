import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SavingsCalc } from "@/components/talent/savings-calc";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
import { DEPOSIT_EUR, GUARANTEE_MONTHS } from "@/lib/talent";
import { eur } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({ component: Pricing });

function Pricing() {
  const t = useT();
  const deposit = eur(DEPOSIT_EUR);
  const months = String(GUARANTEE_MONTHS);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal">{t("pricing.kicker")}</p>
      <h1 className="mt-2 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        {t("pricing.title")}
      </h1>
      <p className="mt-4 max-w-2xl text-muted">{t("pricing.lead", { deposit, months })}</p>

      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="bg-navy p-6 text-accent-fg sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t("pricing.direct")}</p>
          <p className="mt-3 font-heading text-6xl font-semibold leading-none">20%</p>
          <p className="mt-2 text-sm text-accent-fg/85">{t("pricing.directOf")}</p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              t("pricing.d1", { deposit }),
              t("pricing.d2", { months }),
              t("pricing.d3"),
              t("pricing.d4"),
            ].map((x) => (
              <li key={x} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {x}
              </li>
            ))}
          </ul>
          <Button asChild variant="invert" className="mt-8">
            <Link to="/hire">{t("pricing.directCta")}</Link>
          </Button>
        </article>
        <article className="border border-navy bg-surface p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">{t("pricing.ondemand")}</p>
          <p className="mt-3 font-heading text-6xl font-semibold leading-none text-navy">15%</p>
          <p className="mt-2 text-sm text-muted">{t("pricing.onOf")}</p>
          <ul className="mt-6 space-y-3 text-sm text-ink">
            {[t("pricing.o1"), t("pricing.o2"), t("pricing.o3"), t("pricing.o4")].map((x) => (
              <li key={x} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-teal" />
                {x}
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/hire" search={{ model: "on-demand" }}>
              {t("pricing.onCta")}
            </Link>
          </Button>
        </article>
      </div>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-xl text-left text-sm">
          <thead>
            <tr className="border-b-2 border-navy text-navy">
              <th className="py-3 font-heading text-base font-semibold"> </th>
              <th className="py-3 font-heading text-base font-semibold">{t("pricing.colUs")}</th>
              <th className="py-3 font-heading text-base font-semibold">{t("pricing.colThem")}</th>
            </tr>
          </thead>
          <tbody>
            {[
              [t("pricing.r1k"), t("pricing.r1a", { deposit }), t("pricing.r1b")],
              [t("pricing.r2k"), t("pricing.r2a"), t("pricing.r2b")],
              [t("pricing.r3k"), t("pricing.r3a", { months }), t("pricing.r3b")],
              [t("pricing.r4k"), t("pricing.r4a"), t("pricing.r4b")],
              [t("pricing.r5k"), t("pricing.r5a"), t("pricing.r5b")],
            ].map(([k, a, b]) => (
              <tr key={k} className="border-b border-line">
                <td className="py-3 pr-4 font-medium">{k}</td>
                <td className="py-3 pr-4">{a}</td>
                <td className="py-3 text-muted">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12">
        <SavingsCalc />
      </div>
    </div>
  );
}
