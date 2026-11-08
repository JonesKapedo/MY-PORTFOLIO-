import { METHOD_STANDARDS, TEAM_SNAPSHOT } from "@/lib/portfolio-content";
import { cn } from "@/lib/utils";

export function MethodBlock({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-10 lg:grid-cols-2", className)}>
      <div>
        <p className="type-label text-accent">Method & standards</p>
        <h2 className="type-display mt-2 text-2xl sm:text-3xl">
          How we engage — no surprises.
        </h2>
        <ul className="mt-6 space-y-4">
          {METHOD_STANDARDS.map((m) => (
            <li key={m.title}>
              <p className="text-sm font-semibold text-fg">{m.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{m.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="type-label text-accent">Who builds</p>
        <h2 className="type-display mt-2 text-2xl sm:text-3xl">
          Small team. Owned delivery.
        </h2>
        <ul className="mt-6 space-y-3">
          {TEAM_SNAPSHOT.map((t) => (
            <li
              key={t.role}
              className="rounded-xl bg-surface/70 px-4 py-3"
            >
              <p className="text-sm font-semibold text-fg">{t.role}</p>
              <p className="mt-0.5 text-xs text-muted">{t.focus}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
