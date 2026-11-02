/** Client-facing service catalogue. Outcomes and process — not implementation recipes. */

export type ServiceId =
  | "discovery"
  | "websites"
  | "chatbots"
  | "automation"
  | "documents"
  | "ai-knowledge"
  | "dashboards"
  | "inbox"
  | "booking"
  | "pipeline"
  | "alerts"
  | "onboarding"
  | "integrations"
  | "internal-forms"
  | "reminders"
  | "catalogs"
  | "handover-kits";

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
  timeframe: string;
  timeframeNote: string;
  delivery: DeliveryPhase[];
  youProvide: string[];
  afterHandoff: string[];
};

const phases = (
  a: [string, string],
  b: [string, string],
  c: [string, string],
  d: [string, string],
): DeliveryPhase[] => [
  { name: a[0], summary: a[1] },
  { name: b[0], summary: b[1] },
  { name: c[0], summary: c[1] },
  { name: d[0], summary: d[1] },
];

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
    delivery: phases(
      ["Align", "Confirm the problem area, stakeholders, and what “better” means."],
      ["Observe", "Walk the real path of work — not the ideal process on a slide."],
      ["Rank", "Shortlist what to automate first, with trade-offs in plain language."],
      [
        "Recommend",
        "Deliver a written next step, scope sketch, and price band for the first build.",
      ],
    ),
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
    delivery: phases(
      ["Brief & structure", "Lock pages, primary actions, and content you will supply."],
      ["Design direction", "Agree look and hierarchy before heavy build."],
      [
        "Build & connect",
        "Implement the agreed flows and wire forms to the right inbox or system.",
      ],
      [
        "Review & launch",
        "Your team checks real devices; we go live and hand over how to update essentials.",
      ],
    ),
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
    delivery: phases(
      ["Map the conversations", "List what customers ask and when a human must take over."],
      ["Script & guardrails", "Approve the tone, answers, and hard stops before go-live."],
      ["Connect the channel", "Install on the agreed chat surface and test real threads."],
      ["Tune", "Adjust from live questions in the agreed window after launch."],
    ),
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
    delivery: phases(
      ["Define the path", "Document triggers, steps, owners, and what “done” means."],
      ["Build the spine", "Automate the agreed path and surface exceptions clearly."],
      [
        "Test with real samples",
        "Run side-by-side with the old way until results match expectations.",
      ],
      ["Hand over", "Train operators and leave a short runbook for day-to-day use."],
    ),
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
    delivery: phases(
      [
        "Sample & fields",
        "Agree which fields matter and what “good enough” accuracy means.",
      ],
      [
        "Capture path",
        "Define how documents enter the system (upload, email, or other agreed path).",
      ],
      [
        "Extract & land",
        "Move structured data into the destination you use every day.",
      ],
      ["Validate", "Review edge cases with your team before full cutover."],
    ),
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
    delivery: phases(
      [
        "Source pack",
        "Collect and approve the documents and rules the assistant may use.",
      ],
      ["Boundaries", "Define what it must never invent and when to escalate."],
      [
        "Deploy",
        "Put the assistant on the agreed surface and test with real questions.",
      ],
      ["Tune", "Improve from live use inside the agreed window."],
    ),
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
    delivery: phases(
      ["Metrics", "Agree the few numbers that matter and who uses them."],
      ["Connect sources", "Pull from the systems or files you already trust."],
      [
        "Build the view",
        "One clear screen or scheduled delivery — not five competing files.",
      ],
      [
        "Hand over",
        "Show owners how to read it and what to do when a number looks wrong.",
      ],
    ),
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
  {
    id: "inbox",
    name: "Email & inbox helpers",
    blurb: "Route, tag, and surface what needs a human.",
    outcome: "Less noise in the shared inbox. Faster reply on real work.",
    includes: [
      "Rules for sorting and labelling inbound mail",
      "Routing to the right owner",
      "Clear flags for what still needs a person",
      "Operator handover",
    ],
    excludes: ["Reading or acting on private mail without your rules", "Full email hosting"],
    price: "From KES 90,000",
    unit: "per inbox flow",
    timeframe: "2–4 weeks",
    timeframeNote: "Depends on mailbox access and how many rule exceptions you need.",
    delivery: phases(
      ["Map the mail", "List categories, owners, and what “urgent” means."],
      ["Rules", "Approve how messages are sorted and when they escalate."],
      ["Install", "Connect the agreed mailbox and test with live samples."],
      ["Tune", "Adjust labels and routes after a short live window."],
    ),
    youProvide: [
      "Access to the shared inbox in scope",
      "List of owners and categories",
      "Examples of good and bad messages",
    ],
    afterHandoff: ["You own the rules day to day", "New categories are scoped separately"],
  },
  {
    id: "booking",
    name: "Bookings & scheduling",
    blurb: "Slots, confirmations, and fewer double-books.",
    outcome: "Customers book without a phone tag. Your calendar stays truthful.",
    includes: [
      "Scoped booking flow (web or chat path as agreed)",
      "Confirmations and basic reminders",
      "Calendar or sheet handoff",
      "Handover",
    ],
    excludes: ["Full clinic or airline reservation platforms"],
    price: "From KES 100,000",
    unit: "per booking flow",
    timeframe: "2–4 weeks",
    timeframeNote: "Faster when availability rules are simple and one calendar is the source of truth.",
    delivery: phases(
      ["Rules", "Define services, durations, buffers, and who owns the calendar."],
      ["Flow", "Design the booking path and confirmation messages."],
      ["Connect", "Wire to the agreed calendar or list and test real slots."],
      ["Launch", "Go live and train whoever handles exceptions."],
    ),
    youProvide: [
      "Service list and durations",
      "Calendar or sheet access",
      "Policy for cancellations and no-shows",
    ],
    afterHandoff: ["You control availability", "Extra locations or services are new scope"],
  },
  {
    id: "pipeline",
    name: "Pipeline & follow-ups",
    blurb: "Leads and jobs do not vanish in chat.",
    outcome: "Every serious enquiry has an owner and a next step.",
    includes: [
      "Simple stages for your sales or job flow",
      "Capture from the agreed channel",
      "Reminders for follow-up",
      "Handover",
    ],
    excludes: ["Full enterprise CRM licences and migration programmes"],
    price: "From KES 105,000",
    unit: "per pipeline",
    timeframe: "2–5 weeks",
    timeframeNote: "Depends on how many stages and channels must connect on day one.",
    delivery: phases(
      ["Stages", "Name the steps from enquiry to closed or delivered."],
      ["Capture", "Decide where leads enter and who owns them."],
      ["Build", "Install the board or list and follow-up nudges."],
      ["Adopt", "Train the team on the one path — not five spreadsheets."],
    ),
    youProvide: [
      "Current stages (even if messy)",
      "Who owns each step",
      "Sample recent enquiries",
    ],
    afterHandoff: ["You run the pipeline", "New channels or stages are scoped separately"],
  },
  {
    id: "alerts",
    name: "Alerts & escalations",
    blurb: "The right person hears when something breaks.",
    outcome: "Fewer surprises. Clear who acts when a threshold is hit.",
    includes: [
      "Agreed triggers and thresholds",
      "Notification path (chat, email, or other scoped channel)",
      "Escalation if unanswered",
      "Handover",
    ],
    excludes: ["24/7 managed monitoring as a service"],
    price: "From KES 80,000",
    unit: "per alert set",
    timeframe: "1–3 weeks",
    timeframeNote: "Short when the signal already exists; longer when definitions still need agreement.",
    delivery: phases(
      ["Signals", "List what must wake someone — and what must not."],
      ["Recipients", "Map who gets first notice and who is next."],
      ["Wire", "Connect the source and test false positives."],
      ["Hand over", "Leave a short guide for changing thresholds later."],
    ),
    youProvide: [
      "What “bad” looks like in numbers or events",
      "On-call or owner list",
      "Access to the system that holds the signal",
    ],
    afterHandoff: ["You own thresholds", "New signal types are new scope"],
  },
  {
    id: "onboarding",
    name: "Client onboarding paths",
    blurb: "From yes to live without a scavenger hunt.",
    outcome: "New clients complete the right steps in the right order.",
    includes: [
      "Mapped onboarding checklist",
      "Forms or tasks in sequence",
      "Status visible to you",
      "Handover",
    ],
    excludes: ["Full KYC or regulated onboarding platforms without specialist partners"],
    price: "From KES 115,000",
    unit: "per onboarding path",
    timeframe: "2–5 weeks",
    timeframeNote: "Depends on number of steps and external checks you require.",
    delivery: phases(
      ["Path", "List every step a new client must complete."],
      ["Build", "Turn the list into a guided sequence."],
      ["Pilot", "Run two or three real onboardings and adjust."],
      ["Release", "Train your team and cut over from ad-hoc chat."],
    ),
    youProvide: [
      "Current onboarding mess (emails, checklists, files)",
      "Owner for exceptions",
      "Sample past client packs",
    ],
    afterHandoff: ["You own the path", "New product lines may need a separate path"],
  },
  {
    id: "integrations",
    name: "System connections",
    blurb: "Two tools talk so people stop retyping.",
    outcome: "Data moves between systems you already pay for.",
    includes: [
      "One connection between two agreed systems",
      "Field mapping and basic error handling",
      "Test with real samples",
      "Handover",
    ],
    excludes: ["Replacing either system", "Unlimited new endpoints without re-quote"],
    price: "From KES 100,000",
    unit: "per connection",
    timeframe: "2–5 weeks",
    timeframeNote: "Driven by API or export quality and how clean the field map is.",
    delivery: phases(
      ["Map fields", "Agree what moves, how often, and who owns errors."],
      ["Connect", "Build the link and log failures visibly."],
      ["Test", "Compare samples until both sides match."],
      ["Hand over", "Show how to pause, retry, and read the log."],
    ),
    youProvide: [
      "Admin access or export paths for both systems",
      "Field dictionary (even rough)",
      "Someone who knows both tools",
    ],
    afterHandoff: ["You own day-to-day monitoring", "Extra systems are new connections"],
  },
  {
    id: "internal-forms",
    name: "Internal request forms",
    blurb: "Staff ask for things without losing the thread.",
    outcome: "Requests are structured, routed, and trackable.",
    includes: [
      "One internal request type",
      "Routing to the right owner",
      "Simple status for the requester",
      "Handover",
    ],
    excludes: ["Full ITSM or HRIS suites"],
    price: "From KES 75,000",
    unit: "per request type",
    timeframe: "1–3 weeks",
    timeframeNote: "Faster when the approval chain is short and clear.",
    delivery: phases(
      ["Request shape", "Define fields, owners, and done."],
      ["Build", "Form, route, and status view."],
      ["Pilot", "Run with one team and fix friction."],
      ["Roll out", "Train and replace the old chat-only path."],
    ),
    youProvide: [
      "Who approves and who executes",
      "Examples of past requests",
      "Where status should be visible",
    ],
    afterHandoff: ["You own the form", "New request types are scoped separately"],
  },
  {
    id: "reminders",
    name: "Reminders & collections nudges",
    blurb: "Polite prompts before money or deadlines slip.",
    outcome: "Fewer forgotten invoices and missed dates.",
    includes: [
      "Agreed reminder schedule and tone",
      "Messages on the scoped channel",
      "List of who is in the cycle",
      "Handover",
    ],
    excludes: ["Aggressive debt collection or legal notices"],
    price: "From KES 70,000",
    unit: "per reminder programme",
    timeframe: "1–3 weeks",
    timeframeNote: "Needs a clean list of contacts and clear rules for stop messages.",
    delivery: phases(
      ["Rules", "When to nudge, when to stop, who escalates."],
      ["Copy", "Approve tone and message templates."],
      ["Run", "Connect the list and test a small batch."],
      ["Hand over", "Show how to add people and pause the cycle."],
    ),
    youProvide: [
      "Contact list and amounts or dates",
      "Brand tone for messages",
      "Stop conditions",
    ],
    afterHandoff: ["You own the list", "New campaigns are new scope"],
  },
  {
    id: "catalogs",
    name: "Offer & catalog pages",
    blurb: "What you sell, clear enough to request.",
    outcome: "Buyers see options and can ask without confusion.",
    includes: [
      "Scoped catalog or offer pages",
      "Clear structure for products or packages",
      "Request or enquiry path",
      "Handover",
    ],
    excludes: ["Full marketplace with payments from many sellers"],
    price: "From KES 90,000",
    unit: "per catalog",
    timeframe: "2–4 weeks",
    timeframeNote: "Depends on how ready photos, prices, and descriptions are.",
    delivery: phases(
      ["Structure", "Groups, fields, and what must be visible."],
      ["Content", "Load or guide your team through first items."],
      ["Publish", "Go live with enquiry or order path as scoped."],
      ["Hand over", "Show how to add and update entries."],
    ),
    youProvide: [
      "List of offers with prices or bands",
      "Images or permission to use placeholders",
      "Who updates the catalog later",
    ],
    afterHandoff: ["You own content updates", "Major redesign is new scope"],
  },
  {
    id: "handover-kits",
    name: "Operator handover kits",
    blurb: "The system ships with a guide people will open.",
    outcome: "New operators start without re-learning from chat history.",
    includes: [
      "Short runbook for the scoped system",
      "Screenshots or walkthrough of critical paths",
      "Exception list — what to do when it fails",
      "One live walkthrough session",
    ],
    excludes: ["Full LMS courses or video production series"],
    price: "From KES 45,000",
    unit: "per kit",
    timeframe: "3–10 working days",
    timeframeNote: "Best when the live system is already stable enough to document.",
    delivery: phases(
      ["Capture", "Walk the real operator path with your team."],
      ["Draft", "Write the kit in plain language."],
      ["Review", "Operators correct what is wrong or missing."],
      ["Deliver", "Final kit plus one live walkthrough."],
    ),
    youProvide: [
      "Access to the system and a seasoned operator",
      "Time for one review pass",
      "Where the kit should live",
    ],
    afterHandoff: ["You own updates when the process changes", "Major system changes need a kit refresh"],
  },
];

export function getService(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}
