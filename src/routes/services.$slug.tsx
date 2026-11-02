import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import {
  COMPANY,
  concernsForService,
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
        <h1 className="mt-3 font-display text-4xl font-semibold">Not found</h1>
        <p className="mt-4 text-muted">This service is not on the catalogue.</p>
        <Link to="/services" className="mt-8 inline-block text-accent">
          ← All services
        </Link>
      </PageFrame>
    );
  }

  const related = concernsForService(service.id as ServiceId);

  return (
    <PageFrame className="page-enter">
      <p className="text-sm">
        <Link to="/services" className="text-muted hover:text-accent">
          ← Services
        </Link>
      </p>

      <Eyebrow>Service</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        {service.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        {service.outcome}
      </p>
      <p className="mt-3 max-w-2xl text-sm text-subtle">{service.blurb}</p>

      <div className="mt-8 flex flex-wrap gap-6 border-y border-line py-6">
        <div>
          <p className="text-xs tracking-widest text-subtle uppercase">Starting at</p>
          <p className="mt-1 text-xl font-medium text-accent">{service.price}</p>
          <p className="text-xs text-subtle">{service.unit}</p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-subtle uppercase">Typical window</p>
          <p className="mt-1 text-xl font-medium text-fg">{service.timeframe}</p>
          <p className="mt-1 max-w-xs text-xs text-subtle">{service.timeframeNote}</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-subtle">{PRICE_NOTE}</p>

      <section className="mt-14">
        <Eyebrow>How it is delivered</Eyebrow>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
          From brief to handoff
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Client-facing steps only. Tools and internals stay inside the engagement.
        </p>
        <ol className="mt-8 space-y-4">
          {service.delivery.map((phase, index) => (
            <li
              key={phase.name}
              className="card-lift flex gap-4 rounded-xl bg-surface p-5 hairline"
            >
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-fg">{phase.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {phase.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-xs font-medium tracking-widest text-accent uppercase">
            Usually includes
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {service.includes.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-medium tracking-widest text-subtle uppercase">
            Outside this scope
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {service.excludes.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-subtle">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-xs font-medium tracking-widest text-accent uppercase">
            What you provide
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {service.youProvide.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-medium tracking-widest text-subtle uppercase">
            After handoff
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {service.afterHandoff.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-subtle">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link to="/brief" search={{ service: service.id }}>
            Start a brief
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/concerns">Browse concerns</Link>
        </Button>
      </div>

      {related.length > 0 ? (
        <section className="mt-16 border-t border-line pt-12">
          <Eyebrow>Related concerns</Eyebrow>
          <ul className="mt-6 space-y-3">
            {related.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/concerns/$slug"
                  params={{ slug: c.slug }}
                  className="text-fg underline-offset-4 hover:text-accent hover:underline"
                >
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </PageFrame>
  );
}
