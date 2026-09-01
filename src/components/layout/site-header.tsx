import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { LotseLockup } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { useDesk } from "@/lib/desk";
import { useT } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const saved = useDesk((s) => s.ids.length);
  const t = useT();

  const NAV = [
    { to: "/talent", label: t("nav.talent") },
    { to: "/roles", label: t("nav.roles") },
    { to: "/pricing", label: t("nav.pricing") },
    { to: "/how-it-works", label: t("nav.how") },
    { to: "/about", label: t("nav.about") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur">
      <div className="h-1.5 w-full bg-accent" />
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
          <LotseLockup />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "px-3 py-2 text-sm transition-colors",
                pathname === item.to || pathname.startsWith(item.to + "/")
                  ? "text-accent"
                  : "text-muted hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/shortlist" className="relative px-3 py-2 text-sm text-muted hover:text-ink">
            {t("nav.saved")}
            {saved > 0 ? (
              <span className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center bg-accent px-1 text-xs font-semibold text-accent-fg tabular-nums">
                {saved}
              </span>
            ) : null}
          </Link>
          <Button asChild size="sm">
            <Link to="/hire">{t("nav.hire")}</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-ink lg:hidden"
          aria-label={open ? t("nav.close") : t("nav.menu")}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-canvas px-4 py-4 lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/shortlist" onClick={() => setOpen(false)} className="py-3 text-sm text-ink">
              {t("nav.saved")} {saved > 0 ? `(${saved})` : ""}
            </Link>
            <Button asChild className="mt-2 w-full">
              <Link to="/hire" onClick={() => setOpen(false)}>
                {t("nav.hire")}
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
