import type { ServiceId } from "./services-catalog";

/** Manually curated delivery signals — update when numbers change. */
export const DELIVERY_STATS = [
  { value: "2 business days", label: "Brief reply target" },
  { value: "5+", label: "Live installs tracked" },
  { value: "50%", label: "Deposit only after proposal" },
  { value: "Written scope", label: "Before any build starts" },
] as const;

export const METHOD_STANDARDS = [
  {
    title: "Brief first",
    body: "Every engagement starts with a private brief. No invoice is created by submitting the form.",
  },
  {
    title: "Fit, then proposal",
    body: "We reply within two business days with fit direction. A written proposal follows only when we can own the outcome.",
  },
  {
    title: "Deposit after approval",
    body: "50% to start after you approve scope. 50% on handoff. Nothing is due from the brief itself.",
  },
  {
    title: "Handoff you can run",
    body: "Delivery ends with a system operators can use without us in the room — runbooks and agreed edges included.",
  },
] as const;

export const TEAM_SNAPSHOT = [
  {
    role: "Delivery lead",
    focus: "Scope, proposal, client communication",
  },
  {
    role: "Automation engineer",
    focus: "Integrations, flows, dashboards, handoff",
  },
  {
    role: "Operations advisor",
    focus: "Process mapping and exception design",
  },
] as const;

export const TRUST_MARKS = [
  "Built for operators in Kenya",
  "Scoped delivery — not open retainers",
  "Human handoff on every assistant",
  "Written edges before deposit",
] as const;

/** Named entry packages — tighter bands for self-qualification. */
export type EntryPackage = {
  id: string;
  name: string;
  blurb: string;
  band: string;
  timeframe: string;
  includes: string[];
  serviceId: ServiceId;
  briefHint: string;
};

export const ENTRY_PACKAGES: EntryPackage[] = [
  {
    id: "whatsapp-helper-starter",
    name: "WhatsApp Helper Starter",
    blurb: "Same questions every day — consistent answers and a clean handoff to a person.",
    band: "From KES 55,000",
    timeframe: "2–4 weeks typical",
    includes: [
      "Mapped FAQs and escalation rules",
      "Helper on an agreed WhatsApp number",
      "Handoff when confidence is low",
    ],
    serviceId: "chatbots",
    briefHint: "Entry package: WhatsApp Helper Starter",
  },
  {
    id: "month-end-close-path",
    name: "Month-End Close Path",
    blurb: "One close path with fewer retypes and visible exceptions — not a full finance rebuild.",
    band: "From KES 85,000",
    timeframe: "3–6 weeks typical",
    includes: [
      "One process mapped end-to-end",
      "Automation into tools you already use",
      "Operator runbook on handoff",
    ],
    serviceId: "automation",
    briefHint: "Entry package: Month-End Close Path",
  },
  {
    id: "discovery-first-build",
    name: "Discovery + First Build",
    blurb: "Rank what to fix first, then a written recommendation and estimate for the first install.",
    band: "From KES 35,000",
    timeframe: "1–2 weeks discovery",
    includes: [
      "On-the-ground or remote process mapping",
      "Ranked opportunity list",
      "Recommendation for the first build",
    ],
    serviceId: "discovery",
    briefHint: "Entry package: Discovery + First Build",
  },
];

export type IndustryPack = {
  id: string;
  name: string;
  blurb: string;
  problems: string[];
  serviceIds: ServiceId[];
  caseIds: string[];
};

