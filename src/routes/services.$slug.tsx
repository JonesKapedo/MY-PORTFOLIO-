import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { serviceCopy } from "@/lib/service-copy";
import {
  COMPANY,
  concernsForService,
  DEPOSIT_NOTE,
  getService,
  PRICE_NOTE,
  type ServiceId,
} from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetailPage,
  head: ({ params }) => {
    const service = getService(params.slug);
    const copy = service
      ? serviceCopy(service.id, {
          blurb: service.blurb,
          outcome: service.outcome,
        })
      : null;
    return {
      meta: [
        {
          title: service
            ? `${service.name} — ${COMPANY.name}`
            : `Service — ${COMPANY.name}`,
        },
        {
          name: "description",
          content: copy
            ? `${copy.outcome} Typical window: ${service!.timeframe}.`
            : COMPANY.subtitle,
        },
      ],
    };
  },
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = getService(slug);

  if (!service) {
    return (
      <PageFrame className="page-enter">
        <Eyebrow>Service</Eyebrow>
        <h1 className="mt-2 font-display text-3xl font-semibold">Not found</h1>
        <Link to="/services" className="mt-4 inline-block text-sm text-accent">
          ← All services
        </Link>
      </PageFrame>
    );
  }

  const copy = serviceCopy(service.id, {
    blurb: service.blurb,
    outcome: service.outcome,
  });
  const related = concernsForService(service.id as ServiceId);

  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-12">
      <div className="flex w-full flex-col gap-12">
        <div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-3.5" />
            All services
          </Link>

          <div className="mt-6 flex flex-wrap items-start gap-5">
            <ServiceIcon id={service.id} size="lg" />
            <div className="min-w-0 flex-1">
              <Eyebrow>Private service brief</Eyebrow>
              <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {service.name}
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {copy.blurb}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg sm:text-base">
                {copy.outcome}
              </p>
            </div>
          </div>
        </div>

        <section className="grid gap-6 rounded-2xl bg-surface/50 p-6 sm:grid-cols-3 sm:p-8">
          <div>
            <h2 className="text-[10px] tracking-[0.16em] text-accent uppercase">
              When
            </h2>
            <p className="mt-2 text-sm font-medium text-fg">{service.timeframe}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">
              {service.timeframeNote}
            </p>
          </div>
          <div>
            <h2 className="text-[10px] tracking-[0.16em] text-accent uppercase">
              How engagement starts
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Private brief → fit reply {COMPANY.responseSla} → written proposal
              → deposit only after you approve.
            </p>
          </div>
          <div>
            <h2 className="text-[10px] tracking-[0.16em] text-accent uppercase">
              Who it is for
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Operators and teams with a repeated path that is already costing
              hours or lost work — not speculative experiments.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-[11px] font-medium tracking-[0.18em] text-accent uppercase">
            How it is delivered
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Four phases. Each ends with something you can review — not a black
            box until the last day.
          </p>
          <ol className="stagger-children mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {service.delivery.map((phase, index) => (
              <li
                key={phase.name}
                className="rounded-xl bg-surface/70 p-4 sm:p-5"
              >
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-semibold">{phase.name}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
                  {phase.summary}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {(
            [
              ["Usually includes", service.includes, true],
              ["Outside this engagement", service.excludes, false],
              ["You provide", service.youProvide, true],
              ["After handoff", service.afterHandoff, false],
            ] as const
          ).map(([title, items, accent]) => (
            <div key={title} className="rounded-xl bg-surface/60 p-5">
              <h2
                className={`text-[10px] tracking-[0.16em] uppercase ${
                  accent ? "text-accent" : "text-subtle"
                }`}
              >
                {title}
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-accent/20 bg-accent/[0.04] p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-lg">
              <p className="text-[10px] tracking-[0.16em] text-subtle uppercase">
                Indicative investment
              </p>
              <p className="mt-1 text-2xl font-medium text-accent sm:text-3xl">
                {service.price}
              </p>
              <p className="text-xs text-subtle">{service.unit}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                {PRICE_NOTE}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-accent sm:text-sm">
                {DEPOSIT_NOTE}
              </p>
              <p className="mt-3 text-xs text-muted">
                Your quotation is prepared only after we understand the process
                in scope. Opening a brief places you in a private queue — not a
                public inbox free-for-all.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild size="lg">
                <Link to="/brief" search={{ service: service.id }}>
                  Request quotation brief
                  <ArrowRight className="size-4 opacity-80" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/concerns">Match a concern first</Link>
              </Button>
            </div>
          </div>

          {related.length > 0 ? (
            <div className="mt-8 border-t border-line/60 pt-6">
              <p className="text-[10px] tracking-wider text-subtle uppercase">
                Related operational concerns
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {related.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/concerns/$slug"
                      params={{ slug: c.slug }}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      </div>
    </PageFrame>
  );
}
