import {
  createFileRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { COMPANY, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: `Services — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Named automation services. Open any card for delivery, scope, and a conversation before pricing.",
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
    <PageFrame className="page-enter gap-3">
      <div className="shrink-0">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Named work.
        </h1>
        <p className="mt-1 max-w-lg text-xs text-muted sm:text-sm">
          What we install and how it runs. Open a service for the full path —
          talk to us before any charge is fixed.
        </p>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.id}
            to="/services/$slug"
            params={{ slug: s.id }}
            className="card-lift group flex min-h-0 flex-col rounded-lg bg-surface p-3 hairline"
          >
            <h2 className="text-base font-semibold tracking-tight group-hover:text-accent">
              {s.name}
            </h2>
            <p className="mt-1 text-xs leading-snug text-muted">{s.blurb}</p>
            <p className="mt-2 line-clamp-2 text-xs text-fg/90">{s.outcome}</p>
            <ul className="mt-2 space-y-0.5 text-[11px] text-subtle">
              {s.includes.slice(0, 3).map((item) => (
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
          </Link>
        ))}
      </div>
    </PageFrame>
  );
}
