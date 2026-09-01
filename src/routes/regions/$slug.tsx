import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { TalentCard } from "@/components/talent/talent-card";
import { Button } from "@/components/ui/button";
import { useI18n, useT } from "@/lib/i18n";
import { byRegion, getRegion, loc } from "@/lib/talent";

export const Route = createFileRoute("/regions/$slug")({ component: RegionPage });

function RegionPage() {
  const t = useT();
  const lang = useI18n((s) => s.lang);
  const { slug } = Route.useParams();
  const region = getRegion(slug);
  if (!region) throw notFound();
  const people = byRegion(slug);
  const name = loc(region.label, lang);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-sm text-muted">
        <Link to="/talent" search={{ region: region.slug }} className="hover:text-ink">
          {t("nav.talent")}
        </Link>
        <span className="mx-2">/</span>
        {name}
      </p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        {t("regions.hire", { name })}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">{loc(region.blurb, lang)}</p>
      <Button asChild className="mt-6">
        <Link to="/hire">{t("regions.start")}</Link>
      </Button>
      <div className="mt-10 grid gap-3">
        {people.map((c) => (
          <TalentCard key={c.id} candidate={c} />
        ))}
      </div>
    </div>
  );
}
