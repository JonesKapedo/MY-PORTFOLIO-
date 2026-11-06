import { cn } from "@/lib/utils";

function gearPath(
  cx: number,
  cy: number,
  teeth: number,
  outerR: number,
  rootR: number,
  holeR: number,
): string {
  const steps = teeth * 4;
  const pts: string[] = [];
  for (let i = 0; i < steps; i++) {
    const a = (i / steps) * Math.PI * 2 - Math.PI / 2;
    const tooth = i % 4;
    const r = tooth === 0 || tooth === 1 ? outerR : rootR;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  pts.push("Z");
  const hole: string[] = [];
  for (let i = 0; i <= 32; i++) {
    const a = (i / 32) * Math.PI * 2;
    const x = cx + Math.cos(a) * holeR;
    const y = cy + Math.sin(a) * holeR;
    hole.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  hole.push("Z");
  return `${pts.join(" ")} ${hole.reverse().join(" ")}`;
}

type GearSystemProps = {
  className?: string;
};

/** Three interlocking gears — opposing directions, different speeds. */
export function GearSystem({ className }: GearSystemProps) {
  const g1 = { cx: 118, cy: 128, teeth: 14, outer: 78, root: 62, hole: 18 };
  const g2 = { cx: 248, cy: 108, teeth: 10, outer: 56, root: 44, hole: 14 };
  const g3 = { cx: 198, cy: 232, teeth: 8, outer: 44, root: 34, hole: 11 };

  return (
    <svg
      viewBox="0 0 360 340"
      className={cn("block text-accent", className)}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Interlocking gear system"
    >
      <defs>
        <linearGradient id="gear-fill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9a227" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#a88820" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7a6418" stopOpacity="0.92" />
        </linearGradient>
        <linearGradient id="gear-fill-mid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4b03a" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#8f7420" stopOpacity="0.88" />
        </linearGradient>
        <linearGradient id="gear-fill-sm" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0c04a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#9a7b1a" stopOpacity="0.85" />
        </linearGradient>
      </defs>

      {/* Large — clockwise slow */}
      <g>
        <path
          d={gearPath(g1.cx, g1.cy, g1.teeth, g1.outer, g1.root, g1.hole)}
          fill="url(#gear-fill)"
          fillRule="evenodd"
          opacity="0.94"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g1.cx} ${g1.cy}`}
            to={`360 ${g1.cx} ${g1.cy}`}
            dur="28s"
            repeatCount="indefinite"
          />
        </path>
        <circle
          cx={g1.cx}
          cy={g1.cy}
          r={28}
          fill="none"
          stroke="#050505"
          strokeWidth="6"
          opacity="0.4"
        />
        <circle cx={g1.cx} cy={g1.cy} r={8} fill="#050505" opacity="0.6" />
      </g>

      {/* Medium — counter-clockwise */}
      <g>
        <path
          d={gearPath(g2.cx, g2.cy, g2.teeth, g2.outer, g2.root, g2.hole)}
          fill="url(#gear-fill-mid)"
          fillRule="evenodd"
          opacity="0.96"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g2.cx} ${g2.cy}`}
            to={`-360 ${g2.cx} ${g2.cy}`}
            dur="20s"
            repeatCount="indefinite"
          />
        </path>
        <circle
          cx={g2.cx}
          cy={g2.cy}
          r={20}
          fill="none"
          stroke="#050505"
          strokeWidth="5"
          opacity="0.4"
        />
        <circle cx={g2.cx} cy={g2.cy} r={6} fill="#050505" opacity="0.6" />
      </g>

      {/* Small — clockwise faster */}
      <g>
        <path
          d={gearPath(g3.cx, g3.cy, g3.teeth, g3.outer, g3.root, g3.hole)}
          fill="url(#gear-fill-sm)"
          fillRule="evenodd"
          opacity="0.98"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g3.cx} ${g3.cy}`}
            to={`360 ${g3.cx} ${g3.cy}`}
            dur="14s"
            repeatCount="indefinite"
          />
        </path>
        <circle
          cx={g3.cx}
          cy={g3.cy}
          r={15}
          fill="none"
          stroke="#050505"
          strokeWidth="4"
          opacity="0.4"
        />
        <circle cx={g3.cx} cy={g3.cy} r={5} fill="#050505" opacity="0.6" />
      </g>
    </svg>
  );
}
