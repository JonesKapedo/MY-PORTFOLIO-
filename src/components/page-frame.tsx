import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Full-width content pane with generous professional margins. */
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
        "px-7 py-10 sm:px-12 sm:py-12 md:px-14 md:py-14 lg:px-18 lg:py-16 xl:px-24 xl:py-18 2xl:px-28 2xl:py-20",
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

/** Conversion band — stronger visual weight than a thin footer CTA. */
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
    <section className="mt-12 w-full pb-6">
      <div className="w-full rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] via-surface/40 to-transparent px-8 py-12 sm:px-12 sm:py-14 lg:px-14 lg:py-16">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium tracking-[0.2em] text-accent uppercase">
              Next step
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{body}</p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-subtle sm:text-sm">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                No charge to brief
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                Written scope first
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                Deposit only after approval
              </li>
            </ul>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            {primary}
            {secondary}
          </div>
        </div>
      </div>
    </section>
  );
}
