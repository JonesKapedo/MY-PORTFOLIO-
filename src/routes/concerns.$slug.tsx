import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
        <Link to="/concerns" className="mt-4 inline-block text-sm text-accent">
          ← All concerns
        </Link>
      </PageFrame>
    );
  }

  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-12">
      <div className="flex w-full flex-col gap-10">
        <div>
          <Link
            to="/concerns"
            className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-3.5" />
            All concerns
          </Link>
          <Eyebrow className="mt-6">Operational concern</Eyebrow>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {concern.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            {concern.teaser}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="space-y-8">
            <div>
              <h2 className="text-[11px] font-medium tracking-[0.16em] text-accent uppercase">
                The situation today
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted sm:text-[15px]">
                {concern.situation.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-[11px] font-medium tracking-[0.16em] text-accent uppercase">
                What fixed looks like
              </h2>
              <ul className="mt-3 space-y-2.5">
                {concern.fixedLooksLike.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-sm leading-relaxed text-fg sm:text-[15px]"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <div className="space-y-4">
            <div className="rounded-xl bg-surface/70 p-5 sm:p-6">
              <h2 className="text-[10px] tracking-[0.16em] text-accent uppercase">
                Usually includes
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {concern.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-surface/50 p-5 sm:p-6">
              <h2 className="text-[10px] tracking-[0.16em] text-subtle uppercase">
                Outside this scope
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {concern.excludes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-subtle">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service ? (
              <div className="rounded-xl border border-accent/20 bg-accent/[0.05] p-5 sm:p-6">
                <h2 className="text-[10px] tracking-[0.16em] text-accent uppercase">
                  Mapped service
                </h2>
                <p className="mt-2 text-base font-semibold text-fg">
                  {service.name}
                </p>
                <p className="mt-1 text-sm text-muted">{service.outcome}</p>
                <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-[10px] text-subtle uppercase">
                      Indicative fee
                    </dt>
                    <dd className="font-medium text-accent">{service.price}</dd>
                    <dd className="text-xs text-subtle">{service.unit}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] text-subtle uppercase">
                      Typical window
                    </dt>
                    <dd className="text-fg">{service.timeframe}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-xs leading-relaxed text-subtle">
                  Fees apply only after a written proposal is approved. A brief
                  does not create an obligation to pay.
                </p>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.id }}
                  className="mt-3 inline-flex text-xs font-medium text-accent hover:opacity-80"
                >
                  Full service detail →
                </Link>
              </div>
            ) : null}
          </div>
        </div>

        <section className="flex flex-wrap gap-3 border-t border-line/60 pt-8">
          <Button asChild size="lg">
            <Link
              to="/brief"
              search={{
                service: concern.serviceId,
                concern: concern.slug,
              }}
            >
              Brief this concern
              <ArrowRight className="size-4 opacity-80" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/concerns">Browse other concerns</Link>
          </Button>
        </section>
      </div>
    </PageFrame>
  );
}
