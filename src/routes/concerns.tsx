import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
          "Browse operational concerns. Each opens a full page with situation, fixed state, scope, and a path to brief.",
      },
    ],
  }),
});

/**
 * TanStack nests `concerns.$slug` under `concerns`.
 * Without <Outlet />, /concerns/:slug keeps showing this index.
 */
function ConcernsPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isDetail =
    pathname.startsWith("/concerns/") && pathname !== "/concerns";

  if (isDetail) {
    return <Outlet />;
  }

  return (
    <PageFrame className="page-enter gap-3">
      <div className="shrink-0">
        <Eyebrow>Concerns</Eyebrow>
        <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          What is costing you?
        </h1>
        <p className="mt-1 text-xs text-muted sm:text-sm">
          Open any line for the full picture. Category is assigned for you.
        </p>
      </div>

      <ul className="grid min-h-0 flex-1 gap-1.5 overflow-hidden sm:grid-cols-2">
        {CONCERNS.map((c) => {
          const service = getService(c.serviceId);
          return (
            <li key={c.slug} className="min-h-0">
              <Link
                to="/concerns/$slug"
                params={{ slug: c.slug }}
                className="card-lift group flex h-full flex-col justify-between rounded-lg bg-surface/95 p-3 hairline"
              >
                <div>
                  <p className="text-sm font-medium text-fg group-hover:text-accent">
                    {c.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-muted">
                    {c.teaser}
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-[10px] tracking-wide text-subtle uppercase">
                    {service?.name ?? "Service"}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-accent uppercase">
                    Open
                    <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </PageFrame>
  );
}
