import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { Button } from "@/components/ui/button";
import { COMPANY, getConcern, getService } from "@/lib/site";

export const Route = createFileRoute("/concerns/$slug")({
  component: ConcernDetailPage,
  head: ({ params }) => {
    const concern = getConcern(params.slug);
    return {
      meta: [
        {
          title: concern
            ? `${concern.title} — ${COMPANY.name}`
            : `Concern — ${COMPANY.name}`,
        },
        {
          name: "description",
          content: concern?.teaser ?? COMPANY.subtitle,
        },
      ],
    };
  },
});

function ConcernDetailPage() {
  const { slug } = Route.useParams();
  const concern = getConcern(slug);
  const service = concern ? getService(concern.serviceId) : undefined;

  if (!concern) {
    return (
      <PageFrame className="page-enter">
        <Eyebrow>Concern</Eyebrow>
        <h1 className="mt-2 font-display text-3xl font-semibold">Not found</h1>
        <p className="mt-2 text-sm text-muted">
          This concern is not on the list.
        </p>
        <Link to="/concerns" className="mt-4 inline-block text-sm text-accent">
          ← All concerns
        </Link>
      </PageFrame>
    );
  }

  return (
    <PageFrame className="page-enter gap-3 overflow-hidden">
      <div className="shrink-0">
        <Link to="/concerns" className="text-xs text-muted hover:text-accent">
          ← Concerns
        </Link>
        <Eyebrow>Concern</Eyebrow>
        <h1 className="mt-1 max-w-3xl font-display text-2xl font-semibold tracking-tight sm:text-4xl">
          {concern.title}
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-muted">{concern.teaser}</p>
        {service ? (
          <Link
            to="/services/$slug"
            params={{ slug: service.id }}
            className="mt-2 inline-flex items-center rounded-full border border-accent/40 bg-raised px-3 py-1 text-[10px] tracking-wide text-accent uppercase hover:bg-accent hover:text-accent-fg"
          >
            Category: {service.name} →
          </Link>
        ) : null}
      </div>

      <div className="grid min-h-0 flex-1 gap-3 overflow-hidden lg:grid-cols-2">
        <section className="min-h-0 space-y-3 overflow-hidden">
          <div>
            <h2 className="text-[10px] font-medium tracking-widest text-accent uppercase">
              The situation
            </h2>
            <div className="mt-1.5 space-y-1.5 text-sm leading-snug text-muted">
              {concern.situation.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[10px] font-medium tracking-widest text-accent uppercase">
              What fixed looks like
            </h2>
            <ul className="mt-1.5 space-y-1 text-sm text-muted">
              {concern.fixedLooksLike.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-accent">·</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="grid min-h-0 gap-3 overflow-hidden sm:grid-cols-2">
          <div className="rounded-lg bg-surface p-3 hairline">
            <h2 className="text-[10px] tracking-widest text-accent uppercase">
              Usually includes
            </h2>
            <ul className="mt-1.5 space-y-1 text-xs text-muted">
              {concern.includes.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-surface p-3 hairline">
            <h2 className="text-[10px] tracking-widest text-subtle uppercase">
              Outside this scope
            </h2>
            <ul className="mt-1.5 space-y-1 text-xs text-muted">
              {concern.excludes.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </div>
          {service ? (
            <div className="rounded-lg bg-surface p-3 hairline sm:col-span-2">
              <h2 className="text-[10px] tracking-widest text-accent uppercase">
                Service this maps to
              </h2>
              <p className="mt-1 text-sm font-semibold text-fg">{service.name}</p>
              <p className="mt-0.5 text-xs text-muted">{service.outcome}</p>
              <p className="mt-1 text-xs text-accent">
                {service.price} · {service.timeframe}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex shrink-0 flex-wrap gap-2">
        <Button asChild size="default">
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
          <Button asChild variant="outline" size="default">
            <Link to="/services/$slug" params={{ slug: service.id }}>
              Full service details
            </Link>
          </Button>
        ) : null}
      </div>
    </PageFrame>
  );
}
