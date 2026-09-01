import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/how-it-works")({ component: How });

function How() {
  const t = useT();
  const steps = [
    [t("how.s1t"), t("how.s1b")],
    [t("how.s2t"), t("how.s2b")],
    [t("how.s3t"), t("how.s3b")],
    [t("how.s4t"), t("how.s4b")],
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal">{t("how.kicker")}</p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        {t("how.title")}
      </h1>
      <p className="mt-4 text-muted">{t("how.lead")}</p>
      <ol className="mt-12 space-y-4">
        {steps.map(([title, body], i) => (
          <li key={title} className="border-t-2 border-teal bg-surface p-5">
            <p className="text-xs font-semibold tracking-widest text-teal">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-navy">{title}</h2>
            <p className="mt-2 leading-relaxed text-muted">{body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 bg-navy p-6 text-accent-fg">
        <h2 className="font-heading text-2xl font-semibold">{t("how.wont")}</h2>
        <ul className="mt-4 space-y-2 text-sm text-accent-fg/80">
          <li>{t("how.w1")}</li>
          <li>{t("how.w2")}</li>
          <li>{t("how.w3")}</li>
          <li>{t("how.w4")}</li>
        </ul>
      </div>
      <Button asChild className="mt-8">
        <Link to="/hire">{t("how.cta")}</Link>
      </Button>
    </div>
  );
}
