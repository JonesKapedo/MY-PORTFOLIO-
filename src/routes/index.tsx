import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

const METRICS = [
  { value: "−6 days", label: "Month-end close" },
  { value: "On-call", label: "Night desk load" },
  { value: "↓ Waste", label: "First season" },
] as const;

const PATHS = [
  {
    step: "01",
    title: "Start from the pain",
    body: "WhatsApp loops, lost leads, retyping, month-end chaos — find the concern that matches yours.",
    to: "/concerns" as const,
    cta: "Browse concerns",
  },
  {
    step: "02",
    title: "Review a service",
    body: "Open a named offer for how we deliver, what sits in scope, and an indicative quotation.",
    to: "/services" as const,
    cta: "View services",
  },
  {
    step: "03",
    title: "Inspect the proof",
    body: "Situation, install, and observed results from work already in the field.",
    to: "/work" as const,
    cta: "View work",
  },
] as const;

const CHAPTERS = [
  { href: "#problem", label: "01 Problem" },
  { href: "#paths", label: "02 Paths" },
  { href: "#method", label: "03 Method" },
  { href: "#proof", label: "04 Proof" },
  { href: "#ask", label: "05 Brief" },
] as const;

function IntroPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <PageFrame
      ref={scrollRef}
      className="page-enter !overflow-y-auto overscroll-contain !py-0 pt-4 pb-16 sm:pt-5 lg:pt-6"
    >
      <div className="flex w-full flex-col">
        {/*
          Authority hero — recommended set:
          split layout · single axis type · stacked mark · manifesto
          metric rail · atmospheric gears · one serious CTA
        */}
        <section className="hero-authority relative grid min-h-[min(72vh,560px)] w-full items-center gap-6 border-b border-line/30 pb-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:pb-12">
          {/* Type column — quiet hierarchy */}
          <div className="relative z-[2] min-w-0 max-w-xl">
            {/* Intake terminal */}
            <div className="flex items-center gap-3">
              <span className="hero-gold-rule" aria-hidden />
              <p className="font-mono text-[10px] tracking-[0.2em] text-subtle uppercase">
                Intake · open · reply {COMPANY.responseSla}
              </p>
            </div>

            {/* Manifesto */}
            <p className="mt-7 max-w-md text-[15px] leading-snug font-medium tracking-tight text-fg sm:text-base">
              Manual work is still your largest cost centre.
            </p>

            {/* Stacked brand mark */}
            <h1 className="mt-5">
              <span className="sr-only">{COMPANY.name}</span>
              <span
                className="display-brutal block text-[clamp(3.25rem,11vw,7.5rem)] leading-[0.88] text-fg"
                aria-hidden
              >
                GREAT
              </span>
              <span
                className="display-brutal block text-[clamp(3.25rem,11vw,7.5rem)] leading-[0.88] text-fg"
                aria-hidden
              >
                TURBINEZ
              </span>
            </h1>

            <p className="mt-3 font-mono text-[10px] tracking-[0.32em] text-muted uppercase">
              {COMPANY.subtitle}
            </p>

            {/* Challenge + one sentence */}
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              How many hours did your team retype last week? We install one
              scoped process at a time — written edges, proposal first, deposit
              only after you approve.
            </p>

            {/* Proof metrics */}
            <ul className="metric-rail mt-8">
              {METRICS.map((m) => (
                <li key={m.label} className="metric-item">
                  <span className="metric-value">{m.value}</span>
                  <span className="metric-label">{m.label}</span>
                </li>
              ))}
            </ul>

            {/* Single serious CTA + text secondary */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button
                asChild
                size="lg"
                className="clip-corner shadow-[var(--shadow-btn-accent)]"
              >
                <Link to="/brief" onClick={() => tactileClick()}>
                  Open a private brief
                  <ArrowRight className="size-4 opacity-80" />
                </Link>
              </Button>
              <Link
                to="/services"
                className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase transition-colors hover:text-accent"
              >
                View services →
              </Link>
            </div>
          </div>

          {/* Atmospheric gears — watermark of industry */}
          <div
            className="gear-atmosphere pointer-events-none relative mx-auto hidden h-full min-h-[280px] w-full max-w-[520px] items-center justify-center sm:flex lg:mx-0 lg:max-w-none lg:justify-self-end"
            aria-hidden
          >
            <div className="gear-atmosphere-glow" />
            <GearSystem className="gear-atmosphere-mark relative z-[1] h-auto w-[min(100%,440px)] opacity-[0.92]" />
          </div>

          {/* Scroll invitation */}
          <p className="absolute bottom-0 left-0 font-mono text-[10px] tracking-[0.18em] text-subtle uppercase">
            01 — The problem
          </p>
        </section>

        <div className="chapter-sticky sticky top-0 z-30 -mx-7 sm:-mx-12 md:-mx-14 lg:-mx-16 xl:-mx-24 2xl:-mx-28">
          <div
            className="scroll-progress"
            style={{ transform: `scaleX(${progress})` }}
            aria-hidden
          />
          <nav
            className="flex gap-5 overflow-x-auto px-7 py-3 sm:gap-6 sm:px-12 md:px-14 lg:px-16 xl:px-24 2xl:px-28"
            aria-label="Sections"
          >
            {CHAPTERS.map((c) => (
              <a key={c.href} href={c.href} className="chapter-link shrink-0">
                {c.label}
              </a>
            ))}
          </nav>
        </div>

        <section
          id="problem"
          className="grid scroll-mt-12 gap-6 border-b border-line/40 py-12 lg:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)] lg:gap-10 lg:py-14"
        >
          <div>
            <span className="section-index">01</span>
            <p className="ops-label mt-1">Problem</p>
          </div>
          <div className="min-w-0">
            <h2 className="display-brutal text-2xl sm:text-3xl lg:text-4xl">
              Manual work is still running the business.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              The same WhatsApp answers. Leads that never become jobs. Data
              retyped between tools you already pay for. Numbers only when the
              month closes. That is not culture — it is cost. We fix one process
              at a time, with clear scope and a deposit only after you approve the
              written proposal.
            </p>
          </div>
        </section>

        <section id="paths" className="scroll-mt-12 border-b border-line/40 py-12 lg:py-14">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="section-index">02</span>
              <p className="ops-label mt-1">How to navigate</p>
              <h2 className="display-brutal mt-2 text-2xl sm:text-3xl">
                Three paths. One destination.
              </h2>
            </div>
            <p className="font-mono text-[10px] tracking-wide text-subtle uppercase">
              Each path ends in a private brief
            </p>
          </div>
          <div className="stagger-children grid w-full gap-4 lg:grid-cols-3">
            {PATHS.map((p) => (
              <Link
                key={p.step}
                to={p.to}
                onClick={() => tactileClick()}
                className="path-tile group flex flex-col p-6"
              >
                <span className="font-mono text-xs text-accent">{p.step}</span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider text-accent uppercase">
                  {p.cta}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section id="method" className="scroll-mt-12 border-b border-line/40 py-12 lg:py-14">
          <div className="mb-8 grid gap-4 lg:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)] lg:gap-10">
            <div>
              <span className="section-index">03</span>
              <p className="ops-label mt-1">Engagement</p>
            </div>
            <h2 className="display-brutal text-2xl sm:text-3xl">
              Brief · fit · proposal · deposit · build · handoff
            </h2>
          </div>
          <ol className="process-rail">
            {ENGAGEMENT_STEPS.map((step, i) => (
              <li key={step} className="process-step">
                <span className="font-mono text-[10px] text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1.5 text-sm font-semibold tracking-tight">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 font-mono text-[11px] tracking-wide text-subtle uppercase">
            No deposit until you approve a written proposal
          </p>
        </section>

        <section id="proof" className="scroll-mt-12 border-b border-line/40 py-12 lg:py-14">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="section-index">04</span>
              <p className="ops-label mt-1">Evidence</p>
              <h2 className="display-brutal mt-2 text-2xl sm:text-3xl">
                Results in the field
              </h2>
            </div>
            <Link
              to="/work"
              className="font-mono text-[11px] font-semibold tracking-wider text-accent uppercase hover:opacity-80"
            >
              Full case file →
            </Link>
          </div>
          <div className="stagger-children grid w-full gap-4 sm:grid-cols-2">
            {PROJECTS.slice(0, 4).map((p) => (
              <article key={p.id} className="proof-tile px-5 py-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={p.status === "Live" ? "live" : "default"}>
                    {p.status}
                  </Badge>
                  <span className="font-mono text-[10px] text-subtle">
                    {p.sector}
                  </span>
                </div>
                <h3 className="mt-2.5 text-sm font-semibold">{p.name}</h3>
                <p className="mt-1.5 text-sm font-medium text-accent">{p.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ask" className="scroll-mt-12 pt-12 lg:pt-14">
          <div className="mb-6">
            <span className="section-index">05</span>
            <p className="ops-label mt-1">Next step</p>
          </div>
          <FunnelClose
            title="Ready to automate one process"
            body={`Send a private brief. We reply ${COMPANY.responseSla} with fit and direction. Build starts only after you approve written scope.`}
            primary={
              <Button
                asChild
                size="lg"
                className="clip-corner bg-accent-fg text-accent shadow-lg hover:bg-accent-fg/90"
              >
                <Link to="/brief" onClick={() => tactileClick()}>
                  Open a private brief
                  <ArrowRight className="size-4 opacity-80" />
                </Link>
              </Button>
            }
            secondary={
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-accent-fg hover:bg-accent-fg/10"
              >
                <Link to="/concerns">I have a specific pain</Link>
              </Button>
            }
          />
        </section>
      </div>
    </PageFrame>
  );
}
