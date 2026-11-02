/** Client-facing service catalogue. Outcomes and process — not implementation recipes. */

export type ServiceId =
  | "discovery"
  | "websites"
  | "chatbots"
  | "automation"
  | "documents"
  | "ai-knowledge"
  | "dashboards";

export type DeliveryPhase = {
  name: string;
  /** What the client experiences — not internal tooling. */
  summary: string;
};

export type Service = {
  id: ServiceId;
  name: string;
  blurb: string;
  outcome: string;
  includes: string[];
  excludes: string[];
  price: string;
  unit: string;
  /** Typical calendar window after deposit and access are in place. */
  timeframe: string;
  /** Short note on what moves the clock (client-side). */
  timeframeNote: string;
  delivery: DeliveryPhase[];
  youProvide: string[];
  afterHandoff: string[];
};

export const SERVICES: Service[] = [
  {
    id: "discovery",
    name: "Discovery",
    blurb: "Map the pain. Leave with a clear next build.",
    outcome: "Know what to fix first — and what it should cost.",
    includes: [
      "Working sessions with the people who run the process",
      "Inventory of systems, handoffs, and failure points",
      "Ranked opportunities with effort vs impact",
      "Written recommendation and estimate for the first build",
    ],
    excludes: [
      "Full system build",
      "Ongoing operations support",
      "Open-ended consulting without a brief",
    ],
    price: "KES 55,000",
    unit: "fixed",
    timeframe: "5–10 working days",
    timeframeNote:
      "Clock starts when decision-makers are available for sessions and sample work is shared.",
    delivery: [
      {
        name: "Align",
        summary: "Confirm the problem area, stakeholders, and what “better” means.",
      },
      {
        name: "Observe",
        summary: "Walk the real path of work — not the ideal process on a slide.",
      },
      {
        name: "Rank",
        summary: "Shortlist what to automate first, with trade-offs in plain language.",
      },
      {
        name: "Recommend",
        summary: "Deliver a written next step, scope sketch, and price band for the first build.",
      },
    ],
    youProvide: [
      "Access to operators for short sessions",
      "Examples of the documents, chats, or tools in play",
      "One owner who can decide priorities",
    ],
    afterHandoff: [
      "You own the recommendation document",
      "Build is optional and quoted separately",
    ],
  },
  {
    id: "websites",
    name: "Websites & web apps",
    blurb: "Sites and simple browser tools that take real requests.",
    outcome: "A presence that converts enquiries into work.",
    includes: [
      "Agreed pages or flows designed and built",
      "Mobile-ready layout",
      "Working enquiry, booking, or intake path",
      "Handover and basic operator training",
    ],
    excludes: [
      "Complex multi-tenant ERP",
      "Ongoing content marketing retainers",
      "Unlimited redesign rounds",
    ],
    price: "From KES 120,000",
    unit: "per site or app",
    timeframe: "2–5 weeks",
    timeframeNote:
      "Depends on content readiness, feedback speed, and whether a simple app (not only a brochure site) is in scope.",
    delivery: [
      {
        name: "Brief & structure",
        summary: "Lock pages, primary actions, and content you will supply.",
      },
      {
        name: "Design direction",
        summary: "Agree look and hierarchy before heavy build.",
      },
      {
        name: "Build & connect",
        summary: "Implement the agreed flows and wire forms to the right inbox or system.",
      },
      {
        name: "Review & launch",
        summary: "Your team checks real devices; we go live and hand over how to update essentials.",
      },
    ],
    youProvide: [
      "Copy, images, and brand marks (or clear instruction to draft placeholders)",
      "Domain and hosting access when you already own them",
      "Timely feedback on drafts",
    ],
    afterHandoff: [
      "You control the live site",
      "Small defect window as written in the proposal",
      "Further features are a new scope",
    ],
  },
  {
    id: "chatbots",
    name: "Chatbots & WhatsApp helpers",
    blurb: "Repeat questions handled. A person when it matters.",
    outcome: "Fewer loops in chat. Clear handoff to a human.",
    includes: [
      "Mapped FAQs and escalation rules",
      "Helper on the agreed channel (web and/or WhatsApp where scoped)",
      "Human handoff when the answer is unsure",
      "Tuning window after go-live",
    ],
    excludes: [
      "Fully autonomous support with no escape path",
      "Replacing your whole support team",
    ],
    price: "From KES 95,000",
    unit: "per assistant",
    timeframe: "2–4 weeks",
    timeframeNote:
      "Faster when FAQs and handoff owners are clear; slower when policies are undecided.",
    delivery: [
      {
        name: "Map the conversations",
        summary: "List what customers ask and when a human must take over.",
      },
      {
        name: "Script & guardrails",
        summary: "Approve the tone, answers, and hard stops before go-live.",
      },
      {
        name: "Connect the channel",
        summary: "Install on the agreed chat surface and test real threads.",
      },
      {
        name: "Tune",
        summary: "Adjust from live questions in the agreed window after launch.",
      },
    ],
    youProvide: [
      "Current FAQ material or call transcripts",
      "Named person for escalations",
      "Access to the chat channel in scope",
    ],
    afterHandoff: [
      "You own the live helper",
      "Content updates beyond the tuning window are scoped separately",
    ],
  },
  {
    id: "automation",
    name: "Work automation",
    blurb: "One repeated process taken off manual copy-paste.",
    outcome: "The boring path runs without constant retyping.",
    includes: [
      "One end-to-end process in scope",
      "Build into tools you already use where possible",
      "Exception path when the happy path fails",
      "Operator handover",
    ],
    excludes: [
      "Automating every process in the organisation at once",
      "Open-ended change requests without re-quote",
    ],
    price: "From KES 110,000",
    unit: "per process",
    timeframe: "2–6 weeks",
    timeframeNote:
      "Driven by process complexity and how quickly test data and system access are provided.",
    delivery: [
      {
        name: "Define the path",
        summary: "Document triggers, steps, owners, and what “done” means.",
      },
      {
        name: "Build the spine",
        summary: "Automate the agreed path and surface exceptions clearly.",
      },
      {
        name: "Test with real samples",
        summary: "Run side-by-side with the old way until results match expectations.",
      },
      {
        name: "Hand over",
        summary: "Train operators and leave a short runbook for day-to-day use.",
      },
    ],
    youProvide: [
      "A single process owner",
      "Access to the systems involved",
      "Sample records for testing",
    ],
    afterHandoff: [
      "You run the automation day to day",
      "New processes or major changes are new scope",
    ],
  },
  {
    id: "documents",
    name: "Documents & paperwork",
    blurb: "Key fields out of forms and PDFs into structured data.",
    outcome: "Less retyping. Cleaner records.",
    includes: [
      "One document type in scope",
      "Extraction of agreed fields and basic checks",
      "Posting to the sheet or system you name",
      "Handover",
    ],
    excludes: [
      "Digitising every archive in the building",
      "Full legal archive products",
    ],
    price: "From KES 100,000",
    unit: "per document type",
    timeframe: "2–5 weeks",
    timeframeNote:
      "Depends on document consistency and destination system access.",
    delivery: [
      {
        name: "Sample & fields",
        summary: "Agree which fields matter and what “good enough” accuracy means.",
      },
      {
        name: "Capture path",
        summary: "Define how documents enter the system (upload, email, or other agreed path).",
      },
      {
        name: "Extract & land",
        summary: "Move structured data into the destination you use every day.",
      },
      {
        name: "Validate",
        summary: "Review edge cases with your team before full cutover.",
      },
    ],
    youProvide: [
      "A set of real sample documents",
      "Destination spreadsheet or system access",
      "Someone to confirm field meanings",
    ],
    afterHandoff: [
      "You own the capture and review process",
      "New document types are scoped separately",
    ],
  },
  {
    id: "ai-knowledge",
    name: "AI on your information",
    blurb: "Answers from your docs, rules, and tone.",
    outcome: "Staff and clients get consistent answers from your material.",
    includes: [
      "Knowledge set-up from materials you approve",
      "Guardrails and escalation to a person",
      "Deployment on the agreed channel",
      "Tuning after go-live",
    ],
    excludes: [
      "Training on data you do not own or control",
      "Unbounded answers with no human escape",
    ],
    price: "From KES 150,000",
    unit: "per assistant",
    timeframe: "3–6 weeks",
    timeframeNote:
      "Longer when source documents are scattered or contradictory; shorter when a clean pack is ready.",
    delivery: [
      {
        name: "Source pack",
        summary: "Collect and approve the documents and rules the assistant may use.",
      },
      {
        name: "Boundaries",
        summary: "Define what it must never invent and when to escalate.",
      },
      {
        name: "Deploy",
        summary: "Put the assistant on the agreed surface and test with real questions.",
      },
      {
        name: "Tune",
        summary: "Improve from live use inside the agreed window.",
      },
    ],
    youProvide: [
      "Current SOPs, price lists, or policy packs",
      "A reviewer who can approve answers",
      "Escalation contact",
    ],
    afterHandoff: [
      "You control which materials stay in the pack",
      "Major knowledge refreshes can be scheduled as follow-on work",
    ],
  },
  {
    id: "dashboards",
    name: "Dashboards & reports",
    blurb: "One live view or scheduled snapshot.",
    outcome: "Numbers when you need them — not only at month-end.",
    includes: [
      "Scoped data sources",
      "One primary view or scheduled report",
      "Access for agreed roles",
      "Handover",
    ],
    excludes: [
      "Enterprise-wide data warehouse programmes",
      "Real-time telemetry for every asset on day one",
    ],
    price: "From KES 85,000",
    unit: "per dashboard",
    timeframe: "1–4 weeks",
    timeframeNote:
      "Short when sources are clean; longer when definitions of metrics still need agreement.",
    delivery: [
      {
        name: "Metrics",
        summary: "Agree the few numbers that matter and who uses them.",
      },
      {
        name: "Connect sources",
        summary: "Pull from the systems or files you already trust.",
      },
      {
        name: "Build the view",
        summary: "One clear screen or scheduled delivery — not five competing files.",
      },
      {
        name: "Hand over",
        summary: "Show owners how to read it and what to do when a number looks wrong.",
      },
    ],
    youProvide: [
      "Access to source data",
      "Definitions of each metric",
      "List of who may view the report",
    ],
    afterHandoff: [
      "You own day-to-day use",
      "New metrics or sources are a new scope",
    ],
  },
];

export function getService(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}
