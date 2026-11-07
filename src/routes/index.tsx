import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { InteractiveGear } from "@/components/interactive-gear";
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
    body: "WhatsApp loops, lost leads, retyping, month-end chaos.",
    to: "/concerns" as const,
    cta: "Browse concerns",
  },
  {
    step: "02",
    title: "Review a service",
    body: "How we deliver, what is in scope, indicative quotation.",
    to: "/services" as const,
    cta: "View services",
  },
  {
    step: "03",
    title: "Inspect the proof",
    body: "Situation, install, observed results in the field.",
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
  const [chaptersOn, setChaptersOn] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
      setChaptersOn(el.scrollTop > 120);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <PageFrame
      ref={scrollRef}
      className="page-enter !overflow-y-auto overscroll-contain !py-0 pt-3 pb-14 sm:pt-4"
    >
      <div className="flex w-full flex-col">
        {/* ZONE A — Title only (immersive mark) */}
        <section className="title-zone relative border-b border-line/25 pb-8 pt-2 lg:pb-10">
          <div className="flex items-center gap-3">
            <span className="hero-gold-rule" aria-hidden />
            <p className="type-label text-subtle">
              Intake open · reply {COMPANY.responseSla}
            </p>
          </div>

          <div className="mt-10 grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-8">
            <h1 className="title-mark min-w-0">
              <span className="sr-only">{COMPANY.name}</span>
              <span className="type-mark block" aria-hidden>
                GREAT
              </span>
              <span className="type-mark block" aria-hidden>
                TURBINEZ
              </span>
            </h1>

            <InteractiveGear className="mx-auto hidden w-full max-w-[420px] lg:mx-0 lg:block lg:max-w-none lg:justify-self-end" />
          </div>

          <p className="type-label mt-6 text-muted">{COMPANY.subtitle}</p>
        </section>

        {/* ZONE B — Meaning, proof, ask (away from the mark) */}
        <section className="content-zone border-b border-line/25 py-8 lg:py-9">
          <p className="type-lead max-w-lg">
            Manual work is still your largest cost centre.
          </p>
          <p className="type-body mt-3 max-w-md">
            How many hours did your team retype last week? One scoped process at
            a time — written edges, proposal first, deposit only after you
            approve.
          </p>

          <ul className="metric-rail mt-7 max-w-2xl">
            {METRICS.map((m) => (
              <li key={m.label} className="metric-item">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
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
              className="type-label text-subtle transition-colors hover:text-accent"
            >
              View services →
            </Link>
          </div>
        </section>

        {/* Chapters after hero — less chrome on the mark */}
        <div
          className={`chapter-sticky sticky top-0 z-30 -mx-6 transition-opacity duration-300 sm:-mx-10 md:-mx-12 lg:-mx-14 xl:-mx-18 2xl:-mx-22 ${
            chaptersOn ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="scroll-progress"
            style={{ transform: `scaleX(${progress})` }}
            aria-hidden
          />
          <nav
            className="flex gap-5 overflow-x-auto px-6 py-2.5 sm:gap-6 sm:px-10 md:px-12 lg:px-14 xl:px-18 2xl:px-22"
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
          className="section-block grid scroll-mt-12 gap-5 border-b border-line/35 lg:grid-cols-[minmax(0,0.26fr)_minmax(0,0.74fr)] lg:gap-8"
        >
          <div>
            <span className="section-index">01</span>
            <p className="type-label mt-1 text-accent">Problem</p>
          </div>
          <div className="min-w-0">
            <h2 className="type-display text-2xl sm:text-3xl lg:text-[2.35rem]">
              Manual work is still running the business.
            </h2>
            <p className="type-body mt-3 max-w-2xl">
              The same WhatsApp answers. Leads that never become jobs. Data
              retyped between tools you already pay for. Numbers only when the
              month closes. That is cost — not culture. We fix one process at a
              time; deposit only after you approve the written proposal.
            </p>
          </div>
        </section>

        <section
          id="paths"
          className="section-block scroll-mt-12 border-b border-line/35"
        >
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="section-index">02</span>
              <p className="type-label mt-1 text-accent">Navigate</p>
              <h2 className="type-display mt-1.5 text-2xl sm:text-3xl">
                Three paths. One destination.
              </h2>
            </div>
            <p className="type-label text-subtle">Ends in a private brief</p>
          </div>
          <div className="stagger-children grid w-full gap-3 lg:grid-cols-3">
            {PATHS.map((p) => (
              <Link
                key={p.step}
                to={p.to}
                onClick={() => tactileClick()}
                className="path-tile group flex flex-col p-5"
              >
                <span className="type-label text-accent">{p.step}</span>
                <h3 className="type-title mt-2 group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="type-body mt-2 flex-1">{p.body}</p>
                <span className="type-label mt-5 inline-flex items-center gap-1.5 text-accent">
                  {p.cta}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="method"
          className="section-block scroll-mt-12 border-b border-line/35"
        >
          <div className="mb-6 grid gap-3 lg:grid-cols-[minmax(0,0.26fr)_minmax(0,0.74fr)] lg:gap-8">
            <div>
              <span className="section-index">03</span>
              <p className="type-label mt-1 text-accent">Engagement</p>
            </div>
            <h2 className="type-display text-2xl sm:text-3xl">
              Brief · fit · proposal · deposit · build · handoff
            </h2>
          </div>
          <ol className="process-rail">
            {ENGAGEMENT_STEPS.map((step, i) => (
              <li key={step} className="process-step">
                <span className="type-label text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-sm font-semibold tracking-tight">{step}</p>
              </li>
            ))}
          </ol>
          <p className="type-label mt-4 text-subtle">
            No deposit until written proposal approval
          </p>
        </section>

        <section
          id="proof"
          className="section-block scroll-mt-12 border-b border-line/35"
        >
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="section-index">04</span>
              <p className="type-label mt-1 text-accent">Evidence</p>
              <h2 className="type-display mt-1.5 text-2xl sm:text-3xl">
                Results in the field
              </h2>
            </div>
            <Link
              to="/work"
              className="type-label text-accent hover:opacity-80"
            >
              Full case file →
            </Link>
          </div>
          <div className="stagger-children grid w-full gap-3 sm:grid-cols-2">
            {PROJECTS.slice(0, 4).map((p) => (
              <article key={p.id} className="proof-tile px-5 py-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={p.status === "Live" ? "live" : "default"}>
                    {p.status}
                  </Badge>
                  <span className="type-label text-subtle">{p.sector}</span>
                </div>
                <h3 className="mt-2 text-sm font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{p.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ask" className="section-block scroll-mt-12 !border-0">
          <div className="mb-5">
            <span className="section-index">05</span>
            <p className="type-label mt-1 text-accent">Next step</p>
          </div>
          <FunnelClose
            title="Ready to automate one process"
            body={`Private brief. Reply ${COMPANY.responseSla}. Build starts only after you approve written scope.`}
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
