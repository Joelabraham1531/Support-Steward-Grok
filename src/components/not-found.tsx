import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

export function NotFound() {
  const t = useT();
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal">{t("404.kicker")}</p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-navy">
        {t("404.title")}
      </h1>
      <p className="mt-3 text-muted">{t("404.lead")}</p>
      <Button asChild className="mt-8">
        <Link to="/talent">{t("404.cta")}</Link>
      </Button>
    </div>
  );
}
