export {
  SERVICES,
  getService,
  type Service,
  type ServiceId,
  type DeliveryPhase,
} from "./services-catalog";

export const COMPANY = {
  name: "GREAT TURBINEZ",
  subtitle: "Automation Services",
  tagline: "Automation Services",
  city: "Naivasha",
  country: "Kenya",
  location: "Naivasha, Kenya",
  email: "enterprise@greatturbinez.com",
  salesEmail: "sales@greatturbinez.com",
  supportEmail: "support@greatturbinez.com",
  phone: "+254745494787",
  year: new Date().getFullYear(),
  responseSla: "within two business days",
  logoSrc: "/brand-mark.svg",
  logoFullSrc: "/brand-mark.svg",
} as const;

import type { ServiceId } from "./services-catalog";

export type Concern = {
  slug: string;
  title: string;
  teaser: string;
  serviceId: ServiceId;
  situation: string[];
  fixedLooksLike: string[];
  includes: string[];
  excludes: string[];
};

export const CONCERNS: Concern[] = [
  {
    slug: "whatsapp-same-questions",
    title: "Customers ask the same things on WhatsApp",
    teaser: "Every day, the same replies. The queue never clears.",
    serviceId: "chatbots",
    situation: [
      "Your team spends hours answering the same questions about hours, prices, status, and next steps.",
      "Messages pile up. Good enquiries wait behind repeat traffic.",
    ],
    fixedLooksLike: [
      "Common questions get a consistent answer fast.",
      "Hard cases still reach a person — with context.",
    ],
    includes: [
      "Mapped FAQs and escalation rules",
      "Helper on the agreed channel",
      "Handoff to a human when confidence is low",
    ],
    excludes: ["Removing human support entirely"],
  },
  {
    slug: "enquiries-die-in-chat",
    title: "Enquiries die in chat and never become jobs",
    teaser: "Interest shows up. Follow-through does not.",
    serviceId: "chatbots",
    situation: [
      "People message, then disappear into unread threads.",
      "No structured capture means no pipeline — only noise.",
    ],
    fixedLooksLike: [
      "Enquiries are captured, tagged, and routed.",
      "Someone owns the next step every time.",
    ],
    includes: [
      "Intake flow in chat or web",
      "Routing rules",
      "Basic logging for follow-up",
    ],
    excludes: ["Full CRM product rebuild"],
  },
  {
    slug: "website-does-not-convert",
    title: "Our website doesn’t convert or take requests properly",
    teaser: "Traffic without a clear path to work.",
    serviceId: "websites",
    situation: [
      "The site looks fine but does not collect the right signal.",
      "Visitors leave without a brief, booking, or call path.",
    ],
    fixedLooksLike: [
      "Clear offer. Clear action.",
      "Requests land where your team can act.",
    ],
    includes: [
      "Focused pages and messaging",
      "Working enquiry or intake path",
      "Mobile-ready layout",
    ],
    excludes: ["Ongoing SEO retainers unless scoped separately"],
  },
  {
    slug: "simple-portal",
    title: "We need a simple portal for clients or staff",
    teaser: "One place to log in, see status, or submit work.",
    serviceId: "websites",
    situation: [
      "Files and updates live in chat, email, and personal drives.",
      "Clients and staff ask for the same status repeatedly.",
    ],
    fixedLooksLike: [
      "A browser tool for the agreed roles and flows.",
      "Less chasing across channels.",
    ],
    includes: [
      "Scoped screens and roles",
      "Auth as agreed",
      "Core flows only — not a full ERP",
    ],
    excludes: ["Enterprise multi-tenant platforms on day one"],
  },
  {
    slug: "retype-data-daily",
    title: "The team retypes the same data every day",
    teaser: "Copy-paste between tools is the real job.",
    serviceId: "automation",
    situation: [
      "The same fields move from form to sheet to system by hand.",
      "Errors grow with volume. Morale does not.",
    ],
    fixedLooksLike: [
      "One path runs end-to-end with fewer touches.",
      "Exceptions surface instead of hiding in spreadsheets.",
    ],
    includes: [
      "One process in scope",
      "Integration into tools you already use",
      "Exception handling",
    ],
    excludes: ["Automating every process in the organisation at once"],
  },
  {
    slug: "approvals-in-one-inbox",
    title: "Approvals wait in one inbox",
    teaser: "Everything stalls on a single person.",
    serviceId: "automation",
    situation: [
      "Requests sit unread. Work waits.",
      "There is no clear trail of who approved what.",
    ],
    fixedLooksLike: [
      "Approvals route with a record.",
      "Reminders and escalation when time runs out.",
    ],
    includes: [
      "Approval path design",
      "Notifications and logging",
      "Operator handover",
    ],
    excludes: ["Full policy engine for every department"],
  },
  {
    slug: "invoices-pile-up",
    title: "Invoices and forms pile up unprocessed",
    teaser: "Paper and PDFs outrun the team.",
    serviceId: "documents",
    situation: [
      "Documents arrive faster than they can be keyed in.",
      "The binder is still the system of record.",
    ],
    fixedLooksLike: [
      "Key fields land in a sheet or system.",
      "Less retyping for one agreed document type.",
    ],
    includes: [
      "One document type",
      "Extraction and basic checks",
      "Structured output",
    ],
    excludes: ["Digitising every archive in the building"],
  },
  {
    slug: "notes-never-reach-sheet",
    title: "Delivery notes and IDs never reach the spreadsheet",
    teaser: "Field paper stops at the desk.",
    serviceId: "documents",
    situation: [
      "Proof and IDs exist — but not where finance or ops can use them.",
      "Chasing scans becomes a second job.",
    ],
    fixedLooksLike: [
      "Capture path into structured storage.",
      "Fewer missing rows at month-end.",
    ],
    includes: [
      "Agreed document types",
      "Capture and extract flow",
      "Destination sheet or system",
    ],
    excludes: ["Hardware rollout beyond software scope"],
  },
  {
    slug: "cant-find-price-list",
    title: "Nobody can find the latest price list or SOP",
    teaser: "The truth lives in someone’s phone.",
    serviceId: "ai-knowledge",
    situation: [
      "Versions multiply. Staff guess.",
      "Customers get inconsistent answers.",
    ],
    fixedLooksLike: [
      "Answers drawn from the documents you approve.",
      "Clear limits — and a path to a person.",
    ],
    includes: [
      "Knowledge set-up from your materials",
      "Guardrails and escalation",
      "Agreed channel",
    ],
    excludes: ["Training on data you do not own or control"],
  },
  {
    slug: "new-staff-same-questions",
    title: "New staff ask the same internal questions for weeks",
    teaser: "Onboarding is a loop of interruptions.",
    serviceId: "ai-knowledge",
    situation: [
      "Every hire restarts the same FAQ with the team.",
      "SOPs exist but are not used in the moment.",
    ],
    fixedLooksLike: [
      "First answers come from approved material.",
      "Managers handle exceptions, not every basics question.",
    ],
    includes: [
      "Internal knowledge assistant",
      "Handoff to a person",
      "Tuning period",
    ],
    excludes: ["Full LMS or HRIS replacement"],
  },
  {
    slug: "numbers-at-month-end",
    title: "We only see the real numbers at month-end",
    teaser: "Decisions wait for the close.",
    serviceId: "dashboards",
    situation: [
      "Data exists in fragments across files and tools.",
      "Leaders operate on lag and instinct.",
    ],
    fixedLooksLike: [
      "One agreed view, updated on a useful rhythm.",
      "Less spreadsheet archaeology.",
    ],
    includes: [
      "Scoped data sources",
      "One primary dashboard or report",
      "Access for agreed roles",
    ],
    excludes: ["Company-wide data warehouse programmes"],
  },
  {
    slug: "one-daily-snapshot",
    title: "Managers want one daily snapshot, not five files",
    teaser: "Morning starts with hunting, not deciding.",
    serviceId: "dashboards",
    situation: [
      "Status is scattered across chats and workbooks.",
      "Nobody trusts a single source before noon.",
    ],
    fixedLooksLike: [
      "One snapshot. One place. Daily when scoped.",
      "Managers open a view, not a scavenger hunt.",
    ],
    includes: [
      "Daily or scheduled report design",
      "Key metrics only",
      "Delivery path agreed in scope",
    ],
    excludes: ["Real-time telemetry for every machine on day one"],
  },
  {
    slug: "dont-know-what-to-fix",
    title: "We know it hurts; we don’t know what to fix first",
    teaser: "Pain is clear. Priority is not.",
    serviceId: "discovery",
    situation: [
      "Everything feels urgent. Budget is finite.",
      "Building the wrong thing first wastes months.",
    ],
    fixedLooksLike: [
      "A ranked view of what to automate.",
      "A clear recommendation and estimate for the first build.",
    ],
    includes: [
      "On-the-ground mapping",
      "Opportunity ranking",
      "Written recommendation",
    ],
    excludes: ["Free open-ended consulting without a brief"],
  },
];

