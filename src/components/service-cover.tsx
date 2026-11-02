import type { ReactNode } from "react";
import type { ServiceId } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  id: ServiceId;
  name: string;
  className?: string;
  size?: "card" | "hero";
};

/**
 * Visual for each service: dedicated SVG under /services/{id}.svg
 * with an inline gold-on-black fallback if the file is missing.
 */
export function ServiceCover({ id, name, className, size = "card" }: Props) {
  const h = size === "hero" ? "h-32 sm:h-40" : "h-28";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#080808] ring-1 ring-white/5",
        h,
        className,
      )}
    >
      <img
        src={`/services/${id}.svg`}
        alt=""
        width={640}
        height={280}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <span className="sr-only">{name}</span>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}
