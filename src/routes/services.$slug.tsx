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
        <div className="mt-3 flex flex-wrap gap-4 border-y border-line py-3">
          <div>
            <p className="text-[10px] tracking-widest text-subtle uppercase">
              Starting at
            </p>
            <p className="text-lg font-medium text-accent">{service.price}</p>
            <p className="text-[10px] text-subtle">{service.unit}</p>
          </div>
          <div>
            <p className="text-[10px] tracking-widest text-subtle uppercase">
              Typical window
            </p>
            <p className="text-lg font-medium">{service.timeframe}</p>
            <p className="max-w-xs text-[10px] text-subtle">
              {service.timeframeNote}
            </p>
          </div>
        </div>
        <p className="mt-1 text-[11px] text-subtle">{PRICE_NOTE}</p>
        <p className="mt-1 text-[11px] font-medium text-accent">{DEPOSIT_NOTE}</p>
      </div>

      <div className="grid min-h-0 flex-1 gap-3 overflow-hidden lg:grid-cols-2">
        <section className="min-h-0 overflow-hidden">
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

        <div className="grid min-h-0 gap-3 overflow-hidden sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div>
            <h2 className="text-[10px] tracking-widest text-accent uppercase">
              Usually includes
            </h2>
            <ul className="mt-1 space-y-0.5 text-xs text-muted">
              {service.includes.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[10px] tracking-widest text-subtle uppercase">
              Outside scope
            </h2>
            <ul className="mt-1 space-y-0.5 text-xs text-muted">
              {service.excludes.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[10px] tracking-widest text-accent uppercase">
              You provide
            </h2>
            <ul className="mt-1 space-y-0.5 text-xs text-muted">
              {service.youProvide.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[10px] tracking-widest text-subtle uppercase">
              After handoff
            </h2>
            <ul className="mt-1 space-y-0.5 text-xs text-muted">
              {service.afterHandoff.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-2">
        <Button asChild size="default">
          <Link to="/brief" search={{ service: service.id }}>
            Start a brief
          </Link>
        </Button>
        <Button asChild variant="outline" size="default">
          <Link to="/concerns">Browse concerns</Link>
        </Button>
        {related.length > 0 ? (
          <p className="w-full text-[11px] text-subtle sm:w-auto">
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
