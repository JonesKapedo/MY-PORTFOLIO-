import type { ServiceId } from "./services-catalog";

/** Deeper client-facing blurbs layered over the catalogue defaults. */
export const SERVICE_COPY: Partial<
  Record<ServiceId, { blurb: string; outcome: string }>
> = {
  discovery: {
    blurb:
      "Walk the real work — tools, chats, and handoffs — then leave with a ranked first build and a price band you can plan against.",
    outcome:
      "Leadership agrees what to fix first, why, and roughly what it should cost before any deposit.",
  },
  websites: {
    blurb:
      "Focused sites and light browser apps built to take real requests — not brochure pages that leave enquiries in the void.",
    outcome:
      "Visitors find a clear path to brief, book, or buy; your team receives structured intake instead of vague messages.",
  },
  chatbots: {
    blurb:
      "WhatsApp and chat helpers that answer the same questions every day, capture intent, and pass hard cases to a named human with context.",
    outcome:
      "Fewer repeat threads in the queue. Serious enquiries still reach a person — with the history already attached.",
  },
  automation: {
    blurb:
      "One end-to-end process taken off manual copy-paste between the tools you already use, with exceptions surfaced instead of hidden.",
    outcome:
      "The boring path runs on its own; operators spend time on edge cases, not retyping the same fields.",
  },
  documents: {
    blurb:
      "Pull key fields from one agreed document type — invoices, forms, IDs — into the sheet or system your team already trusts.",
    outcome:
      "Less desk retyping, fewer missing rows at month-end, and a capture path operators can keep using.",
  },
  "ai-knowledge": {
    blurb:
      "Assistants grounded in your approved SOPs, price lists, and policies — with hard stops and a clear path to a person.",
    outcome:
      "Staff and clients get consistent answers from your material, not guesses from the open web.",
  },
  dashboards: {
    blurb:
      "One primary view or scheduled snapshot from the sources you already trust — not five files competing every morning.",
    outcome:
      "Managers see the numbers on a useful rhythm, not only after the month-end scramble.",
  },
  inbox: {
    blurb:
      "Rules that sort, label, and route shared mail so real work surfaces and noise stays out of the way.",
    outcome:
      "Owners see what needs a human reply first; routine mail stops clogging the same inbox.",
  },
  booking: {
    blurb:
      "Scoped booking flows with confirmations and reminders, wired to the calendar or list that is actually the source of truth.",
    outcome:
      "Customers secure a slot without phone tag; double-books and no-show chaos drop.",
  },
  pipeline: {
    blurb:
      "Simple stages for sales or jobs so enquiries captured from chat or web never vanish without an owner or next step.",
    outcome:
      "Every serious lead has a stage, an owner, and a follow-up — not a lost thread.",
  },
  alerts: {
    blurb:
      "Thresholds and escalations so the right person is notified when something breaks — and the wrong noise stays quiet.",
    outcome:
      "Fewer surprises. Clear who acts first when a signal crosses the line you defined.",
  },
  onboarding: {
    blurb:
      "Guided client onboarding sequences that replace scavenger-hunt email chains with ordered steps and visible status.",
    outcome:
      "New clients complete the right steps in the right order; your team sees where each one stands.",
  },
  integrations: {
    blurb:
      "One reliable connection between two systems you already pay for, with field mapping and visible error handling.",
    outcome:
      "Data moves without retyping; failures show up where someone can act, not in silence.",
  },
  "internal-forms": {
    blurb:
      "Structured internal requests — leave, stock, IT, approvals — routed to the right owner with simple status for the requester.",
    outcome:
      "Staff stop losing asks in chat; managers see a queue instead of a scattered inbox.",
  },
  reminders: {
    blurb:
      "Timed nudges for payments, renewals, or follow-ups on the channel your clients already answer.",
    outcome:
      "Collections and renewals get a steady push without someone remembering every date by hand.",
  },
  catalogs: {
    blurb:
      "Searchable product or service lists your team and clients can trust as the latest version.",
    outcome:
      "One place for current prices and offerings — not five PDFs on five phones.",
  },
  "handover-kits": {
    blurb:
      "Runbooks, access lists, and operator notes packaged so the system still runs when the builder steps away.",
    outcome:
      "Your team can operate, pause, and escalate without calling the implementer for every routine step.",
  },
};

export function serviceCopy(
  id: ServiceId,
  fallback: { blurb: string; outcome: string },
) {
  return SERVICE_COPY[id] ?? fallback;
}
