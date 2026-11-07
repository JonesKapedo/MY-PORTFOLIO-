import {
  createFileRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, FunnelClose, PageFrame } from "@/components/page-frame";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { SERVICE_CATEGORIES } from "@/lib/service-categories";
import { serviceCopy } from "@/lib/service-copy";
import { COMPANY, getService, PLATFORM_FEATURES, SERVICES } from "@/lib/site";

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
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-16">
      <div className="flex w-full flex-col gap-16 lg:gap-20">
        <header className="max-w-3xl">
          <Eyebrow>Services · {SERVICES.length} offerings</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Find the category. Open one service. Request a quotation.
          </h1>
          <ol className="mt-8 space-y-3 text-sm text-muted sm:text-base">
            <li className="flex gap-3">
              <span className="font-mono text-accent">1</span>
              <span>Scan categories below — or jump from the chips.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-accent">2</span>
              <span>Open a service for how, when, and indicative fee.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-accent">3</span>
              <span>Brief from that page — context is pre-filled.</span>
            </li>
          </ol>
        </header>

        <nav
          aria-label="Jump to category"
          className="flex flex-wrap gap-2 border-b border-line/50 pb-6"
        >
          {SERVICE_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="rounded-full bg-surface px-4 py-2 text-xs font-medium text-muted transition-colors hover:bg-raised hover:text-fg"
            >
              {cat.label}
            </a>
          ))}
        </nav>

        <div className="space-y-16">
          {SERVICE_CATEGORIES.map((cat) => {
            const items = cat.serviceIds
              .map((id) => getService(id))
              .filter(Boolean);
            if (items.length === 0) return null;
            return (
              <section key={cat.id} id={cat.id} className="scroll-mt-10">
                <div className="mb-6 max-w-2xl border-l-2 border-accent/40 pl-5">
                  <h2 className="font-display text-2xl font-semibold tracking-tight">
                    {cat.label}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{cat.description}</p>
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
                        className="service-card group flex flex-col rounded-2xl bg-surface/70 p-6 transition-colors hover:bg-raised"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <ServiceIcon id={s.id} size="md" />
                          <span className="text-[10px] font-medium tracking-wider text-subtle uppercase">
                            {s.timeframe}
                          </span>
                        </div>
                        <h3 className="mt-4 text-base font-semibold tracking-tight group-hover:text-accent sm:text-lg">
                          {s.name}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                          {copy.blurb}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                          Detail & quotation
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <section className="w-full">
          <Eyebrow>At a glance</Eyebrow>
          <h2 className="mt-3 font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Delivery capabilities
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORM_FEATURES.map((f) => (
              <li key={f.title}>
                <Link
                  to="/services/$slug"
                  params={{ slug: f.serviceId }}
                  className="block rounded-xl px-4 py-3 text-sm transition-colors hover:bg-surface/80"
                >
                  <span className="font-medium text-fg">{f.title}</span>
                  <span className="mt-0.5 block text-xs text-muted">{f.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <FunnelClose
          title="Know the service — or not?"
          body="Open a detail page for quotation context, or start from a concern. Either way ends in a private brief."
          primary={
            <Button asChild size="lg">
              <Link to="/brief">
                Start a private brief
                <ArrowRight className="size-4 opacity-80" />
              </Link>
            </Button>
          }
          secondary={
            <Button asChild variant="ghost" size="lg">
              <Link to="/concerns">Browse concerns</Link>
            </Button>
          }
        />
      </div>
    </PageFrame>
  );
}
