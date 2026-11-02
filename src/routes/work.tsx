import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Badge } from "@/components/ui/badge";
import { COMPANY, PROJECTS } from "@/lib/site";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: `Work — ${COMPANY.name}` },
      {
        name: "description",
        content: "Selected outcomes from GREAT TURBINEZ Automation Services.",
      },
    ],
  }),
});

function WorkPage() {
  return (
    <PageFrame className="page-enter">
      <Eyebrow>Work</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Outcomes on the floor.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Problem. Build. Result. No inflated theatre.
      </p>

      <div className="mt-12 space-y-4">
        {PROJECTS.map((p) => (
          <article
            key={p.id}
            className="card-lift rounded-xl bg-surface p-6 hairline sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-subtle">{p.code}</span>
              <Badge variant={p.status === "Live" ? "live" : "default"}>
                {p.status}
              </Badge>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">{p.name}</h2>
            <p className="mt-1 text-sm text-muted">
              {p.sector} · {p.place}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-fg">{p.summary}</p>
            <p className="mt-4 text-sm font-medium text-accent">{p.outcome}</p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <Link
          to="/brief"
          className="text-sm text-accent underline-offset-4 hover:underline"
        >
          Start a brief →
        </Link>
      </div>
    </PageFrame>
  );
}
