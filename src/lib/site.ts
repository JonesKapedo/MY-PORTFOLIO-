export const COMPANY = {
  name: "GREAT TURBINEZ",
  tagline: "AI & Automation",
  city: "Naivasha",
  country: "Kenya",
  location: "Naivasha, Kenya",
  coverage: "Based in Naivasha, working all over Kenya and beyond",
  email: "admin.greatturbinez@gmail.com",
  year: 2024,
} as const;

export const QUOTE = {
  text: "Life is a current, not a monument. Fire, the wheel, the engine, the network — every age asked us to evolve with the tool in our hands. Now the tool is intelligence itself. Artificial intelligence is not arriving. It is already here, rewriting work and will. The future does not wait for permission. Neither should we.",
  attribution: "GREAT TURBINEZ",
} as const;

export type ServiceId =
  | "discovery"
  | "workflow"
  | "assistant"
  | "documents"
  | "dashboard"
  | "retainer";

export type Service = {
  id: ServiceId;
  name: string;
  blurb: string;
  includes: string[];
  price: string;
  unit: string;
  note?: string;
};

export const SERVICES: Service[] = [
  {
    id: "discovery",
    name: "Discovery sprint",
    blurb:
      "Two weeks on the floor with your team. We map the work, name the bottlenecks, and leave you a 90-day automation plan you can actually run.",
    includes: [
      "Process interviews and shadowing",
      "Systems inventory",
      "Opportunity ranking",
      "90-day build plan and estimate",
    ],
    price: "KES 48,000",
    unit: "fixed",
  },
  {
    id: "workflow",
    name: "Workflow automation",
    blurb:
      "One end-to-end process taken off human repetition — intake, routing, approvals, notices — wired into the tools you already use.",
    includes: [
      "Scoped process design",
      "Build and integration",
      "Exception handling",
      "Handover and operator training",
    ],
    price: "from KES 95,000",
    unit: "per process",
  },
  {
    id: "assistant",
    name: "Custom AI assistant",
    blurb:
      "An assistant trained on your documents, tone, and rules — sitting on WhatsApp, web, or internal chat, answering as your operation would.",
    includes: [
      "Knowledge setup and guardrails",
      "Channel install (web / WhatsApp)",
      "Human handoff when needed",
      "30 days of tuning after go-live",
    ],
    price: "from KES 140,000",
    unit: "per assistant",
  },
  {
    id: "documents",
    name: "Document intelligence",
    blurb:
      "Invoices, delivery notes, IDs, forms. Extracted, checked, and posted — so the binder stops being the system of record.",
    includes: [
      "Sample-set training",
      "Validation rules",
      "Export to sheet, ERP, or email",
      "Exception queue",
    ],
    price: "from KES 110,000",
    unit: "per document type",
  },
  {
    id: "dashboard",
    name: "Operator dashboard",
    blurb:
      "A live view of the work: volumes, delays, exceptions, and a weekly digest. Built for people who run a floor, not a slide deck.",
    includes: [
      "Source connections",
      "Core views and alerts",
      "Mobile-friendly layout",
      "Weekly digest email",
    ],
    price: "from KES 78,000",
    unit: "per dashboard",
  },
  {
    id: "retainer",
    name: "Turbine retainer",
    blurb:
      "Ongoing automation ops. We watch what is live, fix drift, and ship the next small win every month — without restarting a project.",
    includes: [
      "20 hours per month",
      "Monitoring of live systems",
      "Priority fixes",
      "Monthly ops review",
    ],
    price: "KES 68,000",
    unit: "per month",
  },
];

export type ProjectCategory = "Automation" | "Intelligence" | "Advisory";

export type Project = {
  id: string;
  code: string;
  name: string;
  category: ProjectCategory;
  sector: string;
  place: string;
  summary: string;
  outcome: string;
  year: string;
  status: "Live" | "In build";
};

export const PROJECTS: Project[] = [
  {
    id: "bloomline",
    code: "01",
    name: "Bloomline Forecast",
    category: "Intelligence",
    sector: "Floriculture",
    place: "Naivasha",
    summary:
      "Harvest and cold-chain prediction for a flower exporter on the lake. Weather, stem counts, and packing windows in one morning view.",
    outcome: "22% less wastage in the first season",
    year: "2025",
    status: "Live",
  },
  {
    id: "lodgeflow",
    code: "02",
    name: "Lodgeflow",
    category: "Automation",
    sector: "Hospitality",
    place: "Rift Valley",
    summary:
      "Booking-to-housekeeping handoff, WhatsApp concierge, and night-desk billing for a cluster of lodges around Lake Naivasha.",
    outcome: "Night desk reduced to on-call",
    year: "2025",
    status: "Live",
  },
  {
    id: "olkaria",
    code: "03",
    name: "Olkaria Pulse",
    category: "Intelligence",
    sector: "Energy",
    place: "Hell's Gate",
    summary:
      "Maintenance-signal triage for a geothermal contractor. Sensor logs flagged before they become unplanned stops.",
    outcome: "Fewer unplanned halts on two units",
    year: "2026",
    status: "In build",
  },
  {
    id: "ledgerwind",
    code: "04",
    name: "Ledgerwind",
    category: "Automation",
    sector: "Finance ops",
    place: "Nakuru–Naivasha",
    summary:
      "Invoice intake, line extraction, and reconciliation for an SME group that was closing the books from email threads.",
    outcome: "Month-end six days faster",
    year: "2025",
    status: "Live",
  },
  {
    id: "soko",
    code: "05",
    name: "Soko Desk",
    category: "Automation",
    sector: "Commerce",
    place: "Naivasha",
    summary:
      "WhatsApp order desk for a market cooperative — stock checks, M-Pesa receipts, and a morning pick-list for the floor.",
    outcome: "After-hours sales without extra staff",
    year: "2024",
    status: "Live",
  },
  {
    id: "herdline",
    code: "06",
    name: "Herdline",
    category: "Advisory",
    sector: "Dairy",
    place: "Mai Mahiu road",
    summary:
      "Intake logging and weekly yield dashboards for a collection point. A small system, built so the clerk does not carry the numbers in a book.",
    outcome: "Daily yield visible by 7 a.m.",
    year: "2026",
    status: "In build",
  },
];

export const STATS = [
  { value: "18", label: "Systems in production" },
  { value: "6", label: "Engagements in motion" },
  { value: "2.4k", label: "Hours returned last year" },
  { value: "Nationwide", label: "Service coverage" },
] as const;

export const NAV = [
  // "Dashboard" described the layout, not the destination. Visitor-facing nav
  // should say what the page *is*.
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export const PRINCIPLES = [
  {
    title: "On the floor first",
    body: "We do not automate a process we have not watched. Shadowing beats a workshop slide.",
  },
  {
    title: "Small systems that stay",
    body: "Prefer a tool your operator will still open in six months over a platform they will not.",
  },
  {
    title: "Intelligence with a handoff",
    body: "Every assistant knows when to stop and call a person. Confidence without an exit is a liability.",
  },
] as const;
