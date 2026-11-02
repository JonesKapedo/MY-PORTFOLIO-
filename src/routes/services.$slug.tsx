import { createFileRoute, Link, notFound } from "@tanstack/react-router";
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
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.service.name} — ${COMPANY.name}`
          : `Service — ${COMPANY.name}`,
      },
    ],
  }),
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const related = concernsForService(service.id as ServiceId);

  return (
    <PageFrame className="page-enter">
      <Eyebrow>Service</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        {service.name}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{service.outcome}</p>
      <p className="mt-6 text-xl font-medium text-accent">{service.price}</p>
      <p className="text-sm text-subtle">{service.unit}</p>
      <p className="mt-2 text-xs text-subtle">{PRICE_NOTE}</p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
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

      <div className="mt-10">
        <Button asChild size="lg">
          <Link to="/brief" search={{ service: service.id }}>
            Start a brief
          </Link>
        </Button>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
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
