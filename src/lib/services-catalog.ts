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

export const SERVICES: Service[] = [
  {
    id: "discovery",
    name: "Discovery",
    blurb: "Map the pain. Leave with a clear next build.",
    outcome: "Know what to fix first — and what it should cost.",
    includes: ["Working sessions", "Systems inventory", "Ranked opportunities", "Written recommendation"],
    excludes: ["Full system build", "Open-ended consulting without a brief"],
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
];

export function getService(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}
