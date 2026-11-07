import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Full-bleed content across the main pane — use the width of the viewport. */
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
        "page-screen w-full max-w-none px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-10 xl:px-12 2xl:px-16",
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
    <section className="mt-4 w-full border-t border-line/60 pt-12 pb-4">
      <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">{primary}{secondary}</div>
      </div>
    </section>
  );
}
