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
  /** Profile / brand mark shipped in public/ (used site-wide as logo). */
  logoSrc: "/portrait.jpg",
  logoFullSrc: "/portrait-full.jpg",
} as const;

export type ServiceId =
  | "discovery"
  | "websites"
  | "chatbots"
  | "automation"
  | "documents"
  | "ai-knowledge"
  | "dashboards";

export type Service = {
  id: ServiceId;
  name: string;
  blurb: string;
  outcome: string;
  includes: string[];
  excludes: string[];
  price: string;
  unit: string;
};

export const SERVICES: Service[] = [
  {
    id: "discovery",
    name: "Discovery",
    blurb: "Map the pain. Leave with a clear next build.",
    outcome: "Know what to fix first — and what it should cost.",
    includes: [
      "Process interviews and shadowing",
      "Systems and handoff inventory",
      "Ranked opportunities",
      "Recommended build and estimate",
    ],
    excludes: ["Full system build", "Ongoing operations support"],
    price: "KES 55,000",
    unit: "fixed",
  },
  {
    id: "websites",
    name: "Websites & web apps",
    blurb: "Sites and simple browser tools that take real requests.",
    outcome: "A presence that converts enquiries into work.",
    includes: [
      "Design and build for the agreed pages or flows",
      "Mobile-ready layout",
      "Enquiry or intake path",
      "Handover and basic training",
    ],
    excludes: ["Complex multi-tenant ERP", "Ongoing content marketing"],
    price: "From KES 120,000",
    unit: "per site or app",
  },
  {
    id: "chatbots",
    name: "Chatbots & WhatsApp helpers",
    blurb: "Repeat questions handled. A person when it matters.",
    outcome: "Fewer loops in chat. Clear handoff to a human.",
    includes: [
      "Scripted or knowledge-based replies",
      "Channel setup (web and/or WhatsApp where scoped)",
      "Human handoff rules",
      "Tuning window after go-live",
    ],
    excludes: ["Fully autonomous support with no escape path"],
    price: "From KES 95,000",
    unit: "per assistant",
  },
  {
    id: "automation",
    name: "Work automation",
    blurb: "One repeated process taken off manual copy-paste.",
    outcome: "The boring path runs without constant retyping.",
    includes: [
      "Scoped process design",
      "Build and integration into tools you already use",
      "Exception handling",
      "Operator handover",
    ],
    excludes: ["Open-ended change requests without re-quote"],
    price: "From KES 110,000",
    unit: "per process",
  },
  {
    id: "documents",
    name: "Documents & paperwork",
    blurb: "Key fields out of forms and PDFs into structured data.",
    outcome: "Less retyping. Cleaner records.",
    includes: [
      "One document type in scope",
      "Extraction and basic checks",
      "Posting to sheet or system as agreed",
      "Handover",
    ],
    excludes: ["Full legal archive products"],
    price: "From KES 100,000",
    unit: "per document type",
  },
  {
    id: "ai-knowledge",
    name: "AI on your information",
    blurb: "Answers from your docs, rules, and tone.",
    outcome: "Staff and clients get consistent answers from your material.",
    includes: [
      "Knowledge setup and guardrails",
      "Deployment on the agreed channel",
      "Human escalation path",
      "Tuning after go-live",
    ],
    excludes: ["Generic chatbots with no boundary on your data"],
    price: "From KES 150,000",
    unit: "per assistant",
  },
  {
    id: "dashboards",
    name: "Dashboards & reports",
    blurb: "One live view or scheduled snapshot.",
    outcome: "Numbers when you need them — not only at month-end.",
    includes: [
      "Data sources in scope",
      "One primary view or scheduled report",
      "Access for agreed roles",
      "Handover",
    ],
    excludes: ["Enterprise BI suite replacements"],
    price: "From KES 85,000",
    unit: "per dashboard",
  },
];

export function getService(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}

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
  summary: string;
  outcome: string;
  status: "Live" | "In build" | "Sample";
};

export const PROJECTS: Project[] = [
  {
    id: "bloomline",
    code: "01",
    name: "Bloomline Forecast",
    sector: "Floriculture",
    place: "Naivasha",
    summary: "Demand and waste visibility for a grower operation.",
    outcome: "Less wastage in the first season",
    status: "Live",
  },
  {
    id: "lodgeflow",
    code: "02",
    name: "Lodgeflow",
    sector: "Hospitality",
    place: "Rift Valley",
    summary: "Night desk load reduced through structured intake and routing.",
    outcome: "Night desk reduced to on-call",
    status: "Live",
  },
  {
    id: "ledgerwind",
    code: "03",
    name: "Ledgerwind",
    sector: "Finance ops",
    place: "Nakuru–Naivasha",
    summary: "Month-end close path tightened with clearer handoffs.",
    outcome: "Month-end six days faster",
    status: "Live",
  },
  {
    id: "olkaria-pulse",
    code: "04",
    name: "Olkaria Pulse",
    sector: "Energy",
    place: "Hell's Gate",
    summary: "Operational signals for fewer unplanned halts on scoped units.",
    outcome: "Fewer unplannedhalts on two units",
    status: "In build",
  },
];

export const NAV = [
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
  "Starting prices in KES. Final fee follows written scope. USD on request.";
