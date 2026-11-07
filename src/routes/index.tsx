import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GearSystem } from "@/components/gear-system";
import { Eyebrow, FunnelClose, PageFrame } from "@/components/page-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  COMPANY,
  ENGAGEMENT_STEPS,
  PROJECTS,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  component: IntroPage,
  head: () => ({
    meta: [
      { title: `${COMPANY.name} — ${COMPANY.subtitle}` },
      {
        name: "description",
        content:
          "GREAT TURBINEZ designs scoped automation for operators. Brief, proposal, build, handoff.",
      },
    ],
  }),
});

const PATHS = [
  {
    step: "01",
    title: "Name the friction",
    body: "WhatsApp loops, lost leads, retyping, month-end chaos — start from the pain you feel.",
    to: "/concerns" as const,
    cta: "Browse concerns",
  },
  {
    step: "02",
    title: "Choose a service",
    body: "Open a named offering for how we deliver, what is in scope, and an indicative quotation.",
    to: "/services" as const,
    cta: "View services",
  },
  {
    step: "03",
    title: "See proof",
    body: "Situation, install, and observed results from work already in the field.",
    to: "/work" as const,
    cta: "View work",
  },
] as const;

function IntroPage() {
  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-16">
      <div className="flex w-full flex-col gap-20 lg:gap-24">
        {/* 1. Hero */}
        <section className="hero-glow relative grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] text-accent uppercase">
              {COMPANY.subtitle}
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl xl:text-7xl">
              {COMPANY.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Scoped automation for operators. One process at a time — written
              edges, clean handoff, no open-ended chaos.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/brief">
                  Start a private brief
                  <ArrowRight className="size-4 opacity-80" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[320px] animate-float-soft lg:mx-0 lg:max-w-[380px] lg:justify-self-end">
            <GearSystem className="h-auto w-full" />
          </div>
        </section>

        {/* 2. Clear path for new visitors */}
        <section className="w-full">
          <Eyebrow>How to use this site</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Three ways in. One way out: a brief.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Pick the door that matches where you are. Every path ends at a
            private brief — we reply {COMPANY.responseSla}.
          </p>

          <div className="mt-12 grid w-full gap-6 lg:grid-cols-3">
            {PATHS.map((p) => (
              <Link
                key={p.step}
                to={p.to}
                className="service-card group flex flex-col rounded-2xl border border-line/50 bg-surface/50 p-7 transition-colors hover:border-accent/30 hover:bg-raised"
              >
                <span className="font-mono text-xs text-accent">{p.step}</span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
                <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  {p.cta}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. Problem — short */}
        <section className="w-full border-y border-line/60 py-14">
          <div className="max-w-3xl">
            <Eyebrow>Why we exist</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Manual work that software should already own is costing you margin
              and focus.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              Repeat WhatsApp answers. Leads that never become jobs. Data
              retyped between tools. Numbers only at month-end. We install one
              scoped fix at a time — not a platform you abandon in six weeks.
            </p>
          </div>
        </section>

        {/* 4. How engagement works */}
        <section className="w-full">
          <Eyebrow>Engagement</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Brief → fit → proposal → deposit → build → handoff
          </h2>
          <ol className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {ENGAGEMENT_STEPS.map((step, i) => (
              <li
                key={step}
                className="rounded-xl bg-surface/60 px-5 py-5"
              >
                <span className="font-mono text-[11px] text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-semibold text-fg">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted">
            No deposit until you approve a written proposal. That is non-negotiable.
          </p>
        </section>

        {/* 5. Proof — compact */}
        <section className="w-full">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Outcomes, not slogans
              </h2>
            </div>
            <Link
              to="/work"
              className="text-sm font-semibold text-accent hover:opacity-80"
            >
              Full case file →
            </Link>
          </div>
          <div className="mt-10 grid w-full gap-4 sm:grid-cols-2">
            {PROJECTS.slice(0, 4).map((p) => (
              <article
                key={p.id}
                className="rounded-xl bg-surface/50 px-6 py-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={p.status === "Live" ? "live" : "default"}>
                    {p.status}
                  </Badge>
                  <span className="text-[11px] text-subtle">{p.sector}</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-accent">{p.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 6. Single CTA */}
        <FunnelClose
          title="Ready when you are"
          body={`Send a private brief. We reply ${COMPANY.responseSla} with fit and direction. Build starts only after you approve written scope.`}
          primary={
            <Button asChild size="lg">
              <Link to="/brief">
                Start a private brief
                <ArrowRight className="size-4 opacity-80" />
              </Link>
            </Button>
          }
          secondary={
            <Button asChild variant="ghost" size="lg">
              <Link to="/concerns">I have a specific pain</Link>
            </Button>
          }
        />
      </div>
    </PageFrame>
  );
}
