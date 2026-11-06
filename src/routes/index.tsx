import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageSquareWarning,
  Workflow,
} from "lucide-react";
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
 * First-visit company intro with a linear customer journey:
 * who we are → name the pain → what we build → proof → how we work → trust → act.
 */
function IntroPage() {
  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-8">
      <div className="mx-auto flex w-full max-w-4xl min-h-0 flex-col gap-14 sm:gap-16">
        {/* 1 — Identity */}
        <section className="hero-glow relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
              {COMPANY.subtitle}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {COMPANY.name}
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-xs text-subtle">
              <MapPin className="size-3.5 text-accent" />
              {COMPANY.location}
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Practical automation where repetition burns time and money.
              Websites, bots, workflows, documents, and AI on{" "}
              <em className="text-fg not-italic">your</em> information —{" "}
              <span className="text-fg">scoped, priced, delivered.</span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="btn-shadow-accent">
                <Link to="/brief">
                  Start a brief
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-shadow">
                <Link to="/concerns">
                  <MessageSquareWarning className="size-4 text-accent" />
                  Name the problem
                </Link>
              </Button>
            </div>
          </div>

          <div className="hero-visual relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl ring-1 ring-white/5 lg:max-w-none">
            <AnimatedTurbine
              id="intro-hero"
              showLabel
              className="h-full w-full"
            />
          </div>
        </section>

        {/* Journey strip — orientation */}
        <nav aria-label="Customer journey" className="-mt-4">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[10px] tracking-wide text-subtle uppercase sm:gap-x-3">
            {[
              "Meet us",
              "Name the pain",
              "See the offer",
              "Proof",
              "Engage",
              "Brief",
            ].map((label, i, arr) => (
              <li key={label} className="flex items-center gap-2 sm:gap-3">
                <span className="flex items-center gap-1.5">
                  <span className="flex size-5 items-center justify-center rounded-full bg-accent/15 text-[9px] font-semibold text-accent">
                    {i + 1}
                  </span>
                  <span className={i === 0 ? "text-accent" : ""}>{label}</span>
                </span>
                {i < arr.length - 1 ? (
                  <span aria-hidden className="text-line">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>

        {/* 2 — Problem */}
        <section className="grid gap-5 border-t border-line pt-10 sm:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Step 1 · The problem</Eyebrow>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              What is costing you?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Most first conversations start with a pain you already feel — not
              a product catalogue. Browse concerns, or go straight to a brief.
            </p>
            <Link
              to="/concerns"
              className="hover-accent mt-4 inline-flex items-center gap-1 text-sm text-accent"
            >
              Browse concerns
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <ul className="stagger-children grid gap-2 sm:grid-cols-2">
            {[
              "Same WhatsApp questions every day",
              "Enquiries die in chat",
              "Team retypes data between tools",
              "Numbers only appear at month-end",
            ].map((line) => (
              <li
                key={line}
                className="card-lift flex items-start gap-2.5 rounded-xl bg-surface/90 p-3 hairline"
              >
                <MessageSquareWarning className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-sm text-fg">{line}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 3 — Offer */}
        <section className="border-t border-line pt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <Eyebrow>Step 2 · The offer</Eyebrow>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Named services. Clear edges.
              </h2>
              <p className="mt-2 max-w-lg text-sm text-muted">
                {SERVICES.length} services — each with outcome, timeframe, and
                what stays out of scope.
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/services">
                <Workflow className="size-3.5 text-accent" />
                All services
              </Link>
            </Button>
          </div>
          <div className="stagger-children mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <Link
                key={s.id}
                to="/services/$slug"
                params={{ slug: s.id }}
                className="card-lift group flex flex-col rounded-xl bg-surface/90 p-4 hairline"
              >
                <p className="text-sm font-semibold tracking-tight group-hover:text-accent">
                  {s.name}
                </p>
                <p className="mt-1 line-clamp-2 flex-1 text-xs text-muted">
                  {s.blurb}
                </p>
                <p className="mt-3 text-[10px] tracking-wide text-subtle uppercase">
                  {s.timeframe}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* 4 — Proof */}
        <section className="border-t border-line pt-10">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <Eyebrow>Step 3 · Proof</Eyebrow>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Outcomes on the floor.
              </h2>
              <p className="mt-2 max-w-lg text-sm text-muted">
                Situation. Install. Result. Status labelled honestly.
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/work">See all work</Link>
            </Button>
          </div>
          <div className="stagger-children mt-5 grid gap-2 sm:grid-cols-2">
            {PROJECTS.slice(0, 4).map((p) => (
              <article
                key={p.id}
                className="card-lift rounded-xl bg-surface/90 p-4 hairline"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] text-subtle">
                    {p.code}
                  </span>
                  <Badge variant={p.status === "Live" ? "live" : "default"}>
                    {p.status}
                  </Badge>
                  <span className="text-[10px] text-subtle">
                    {p.sector} · {p.place}
                  </span>
                </div>
                <h3 className="mt-2 text-sm font-semibold">{p.name}</h3>
                <p className="mt-1 text-xs text-muted">{p.situation}</p>
                <p className="mt-2 text-xs font-medium text-accent">{p.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 5 — Engagement path */}
        <section className="border-t border-line pt-10">
          <Eyebrow>Step 4 · How we engage</Eyebrow>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            A path you can follow.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            No deposit on this site. Brief first. Written scope second. Build
            only after you approve the proposal.
          </p>
          <ol className="stagger-children mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {ENGAGEMENT_STEPS.map((step, i) => (
              <li
                key={step}
                className="card-lift flex items-center gap-3 rounded-xl bg-surface/90 p-4 hairline"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-fg">{step}</p>
                  <p className="text-[10px] tracking-wide text-subtle uppercase">
                    {i === 0
                      ? "You describe the work"
                      : i === ENGAGEMENT_STEPS.length - 1
                        ? "You run it day to day"
                        : "We agree in writing"}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 6 — Trust */}
        <section className="border-t border-line pt-10">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Principles we do not bend.
          </h2>
          <div className="stagger-children mt-5 grid gap-3 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="card-lift rounded-xl bg-surface/90 p-5 hairline"
              >
                <CheckCircle2 className="size-5 text-accent" />
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7 — Act */}
        <section className="card-lift relative overflow-hidden rounded-2xl border border-accent/20 bg-surface/95 p-6 sm:p-8">
          <Eyebrow>Step 5 · Next step</Eyebrow>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready when you are.
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
            Send a brief. We reply {COMPANY.responseSla}. If the fit is clear,
            you get a written proposal — then deposit, then build.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="btn-shadow-accent">
              <Link to="/brief">
                Start a brief
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/concerns">Name the problem</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link to="/work">See the work</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-subtle">
            <a
              href={`mailto:${COMPANY.email}`}
              className="link-underline text-accent"
            >
              {COMPANY.email}
            </a>
            <span className="mx-2">·</span>
            {COMPANY.phone}
          </p>
        </section>
      </div>
    </PageFrame>
  );
}
