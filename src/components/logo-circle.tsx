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
        "gt-logo-circle fixed top-4 right-4 z-50 flex size-12 items-center justify-center overflow-hidden rounded-full md:top-6 md:right-6 md:size-14",
        active ? "opacity-100" : "opacity-85 hover:opacity-100",
      )}
    >
      <AnimatedTurbine id="logo-circle" className="size-full" />
    </Link>
  );
}
