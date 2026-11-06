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

function IntroPage() {
  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-14">
      <div className="flex w-full min-h-0 flex-col gap-16 sm:gap-20 lg:gap-24">
        {/* Identity — full width */}
        <section className="hero-glow relative grid items-center gap-10 pt-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 xl:gap-16">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] text-accent uppercase">
              {COMPANY.subtitle}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl xl:text-6xl">
              {COMPANY.name}
            </h1>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-subtle">
              <MapPin className="size-3.5 opacity-70" strokeWidth={1.5} />
              {COMPANY.location}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Practical automation where repetition costs time and money —
              scoped work for operators, handed over clean.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
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

          <div className="relative mx-auto aspect-square w-full max-w-[280px] lg:mx-0 lg:max-w-[320px] lg:justify-self-end">
            <AnimatedTurbine id="intro-hero" className="h-full w-full" />
          </div>
        </section>

        {/* Problem */}
        <section>
          <Eyebrow>01 — Problem</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            What is costing you?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Most work starts with a pain you already feel. Name it, or go
            straight to a brief.
          </p>
          <ul className="mt-8 grid gap-0 border-y border-line/70 sm:grid-cols-2">
            {[
              "Same questions every day on WhatsApp",
              "Enquiries that never become jobs",
              "Data retyped between tools",
              "Numbers only at month-end",
            ].map((line) => (
              <li key={line} className="border-line/70 sm:border-r sm:odd:border-r sm:even:border-r-0 sm:[&:nth-child(2)]:border-b-0 border-b last:border-b-0 sm:[&:nth-child(n+3)]:border-b-0">
                <Link
                  to="/concerns"
                  className="flex items-center justify-between gap-4 px-0 py-4 text-sm text-fg transition-colors hover:text-accent sm:px-4 sm:text-[15px]"
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
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>02 — Offer</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Named services
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
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
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <Link
                key={s.id}
                to="/services/$slug"
                params={{ slug: s.id }}
                className="group rounded-xl bg-surface/70 px-5 py-5 transition-colors hover:bg-raised"
              >
                <p className="text-sm font-medium tracking-tight group-hover:text-accent sm:text-[15px]">
                  {s.name}
                </p>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {s.blurb}
                </p>
                <p className="mt-4 text-[10px] tracking-wider text-subtle uppercase">
                  {s.timeframe}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Proof */}
        <section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>03 — Proof</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
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
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="rounded-xl bg-surface/50 px-5 py-5 sm:px-6 sm:py-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] text-subtle">{p.code}</span>
                  <Badge variant={p.status === "Live" ? "live" : "default"}>
                    {p.status}
                  </Badge>
                  <span className="text-[10px] text-subtle">
                    {p.sector} · {p.place}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-medium sm:text-[15px]">{p.name}</h3>
                <p className="mt-1.5 text-xs text-muted sm:text-sm">{p.situation}</p>
                <p className="mt-2 text-xs text-accent sm:text-sm">{p.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Engage */}
        <section>
          <Eyebrow>04 — Engagement</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            How we work together
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
            Brief first. Written scope second. Build only after you approve.
          </p>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
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
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.title}>
                <h3 className="text-sm font-medium sm:text-[15px]">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-line/60 pt-12 pb-2">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready when you are
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
            We reply {COMPANY.responseSla}. No deposit until a written proposal
            is approved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
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
          <p className="mt-10 text-xs text-subtle">
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
