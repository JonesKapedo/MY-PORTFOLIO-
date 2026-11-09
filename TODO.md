# GREAT TURBINEZ — Platform TODO

Flaw-driven checklist (Nov 2026). Order: fix on the go → conversion → proof → growth.

Identity freeze: **marketing + lead machine for scoped Kenya ops automation.** Not a public SaaS product. Auth/DB remain dormant scaffold until a real product surface needs them.

---

## Tier 0 — Fix on the go (this branch)

- [x] **Dead weight on public path** — remove AuthProvider from root (passthrough was still mounted); document platform scaffold as dormant.
- [x] **Build ≠ migrate** — `npm run build` is Vite only; `db:migrate` stays optional for scaffold.
- [x] **Brief CRM + confirmation loop** — local brief log + post-submit confirmation (next steps, WhatsApp, calendar).
- [x] **Honest About / Company page** — real `/company` content (who, where, client size, philosophy); `/about` redirects there.
- [x] **Contact constants** — single `COMPANY` source; phone display + wa.me; optional calendar URL.
- [x] **Entry packages (3)** — named starters with price bands for self-qualification.
- [x] **README identity** — marketing site stack; auth/DB marked dormant, not product features.

---

## Tier 1 — Credibility & consistency

- [ ] **GitHub About + description** — match live tagline; no “Global AI Consulting Firm”.
- [ ] **Audit residual light surfaces** — forms, toasts, error states under dark/void.
- [ ] **Brand assets** — logo, banner, favicon, OG, PWA consistent.
- [ ] **Mobile dock + sidebar** — parity for Company and any new routes.

---

## Tier 2 — Proof & conversion

- [ ] **3–5 stronger case studies** — before/after numbers; anonymised screenshots with permission.
- [ ] **Instrument funnel** — brief starts → submissions → replies → proposals → closed (analytics + simple CRM export).
- [ ] **Server-side brief inbox** (optional) — when ready, replace FormSubmit-only with durable store; keep local log as fallback.
- [ ] **Vertical landing pages** — floriculture, lodge night ops, multi-site close.

---

## Tier 3 — Product depth

- [ ] **Expand Concerns library** — every concern → services + cases.
- [ ] **Visible delivery assets** — sample runbooks, handover kit outline, training checklist.
- [ ] **Strip or activate platform scaffold** — delete unused auth/db/multiplayer *or* wire brief CRM to them.

---

## Tier 4 — Growth & moat

- [ ] **Content engine** — short field pieces.
- [ ] **Referral / partner loops** — accountants, lodge software, exporters.
- [ ] **Optional process assessment** lead magnet.
- [ ] **SEO / distribution** — meta, OG, internal links from verticals.

---

## Design / polish (ongoing)

- [x] Void / studio atmosphere + a11y checklist (prior PR).
- [ ] Residual chrome card audit on long forms.
- [ ] prefers-reduced-motion verification on gear pages.

---

## Done in feat/platform-flaw-fixes

| Item | Notes |
|------|--------|
| TODO overhaul | All flaws ranked |
| AuthProvider out of root | Public path has no auth mount |
| build script | Vite only; migrate separate |
| Brief CRM | `src/lib/brief-crm.ts` + confirmation UI |
| Company page | Honest About |
| Entry packages | `ENTRY_PACKAGES` in portfolio-content |
| README | Identity + dormant platform note |
