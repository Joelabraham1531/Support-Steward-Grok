import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { TalentCard } from "@/components/talent/talent-card";
import { Button } from "@/components/ui/button";
import { useI18n, useT } from "@/lib/i18n";
import { byRole, getRole, loc } from "@/lib/talent";
import { eur } from "@/lib/utils";

export const Route = createFileRoute("/roles/$slug")({ component: RolePage });

function RolePage() {
  const t = useT();
  const lang = useI18n((s) => s.lang);
  const { slug } = Route.useParams();
  const role = getRole(slug);
  if (!role) throw notFound();
  const people = byRole(slug);
  const title = loc(role.title, lang);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-sm text-muted">
        <Link to="/roles" className="hover:text-ink">
          {t("nav.roles")}
        </Link>
        <span className="mx-2">/</span>
        {title}
      </p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        {t("roles.hire", { role: title })}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">{loc(role.intro, lang)}</p>
      <p className="mt-2 text-sm text-muted">{t("roles.typical", { amt: eur(role.deAnnual) })}</p>
      <Button asChild className="mt-6">
        <Link to="/hire" search={{ role: role.slug }}>
          {t("calc.cta")}
        </Link>
      </Button>

      <h2 className="mt-12 font-heading text-3xl font-semibold tracking-tight text-navy">
        {t("roles.free")}
      </h2>
      {people.length === 0 ? (
        <p className="mt-4 text-sm text-muted">{t("roles.none")}</p>
      ) : (
        <div className="mt-6 grid gap-3">
          {people.map((c) => (
            <TalentCard key={c.id} candidate={c} />
          ))}
        </div>
      )}
    </div>
  );
}
