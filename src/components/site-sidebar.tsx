import { Link, useRouterState } from "@tanstack/react-router";
import {
  Briefcase,
  ClipboardList,
  Layers,
  Menu,
  MessageSquareWarning,
  X,
} from "lucide-react";
import { useEffect, useState, type ComponentType } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { COMPANY, NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV_ICONS: Record<
  (typeof NAV)[number]["to"],
  ComponentType<{ className?: string }>
> = {
  "/work": Briefcase,
  "/services": Layers,
  "/concerns": MessageSquareWarning,
  "/brief": ClipboardList,
};

export function SiteSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (desktop.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  const isActive = (to: string) =>
    to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(`${to}/`);

  const nav = (
    <nav className="flex flex-col gap-1" aria-label="Primary">
      {NAV.map((item) => {
        const active = isActive(item.to);
        const Icon = NAV_ICONS[item.to];
        return (
          <Link
            key={item.to}
            to={item.to}
            aria-current={active ? "page" : undefined}
            className={cn(
              "nav-link relative flex min-h-10 items-center gap-2.5 rounded-md px-3 text-sm font-medium",
              active
                ? "bg-raised text-fg shadow-[var(--shadow-border)]"
                : "text-muted hover:bg-raised/60 hover:text-fg",
            )}
          >
            {active ? (
              <span
                aria-hidden
                className="absolute top-2 bottom-2 left-0 w-0.5 rounded-full bg-accent shadow-[0_0_8px_color-mix(in_oklab,var(--color-accent)_60%,transparent)]"
              />
            ) : null}
            {Icon ? (
              <Icon
                className={cn(
                  "nav-icon size-4 shrink-0",
                  active ? "text-accent" : "text-subtle",
                )}
              />
            ) : null}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 flex h-12 items-center justify-between border-b border-line bg-canvas/90 px-4 shadow-[0_8px_24px_-16px_rgb(0_0_0_/_0.6)] backdrop-blur-md md:hidden">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-sm font-semibold tracking-tight">
            {COMPANY.name}
          </span>
          <span className="mt-0.5 text-[9px] tracking-widest text-muted uppercase">
            {COMPANY.subtitle}
          </span>
        </Link>
        <div className="flex items-center gap-1">
          <ThemeToggle className="size-9" />
          <Button
            variant="ghost"
            size="icon"
            className="size-9"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-sidebar"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-sidebar"
          className="fixed inset-0 z-30 overflow-hidden bg-canvas/95 px-4 pt-16 pb-6 md:hidden"
        >
          {nav}
        </div>
      ) : null}

      <aside className="gt-sidebar z-30 hidden h-dvh w-48 shrink-0 flex-col overflow-hidden border-r border-line bg-surface/90 px-2 py-4 backdrop-blur-sm md:flex">
        <Link to="/" className="mb-6 px-2 transition-opacity hover:opacity-90">
          <span className="block font-display text-base font-semibold tracking-tight">
            {COMPANY.name}
          </span>
          <span className="mt-1 block text-[9px] tracking-[0.14em] text-accent uppercase">
            {COMPANY.subtitle}
          </span>
        </Link>
        {nav}
        <div className="mt-auto flex items-center justify-between px-2 pt-4">
          <span className="text-[10px] tracking-wider text-subtle uppercase">
            Theme
          </span>
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}
