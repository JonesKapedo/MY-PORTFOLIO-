import {
  createFileRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { ServiceCover } from "@/components/service-cover";
import { COMPANY, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: `Services — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Named automation services with visuals. Open any card for delivery, scope, and next step.",
      },
    ],
  }),
});

function ServicesPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isDetail =
    pathname.startsWith("/services/") && pathname !== "/services";

  if (isDetail) {
    return <Outlet />;
  }

  return (
    <PageFrame className="page-enter gap-2">
      <div className="shrink-0">
        <Eyebrow>Services · {SERVICES.length}</Eyebrow>
        <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Named work.
        </h1>
        <p className="mt-1 max-w-lg text-xs text-muted">
          Each service has a visual, outcome, and path. Open a card for the
          full detail.
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1">
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              to="/services/$slug"
              params={{ slug: s.id }}
              className="card-lift group flex flex-col overflow-hidden rounded-lg bg-surface hairline"
            >
              <ServiceCover
                id={s.id}
                name={s.name}
                className="rounded-none"
              />
              <div className="flex flex-1 flex-col p-3">
                <h2 className="text-sm font-semibold tracking-tight group-hover:text-accent sm:text-base">
                  {s.name}
                </h2>
                <p className="mt-1 line-clamp-2 text-xs text-muted">{s.blurb}</p>
                <p className="mt-1.5 line-clamp-2 text-xs text-fg/90">{s.outcome}</p>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-[10px] text-subtle">{s.timeframe}</span>
                  <span className="text-[10px] font-medium tracking-wide text-accent uppercase">
                    Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}
