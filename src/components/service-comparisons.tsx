import { Link } from "@tanstack/react-router";
import { SERVICE_COMPARISONS } from "@/lib/portfolio-content";

export function ServiceComparisons() {
  return (
    <div className="space-y-4">
      {SERVICE_COMPARISONS.map((c) => (
        <div
          key={c.id}
          className="grid gap-3 rounded-2xl bg-surface/60 p-5 sm:grid-cols-[auto_1fr_1fr] sm:items-stretch sm:gap-4 sm:p-6"
        >
          <p className="text-[10px] font-medium tracking-wide text-subtle uppercase sm:self-center">
            {c.title}
          </p>
          <Link
            to="/services/$slug"
            params={{ slug: c.left.id }}
            className="rounded-xl bg-raised/80 p-4 transition-colors hover:bg-raised"
          >
            <p className="text-sm font-semibold text-fg">{c.left.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{c.left.when}</p>
          </Link>
          <Link
            to="/services/$slug"
            params={{ slug: c.right.id }}
            className="rounded-xl bg-raised/80 p-4 transition-colors hover:bg-raised"
          >
            <p className="text-sm font-semibold text-fg">{c.right.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{c.right.when}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
