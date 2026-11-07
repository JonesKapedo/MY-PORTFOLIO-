import { Link, useRouterState } from "@tanstack/react-router";
import {
  CircleHelp,
  Compass,
  Handshake,
  LayoutGrid,
  Menu,
  PenLine,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState, type ComponentType } from "react";
import { tactileClick } from "@/lib/tactile";
import { COMPANY, NAV } from "@/lib/site";
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

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (to: string) =>
    to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="mobile-menu-btn fixed top-3 left-3 z-[60] flex size-10 items-center justify-center rounded-full bg-surface/80 text-fg backdrop-blur-md"
        aria-expanded={open}
        aria-controls="mobile-drawer"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => {
          tactileClick();
          setOpen((v) => !v);
        }}
      >
        {open ? (
          <X className="size-5" strokeWidth={1.75} />
        ) : (
          <Menu className="size-5" strokeWidth={1.75} />
        )}
      </button>

      {/* Backdrop */}
      <div
        className={cn(
          "mobile-drawer-backdrop fixed inset-0 z-[55] bg-canvas/70 backdrop-blur-sm transition-opacity duration-300",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={cn(
          "mobile-drawer fixed top-0 left-0 z-[56] flex h-dvh w-[min(100%,20rem)] flex-col border-r border-line/40 bg-canvas pt-[env(safe-area-inset-top)] shadow-[var(--shadow-elevated)] transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line/40 px-5 py-4">
          <div className="min-w-0">
            <p className="font-display text-lg font-semibold tracking-tight">
              {COMPANY.name}
            </p>
            <p className="type-label mt-0.5 text-subtle">{COMPANY.subtitle}</p>
          </div>
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-full text-muted hover:bg-surface hover:text-fg"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="size-4" strokeWidth={1.75} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {NAV.map((item) => {
            const active = isActive(item.to);
            const Icon = NAV_ICONS[item.to];
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => tactileClick()}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                  active
                    ? "bg-accent/15 text-accent"
                    : "text-muted hover:bg-surface hover:text-fg",
                )}
              >
                {Icon ? (
                  <Icon className="size-5 shrink-0" strokeWidth={1.6} />
                ) : null}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-line/40 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Link
            to="/brief"
            onClick={() => tactileClick()}
            className="clip-corner flex w-full items-center justify-center gap-2 bg-accent px-4 py-3 text-xs font-semibold tracking-wider text-accent-fg uppercase"
          >
            Open a private brief
          </Link>
        </div>
      </div>
    </div>
  );
}
