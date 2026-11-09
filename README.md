# GREAT TURBINEZ — AI & Automation

**Scoped process automation for Kenyan operators.**  
One process at a time — written edges, proposal first, deposit only after you approve.

Live site: [great-turbinez.vercel.app](https://great-turbinez.vercel.app)

**What this repo is:** a marketing + lead site (portfolio). It is **not** a public SaaS product. Auth, PostgreSQL, and related modules in the tree are **dormant scaffold** for a future product surface — they are not part of the visitor journey.

---

## What we do

We install automation that holds: WhatsApp helpers, enquiry pipelines, dashboards, document extraction, system connections, and related scoped builds.

Typical clients are operators in floriculture, hospitality, multi-site trading, energy ops, and retail counters — teams where manual work is still the largest cost centre.

### How engagement works

1. **Brief** — private intake, no charge  
2. **Fit** — reply within two business days  
3. **Proposal** — written scope  
4. **Deposit** — only after you approve  
5. **Build** — scoped delivery  
6. **Handoff** — runbooks so the system runs without us

---

## Services (productised)

Seventeen offerings with clear includes / excludes, timelines, and indicative KES pricing — including Discovery, Websites & web apps, Chatbots & WhatsApp helpers, Work automation, Documents, AI on your information, Dashboards, Inbox helpers, Bookings, Pipeline, Alerts, Onboarding, Integrations, Internal forms, Reminders, Catalogs, and Handover kits.

Entry packages (self-qualification):

- **WhatsApp Helper Starter**
- **Month-End Close Path**
- **Discovery + First Build**

Paths on the site:

- **Concerns** — start from the pain  
- **Services** — how, when, quotation context  
- **Work** — situation → install → observed result  
- **Company** — who we are, honestly  
- **Brief** — private intake + confirmation loop

---

## Technology (live marketing surface)

- React 19 + TypeScript  
- TanStack Router / Start  
- Tailwind CSS 4 + void / studio design system  
- Radix UI  
- Vite 8  
- Vercel  
- FormSubmit + WhatsApp for intake  
- Client-side brief log (`src/lib/brief-crm.ts`) for local funnel review  

**Dormant scaffold (not on the public path):** PostgreSQL + Kysely, Better Auth, multiplayer helpers. Use `npm run build:with-db` only when activating that surface.

**Theme:** dark void + optional cool studio light.

---

## Development

```bash
git clone https://github.com/JonesKapedo/MY-PORTFOLIO-.git
cd MY-PORTFOLIO-
npm install
npm run dev
```

App: `http://localhost:8080`

```bash
npm run build       # production marketing build (Vite only)
npm run typecheck
npm run lint
npm test
```

### Environment

Marketing deploys do not require a database. Optional for scaffold:

```env
DATABASE_URL=postgresql://...
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=https://your-domain.com
```

Set `COMPANY.calendarUrl` in `src/lib/site.ts` when you publish a fit-call booking page.

---

## Contact

| | |
|---|---|
| Enterprise | enterprise@greatturbinez.com |
| Sales | sales@greatturbinez.com |
| Support | support@greatturbinez.com |
| Phone | +254 745 494 787 |
| Location | Kenya |

---

## Roadmap

See **[TODO.md](./TODO.md)** for the prioritised flaw checklist (credibility, conversion, proof, growth).

---

Copyright © GREAT TURBINEZ. All rights reserved.
