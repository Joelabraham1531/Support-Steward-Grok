import { Link } from "@tanstack/react-router";
import { LotseLockup } from "@/components/mark";
import { useT } from "@/lib/i18n";
import { loc, REGIONS, ROLE_PAGES } from "@/lib/talent";

export function SiteFooter() {
  const t = useT();

  return (
    <footer className="mt-auto border-t border-line bg-navy text-accent-fg">
      <div className="h-1.5 w-full bg-accent" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <LotseLockup inverted />
          <p className="mt-4 text-sm leading-relaxed text-accent-fg/75">{t("footer.blurb")}</p>
          <p className="mt-4 text-xs tracking-wide text-accent">{t("footer.city")}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t("footer.firm")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/talent" className="hover:text-accent">
                {t("nav.talent")}
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-accent">
                {t("nav.pricing")}
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-accent">
                {t("nav.how")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link to="/hire" className="hover:text-accent">
                {t("nav.hire")}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t("footer.roles")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {ROLE_PAGES.slice(0, 6).map((r) => (
              <li key={r.slug}>
                <Link to="/roles/$slug" params={{ slug: r.slug }} className="hover:text-accent">
                  {loc(r.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{t("footer.from")}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {REGIONS.map((r) => (
              <li key={r.slug}>
                <Link to="/regions/$slug" params={{ slug: r.slug }} className="hover:text-accent">
                  {loc(r.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-accent-fg/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-accent-fg/55 sm:px-6">{t("footer.legal")}</p>
      </div>
    </footer>
  );
}
