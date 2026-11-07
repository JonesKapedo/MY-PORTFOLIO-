import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GearSystem } from "@/components/gear-system";
import { FunnelClose, PageFrame } from "@/components/page-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { tactileClick } from "@/lib/tactile";
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
    body: "WhatsApp loops, lost leads, retyping, month-end chaos.",
    to: "/concerns" as const,
    cta: "Concerns",
  },
  {
    step: "02",
    title: "Choose a service",
    body: "Named offering. How. When. Indicative quotation.",
    to: "/services" as const,
    cta: "Services",
  },
  {
    step: "03",
    title: "See proof",
    body: "Situation. Install. Observed result.",
    to: "/work" as const,
    cta: "Work",
  },
] as const;

function IntroPage() {
  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-20">
      <div className="flex w-full flex-col gap-0">
        {/* Evidence-first hero */}
        <section className="hero-glow relative grid w-full items-end gap-10 border-b border-line/50 pb-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="ops-label">Status · intake open</span>
              <span className="font-mono text-[10px] text-subtle tabular-nums">
                SLA {COMPANY.responseSla}
              </span>
            </div>
            <p className="mt-6 font-mono text-sm font-medium tracking-tight text-accent sm:text-base">
              Month-end six days faster. Night desk to on-call. Waste down in one
              season.
            </p>
            <h1 className="display-brutal mt-4 text-5xl text-fg sm:text-6xl xl:text-[5.5rem]">
              {COMPANY.name}
            </h1>
            <p className="mt-2 text-[11px] font-medium tracking-[0.28em] text-muted uppercase">
              {COMPANY.subtitle}
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Scoped automation for operators. One process. Written edges. Clean
              handoff. No open-ended chaos.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="clip-corner">
                <Link to="/brief" onClick={() => tactileClick()}>
                  Start a private brief
                  <ArrowRight className="size-4 opacity-80" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
          </div>

          {/* Signature turbine moment */}
          <div className="relative mx-auto w-full max-w-[340px] lg:mx-0 lg:max-w-none lg:justify-self-end">
            <div className="clip-corner-lg glass relative overflow-hidden p-5 sm:p-7">
              <p className="ops-label mb-3">Mark · interlocking system</p>
              <GearSystem className="h-auto w-full animate-float-soft" />
            </div>
          </div>
        </section>

        {/* Chapter rail */}
        <nav
          className="chapter-sticky -mx-7 flex gap-6 overflow-x-auto px-7 py-3 sm:-mx-12 sm:px-12 md:-mx-14 md:px-14 lg:-mx-16 lg:px-16 xl:-mx-24 xl:px-24 2xl:-mx-28 2xl:px-28"
          aria-label="Pitch chapters"
        >
          {[
            { href: "#problem", label: "01 Problem" },
            { href: "#paths", label: "02 Paths" },
            { href: "#method", label: "03 Method" },
            { href: "#proof", label: "04 Proof" },
            { href: "#ask", label: "05 Ask" },
          ].map((c) => (
            <a
              key={c.href}
              href={c.href}
              className="shrink-0 font-mono text-[10px] tracking-[0.16em] text-subtle uppercase transition-colors hover:text-accent"
            >
              {c.label}
            </a>
          ))}
        </nav>

        {/* Problem — asymmetric editorial */}
        <section
          id="problem"
          className="grid scroll-mt-16 gap-8 border-b border-line/50 py-16 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:gap-12"
        >
          <div>
            <span className="section-index">01</span>
            <p className="ops-label mt-2">Problem</p>
          </div>
          <div>
            <h2 className="display-brutal text-3xl sm:text-4xl lg:text-5xl">
              Your team is still doing work a system should own.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Repeat WhatsApp answers. Leads that never become jobs. Data
              retyped between tools you already pay for. Numbers only at
              month-end. That is not culture — it is unpaid labour. We close one
              gap at a time.
            </p>
          </div>
        </section>

        {/* Paths — command choices */}
        <section
          id="paths"
          className="scroll-mt-16 border-b border-line/50 py-16"
        >
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="section-index">02</span>
              <p className="ops-label mt-2">Command paths</p>
              <h2 className="display-brutal mt-3 text-3xl sm:text-4xl">
                Three ways in. One way out.
              </h2>
            </div>
            <p className="max-w-xs text-right font-mono text-[10px] leading-relaxed tracking-wide text-subtle uppercase">
              Select a path · ends in private brief
            </p>
          </div>
          <div className="grid w-full gap-4 lg:grid-cols-3">
            {PATHS.map((p) => (
              <Link
                key={p.step}
                to={p.to}
                onClick={() => tactileClick()}
                className="service-card clip-corner-lg glass group flex flex-col p-7"
              >
                <span className="font-mono text-xs text-accent">{p.step}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
                <span className="mt-8 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider text-accent uppercase">
                  {p.cta}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Method — process rail */}
        <section
          id="method"
          className="scroll-mt-16 border-b border-line/50 py-16"
        >
          <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)]">
            <div>
              <span className="section-index">03</span>
              <p className="ops-label mt-2">Method</p>
            </div>
            <h2 className="display-brutal text-3xl sm:text-4xl">
              Brief → fit → proposal → deposit → build → handoff
            </h2>
          </div>
          <ol className="process-rail glass">
            {ENGAGEMENT_STEPS.map((step, i) => (
              <li key={step}>
                <span className="font-mono text-[10px] text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-semibold tracking-tight">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 font-mono text-[11px] tracking-wide text-subtle uppercase">
            Deposit only after written proposal approval · non-negotiable
          </p>
        </section>

        {/* Proof */}
        <section
          id="proof"
          className="scroll-mt-16 border-b border-line/50 py-16"
        >
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="section-index">04</span>
              <p className="ops-label mt-2">Evidence</p>
              <h2 className="display-brutal mt-3 text-3xl sm:text-4xl">
                Outcomes, not slogans
              </h2>
            </div>
            <Link
              to="/work"
              className="font-mono text-[11px] font-semibold tracking-wider text-accent uppercase hover:opacity-80"
            >
              Full case file →
            </Link>
          </div>
          <div className="grid w-full gap-4 sm:grid-cols-2">
            {PROJECTS.slice(0, 4).map((p) => (
              <article
                key={p.id}
                className="clip-corner glass px-6 py-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={p.status === "Live" ? "live" : "default"}>
                    {p.status}
                  </Badge>
                  <span className="font-mono text-[10px] text-subtle">
                    {p.sector}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm font-medium text-accent">{p.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Ask — gold strike moment */}
        <section id="ask" className="scroll-mt-16 pt-16">
          <div className="mb-8">
            <span className="section-index">05</span>
            <p className="ops-label mt-2">Ask</p>
          </div>
          <FunnelClose
            title="Commission the next process"
            body={`Private brief. Reply ${COMPANY.responseSla}. Build starts only after you approve written scope.`}
            primary={
              <Button asChild size="lg" className="clip-corner bg-accent-fg text-accent hover:bg-accent-fg/90">
                <Link to="/brief" onClick={() => tactileClick()}>
                  Start a private brief
                  <ArrowRight className="size-4 opacity-80" />
                </Link>
              </Button>
            }
            secondary={
              <Button asChild variant="ghost" size="lg" className="text-accent-fg hover:bg-accent-fg/10">
                <Link to="/concerns">I have a specific pain</Link>
              </Button>
            }
          />
        </section>
      </div>
    </PageFrame>
  );
}
