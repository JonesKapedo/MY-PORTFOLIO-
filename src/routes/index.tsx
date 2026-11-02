import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { COMPANY, PROJECTS } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: `${COMPANY.name} — ${COMPANY.subtitle}` },
      {
        name: "description",
        content:
          "Describe the pain. Get a written next step. Deposit when the scope is clear. GREAT TURBINEZ Automation Services.",
      },
    ],
  }),
});

function HomePage() {
  const highlights = PROJECTS.slice(0, 3);

  return (
    <PageFrame className="page-enter justify-between gap-3">
      <div className="min-h-0 shrink-0">
        <Eyebrow>
          {COMPANY.subtitle} · {COMPANY.city}
        </Eyebrow>
        <h1 className="mt-2 max-w-2xl font-display text-3xl leading-[1.08] font-semibold tracking-tight sm:text-5xl">
          Fix the repeated work.
          <span className="text-accent"> Scoped. Priced. Delivered.</span>
        </h1>
        <p className="mt-2 max-w-lg text-sm text-muted">
          Describe the pain. Get a written next step. Deposit only when the
          scope is clear.
        </p>
      </div>

      {/* Two doors */}
      <div className="grid min-h-0 shrink-0 gap-2 sm:grid-cols-2">
        <Link
          to="/concerns"
          className="card-lift rounded-xl bg-surface p-4 hairline sm:p-5"
        >
          <p className="text-[10px] tracking-widest text-accent uppercase">
            I know the problem
          </p>
          <p className="mt-1 font-display text-2xl font-semibold">Concerns</p>
          <p className="mt-1 text-xs text-muted">
            Match what hurts to a named service — before any deposit.
          </p>
        </Link>
        <Link
          to="/work"
          className="card-lift rounded-xl bg-surface p-4 hairline sm:p-5"
        >
          <p className="text-[10px] tracking-widest text-accent uppercase">
            I want outcomes
          </p>
          <p className="mt-1 font-display text-2xl font-semibold">Work</p>
          <p className="mt-1 text-xs text-muted">
            Situation, install, result — proof on the floor.
          </p>
        </Link>
      </div>

      {/* Proof strip */}
      <div className="min-h-0 shrink-0">
        <Eyebrow>Selected outcomes</Eyebrow>
        <div className="mt-2 grid gap-2 md:grid-cols-3">
          {highlights.map((p) => (
            <Link
              key={p.id}
              to="/work"
              className="card-lift rounded-lg bg-surface px-3 py-2.5 hairline"
            >
              <p className="text-[10px] text-subtle">
                {p.sector} · {p.status}
              </p>
              <p className="mt-0.5 text-sm font-semibold">{p.name}</p>
              <p className="mt-0.5 text-xs text-accent">{p.outcome}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-2">
        <Button asChild size="default">
          <Link to="/brief">Start a brief</Link>
        </Button>
        <Button asChild variant="outline" size="default">
          <Link to="/services">See services</Link>
        </Button>
        <p className="w-full text-[11px] text-subtle sm:w-auto sm:ml-2">
          Free brief · Reply {COMPANY.responseSla} · No deposit until proposal
        </p>
      </div>
    </PageFrame>
  );
}
