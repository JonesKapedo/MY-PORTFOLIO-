import { cn } from "@/lib/utils";

/**
 * Trapezoid teeth with narrow tips + wide roots so opposing teeth seat in valleys.
 * rotationOffset is applied in the path (radians).
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
  // Tip occupies ~28% of pitch; valley ~72% — leaves room to interlock
  for (let t = 0; t < teeth; t++) {
    const base = (t / teeth) * twoPi + rotationOffset;
    const step = twoPi / teeth;
    // Valley → rise → tip → fall → valley
    const a = [
      base + step * 0.0,
      base + step * 0.28,
      base + step * 0.34,
      base + step * 0.4,
      base + step * 0.46,
      base + step * 0.54,
      base + step * 0.6,
      base + step * 0.66,
      base + step * 0.72,
      base + step * 1.0,
    ];
    const mid = rootR + (pitchR - rootR) * 0.65;
    const rs = [
      rootR,
      rootR,
      mid,
      pitchR,
      outerR,
      outerR,
      pitchR,
      mid,
      rootR,
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

function spokeRing(
  cx: number,
  cy: number,
  r: number,
  count: number,
  len: number,
  rotationOffset: number,
) {
  const lines: string[] = [];
  for (let i = 0; i < count; i++) {
    const a = rotationOffset + (i / count) * Math.PI * 2;
    const x1 = cx + Math.cos(a) * (r - len);
    const y1 = cy + Math.sin(a) * (r - len);
    const x2 = cx + Math.cos(a) * r;
    const y2 = cy + Math.sin(a) * r;
    lines.push(
      `<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" />`,
    );
  }
  return lines.join("");
}

type GearSystemProps = { className?: string };

export function GearSystem({ className }: GearSystemProps) {
  const module = 7;
  // Shorter teeth → less tip clash; light backlash on centre distance
  const addendum = module * 0.72;
  const dedendum = module * 0.9;
  const backlash = module * 0.12;

  const n1 = 16;
  const n2 = 12;
  const n3 = 10;

  const p1 = (module * n1) / 2;
  const p2 = (module * n2) / 2;
  const p3 = (module * n3) / 2;

  const o1 = p1 + addendum;
  const o2 = p2 + addendum;
  const o3 = p3 + addendum;
  const r1 = Math.max(p1 - dedendum, module * 2.2);
  const r2 = Math.max(p2 - dedendum, module * 2);
  const r3 = Math.max(p3 - dedendum, module * 1.8);

  const g1 = { cx: 168, cy: 170, n: n1, p: p1, o: o1, r: r1, hole: 14 };

  // Line-of-centers angles
  const a12 = (-22 * Math.PI) / 180;
  const a13 = (50 * Math.PI) / 180;
  const d12 = p1 + p2 + backlash;
  const d13 = p1 + p3 + backlash;

  const g2 = {
    cx: g1.cx + Math.cos(a12) * d12,
    cy: g1.cy + Math.sin(a12) * d12,
    n: n2,
    p: p2,
    o: o2,
    r: r2,
    hole: 11,
  };
  const g3 = {
    cx: g1.cx + Math.cos(a13) * d13,
    cy: g1.cy + Math.sin(a13) * d13,
    n: n3,
    p: p3,
    o: o3,
    r: r3,
    hole: 9,
  };

  /*
   * Align a valley on driver toward each driven gear, and a tip into that valley.
   * Path teeth start with a valley at angle 0; rotate so valley faces line-of-centers.
   */
  const phase1 = a12; // valley of g1 faces g2
  // g2 faces back toward g1: valley would be a12+π; tip into g1 valley → half tooth more
  const phase2 = a12 + Math.PI + Math.PI / n2;
  // g3 meshes g1 along a13
  const phase3 = a13 + Math.PI + Math.PI / n3;
  // Driver also needs a valley toward g3 — compromise: primary mesh is g1–g2;
  // g3 still gets correct phase relative to a13. Small visual error is OK.

  const t1 = 32;
  const t2 = (t1 * n2) / n1;
  const t3 = (t1 * n3) / n1;

  const pad = 18;
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
      aria-label="Interlocking gold, silver, and green gears"
    >
      <defs>
        {/* Gold — warm highlight top-left */}
        <radialGradient
          id="gear-gold-fill"
          cx="32%"
          cy="28%"
          r="75%"
          fx="28%"
          fy="22%"
        >
          <stop offset="0%" stopColor="#f5e6a3" />
          <stop offset="35%" stopColor="#e0c04a" />
          <stop offset="70%" stopColor="#b8922a" />
          <stop offset="100%" stopColor="#6b5510" />
        </radialGradient>
        <linearGradient id="gear-gold-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff3c4" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#c9a227" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3d320c" stopOpacity="0.85" />
        </linearGradient>

        {/* Silver / white metal */}
        <radialGradient
          id="gear-silver-fill"
          cx="30%"
          cy="25%"
          r="78%"
          fx="25%"
          fy="20%"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#e8e8ec" />
          <stop offset="75%" stopColor="#b0b0b8" />
          <stop offset="100%" stopColor="#6e6e76" />
        </radialGradient>
        <linearGradient id="gear-silver-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#52525b" stopOpacity="0.8" />
        </linearGradient>

        {/* Green enamel */}
        <radialGradient
          id="gear-green-fill"
          cx="28%"
          cy="26%"
          r="76%"
          fx="24%"
          fy="20%"
        >
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="35%" stopColor="#22c55e" />
          <stop offset="70%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#052e16" />
        </radialGradient>
        <linearGradient id="gear-green-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#14532d" stopOpacity="0.85" />
        </linearGradient>

        <filter id="gear-depth" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="1.8"
            floodColor="#000"
            floodOpacity="0.45"
          />
        </filter>

        <filter id="gear-inner-shade" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" result="b" />
          <feOffset dx="0.5" dy="0.8" result="o" />
          <feFlood floodColor="#000" floodOpacity="0.25" />
          <feComposite in2="o" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ——— GOLD driver ——— */}
      <g filter="url(#gear-depth)">
        <path
          d={gearPath(g1.cx, g1.cy, g1.n, g1.o, g1.p, g1.r, g1.hole, phase1)}
          fill="url(#gear-gold-fill)"
          stroke="url(#gear-gold-rim)"
          strokeWidth="1.1"
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
        {/* Body rings + hub (spin with gear via parent would need group — animate separately) */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g1.cx} ${g1.cy}`}
            to={`360 ${g1.cx} ${g1.cy}`}
            dur={`${t1}s`}
            repeatCount="indefinite"
          />
          <circle
            cx={g1.cx}
            cy={g1.cy}
            r={g1.p * 0.55}
            fill="none"
            stroke="#5c4a12"
            strokeWidth="2.5"
            opacity="0.55"
          />
          <circle
            cx={g1.cx}
            cy={g1.cy}
            r={g1.p * 0.38}
            fill="none"
            stroke="#f5e6a3"
            strokeWidth="1"
            opacity="0.35"
          />
          <circle
            cx={g1.cx}
            cy={g1.cy}
            r={g1.p * 0.22}
            fill="#2a2208"
            stroke="#c9a227"
            strokeWidth="1.5"
            opacity="0.9"
          />
          <circle cx={g1.cx} cy={g1.cy} r={5.5} fill="#0d0b04" />
          <circle cx={g1.cx} cy={g1.cy} r={2.4} fill="#f5e6a3" opacity="0.85" />
          {/* highlight arc */}
          <path
            d={`M ${g1.cx - g1.p * 0.2} ${g1.cy - g1.p * 0.32} A ${g1.p * 0.35} ${g1.p * 0.35} 0 0 1 ${g1.cx + g1.p * 0.15} ${g1.cy - g1.p * 0.38}`}
            fill="none"
            stroke="#fff8d6"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.4"
          />
        </g>
      </g>

      {/* ——— SILVER ——— */}
      <g filter="url(#gear-depth)">
        <path
          d={gearPath(g2.cx, g2.cy, g2.n, g2.o, g2.p, g2.r, g2.hole, phase2)}
          fill="url(#gear-silver-fill)"
          stroke="url(#gear-silver-rim)"
          strokeWidth="1"
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
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${g2.cx} ${g2.cy}`}
            to={`-360 ${g2.cx} ${g2.cy}`}
            dur={`${t2}s`}
            repeatCount="indefinite"
          />
          <circle
            cx={g2.cx}
            cy={g2.cy}
            r={g2.p * 0.52}
            fill="none"
            stroke="#71717a"
            strokeWidth="2"
            opacity="0.5"
          />
          <circle
            cx={g2.cx}
            cy={g2.cy}
            r={g2.p * 0.34}
            fill="none"
            stroke="#fafafa"
            strokeWidth="0.9"
            opacity="0.45"
          />
          <circle
            cx={g2.cx}
            cy={g2.cy}
            r={g2.p * 0.2}
            fill="#3f3f46"
            stroke="#d4d4d8"
            strokeWidth="1.2"
          />
          <circle cx={g2.cx} cy={g2.cy} r={4.2} fill="#18181b" />
          <circle cx={g2.cx} cy={g2.cy} r={1.8} fill="#f4f4f5" opacity="0.9" />
          <path
            d={`M ${g2.cx - g2.p * 0.18} ${g2.cy - g2.p * 0.28} A ${g2.p * 0.3} ${g2.p * 0.3} 0 0 1 ${g2.cx + g2.p * 0.12} ${g2.cy - g2.p * 0.32}`}
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.5"
          />
        </g>
      </g>

      {/* ——— GREEN ——— */}
      <g filter="url(#gear-depth)">
        <path
          d={gearPath(g3.cx, g3.cy, g3.n, g3.o, g3.p, g3.r, g3.hole, phase3)}
          fill="url(#gear-green-fill)"
          stroke="url(#gear-green-rim)"
          strokeWidth="1"
          fillRule="evenodd"
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
          <circle
            cx={g3.cx}
            cy={g3.cy}
            r={g3.p * 0.5}
            fill="none"
            stroke="#14532d"
            strokeWidth="1.8"
            opacity="0.6"
          />
          <circle
            cx={g3.cx}
            cy={g3.cy}
            r={g3.p * 0.32}
            fill="none"
            stroke="#bbf7d0"
            strokeWidth="0.8"
            opacity="0.4"
          />
          <circle
            cx={g3.cx}
            cy={g3.cy}
            r={g3.p * 0.18}
            fill="#052e16"
            stroke="#4ade80"
            strokeWidth="1.1"
          />
          <circle cx={g3.cx} cy={g3.cy} r={3.5} fill="#022c16" />
          <circle cx={g3.cx} cy={g3.cy} r={1.5} fill="#86efac" opacity="0.85" />
          <path
            d={`M ${g3.cx - g3.p * 0.15} ${g3.cy - g3.p * 0.24} A ${g3.p * 0.26} ${g3.p * 0.26} 0 0 1 ${g3.cx + g3.p * 0.1} ${g3.cy - g3.p * 0.28}`}
            fill="none"
            stroke="#dcfce7"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.45"
          />
        </g>
      </g>
    </svg>
  );
}
