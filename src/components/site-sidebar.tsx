import { Link, useRouterState } from "@tanstack/react-router";
import {
  CircleHelp,
  Compass,
  LayoutGrid,
  PenLine,
  Sparkles,
} from "lucide-react";
import type { ComponentType } from "react";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV_ICONS: Record<
  (typeof NAV)[number]["to"],
  ComponentType<{ className?: string }>
> = {
  "/": Compass,
  "/work": Sparkles,
  "/services": LayoutGrid,
  "/concerns": CircleHelp,
  "/brief": PenLine,
};

export function SiteSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) =>
    to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <>
      <aside
        className="dock-rail pointer-events-none fixed top-1/2 left-3 z-40 hidden -translate-y-1/2 md:block"
        aria-label="Primary"
      >
        <div className="pointer-events-auto flex flex-col items-center gap-1.5 bg-transparent p-0">
          <nav className="flex flex-col items-center gap-1.5" aria-label="Primary">
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
                    "dock-item group relative flex size-11 items-center justify-center rounded-full transition-all duration-200",
                    active
                      ? "bg-accent/12 text-accent"
                      : "text-muted hover:bg-fg/[0.04] hover:text-fg",
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

      <nav
        className="dock-mobile fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-0.5 rounded-2xl bg-canvas/90 px-1.5 py-1.5 backdrop-blur-md md:hidden"
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
                <Icon className="size-[18px] shrink-0" strokeWidth={1.6} />
              ) : null}
              <span className="truncate text-[9px] font-medium tracking-wide">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
