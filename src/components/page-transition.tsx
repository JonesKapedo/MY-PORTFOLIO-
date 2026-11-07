import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * Re-mounts on pathname change so CSS enter animation runs on every navigation.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div key={pathname} className="page-transition min-h-0 flex-1">
      {children}
    </div>
  );
}
