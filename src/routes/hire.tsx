import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { useDesk } from "@/lib/desk";
import { useI18n, useT } from "@/lib/i18n";
import { DEPOSIT_EUR, getCandidate, loc, ROLE_PAGES } from "@/lib/talent";
import { eur } from "@/lib/utils";

type Search = {
  candidate?: string;
  role?: string;
  model?: string;
};

export const Route = createFileRoute("/hire")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    candidate: typeof s.candidate === "string" ? s.candidate : undefined,
    role: typeof s.role === "string" ? s.role : undefined,
    model: typeof s.model === "string" ? s.model : undefined,
  }),
  component: Hire,
});

function Hire() {
  const t = useT();
  const lang = useI18n((s) => s.lang);
  const search = Route.useSearch();
  const person = search.candidate ? getCandidate(search.candidate) : undefined;
  const addInquiry = useDesk((s) => s.addInquiry);
  const [done, setDone] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const deposit = eur(DEPOSIT_EUR);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const role = String(fd.get("role") ?? "").trim();
    const notes = String(fd.get("notes") ?? "").trim();
    if (!name || !email || !company || !role) {
      setError(t("hire.err"));
      return;
    }
    if (!email.includes("@")) {
      setError(t("hire.emailErr"));
      return;
    }
    const rec = addInquiry({
      name,
      email,
      company,
      role,
      notes,
      candidateId: person?.id,
    });
    setError(null);
    setDone(rec.id);
  }

  if (done) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal">{t("hire.opened")}</p>
        <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-navy">
          {t("hire.brief")}
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          {t("hire.next", { deposit, ref: done.slice(0, 8) })}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/talent">{t("hire.back")}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/shortlist">{t("hire.viewSaved")}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-10 sm:px-6 sm:py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-teal">{t("hire.kicker")}</p>
      <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight text-navy">
        {person ? t("hire.introTo", { name: person.firstName }) : t("hire.title")}
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {t("hire.lead", { deposit })}
        {search.model === "on-demand" ? t("hire.onDemandNote") : ""}
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <Label htmlFor="name">{t("hire.name")}</Label>
          <Input id="name" name="name" autoComplete="name" required />
        </div>
        <div>
          <Label htmlFor="email">{t("hire.email")}</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required />
        </div>
        <div>
          <Label htmlFor="company">{t("hire.company")}</Label>
          <Input id="company" name="company" autoComplete="organization" required />
        </div>
        <div>
          <Label htmlFor="role">{t("hire.role")}</Label>
          <select
            id="role"
            name="role"
            defaultValue={person?.roleSlug ?? search.role ?? ""}
            required
            className="h-11 w-full border border-line bg-surface px-3 text-sm outline-none focus:border-navy"
          >
            <option value="" disabled>
              {t("hire.role")}
            </option>
            {ROLE_PAGES.map((r) => (
              <option key={r.slug} value={r.slug}>
                {loc(r.title, lang)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="notes">{t("hire.notes")}</Label>
          <Textarea id="notes" name="notes" />
        </div>
        {error ? <p className="text-sm text-danger">{error}</p> : null}
        <Button type="submit" className="w-full">
          {t("hire.submit")}
        </Button>
      </form>
    </div>
  );
}
