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
        content: `${SERVICES.length} named automation services with visuals. Open any card for delivery and scope.`,
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
          Every service has a cover, outcome, and includes. Open for the full
          path — charges only on the detail page.
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1">
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              to="/services/$slug"
              params={{ slug: s.id }}
              className="card-lift group flex flex-col overflow-hidden rounded-lg bg-surface hairline"
            >
              <ServiceCover id={s.id} className="rounded-none rounded-t-lg" />
              <div className="flex flex-1 flex-col p-3">
                <h2 className="text-sm font-semibold tracking-tight group-hover:text-accent">
                  {s.name}
                </h2>
                <p className="mt-1 text-[11px] leading-snug text-muted">{s.blurb}</p>
                <p className="mt-1.5 line-clamp-2 text-xs text-fg/90">{s.outcome}</p>
                <ul className="mt-2 space-y-0.5 text-[10px] text-subtle">
                  {s.includes.slice(0, 2).map((item) => (
                    <li key={item} className="line-clamp-1">
                      · {item}
                    </li>
                  ))}
                </ul>
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
