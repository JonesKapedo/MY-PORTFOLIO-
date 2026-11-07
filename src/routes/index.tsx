import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandHeroMark } from "@/components/brand-hero-mark";
import { FunnelClose, PageFrame } from "@/components/page-frame";
import { ScrollReveal } from "@/components/scroll-reveal";
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
      setChaptersOn(el.scrollTop > 80);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <PageFrame
      ref={scrollRef}
      className="page-enter !overflow-x-hidden !overflow-y-auto overscroll-contain !py-0 pt-2 pb-10 sm:pt-4 sm:pb-12"
    >
      <div className="flex w-full min-w-0 max-w-full flex-col">
        {/* Immersive brand hero */}
        <section className="title-zone relative min-w-0 max-w-full border-b border-line/20 pb-8 pt-1 sm:pb-10 lg:pb-12">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="hero-gold-rule" aria-hidden />
            <p className="type-label min-w-0 truncate text-subtle">
              Intake open · reply {COMPANY.responseSla}
            </p>
          </div>

          <div className="mt-8 grid min-w-0 items-center gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-14">
            <div className="min-w-0">
              <h1 className="title-mark-stage min-w-0">
                <span className="sr-only">{COMPANY.name}</span>
                <span className="type-mark block max-w-full" aria-hidden>
                  GREAT
                </span>
                <span className="type-mark block max-w-full" aria-hidden>
                  TURBINEZ
                </span>
              </h1>
              <p className="type-label mt-4 tracking-[0.28em] text-accent">
                AI &amp; Automation
              </p>
              <p className="type-lead mt-6 max-w-md">
                Manual work is still your largest cost centre.
              </p>
              <p className="type-body mt-3 max-w-md">
                One scoped process at a time — written edges, proposal first,
                deposit only after you approve.
              </p>

              <ul className="metric-rail metric-rail-3d mt-7 max-w-xl">
                {METRICS.map((m) => (
                  <li key={m.label} className="metric-item metric-item-3d">
                    <span className="metric-value">{m.value}</span>
                    <span className="metric-label">{m.label}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
                <Button
                  asChild
                  size="lg"
                  className="clip-corner w-full shadow-[var(--shadow-btn-accent)] sm:w-auto"
                >
                  <Link to="/brief" onClick={() => tactileClick()}>
                    Open a private brief
                    <ArrowRight className="size-4 opacity-80" />
                  </Link>
                </Button>
                <Link
                  to="/services"
                  className="type-label text-center text-subtle transition-colors hover:text-accent sm:text-left"
                >
                  View services →
                </Link>
              </div>
            </div>

            <BrandHeroMark className="mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none lg:justify-self-end" />
          </div>
        </section>

        <div
          className={`chapter-sticky sticky top-0 z-30 -mx-4 max-w-[100vw] transition-opacity duration-300 sm:-mx-8 md:-mx-10 lg:-mx-12 xl:-mx-16 2xl:-mx-20 ${
            chaptersOn ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="scroll-progress"
            style={{ transform: `scaleX(${progress})` }}
            aria-hidden
          />
          <nav
            className="flex gap-4 overflow-x-auto px-4 py-2.5 sm:gap-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20"
            aria-label="Sections"
          >
            {CHAPTERS.map((c) => (
              <a key={c.href} href={c.href} className="chapter-link shrink-0">
                {c.label}
              </a>
            ))}
          </nav>
        </div>

        <ScrollReveal
          as="section"
          id="problem"
          className="section-block grid min-w-0 max-w-full scroll-mt-12 gap-4 border-b border-line/35 sm:gap-5 lg:grid-cols-[minmax(0,0.26fr)_minmax(0,0.74fr)] lg:gap-8"
        >
          <div className="section-index-stage min-w-0">
            <span className="section-index section-index-3d">01</span>
            <p className="type-label mt-1 text-accent">Problem</p>
          </div>
          <div className="min-w-0">
            <h2 className="type-display text-xl sm:text-2xl lg:text-[2.35rem]">
              Manual work is still running the business.
            </h2>
            <p className="type-body mt-3 max-w-2xl">
              The same WhatsApp answers. Leads that never become jobs. Data
              retyped between tools you already pay for. Numbers only when the
              month closes. That is cost — not culture. We fix one process at a
              time; deposit only after you approve the written proposal.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal
          as="section"
          id="paths"
          className="section-block min-w-0 max-w-full scroll-mt-12 border-b border-line/35"
        >
          <div className="mb-5 flex min-w-0 flex-wrap items-end justify-between gap-3 sm:mb-6">
            <div className="section-index-stage min-w-0">
              <span className="section-index section-index-3d">02</span>
              <p className="type-label mt-1 text-accent">Navigate</p>
              <h2 className="type-display mt-1.5 text-xl sm:text-2xl lg:text-3xl">
                Three paths. One destination.
              </h2>
            </div>
            <p className="type-label text-subtle">Ends in a private brief</p>
          </div>
          <div className="path-grid-3d stagger-children grid w-full min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PATHS.map((p) => (
              <Link
                key={p.step}
                to={p.to}
                onClick={() => tactileClick()}
                className="path-tile path-tile-3d group flex min-w-0 flex-col p-4 sm:p-5"
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
        </ScrollReveal>

        <ScrollReveal
          as="section"
          id="method"
          className="section-block min-w-0 max-w-full scroll-mt-12 border-b border-line/35"
        >
          <div className="mb-5 grid min-w-0 gap-3 sm:mb-6 lg:grid-cols-[minmax(0,0.26fr)_minmax(0,0.74fr)] lg:gap-8">
            <div className="section-index-stage">
              <span className="section-index section-index-3d">03</span>
              <p className="type-label mt-1 text-accent">Engagement</p>
            </div>
            <h2 className="type-display text-xl sm:text-2xl lg:text-3xl">
              Brief · fit · proposal · deposit · build · handoff
            </h2>
          </div>
          <ol className="process-rail process-rail-3d">
            {ENGAGEMENT_STEPS.map((step, i) => (
              <li key={step} className="process-step process-step-3d">
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
        </ScrollReveal>

        <ScrollReveal
          as="section"
          id="proof"
          className="section-block min-w-0 max-w-full scroll-mt-12 border-b border-line/35"
        >
          <div className="mb-5 flex min-w-0 flex-wrap items-end justify-between gap-3 sm:mb-6">
            <div className="section-index-stage min-w-0">
              <span className="section-index section-index-3d">04</span>
              <p className="type-label mt-1 text-accent">Evidence</p>
              <h2 className="type-display mt-1.5 text-xl sm:text-2xl lg:text-3xl">
                Results in the field
              </h2>
            </div>
            <Link to="/work" className="type-label text-accent hover:opacity-80">
              Full case file →
            </Link>
          </div>
          <div className="proof-grid-3d stagger-children grid w-full min-w-0 gap-3 sm:grid-cols-2">
            {PROJECTS.slice(0, 4).map((p) => (
              <article
                key={p.id}
                className="proof-tile proof-tile-3d min-w-0 px-4 py-4 sm:px-5"
              >
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
        </ScrollReveal>

        <ScrollReveal
          as="section"
          id="ask"
          className="section-block min-w-0 max-w-full scroll-mt-12 !border-0"
        >
          <div className="section-index-stage mb-4 sm:mb-5">
            <span className="section-index section-index-3d">05</span>
            <p className="type-label mt-1 text-accent">Next step</p>
          </div>
          <div className="funnel-3d-stage min-w-0 max-w-full">
            <FunnelClose
              title="Ready to automate one process"
              body={`Private brief. Reply ${COMPANY.responseSla}. Build starts only after you approve written scope.`}
              primary={
                <Button
                  asChild
                  size="lg"
                  className="clip-corner w-full bg-accent-fg text-accent shadow-lg hover:bg-accent-fg/90 sm:w-auto"
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
                  className="w-full text-accent-fg hover:bg-accent-fg/10 sm:w-auto"
                >
                  <Link to="/concerns">I have a specific pain</Link>
                </Button>
              }
            />
          </div>
        </ScrollReveal>
      </div>
    </PageFrame>
  );
}
