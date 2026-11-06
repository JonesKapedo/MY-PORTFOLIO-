import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
        "page-screen mx-auto w-full max-w-7xl px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-medium tracking-widest text-accent uppercase sm:text-xs">
      {children}
    </p>
  );
}
