import { cn } from "@/lib/utils";

/**
 * Trapezoidal tooth gear (approximate involute silhouette).
 * Pitch radius sits between outer and root; center distance ≈ r_pitch_a + r_pitch_b.
 */
function gearPath(
  cx: number,
  cy: number,
  teeth: number,
  outerR: number,
  pitchR: number,
  rootR: number,
  holeR: number,
): string {
  const pts: string[] = [];
  const twoPi = Math.PI * 2;
  // 6 samples per tooth: root → flank → tip → tip → flank → root
  for (let t = 0; t < teeth; t++) {
    const base = (t / teeth) * twoPi - Math.PI / 2;
    const step = twoPi / teeth;
    const a = [
      base + step * 0.05,
      base + step * 0.22,
      base + step * 0.32,
      base + step * 0.68,
      base + step * 0.78,
      base + step * 0.95,
    ];
    const rs = [rootR, pitchR, outerR, outerR, pitchR, rootR];
    for (let i = 0; i < 6; i++) {
      const x = cx + Math.cos(a[i]) * rs[i];
      const y = cy + Math.sin(a[i]) * rs[i];
      const first = t === 0 && i === 0;
      pts.push(`${first ? "M" : "L"}${x.toFixed(3)},${y.toFixed(3)}`);
    }
  }
  pts.push("Z");

  // Hub bore (even-odd)
  const hole: string[] = [];
  for (let i = 0; i <= 48; i++) {
    const ang = (i / 48) * twoPi;
    const x = cx + Math.cos(ang) * holeR;
    const y = cy + Math.sin(ang) * holeR;
    hole.push(`${i === 0 ? "M" : "L"}${x.toFixed(3)},${y.toFixed(3)}`);
  }
  hole.push("Z");

  return `${pts.join(" ")} ${hole.reverse().join(" ")}`;
}

type GearSystemProps = {
  className?: string;
};

/**
 * Three gears with matched pitch radii so teeth interlock.
 * Angular periods inverse to tooth count (meshing kinematics).
 */
