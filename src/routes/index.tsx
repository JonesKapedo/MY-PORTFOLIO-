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
    <PageFrame className="page-enter">
      <Eyebrow>{COMPANY.subtitle}</Eyebrow>
      <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl md:text-7xl">
        Intelligence,
        <br />
        <span className="text-accent">applied.</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        Automation for operators who are done doing the same thing twice.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link to="/brief">Start a brief</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/concerns">Browse concerns</Link>
        </Button>
      </div>

      <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {(
          [
            { to: "/work", label: "Work", hint: "Outcomes" },
            { to: "/services", label: "Services", hint: "Clear offers" },
            { to: "/concerns", label: "Concerns", hint: "What hurts" },
            { to: "/brief", label: "Brief", hint: "Describe it" },
          ] as const
        ).map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="card-lift rounded-xl bg-surface p-5 hairline"
          >
            <p className="text-xs tracking-widest text-accent uppercase">
              {item.hint}
            </p>
            <p className="mt-2 font-display text-2xl font-semibold">{item.label}</p>
          </Link>
        ))}
      </div>

      <section className="mt-20">
        <Eyebrow>Selected work</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">
          Proof on the floor.
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map((p) => (
            <Link
              key={p.id}
              to="/work"
              className="card-lift rounded-xl bg-surface p-6 hairline"
            >
              <p className="text-xs text-subtle">
                {p.code} · {p.sector}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-accent">{p.outcome}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
