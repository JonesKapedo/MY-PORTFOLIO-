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
    <PageFrame className="page-enter">
      <Eyebrow>Services</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Named work.
        <br />
        Clear floors.
      </h1>
      <p className="mt-4 max-w-xl text-muted">{PRICE_NOTE}</p>
      <p className="mt-2 max-w-xl text-sm text-subtle">
        Open any service for delivery steps, what you provide, and typical
        timeframes — without the internal playbook.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {SERVICES.map((s) => (
          <Link
            key={s.id}
            to="/services/$slug"
            params={{ slug: s.id }}
            className="card-lift flex flex-col rounded-xl bg-surface p-6 hairline"
          >
            <h2 className="text-xl font-semibold tracking-tight">{s.name}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {s.outcome}
            </p>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="text-sm font-medium text-accent">{s.price}</p>
                <p className="mt-0.5 text-xs text-subtle">{s.unit}</p>
              </div>
              <p className="text-xs text-muted">{s.timeframe}</p>
            </div>
            <p className="mt-4 text-xs font-medium tracking-wide text-accent uppercase">
              View full service →
            </p>
          </Link>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted">
        <Link
          to="/brief"
          className="text-accent underline-offset-4 hover:underline"
        >
          If it isn’t listed, describe it.
        </Link>
      </p>
    </PageFrame>
  );
}
