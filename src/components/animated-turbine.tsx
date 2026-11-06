import { cn } from "@/lib/utils";

type AnimatedTurbineProps = {
  className?: string;
  /** Unique id prefix so multiple instances on one page do not clash gradients */
  id?: string;
  /** Show wordmark under the mark */
  showLabel?: boolean;
  /** Decorative only when true */
  decorative?: boolean;
};

/**
 * Animated turbine identity — spinning rings and spokes.
 * Prefer this over the static brand-mark image in UI chrome and hero.
 */
export function AnimatedTurbine({
  className,
  id = "turbine",
  showLabel = false,
  decorative = true,
}: AnimatedTurbineProps) {
  const glowId = `${id}-glow`;
  const softId = `${id}-soft`;

  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("text-accent", className)}
      xmlns="http://www.w3.org/2000/svg"
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : "GREAT TURBINEZ"}
    >
      <defs>
        <radialGradient id={glowId} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#c9a227" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#080808" stopOpacity="0" />
        </radialGradient>
        <filter id={softId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="400" height="400" fill="#080808" rx="40" />
      <rect width="400" height="400" fill={`url(#${glowId})`} rx="40" />

      <g className="spin-slower" style={{ transformOrigin: "200px 200px" }}>
        <circle
          cx="200"
          cy="200"
          r="118"
          fill="none"
          stroke="#c9a227"
          strokeWidth="0.75"
          strokeDasharray="4 10"
          opacity="0.35"
        />
      </g>

      <g className="spin-slow" style={{ transformOrigin: "200px 200px" }}>
        <circle
          cx="200"
          cy="200"
          r="88"
          fill="none"
          stroke="#c9a227"
          strokeWidth="2"
          opacity="0.75"
          filter={`url(#${softId})`}
        />
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const r = (deg * Math.PI) / 180;
          return (
            <line
              key={deg}
              x1="200"
              y1="200"
              x2={200 + Math.cos(r) * 88}
              y2={200 + Math.sin(r) * 88}
              stroke="#c9a227"
              strokeWidth="2"
              opacity="0.55"
            />
          );
        })}
      </g>

      <circle
        cx="200"
        cy="200"
        r="52"
        fill="none"
        stroke="#c9a227"
        strokeWidth="1.5"
        opacity="0.45"
      />
      <circle
        className="pulse-core"
        cx="200"
        cy="200"
        r="10"
        fill="#c9a227"
        filter={`url(#${softId})`}
      />

      {[82, 318].map((y, i) => (
        <circle
          key={i}
          cx="200"
          cy={y}
          r="3.5"
          fill="#c9a227"
          opacity="0.65"
        />
      ))}
      {[82, 318].map((x, i) => (
        <circle
          key={`x-${i}`}
          cx={x}
          cy="200"
          r="3.5"
          fill="#c9a227"
          opacity="0.65"
        />
      ))}

      {showLabel ? (
        <text
          x="200"
          y="355"
          textAnchor="middle"
          fill="#c9a227"
          fontSize="11"
          letterSpacing="0.28em"
          opacity="0.85"
        >
          GREAT TURBINEZ
        </text>
      ) : null}
    </svg>
  );
}
