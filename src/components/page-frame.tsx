import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Full-width content pane with balanced professional margins.
 * Wide enough to use the viewport; tight enough to stay readable.
 */
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
        "page-screen w-full max-w-none",
        "px-5 py-7 sm:px-8 sm:py-9 md:px-10 lg:px-12 lg:py-11 xl:px-14 2xl:px-20",
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

/** Closing band used across pages to drive briefs. */
export function FunnelClose({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: ReactNode;
  secondary?: ReactNode;
}) {
  return (
    <section className="mt-6 w-full border-t border-line/50 pt-14 pb-6">
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{body}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">{primary}{secondary}</div>
      </div>
    </section>
  );
}
