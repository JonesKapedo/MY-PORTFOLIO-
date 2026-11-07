import {
  createFileRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
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
          "Search operational concerns and open a full analysis — situation, fixed state, scope, and a path to quotation.",
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

  return <ConcernsIndex />;
}

function ConcernsIndex() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CONCERNS;
    return CONCERNS.filter((c) => {
      const service = getService(c.serviceId);
      const hay = [
        c.title,
        c.teaser,
        c.serviceId,
        service?.name ?? "",
        ...c.situation,
        ...c.fixedLooksLike,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  const byService = useMemo(() => {
    return filtered.reduce<Record<string, typeof CONCERNS>>((acc, c) => {
      const key = c.serviceId;
      if (!acc[key]) acc[key] = [];
      acc[key].push(c);
      return acc;
    }, {});
  }, [filtered]);

  return (
    <PageFrame className="page-enter !overflow-y-auto overscroll-contain pb-12">
      <div className="flex w-full flex-col gap-10">
        <header className="max-w-3xl">
          <Eyebrow>Concerns · {CONCERNS.length} patterns</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Name the friction. We map it to a service.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            Each concern is a recurring operational pattern: what is broken,
            what “fixed” looks like, what is included, and what is deliberately
            out of scope. Search, open a full analysis, then request a private
            quotation brief — no obligation until a written proposal is approved.
          </p>
        </header>

        <div className="relative max-w-xl">
          <Search
            className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-subtle"
            strokeWidth={1.75}
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search concerns — e.g. WhatsApp, invoices, month-end…"
            className="h-12 w-full rounded-xl border-0 bg-surface/80 pr-4 pl-10 text-sm text-fg outline-none ring-1 ring-line field-focus placeholder:text-subtle"
            aria-label="Search concerns"
          />
          {query ? (
            <p className="mt-2 text-xs text-subtle">
              {filtered.length} match{filtered.length === 1 ? "" : "es"}
            </p>
          ) : null}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-xl bg-surface/60 px-6 py-10 text-center">
            <p className="text-sm text-muted">No concerns match that search.</p>
            <p className="mt-2 text-sm text-muted">
              Describe it in a{" "}
              <Link to="/brief" className="text-accent hover:underline">
                private brief
              </Link>{" "}
              instead.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(byService).map(([serviceId, items]) => {
              const service = getService(serviceId);
              return (
                <section key={serviceId}>
                  <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-line/50 pb-3">
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.16em] text-accent uppercase">
                        {service?.name ?? serviceId}
                      </p>
                      {service ? (
                        <p className="mt-1 max-w-xl text-xs text-muted sm:text-sm">
                          {service.outcome}
                        </p>
                      ) : null}
                    </div>
                    {service ? (
                      <Link
                        to="/services/$slug"
                        params={{ slug: service.id }}
                        className="text-xs font-medium text-accent hover:opacity-80"
                      >
                        Service & quotation →
                      </Link>
                    ) : null}
                  </div>
                  <ul className="stagger-children grid gap-3 sm:grid-cols-2">
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
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {c.teaser}
                          </p>
                          <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-subtle">
                            {c.situation[0]}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {c.fixedLooksLike.slice(0, 2).map((f) => (
                              <span
                                key={f}
                                className="rounded-full bg-raised/80 px-2.5 py-1 text-[10px] text-subtle"
                              >
                                {f.length > 42 ? `${f.slice(0, 40)}…` : f}
                              </span>
                            ))}
                          </div>
                          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                            Full analysis
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
        )}

        <section className="border-t border-line/60 pt-10">
          <h2 className="font-display text-xl font-semibold tracking-tight">
            Do not see your pattern?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Send a private brief. We map it to a category — or tell you when it
            sits outside our practice.
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
