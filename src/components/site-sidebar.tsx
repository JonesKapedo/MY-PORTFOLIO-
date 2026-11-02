import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { COMPANY, NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
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
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);

  const nav = (
    <nav className="flex flex-col gap-1" aria-label="Primary">
      {NAV.map((item) => {
        const active = isActive(item.to);
        return (
          <Link
            key={item.to}
            to={item.to}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative flex min-h-12 items-center rounded-md px-3 text-sm font-medium transition-colors duration-150",
              active
                ? "bg-raised text-fg"
                : "text-muted hover:bg-raised/60 hover:text-fg",
            )}
          >
            {active ? (
              <span
                aria-hidden
                className="absolute top-2 bottom-2 left-0 w-0.5 rounded-full bg-accent"
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
      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-line bg-canvas/90 px-4 backdrop-blur-md md:hidden">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-base font-semibold tracking-tight">
            {COMPANY.name}
          </span>
          <span className="mt-0.5 text-[10px] tracking-widest text-muted uppercase">
            {COMPANY.subtitle}
          </span>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-sidebar"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open ? (
        <div
          id="mobile-sidebar"
          className="fixed inset-0 z-30 bg-canvas/95 px-4 pt-20 pb-8 md:hidden"
        >
          {nav}
        </div>
      ) : null}

      {/* Desktop sidebar */}
      <aside className="gt-sidebar sticky top-0 z-30 hidden h-dvh w-56 shrink-0 flex-col border-r border-line bg-surface px-3 py-6 md:flex">
        <Link to="/" className="mb-8 px-3">
          <span className="block font-display text-lg font-semibold tracking-tight">
            {COMPANY.name}
          </span>
          <span className="mt-1 block text-[10px] tracking-[0.14em] text-accent uppercase">
            {COMPANY.subtitle}
          </span>
        </Link>
        {nav}
        <p className="mt-auto px-3 text-[10px] leading-relaxed text-subtle">
          If it isn’t listed, describe it.
        </p>
      </aside>
    </>
  );
}
