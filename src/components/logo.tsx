import { cn } from "@/lib/utils";

const SIZE = {
  sm: "h-14",
  md: "h-28",
  lg: "h-44 sm:h-56",
  xl: "h-52 sm:h-64 md:h-72",
  hero: "h-56 sm:h-72 md:h-80",
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
  const imageSrc = variant === "banner" 
    ? "/logo-banner.jpg"
    : "/logo-square.jpg";

  if (variant === "banner") {
    return (
      <div className={cn("relative", SIZE[size], className)}>
        <img
          src={imageSrc}
          alt={alt}
          className="h-full w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className={cn("relative shrink-0 rounded-full", SIZE[size], className)}>
      <div className="absolute -inset-1 rounded-full bg-accent/25" aria-hidden />
      <div className="portrait-ring absolute inset-0 overflow-hidden rounded-full">
        <img
          src={imageSrc}
          alt={alt}
          className="size-full object-cover object-center"
        />
      </div>
    </div>
  );
}
