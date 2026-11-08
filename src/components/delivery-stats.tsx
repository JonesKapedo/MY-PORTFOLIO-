import { DELIVERY_STATS } from "@/lib/portfolio-content";
import { cn } from "@/lib/utils";

export function DeliveryStats({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-3 sm:grid-cols-4",
        className,
      )}
    >
      {DELIVERY_STATS.map((s) => (
        <li
          key={s.label}
          className="rounded-xl bg-surface/70 px-4 py-4 sm:px-5"
        >
          <p className="font-display text-lg font-semibold tracking-tight text-accent sm:text-xl">
            {s.value}
          </p>
          <p className="mt-1 text-[10px] tracking-wide text-subtle uppercase">
            {s.label}
          </p>
        </li>
      ))}
    </ul>
  );
}