export const INDUSTRY_PACKS: IndustryPack[] = [
  {
    id: "floriculture",
    name: "Floriculture",
    blurb: "Packhouse visibility, waste, and order truth without a new ERP.",
    problems: [
      "Waste only visible after the truck leaves",
      "Order sheets split across workbooks and chat",
      "Month-end is a typing marathon",
    ],
    serviceIds: ["dashboards", "documents", "automation"],
    caseIds: ["bloomline"],
  },
  {
    id: "hospitality",
    name: "Hospitality",
    blurb: "Night desk, guest WhatsApp, and bookings that match the calendar.",
    problems: [
      "Same guest questions every night",
      "Bookings promised in chat before the calendar",
      "Manager inbox is the default escalation",
    ],
    serviceIds: ["chatbots", "booking", "pipeline"],
    caseIds: ["lodgeflow"],
  },
  {
    id: "finance-ops",
    name: "Finance & multi-site ops",
    blurb: "Close path, branch returns, and one control view.",
    problems: [
      "Branch files arrive late and incomplete",
      "Retyping totals into a master workbook",
      "Numbers only at month-end",
    ],
    serviceIds: ["automation", "documents", "dashboards"],
    caseIds: ["ledgerwind"],
  },
];

export type ServiceComparison = {
  id: string;
  title: string;
  left: { id: ServiceId; label: string; when: string };
  right: { id: ServiceId; label: string; when: string };
};

export const SERVICE_COMPARISONS: ServiceComparison[] = [
  {
    id: "chat-vs-pipeline",
    title: "Answer vs capture",
    left: {
      id: "chatbots",
      label: "WhatsApp & chat helper",
      when: "Same questions burn hours; you need consistent answers and handoff.",
    },
    right: {
      id: "pipeline",
      label: "Enquiry-to-job pipeline",
      when: "Interest shows up but nobody owns follow-up or ageing quotes.",
    },
  },
  {
    id: "auto-vs-integration",
    title: "One process vs two systems",
    left: {
      id: "automation",
      label: "Process automation",
      when: "One operational path is full of retypes and invisible exceptions.",
    },
    right: {
      id: "integrations",
      label: "System integration",
      when: "Two tools you already pay for still need a person as the bridge.",
    },
  },
  {
    id: "dash-vs-docs",
    title: "See vs extract",
    left: {
      id: "dashboards",
      label: "Operator dashboard",
      when: "Data exists but leaders only see it at month-end.",
    },
    right: {
      id: "documents",
      label: "Document extraction",
      when: "Paper and PDFs outrun the team before numbers can appear.",
    },
  },
];

/** FAQ keyed by service id — shown on service detail pages. */
export const SERVICE_FAQS: Partial<
  Record<ServiceId, { q: string; a: string }[]>
> = {
  chatbots: [
    {
      q: "Will this replace our people on WhatsApp?",
      a: "No. It handles repeat questions and hands hard cases to a person with context. Human support stays for exceptions.",
    },
    {
      q: "Which channel do you install on?",
      a: "Usually WhatsApp Business on a number you control. Other channels only if agreed in written scope.",
    },
  ],
  pipeline: [
    {
      q: "Is this a full CRM?",
      a: "No. It is a scoped enquiry-to-job path: capture, owner, stage, ageing. Not a multi-year CRM programme.",
    },
  ],
  automation: [
    {
      q: "How many processes do you automate at once?",
      a: "One primary process per engagement unless the proposal says otherwise. Depth beats a thin spray of automations.",
    },
  ],
  documents: [
    {
      q: "Can you digitise our whole archive?",
      a: "Not in a standard engagement. We start with one document type and a clear destination sheet or system.",
    },
  ],
  dashboards: [
    {
      q: "Do you build a company-wide data warehouse?",
      a: "No. We deliver one agreed view from scoped sources on a useful rhythm.",
    },
  ],
  integrations: [
    {
      q: "Will you replace either system?",
      a: "No. We connect agreed fields between tools you already use, with visible failures — not silent ones.",
    },
  ],
};

export const DEFAULT_SERVICE_FAQS = [
  {
    q: "Is there a charge to send a brief?",
    a: "No. Submitting a brief does not create an invoice. Fees apply only after you approve a written proposal.",
  },
  {
    q: "How fast do you reply?",
    a: "Within two business days with fit direction and a clear next step.",
  },
  {
    q: "When is deposit due?",
    a: "Only after you approve the written proposal. Typically 50% to start and 50% on handoff.",
  },
] as const;
