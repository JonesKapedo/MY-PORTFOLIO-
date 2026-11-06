import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPin,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import {
  COMPANY,
  ENGAGEMENT_STEPS,
  INTRO_STATS,
  PRINCIPLES,
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
          "GREAT TURBINEZ Automation Services. Meet the firm: scoped automation for operators — websites, bots, workflows, documents, and AI on your information.",
      },
    ],
  }),
});

/** First-visit company profile — introduce who we are before deeper paths. */
function IntroPage() {
  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-6">
      <div className="flex min-h-0 flex-col gap-10 sm:gap-12">
        {/* Hero identity */}
        <section className="hero-glow relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <Logo size="md" className="size-14 sm:size-16" />
              <div>
                <p className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
                  <span className="icon-chip size-6">
                    <Sparkles className="size-3.5" />
                  </span>
                  Company profile
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-subtle">
                  <MapPin className="size-3.5 text-accent" />
                  {COMPANY.location}
                </p>
              </div>
            </div>

            <h1 className="mt-6 font-display text-4xl leading-[0.95] font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {COMPANY.name}
            </h1>
            <p className="mt-2 text-sm tracking-[0.2em] text-accent uppercase">
              {COMPANY.subtitle}
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              We install practical automation where repetition burns time and
              money — websites, bots, workflows, documents, and AI on{" "}
              <em className="text-fg not-italic">your</em> information.{" "}
              <span className="text-fg">Scope first. Build second.</span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="btn-shadow-accent">
                <Link to="/brief">
                  Start a brief
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-shadow">
                <Link to="/services">
                  <Workflow className="size-4 text-accent" />
                  Explore services
                </Link>
              </Button>
            </div>
          </div>

          <div
            className="hero-visual relative mx-auto hidden aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-surface ring-1 ring-white/5 lg:block"
            aria-hidden
          >
            <svg
              viewBox="0 0 400 400"
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="intro-glow" cx="50%" cy="45%" r="55%">
                  <stop offset="0%" stopColor="#c9a227" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#080808" stopOpacity="0" />
                </radialGradient>
                <filter
                  id="intro-soft"
                  x="-40%"
                  y="-40%"
                  width="180%"
                  height="180%"
                >
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <rect width="400" height="400" fill="#080808" />
              <rect width="400" height="400" fill="url(#intro-glow)" />
              <g
                className="spin-slower"
                style={{ transformOrigin: "200px 200px" }}
              >
                <circle
                  cx="200"
                  cy="200"
                  r="118"
                  fill="none"
                  stroke="#c9a227"
                  strokeWidth="0.75"
                  strokeDasharray="4 10"
                  opacity="0.35"
                />
              </g>
              <g
                className="spin-slow"
                style={{ transformOrigin: "200px 200px" }}
              >
                <circle
                  cx="200"
                  cy="200"
                  r="88"
                  fill="none"
                  stroke="#c9a227"
                  strokeWidth="2"
                  opacity="0.7"
                  filter="url(#intro-soft)"
                />
                {[0, 60, 120, 180, 240, 300].map((deg) => {
                  const r = (deg * Math.PI) / 180;
                  return (
                    <line
                      key={deg}
                      x1="200"
                      y1="200"
                      x2={200 + Math.cos(r) * 88}
                      y2={200 + Math.sin(r) * 88}
                      stroke="#c9a227"
                      strokeWidth="2"
                      opacity="0.55"
                    />
                  );
                })}
              </g>
              <circle
                cx="200"
                cy="200"
                r="52"
                fill="none"
                stroke="#c9a227"
                strokeWidth="1.5"
                opacity="0.45"
              />
              <circle
                className="pulse-core"
                cx="200"
                cy="200"
                r="10"
                fill="#c9a227"
                filter="url(#intro-soft)"
              />
              <text
                x="200"
                y="355"
                textAnchor="middle"
                fill="#c9a227"
                fontSize="11"
                letterSpacing="0.28em"
                opacity="0.85"
              >
                GREAT TURBINEZ
              </text>
            </svg>
          </div>
        </section>

        {/* Snapshot stats */}
        <section className="stagger-children grid grid-cols-2 gap-2 sm:grid-cols-4">
          {INTRO_STATS.map((s) => (
            <div
              key={s.label}
              className="card-lift rounded-xl bg-surface/90 p-3 hairline sm:p-4"
            >
              <p className="text-[10px] tracking-widest text-subtle uppercase">
                {s.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-fg sm:text-base">
                {s.value}
              </p>
            </div>
          ))}
        </section>

        {/* What we do */}
        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Named work. Clear edges.
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              {SERVICES.length} named services — each with outcome, timeframe,
              and what stays out of scope. Open any card for the full picture.
            </p>
            <Link
              to="/services"
              className="hover-accent mt-4 inline-flex items-center gap-1 text-sm text-accent"
            >
              View all services
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <div className="stagger-children grid gap-2 sm:grid-cols-2">
            {SERVICES.slice(0, 4).map((s) => (
              <Link
                key={s.id}
                to="/services/$slug"
                params={{ slug: s.id }}
                className="card-lift group rounded-xl bg-surface/90 p-3 hairline"
              >
                <p className="text-sm font-medium group-hover:text-accent">
                  {s.name}
                </p>
                <p className="mt-1 line-clamp-2 text-xs text-muted">{s.blurb}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* How we engage */}
        <section>
          <Eyebrow>How we engage</Eyebrow>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            A path you can follow.
          </h2>
          <ol className="stagger-children mt-5 flex flex-wrap gap-2">
            {ENGAGEMENT_STEPS.map((step, i) => (
              <li
                key={step}
                className="card-lift flex items-center gap-2 rounded-full border border-line bg-raised/90 px-4 py-2 text-sm"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-accent/15 text-[11px] font-semibold text-accent">
                  {i + 1}
                </span>
                <span className="text-fg">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Principles */}
        <section>
          <Eyebrow>Principles</Eyebrow>
          <div className="stagger-children mt-4 grid gap-3 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="card-lift rounded-xl bg-surface/90 p-4 hairline sm:p-5"
              >
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section className="card-lift relative overflow-hidden rounded-2xl bg-surface/95 p-6 hairline sm:p-8">
          <Eyebrow>Next step</Eyebrow>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Tell us what is costing you.
          </h2>
          <p className="mt-2 max-w-lg text-sm text-muted">
            We reply {COMPANY.responseSla}. Brief first — written scope before
            any deposit.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild size="lg" className="btn-shadow-accent">
              <Link to="/brief">Start a brief</Link>
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
