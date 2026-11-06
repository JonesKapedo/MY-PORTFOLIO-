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
      {/* Desktop — borderless, vertically centered glass rail */}
      <aside
        className="dock-rail pointer-events-none fixed top-1/2 left-5 z-40 hidden -translate-y-1/2 md:block"
        aria-label="Primary"
      >
        <div className="dock-panel pointer-events-auto flex flex-col items-center gap-0.5 rounded-2xl bg-surface/55 p-1.5 backdrop-blur-2xl">
          <Link
            to="/"
            className="mb-0.5 flex size-10 items-center justify-center overflow-hidden rounded-xl transition-opacity duration-200 hover:opacity-90"
            aria-label={`${COMPANY.name} intro`}
          >
            <AnimatedTurbine id="dock-mark" className="size-8 rounded-lg" />
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
                    "dock-item group relative flex size-10 items-center justify-center rounded-xl transition-colors duration-200",
                    active
                      ? "bg-fg/5 text-accent"
                      : "text-subtle hover:bg-fg/[0.04] hover:text-fg",
                  )}
                >
                  {active ? (
                    <span
                      aria-hidden
                      className="absolute left-0 top-1/2 h-3.5 w-0.5 -translate-y-1/2 rounded-full bg-accent"
                    />
                  ) : null}
                  {Icon ? (
                    <Icon
                      className={cn(
                        "nav-icon size-4",
                        active ? "text-accent" : "",
                      )}
                      strokeWidth={1.5}
                    />
                  ) : null}
                  <span className="dock-tooltip">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-0.5 pt-0.5">
            <ThemeToggle className="size-10 rounded-xl border-0 bg-transparent shadow-none" />
          </div>
        </div>
      </aside>

      {/* Mobile — borderless bottom dock */}
      <nav
        className="dock-mobile fixed inset-x-4 bottom-4 z-40 flex items-center justify-between gap-0.5 rounded-2xl bg-surface/70 px-1 py-1 backdrop-blur-2xl md:hidden"
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
                "flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-xl px-1 py-1.5 transition-colors duration-200",
                active ? "text-accent" : "text-subtle hover:text-fg",
              )}
            >
              {Icon ? <Icon className="size-4 shrink-0" strokeWidth={1.5} /> : null}
              <span className="truncate text-[9px] font-medium tracking-wide">
                {item.label}
              </span>
            </Link>
          );
        })}
        <div className="flex shrink-0 items-center">
          <ThemeToggle className="size-9 rounded-xl border-0 bg-transparent shadow-none" />
        </div>
      </nav>
    </>
  );
}
