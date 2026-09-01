import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Lang = "de" | "en";

const en: Record<string, string> = {
  "nav.talent": "Talent",
  "nav.roles": "Roles",
  "nav.pricing": "Fees",
  "nav.how": "How it works",
  "nav.about": "The firm",
  "nav.saved": "Shortlist",
  "nav.hire": "Open a search",
  "nav.menu": "Menu",
  "nav.close": "Close menu",

  "home.kicker": "British companies · 1–500 people",
  "home.headline": "Offshore talent. At what they actually cost.",
  "home.sub":
    "Assistants, accountants, engineers, sales, design. {deposit} refundable deposit. 20 per cent only if you hire. Six-month replacement.",
  "home.cta": "See who is free",
  "home.cta2": "See fees",
  "home.stat1": "refundable deposit",
  "home.stat2": "placement fee",
  "home.stat3": "people in the company",
  "home.stat4": "free replacement",
  "home.musterKicker": "Available now",
  "home.musterTitle": "People you can hire this month",
  "home.all": "All {n} on the list",
  "home.runKicker": "How it works",
  "home.runTitle": "Three conversations. Then they start.",
  "home.s1t": "Send the brief",
  "home.s1b": "Role, hours, must-haves. £300 opens the search. Refunded if we decline.",
  "home.s2t": "Meet two or three people",
  "home.s2b": "Not a stack of 40 CVs. Who is free first, then a targeted search.",
  "home.s3t": "Hire. We stay on the hook.",
  "home.s3b": "20 per cent of first-year pay when they start. Six months of cover.",
  "home.where": "Where they work from",
  "home.faqTitle": "Straight answers for British SMEs",
  "home.q1": "Who do you hire for?",
  "home.a1":
    "British companies with 1–500 people. Founders, operators, and the 40-person shop that cannot justify another London salary.",
  "home.q2": "Where is the talent?",
  "home.a2":
    "Philippines, India, South Africa, Eastern Europe. Fluent English. Monthly pay in pounds on every profile.",
  "home.q3": "What does it cost?",
  "home.a3":
    "A refundable {deposit} deposit opens the search. 20 per cent of first-year pay when they start. Typical British agencies charge 25–35 per cent.",
  "home.q4": "What if it does not work?",
  "home.a4": "Six-month replacement. Same seat, no second fee.",

  "talent.kicker": "The list",
  "talent.title": "Who is free",
  "talent.lead":
    "Monthly pay in pounds on every card. Shortlist anyone, then open a search with a {deposit} deposit.",
  "talent.search": "Role, skill, city…",
  "talent.sort": "Sort",
  "talent.featured": "Featured",
  "talent.payAsc": "Pay: low to high",
  "talent.payDesc": "Pay: high to low",
  "talent.allRegions": "All regions",
  "talent.allRoles": "All roles",
  "talent.countOne": "1 person",
  "talent.countMany": "{n} people",
  "talent.empty": "No one matches those filters.",
  "talent.emptyHint": "Clear a filter, or open a custom search.",
  "talent.start": "Open a search",
  "talent.month": "/ mo",
  "talent.under": "{pct}% under British pay",
  "talent.yrs": "{n} yrs",
  "talent.save": "Shortlist",
  "talent.saved": "Shortlisted",
  "talent.unsave": "Remove",

  "profile.monthly": "Monthly",
  "profile.vs": "Vs British pay",
  "profile.exp": "Experience",
  "profile.english": "English",
  "profile.german": "English",
  "profile.years": "{n} years",
  "profile.prev": "Previously at {co}",
  "profile.pack":
    "First-year package {year} · British equivalent {de} · you keep about {keep}. Placement fee {fee} (20%).",
  "profile.avail": "Available {when}. English: {en}.",
  "profile.intro": "Request an introduction",
  "profile.similar": "Similar people",
  "profile.less": "{pct}% less",

  "roles.kicker": "Roles",
  "roles.title": "Seats we fill",
  "roles.lead": "Support, finance, sales, engineering, data, design. For British companies of 1–500 people.",
  "roles.open": "{n} open",
  "roles.bench": "British benchmark {amt} / year",
  "roles.hire": "Hire a {role}",
  "roles.typical": "Typical British salary {amt}. Overseas packages on the cards below.",
  "roles.none": "No one is free for this seat right now. Open a search and we will run one.",
  "roles.free": "Who is free",

  "regions.hire": "Hire from {name}",
  "regions.start": "Open a search",

  "pricing.kicker": "Fees",
  "pricing.title": "Cheaper than a British agency. Not cheap talent.",
  "pricing.lead":
    "British search firms typically take 25–35 per cent of first-year salary. We sit at 20 per cent, with a refundable {deposit} deposit and a {months}-month replacement. Pounds. For companies with 1–500 people.",
  "pricing.direct": "Direct hire",
  "pricing.directOf": "of first-year pay, due when they start",
  "pricing.d1": "{deposit} refundable search deposit",
  "pricing.d2": "{months}-month replacement, no second fee",
  "pricing.d3": "You (or your EOR) employ them",
  "pricing.d4": "Firms with 1–500 people",
  "pricing.directCta": "Open a direct-hire search",
  "pricing.ondemand": "On demand",
  "pricing.onOf": "ongoing, on top of salary, for payroll",
  "pricing.o1": "We handle contractor or EOR payroll",
  "pricing.o2": "Equipment and onboarding playbook",
  "pricing.o3": "Swap or pause with notice",
  "pricing.o4": "Same vetting as direct hire",
  "pricing.onCta": "Ask about on demand",
  "pricing.colUs": "Support Steward",
  "pricing.colThem": "Typical UK agency",
  "pricing.r1k": "Search deposit",
  "pricing.r1a": "{deposit}, refundable",
  "pricing.r1b": "Often a retainer",
  "pricing.r2k": "Placement fee",
  "pricing.r2a": "20% of actual first-year pay",
  "pricing.r2b": "25–35% of first-year pay",
  "pricing.r3k": "Guarantee",
  "pricing.r3a": "{months} months, free replacement",
  "pricing.r3b": "30–90 days is common",
  "pricing.r4k": "Who it is for",
  "pricing.r4a": "British companies, 1–500 people",
  "pricing.r4b": "Everyone, with an enterprise motion",
  "pricing.r5k": "Pay",
  "pricing.r5a": "Published in £ on every profile",
  "pricing.r5b": "Hidden until the sales call",

  "calc.kicker": "The ledger",
  "calc.title": "What a British salary actually costs",
  "calc.lead": "Compare a British salary to an overseas package. We charge 20 per cent of first-year pay — not 30.",
  "calc.job": "Role",
  "calc.from": "Region",
  "calc.de": "British salary",
  "calc.os": "Overseas package",
  "calc.keep": "You keep",
  "calc.our": "Our 20% fee",
  "calc.their": "Typical 30% agency",
  "calc.on": "On-demand payroll (we employ them): about {amt} a year on top of salary.",
  "calc.cta": "Open this search",

  "how.kicker": "How it works",
  "how.title": "From brief to start date",
  "how.lead":
    "Built for British companies that have never hired overseas — or have, and were burned by a volume shop. 1–500 people. That is the whole market we serve.",
  "how.s1t": "Open the search",
  "how.s1b":
    "Role, hours, must-haves. A £300 deposit starts work and is applied to the placement fee — refunded if we decline.",
  "how.s2t": "We pull who is free first",
  "how.s2b": "If someone on the list is a fit, you see them within a day. If not, we run a targeted search.",
  "how.s3t": "You interview two or three people",
  "how.s3b": "Not a stack of 40 CVs. We prep them on your company. You talk. We do not sit on the call unless you ask.",
  "how.s4t": "Offer, start, guarantee",
  "how.s4b":
    "20 per cent of first-year compensation is due when they start. If the hire fails inside six months, we replace them at no second fee.",
  "how.wont": "What we will not do",
  "how.w1": "Spray 80 profiles and call it recruiting.",
  "how.w2": "Hide salary until a discovery call.",
  "how.w3": "Charge a percentage of a British equivalent the candidate will never earn.",
  "how.w4": "Pretend a 10-person Ltd wants an enterprise RFP.",
  "how.cta": "Open a search",

  "about.kicker": "The firm",
  "about.title": "A recruiting house for British companies that want the real cost of talent.",
  "about.p1":
    "Support Steward places overseas professionals with British businesses of 1–500 people — the founder who needs an EA, the 40-person shop that cannot justify another London salary, the operator who wants a Manila accountant.",
  "about.p2":
    "Salaries are published in pounds. The search deposit is £300 and refundable. You pay 20 per cent of first-year compensation only if you hire. If the person does not work out in six months, we replace them.",
  "about.p3":
    "We do not pretend to be a global marketplace for everyone. British SMEs. Affordable offshore talent. That is the firm.",
  "about.cta": "Open a search",

  "hire.opened": "Search opened",
  "hire.brief": "We have the brief.",
  "hire.next":
    "Next step is the {deposit} refundable deposit. In this preview it is logged locally on this device — no charge. Reference {ref}.",
  "hire.back": "Back to the list",
  "hire.viewSaved": "View shortlist",
  "hire.kicker": "Open a search",
  "hire.title": "Tell us the seat",
  "hire.introTo": "Introduction to {name}",
  "hire.lead": "{deposit} refundable deposit to open. 20 per cent of first-year pay if you hire.",
  "hire.onDemandNote": " You asked about on demand (payroll included).",
  "hire.name": "Your name",
  "hire.email": "Work email",
  "hire.company": "Company",
  "hire.role": "Role",
  "hire.notes": "Hours, must-haves, anything we should know",
  "hire.submit": "Send the brief",
  "hire.err": "Name, work email, company, and role are required.",
  "hire.emailErr": "Use a real work email.",

  "saved.kicker": "Shortlist",
  "saved.title": "Your list",
  "saved.lead": "Saved on this device. Request introductions when you are ready — {deposit} opens the search.",
  "saved.empty": "No one shortlisted yet.",
  "saved.emptyHint": "Shortlist people from the list.",
  "saved.browse": "Browse the list",
  "saved.fromList": "Open a search from this list",
  "saved.searches": "Searches on this device",

  "404.kicker": "404",
  "404.title": "Not on the list",
  "404.lead": "The role, region, or person you asked for is not here.",
  "404.cta": "Browse the list",

  "footer.blurb":
    "British companies hiring affordable offshore talent. Firms with 1–500 people. £300 to start. 20 per cent when you hire.",
  "footer.city": "United Kingdom · remote-first",
  "footer.firm": "The firm",
  "footer.roles": "Roles",
  "footer.from": "Hire from",
  "footer.legal":
    "Support Steward places contractors and employees with British companies. Fees in pounds sterling. Deposit refundable if we decline the search.",

  "avail.Immediate": "Immediate",
  "avail.2 weeks": "2 weeks",
  "avail.30 days": "30 days",
  "en.Fluent": "Fluent",
  "en.Native": "Native",
  "en.Professional": "Professional",
  "de.None": "—",
  "de.Basic": "Basic",
  "de.Fluent": "Fluent",
  "de.Native": "Native",

  "hero.alt": "A rainy London street at dusk",
};

const dict: Record<Lang, Record<string, string>> = { en, de: en };

type I18nState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const useI18n = create<I18nState>()(
  persist(
    (set) => ({
      lang: "en",
      setLang: (lang) => set({ lang }),
    }),
    { name: "support-steward-lang" },
  ),
);

export function interpolate(s: string, vars?: Record<string, string | number>) {
  if (!vars) return s;
  let out = s;
  for (const [k, v] of Object.entries(vars)) {
    out = out.replaceAll(`{${k}}`, String(v));
  }
  return out;
}

export function useT() {
  const lang = useI18n((s) => s.lang);
  return (key: string, vars?: Record<string, string | number>) =>
    interpolate(dict[lang][key] ?? dict.en[key] ?? key, vars);
}
