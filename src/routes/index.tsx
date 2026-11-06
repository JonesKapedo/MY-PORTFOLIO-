import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { AnimatedTurbine } from "@/components/animated-turbine";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  COMPANY,
  ENGAGEMENT_STEPS,
  PRINCIPLES,
  PROJECTS,
  SERVICES,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  component: IntroPage,
  head: () => ({
    meta: [
      { title: `${COMPANY.name} — ${COMPANY.subtitle}` },
      {
        name: "description",
        content:
          "GREAT TURBINEZ Automation Services. Scoped automation for operators — from problem to brief, proposal, build, and handoff.",
      },
    ],
  }),
});

/**
 * First-visit company intro — calm, linear customer journey.
 */
function IntroPage() {
  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-10">
      <div className="mx-auto flex w-full max-w-3xl min-h-0 flex-col gap-16 sm:gap-20">
        {/* Identity */}
        <section className="hero-glow relative grid items-center gap-10 pt-2 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] text-accent uppercase">
              {COMPANY.subtitle}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.02] font-semibold tracking-tight sm:text-5xl">
              {COMPANY.name}
            </h1>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-subtle">
              <MapPin className="size-3.5 opacity-70" strokeWidth={1.5} />
              {COMPANY.location}
            </p>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted sm:text-base">
              We build practical automation where repetition costs time and
              money — scoped work for operators, handed over clean.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link to="/brief">
                  Start a brief
                  <ArrowRight className="size-4 opacity-80" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/concerns">Name the problem</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-full lg:max-w-[260px]">
            <AnimatedTurbine
              id="intro-hero"
              className="h-full w-full"
            />
          </div>
        </section>

        {/* Problem */}
        <section>
          <Eyebrow>01 — Problem</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
            What is costing you?
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
            Most work starts with a pain you already feel. Name it, or go
            straight to a brief.
          </p>
          <ul className="mt-6 space-y-0 divide-y divide-line/80 border-y border-line/80">
            {[
              "Same questions every day on WhatsApp",
              "Enquiries that never become jobs",
              "Data retyped between tools",
              "Numbers only at month-end",
            ].map((line) => (
              <li key={line}>
                <Link
                  to="/concerns"
                  className="flex items-center justify-between gap-4 py-3.5 text-sm text-fg transition-colors hover:text-accent"
                >
                  <span>{line}</span>
                  <ArrowRight className="size-3.5 shrink-0 text-subtle" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Offer */}
        <section>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <Eyebrow>02 — Offer</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                Named services
              </h2>
              <p className="mt-2 max-w-md text-sm text-muted">
                Clear outcomes, timeframes, and edges — not open-ended retainers.
              </p>
            </div>
            <Link
              to="/services"
              className="text-xs font-medium tracking-wide text-accent uppercase hover:opacity-80"
            >
              All services →
            </Link>
          </div>
          <div className="mt-6 grid gap-px overflow-hidden rounded-lg bg-line/60 sm:grid-cols-2">
            {SERVICES.slice(0, 6).map((s) => (
              <Link
                key={s.id}
                to="/services/$slug"
                params={{ slug: s.id }}
                className="group bg-surface px-4 py-4 transition-colors hover:bg-raised"
              >
                <p className="text-sm font-medium tracking-tight group-hover:text-accent">
                  {s.name}
                </p>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                  {s.blurb}
                </p>
                <p className="mt-3 text-[10px] tracking-wider text-subtle uppercase">
                  {s.timeframe}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Proof */}
        <section>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <Eyebrow>03 — Proof</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                Selected outcomes
              </h2>
            </div>
            <Link
              to="/work"
              className="text-xs font-medium tracking-wide text-accent uppercase hover:opacity-80"
            >
              All work →
            </Link>
          </div>
          <div className="mt-6 space-y-0 divide-y divide-line/80 border-y border-line/80">
            {PROJECTS.map((p) => (
              <article key={p.id} className="py-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] text-subtle">{p.code}</span>
                  <Badge variant={p.status === "Live" ? "live" : "default"}>
                    {p.status}
                  </Badge>
                  <span className="text-[10px] text-subtle">
                    {p.sector} · {p.place}
                  </span>
                </div>
                <h3 className="mt-1.5 text-sm font-medium">{p.name}</h3>
                <p className="mt-1 text-xs text-muted">{p.situation}</p>
                <p className="mt-1.5 text-xs text-accent">{p.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Engage */}
        <section>
          <Eyebrow>04 — Engagement</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
            How we work together
          </h2>
          <p className="mt-2 max-w-lg text-sm text-muted">
            Brief first. Written scope second. Build only after you approve.
          </p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-3">
            {ENGAGEMENT_STEPS.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="font-mono text-xs text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-fg">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Principles */}
        <section>
          <Eyebrow>Principles</Eyebrow>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.title}>
                <h3 className="text-sm font-medium">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-line/80 pt-10 pb-2">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
            Ready when you are
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted">
            We reply {COMPANY.responseSla}. No deposit until a written proposal
            is approved.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/brief">
                Start a brief
                <ArrowRight className="size-4 opacity-80" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link to="/work">See the work</Link>
            </Button>
          </div>
          <p className="mt-8 text-xs text-subtle">
            <a href={`mailto:${COMPANY.email}`} className="hover:text-accent">
              {COMPANY.email}
            </a>
            <span className="mx-2 opacity-40">·</span>
            {COMPANY.phone}
          </p>
        </section>
      </div>
    </PageFrame>
  );
}
