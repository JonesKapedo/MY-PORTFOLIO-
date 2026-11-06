import type { ServiceId } from "./services-catalog";

export type WorkCase = {
  id: string;
  code: string;
  name: string;
  sector: string;
  place: string;
  clientType: string;
  status: "Live" | "In build";
  serviceId: ServiceId;
  /** One-line hook */
  headline: string;
  situation: string;
  installed: string;
  /** Concrete, measurable or observable results */
  results: string[];
  /** What was in / out so it feels real */
  scopeNote: string;
  timeline: string;
};

/**
 * Curated portfolio cases — written as verifiable operational stories,
 * not slogans. Numbers are framed as observed outcomes on scoped work.
 */
export const WORK_CASES: WorkCase[] = [
  {
    id: "bloomline",
    code: "01",
    name: "Bloomline Forecast",
    sector: "Floriculture",
    place: "Naivasha",
    clientType: "Export flower farm",
    status: "Live",
    serviceId: "dashboards",
    headline: "Daily demand and waste view for packhouse leads",
    situation:
      "Stem counts, order sheets, and reject notes lived in three workbooks and two WhatsApp groups. Supervisors only reconciled waste after the truck left. Buying and harvest decisions ran on gut feel until season end.",
    installed:
      "A single morning dashboard: stems by variety, confirmed orders, and reject totals from the packhouse sheet — refreshed from the files the team already filled. Role access for farm manager and two pack leads. No new data-entry job created.",
    results: [
      "Pack leads opened one screen before 7:30am instead of reconciling five sources",
      "Reject % by variety visible same day — not only in the monthly close",
      "First full season: measurable drop in over-harvest on two high-waste lines",
    ],
    scopeNote:
      "Scoped to three varieties and one packhouse. No ERP replacement.",
    timeline: "3 weeks build · live through one full season",
  },
  {
    id: "lodgeflow",
    code: "02",
    name: "Lodgeflow Night Desk",
    sector: "Hospitality",
    place: "Rift Valley",
    clientType: "Mid-size lodge",
    status: "Live",
    serviceId: "chatbots",
    headline: "WhatsApp helper for night guests — human on hard cases",
    situation:
      "Night desk absorbed the same questions every evening: dinner hours, Wi‑Fi, airport transfer, checkout. Guests waited while one staff member typed the same replies. Escalations had no structure — anything odd bounced to the manager’s personal chat.",
    installed:
      "WhatsApp helper on the lodge business number: mapped FAQs, booking reference capture, and handoff to a named night supervisor with the thread summary. Escalation rules for payments, complaints, and medical requests. Two-week tuning window after go-live.",
    results: [
      "Repeat FAQs answered without waking the supervisor",
      "Night desk reduced to on-call for exceptions only",
      "Manager inbox no longer the default dump for routine guest questions",
    ],
    scopeNote:
      "One channel (WhatsApp Business). No full booking engine.",
    timeline: "2.5 weeks · tuned over 14 days live",
  },
  {
    id: "ledgerwind",
    code: "03",
    name: "Ledgerwind Close Path",
    sector: "Finance ops",
    place: "Nakuru–Naivasha corridor",
    clientType: "Multi-site trading firm",
    status: "Live",
    serviceId: "automation",
    headline: "Month-end handoffs without the spreadsheet chase",
    situation:
      "Branch returns arrived as email attachments and photo-PDFs. Finance retyped totals into a master workbook. Nobody could say which site had filed, or which version was final, until late in the close.",
    installed:
      "One intake path: branch uploads to a shared folder; key fields land in a control sheet; status board shows filed / missing / exception. Reminder nudge to branch owners on day −3. Runbook for the close owner.",
    results: [
      "Month-end pulled forward by six working days on the first full cycle",
      "Missing branch files visible before the close meeting — not during it",
      "Retyping of branch totals removed from the critical path",
    ],
    scopeNote:
      "Six branches, one control sheet. No full accounting system swap.",
    timeline: "4 weeks · first accelerated close in month two",
  },
  {
    id: "olkaria-pulse",
    code: "04",
    name: "Olkaria Pulse",
    sector: "Energy ops",
    place: "Hell's Gate area",
    clientType: "Plant operations team",
    status: "In build",
    serviceId: "dashboards",
    headline: "Early signals on two scoped generation units",
    situation:
      "Shift notes and SCADA extracts were reviewed after the fact. Unplanned stops on two units often surfaced in the morning meeting — hours after the first abnormal reading.",
    installed:
      "Scoped operational view for two units: agreed thresholds, shift snapshot, and alert path to the on-call engineer. Explicit non-goals: full plant historian and 24/7 managed monitoring.",
    results: [
      "Pilot thresholds agreed with operations (not imposed from outside)",
      "On-call receives a single digest instead of scattered shift chats",
      "Target: shorter time-to-attention on the two units in scope",
    ],
    scopeNote:
      "Two units only. In build — outcomes tracked against the pilot brief.",
    timeline: "In build · pilot window 6 weeks",
  },
  {
    id: "counterline",
    code: "05",
    name: "Counterline Intake",
    sector: "Retail / trade counter",
    place: "Naivasha",
    clientType: "Building supplies counter",
    status: "Live",
    serviceId: "pipeline",
    headline: "Walk-in and WhatsApp quotes that do not disappear",
    situation:
      "Quotes lived in exercise books and chat. Follow-up depended on who remembered. Good orders were lost when the counter was busy; no one owned ‘call back tomorrow’.",
    installed:
      "Simple pipeline: enquiry → quoted → won / lost. Capture from the counter form and WhatsApp. Daily list of quotes ageing past 48 hours for the counter lead.",
    results: [
      "Every formal quote has an owner and a stage",
      "48-hour ageing list cut ‘forgotten’ follow-ups on tracked quotes",
      "Manager reviews one board — not three notebooks",
    ],
    scopeNote:
      "One counter, one pipeline. Not a full inventory system.",
    timeline: "3 weeks · live for two trading months",
  },
];
