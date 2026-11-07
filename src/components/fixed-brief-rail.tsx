import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { tactileClick } from "@/lib/tactile";

/** Persistent conversion strip — intensifies presence without blocking content. */
export function FixedBriefRail() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/brief") return null;

  return (
    <div className="pointer-events-none fixed right-4 bottom-24 z-40 hidden md:block lg:right-6 lg:bottom-8">
      <Link
        to="/brief"
        onClick={() => tactileClick()}
        className="pointer-events-auto gold-strike clip-corner group inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-[0.12em] text-accent-fg uppercase shadow-[var(--shadow-btn-accent)] transition-transform hover:scale-[1.02]"
      >
        Request brief
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
