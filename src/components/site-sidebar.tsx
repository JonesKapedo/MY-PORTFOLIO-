import { Link, useRouterState } from "@tanstack/react-router";
import {
  CircleHelp,
  Compass,
  Handshake,
  LayoutGrid,
  PenLine,
  Sparkles,
} from "lucide-react";
import type { ComponentType } from "react";
import { tactileClick } from "@/lib/tactile";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV_ICONS: Record<
  (typeof NAV)[number]["to"],
  ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  "/": Compass,
  "/work": Sparkles,
  "/services": LayoutGrid,
  "/concerns": CircleHelp,
  "/partners": Handshake,
  "/brief": PenLine,
};

/** Desktop icon rail only — mobile uses MobileNav hamburger. */
export function SiteSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) =>
    to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <aside
      className="dock-rail pointer-events-none fixed top-1/2 left-3 z-40 hidden -translate-y-1/2 md:block"
      aria-label="Primary"
    >
      <div className="pointer-events-auto flex flex-col items-center gap-1.5">
        <nav className="flex flex-col items-center gap-1.5" aria-label="Primary">
          {NAV.map((item) => {
            const active = isActive(item.to);
            const Icon = NAV_ICONS[item.to];
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => tactileClick()}
                aria-current={active ? "page" : undefined}
                aria-label={item.label}
                title={item.label}
                className={cn(
                  "dock-item group relative flex size-11 items-center justify-center rounded-full transition-all duration-200",
                  active
                    ? "bg-accent/20 text-accent shadow-[0_0_24px_-4px_color-mix(in_oklab,var(--color-accent)_50%,transparent)]"
                    : "text-muted hover:bg-fg/[0.05] hover:text-fg",
                )}
              >
                {Icon ? (
                  <Icon
                    className={cn(
                      "nav-icon size-5",
                      active ? "text-accent" : "",
                    )}
                    strokeWidth={1.6}
                  />
                ) : null}
                <span className="dock-tooltip">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
