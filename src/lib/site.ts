export {
  SERVICES,
  getService,
  type Service,
  type ServiceId,
  type DeliveryPhase,
} from "./services-catalog";

export const COMPANY = {
  name: "GREAT TURBINEZ",
  subtitle: "AI & Automation",
  tagline: "AI & Automation",
  city: "",
  country: "Kenya",
  location: "Kenya",
  email: "enterprise@greatturbinez.com",
  salesEmail: "sales@greatturbinez.com",
  supportEmail: "support@greatturbinez.com",
  /** E.164-style digits for tel: / wa.me */
  phone: "+254745494787",
  /** Human-readable phone for UI */
  phoneDisplay: "+254 745 494 787",
  /**
   * Optional 15–20 min fit-call link (Cal.com / Google Calendar / etc.).
   * Leave empty until you publish a booking page — confirmation UI hides the CTA.
   */
  calendarUrl: "",
  year: new Date().getFullYear(),
  responseSla: "within two business days",
  logoSrc: "/logo-square.jpg",
  logoFullSrc: "/brand-banner.jpg",
} as const;

import type { ServiceId } from "./services-catalog";

/** Delivery capabilities shown on intro — mapped to services, no extra routes. */
export const PLATFORM_FEATURES: {
  title: string;
  body: string;
  serviceId: ServiceId;
}[] = [
  {
    title: "WhatsApp & chat intake",
    body: "Structured replies, capture, and handoff so the desk is not the only system of record.",
    serviceId: "chatbots",
  },
  {
    title: "Enquiry-to-job pipeline",
    body: "Leads tagged, routed, and aged — so interest does not die in unread threads.",
    serviceId: "pipeline",
  },
  {
    title: "Process automation",
    body: "One operational path end-to-end: fewer retypes, visible exceptions, cleaner handoffs.",
    serviceId: "automation",
  },
  {
    title: "Document extraction",
    body: "Invoices, notes, and forms into sheets or systems — month-end without the typing marathon.",
    serviceId: "documents",
  },
  {
    title: "Operator dashboards",
    body: "One agreed view on a useful rhythm so decisions are not trapped until the close.",
    serviceId: "dashboards",
  },
  {
    title: "Knowledge assistants",
    body: "Answers from your approved materials, with a hard stop when a person must take over.",
    serviceId: "ai-knowledge",
  },
  {
    title: "System integrations",
    body: "Agreed fields move between tools you already pay for — on a schedule or a trigger.",
    serviceId: "integrations",
  },
  {
    title: "Booking & calendars",
    body: "Real availability, confirmations, and basic reminders without double-booking in chat.",
    serviceId: "booking",
  },
  {
    title: "Alert & escalation paths",
    body: "Thresholds notify the right owner before the customer becomes the alarm.",
    serviceId: "alerts",
  },
  {
    title: "Client onboarding flows",
    body: "Guided checklists and status after the sale closes — less scavenger-hunt kickoff.",
    serviceId: "onboarding",
  },
  {
    title: "Inbox triage rules",
    body: "Shared mail labelled and routed so real work is not buried under noise.",
    serviceId: "inbox",
  },
  {
    title: "Conversion-ready sites",
    body: "Focused pages and intake paths that collect the signal your team can act on.",
    serviceId: "websites",
  },
];

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
      "Tone and accuracy depend on who is on the phone — not on an approved answer set.",
    ],
    fixedLooksLike: [
      "Common questions get a consistent answer fast.",
      "Hard cases still reach a person — with context.",
      "Night and peak hours stop consuming the whole desk.",
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
    serviceId: "pipeline",
    situation: [
      "People message, then disappear into unread threads.",
      "No structured capture means no pipeline — only noise.",
      "Nobody can say how many serious leads were lost last month.",
    ],
    fixedLooksLike: [
      "Enquiries are captured, tagged, and routed.",
      "Someone owns the next step every time.",
      "Ageing quotes surface before they go cold.",
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
      "Forms go to a mailbox nobody owns.",
    ],
    fixedLooksLike: [
      "Clear offer. Clear action.",
      "Requests land where your team can act.",
      "Mobile visitors complete the same path as desktop.",
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
      "New hires are trained on retyping before they are trained on judgement.",
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
      "Month-end becomes a scanning and typing marathon.",
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
      "By the time the report arrives, the window to act has closed.",
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
  {
    slug: "calendar-double-books",
    title: "Bookings collide and confirmations are manual",
    teaser: "The calendar and the chat disagree.",
    serviceId: "booking",
    situation: [
      "Slots are promised in chat before the calendar is checked.",
      "Confirmations and reminders depend on someone remembering to send them.",
    ],
    fixedLooksLike: [
      "Customers book against real availability.",
      "Confirmations and basic reminders go out without a manual chase.",
    ],
    includes: [
      "Scoped booking flow",
      "Calendar or sheet handoff",
      "Confirmation path",
    ],
    excludes: ["Full multi-site reservation platforms"],
  },
  {
    slug: "two-systems-no-talk",
    title: "Two systems never talk — staff retype between them",
    teaser: "You pay for both tools and still do the glue work.",
    serviceId: "integrations",
    situation: [
      "Sales, ops, or finance each have a system of record.",
      "The bridge is a person with a spreadsheet every afternoon.",
    ],
    fixedLooksLike: [
      "Agreed fields move on a schedule or trigger.",
      "Failures are visible — not silent.",
    ],
    includes: [
      "One connection between two systems",
      "Field mapping and basic error handling",
      "Test with real samples",
    ],
    excludes: ["Replacing either system"],
  },
  {
    slug: "alerts-too-late",
    title: "Problems surface only when a customer complains",
    teaser: "No signal until the damage is already social.",
    serviceId: "alerts",
    situation: [
      "Thresholds exist in someone’s head, not in a system.",
      "The first alert is a phone call from outside the building.",
    ],
    fixedLooksLike: [
      "Agreed triggers notify the right owner.",
      "Escalation if the first person does not act.",
    ],
    includes: [
      "Trigger and recipient map",
      "Notification path",
      "Handover for threshold changes",
    ],
    excludes: ["24/7 managed monitoring as a service"],
  },
  {
    slug: "onboarding-scavenger",
    title: "New clients face a scavenger hunt after they say yes",
    teaser: "The sale closes. The chaos begins.",
    serviceId: "onboarding",
    situation: [
      "Forms, files, and approvals arrive out of order over chat.",
      "Nobody sees a single status of “ready to start work.”",
    ],
    fixedLooksLike: [
      "A guided sequence with visible status.",
      "Fewer kickoff delays caused by missing paperwork.",
    ],
    includes: [
      "Mapped onboarding checklist",
      "Forms or tasks in sequence",
      "Status visible to you",
    ],
    excludes: ["Full regulated KYC platforms without specialists"],
  },
  {
    slug: "shared-inbox-noise",
    title: "The shared inbox is noise — real work is buried",
    teaser: "Everything is “unread.” Nothing is prioritised.",
    serviceId: "inbox",
    situation: [
      "Promotions, status mail, and real enquiries share one stream.",
      "Owners cannot see what still needs a human reply.",
    ],
    fixedLooksLike: [
      "Mail is labelled and routed by agreed rules.",
      "What needs a person is obvious.",
    ],
    includes: [
      "Sorting and labelling rules",
      "Routing to owners",
      "Operator handover",
    ],
    excludes: ["Full email hosting or migration programmes"],
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
    place: "Rift Valley",
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
    place: "Kenya",
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
    place: "Kenya",
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
  { to: "/company", label: "Company" },
  { to: "/partners", label: "Partners" },
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
