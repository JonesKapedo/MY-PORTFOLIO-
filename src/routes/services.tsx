import { createFileRoute, Link } from "@tanstack/react-router";
import { Eyebrow, PageFrame } from "@/components/page-frame";
import { COMPANY, PRICE_NOTE, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: `Services — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Websites, WhatsApp helpers, work automation, documents, AI on your information, dashboards, and discovery. Clear starting prices and timeframes in KES.",
      },
    ],
  }),
});

function ServicesPage() {
  return (
    <PageFrame className="page-enter gap-3">
      <div className="shrink-0">
        <Eyebrow>Services</Eyebrow>
        <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Named work. Clear floors.
        </h1>
        <p className="mt-1 text-xs text-subtle">{PRICE_NOTE}</p>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <Link
            key={s.id}
            to="/services/$slug"
            params={{ slug: s.id }}
            className="card-lift flex min-h-0 flex-col justify-between rounded-lg bg-surface p-3 hairline"
          >
            <div>
              <h2 className="text-sm font-semibold tracking-tight sm:text-base">
                {s.name}
              </h2>
              <p className="mt-1 line-clamp-2 text-xs text-muted">{s.outcome}</p>
            </div>
            <div className="mt-2 flex items-end justify-between gap-2">
              <p className="text-xs font-medium text-accent">{s.price}</p>
              <p className="text-[10px] text-subtle">{s.timeframe}</p>
            </div>
          </Link>
        ))}
      </div>
    </PageFrame>
  );
}
