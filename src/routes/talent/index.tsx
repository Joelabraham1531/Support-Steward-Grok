import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { TalentCard } from "@/components/talent/talent-card";
import { Input } from "@/components/ui/input";
import { useI18n, useT } from "@/lib/i18n";
import { CATEGORIES, DEPOSIT_EUR, filterTalent, loc, REGIONS } from "@/lib/talent";
import { cn, eur } from "@/lib/utils";

type Search = {
  q?: string;
  region?: string;
  category?: string;
};

export const Route = createFileRoute("/talent/")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    q: typeof s.q === "string" ? s.q : undefined,
    region: typeof s.region === "string" ? s.region : undefined,
    category: typeof s.category === "string" ? s.category : undefined,
  }),
  component: TalentIndex,
});

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-10 shrink-0 rounded-md px-3.5 text-sm font-medium transition-colors",
        active ? "bg-navy text-canvas" : "bg-sage text-ink hover:bg-line",
      )}
    >
      {children}
    </button>
  );
}

function TalentIndex() {
  const t = useT();
  const lang = useI18n((s) => s.lang);
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [q, setQ] = useState(search.q ?? "");
  const [sort, setSort] = useState<"featured" | "pay-asc" | "pay-desc">("featured");

  const region = search.region;
  const category = search.category;

  const list = useMemo(() => {
    const rows = filterTalent({ q, region, category });
    if (sort === "pay-asc") return [...rows].sort((a, b) => a.monthlyEur - b.monthlyEur);
    if (sort === "pay-desc") return [...rows].sort((a, b) => b.monthlyEur - a.monthlyEur);
    return [...rows].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [q, region, category, sort]);

  function patch(next: Partial<Search>) {
    void navigate({
      search: (prev) => {
        const merged: Search = { ...prev, ...next };
        if (!merged.q) delete merged.q;
        if (!merged.region) delete merged.region;
        if (!merged.category) delete merged.category;
        return merged;
      },
    });
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal">{t("talent.kicker")}</p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        {t("talent.title")}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">{t("talent.lead", { deposit: eur(DEPOSIT_EUR) })}</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            patch({ q: e.target.value || undefined });
          }}
          placeholder={t("talent.search")}
          aria-label={t("talent.search")}
          className="sm:max-w-sm"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as typeof sort)}
          className="h-11 border border-line bg-surface px-3 text-sm outline-none focus:border-navy"
          aria-label={t("talent.sort")}
        >
          <option value="featured">{t("talent.featured")}</option>
          <option value="pay-asc">{t("talent.payAsc")}</option>
          <option value="pay-desc">{t("talent.payDesc")}</option>
        </select>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Chip active={!region} onClick={() => patch({ region: undefined })}>
          {t("talent.allRegions")}
        </Chip>
        {REGIONS.map((r) => (
          <Chip
            key={r.slug}
            active={region === r.slug}
            onClick={() => patch({ region: region === r.slug ? undefined : r.slug })}
          >
            {loc(r.label, lang)}
          </Chip>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <Chip active={!category} onClick={() => patch({ category: undefined })}>
          {t("talent.allRoles")}
        </Chip>
        {CATEGORIES.map((c) => (
          <Chip
            key={c.slug}
            active={category === c.slug}
            onClick={() => patch({ category: category === c.slug ? undefined : c.slug })}
          >
            {loc(c.label, lang)}
          </Chip>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted">
        {list.length === 1 ? t("talent.countOne") : t("talent.countMany", { n: list.length })}
      </p>

      {list.length === 0 ? (
        <div className="mt-8 border border-dashed border-line px-6 py-16 text-center">
          <p className="font-medium">{t("talent.empty")}</p>
          <p className="mt-2 text-sm text-muted">{t("talent.emptyHint")}</p>
          <Link to="/hire" className="mt-4 inline-block text-sm font-medium text-navy hover:underline">
            {t("talent.start")}
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid gap-3">
          {list.map((c) => (
            <TalentCard key={c.id} candidate={c} />
          ))}
        </div>
      )}
    </div>
  );
}
