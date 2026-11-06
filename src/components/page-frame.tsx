import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Full-bleed content from sidebar edge across the main pane. */
export function PageFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "page-screen w-full max-w-none px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 xl:px-14",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[10px] font-medium tracking-[0.2em] text-accent uppercase sm:text-[11px]",
        className,
      )}
    >
      {children}
    </p>
  );
}
