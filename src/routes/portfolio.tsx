import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Badge } from "@/components/ui/badge";
import { COMPANY, PROJECTS, type ProjectCategory } from "@/lib/site";
import { useState } from "react";

export const Route = createFileRoute("/portfolio")(({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: `Global Portfolio & Case Studies — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Explore our portfolio of enterprise AI transformations across financial services, healthcare, manufacturing, retail, energy, and logistics—delivering billions in value worldwide.",
      },
    ],
  }),
});

function PortfolioPage() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const categories: Array<ProjectCategory | "All"> = [
    "All",
    "Transformation",
    "Automation",
    "AI Solutions",
    "Data Intelligence",
  ];

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <PageFrame className="page-enter">
      <Eyebrow>Portfolio & Case Studies</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
        Enterprise Transformations
        <br />
        That Deliver Results.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        From Fortune 500 companies to global industry leaders, we've delivered 
        AI and automation solutions that drive measurable business outcomes across 
        every continent and major industry vertical.
      </p>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              filter === category
                ? "bg-accent text-white"
                : "bg-surface text-muted hairline hover:bg-raised"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="rounded-xl bg-surface p-6 hairline transition-all hover:shadow-lg sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-medium text-subtle">
                    CASE {project.code}
                  </span>
                  <Badge variant={project.status === "Live" ? "live" : "default"}>
                    {project.status}
                  </Badge>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  {project.name}
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {project.sector} · {project.place} · {project.year}
                </p>
                <p className="mt-4 leading-relaxed text-fg">
                  {project.summary}
                </p>
              </div>
              <div className="shrink-0 sm:max-w-xs sm:text-right">
                <p className="text-xs font-medium uppercase tracking-wide text-subtle">
                  Business Impact
                </p>
                <p className="mt-2 text-base font-semibold text-accent">
                  {project.outcome}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-muted">No projects match the selected filter.</p>
        </div>
      )}

      <section className="mt-16 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 p-8 hairline sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Ready to Write Your Success Story?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Join the world's leading enterprises in leveraging AI and automation 
            to drive competitive advantage and sustainable growth.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              Start Your Transformation
            </a>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
