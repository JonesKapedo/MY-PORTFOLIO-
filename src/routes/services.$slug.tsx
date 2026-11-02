import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
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
    return {
      meta: [
        {
          title: service
            ? `${service.name} — ${COMPANY.name}`
            : `Service — ${COMPANY.name}`,
        },
        {
          name: "description",
          content: service
            ? `${service.outcome} Typical window: ${service.timeframe}.`
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

  const related = concernsForService(service.id as ServiceId);

  return (
    <PageFrame className="page-enter gap-3 overflow-hidden">
      <div className="shrink-0">
        <Link to="/services" className="text-xs text-muted hover:text-accent">
          ← Services
        </Link>
        <Eyebrow>Service</Eyebrow>
        <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {service.name}
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-muted">{service.outcome}</p>
        <p className="mt-1 max-w-xl text-xs text-subtle">{service.blurb}</p>
        <p className="mt-2 text-xs text-muted">
          Typical window: <span className="text-fg">{service.timeframe}</span>
          {" — "}
          {service.timeframeNote}
        </p>
      </div>

      <div className="grid min-h-0 flex-1 gap-3 overflow-y-auto lg:grid-cols-2">
        <section>
          <h2 className="text-[10px] font-medium tracking-widest text-accent uppercase">
            How it is delivered
          </h2>
          <ol className="mt-2 space-y-1.5">
            {service.delivery.map((phase, index) => (
              <li
                key={phase.name}
                className="flex gap-2 rounded-lg bg-surface px-3 py-2 hairline"
              >
                <span className="font-mono text-[10px] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{phase.name}</p>
                  <p className="text-xs text-muted">{phase.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="grid content-start gap-3 sm:grid-cols-2">
          {(
            [
              ["Usually includes", service.includes, "accent"] as const,
              ["Outside scope", service.excludes, "subtle"] as const,
              ["You provide", service.youProvide, "accent"] as const,
              ["After handoff", service.afterHandoff, "subtle"] as const,
            ] as const
          ).map(([title, items, tone]) => (
            <div key={title} className="rounded-lg bg-surface p-3 hairline">
              <h2
                className={
                  tone === "accent"
                    ? "text-[10px] tracking-widest text-accent uppercase"
                    : "text-[10px] tracking-widest text-subtle uppercase"
                }
              >
                {title}
              </h2>
              <ul className="mt-1.5 space-y-1 text-xs text-muted">
                {items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-0 rounded-xl border border-line bg-raised px-4 py-3">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] tracking-widest text-subtle uppercase">
              Starting charge
            </p>
            <p className="mt-0.5 text-xl font-medium text-accent">{service.price}</p>
            <p className="text-[11px] text-subtle">{service.unit}</p>
            <p className="mt-1 max-w-md text-[11px] text-muted">{PRICE_NOTE}</p>
            <p className="mt-0.5 text-[11px] text-accent">{DEPOSIT_NOTE}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button asChild size="default">
              <Link to="/brief" search={{ service: service.id }}>
                Talk to us first
              </Link>
            </Button>
            <Button asChild variant="outline" size="default">
              <Link to="/concerns">Browse concerns</Link>
            </Button>
          </div>
        </div>
        {related.length > 0 ? (
          <p className="mt-2 text-[11px] text-subtle">
            Related:{" "}
            {related.slice(0, 2).map((c, i) => (
              <span key={c.slug}>
                {i > 0 ? " · " : ""}
                <Link
                  to="/concerns/$slug"
                  params={{ slug: c.slug }}
                  className="text-muted hover:text-accent"
                >
                  {c.title}
                </Link>
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </PageFrame>
  );
}
