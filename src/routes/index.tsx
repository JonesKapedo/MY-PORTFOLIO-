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
          "GREAT TURBINEZ Automation Services. Websites, bots, work automation, documents, AI on your information, and dashboards — scoped and delivered.",
      },
    ],
  }),
});

function HomePage() {
  const highlights = PROJECTS.slice(0, 3);

  return (
    <PageFrame className="page-enter justify-between gap-4">
      <div className="min-h-0 shrink">
        <Eyebrow>{COMPANY.subtitle}</Eyebrow>
        <h1 className="mt-2 max-w-2xl font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Intelligence,{" "}
          <span className="text-accent">applied.</span>
        </h1>
        <p className="mt-3 max-w-lg text-sm text-muted sm:text-base">
          Automation for operators who are done doing the same thing twice.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button asChild size="default">
            <Link to="/brief">Start a brief</Link>
          </Button>
          <Button asChild variant="outline" size="default">
            <Link to="/concerns">Browse concerns</Link>
          </Button>
        </div>
      </div>

      <div className="grid min-h-0 shrink gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {(
          [
            { to: "/work", label: "Work", hint: "Outcomes" },
            { to: "/services", label: "Services", hint: "Offers" },
            { to: "/concerns", label: "Concerns", hint: "Problems" },
            { to: "/brief", label: "Brief", hint: "Describe" },
          ] as const
        ).map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="card-lift rounded-lg bg-surface px-4 py-3 hairline"
          >
            <p className="text-[10px] tracking-widest text-accent uppercase">
              {item.hint}
            </p>
            <p className="mt-1 font-display text-xl font-semibold">{item.label}</p>
          </Link>
        ))}
      </div>

      <div className="min-h-0 shrink">
        <Eyebrow>Selected work</Eyebrow>
        <div className="mt-2 grid gap-2 md:grid-cols-3">
          {highlights.map((p) => (
            <Link
              key={p.id}
              to="/work"
              className="card-lift rounded-lg bg-surface px-4 py-3 hairline"
            >
              <p className="text-[10px] text-subtle">
                {p.code} · {p.sector}
              </p>
              <h3 className="mt-1 text-sm font-semibold">{p.name}</h3>
              <p className="mt-1 text-xs text-accent">{p.outcome}</p>
            </Link>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}
