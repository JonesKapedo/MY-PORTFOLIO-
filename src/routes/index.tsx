import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Portrait } from "@/components/portrait";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  COMPANY,
  PRINCIPLES,
  PROJECTS,
  SERVICES,
  STATS,
} from "@/lib/site";

export const Route = createFileRoute("/")(({
  component: HomePage,
  head: () => ({
    meta: [
      { title: `${COMPANY.name} — Enterprise AI Transformation & Intelligent Automation` },
      {
        name: "description",
        content:
          "Leading global AI consulting firm partnering with Fortune 500 companies and enterprise organizations to deliver transformative artificial intelligence and intelligent automation solutions.",
      },
    ],
  }),
});

function HomePage() {
  const featured = PROJECTS.filter((p) => p.status === "Live").slice(0, 2);
  const deployment = PROJECTS.filter((p) => p.status === "In Deployment");

  return (
    <PageFrame className="page-enter">
      <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div className="order-2 lg:order-1">
          <Eyebrow>Global AI Consulting · Enterprise Solutions</Eyebrow>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] font-semibold tracking-tight text-fg sm:text-5xl md:text-6xl">
            Transform Business
            <br />
            Through Intelligence.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {COMPANY.name} partners with visionary enterprises worldwide to 
            architect and deploy transformative AI solutions—delivering measurable 
            business outcomes, competitive advantage, and sustained innovation at scale.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-subtle">
            <Globe className="size-4 text-accent" aria-hidden />
            <span>Serving enterprises across North America, Europe, Asia-Pacific, and Middle East.</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">
                Schedule Consultation
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/services">Explore Solutions</Link>
            </Button>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <Portrait size="hero" />
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
              <Eyebrow>Featured Engagements</Eyebrow>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                Global Impact
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="hidden items-center gap-1 text-sm text-accent hover:underline sm:inline-flex"
            >
              View Full Portfolio
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <ul className="mt-6 divide-y divide-line rounded-xl bg-surface hairline">
            {featured.map((project) => (
              <li key={project.id} className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
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
                  <p className="mt-2 text-sm leading-relaxed text-subtle">
                    {project.summary}
                  </p>
                </div>
                <p className="text-sm font-medium text-accent sm:max-w-xs sm:text-right">
                  {project.outcome}
                </p>
              </li>
            ))}
            {deployment.map((project) => (
              <li
                key={project.id}
                className="flex flex-col gap-2 px-5 py-5 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="flex-1">
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
                  <p className="mt-2 text-sm leading-relaxed text-subtle">
                    {project.summary}
                  </p>
                </div>
                <p className="text-sm font-medium text-accent sm:max-w-xs sm:text-right">
                  {project.outcome}
                </p>
              </li>
            ))}
          </ul>
          <Link
            to="/portfolio"
            className="mt-4 inline-flex items-center gap-1 text-sm text-accent hover:underline sm:hidden"
          >
            View Full Portfolio
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="lg:col-span-2">
          <Eyebrow>Enterprise Solutions</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
            Our Services
          </h2>
          <ul className="mt-6 space-y-3">
            {SERVICES.slice(0, 6).map((service) => (
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
          <Button asChild variant="outline" className="mt-6 w-full">
            <Link to="/services">
              View All Services
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mt-16">
        <Eyebrow>Our Approach</Eyebrow>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
          Excellence Through Discipline
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

      <section className="mt-16 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 p-8 hairline sm:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Schedule a strategic consultation with our AI experts to explore how 
            intelligent automation and AI can drive measurable outcomes for your organization.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/contact">
                Start Your Journey
                <ArrowUpRight className="size-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
