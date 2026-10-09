import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Logo } from "@/components/logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  COMPANY,
  PRINCIPLES,
  PROJECTS,
  SERVICES,
  STATS,
} from "@/lib/site";

export const Route = createFileRoute("/")(
  component: Dashboard,
  head: () => ({
    meta: [
      // "Dashboard" is internal vocabulary — a visitor-facing page should be
      // named for the studio, not for the layout it happens to use.
      { title: `${COMPANY.name} — AI & Automation Studio, Naivasha` },
      {
        name: "description",
        content:
          "GREAT TURBINEZ designs and installs AI and automation for operators across Kenya — farms, lodges, desks and floors. Based in Naivasha, working everywhere.",
      },
    ],
  }),
});

function Dashboard() {
  const live = PROJECTS.filter((p) => p.status === "Live").slice(0, 3);
  const building = PROJECTS.filter((p) => p.status === "In build");

  return (
    <PageFrame className="page-enter">
      <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div className="order-2 lg:order-1">
          <Eyebrow>Studio · {COMPANY.location}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl">
            Intelligence,
            <br />
            applied.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {COMPANY.name} designs and installs AI and automation for operators
            who are done doing the same thing twice — farms, lodges, desks, and
            floors across Kenya and beyond.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-subtle">
            <MapPin className="size-4 text-accent" aria-hidden />
            <span>Based in {COMPANY.city}, working all over.</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">
                Start a brief
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services">See services & charges</Link>
            </Button>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <Logo size="hero" variant="square" />
        </div>
      </section>

      <section className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-surface px-5 py-6">
            <p className="font-display text-3xl font-semibold tracking-tight text-fg tabular-nums sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs tracking-wide text-muted">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Eyebrow>Now in motion</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                Live work
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="hidden items-center gap-1 text-sm text-accent hover:underline sm:inline-flex"
            >
              Full portfolio
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

            <ul className="mt-6 divide-y divide-line rounded-xl bg-surface hairline">
            {live.map((project) => (
              <li key={project.id} className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-subtle">
                      {project.code}
                    </span>
                    <h3 className="text-base font-medium">{project.name}</h3>
                    <Badge variant="live">{project.status}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {project.sector} · {project.place}
                  </p>
                </div>
                <p className="text-sm text-subtle sm:max-w-xs sm:text-right">
                  {project.outcome}
                </p>
              </li>
            ))}
            {building.map((project) => (
              <li
                key={project.id}
                className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-subtle">
                      {project.code}
                    </span>
                    <h3 className="text-base font-medium">{project.name}</h3>
                    <Badge>{project.status}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {project.sector} · {project.place}
                  </p>
                </div>
                <p className="text-sm text-subtle sm:max-w-xs sm:text-right">
                  {project.outcome}
                </p>
              </li>
            ))}
          </ul>
          <Link
            to="/portfolio"
            className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:underline sm:hidden"
          >
            Full portfolio
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="lg:col-span-2">
          <Eyebrow>Practice</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
            What we install
          </h2>
          <ul className="mt-6 space-y-3">
            {SERVICES.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link
                  to="/services"
                  hash={service.id}
                  className="group flex items-center justify-between rounded-lg bg-surface px-4 py-3.5 hairline transition-colors hover:bg-raised"
                >
                  <span className="text-sm font-medium">{service.name}</span>
                  <span className="text-xs text-muted">{service.price}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
          Three rules on the floor
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PRINCIPLES.map((item, i) => (
            <article
              key={item.title}
              className="rounded-xl bg-surface p-6 hairline"
            >
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
