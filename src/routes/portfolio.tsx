import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Badge } from "@/components/ui/badge";
import { COMPANY, PROJECTS, type ProjectCategory } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: `Portfolio — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Selected AI and automation systems installed for operators around Naivasha and the Rift Valley — floriculture, hospitality, energy, finance ops and commerce.",
      },
    ],
  }),
});

const FILTERS: Array<"All" | ProjectCategory> = [
  "All",
  "Automation",
  "Intelligence",
  "Advisory",
];

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const items = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <PageFrame className="page-enter">
      <Eyebrow>Portfolio</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
        Work we can stand next to.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        A selection of systems installed for operators around Naivasha and the
        wider Rift — flower farms, lodges, energy crews, desks, and markets.
        Names are working titles; the outcomes are the point.
      </p>

      {/* These filter a list rather than switch panels, so they are a labelled
          group of toggle buttons — `role="tablist"` would promise tabpanel
          semantics (and arrow-key roving focus) this control does not implement. */}
      <div
        className="mt-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {FILTERS.map((item) => {
          const active = item === filter;
          const count =
            item === "All"
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === item).length;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(item)}
              className={cn(
                "inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm transition-colors duration-150",
                active
                  ? "bg-fg text-accent-fg"
                  : "bg-raised text-muted hover:text-fg",
              )}
            >
              {item}
              <span
                aria-hidden
                className={cn(
                  "text-xs tabular-nums",
                  active ? "text-accent-fg/70" : "text-subtle",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {items.length} {items.length === 1 ? "project" : "projects"}
        {filter === "All" ? "" : ` in ${filter}`}.
      </p>

      <ol className="mt-10 divide-y divide-line border-y border-line">
        {items.map((project) => (
          <li
            key={project.id}
            className="grid gap-6 py-10 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,16rem)] md:items-start"
          >
            <p className="font-display text-3xl text-accent/80">{project.code}</p>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-medium sm:text-2xl">
                  {project.name}
                </h2>
                <Badge variant={project.status === "Live" ? "live" : "default"}>
                  {project.status}
                </Badge>
                <Badge variant="outline">{project.category}</Badge>
              </div>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {project.summary}
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-4 text-sm md:grid-cols-1">
              <div>
                <dt className="text-xs tracking-widest text-subtle uppercase">
                  Sector
                </dt>
                <dd className="mt-1 text-fg">
                  {project.sector} · {project.place}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-subtle uppercase">
                  Outcome
                </dt>
                <dd className="mt-1 text-fg">{project.outcome}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-widest text-subtle uppercase">
                  Year
                </dt>
                <dd className="mt-1 text-fg tabular-nums">{project.year}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>

      {items.length === 0 ? (
        <p className="py-16 text-center text-sm text-muted">
          Nothing in this lane yet.
        </p>
      ) : null}
    </PageFrame>
  );
}
