import {
  createFileRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { ServiceIcon } from "@/components/service-icon";
import { SERVICE_CATEGORIES } from "@/lib/service-categories";
import { serviceCopy } from "@/lib/service-copy";
import { COMPANY, getService, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: `Services — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Browse automation services by category. Open any service for delivery detail and a private quotation path.",
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
      <div className="flex w-full flex-col gap-12">
        <header className="max-w-3xl">
          <Eyebrow>Services · {SERVICES.length} named offerings</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Find the category. Open the service. Request a quotation.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Work is organised by operational need — not by buzzwords. Each card
            leads to a full brief of how and when we deliver. Pricing is shared
            on the service page as an indicative band; your quotation follows a
            written scope.
          </p>
        </header>

        <nav
          aria-label="Service categories"
          className="flex flex-wrap gap-2 border-b border-line/60 pb-4"
        >
          {SERVICE_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="rounded-full border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent/40 hover:text-fg"
            >
              {cat.label}
            </a>
          ))}
        </nav>

        <div className="space-y-14">
          {SERVICE_CATEGORIES.map((cat) => {
            const items = cat.serviceIds
              .map((id) => getService(id))
              .filter(Boolean);
            if (items.length === 0) return null;
            return (
              <section key={cat.id} id={cat.id} className="scroll-mt-8">
                <div className="mb-5 max-w-2xl">
                  <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {cat.label}
                  </h2>
                  <p className="mt-1.5 text-sm text-muted">{cat.description}</p>
                </div>
                <div className="stagger-children grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {items.map((s) => {
                    if (!s) return null;
                    const copy = serviceCopy(s.id, {
                      blurb: s.blurb,
                      outcome: s.outcome,
                    });
                    return (
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
                        <h3 className="mt-4 text-base font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-lg">
                          {s.name}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                          {copy.blurb}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-fg/90">
                          {copy.outcome}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                          Detail & quotation
                          <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <section className="rounded-2xl border border-accent/15 bg-accent/[0.04] px-6 py-8 sm:px-8">
          <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Unsure which category fits?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Start from a concern, or send a private brief. We map the friction to
            a service — or decline when it is outside our practice.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link to="/concerns" className="font-medium text-accent hover:opacity-80">
              Browse concerns →
            </Link>
            <Link to="/brief" className="font-medium text-accent hover:opacity-80">
              Request a brief →
            </Link>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
