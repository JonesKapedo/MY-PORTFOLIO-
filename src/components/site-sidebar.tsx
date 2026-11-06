import { Link, useRouterState } from "@tanstack/react-router";
import {
  Briefcase,
  ClipboardList,
  Home,
  Layers,
  MessageSquareWarning,
} from "lucide-react";
import type { ComponentType } from "react";
import { AnimatedTurbine } from "@/components/animated-turbine";
import { ThemeToggle } from "@/components/theme-toggle";
import { COMPANY, NAV } from "@/lib/site";
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
      <aside
        className="dock-rail pointer-events-none fixed top-1/2 left-4 z-40 hidden -translate-y-1/2 md:block"
        aria-label="Primary"
      >
        <div className="pointer-events-auto flex flex-col items-center gap-1 rounded-2xl border border-white/10 bg-surface/70 p-1.5 shadow-[var(--shadow-elevated)] backdrop-blur-xl">
          <Link
            to="/"
            className="mb-1 flex size-10 items-center justify-center overflow-hidden rounded-xl transition-transform duration-200 hover:scale-105"
            aria-label={`${COMPANY.name} intro`}
          >
            <AnimatedTurbine
              id="dock-mark"
              className="size-9 rounded-lg shadow-[var(--shadow-logo)]"
            />
          </Link>

          <nav className="flex flex-col items-center gap-0.5" aria-label="Primary">
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
                    "dock-item group relative flex size-11 items-center justify-center rounded-xl transition-all duration-200",
                    active
                      ? "bg-accent/15 text-accent shadow-[0_0_20px_-4px_color-mix(in_oklab,var(--color-accent)_40%,transparent)]"
                      : "text-muted hover:bg-raised/80 hover:text-fg",
                  )}
                >
                  {active ? (
                    <span
                      aria-hidden
                      className="absolute -left-1 top-1/2 h-5 w-1 -translate-y-1/2 rounded-full bg-accent"
                    />
                  ) : null}
                  {Icon ? (
                    <Icon
                      className={cn(
                        "nav-icon size-[18px]",
                        active ? "text-accent" : "",
                      )}
                    />
                  ) : null}
                  <span className="dock-tooltip">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-1 border-t border-line/80 pt-1">
            <ThemeToggle className="size-11 rounded-xl" />
          </div>
        </div>
      </aside>

      <nav
        className="dock-mobile fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-1 rounded-2xl border border-white/10 bg-surface/80 px-1.5 py-1.5 shadow-[var(--shadow-elevated)] backdrop-blur-xl md:hidden"
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
                "flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-xl px-1 py-1.5 transition-all duration-200",
                active
                  ? "bg-accent/15 text-accent"
                  : "text-subtle hover:text-fg",
              )}
            >
              {Icon ? <Icon className="size-4 shrink-0" /> : null}
              <span className="truncate text-[9px] font-medium tracking-wide">
                {item.label}
              </span>
            </Link>
          );
        })}
        <div className="flex shrink-0 items-center pl-0.5">
          <ThemeToggle className="size-9 rounded-xl" />
        </div>
      </nav>
    </>
  );
}
