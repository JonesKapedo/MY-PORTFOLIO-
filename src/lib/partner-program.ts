/** Partner Network — curated, deliverable benefits at a fixed monthly seat. */

export const PARTNER_FEE_USD = 100;

export const PARTNER_PROGRAM = {
  name: "GREAT TURBINEZ Partner Network",
  tagline: "Referral seats for automation practices we trust",
  feeLabel: `$${PARTNER_FEE_USD} / month`,
  feeNote:
    "Billed monthly. Cancel with 30 days’ notice. Seat is for one practice entity.",
  whoFits: [
    "Automation, integration, or ops-software studios that already ship client work",
    "Agencies that need a specialist partner when the brief is process-heavy",
    "Regional operators who want a formal referral path — not informal WhatsApp favours",
  ],
  whoDoesNot: [
    "Individuals seeking free leads with no delivery capacity",
    "Practices that cannot name a technical owner for referred work",
    "Open-ended “reseller” requests without a defined service boundary",
  ],
  benefits: [
    {
      title: "Qualified referral queue",
      body: "When a brief is a strong fit for your stack and geography, we introduce you with context — not a cold name-drop. Volume is selective; quality is the point.",
    },
    {
      title: "Co-delivery on scoped builds",
      body: "Where a engagement needs a second pair of hands, partners may be invited under a written split of scope and fee. No surprise subcontracting.",
    },
    {
      title: "Shared engagement standards",
      body: "Access to our brief → proposal → deposit → handoff language so client expectations stay aligned when work is referred either way.",
    },
    {
      title: "Partner channel",
      body: "A dedicated path for partner questions and referral updates — separate from the public brief queue.",
    },
    {
      title: "Listing on the Partner page",
      body: "After onboarding, your practice name and focus appear as an active network member (optional if you prefer quiet referral-only).",
    },
    {
      title: "Priority when capacity is tight",
      body: "Active partners are considered first when we cannot take a fit brief ourselves and need a trusted hand-off.",
    },
  ],
  obligations: [
    "Respond to referred introductions within two business days",
    "Honour written scope; no bait-and-switch pricing on referred clients",
    "Keep client data confidential; no poaching of GREAT TURBINEZ active engagements",
    "Maintain professional indemnity / reasonable delivery insurance where your market expects it",
  ],
  process: [
    "Submit a partner application with practice profile and sample work",
    "Fit review within five business days",
    "Onboarding call and seat activation at $100/month",
    "Referral and co-delivery rules confirmed in a short partner schedule",
  ],
} as const;
