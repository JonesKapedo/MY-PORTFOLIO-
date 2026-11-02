import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { COMPANY, getConcern, getService } from "@/lib/site";

export const Route = createFileRoute("/concerns/$slug")({
  component: ConcernDetailPage,
  loader: ({ params }) => {
    const concern = getConcern(params.slug);
    if (!concern) throw notFound();
    const service = getService(concern.serviceId);
    return { concern, service };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.concern.title} — ${COMPANY.name}`
          : `Concern — ${COMPANY.name}`,
      },
    ],
  }),
});

function ConcernDetailPage() {
  const { concern, service } = Route.useLoaderData();

  return (
    <PageFrame className="page-enter">
      <Eyebrow>Concern</Eyebrow>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        {concern.title}
      </h1>

      {service ? (
        <p className="mt-6 inline-flex items-center rounded-full border border-accent/40 bg-raised px-3 py-1 text-xs tracking-wide text-accent uppercase">
          Category: {service.name}
        </p>
      ) : null}

      <section className="mt-12 max-w-2xl">
        <h2 className="text-xs font-medium tracking-widest text-accent uppercase">
          The situation
        </h2>
        <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">
          {concern.situation.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section className="mt-10 max-w-2xl">
        <h2 className="text-xs font-medium tracking-widest text-accent uppercase">
          What fixed looks like
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {concern.fixedLooksLike.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="text-accent">·</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10 grid max-w-3xl gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xs font-medium tracking-widest text-accent uppercase">
            Usually includes
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {concern.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-medium tracking-widest text-subtle uppercase">
            Outside this scope
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {concern.excludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link
            to="/brief"
            search={{
              service: concern.serviceId,
              concern: concern.slug,
            }}
          >
            Start a brief
          </Link>
        </Button>
        {service ? (
          <Button asChild variant="outline" size="lg">
            <Link to="/services/$slug" params={{ slug: service.id }}>
              View service
            </Link>
          </Button>
        ) : null}
      </div>

      <p className="mt-10 text-sm">
        <Link to="/concerns" className="text-muted hover:text-accent">
          ← All concerns
        </Link>
      </p>
    </PageFrame>
  );
}
