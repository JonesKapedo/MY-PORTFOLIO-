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
        "page-screen mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 sm:py-5",
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
