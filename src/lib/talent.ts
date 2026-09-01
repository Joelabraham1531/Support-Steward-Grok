export type Copy = string;

export const REGIONS = [
  { slug: "philippines", label: "Philippines", blurb: "English-first assistants, bookkeepers and support. Morning overlap with London." },
  { slug: "india", label: "India", blurb: "Engineers, analysts and accountants who have already delivered for British firms." },
  { slug: "south-africa", label: "South Africa", blurb: "Finance and operations. Native English. Same working day as the UK." },
  { slug: "eastern-europe", label: "Eastern Europe", blurb: "Senior engineering and design. The same time zone as London, give or take an hour." },
] as const;

export type RegionSlug = (typeof REGIONS)[number]["slug"];

export const CATEGORIES = [
  { slug: "support", label: "Support & ops" },
  { slug: "finance", label: "Finance" },
  { slug: "sales", label: "Sales" },
  { slug: "engineering", label: "Engineering" },
  { slug: "data", label: "Data" },
  { slug: "design", label: "Design" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

export type Availability = "Immediate" | "2 weeks" | "30 days";

export type Candidate = {
  id: string;
  firstName: string;
  lastName: string;
  roleSlug: string;
  category: CategorySlug;
  country: string;
  countryCode: string;
  region: RegionSlug;
  city: string;
  monthlyEur: number;
  deAnnual: number;
  yearsExp: number;
  skills: string[];
  bio: string;
  previouslyAt: string;
  availability: Availability;
  timezone: string;
  english: "Fluent" | "Native" | "Professional";
  german: "None" | "Basic" | "Fluent" | "Native";
  photo?: string;
  featured?: boolean;
};

export const ROLE_PAGES = [
  {
    slug: "executive-assistant",
    title: "Executive Assistant",
    category: "support" as CategorySlug,
    deAnnual: 42000,
    intro: "Calendar, inbox and travel for a founder who will not pay another London full-time seat.",
  },
  {
    slug: "virtual-assistant",
    title: "Virtual Assistant",
    category: "support" as CategorySlug,
    deAnnual: 32000,
    intro: "Inbox, scheduling, and the unglamorous ops a ten-person company actually needs.",
  },
  {
    slug: "accountant",
    title: "Accountant",
    category: "finance" as CategorySlug,
    deAnnual: 45000,
    intro: "Close, reporting and clean files — without a fully-loaded £45k seat.",
  },
  {
    slug: "bookkeeper",
    title: "Bookkeeper",
    category: "finance" as CategorySlug,
    deAnnual: 38000,
    intro: "Xero, VAT returns, monthly close — files your accountant will not redo.",
  },
  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    category: "engineering" as CategorySlug,
    deAnnual: 70000,
    intro: "Ship product with a vetted engineer at a third of a fully-loaded British cost.",
  },
  {
    slug: "software-engineer",
    title: "Software Engineer",
    category: "engineering" as CategorySlug,
    deAnnual: 75000,
    intro: "Backend-first people who have been on-call for a British product.",
  },
  {
    slug: "sdr",
    title: "SDR",
    category: "sales" as CategorySlug,
    deAnnual: 40000,
    intro: "Outbound that actually writes. Overlap with your British sales floor.",
  },
  {
    slug: "customer-success",
    title: "Customer Success",
    category: "support" as CategorySlug,
    deAnnual: 38000,
    intro: "Renewals, onboarding and tickets without a local CS salary attached.",
  },
  {
    slug: "graphic-designer",
    title: "Graphic Designer",
    category: "design" as CategorySlug,
    deAnnual: 42000,
    intro: "Brand, decks and product graphics. Figma-native.",
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    category: "data" as CategorySlug,
    deAnnual: 50000,
    intro: "Dashboards, SQL and reporting a British analyst would charge £50k to own.",
  },
  {
    slug: "qa-engineer",
    title: "QA Engineer",
    category: "engineering" as CategorySlug,
    deAnnual: 50000,
    intro: "Manual plus automation. Stop shipping on hope.",
  },
] as const;

export const CANDIDATES: Candidate[] = [
  {
    id: "sofia-reyes",
    firstName: "Sofia",
    lastName: "Reyes",
    roleSlug: "executive-assistant",
    category: "support",
    country: "Philippines",
    countryCode: "PH",
    region: "philippines",
    city: "Manila",
    monthlyEur: 1800,
    deAnnual: 42000,
    yearsExp: 7,
    skills: ["Calendar", "Inbox", "Travel", "Notion", "GMT overlap"],
    bio: "Has run a British founder’s diary for four years. Protects time, writes like a native, and does not need a playbook for Zoom.",
    previouslyAt: "London Series B SaaS (founder EA)",
    availability: "Immediate",
    timezone: "PHT (UTC+8)",
    english: "Fluent",
    german: "None",
    photo: "/talent/sofia-reyes.jpg",
    featured: true,
  },
  {
    id: "thabo-molefe",
    firstName: "Thabo",
    lastName: "Molefe",
    roleSlug: "accountant",
    category: "finance",
    country: "South Africa",
    countryCode: "ZA",
    region: "south-africa",
    city: "Johannesburg",
    monthlyEur: 2400,
    deAnnual: 45000,
    yearsExp: 8,
    skills: ["Xero", "VAT", "FRS 102", "Close", "Excel"],
    bio: "Month-end close without drama. Eight years across agencies and a British e-commerce brand. Native English.",
    previouslyAt: "Manchester e-commerce (contract)",
    availability: "2 weeks",
    timezone: "SAST (UTC+2)",
    english: "Native",
    german: "None",
    photo: "/talent/thabo-molefe.jpg",
    featured: true,
  },
  {
    id: "rajesh-iyer",
    firstName: "Rajesh",
    lastName: "Iyer",
    roleSlug: "full-stack-developer",
    category: "engineering",
    country: "India",
    countryCode: "IN",
    region: "india",
    city: "Bengaluru",
    monthlyEur: 2800,
    deAnnual: 70000,
    yearsExp: 6,
    skills: ["TypeScript", "React", "Node", "PostgreSQL", "AWS"],
    bio: "Ships full features without a babysitter. Last two years on a British health SaaS. Overlaps London afternoons.",
    previouslyAt: "British health SaaS",
    availability: "Immediate",
    timezone: "IST (UTC+5:30)",
    english: "Fluent",
    german: "None",
    photo: "/talent/rajesh-iyer.jpg",
    featured: true,
  },
  {
    id: "gabriela-souza",
    firstName: "Gabriela",
    lastName: "Souza",
    roleSlug: "graphic-designer",
    category: "design",
    country: "South Africa",
    countryCode: "ZA",
    region: "south-africa",
    city: "Cape Town",
    monthlyEur: 2100,
    deAnnual: 42000,
    yearsExp: 6,
    skills: ["Figma", "Brand", "Decks", "Web", "Illustration"],
    bio: "Brand systems, not one-off logos. Last two years on a British consumer brand. Speaks the language of a London creative director.",
    previouslyAt: "British consumer brand",
    availability: "2 weeks",
    timezone: "SAST (UTC+2)",
    english: "Fluent",
    german: "None",
    photo: "/talent/gabriela-souza.jpg",
    featured: true,
  },
  {
    id: "priya-nair",
    firstName: "Priya",
    lastName: "Nair",
    roleSlug: "data-analyst",
    category: "data",
    country: "India",
    countryCode: "IN",
    region: "india",
    city: "Hyderabad",
    monthlyEur: 2300,
    deAnnual: 50000,
    yearsExp: 5,
    skills: ["SQL", "dbt", "Looker", "Python", "Excel"],
    bio: "Turns messy warehouse tables into a Monday morning dashboard the managing director will actually open.",
    previouslyAt: "Series B marketplace",
    availability: "30 days",
    timezone: "IST (UTC+5:30)",
    english: "Fluent",
    german: "None",
    photo: "/talent/priya-nair.jpg",
    featured: true,
  },
  {
    id: "jen-lim",
    firstName: "Jen",
    lastName: "Lim",
    roleSlug: "virtual-assistant",
    category: "support",
    country: "Philippines",
    countryCode: "PH",
    region: "philippines",
    city: "Cebu",
    monthlyEur: 1500,
    deAnnual: 32000,
    yearsExp: 5,
    skills: ["Inbox", "Scheduling", "Airtable", "Customer email", "GMT"],
    bio: "The person who makes a twelve-person company look twice its size. Written English you will not rewrite.",
    previouslyAt: "Bristol e-commerce ops",
    availability: "Immediate",
    timezone: "PHT (UTC+8)",
    english: "Fluent",
    german: "None",
    photo: "/talent/jen-lim.jpg",
    featured: true,
  },
  {
    id: "nomsa-dlamini",
    firstName: "Nomsa",
    lastName: "Dlamini",
    roleSlug: "bookkeeper",
    category: "finance",
    country: "South Africa",
    countryCode: "ZA",
    region: "south-africa",
    city: "Durban",
    monthlyEur: 1900,
    deAnnual: 38000,
    yearsExp: 7,
    skills: ["Xero", "VAT", "Reconcile", "Payroll", "Excel"],
    bio: "Books an accountant will not send back. Seven years. Native English. Quiet and exact.",
    previouslyAt: "British agency (finance)",
    availability: "Immediate",
    timezone: "SAST (UTC+2)",
    english: "Native",
    german: "None",
    photo: "/talent/nomsa-dlamini.jpg",
  },
  {
    id: "rohan-nair",
    firstName: "Rohan",
    lastName: "Nair",
    roleSlug: "software-engineer",
    category: "engineering",
    country: "India",
    countryCode: "IN",
    region: "india",
    city: "Kochi",
    monthlyEur: 3000,
    deAnnual: 75000,
    yearsExp: 8,
    skills: ["Go", "PostgreSQL", "Kafka", "Kubernetes", "AWS"],
    bio: "Backend-first. Eight years in payments. On-call without drama.",
    previouslyAt: "British payments processor",
    availability: "30 days",
    timezone: "IST (UTC+5:30)",
    english: "Fluent",
    german: "None",
    photo: "/talent/rohan-nair.jpg",
  },
  {
    id: "diego-alvarez",
    firstName: "Diego",
    lastName: "Alvarez",
    roleSlug: "customer-success",
    category: "support",
    country: "Philippines",
    countryCode: "PH",
    region: "philippines",
    city: "Manila",
    monthlyEur: 1800,
    deAnnual: 38000,
    yearsExp: 6,
    skills: ["Onboarding", "Renewals", "Zendesk", "QBR", "GMT"],
    bio: "Owns a book of British SME accounts. Writes updates a founder can forward.",
    previouslyAt: "British vertical SaaS",
    availability: "2 weeks",
    timezone: "PHT (UTC+8)",
    english: "Fluent",
    german: "None",
    photo: "/talent/diego-alvarez.jpg",
  },
  {
    id: "ravi-menon",
    firstName: "Ravi",
    lastName: "Menon",
    roleSlug: "qa-engineer",
    category: "engineering",
    country: "India",
    countryCode: "IN",
    region: "india",
    city: "Pune",
    monthlyEur: 2000,
    deAnnual: 50000,
    yearsExp: 8,
    skills: ["Playwright", "Cypress", "API tests", "CI", "Regression"],
    bio: "Finds the bug before your biggest customer does. Mix of automation and actually clicking through the product.",
    previouslyAt: "British fintech (contract)",
    availability: "Immediate",
    timezone: "IST (UTC+5:30)",
    english: "Fluent",
    german: "None",
    photo: "/talent/ravi-menon.jpg",
  },
  {
    id: "lena-kowalska",
    firstName: "Lena",
    lastName: "Kowalska",
    roleSlug: "graphic-designer",
    category: "design",
    country: "Poland",
    countryCode: "PL",
    region: "eastern-europe",
    city: "Warsaw",
    monthlyEur: 2400,
    deAnnual: 42000,
    yearsExp: 7,
    skills: ["Figma", "Brand", "Product UI", "Motion", "Web"],
    bio: "Product-adjacent design. Seven years. Writes specs engineers do not rewrite.",
    previouslyAt: "EU marketplace",
    availability: "2 weeks",
    timezone: "CET (UTC+1)",
    english: "Fluent",
    german: "Basic",
    photo: "/talent/lena-kowalska.jpg",
  },
  {
    id: "piotr-lewandowski",
    firstName: "Piotr",
    lastName: "Lewandowski",
    roleSlug: "sdr",
    category: "sales",
    country: "Poland",
    countryCode: "PL",
    region: "eastern-europe",
    city: "Kraków",
    monthlyEur: 2200,
    deAnnual: 40000,
    yearsExp: 5,
    skills: ["Outbound", "HubSpot", "LinkedIn", "English", "UK hours"],
    bio: "Writes outbound a British AE will actually send. Same working day as London.",
    previouslyAt: "UK HR tech",
    availability: "Immediate",
    timezone: "CET (UTC+1)",
    english: "Fluent",
    german: "Basic",
    photo: "/talent/piotr-lewandowski.jpg",
  },
];

export const PLACEMENT_RATE = 0.2;
export const AGENCY_RATE = 0.3;
export const DEPOSIT_EUR = 300;
export const DEPOSIT_USD = 300;
export const GUARANTEE_MONTHS = 6;
export const ON_DEMAND_RATE = 0.15;

export function loc(v: string | { de?: string; en?: string }, _lang?: string) {
  if (typeof v === "string") return v;
  return v.en ?? v.de ?? "";
}

export function fullName(c: Candidate) {
  return `${c.firstName} ${c.lastName}`;
}

export function roleOf(c: Candidate, _lang?: string) {
  return loc(getRole(c.roleSlug)?.title ?? c.roleSlug);
}

export function annualPay(c: Candidate) {
  return c.monthlyEur * 12;
}

export function savingsVsDe(c: Candidate) {
  return c.deAnnual - annualPay(c);
}

export function savingsPct(c: Candidate) {
  return Math.round((savingsVsDe(c) / c.deAnnual) * 100);
}

export function placementFee(c: Candidate) {
  return Math.round(annualPay(c) * PLACEMENT_RATE);
}

export function getCandidate(id: string) {
  return CANDIDATES.find((c) => c.id === id);
}

export function byRole(slug: string) {
  return CANDIDATES.filter((c) => c.roleSlug === slug);
}

export function byRegion(slug: string) {
  return CANDIDATES.filter((c) => c.region === slug);
}

export function similarTo(c: Candidate, n = 3) {
  return CANDIDATES.filter(
    (x) => x.id !== c.id && (x.category === c.category || x.region === c.region),
  ).slice(0, n);
}

export function getRole(slug: string) {
  return ROLE_PAGES.find((r) => r.slug === slug);
}

export function getRegion(slug: string) {
  return REGIONS.find((r) => r.slug === slug);
}

export function filterTalent(opts: {
  q?: string;
  region?: string;
  category?: string;
  maxMonthly?: number;
}) {
  const q = opts.q?.trim().toLowerCase();
  return CANDIDATES.filter((c) => {
    if (opts.region && c.region !== opts.region) return false;
    if (opts.category && c.category !== opts.category) return false;
    if (opts.maxMonthly && c.monthlyEur > opts.maxMonthly) return false;
    if (!q) return true;
    const hay =
      `${c.firstName} ${c.lastName} ${c.roleSlug} ${c.country} ${c.city} ${c.skills.join(" ")} ${c.previouslyAt}`.toLowerCase();
    return hay.includes(q);
  });
}
