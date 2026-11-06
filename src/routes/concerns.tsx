import {
  createFileRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { COMPANY, CONCERNS, getService } from "@/lib/site";

export const Route = createFileRoute("/concerns")({
  component: ConcernsPage,
  head: () => ({
    meta: [
      { title: `Concerns — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Operational friction mapped to scoped automation. Open any concern for situation, fixed state, inclusions, and a path to brief.",
      },
    ],
  }),
});

function ConcernsPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isDetail =
    pathname.startsWith("/concerns/") && pathname !== "/concerns";

  if (isDetail) {
    return <Outlet />;
  }

  const byService = CONCERNS.reduce<
    Record<string, typeof CONCERNS>
  >((acc, c) => {
    const key = c.serviceId;
    if (!acc[key]) acc[key] = [];
    acc[key].push(c);
    return acc;
  }, {});

  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-12">
      <div className="flex w-full flex-col gap-10">
        <header className="max-w-3xl">
          <Eyebrow>Concerns · {CONCERNS.length}</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Operational friction, named precisely
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Each concern is a real pattern we see on the floor: what is broken,
            what “fixed” looks like, what is included, and what is deliberately
            out of scope. Select one to open the full brief path — or start
            from a service if you already know the category.
          </p>
        </header>

        <div className="stagger-children space-y-12">
          {Object.entries(byService).map(([serviceId, items]) => {
            const service = getService(serviceId);
            return (
              <section key={serviceId}>
                <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.16em] text-accent uppercase">
                      {service?.name ?? serviceId}
                    </p>
                    {service ? (
                      <p className="mt-1 max-w-xl text-xs text-muted sm:text-sm">
                        {service.outcome} · Indicative from {service.price} ·{" "}
                        {service.timeframe}
                      </p>
                    ) : null}
                  </div>
                  {service ? (
                    <Link
                      to="/services/$slug"
                      params={{ slug: service.id }}
                      className="text-xs text-accent hover:opacity-80"
                    >
                      Service detail →
                    </Link>
                  ) : null}
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {items.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to="/concerns/$slug"
                        params={{ slug: c.slug }}
                        className="service-card group flex h-full flex-col rounded-xl bg-surface/70 p-5 transition-colors hover:bg-raised sm:p-6"
                      >
                        <h2 className="text-sm font-semibold tracking-tight text-fg transition-colors group-hover:text-accent sm:text-[15px]">
                          {c.title}
                        </h2>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                          {c.teaser}
                        </p>
                        <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-subtle">
                          {c.situation[0]}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                          Open full analysis
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <section className="border-t border-line/60 pt-10">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            Do not see your pattern?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Describe it in a private brief. We map it to a service — or tell you
            honestly when it is outside our practice.
          </p>
          <Link
            to="/brief"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:opacity-80"
          >
            Request a private brief
            <ArrowRight className="size-3.5" />
          </Link>
        </section>
      </div>
    </PageFrame>
  );
}
