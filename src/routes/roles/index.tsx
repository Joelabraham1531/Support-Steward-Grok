import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n, useT } from "@/lib/i18n";
import { ROLE_PAGES, byRole, loc } from "@/lib/talent";
import { eur } from "@/lib/utils";

export const Route = createFileRoute("/roles/")({ component: RolesIndex });

function RolesIndex() {
  const t = useT();
  const lang = useI18n((s) => s.lang);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal">{t("roles.kicker")}</p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        {t("roles.title")}
      </h1>
      <p className="mt-3 max-w-2xl text-muted">{t("roles.lead")}</p>
      <div className="mt-8 divide-y divide-line border-y border-navy">
        {ROLE_PAGES.map((r) => {
          const n = byRole(r.slug).length;
          return (
            <Link
              key={r.slug}
              to="/roles/$slug"
              params={{ slug: r.slug }}
              className="flex flex-col gap-2 py-5 transition-colors hover:bg-sage sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-navy">
                  {loc(r.title, lang)}
                </h2>
                <p className="mt-1 text-sm text-muted">{loc(r.intro, lang)}</p>
              </div>
              <p className="shrink-0 text-sm font-semibold text-navy">
                {t("roles.bench", { amt: eur(r.deAnnual) })} · {t("roles.open", { n })}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
