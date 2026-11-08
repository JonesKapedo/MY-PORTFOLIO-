import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { DeliveryStats } from "@/components/delivery-stats";
import { Eyebrow, FunnelClose, PageFrame } from "@/components/page-frame";
import { SlaBadge } from "@/components/sla-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COMPANY, SERVICES } from "@/lib/site";
import { WORK_CASES } from "@/lib/work-cases";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: `Work — ${COMPANY.name}` },
      {
        name: "description",
        content:
          "Selected case studies: situation, what was installed, and observed results from GREAT TURBINEZ Automation Services.",
      },
    ],
  }),
});

function WorkPage() {
  const [sector, setSector] = useState("all");
  const [serviceId, setServiceId] = useState("all");
  const [status, setStatus] = useState("all");

  const sectors = useMemo(
    () => [...new Set(WORK_CASES.map((c) => c.sector))].sort(),
    [],
  );

  const filtered = useMemo(() => {
    return WORK_CASES.filter((c) => {
      if (sector !== "all" && c.sector !== sector) return false;
      if (serviceId !== "all" && c.serviceId !== serviceId) return false;
      if (status !== "all" && c.status !== status) return false;
      return true;
    });
  }, [sector, serviceId, status]);

  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-14">
      <div className="flex w-full flex-col gap-12">
        <header className="flex w-full flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>Work · {WORK_CASES.length} delivered patterns</Eyebrow>
              <SlaBadge />
            </div>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Proof we install automation that holds.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Situation. Install. Observed result. Filter by sector, service, or
              status — then brief a similar pattern.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/brief">
              Brief similar work
              <ArrowRight className="size-4 opacity-80" />
            </Link>
          </Button>
        </header>

        <DeliveryStats />

        {/* Filters */}
        <div className="flex flex-wrap gap-3 border-b border-line/40 pb-5">
          <FilterSelect
            label="Sector"
            value={sector}
            onChange={setSector}
            options={[
              { value: "all", label: "All sectors" },
              ...sectors.map((s) => ({ value: s, label: s })),
            ]}
          />
          <FilterSelect
            label="Service"
            value={serviceId}
            onChange={setServiceId}
            options={[
              { value: "all", label: "All services" },
              ...SERVICES.filter((s) =>
                WORK_CASES.some((c) => c.serviceId === s.id),
              ).map((s) => ({ value: s.id, label: s.name })),
            ]}
          />
          <FilterSelect
            label="Status"
            value={status}
            onChange={setStatus}
            options={[
              { value: "all", label: "All statuses" },
              { value: "Live", label: "Live" },
              { value: "In build", label: "In build" },
            ]}
          />
          <p className="self-center text-xs text-subtle">
            {filtered.length} case{filtered.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="stagger-children flex w-full flex-col gap-5">
          {filtered.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="scroll-mt-20 grid w-full gap-6 rounded-2xl bg-surface/60 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12 xl:p-10"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-subtle">{c.code}</span>
                  <Badge variant={c.status === "Live" ? "live" : "default"}>
                    {c.status}
                  </Badge>
                  <span className="text-[11px] text-subtle">
                    {c.sector} · {c.place}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {c.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-accent">{c.headline}</p>
                <p className="mt-2 text-xs text-subtle">
                  {c.clientType} · {c.timeline}
                </p>

                {/* Before → After strip */}
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-raised/50 px-3 py-3">
                    <p className="text-[10px] tracking-wide text-subtle uppercase">
                      Before
                    </p>
                    <p className="mt-1 line-clamp-4 text-xs leading-relaxed text-muted">
                      {c.situation}
                    </p>
                  </div>
                  <div className="rounded-xl bg-raised/50 px-3 py-3">
                    <p className="text-[10px] tracking-wide text-accent uppercase">
                      Installed
                    </p>
                    <p className="mt-1 line-clamp-4 text-xs leading-relaxed text-fg">
                      {c.installed}
                    </p>
                  </div>
                  <div className="rounded-xl border border-accent/20 bg-accent/[0.06] px-3 py-3">
                    <p className="text-[10px] tracking-wide text-accent uppercase">
                      After
                    </p>
                    <p className="mt-1 text-xs leading-relaxed font-medium text-fg">
                      {c.results[0]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[10px] font-medium tracking-[0.16em] text-accent uppercase">
                  Observed results
                </h3>
                <ul className="mt-3 space-y-3">
                  {c.results.map((r) => (
                    <li
                      key={r}
                      className="flex gap-3 text-sm leading-relaxed text-fg"
                    >
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 border-t border-line/60 pt-4 text-xs leading-relaxed text-subtle">
                  Scope: {c.scopeNote}
                </p>

                <div className="mt-auto flex flex-wrap gap-4 pt-6">
                  <Link
                    to="/brief"
                    search={{ service: c.serviceId }}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                  >
                    Quotation for this pattern
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link
                    to="/services/$slug"
                    params={{ slug: c.serviceId }}
                    className="text-sm text-muted hover:text-accent"
                  >
                    Related service →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-sm text-muted">
            No cases match these filters.{" "}
            <button
              type="button"
              className="text-accent hover:underline"
              onClick={() => {
                setSector("all");
                setServiceId("all");
                setStatus("all");
              }}
            >
              Clear filters
            </button>
          </p>
        ) : null}

        <FunnelClose
          title="Ready for the same standard on your process?"
          body={`Private brief. We reply ${COMPANY.responseSla}. Written scope before any deposit.`}
          primary={
            <Button asChild size="lg">
              <Link to="/brief">
                Request a private brief
                <ArrowRight className="size-4 opacity-80" />
              </Link>
            </Button>
          }
          secondary={
            <Button asChild variant="ghost" size="lg">
              <Link to="/services">View services</Link>
            </Button>
          }
        />
      </div>
    </PageFrame>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="flex flex-col gap-1 text-[10px] tracking-wide text-subtle uppercase">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 min-w-[9rem] rounded-lg bg-surface px-3 text-xs font-medium normal-case tracking-normal text-fg outline-none ring-1 ring-line"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
