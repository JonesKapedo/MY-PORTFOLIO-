import { COMPANY } from "@/lib/site";
import { cn } from "@/lib/utils";

const SIZE = {
  sm: "h-10",
  md: "h-16",
  lg: "h-28",
  xl: "h-40 sm:h-48",
  hero: "h-48 sm:h-56 md:h-64",
} as const;

type LogoProps = {
  size?: keyof typeof SIZE;
  className?: string;
  alt?: string;
  /** square = crop circle-friendly; full = taller portrait */
  variant?: "square" | "full";
};

export function Logo({
  size = "lg",
  className,
  alt = `${COMPANY.name} — ${COMPANY.subtitle}`,
  variant = "square",
}: LogoProps) {
  const imageSrc =
    variant === "full" ? COMPANY.logoFullSrc : COMPANY.logoSrc;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-raised shadow-[var(--shadow-logo)]",
        SIZE[size],
        "aspect-square w-auto",
        className,
      )}
    >
      <img
        src={imageSrc}
        alt={alt}
        className="size-full object-cover object-center"
      />
    </div>
  );
}
