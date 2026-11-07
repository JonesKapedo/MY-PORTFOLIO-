import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GearSystem } from "@/components/gear-system";
import { Eyebrow, FunnelClose, PageFrame } from "@/components/page-frame";
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
          "GREAT TURBINEZ designs scoped automation for operators. Stop paying in hours for work software should carry — brief, proposal, build, handoff.",
      },
    ],
  }),
});

function IntroPage() {
  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-14">
      <div className="flex w-full min-h-0 flex-col gap-16 sm:gap-20 lg:gap-24">
        <section className="hero-glow relative grid w-full items-center gap-10 pt-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 xl:gap-16">
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] text-accent uppercase">
              {COMPANY.subtitle}
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl xl:text-7xl">
              {COMPANY.name}
            </h1>
            <p className="mt-5 max-w-2xl font-display text-2xl leading-snug font-medium tracking-tight text-fg sm:text-3xl">
              Your team is still doing work a system should own.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              We design and install scoped automation so operators reclaim hours,
              pipelines stay intact, and handoff is clean enough to run without
              us. That is our delivery commitment — not a slide deck.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link to="/brief">
                  Request a private brief
                  <ArrowRight className="size-4 opacity-80" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/services">Browse services</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[340px] animate-float-soft lg:mx-0 lg:max-w-[400px] lg:justify-self-end">
            <GearSystem className="h-auto w-full" />
          </div>
        </section>

        <section className="reveal-section w-full rounded-2xl border border-accent/15 bg-accent/[0.04] px-6 py-8 sm:px-10 sm:py-12">
          <Eyebrow>The problem we solve</Eyebrow>
          <h2 className="mt-3 max-w-4xl font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            Manual work that should already be automated is costing you margin,
            speed, and focus.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            Enquiries die in chat. Approvals stall in one inbox. Numbers appear
            only at month-end. Staff retype the same fields between tools they
            already pay for. We close that gap — one process at a time — with
            written edges before build starts.
          </p>
          <Link
            to="/concerns"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:opacity-80"
          >
            Identify your friction
            <ArrowRight className="size-3.5" />
          </Link>
        </section>

        <section className="w-full">
          <Eyebrow>01 — Friction</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Where automation pays for itself
          </h2>
          <ul className="mt-8 grid w-full gap-0 border-y border-line/70 sm:grid-cols-2">
            {[
              "The same questions every day on WhatsApp",
              "Enquiries that never become booked work",
              "Data retyped between tools you already own",
              "Numbers that only appear at month-end",
            ].map((line) => (
              <li
                key={line}
                className="border-b border-line/70 last:border-b-0 sm:border-r sm:even:border-r-0 sm:[&:nth-child(n+3)]:border-b-0"
              >
                <Link
                  to="/concerns"
                  className="group flex items-center justify-between gap-4 px-0 py-4 text-sm text-fg transition-colors hover:text-accent sm:px-4 sm:text-[15px]"
                >
                  <span>{line}</span>
                  <ArrowRight className="size-3.5 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="w-full">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>02 — Catalogue</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Named services. Defined delivery.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-semibold tracking-wide text-accent uppercase hover:opacity-80"
            >
              Full catalogue →
            </Link>
          </div>
          <div className="stagger-children mt-8 grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s) => (
              <Link
                key={s.id}
                to="/services/$slug"
                params={{ slug: s.id }}
                className="service-card group rounded-xl bg-surface/70 px-5 py-5 transition-colors hover:bg-raised"
              >
                <p className="text-sm font-semibold tracking-tight group-hover:text-accent sm:text-[15px]">
                  {s.name}
                </p>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {s.blurb}
                </p>
                <p className="mt-4 text-[10px] tracking-wider text-subtle uppercase">
                  {s.timeframe} · Detail & quotation
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="w-full">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>03 — Evidence</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Selected outcomes
              </h2>
            </div>
            <Link
              to="/work"
              className="text-xs font-semibold tracking-wide text-accent uppercase hover:opacity-80"
            >
              Case file →
            </Link>
          </div>
          <div className="stagger-children mt-8 grid w-full gap-4 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.id}
                className="service-card rounded-xl bg-surface/50 px-5 py-5 sm:px-6 sm:py-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] text-subtle">{p.code}</span>
                  <Badge variant={p.status === "Live" ? "live" : "default"}>
                    {p.status}
                  </Badge>
                  <span className="text-[10px] text-subtle">{p.sector}</span>
                </div>
                <h3 className="mt-2 text-sm font-semibold sm:text-[15px]">{p.name}</h3>
                <p className="mt-1.5 text-xs text-muted sm:text-sm">{p.situation}</p>
                <p className="mt-2 text-xs text-accent sm:text-sm">{p.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="w-full">
          <Eyebrow>04 — How we work</Eyebrow>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Brief → proposal → deposit → build → handoff
          </h2>
          <ol className="stagger-children mt-8 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {ENGAGEMENT_STEPS.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="font-mono text-xs text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-fg">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="w-full">
          <Eyebrow>Standards</Eyebrow>
          <div className="mt-8 grid w-full gap-8 sm:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.title}>
                <h3 className="text-sm font-semibold sm:text-[15px]">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FunnelClose
          title="Commission the next process"
          body={`Private brief. Reply ${COMPANY.responseSla}. No deposit until a written proposal is approved. Capacity is limited to work we can own to the end.`}
          primary={
            <Button asChild size="lg">
              <Link to="/brief">
                Request a private brief
                <ArrowRight className="size-4 opacity-80" />
              </Link>
            </Button>
          }
          secondary={
            <Button asChild variant="ghost" size="lg">
              <Link to="/work">Review the work</Link>
            </Button>
          }
        />
      </div>
    </PageFrame>
  );
}
