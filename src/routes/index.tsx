import { createFileRoute, Link } from "@tanstack/react-router";
import { PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: `${COMPANY.name} — ${COMPANY.subtitle}` },
      {
        name: "description",
        content:
          "GREAT TURBINEZ Automation Services. The repeated work ends here — scoped, priced, delivered.",
      },
    ],
  }),
});

function HomePage() {
  return (
    <PageFrame className="page-enter relative justify-center gap-8 sm:gap-10">
      <div className="grid w-full max-w-5xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="hero-glow max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.28em] text-accent uppercase">
            {COMPANY.name}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl md:text-7xl">
            The repeated
            <br />
            work <span className="text-accent">ends.</span>
          </h1>
          <p className="mt-6 max-w-md text-base text-muted sm:text-lg">
            Automation Services. One process at a time.
            <span className="text-fg"> Named. Scoped. Delivered.</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link to="/brief">Start a brief</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">What we build</Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-wide text-subtle uppercase">
            <Link to="/concerns" className="hover:text-accent">
              Name the problem
            </Link>
            <Link to="/work" className="hover:text-accent">
              See the work
            </Link>
            <Link to="/company" className="hover:text-accent">
              Company
            </Link>
          </div>
        </div>

        {/* Main-page visual — pure SVG, no external asset */}
        <div
          className="relative mx-auto hidden aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-surface ring-1 ring-white/5 lg:block"
          aria-hidden
        >
          <svg
            viewBox="0 0 400 400"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="home-glow" cx="50%" cy="45%" r="55%">
                <stop offset="0%" stopColor="#c9a227" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#080808" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="400" fill="#080808" />
            <rect width="400" height="400" fill="url(#home-glow)" />
            <circle
              cx="200"
              cy="200"
              r="88"
              fill="none"
              stroke="#c9a227"
              strokeWidth="2"
              opacity="0.7"
            />
            <circle
              cx="200"
              cy="200"
              r="52"
              fill="none"
              stroke="#c9a227"
              strokeWidth="1.5"
              opacity="0.45"
            />
            <circle cx="200" cy="200" r="10" fill="#c9a227" />
            {[0, 60, 120, 180, 240, 300].map((deg) => {
              const r = (deg * Math.PI) / 180;
              const x2 = 200 + Math.cos(r) * 88;
              const y2 = 200 + Math.sin(r) * 88;
              return (
                <line
                  key={deg}
                  x1="200"
                  y1="200"
                  x2={x2}
                  y2={y2}
                  stroke="#c9a227"
                  strokeWidth="2"
                  opacity="0.55"
                />
              );
            })}
            <text
              x="200"
              y="340"
              textAnchor="middle"
              fill="#c9a227"
              fontSize="11"
              letterSpacing="0.28em"
              opacity="0.8"
            >
              GREAT TURBINEZ
            </text>
          </svg>
        </div>
      </div>

      <p className="absolute right-0 bottom-0 hidden text-[10px] tracking-[0.2em] text-subtle uppercase sm:block">
        {COMPANY.city}
      </p>
    </PageFrame>
  );
}
