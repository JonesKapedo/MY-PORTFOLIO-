import { cn } from "@/lib/utils";

/**
 * Tooth period starts at valley centre. Tip centre is at +π/n (half pitch).
 * For mesh: driver valley faces line-of-centres; driven tip faces opposite.
 */
function gearPath(
  cx: number,
  cy: number,
  teeth: number,
  outerR: number,
  pitchR: number,
  rootR: number,
  holeR: number,
  rotationOffset = 0,
): string {
  const pts: string[] = [];
  const twoPi = Math.PI * 2;
  const samples = 16;

  for (let t = 0; t < teeth; t++) {
    // Centre this tooth's valley at base; tip lands at base + step/2
    const base = (t / teeth) * twoPi + rotationOffset;
    const step = twoPi / teeth;
    for (let s = 0; s <= samples; s++) {
      const u = s / samples;
      const ang = base + u * step;
      let r: number;
      // Narrow tip (~22%), wide valley (~50%) for clean interlock
      if (u < 0.25 || u > 0.75) {
        r = rootR;
      } else if (u < 0.36) {
        const k = (u - 0.25) / 0.11;
        const ease = k * k * (3 - 2 * k);
        r = rootR + (outerR - rootR) * ease;
      } else if (u <= 0.64) {
        r = outerR;
      } else {
        const k = (u - 0.64) / 0.11;
        const ease = k * k * (3 - 2 * k);
        r = outerR - (outerR - rootR) * ease;
      }
      // Mild involute bow on flanks only
      if (u >= 0.25 && u < 0.36) {
        const k = (u - 0.25) / 0.11;
        r += Math.sin(k * Math.PI) * (pitchR - rootR) * 0.06;
      }
      if (u > 0.64 && u <= 0.75) {
        const k = (u - 0.64) / 0.11;
        r += Math.sin(k * Math.PI) * (pitchR - rootR) * 0.06;
      }
      const x = cx + Math.cos(ang) * r;
      const y = cy + Math.sin(ang) * r;
      const first = t === 0 && s === 0;
      pts.push(`${first ? "M" : "L"}${x.toFixed(3)},${y.toFixed(3)}`);
    }
  }
  pts.push("Z");

  const hole: string[] = [];
  for (let i = 0; i <= 64; i++) {
    const ang = (i / 64) * twoPi;
    hole.push(
      `${i === 0 ? "M" : "L"}${(cx + Math.cos(ang) * holeR).toFixed(3)},${(cy + Math.sin(ang) * holeR).toFixed(3)}`,
    );
  }
  hole.push("Z");
  return `${pts.join(" ")} ${hole.reverse().join(" ")}`;
}

type GearSystemProps = { className?: string };

