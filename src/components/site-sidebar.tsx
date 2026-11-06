import { Link, useRouterState } from "@tanstack/react-router";
import {
  Briefcase,
  ClipboardList,
  Home,
  Layers,
  MessageSquareWarning,
} from "lucide-react";
import type { ComponentType } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV_ICONS: Record<
  (typeof NAV)[number]["to"],
  ComponentType<{ className?: string }>
> = {
  "/": Home,
  "/work": Briefcase,
  "/services": Layers,
  "/concerns": MessageSquareWarning,
  "/brief": ClipboardList,
};

export function SiteSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) =>
    to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <>
      {/* Desktop — transparent rail, sharp icons only */}
      <aside
        className="dock-rail pointer-events-none fixed top-1/2 left-3 z-40 hidden -translate-y-1/2 md:block"
        aria-label="Primary"
      >
        <div className="pointer-events-auto flex flex-col items-center gap-1 bg-transparent p-0">
          <nav className="flex flex-col items-center gap-1" aria-label="Primary">
            {NAV.map((item) => {
              const active = isActive(item.to);
              const Icon = NAV_ICONS[item.to];
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  aria-label={item.label}
                  title={item.label}
                  className={cn(
                    "dock-item group relative flex size-11 items-center justify-center rounded-lg transition-colors duration-150",
                    active
                      ? "text-accent"
                      : "text-muted hover:text-fg",
                  )}
                >
                  {active ? (
                    <span
                      aria-hidden
                      className="absolute left-0 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-full bg-accent"
                    />
                  ) : null}
                  {Icon ? (
                    <Icon
                      className={cn(
                        "nav-icon size-[22px]",
                        active ? "text-accent" : "",
                      )}
                      strokeWidth={2}
                      absoluteStrokeWidth
                    />
                  ) : null}
                  <span className="dock-tooltip">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-1">
            <ThemeToggle className="size-11 rounded-lg border-0 bg-transparent shadow-none" />
          </div>
        </div>
      </aside>

      {/* Mobile — keep a light bar for thumb reach */}
      <nav
        className="dock-mobile fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-0.5 rounded-2xl bg-canvas/90 px-1 py-1.5 backdrop-blur-md md:hidden"
        aria-label="Primary"
      >
        {NAV.map((item) => {
          const active = isActive(item.to);
          const Icon = NAV_ICONS[item.to];
          return (
            <Link
              key={item.to}
              to={item.to}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-xl px-1 py-1.5 transition-colors duration-150",
                active ? "text-accent" : "text-muted hover:text-fg",
              )}
            >
              {Icon ? (
                <Icon
                  className="size-5 shrink-0"
                  strokeWidth={2}
                  absoluteStrokeWidth
                />
              ) : null}
              <span className="truncate text-[9px] font-semibold tracking-wide">
                {item.label}
              </span>
            </Link>
          );
        })}
        <div className="flex shrink-0 items-center">
          <ThemeToggle className="size-9 rounded-lg border-0 bg-transparent shadow-none" />
        </div>
      </nav>
    </>
  );
}
