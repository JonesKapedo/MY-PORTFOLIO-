import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatedTurbine } from "@/components/animated-turbine";
import { COMPANY } from "@/lib/site";
import { cn } from "@/lib/utils";

export function LogoCircle() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active = pathname === "/";

  return (
    <Link
      to="/"
      aria-label={`${COMPANY.name} — company intro`}
      className={cn(
        "gt-logo-circle fixed top-3 right-3 z-50 flex size-11 items-center justify-center overflow-hidden rounded-full bg-transparent md:top-5 md:right-5 md:size-14",
        active && "opacity-100",
        !active && "opacity-90",
      )}
    >
      <AnimatedTurbine id="logo-circle" className="size-full" />
    </Link>
  );
}
