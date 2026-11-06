import { AnimatedTurbine } from "@/components/animated-turbine";
import { cn } from "@/lib/utils";

const SIZE = {
  sm: "size-10",
  md: "size-14",
  lg: "size-28",
  xl: "size-40 sm:size-48",
  hero: "size-48 sm:size-56 md:size-64",
} as const;

type LogoProps = {
  size?: keyof typeof SIZE;
  className?: string;
  alt?: string;
  variant?: "square" | "full";
};

/** Site logo — animated turbine mark. */
export function Logo({ size = "lg", className }: LogoProps) {
  return (
    <AnimatedTurbine
      id={`logo-${size}`}
      className={cn(
        "shrink-0 overflow-hidden rounded-full shadow-[var(--shadow-logo)]",
        SIZE[size],
        className,
      )}
    />
  );
}
