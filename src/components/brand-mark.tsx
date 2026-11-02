import { COMPANY } from "@/lib/site";
import { cn } from "@/lib/utils";

const SIZE = {
  sm: "size-10",
  md: "size-14",
  lg: "size-28",
  xl: "size-40 sm:size-48",
  hero: "size-48 sm:size-56 md:size-64",
} as const;

type BrandMarkProps = {
  size?: keyof typeof SIZE;
  className?: string;
  /** Decorative only when alt is empty */
  title?: string;
};

/** Abstract turbine mark — Automation Services identity, not a portrait. */
export function BrandMark({
  size = "md",
  className,
  title = `${COMPANY.name} — ${COMPANY.subtitle}`,
}: BrandMarkProps) {
  return (
    <img
      src="/brand-mark.svg"
      alt={title}
      className={cn("shrink-0 object-contain", SIZE[size], className)}
    />
  );
}
