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

const CHAPTERS = [
  { href: "#problem", label: "01 Problem" },
  { href: "#paths", label: "02 Paths" },
  { href: "#method", label: "03 Method" },
  { href: "#proof", label: "04 Proof" },
  { href: "#ask", label: "05 Ask" },
] as const;

function IntroPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [clock, setClock] = useState("");

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

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setClock(
        d.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <PageFrame
      ref={scrollRef}
      className="page-enter !overflow-y-auto overscroll-contain !py-0 pt-6 pb-24 sm:pt-8 lg:pt-10"
    >
      <div className="flex w-full flex-col">
        {/* Hero — bold, clean, immersive */}
        <section className="hero-glow relative grid w-full items-center gap-12 pb-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16 lg:pb-20">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-2">
                <span className="status-pulse" aria-hidden />
                <span className="ops-label">Intake open</span>
              </span>
              <span className="font-mono text-[10px] text-subtle tabular-nums">
                SLA · {COMPANY.responseSla}
              </span>
              {clock ? (
                <span className="font-mono text-[10px] text-subtle tabular-nums">
                  {clock} EAT
                </span>
              ) : null}
            </div>

            <p className="mt-8 max-w-xl text-sm font-medium leading-snug tracking-tight text-accent sm:text-base">
              Month-end six days faster. Night desk to on-call. Waste down in one
              season.
            </p>

            <h1 className="title-strike display-brutal mt-5 text-[clamp(2.75rem,8vw,6.5rem)] text-fg">
              {COMPANY.name}
            </h1>

            <p className="mt-3 text-[11px] font-medium tracking-[0.32em] text-muted uppercase">
              {COMPANY.subtitle}
            </p>

            <p className="mt-7 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Scoped automation for operators. One process. Written edges. Clean
              handoff.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="clip-corner shadow-[var(--shadow-btn-accent)]">
                <Link to="/brief" onClick={() => tactileClick()}>
                  Start a private brief
                  <ArrowRight className="size-4 opacity-80" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>

            <p className="mt-8 font-mono text-[10px] tracking-[0.14em] text-subtle uppercase">
              Keyboard · press paths below or open Services
            </p>
          </div>

          {/* Free-floating gears — no card outline */}
          <div className="gear-field relative mx-auto flex w-full max-w-[380px] items-center justify-center lg:mx-0 lg:max-w-none lg:justify-self-end">
            <div className="gear-ambient" aria-hidden />
            <GearSystem className="relative z-[1] h-auto w-full max-w-[400px] animate-float-soft drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]" />
          </div>
        </section>

        {/* Sticky chapter strip — opaque mask, no bleed */}
        <div className="chapter-sticky sticky top-0 z-30 -mx-7 sm:-mx-12 md:-mx-14 lg:-mx-16 xl:-mx-24 2xl:-mx-28">
          <div
            className="scroll-progress"
            style={{ transform: `scaleX(${progress})` }}
            aria-hidden
          />
          <nav
            className="flex gap-5 overflow-x-auto px-7 py-3.5 sm:gap-7 sm:px-12 md:px-14 lg:px-16 xl:px-24 2xl:px-28"
            aria-label="Pitch chapters"
          >
            {CHAPTERS.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="chapter-link shrink-0"
              >
                {c.label}
              </a>
            ))}
          </nav>
        </div>

        {/* 01 Problem */}
        <section
          id="problem"
          className="grid scroll-mt-14 gap-8 border-b border-line/40 py-16 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-14 lg:py-20"
        >
          <div>
            <span className="section-index">01</span>
            <p className="ops-label mt-2">Problem</p>
          </div>
          <div className="min-w-0">
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

        {/* 02 Paths */}
        <section id="paths" className="scroll-mt-14 border-b border-line/40 py-16 lg:py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="section-index">02</span>
              <p className="ops-label mt-2">Command paths</p>
              <h2 className="display-brutal mt-3 text-3xl sm:text-4xl">
                Three ways in. One way out.
              </h2>
            </div>
            <p className="font-mono text-[10px] tracking-wide text-subtle uppercase">
              Ends in private brief
            </p>
          </div>
          <div className="stagger-children grid w-full gap-5 lg:grid-cols-3">
            {PATHS.map((p) => (
              <Link
                key={p.step}
                to={p.to}
                onClick={() => tactileClick()}
                className="path-tile group flex flex-col p-7"
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

        {/* 03 Method */}
        <section id="method" className="scroll-mt-14 border-b border-line/40 py-16 lg:py-20">
          <div className="mb-12 grid gap-6 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)]">
            <div>
              <span className="section-index">03</span>
              <p className="ops-label mt-2">Method</p>
            </div>
            <h2 className="display-brutal text-3xl sm:text-4xl">
              Brief → fit → proposal → deposit → build → handoff
            </h2>
          </div>
          <ol className="process-rail">
            {ENGAGEMENT_STEPS.map((step, i) => (
              <li key={step} className="process-step">
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

        {/* 04 Proof */}
        <section id="proof" className="scroll-mt-14 border-b border-line/40 py-16 lg:py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
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
          <div className="stagger-children grid w-full gap-5 sm:grid-cols-2">
            {PROJECTS.slice(0, 4).map((p) => (
              <article key={p.id} className="proof-tile px-6 py-6">
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

        {/* 05 Ask */}
        <section id="ask" className="scroll-mt-14 pt-16 lg:pt-20">
          <div className="mb-8">
            <span className="section-index">05</span>
            <p className="ops-label mt-2">Ask</p>
          </div>
          <FunnelClose
            title="Commission the next process"
            body={`Private brief. Reply ${COMPANY.responseSla}. Build starts only after you approve written scope.`}
            primary={
              <Button
                asChild
                size="lg"
                className="clip-corner bg-accent-fg text-accent shadow-lg hover:bg-accent-fg/90"
              >
                <Link to="/brief" onClick={() => tactileClick()}>
                  Start a private brief
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
