import { BrandMark } from "@/components/brand-mark";
import { cn } from "@/lib/utils";

const SIZE = {
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  hero: "hero",
} as const;

type PortraitProps = {
  size?: keyof typeof SIZE;
  className?: string;
  alt?: string;
};

/** Legacy name kept for imports — renders brand mark, not a person. */
export function Portrait({ size = "lg", className }: PortraitProps) {
  return (
    <BrandMark
      size={SIZE[size]}
      className={cn("rounded-full", className)}
    />
  );
}