export function getConcern(slug: string): Concern | undefined {
  return CONCERNS.find((c) => c.slug === slug);
}

export function concernsForService(serviceId: ServiceId): Concern[] {
  return CONCERNS.filter((c) => c.serviceId === serviceId);
}

export type Project = {
  id: string;
  code: string;
  name: string;
  sector: string;
  place: string;
  situation: string;
  installed: string;
  outcome: string;
  status: "Live" | "In build" | "Sample";
  serviceId: ServiceId;
};

export const PROJECTS: Project[] = [
  {
    id: "bloomline",
    code: "01",
    name: "Bloomline Forecast",
    sector: "Floriculture",
    place: "Naivasha",
    situation: "Waste and demand were guessed until season end.",
    installed: "A demand and waste view operators could open daily.",
    outcome: "Less wastage in the first season",
    status: "Live",
    serviceId: "dashboards",
  },
  {
    id: "lodgeflow",
    code: "02",
    name: "Lodgeflow",
    sector: "Hospitality",
    place: "Rift Valley",
    situation: "Night desk drowned in repeat guest questions.",
    installed: "Structured intake and routing for the night desk.",
    outcome: "Night desk reduced to on-call",
    status: "Live",
    serviceId: "chatbots",
  },
  {
    id: "ledgerwind",
    code: "03",
    name: "Ledgerwind",
    sector: "Finance ops",
    place: "Nakuru–Naivasha",
    situation: "Month-end lived in scattered files and chasing.",
    installed: "Clearer handoffs and a tighter close path.",
    outcome: "Month-end six days faster",
    status: "Live",
    serviceId: "automation",
  },
  {
    id: "olkaria-pulse",
    code: "04",
    name: "Olkaria Pulse",
    sector: "Energy",
    place: "Hell's Gate",
    situation: "Unplanned halts surfaced too late on scoped units.",
    installed: "Operational signals for earlier attention.",
    outcome: "Fewer unplannedhalts on two units",
    status: "In build",
    serviceId: "dashboards",
  },
];

export const NAV = [
  { to: "/", label: "Intro" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/concerns", label: "Concerns" },
  { to: "/brief", label: "Brief" },
] as const;

export const PRINCIPLES = [
  {
    title: "Scope before build",
    body: "Written agreement on what is in and out. Deposit before work starts.",
  },
  {
    title: "Systems people will still use",
    body: "Prefer tools operators open in six months over platforms they abandon in six weeks.",
  },
  {
    title: "Intelligence with a handoff",
    body: "Every assistant knows when to stop and call a person.",
  },
] as const;

export const ENGAGEMENT_STEPS = [
  "Brief",
  "Fit",
  "Proposal",
  "Deposit",
  "Build",
  "Handoff",
] as const;

export const PRICE_NOTE =
  "Starting prices in KES. Final fee follows written scope. 50% deposit to start after proposal. 50% on handoff. USD on request.";

export const DEPOSIT_NOTE =
  "No deposit on this page. Brief first. Written scope second. 50% only after you approve the proposal.";

export const INTRO_STATS = [
  { label: "Focus", value: "One process" },
  { label: "Base", value: "Naivasha" },
  { label: "Path", value: "Scope → build" },
  { label: "Reply", value: "2 business days" },
] as const;
