import { Link, useRouterState } from "@tanstack/react-router";
import { COMPANY } from "@/lib/site";
import { cn } from "@/lib/utils";

export function LogoCircle() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = pathname === "/company" || pathname.startsWith("/company/");

  return (
    <Link
      to="/company"
      aria-label={`${COMPANY.name} — company details`}
      className={cn(
        "gt-logo-circle fixed top-3 right-3 z-50 flex size-11 items-center justify-center overflow-hidden rounded-full bg-canvas md:top-5 md:right-5 md:size-14",
        active && "ring-2 ring-accent",
      )}
    >
      <img
        src="/brand-mark.svg"
        alt=""
        className="size-full object-cover"
      />
    </Link>
  );
}
