import { TRUST_MARKS } from "@/lib/portfolio-content";
import { cn } from "@/lib/utils";

export function TrustRow({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "flex flex-wrap gap-x-5 gap-y-2 border-y border-line/40 py-4",
        className,
      )}
    >
      {TRUST_MARKS.map((m) => (
        <li
          key={m}
          className="text-[11px] font-medium tracking-wide text-subtle uppercase"
        >
          {m}
        </li>
      ))}
    </ul>
  );
}
