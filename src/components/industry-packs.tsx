import { Link } from "@tanstack/react-router";
import { INDUSTRY_PACKS } from "@/lib/portfolio-content";
import { getService } from "@/lib/site";

export function IndustryPacks() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {INDUSTRY_PACKS.map((pack) => (
        <article
          key={pack.id}
          className="flex flex-col rounded-2xl bg-surface/70 p-5 sm:p-6"
        >
          <p className="type-label text-accent">{pack.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{pack.blurb}</p>
          <ul className="mt-4 space-y-1.5 text-xs text-subtle">
            {pack.problems.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-accent">·</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {pack.serviceIds.map((id) => {
              const s = getService(id);
              if (!s) return null;
              return (
                <Link
                  key={id}
                  to="/services/$slug"
                  params={{ slug: id }}
                  className="rounded-full bg-raised px-2.5 py-1 text-[10px] font-medium text-muted hover:text-accent"
                >
                  {s.name}
                </Link>
              );
            })}
          </div>
          <Link
            to="/work"
            className="mt-auto pt-5 text-xs font-semibold text-accent hover:opacity-80"
          >
            Related work →
          </Link>
        </article>
      ))}
    </div>
  );
}
