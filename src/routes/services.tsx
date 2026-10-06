import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { COMPANY, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: `Services & charges — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Discovery sprints, workflow automation, custom AI assistants, document intelligence, operator dashboards and retainers. Named prices in Kenyan shillings, scoped before we start.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <PageFrame className="page-enter">
      <Eyebrow>Services & charges</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl">
        Clear work. Named prices.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Fees are in Kenyan shillings, scoped before we start. USD invoicing is
        available. A discovery sprint is the usual first step unless you already
        know the process you want taken off the floor.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {SERVICES.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="flex scroll-mt-24 flex-col rounded-xl bg-surface p-6 hairline sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-medium">{service.name}</h2>
              <p className="shrink-0 text-right">
                <span className="block text-sm font-medium text-accent">
                  {service.price}
                </span>
                <span className="text-xs text-subtle">{service.unit}</span>
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.blurb}
            </p>
            <ul className="mt-5 flex-1 space-y-2">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-fg">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-accent"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-6 w-full">
              <Link to="/contact" search={{ service: service.id }}>
                Brief this service
              </Link>
            </Button>
          </article>
        ))}
      </div>

      <section className="mt-14 rounded-xl bg-raised p-6 hairline sm:p-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          How billing works
        </h2>
        <div className="mt-6 grid gap-6 text-sm leading-relaxed text-muted md:grid-cols-3">
          <p>
            <span className="block font-medium text-fg">Scope first.</span>
            We do not start a build on a guess. Discovery, or a written scope
            from a prior sprint, comes before code.
          </p>
          <p>
            <span className="block font-medium text-fg">Fifty to start.</span>
            Half the fee on kickoff, half on handover. Retainers bill monthly
            in advance.
          </p>
          <p>
            <span className="block font-medium text-fg">On the lake, or remote.</span>
            Naivasha and nearby sites we visit. Further afield we work remote
            with a scheduled on-site week if the floor needs it.
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
