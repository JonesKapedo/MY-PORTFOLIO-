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

export type DeliveryPhase = { name: string; summary: string };

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

function svc(
  partial: Omit<Service, "delivery"> & { delivery: DeliveryPhase[] },
): Service {
  return partial;
}

export const SERVICES: Service[] = [
  svc({
    id: "discovery",
    name: "Discovery",
    blurb: "Map the pain. Leave with a clear next build.",
    outcome: "Know what to fix first — and what it should cost.",
    includes: ["Working sessions", "Systems inventory", "Ranked opportunities", "Written recommendation"],
    excludes: ["Full system build", "Open-ended consulting without a brief"],
    price: "KES 55,000",
    unit: "fixed",
    timeframe: "5–10 working days",
    timeframeNote: "Clock starts when decision-makers are available.",
    delivery: phases(["Align", "Confirm problem and stakeholders."], ["Observe", "Walk the real path of work."], ["Rank", "Shortlist what to automate first."], ["Recommend", "Written next step and price band."]),
    youProvide: ["Operator access", "Sample work", "One decision owner"],
    afterHandoff: ["You own the recommendation", "Build is quoted separately"],
  }),
  svc({
    id: "websites",
    name: "Websites & web apps",
    blurb: "Sites and simple browser tools that take real requests.",
    outcome: "A presence that converts enquiries into work.",
    includes: ["Agreed pages or flows", "Mobile-ready layout", "Enquiry or intake path", "Handover"],
    excludes: ["Complex multi-tenant ERP", "Unlimited redesign rounds"],
    price: "From KES 120,000",
    unit: "per site or app",
    timeframe: "2–5 weeks",
    timeframeNote: "Depends on content readiness and feedback speed.",
    delivery: phases(["Brief & structure", "Lock pages and actions."], ["Design direction", "Agree look before heavy build."], ["Build & connect", "Implement flows and wire forms."], ["Review & launch", "Go live and hand over essentials."]),
    youProvide: ["Copy and brand marks", "Domain access if owned", "Timely feedback"],
    afterHandoff: ["You control the live site", "Further features are new scope"],
  }),
  svc({
    id: "chatbots",
    name: "Chatbots & WhatsApp helpers",
    blurb: "Repeat questions handled. A person when it matters.",
    outcome: "Fewer loops in chat. Clear handoff to a human.",
    includes: ["Mapped FAQs", "Agreed channel", "Human handoff", "Tuning window"],
    excludes: ["Support with no escape path", "Replacing the whole support team"],
    price: "From KES 95,000",
    unit: "per assistant",
    timeframe: "2–4 weeks",
    timeframeNote: "Faster when FAQs and handoff owners are clear.",
    delivery: phases(["Map conversations", "List asks and escalations."], ["Script & guardrails", "Approve tone and hard stops."], ["Connect channel", "Install and test threads."], ["Tune", "Adjust from live questions."]),
    youProvide: ["FAQ material", "Escalation owner", "Channel access"],
    afterHandoff: ["You own the helper", "Content updates beyond tuning are separate"],
  }),
  svc({
    id: "automation",
    name: "Work automation",
    blurb: "One repeated process taken off manual copy-paste.",
    outcome: "The boring path runs without constant retyping.",
    includes: ["One end-to-end process", "Tools you already use", "Exception path", "Operator handover"],
    excludes: ["Every process at once", "Open-ended change without re-quote"],
    price: "From KES 110,000",
    unit: "per process",
    timeframe: "2–6 weeks",
    timeframeNote: "Driven by complexity and system access.",
    delivery: phases(["Define the path", "Triggers, steps, done."], ["Build the spine", "Automate and surface exceptions."], ["Test samples", "Side-by-side until match."], ["Hand over", "Train and leave a runbook."]),
    youProvide: ["Process owner", "System access", "Sample records"],
    afterHandoff: ["You run it day to day", "New processes are new scope"],
  }),
  svc({
    id: "documents",
    name: "Documents & paperwork",
    blurb: "Key fields out of forms and PDFs into structured data.",
    outcome: "Less retyping. Cleaner records.",
    includes: ["One document type", "Field extraction", "Post to your sheet or system", "Handover"],
    excludes: ["Digitising every archive", "Full legal archive products"],
    price: "From KES 100,000",
    unit: "per document type",
    timeframe: "2–5 weeks",
    timeframeNote: "Depends on document consistency.",
    delivery: phases(["Sample & fields", "Agree fields and accuracy."], ["Capture path", "How documents enter."], ["Extract & land", "Structured data in place."], ["Validate", "Edge cases before cutover."]),
    youProvide: ["Sample documents", "Destination access", "Field meanings"],
    afterHandoff: ["You own capture and review", "New types are separate"],
  }),
  svc({
    id: "ai-knowledge",
    name: "AI on your information",
    blurb: "Answers from your docs, rules, and tone.",
    outcome: "Staff and clients get consistent answers from your material.",
    includes: ["Knowledge from approved materials", "Guardrails", "Agreed channel", "Tuning"],
    excludes: ["Data you do not control", "Answers with no human escape"],
    price: "From KES 150,000",
    unit: "per assistant",
    timeframe: "3–6 weeks",
    timeframeNote: "Longer when sources are scattered.",
    delivery: phases(["Source pack", "Approve documents and rules."], ["Boundaries", "What never to invent."], ["Deploy", "Live surface and tests."], ["Tune", "Improve from real use."]),
    youProvide: ["SOPs and policies", "Answer reviewer", "Escalation contact"],
    afterHandoff: ["You control the pack", "Major refreshes are follow-on"],
  }),
  svc({
    id: "dashboards",
    name: "Dashboards & reports",
    blurb: "One live view or scheduled snapshot.",
    outcome: "Numbers when you need them — not only at month-end.",
    includes: ["Scoped sources", "One primary view or report", "Role access", "Handover"],
    excludes: ["Enterprise data warehouse programmes"],
    price: "From KES 85,000",
    unit: "per dashboard",
    timeframe: "1–4 weeks",
    timeframeNote: "Short when sources are clean.",
    delivery: phases(["Metrics", "Numbers that matter."], ["Connect sources", "Pull from trusted systems."], ["Build the view", "One clear screen."], ["Hand over", "How to read and act."]),
    youProvide: ["Source access", "Metric definitions", "Viewer list"],
    afterHandoff: ["You own day-to-day use", "New metrics are new scope"],
  }),
  svc({
    id: "inbox",
    name: "Email & inbox helpers",
    blurb: "Route, tag, and surface what needs a human.",
    outcome: "Less noise in the shared inbox. Faster reply on real work.",
    includes: ["Sorting rules", "Routing to owners", "Human flags", "Handover"],
    excludes: ["Acting without your rules", "Full email hosting"],
    price: "From KES 90,000",
    unit: "per inbox flow",
    timeframe: "2–4 weeks",
    timeframeNote: "Depends on mailbox access and rule exceptions.",
    delivery: phases(["Map the mail", "Categories and owners."], ["Rules", "Sort and escalate."], ["Install", "Connect and test."], ["Tune", "Adjust labels live."]),
    youProvide: ["Inbox access", "Owner list", "Message examples"],
    afterHandoff: ["You own the rules", "New categories are separate"],
  }),
  svc({
    id: "booking",
    name: "Bookings & scheduling",
    blurb: "Slots, confirmations, and fewer double-books.",
    outcome: "Customers book without a phone tag. Your calendar stays truthful.",
    includes: ["Scoped booking flow", "Confirmations", "Calendar handoff", "Handover"],
    excludes: ["Full clinic or airline platforms"],
    price: "From KES 100,000",
    unit: "per booking flow",
    timeframe: "2–4 weeks",
    timeframeNote: "Faster with simple availability rules.",
    delivery: phases(["Rules", "Services and buffers."], ["Flow", "Path and confirmations."], ["Connect", "Calendar and tests."], ["Launch", "Go live and train."]),
    youProvide: ["Service list", "Calendar access", "Cancellation policy"],
    afterHandoff: ["You control availability", "Extra locations are new scope"],
  }),
  svc({
    id: "pipeline",
    name: "Pipeline & follow-ups",
    blurb: "Leads and jobs do not vanish in chat.",
    outcome: "Every serious enquiry has an owner and a next step.",
    includes: ["Simple stages", "Channel capture", "Follow-up reminders", "Handover"],
    excludes: ["Full enterprise CRM migrations"],
    price: "From KES 105,000",
    unit: "per pipeline",
    timeframe: "2–5 weeks",
    timeframeNote: "Depends on stages and channels.",
    delivery: phases(["Stages", "Enquiry to closed."], ["Capture", "Entry and ownership."], ["Build", "Board and nudges."], ["Adopt", "One path for the team."]),
    youProvide: ["Current stages", "Step owners", "Sample enquiries"],
    afterHandoff: ["You run the pipeline", "New channels are separate"],
  }),
  svc({
    id: "alerts",
    name: "Alerts & escalations",
    blurb: "The right person hears when something breaks.",
    outcome: "Fewer surprises. Clear who acts when a threshold is hit.",
    includes: ["Triggers and thresholds", "Notification path", "Escalation", "Handover"],
    excludes: ["24/7 managed monitoring as a service"],
    price: "From KES 80,000",
    unit: "per alert set",
    timeframe: "1–3 weeks",
    timeframeNote: "Short when the signal already exists.",
    delivery: phases(["Signals", "What must wake someone."], ["Recipients", "First and next notice."], ["Wire", "Connect and test."], ["Hand over", "Change thresholds later."]),
    youProvide: ["What “bad” looks like", "Owner list", "Signal system access"],
    afterHandoff: ["You own thresholds", "New signals are new scope"],
  }),
  svc({
    id: "onboarding",
    name: "Client onboarding paths",
    blurb: "From yes to live without a scavenger hunt.",
    outcome: "New clients complete the right steps in the right order.",
    includes: ["Mapped checklist", "Sequenced tasks", "Visible status", "Handover"],
    excludes: ["Full regulated KYC platforms without partners"],
    price: "From KES 115,000",
    unit: "per onboarding path",
    timeframe: "2–5 weeks",
    timeframeNote: "Depends on steps and external checks.",
    delivery: phases(["Path", "Every client step."], ["Build", "Guided sequence."], ["Pilot", "Two or three real runs."], ["Release", "Cut over from ad-hoc chat."]),
    youProvide: ["Current onboarding mess", "Exception owner", "Past client packs"],
    afterHandoff: ["You own the path", "New product lines may need another path"],
  }),
  svc({
    id: "integrations",
    name: "System connections",
    blurb: "Two tools talk so people stop retyping.",
    outcome: "Data moves between systems you already pay for.",
    includes: ["One connection", "Field mapping", "Error handling", "Handover"],
    excludes: ["Replacing either system", "Unlimited new endpoints"],
    price: "From KES 100,000",
    unit: "per connection",
    timeframe: "2–5 weeks",
    timeframeNote: "Driven by API quality and field map.",
    delivery: phases(["Map fields", "What moves and how often."], ["Connect", "Link and log failures."], ["Test", "Samples until match."], ["Hand over", "Pause, retry, read the log."]),
    youProvide: ["Access to both systems", "Field dictionary", "Someone who knows both"],
    afterHandoff: ["You monitor day to day", "Extra systems are new connections"],
  }),
  svc({
    id: "internal-forms",
    name: "Internal request forms",
    blurb: "Staff ask for things without losing the thread.",
    outcome: "Requests are structured, routed, and trackable.",
    includes: ["One request type", "Routing", "Requester status", "Handover"],
    excludes: ["Full ITSM or HRIS suites"],
    price: "From KES 75,000",
    unit: "per request type",
    timeframe: "1–3 weeks",
    timeframeNote: "Faster with a short approval chain.",
    delivery: phases(["Request shape", "Fields, owners, done."], ["Build", "Form and status."], ["Pilot", "One team first."], ["Roll out", "Replace chat-only path."]),
    youProvide: ["Approvers and executors", "Past request examples", "Where status lives"],
    afterHandoff: ["You own the form", "New types are separate"],
  }),
  svc({
    id: "reminders",
    name: "Reminders & collections nudges",
    blurb: "Polite prompts before money or deadlines slip.",
    outcome: "Fewer forgotten invoices and missed dates.",
    includes: ["Schedule and tone", "Scoped channel", "Cycle list", "Handover"],
    excludes: ["Aggressive debt collection or legal notices"],
    price: "From KES 70,000",
    unit: "per reminder programme",
    timeframe: "1–3 weeks",
    timeframeNote: "Needs a clean list and stop rules.",
    delivery: phases(["Rules", "When to nudge and stop."], ["Copy", "Approve templates."], ["Run", "Small test batch."], ["Hand over", "Add people and pause."]),
    youProvide: ["Contacts and dates", "Tone", "Stop conditions"],
    afterHandoff: ["You own the list", "New campaigns are new scope"],
  }),
  svc({
    id: "catalogs",
    name: "Offer & catalog pages",
    blurb: "What you sell, clear enough to request.",
    outcome: "Buyers see options and can ask without confusion.",
    includes: ["Scoped catalog pages", "Offer structure", "Enquiry path", "Handover"],
    excludes: ["Multi-seller marketplaces"],
    price: "From KES 90,000",
    unit: "per catalog",
    timeframe: "2–4 weeks",
    timeframeNote: "Depends on photos and descriptions readiness.",
    delivery: phases(["Structure", "Groups and fields."], ["Content", "First items loaded."], ["Publish", "Enquiry path live."], ["Hand over", "How to update entries."]),
    youProvide: ["Offer list", "Images or placeholders", "Who updates later"],
    afterHandoff: ["You own content", "Major redesign is new scope"],
  }),
  svc({
    id: "handover-kits",
    name: "Operator handover kits",
    blurb: "The system ships with a guide people will open.",
    outcome: "New operators start without re-learning from chat history.",
    includes: ["Short runbook", "Critical path walkthrough", "Exception list", "Live walkthrough session"],
    excludes: ["Full LMS or video series"],
    price: "From KES 45,000",
    unit: "per kit",
    timeframe: "3–10 working days",
    timeframeNote: "Best when the live system is stable enough to document.",
    delivery: phases(["Capture", "Walk the operator path."], ["Draft", "Plain-language kit."], ["Review", "Operators correct it."], ["Deliver", "Final kit plus walkthrough."]),
    youProvide: ["System access and seasoned operator", "Review time", "Where the kit lives"],
    afterHandoff: ["You own updates", "Major system changes need a kit refresh"],
  }),
];

export function getService(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}
