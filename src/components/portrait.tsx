import { cn } from "@/lib/utils";

const SIZE = {
  sm: "size-14",
  md: "size-28",
  lg: "size-44 sm:size-56",
  xl: "size-52 sm:size-64 md:size-72",
  hero: "size-56 sm:size-72 md:size-80",
} as const;

type PortraitProps = {
  size?: keyof typeof SIZE;
  className?: string;
  alt?: string;
};

export function Portrait({
  size = "lg",
  className,
  alt = "Principal of GREAT TURBINEZ",
}: PortraitProps) {
  return (
    <div className={cn("relative shrink-0 rounded-full", SIZE[size], className)}>
      <div className="absolute -inset-1 rounded-full bg-accent/25" aria-hidden />
      <div className="portrait-ring absolute inset-0 overflow-hidden rounded-full">
        <img
          src="/portrait.jpg"
          alt={alt}
          width={800}
          height={800}
          className="size-full object-cover object-center"
        />
      </div>
    </div>
  );
}
