import { createFileRoute, Link } from "@tanstack/react-router";
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
          "Browse operational concerns. Each opens a full page with category and a path to brief.",
      },
    ],
  }),
});

function ConcernsPage() {
  return (
    <PageFrame className="page-enter">
      <Eyebrow>Concerns</Eyebrow>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        What is costing you?
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Pick a problem. See the full picture. Category is assigned for you.
      </p>

      <ul className="mt-12 divide-y divide-line border-y border-line">
        {CONCERNS.map((c) => {
          const service = getService(c.serviceId);
          return (
            <li key={c.slug}>
              <Link
                to="/concerns/$slug"
                params={{ slug: c.slug }}
                className="group flex flex-col gap-1 py-5 transition-colors hover:bg-raised/40 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 sm:px-2"
              >
                <div>
                  <p className="text-base font-medium text-fg group-hover:text-accent sm:text-lg">
                    {c.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{c.teaser}</p>
                </div>
                {service ? (
                  <p className="shrink-0 text-xs tracking-wide text-subtle uppercase">
                    {service.name}
                  </p>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="mt-12 text-sm text-muted">
        <Link to="/brief" className="text-accent underline-offset-4 hover:underline">
          If it isn’t listed, describe it.
        </Link>
      </p>
    </PageFrame>
  );
}
