import { cn } from "@/lib/utils";

type AnimatedTurbineProps = {
  className?: string;
  id?: string;
  decorative?: boolean;
};

/**
 * Premium turbine mark — dual-speed spokes, soft bloom, no hard outlines.
 */
export function AnimatedTurbine({
  className,
  id = "turbine",
  decorative = true,
}: AnimatedTurbineProps) {
  const glowId = `${id}-glow`;
  const coreId = `${id}-core`;
  const bloomId = `${id}-bloom`;

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
          <stop offset="0%" stopColor="#c9a227" stopOpacity="0.42" />
          <stop offset="45%" stopColor="#c9a227" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#050505" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={coreId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f0d56a" stopOpacity="1" />
          <stop offset="70%" stopColor="#c9a227" stopOpacity="1" />
          <stop offset="100%" stopColor="#8a6e12" stopOpacity="1" />
        </radialGradient>
        <filter id={bloomId} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="100" cy="100" r="100" fill="#050505" />
      <circle cx="100" cy="100" r="100" fill={`url(#${glowId})`} />

      {/* Outer blade set */}
      <g className="turbine-spin-slow" filter={`url(#${bloomId})`}>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const r = (deg * Math.PI) / 180;
          return (
            <line
              key={`o-${deg}`}
              x1={100 + Math.cos(r) * 14}
              y1={100 + Math.sin(r) * 14}
              x2={100 + Math.cos(r) * 78}
              y2={100 + Math.sin(r) * 78}
              stroke="#c9a227"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.55"
            />
          );
        })}
      </g>

      {/* Inner blade set — counter */}
      <g className="turbine-spin-slower">
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg) => {
          const r = (deg * Math.PI) / 180;
          return (
            <line
              key={`i-${deg}`}
              x1={100 + Math.cos(r) * 10}
              y1={100 + Math.sin(r) * 10}
              x2={100 + Math.cos(r) * 48}
              y2={100 + Math.sin(r) * 48}
              stroke="#c9a227"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.32"
            />
          );
        })}
      </g>

      <circle cx="100" cy="100" r="22" fill="#c9a227" opacity="0.1" />
      <circle
        className="pulse-core"
        cx="100"
        cy="100"
        r="8"
        fill={`url(#${coreId})`}
        filter={`url(#${bloomId})`}
      />
    </svg>
  );
}
