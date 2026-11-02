import { BrandMark } from "@/components/brand-mark";
import { cn } from "@/lib/utils";

const SIZE = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  hero: "hero",
} as const;

type LogoProps = {
  size?: keyof typeof SIZE;
  className?: string;
  alt?: string;
  variant?: "square" | "full";
};

/** Site logo — abstract mark, never a personal photo. */
export function Logo({
  size = "lg",
  className,
}: LogoProps) {
  return (
    <BrandMark
      size={SIZE[size]}
      className={cn("shadow-[var(--shadow-logo)] rounded-full", className)}
    />
  );
}
