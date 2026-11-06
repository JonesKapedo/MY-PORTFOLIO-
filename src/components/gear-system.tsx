import { cn } from "@/lib/utils";

/** Elegant tooth profile — soft flanks, short tips (less blocky). */
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
  for (let t = 0; t < teeth; t++) {
    const base = (t / teeth) * twoPi - Math.PI / 2;
    const step = twoPi / teeth;
    // Narrower tip, longer root gap — more refined look
    const a = [
      base + step * 0.08,
      base + step * 0.18,
      base + step * 0.28,
      base + step * 0.38,
      base + step * 0.62,
      base + step * 0.72,
      base + step * 0.82,
      base + step * 0.92,
    ];
    const rs = [
      rootR,
      rootR + (pitchR - rootR) * 0.35,
      pitchR,
      outerR,
      outerR,
      pitchR,
      rootR + (pitchR - rootR) * 0.35,
      rootR,
    ];
    for (let i = 0; i < a.length; i++) {
      const x = cx + Math.cos(a[i]) * rs[i];
      const y = cy + Math.sin(a[i]) * rs[i];
      const first = t === 0 && i === 0;
      pts.push(`${first ? "M" : "L"}${x.toFixed(3)},${y.toFixed(3)}`);
    }
  }
  pts.push("Z");
  const hole: string[] = [];
  for (let i = 0; i <= 48; i++) {
    const ang = (i / 48) * twoPi;
    hole.push(
      `${i === 0 ? "M" : "L"}${(cx + Math.cos(ang) * holeR).toFixed(3)},${(cy + Math.sin(ang) * holeR).toFixed(3)}`,
    );
  }
  hole.push("Z");
  return `${pts.join(" ")} ${hole.reverse().join(" ")}`;
}

type GearSystemProps = { className?: string };

/** Gold, white, and green interlocking gears. */
export function GearSystem({ className }: GearSystemProps) {
  const module = 6.8;
  const addendum = module * 0.85;
  const dedendum = module * 1.05;

  const n1 = 20;
  const n2 = 14;
  const n3 = 12;

  const p1 = (module * n1) / 2;
  const p2 = (module * n2) / 2;
  const p3 = (module * n3) / 2;

  const o1 = p1 + addendum;
  const o2 = p2 + addendum;
  const o3 = p3 + addendum;
  const r1 = Math.max(p1 - dedendum, module * 2.2);
  const r2 = Math.max(p2 - dedendum, module * 2);
  const r3 = Math.max(p3 - dedendum, module * 1.8);

  const g1 = { cx: 158, cy: 162, n: n1, p: p1, o: o1, r: r1, hole: 14 };
  const d12 = p1 + p2;
  const a12 = (-20 * Math.PI) / 180;
  const g2 = {
    cx: g1.cx + Math.cos(a12) * d12,
    cy: g1.cy + Math.sin(a12) * d12,
    n: n2,
    p: p2,
    o: o2,
    r: r2,
    hole: 11,
  };
  const d13 = p1 + p3;
  const a13 = (50 * Math.PI) / 180;
  const g3 = {
    cx: g1.cx + Math.cos(a13) * d13,
    cy: g1.cy + Math.sin(a13) * d13,
    n: n3,
    p: p3,
    o: o3,
    r: r3,
    hole: 9,
  };

  const t1 = 28;
  const t2 = (t1 * n2) / n1;
  const t3 = (t1 * n3) / n1;

  const pad = 14;
  const minX = Math.min(g1.cx - o1, g2.cx - o2, g3.cx - o3) - pad;
  const minY = Math.min(g1.cy - o1, g2.cy - o2, g3.cy - o3) - pad;
  const maxX = Math.max(g1.cx + o1, g2.cx + o2, g3.cx + o3) + pad;
  const maxY = Math.max(g1.cy + o1, g2.cy + o2, g3.cy + o3) + pad;

  return (
    <svg
      viewBox={`${minX} ${minY} ${maxX - minX} ${maxY - minY}`}
      className={cn("block", className)}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Interlocking gold, white, and green gears"
    >
      <defs>
        <linearGradient id="gear-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c84a" />
          <stop offset="45%" stopColor="#c9a227" />
          <stop offset="100%" stopColor="#8a7018" />
        </linearGradient>
        <filter id="gear-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="1.5"
            stdDeviation="1.2"
            floodColor="#000"
            floodOpacity="0.35"
          />
        </filter>
      </defs>

      {/* GOLD driver */}
      <g filter="url(#gear-soft)">
        <path
          d={gearPath(g1.cx, g1.cy, g1.n, g1.o, g1.p, g1.r, g1.hole)}
          fill="url(#gear-gold)"
          stroke="#a88820"
          strokeWidth="0.8"
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
          r={g1.p * 0.36}
          fill="none"
          stroke="#6b5510"
          strokeWidth="3.5"
          opacity="0.55"
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
        <circle cx={g1.cx} cy={g1.cy} r={5.5} fill="#3d320c" />
        <circle cx={g1.cx} cy={g1.cy} r={2.2} fill="#e8c84a" opacity="0.9" />
      </g>

      {/* WHITE */}
      <g filter="url(#gear-soft)">
        <path
          d={gearPath(g2.cx, g2.cy, g2.n, g2.o, g2.p, g2.r, g2.hole)}
          fill="#f4f4f5"
          stroke="#d4d4d8"
          strokeWidth="0.8"
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
          r={g2.p * 0.34}
          fill="none"
          stroke="#a1a1aa"
          strokeWidth="3"
          opacity="0.7"
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
        <circle cx={g2.cx} cy={g2.cy} r={4.5} fill="#e4e4e7" stroke="#a1a1aa" strokeWidth="0.8" />
      </g>

      {/* GREEN */}
      <g filter="url(#gear-soft)">
        <path
          d={gearPath(g3.cx, g3.cy, g3.n, g3.o, g3.p, g3.r, g3.hole)}
          fill="#16a34a"
          stroke="#15803d"
          strokeWidth="0.8"
          fillRule="evenodd"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`5 ${g3.cx} ${g3.cy}`}
            to={`-355 ${g3.cx} ${g3.cy}`}
            dur={`${t3}s`}
            repeatCount="indefinite"
          />
        </path>
        <circle
          cx={g3.cx}
          cy={g3.cy}
          r={g3.p * 0.32}
          fill="none"
          stroke="#14532d"
          strokeWidth="2.5"
          opacity="0.75"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`5 ${g3.cx} ${g3.cy}`}
            to={`-355 ${g3.cx} ${g3.cy}`}
            dur={`${t3}s`}
            repeatCount="indefinite"
          />
        </circle>
        <circle cx={g3.cx} cy={g3.cy} r={3.8} fill="#14532d" stroke="#22c55e" strokeWidth="0.8" />
      </g>
    </svg>
  );
}