export function GearSystem({ className }: GearSystemProps) {
  // Shared module so teeth mesh
  const module = 7.2;
  const addendum = module * 1.0;
  const dedendum = module * 1.25;

  const n1 = 16;
  const n2 = 12;
  const n3 = 10;

  const p1 = (module * n1) / 2;
  const p2 = (module * n2) / 2;
  const p3 = (module * n3) / 2;

  const o1 = p1 + addendum;
  const o2 = p2 + addendum;
  const o3 = p3 + addendum;
  const r1 = p1 - dedendum;
  const r2 = p2 - dedendum;
  const r3 = p3 - dedendum;

  // Centers: g2 meshes g1; g3 meshes g1 (both opposite rotation to g1)
  const g1 = { cx: 150, cy: 155, n: n1, p: p1, o: o1, r: r1, hole: 16 };
  const dist12 = p1 + p2;
  const ang12 = (-18 * Math.PI) / 180;
  const g2 = {
    cx: g1.cx + Math.cos(ang12) * dist12,
    cy: g1.cy + Math.sin(ang12) * dist12,
    n: n2,
    p: p2,
    o: o2,
    r: r2,
    hole: 13,
  };
  const dist13 = p1 + p3;
  const ang13 = (52 * Math.PI) / 180;
  const g3 = {
    cx: g1.cx + Math.cos(ang13) * dist13,
    cy: g1.cy + Math.sin(ang13) * dist13,
    n: n3,
    p: p3,
    o: o3,
    r: r3,
    hole: 11,
  };

  // Base period for large gear; others scale by tooth ratio
  const t1 = 24;
  const t2 = (t1 * n2) / n1;
  const t3 = (t1 * n3) / n1;

  const pad = 12;
  const minX = Math.min(g1.cx - o1, g2.cx - o2, g3.cx - o3) - pad;
  const minY = Math.min(g1.cy - o1, g2.cy - o2, g3.cy - o3) - pad;
  const maxX = Math.max(g1.cx + o1, g2.cx + o2, g3.cx + o3) + pad;
  const maxY = Math.max(g1.cy + o1, g2.cy + o2, g3.cy + o3) + pad;

  return (
    <svg
      viewBox={`${minX} ${minY} ${maxX - minX} ${maxY - minY}`}
      className={cn("block text-accent", className)}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Interlocking gear system"
    >
      <defs>
        <linearGradient id="gear-metal-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2c45a" />
          <stop offset="40%" stopColor="#c9a227" />
          <stop offset="100%" stopColor="#8a7018" />
        </linearGradient>
        <linearGradient id="gear-metal-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d4b03a" />
          <stop offset="100%" stopColor="#7a6418" />
        </linearGradient>
        <linearGradient id="gear-metal-3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8c84a" />
          <stop offset="100%" stopColor="#9a7b1a" />
        </linearGradient>
        <filter id="gear-depth" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow
            dx="0"
            dy="1.5"
            stdDeviation="1.2"
            floodColor="#000"
            floodOpacity="0.45"
          />
        </filter>
      </defs>

      {/* Large driver — clockwise */}
      <g filter="url(#gear-depth)">
        <path
          d={gearPath(g1.cx, g1.cy, g1.n, g1.o, g1.p, g1.r, g1.hole)}
          fill="url(#gear-metal-1)"
          fillRule="evenodd"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g1.cx} ${g1.cy}`}
            to={`360 ${g1.cx} ${g1.cy}`}
            dur={`${t1}s`}
            repeatCount="indefinite"
          />
        </path>
        <circle
          cx={g1.cx}
          cy={g1.cy}
          r={g1.p * 0.42}
          fill="none"
          stroke="#1a1408"
          strokeWidth="5"
          opacity="0.5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g1.cx} ${g1.cy}`}
            to={`360 ${g1.cx} ${g1.cy}`}
            dur={`${t1}s`}
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={g1.cx} cy={g1.cy} r={7} fill="#0a0a0a" />
        <circle cx={g1.cx} cy={g1.cy} r={3.2} fill="#c9a227" opacity="0.7" />
      </g>

      {/* Medium — counter, ratio n2/n1 */}
      <g filter="url(#gear-depth)">
        <path
          d={gearPath(g2.cx, g2.cy, g2.n, g2.o, g2.p, g2.r, g2.hole)}
          fill="url(#gear-metal-2)"
          fillRule="evenodd"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g2.cx} ${g2.cy}`}
            to={`-360 ${g2.cx} ${g2.cy}`}
            dur={`${t2}s`}
            repeatCount="indefinite"
          />
        </path>
        <circle
          cx={g2.cx}
          cy={g2.cy}
          r={g2.p * 0.4}
          fill="none"
          stroke="#1a1408"
          strokeWidth="4"
          opacity="0.5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g2.cx} ${g2.cy}`}
            to={`-360 ${g2.cx} ${g2.cy}`}
            dur={`${t2}s`}
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={g2.cx} cy={g2.cy} r={5.5} fill="#0a0a0a" />
        <circle cx={g2.cx} cy={g2.cy} r={2.5} fill="#c9a227" opacity="0.7" />
      </g>

      {/* Small — counter to driver, faster */}
      <g filter="url(#gear-depth)">
        <path
          d={gearPath(g3.cx, g3.cy, g3.n, g3.o, g3.p, g3.r, g3.hole)}
          fill="url(#gear-metal-3)"
          fillRule="evenodd"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`8 ${g3.cx} ${g3.cy}`}
            to={`-352 ${g3.cx} ${g3.cy}`}
            dur={`${t3}s`}
            repeatCount="indefinite"
          />
        </path>
        <circle
          cx={g3.cx}
          cy={g3.cy}
          r={g3.p * 0.38}
          fill="none"
          stroke="#1a1408"
          strokeWidth="3.5"
          opacity="0.5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`8 ${g3.cx} ${g3.cy}`}
            to={`-352 ${g3.cx} ${g3.cy}`}
            dur={`${t3}s`}
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={g3.cx} cy={g3.cy} r={4.5} fill="#0a0a0a" />
        <circle cx={g3.cx} cy={g3.cy} r={2} fill="#c9a227" opacity="0.7" />
      </g>
    </svg>
  );
}
