import { cn } from "@/lib/utils";

type AnimatedTurbineProps = {
  className?: string;
  /** Unique id prefix so multiple instances on one page do not clash gradients */
  id?: string;
  /** Decorative only when true */
  decorative?: boolean;
};

/**
 * Animated turbine — soft disc + spinning spokes (no hard outlines).
 * Works at hero size and small chrome sizes.
 */
export function AnimatedTurbine({
  className,
  id = "turbine",
  decorative = true,
}: AnimatedTurbineProps) {
  const glowId = `${id}-glow`;
  const coreId = `${id}-core`;

  return (
    <svg
      viewBox="0 0 200 200"
      className={cn("block text-accent", className)}
      xmlns="http://www.w3.org/2000/svg"
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : "GREAT TURBINEZ"}
    >
      <defs>
        <radialGradient id={glowId} cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="#c9a227" stopOpacity="0.38" />
          <stop offset="55%" stopColor="#c9a227" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#080808" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={coreId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8c84a" stopOpacity="1" />
          <stop offset="100%" stopColor="#c9a227" stopOpacity="0.85" />
        </radialGradient>
      </defs>

      {/* Soft base — no stroke/outline */}
      <circle cx="100" cy="100" r="100" fill="#080808" />
      <circle cx="100" cy="100" r="100" fill={`url(#${glowId})`} />

      {/* Outer whisper ring — very soft fill arc, not a hard stroke */}
      <g className="turbine-spin-slow">
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const r = (deg * Math.PI) / 180;
          const x2 = 100 + Math.cos(r) * 72;
          const y2 = 100 + Math.sin(r) * 72;
          return (
            <line
              key={deg}
              x1="100"
              y1="100"
              x2={x2}
              y2={y2}
              stroke="#c9a227"
              strokeWidth="2.25"
              strokeLinecap="round"
              opacity="0.5"
            />
          );
        })}
      </g>

      {/* Inner spokes counter-spin */}
      <g className="turbine-spin-slower">
        {[30, 90, 150, 210, 270, 330].map((deg) => {
          const r = (deg * Math.PI) / 180;
          const x2 = 100 + Math.cos(r) * 42;
          const y2 = 100 + Math.sin(r) * 42;
          return (
            <line
              key={deg}
              x1="100"
              y1="100"
              x2={x2}
              y2={y2}
              stroke="#c9a227"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.35"
            />
          );
        })}
      </g>

      {/* Soft core glow + hub — no outline rings */}
      <circle cx="100" cy="100" r="18" fill="#c9a227" opacity="0.12" />
      <circle
        className="pulse-core"
        cx="100"
        cy="100"
        r="7"
        fill={`url(#${coreId})`}
      />
    </svg>
  );
}
