import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const PageFrame = forwardRef<
  HTMLDivElement,
  {
    children: ReactNode;
    className?: string;
  }
>(function PageFrame({ children, className }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "page-screen page-frame-safe w-full max-w-full min-w-0",
        "px-4 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9 lg:px-12 lg:py-10 xl:px-16 xl:py-11 2xl:px-20 2xl:py-12",
        className,
      )}
    >
      {children}
    </div>
  );
});

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("ops-label", className)}>{children}</p>;
}

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
    <section className="w-full min-w-0 max-w-full pb-2">
      <div className="gold-strike clip-corner-lg w-full min-w-0 max-w-full px-5 py-8 shadow-[var(--shadow-elevated)] sm:px-8 sm:py-10 lg:px-10 lg:py-11">
        <div className="flex w-full min-w-0 flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl min-w-0">
            <p className="type-label text-accent-fg/70">Next step · private intake</p>
            <h2 className="type-display mt-2 text-2xl text-accent-fg sm:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="type-body mt-3 text-accent-fg/80">{body}</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] tracking-wide text-accent-fg/70 uppercase">
              <li>No charge to brief</li>
              <li>Written scope first</li>
              <li>Deposit after approval</li>
            </ul>
          </div>
          <div className="flex w-full min-w-0 shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
            {primary}
            {secondary}
          </div>
        </div>
      </div>
    </section>
  );
}
