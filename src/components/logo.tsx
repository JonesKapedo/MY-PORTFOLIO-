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
  variant?: "square" | "banner";
};

export function Logo({
  size = "lg",
  className,
  alt = "Great Turbinez - AI & Automation",
  variant = "square",
}: LogoProps) {
  const imageSrc =
    variant === "banner" ? "/logo-banner.jpg" : "/logo-square.jpg";

  return (
    <div className={cn("relative", SIZE[size], className)}>
      <img
        src={imageSrc}
        alt={alt}
        className="h-full w-auto max-w-full object-contain"
      />
    </div>
  );
}
