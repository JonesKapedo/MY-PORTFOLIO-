import {
  createFileRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { ServiceIcon } from "@/components/service-icon";
import { COMPANY, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: `Services — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Named automation services with clear outcomes, timeframes, and scope. Open any service for delivery detail.",
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
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-12">
      <div className="flex w-full flex-col gap-10">
        <header className="max-w-3xl">
          <Eyebrow>Services · {SERVICES.length}</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Named work. Clear edges.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Each service is scoped with an outcome, timeframe, and what stays
            out. Open a card for delivery phases, what you provide, and how to
            start.
          </p>
        </header>

        <div className="stagger-children grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              to="/services/$slug"
              params={{ slug: s.id }}
              className="service-card group flex flex-col rounded-2xl bg-surface/70 p-5 transition-colors duration-200 hover:bg-raised sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <ServiceIcon id={s.id} size="md" />
                <span className="text-[10px] font-medium tracking-wider text-subtle uppercase">
                  {s.timeframe}
                </span>
              </div>

              <h2 className="mt-4 text-base font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-lg">
                {s.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.blurb}</p>
              <p className="mt-3 text-sm leading-relaxed text-fg/90">{s.outcome}</p>

              <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                <div>
                  <p className="text-[10px] tracking-wider text-subtle uppercase">
                    From
                  </p>
                  <p className="text-sm font-medium text-accent">{s.price}</p>
                  <p className="text-[10px] text-subtle">{s.unit}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                  View detail
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}
