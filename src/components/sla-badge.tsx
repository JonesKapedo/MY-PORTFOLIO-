import { Clock } from "lucide-react";
import { COMPANY } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SlaBadge({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.07] px-3 py-1.5 text-[11px] font-medium tracking-wide text-accent",
        className,
      )}
    >
      <Clock className="size-3.5 shrink-0" strokeWidth={1.75} />
      Reply {COMPANY.responseSla}
    </p>
  );
}