export function GearSystem({ className }: GearSystemProps) {
  const module = 6.6;
  const addendum = module * 0.65;
  const dedendum = module * 0.85;
  // Extra clearance so tips sit in valleys without visual collision
  const backlash = module * 0.22;

  const n1 = 16;
  const n2 = 12;
  const n3 = 10;

  const p1 = (module * n1) / 2;
  const p2 = (module * n2) / 2;
  const p3 = (module * n3) / 2;

  const o1 = p1 + addendum;
  const o2 = p2 + addendum;
  const o3 = p3 + addendum;
  const r1 = Math.max(p1 - dedendum, module * 2);
  const r2 = Math.max(p2 - dedendum, module * 1.85);
  const r3 = Math.max(p3 - dedendum, module * 1.65);

  const g1 = { cx: 172, cy: 174, n: n1, p: p1, o: o1, r: r1, hole: 15 };

  // White: upper-left of driver
  const a12 = (-28 * Math.PI) / 180;
  // Green on exact tooth grid of driver (4 steps = 90°)
  const a13 = a12 + 4 * ((2 * Math.PI) / n1);

  const d12 = p1 + p2 + backlash;
  const d13 = p1 + p3 + backlash;

  const g2 = {
    cx: g1.cx + Math.cos(a12) * d12,
    cy: g1.cy + Math.sin(a12) * d12,
    n: n2,
    p: p2,
    o: o2,
    r: r2,
    hole: 12,
  };
  const g3 = {
    cx: g1.cx + Math.cos(a13) * d13,
    cy: g1.cy + Math.sin(a13) * d13,
    n: n3,
    p: p3,
    o: o3,
    r: r3,
    hole: 10,
  };

  /*
   * Valley of driver faces contact line (phase = line angle).
   * Tip of driven faces back: phase + π/n = line + π
   *   → phase = line + π − π/n
   */
  const phase1 = a12;
  const phase2 = a12 + Math.PI - Math.PI / n2;
  const phase3 = a13 + Math.PI - Math.PI / n3;

  // Angular speeds inverse to tooth count (rolling without slip)
  const t1 = 36;
  const t2 = (t1 * n2) / n1;
  const t3 = (t1 * n3) / n1;

  const pad = 22;
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
      aria-label="Interlocking precision gears"
    >
      <defs>
        <linearGradient id="g-gold-brush" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f7ecc0" />
          <stop offset="18%" stopColor="#e8c84a" />
          <stop offset="42%" stopColor="#c9a227" />
          <stop offset="68%" stopColor="#8a7018" />
          <stop offset="100%" stopColor="#3d320c" />
        </linearGradient>
        <radialGradient id="g-gold-key" cx="28%" cy="22%" r="70%">
          <stop offset="0%" stopColor="#fff8e0" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#e0c04a" stopOpacity="0" />
          <stop offset="100%" stopColor="#1a1505" stopOpacity="0.35" />
        </radialGradient>

        <linearGradient id="g-steel-brush" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#e4e4e7" />
          <stop offset="55%" stopColor="#a1a1aa" />
          <stop offset="80%" stopColor="#52525b" />
          <stop offset="100%" stopColor="#27272a" />
        </linearGradient>
        <radialGradient id="g-steel-key" cx="26%" cy="20%" r="72%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
          <stop offset="40%" stopColor="#d4d4d8" stopOpacity="0" />
          <stop offset="100%" stopColor="#09090b" stopOpacity="0.4" />
        </radialGradient>

        <linearGradient id="g-green-brush" x1="0%" y1="10%" x2="100%" y2="90%">
          <stop offset="0%" stopColor="#bbf7d0" />
          <stop offset="30%" stopColor="#22c55e" />
          <stop offset="60%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#022c16" />
        </linearGradient>
        <radialGradient id="g-green-key" cx="25%" cy="20%" r="70%">
          <stop offset="0%" stopColor="#dcfce7" stopOpacity="0.5" />
          <stop offset="45%" stopColor="#16a34a" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.4" />
        </radialGradient>

        <filter id="g-ao" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="3"
            stdDeviation="2.2"
            floodColor="#000"
            floodOpacity="0.5"
          />
        </filter>

        <radialGradient id="g-spec" cx="30%" cy="25%" r="40%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* GOLD driver */}
      <g filter="url(#g-ao)">
        <path
          d={gearPath(g1.cx, g1.cy, g1.n, g1.o, g1.p, g1.r, g1.hole, phase1)}
          fill="url(#g-gold-brush)"
          fillRule="evenodd"
          stroke="#5c4a12"
          strokeWidth="0.55"
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
        <path
          d={gearPath(g1.cx, g1.cy, g1.n, g1.o, g1.p, g1.r, g1.hole, phase1)}
          fill="url(#g-gold-key)"
          fillRule="evenodd"
          style={{ mixBlendMode: "soft-light" as const }}
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
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g1.cx} ${g1.cy}`}
            to={`360 ${g1.cx} ${g1.cy}`}
            dur={`${t1}s`}
            repeatCount="indefinite"
          />
          <circle cx={g1.cx} cy={g1.cy} r={g1.p * 0.48} fill="#1a1508" opacity="0.25" />
          <circle
            cx={g1.cx}
            cy={g1.cy}
            r={g1.p * 0.48}
            fill="none"
            stroke="#f5e6a3"
            strokeWidth="0.7"
            opacity="0.25"
          />
          <circle
            cx={g1.cx}
            cy={g1.cy}
            r={g1.p * 0.28}
            fill="url(#g-gold-brush)"
            stroke="#6b5510"
            strokeWidth="1.2"
          />
          <circle cx={g1.cx} cy={g1.cy} r={g1.p * 0.28} fill="url(#g-spec)" />
          <circle cx={g1.cx} cy={g1.cy} r={6} fill="#0c0a04" />
          <circle cx={g1.cx} cy={g1.cy} r={2.6} fill="#f7ecc0" opacity="0.9" />
        </g>
      </g>

      {/* STEEL */}
      <g filter="url(#g-ao)">
        <path
          d={gearPath(g2.cx, g2.cy, g2.n, g2.o, g2.p, g2.r, g2.hole, phase2)}
          fill="url(#g-steel-brush)"
          fillRule="evenodd"
          stroke="#3f3f46"
          strokeWidth="0.5"
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
        <path
          d={gearPath(g2.cx, g2.cy, g2.n, g2.o, g2.p, g2.r, g2.hole, phase2)}
          fill="url(#g-steel-key)"
          fillRule="evenodd"
          style={{ mixBlendMode: "soft-light" as const }}
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
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g2.cx} ${g2.cy}`}
            to={`-360 ${g2.cx} ${g2.cy}`}
            dur={`${t2}s`}
            repeatCount="indefinite"
          />
          <circle cx={g2.cx} cy={g2.cy} r={g2.p * 0.46} fill="#18181b" opacity="0.22" />
          <circle
            cx={g2.cx}
            cy={g2.cy}
            r={g2.p * 0.46}
            fill="none"
            stroke="#fafafa"
            strokeWidth="0.6"
            opacity="0.3"
          />
          <circle
            cx={g2.cx}
            cy={g2.cy}
            r={g2.p * 0.26}
            fill="url(#g-steel-brush)"
            stroke="#52525b"
            strokeWidth="1"
          />
          <circle cx={g2.cx} cy={g2.cy} r={g2.p * 0.26} fill="url(#g-spec)" />
          <circle cx={g2.cx} cy={g2.cy} r={4.5} fill="#09090b" />
          <circle cx={g2.cx} cy={g2.cy} r={1.9} fill="#fafafa" opacity="0.85" />
        </g>
      </g>

      {/* GREEN */}
      <g filter="url(#g-ao)">
        <path
          d={gearPath(g3.cx, g3.cy, g3.n, g3.o, g3.p, g3.r, g3.hole, phase3)}
          fill="url(#g-green-brush)"
          fillRule="evenodd"
          stroke="#14532d"
          strokeWidth="0.5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g3.cx} ${g3.cy}`}
            to={`-360 ${g3.cx} ${g3.cy}`}
            dur={`${t3}s`}
            repeatCount="indefinite"
          />
        </path>
        <path
          d={gearPath(g3.cx, g3.cy, g3.n, g3.o, g3.p, g3.r, g3.hole, phase3)}
          fill="url(#g-green-key)"
          fillRule="evenodd"
          style={{ mixBlendMode: "soft-light" as const }}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g3.cx} ${g3.cy}`}
            to={`-360 ${g3.cx} ${g3.cy}`}
            dur={`${t3}s`}
            repeatCount="indefinite"
          />
        </path>
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g3.cx} ${g3.cy}`}
            to={`-360 ${g3.cx} ${g3.cy}`}
            dur={`${t3}s`}
            repeatCount="indefinite"
          />
          <circle cx={g3.cx} cy={g3.cy} r={g3.p * 0.44} fill="#022c16" opacity="0.28" />
          <circle
            cx={g3.cx}
            cy={g3.cy}
            r={g3.p * 0.44}
            fill="none"
            stroke="#bbf7d0"
            strokeWidth="0.55"
            opacity="0.28"
          />
          <circle
            cx={g3.cx}
            cy={g3.cy}
            r={g3.p * 0.24}
            fill="url(#g-green-brush)"
            stroke="#166534"
            strokeWidth="1"
          />
          <circle cx={g3.cx} cy={g3.cy} r={g3.p * 0.24} fill="url(#g-spec)" />
          <circle cx={g3.cx} cy={g3.cy} r={3.8} fill="#011a0d" />
          <circle cx={g3.cx} cy={g3.cy} r={1.6} fill="#bbf7d0" opacity="0.85" />
        </g>
      </g>
    </svg>
  );
}
