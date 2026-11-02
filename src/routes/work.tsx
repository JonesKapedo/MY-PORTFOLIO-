import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COMPANY, PROJECTS } from "@/lib/site";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: `Work — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Situation, what was installed, and the result. Selected outcomes from GREAT TURBINEZ Automation Services.",
      },
    ],
  }),
});

function WorkPage() {
  return (
    <PageFrame className="page-enter gap-3">
      <div className="flex shrink-0 flex-wrap items-end justify-between gap-2">
        <div>
          <Eyebrow>Work</Eyebrow>
          <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Outcomes on the floor.
          </h1>
          <p className="mt-1 max-w-xl text-xs text-muted sm:text-sm">
            Situation. Install. Result. Status labelled honestly.
          </p>
        </div>
        <Button asChild size="sm">
          <Link to="/brief">Something like this? Brief →</Link>
        </Button>
      </div>

      <div className="grid min-h-0 flex-1 gap-2 overflow-hidden sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <article
            key={p.id}
            className="card-lift flex min-h-0 flex-col rounded-lg bg-surface p-3 hairline sm:p-4"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] text-subtle">{p.code}</span>
              <Badge variant={p.status === "Live" ? "live" : "default"}>
                {p.status}
              </Badge>
              <span className="text-[10px] text-subtle">
                {p.sector} · {p.place}
              </span>
            </div>
            <h2 className="mt-1.5 text-base font-semibold tracking-tight">
              {p.name}
            </h2>
            <dl className="mt-2 space-y-1.5 text-xs leading-snug">
              <div>
                <dt className="text-[10px] tracking-wide text-subtle uppercase">
                  Situation
                </dt>
                <dd className="text-muted">{p.situation}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-wide text-subtle uppercase">
                  Installed
                </dt>
                <dd className="text-fg">{p.installed}</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-wide text-accent uppercase">
                  Result
                </dt>
                <dd className="font-medium text-accent">{p.outcome}</dd>
              </div>
            </dl>
            <Link
              to="/brief"
              search={{ service: p.serviceId }}
              className="mt-auto pt-2 text-[11px] text-muted hover:text-accent"
            >
              Brief this kind of work →
            </Link>
          </article>
        ))}
      </div>
    </PageFrame>
  );
}
