import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  const t = useT();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
      <img src="/steward-logo.png" alt="Support Steward" className="h-14 w-auto sm:h-16" />
      <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-orange">{t("about.kicker")}</p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        {t("about.title")}
      </h1>
      <span className="mt-4 block h-1 w-24 bg-orange" />
      <p className="mt-5 leading-relaxed text-muted">{t("about.p1")}</p>
      <p className="mt-4 leading-relaxed text-muted">{t("about.p2")}</p>
      <p className="mt-4 leading-relaxed text-muted">{t("about.p3")}</p>
      <Button asChild className="mt-10">
        <Link to="/hire">{t("about.cta")}</Link>
      </Button>
    </div>
  );
}
