import { cn } from "@/lib/utils";

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
  const samples = 20;

  for (let t = 0; t < teeth; t++) {
    const base = (t / teeth) * twoPi + rotationOffset;
    const step = twoPi / teeth;
    for (let s = 0; s <= samples; s++) {
      const u = s / samples;
      const ang = base + u * step;
      let r: number;
      if (u < 0.24 || u > 0.76) {
        r = rootR;
      } else if (u < 0.34) {
        const k = (u - 0.24) / 0.1;
        const ease = k * k * (3 - 2 * k);
        r = rootR + (outerR - rootR) * ease;
      } else if (u <= 0.66) {
        r = outerR;
      } else {
        const k = (u - 0.66) / 0.1;
        const ease = k * k * (3 - 2 * k);
        r = outerR - (outerR - rootR) * ease;
      }
      if (u >= 0.24 && u < 0.34) {
        const k = (u - 0.24) / 0.1;
        r += Math.sin(k * Math.PI) * (pitchR - rootR) * 0.07;
      }
      if (u > 0.66 && u <= 0.76) {
        const k = (u - 0.66) / 0.1;
        r += Math.sin(k * Math.PI) * (pitchR - rootR) * 0.07;
      }
      const x = cx + Math.cos(ang) * r;
      const y = cy + Math.sin(ang) * r;
      pts.push(`${t === 0 && s === 0 ? "M" : "L"}${x.toFixed(3)},${y.toFixed(3)}`);
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
  const addendum = module * 0.64;
  const dedendum = module * 0.84;
  const backlash = module * 0.2;

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

  const g1 = { cx: 172, cy: 174, n: n1, p: p1, o: o1, r: r1, hole: 14 };
  const a12 = (-28 * Math.PI) / 180;
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

  const phase1 = a12;
  const phase2 = a12 + Math.PI - Math.PI / n2;
  const phase3 = a13 + Math.PI - Math.PI / n3;

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
      aria-label="Interlocking machined brass and steel gears"
    >
      <defs>
        {/* Brushed metal line patterns */}
        <pattern id="brush-steel" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(35)">
          <rect width="4" height="4" fill="#8a8a92" />
          <line x1="0" y1="0" x2="0" y2="4" stroke="#c8c8d0" strokeWidth="0.6" opacity="0.5" />
          <line x1="2" y1="0" x2="2" y2="4" stroke="#5a5a62" strokeWidth="0.4" opacity="0.4" />
        </pattern>
        <pattern id="brush-brass" patternUnits="userSpaceOnUse" width="3.5" height="3.5" patternTransform="rotate(-28)">
          <rect width="3.5" height="3.5" fill="#b8922a" />
          <line x1="0" y1="0" x2="0" y2="3.5" stroke="#f0d878" strokeWidth="0.5" opacity="0.45" />
          <line x1="1.75" y1="0" x2="1.75" y2="3.5" stroke="#6b5510" strokeWidth="0.35" opacity="0.35" />
        </pattern>
        <pattern id="brush-green" patternUnits="userSpaceOnUse" width="3.5" height="3.5" patternTransform="rotate(40)">
          <rect width="3.5" height="3.5" fill="#15803d" />
          <line x1="0" y1="0" x2="0" y2="3.5" stroke="#86efac" strokeWidth="0.45" opacity="0.35" />
          <line x1="1.75" y1="0" x2="1.75" y2="3.5" stroke="#052e16" strokeWidth="0.35" opacity="0.4" />
        </pattern>

        <linearGradient id="g-gold-brush" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff6d0" />
          <stop offset="12%" stopColor="#e8c84a" />
          <stop offset="28%" stopColor="#a88820" />
          <stop offset="45%" stopColor="#d4b03a" />
          <stop offset="62%" stopColor="#8a7018" />
          <stop offset="80%" stopColor="#c9a227" />
          <stop offset="100%" stopColor="#2a2208" />
        </linearGradient>
        <linearGradient id="g-gold-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff3c4" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3d320c" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="g-gold-key" cx="30%" cy="22%" r="68%">
          <stop offset="0%" stopColor="#fff8e0" stopOpacity="0.65" />
          <stop offset="40%" stopColor="#e0c04a" stopOpacity="0" />
          <stop offset="100%" stopColor="#0a0802" stopOpacity="0.5" />
        </radialGradient>

        <linearGradient id="g-steel-brush" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="12%" stopColor="#e8e8ec" />
          <stop offset="30%" stopColor="#8b8b94" />
          <stop offset="48%" stopColor="#d4d4d8" />
          <stop offset="65%" stopColor="#52525b" />
          <stop offset="82%" stopColor="#b0b0b8" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>
        <linearGradient id="g-steel-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fafafa" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#27272a" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="g-steel-key" cx="28%" cy="20%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="35%" stopColor="#a1a1aa" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.55" />
        </radialGradient>

        <linearGradient id="g-green-brush" x1="0%" y1="5%" x2="100%" y2="95%">
          <stop offset="0%" stopColor="#dcfce7" />
          <stop offset="20%" stopColor="#4ade80" />
          <stop offset="45%" stopColor="#15803d" />
          <stop offset="65%" stopColor="#22c55e" />
          <stop offset="85%" stopColor="#14532d" />
          <stop offset="100%" stopColor="#022c16" />
        </linearGradient>
        <radialGradient id="g-green-key" cx="26%" cy="20%" r="68%">
          <stop offset="0%" stopColor="#ecfdf5" stopOpacity="0.55" />
          <stop offset="40%" stopColor="#16a34a" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.5" />
        </radialGradient>

        <filter id="g-ao" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3.5" stdDeviation="2.4" floodColor="#000" floodOpacity="0.55" />
        </filter>

        <radialGradient id="g-spec" cx="32%" cy="24%" r="38%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* GOLD / BRASS */}
      <g filter="url(#g-ao)">
        <path
          d={gearPath(g1.cx, g1.cy, g1.n, g1.o, g1.p, g1.r, g1.hole, phase1)}
          fill="url(#g-gold-brush)"
          fillRule="evenodd"
          stroke="url(#g-gold-bevel)"
          strokeWidth="1"
        >
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g1.cx} ${g1.cy}`} to={`360 ${g1.cx} ${g1.cy}`} dur={`${t1}s`} repeatCount="indefinite" />
        </path>
        <path
          d={gearPath(g1.cx, g1.cy, g1.n, g1.o * 0.98, g1.p, g1.r, g1.hole, phase1)}
          fill="url(#brush-brass)"
          fillRule="evenodd"
          opacity="0.35"
          style={{ mixBlendMode: "overlay" as const }}
        >
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g1.cx} ${g1.cy}`} to={`360 ${g1.cx} ${g1.cy}`} dur={`${t1}s`} repeatCount="indefinite" />
        </path>
        <path d={gearPath(g1.cx, g1.cy, g1.n, g1.o, g1.p, g1.r, g1.hole, phase1)} fill="url(#g-gold-key)" fillRule="evenodd" style={{ mixBlendMode: "soft-light" as const }}>
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g1.cx} ${g1.cy}`} to={`360 ${g1.cx} ${g1.cy}`} dur={`${t1}s`} repeatCount="indefinite" />
        </path>
        <g>
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g1.cx} ${g1.cy}`} to={`360 ${g1.cx} ${g1.cy}`} dur={`${t1}s`} repeatCount="indefinite" />
          <circle cx={g1.cx} cy={g1.cy} r={g1.p * 0.52} fill="#1a1508" opacity="0.4" />
          <circle cx={g1.cx} cy={g1.cy} r={g1.p * 0.52} fill="none" stroke="#c9a227" strokeWidth="1.2" opacity="0.45" />
          <circle cx={g1.cx} cy={g1.cy} r={g1.p * 0.38} fill="none" stroke="#5c4a12" strokeWidth="2.2" opacity="0.55" />
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const a = (deg * Math.PI) / 180;
            const br = g1.p * 0.38;
            return (
              <g key={deg}>
                <circle
                  cx={g1.cx + Math.cos(a) * br}
                  cy={g1.cy + Math.sin(a) * br}
                  r={2.4}
                  fill="#0c0a04"
                  stroke="#a88820"
                  strokeWidth="0.7"
                />
                <circle
                  cx={g1.cx + Math.cos(a) * br}
                  cy={g1.cy + Math.sin(a) * br}
                  r={0.9}
                  fill="#e8c84a"
                  opacity="0.7"
                />
              </g>
            );
          })}
          <circle cx={g1.cx} cy={g1.cy} r={g1.p * 0.26} fill="url(#g-gold-brush)" stroke="#6b5510" strokeWidth="1.5" />
          <circle cx={g1.cx} cy={g1.cy} r={g1.p * 0.26} fill="url(#g-spec)" />
          <circle cx={g1.cx} cy={g1.cy} r={5.5} fill="#0a0802" />
          <circle cx={g1.cx} cy={g1.cy} r={2.4} fill="#f7ecc0" opacity="0.95" />
        </g>
      </g>

      {/* STEEL */}
      <g filter="url(#g-ao)">
        <path
          d={gearPath(g2.cx, g2.cy, g2.n, g2.o, g2.p, g2.r, g2.hole, phase2)}
          fill="url(#g-steel-brush)"
          fillRule="evenodd"
          stroke="url(#g-steel-bevel)"
          strokeWidth="0.95"
        >
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g2.cx} ${g2.cy}`} to={`-360 ${g2.cx} ${g2.cy}`} dur={`${t2}s`} repeatCount="indefinite" />
        </path>
        <path
          d={gearPath(g2.cx, g2.cy, g2.n, g2.o * 0.98, g2.p, g2.r, g2.hole, phase2)}
          fill="url(#brush-steel)"
          fillRule="evenodd"
          opacity="0.4"
          style={{ mixBlendMode: "overlay" as const }}
        >
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g2.cx} ${g2.cy}`} to={`-360 ${g2.cx} ${g2.cy}`} dur={`${t2}s`} repeatCount="indefinite" />
        </path>
        <path d={gearPath(g2.cx, g2.cy, g2.n, g2.o, g2.p, g2.r, g2.hole, phase2)} fill="url(#g-steel-key)" fillRule="evenodd" style={{ mixBlendMode: "soft-light" as const }}>
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g2.cx} ${g2.cy}`} to={`-360 ${g2.cx} ${g2.cy}`} dur={`${t2}s`} repeatCount="indefinite" />
        </path>
        <g>
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g2.cx} ${g2.cy}`} to={`-360 ${g2.cx} ${g2.cy}`} dur={`${t2}s`} repeatCount="indefinite" />
          <circle cx={g2.cx} cy={g2.cy} r={g2.p * 0.5} fill="#09090b" opacity="0.35" />
          <circle cx={g2.cx} cy={g2.cy} r={g2.p * 0.5} fill="none" stroke="#e4e4e7" strokeWidth="1.1" opacity="0.4" />
          <circle cx={g2.cx} cy={g2.cy} r={g2.p * 0.36} fill="none" stroke="#3f3f46" strokeWidth="2" opacity="0.65" />
          {[0, 72, 144, 216, 288].map((deg) => {
            const a = (deg * Math.PI) / 180;
            const br = g2.p * 0.36;
            return (
              <g key={deg}>
                <circle
                  cx={g2.cx + Math.cos(a) * br}
                  cy={g2.cy + Math.sin(a) * br}
                  r={2}
                  fill="#18181b"
                  stroke="#a1a1aa"
                  strokeWidth="0.55"
                />
                <circle
                  cx={g2.cx + Math.cos(a) * br}
                  cy={g2.cy + Math.sin(a) * br}
                  r={0.7}
                  fill="#f4f4f5"
                  opacity="0.75"
                />
              </g>
            );
          })}
          <circle cx={g2.cx} cy={g2.cy} r={g2.p * 0.24} fill="url(#g-steel-brush)" stroke="#52525b" strokeWidth="1.3" />
          <circle cx={g2.cx} cy={g2.cy} r={g2.p * 0.24} fill="url(#g-spec)" />
          <circle cx={g2.cx} cy={g2.cy} r={4.2} fill="#09090b" />
          <circle cx={g2.cx} cy={g2.cy} r={1.7} fill="#fafafa" opacity="0.95" />
        </g>
      </g>

      {/* GREEN */}
      <g filter="url(#g-ao)">
        <path
          d={gearPath(g3.cx, g3.cy, g3.n, g3.o, g3.p, g3.r, g3.hole, phase3)}
          fill="url(#g-green-brush)"
          fillRule="evenodd"
          stroke="#14532d"
          strokeWidth="0.85"
        >
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g3.cx} ${g3.cy}`} to={`-360 ${g3.cx} ${g3.cy}`} dur={`${t3}s`} repeatCount="indefinite" />
        </path>
        <path
          d={gearPath(g3.cx, g3.cy, g3.n, g3.o * 0.98, g3.p, g3.r, g3.hole, phase3)}
          fill="url(#brush-green)"
          fillRule="evenodd"
          opacity="0.35"
          style={{ mixBlendMode: "overlay" as const }}
        >
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g3.cx} ${g3.cy}`} to={`-360 ${g3.cx} ${g3.cy}`} dur={`${t3}s`} repeatCount="indefinite" />
        </path>
        <path d={gearPath(g3.cx, g3.cy, g3.n, g3.o, g3.p, g3.r, g3.hole, phase3)} fill="url(#g-green-key)" fillRule="evenodd" style={{ mixBlendMode: "soft-light" as const }}>
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g3.cx} ${g3.cy}`} to={`-360 ${g3.cx} ${g3.cy}`} dur={`${t3}s`} repeatCount="indefinite" />
        </path>
        <g>
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g3.cx} ${g3.cy}`} to={`-360 ${g3.cx} ${g3.cy}`} dur={`${t3}s`} repeatCount="indefinite" />
          <circle cx={g3.cx} cy={g3.cy} r={g3.p * 0.48} fill="#022c16" opacity="0.4" />
          <circle cx={g3.cx} cy={g3.cy} r={g3.p * 0.48} fill="none" stroke="#86efac" strokeWidth="0.9" opacity="0.35" />
          <circle cx={g3.cx} cy={g3.cy} r={g3.p * 0.22} fill="url(#g-green-brush)" stroke="#166534" strokeWidth="1.2" />
          <circle cx={g3.cx} cy={g3.cy} r={g3.p * 0.22} fill="url(#g-spec)" />
          <circle cx={g3.cx} cy={g3.cy} r={3.5} fill="#011a0d" />
          <circle cx={g3.cx} cy={g3.cy} r={1.4} fill="#bbf7d0" opacity="0.95" />
        </g>
      </g>
    </svg>
  );
}
