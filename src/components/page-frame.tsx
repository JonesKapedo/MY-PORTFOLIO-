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
        "page-screen w-full max-w-none",
        /* denser global rhythm — less empty vertical space */
        "px-6 py-8 sm:px-10 sm:py-9 md:px-12 md:py-10 lg:px-14 lg:py-11 xl:px-18 xl:py-12 2xl:px-22 2xl:py-14",
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
    <section className="w-full pb-2">
      <div className="gold-strike clip-corner-lg w-full px-7 py-10 shadow-[var(--shadow-elevated)] sm:px-10 sm:py-11 lg:px-12 lg:py-12">
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="type-label text-accent-fg/70">Next step · private intake</p>
            <h2 className="type-display mt-2 text-3xl text-accent-fg sm:text-4xl">
              {title}
            </h2>
            <p className="type-body mt-3 text-accent-fg/80">{body}</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[10px] tracking-wide text-accent-fg/70 uppercase">
              <li>No charge to brief</li>
              <li>Written scope first</li>
              <li>Deposit after approval</li>
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
