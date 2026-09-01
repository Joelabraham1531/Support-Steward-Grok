import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";
import { AGENCY_RATE, loc, ON_DEMAND_RATE, PLACEMENT_RATE, REGIONS, ROLE_PAGES } from "@/lib/talent";
import { gbp } from "@/lib/utils";

const REGION_MULT: Record<string, number> = {
  philippines: 0.42,
  india: 0.4,
  "south-africa": 0.52,
  "eastern-europe": 0.55,
};

export function SavingsCalc() {
  const t = useT();
  const [roleSlug, setRoleSlug] = useState<string>(ROLE_PAGES[0].slug);
  const [region, setRegion] = useState("philippines");
  const role = ROLE_PAGES.find((r) => r.slug === roleSlug) ?? ROLE_PAGES[0];

  const math = useMemo(() => {
    const dePay = role.deAnnual;
    const overseas = Math.round(dePay * (REGION_MULT[region] ?? 0.45));
    const save = dePay - overseas;
    const ourFee = Math.round(overseas * PLACEMENT_RATE);
    const theirFee = Math.round(overseas * AGENCY_RATE);
    const onDemand = Math.round(overseas * ON_DEMAND_RATE);
    return { dePay, overseas, save, ourFee, theirFee, onDemand, pct: Math.round((save / dePay) * 100) };
  }, [role, region]);

  return (
    <div className="border border-line bg-surface p-5 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t("calc.kicker")}</p>
      <h2 className="mt-2 font-heading text-3xl text-navy">{t("calc.title")}</h2>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{t("calc.lead")}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">{t("calc.job")}</span>
          <select
            value={roleSlug}
            onChange={(e) => setRoleSlug(e.target.value)}
            className="h-11 w-full border border-line bg-canvas px-3 text-sm text-ink outline-none focus:border-accent"
          >
            {ROLE_PAGES.map((r) => (
              <option key={r.slug} value={r.slug}>
                {loc(r.title)}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">{t("calc.from")}</span>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="h-11 w-full border border-line bg-canvas px-3 text-sm text-ink outline-none focus:border-accent"
          >
            {REGIONS.map((r) => (
              <option key={r.slug} value={r.slug}>
                {r.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <dl className="mt-8 grid gap-3 sm:grid-cols-3">
        <div className="bg-sage p-4">
          <dt className="text-xs font-semibold uppercase tracking-widest text-muted">{t("calc.de")}</dt>
          <dd className="mt-1 font-heading text-3xl tabular-nums text-navy">{gbp(math.dePay)}</dd>
        </div>
        <div className="bg-sage p-4">
          <dt className="text-xs font-semibold uppercase tracking-widest text-muted">{t("calc.os")}</dt>
          <dd className="mt-1 font-heading text-3xl tabular-nums text-navy">{gbp(math.overseas)}</dd>
        </div>
        <div className="bg-accent p-4 text-accent-fg">
          <dt className="text-xs font-semibold uppercase tracking-widest">{t("calc.keep")}</dt>
          <dd className="mt-1 font-heading text-3xl tabular-nums">
            {gbp(math.save)}
            <span className="ml-2 font-sans text-sm font-normal">{math.pct}%</span>
          </dd>
        </div>
      </dl>

      <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
        <p className="border border-line px-4 py-3">
          {t("calc.our")} <span className="float-right font-semibold tabular-nums">{gbp(math.ourFee)}</span>
        </p>
        <p className="border border-line px-4 py-3 text-muted">
          {t("calc.their")} <span className="float-right font-semibold tabular-nums">{gbp(math.theirFee)}</span>
        </p>
      </div>
      <p className="mt-3 text-xs text-muted">{t("calc.on", { amt: gbp(math.onDemand) })}</p>
      <Button asChild className="mt-6">
        <Link to="/hire" search={{ role: role.slug }}>
          {t("calc.cta")}
        </Link>
      </Button>
    </div>
  );
}
