import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { searchCatalog } from "@/lib/catalog-search";

export function PortfolioSearch() {
  const [query, setQuery] = useState("");
  const hits = useMemo(() => searchCatalog(query, 10), [query]);

  return (
    <div className="w-full max-w-xl">
      <div className="relative">
        <Search
          className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-subtle"
          strokeWidth={1.75}
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search services, concerns, work…"
          className="h-12 w-full rounded-xl border-0 bg-surface/80 pr-4 pl-10 text-sm text-fg outline-none ring-1 ring-line field-focus placeholder:text-subtle"
          aria-label="Search portfolio"
        />
      </div>
      {query.trim() ? (
        <ul className="mt-3 max-h-72 space-y-1 overflow-y-auto rounded-xl bg-surface/90 p-2 ring-1 ring-line/60">
          {hits.length === 0 ? (
            <li className="px-3 py-4 text-center text-sm text-muted">
              No matches.{" "}
              <Link to="/brief" className="text-accent hover:underline">
                Send a brief
              </Link>{" "}
              instead.
            </li>
          ) : (
            hits.map((h) => (
              <li key={`${h.kind}-${h.id}`}>
                {h.kind === "work" ? (
                  <Link
                    to="/work"
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-raised"
                  >
                    <span className="text-[10px] tracking-wide text-accent uppercase">
                      {h.kind}
                    </span>
                    <p className="text-sm font-medium text-fg">{h.title}</p>
                    <p className="text-xs text-muted">{h.teaser}</p>
                  </Link>
                ) : (
                  <Link
                    to={h.to}
                    params={h.params}
                    className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-raised"
                  >
                    <span className="text-[10px] tracking-wide text-accent uppercase">
                      {h.kind}
                    </span>
                    <p className="text-sm font-medium text-fg">{h.title}</p>
                    <p className="line-clamp-1 text-xs text-muted">{h.teaser}</p>
                  </Link>
                )}
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
