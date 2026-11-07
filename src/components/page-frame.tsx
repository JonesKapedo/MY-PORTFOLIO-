import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const PageFrame = forwardRef<HTMLDivElement, {
  children: ReactNode;
  className?: string;
}>(function PageFrame({ children, className }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "page-screen w-full max-w-none",
        "px-7 py-10 sm:px-12 sm:py-12 md:px-14 md:py-14 lg:px-16 lg:py-16 xl:px-24 xl:py-20 2xl:px-28 2xl:py-24",
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
    <section className="w-full pb-4">
      <div className="gold-strike clip-corner-lg w-full px-8 py-12 shadow-[var(--shadow-elevated)] sm:px-12 sm:py-14 lg:px-14 lg:py-16">
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-medium tracking-[0.2em] text-accent-fg/70 uppercase">
              Next step · private intake
            </p>
            <h2 className="display-brutal mt-3 text-3xl text-accent-fg sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-accent-fg/80 sm:text-base">
              {body}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] tracking-wide text-accent-fg/70 uppercase">
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
