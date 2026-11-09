import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Shield, Target, Users } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import {
  ENGAGEMENT_STEPS,
  METHOD_STANDARDS,
  TEAM_SNAPSHOT,
  TRUST_MARKS,
} from "@/lib/portfolio-content";
import { COMPANY, PRINCIPLES } from "@/lib/site";

export const Route = createFileRoute("/company")({
  component: CompanyPage,
  head: () => ({
    meta: [
      { title: `About — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "GREAT TURBINEZ is a Kenya-based automation studio. Scoped process builds for operators — written proposal first, deposit only after you approve.",
      },
    ],
  }),
});

function CompanyPage() {
  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-16">
      <div className="flex w-full flex-col gap-12 lg:gap-16">
        <header className="max-w-3xl">
          <Eyebrow>Company · honest position</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            A small automation studio for operators who still run on people and paper.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {COMPANY.name} installs scoped process automation — WhatsApp helpers,
            enquiry pipelines, dashboards, document extraction, and the
            connections between tools you already pay for. We work from Kenya
            with operators in floriculture, hospitality, multi-site trading,
            energy ops, and retail counters.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: MapPin,
              title: "Where we work",
              body: `${COMPANY.country}. Remote-first delivery with on-the-ground mapping when the brief needs it.`,
            },
            {
              icon: Users,
              title: "Typical client",
              body: "Operator teams where manual work is still the largest cost centre — not Fortune 500 transformation programmes.",
            },
            {
              icon: Target,
              title: "What we ship",
              body: "One process at a time with written edges. Prefer systems people still open in six months.",
            },
            {
              icon: Shield,
              title: "How money works",
              body: "No charge to brief. Written proposal. Deposit only after you approve. Handoff you can run without us.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-line bg-surface px-5 py-5"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Icon className="size-4" strokeWidth={1.75} />
              </span>
              <h2 className="mt-4 text-sm font-semibold text-fg">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Delivery philosophy
            </h2>
            <ul className="mt-6 space-y-5">
              {PRINCIPLES.map((p) => (
                <li key={p.title} className="rounded-xl bg-surface px-5 py-4">
                  <p className="text-sm font-semibold text-fg">{p.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Engagement path
            </h2>
            <ol className="mt-6 space-y-3">
              {ENGAGEMENT_STEPS.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/15 font-mono text-[11px] font-medium text-accent">
                    {i + 1}
                  </span>
                  <span className="font-medium text-fg">{step}</span>
                </li>
              ))}
            </ol>
            <ul className="mt-8 space-y-2">
              {TRUST_MARKS.map((m) => (
                <li key={m} className="text-sm text-muted">
                  · {m}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            How standards show up in delivery
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {METHOD_STANDARDS.map((m) => (
              <div
                key={m.title}
                className="rounded-xl border border-line bg-surface/80 px-5 py-5"
              >
                <p className="text-sm font-semibold text-fg">{m.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Who shows up on the work
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            We stay deliberately small. Roles below describe how delivery is
            staffed — not a claim of a large bench or global HQ.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {TEAM_SNAPSHOT.map((t) => (
              <div key={t.role} className="rounded-xl bg-surface px-5 py-5">
                <p className="text-sm font-semibold text-fg">{t.role}</p>
                <p className="mt-2 text-sm text-muted">{t.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-accent/20 bg-accent/[0.06] px-6 py-8 sm:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Contact
          </h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-subtle">Enterprise</dt>
              <dd>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-accent hover:underline"
                >
                  {COMPANY.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-subtle">Sales</dt>
              <dd>
                <a
                  href={`mailto:${COMPANY.salesEmail}`}
                  className="text-accent hover:underline"
                >
                  {COMPANY.salesEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-subtle">Support</dt>
              <dd>
                <a
                  href={`mailto:${COMPANY.supportEmail}`}
                  className="text-accent hover:underline"
                >
                  {COMPANY.supportEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-subtle">Phone / WhatsApp</dt>
              <dd className="text-fg">{COMPANY.phoneDisplay}</dd>
            </div>
            <div>
              <dt className="text-subtle">Location</dt>
              <dd className="text-fg">{COMPANY.country}</dd>
            </div>
            <div>
              <dt className="text-subtle">Reply target</dt>
              <dd className="text-fg">{COMPANY.responseSla}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/brief">
                Start a private brief
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/work">See work</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
