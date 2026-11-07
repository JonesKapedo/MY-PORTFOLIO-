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
  const samples = 18;

  for (let t = 0; t < teeth; t++) {
    const base = (t / teeth) * twoPi + rotationOffset;
    const step = twoPi / teeth;
    for (let s = 0; s <= samples; s++) {
      const u = s / samples;
      const ang = base + u * step;
      let r: number;
      if (u < 0.24 || u > 0.76) {
        r = rootR;
      } else if (u < 0.35) {
        const k = (u - 0.24) / 0.11;
        const ease = k * k * (3 - 2 * k);
        r = rootR + (outerR - rootR) * ease;
      } else if (u <= 0.65) {
        r = outerR;
      } else {
        const k = (u - 0.65) / 0.11;
        const ease = k * k * (3 - 2 * k);
        r = outerR - (outerR - rootR) * ease;
      }
      if (u >= 0.24 && u < 0.35) {
        const k = (u - 0.24) / 0.11;
        r += Math.sin(k * Math.PI) * (pitchR - rootR) * 0.07;
      }
      if (u > 0.65 && u <= 0.76) {
        const k = (u - 0.65) / 0.11;
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

/** Chamfer ring path for bevelled outer rim */
function rimPath(cx: number, cy: number, r: number) {
  const pts: string[] = [];
  for (let i = 0; i <= 64; i++) {
    const a = (i / 64) * Math.PI * 2;
    pts.push(
      `${i === 0 ? "M" : "L"}${(cx + Math.cos(a) * r).toFixed(2)},${(cy + Math.sin(a) * r).toFixed(2)}`,
    );
  }
  return pts.join(" ") + " Z";
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
      aria-label="Interlocking machined gears"
    >
      <defs>
        {/* Brushed brass / gold — multi-stop anisotropic feel */}
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
          <stop offset="0%" stopColor="#fff3c4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#3d320c" stopOpacity="0.9" />
        </linearGradient>
        <radialGradient id="g-gold-key" cx="30%" cy="22%" r="68%">
          <stop offset="0%" stopColor="#fff8e0" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#e0c04a" stopOpacity="0" />
          <stop offset="100%" stopColor="#0a0802" stopOpacity="0.45" />
        </radialGradient>

        {/* Machined steel — cool highlights + dark oxide in recesses */}
        <linearGradient id="g-steel-brush" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="15%" stopColor="#d4d4d8" />
          <stop offset="35%" stopColor="#71717a" />
          <stop offset="50%" stopColor="#e4e4e7" />
          <stop offset="70%" stopColor="#52525b" />
          <stop offset="88%" stopColor="#a1a1aa" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>
        <linearGradient id="g-steel-bevel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fafafa" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#27272a" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="g-steel-key" cx="28%" cy="20%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="35%" stopColor="#a1a1aa" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.5" />
        </radialGradient>

        {/* Anodised / enamel green metal */}
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
        <filter id="g-inner" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="b" />
          <feOffset dx="0" dy="1" result="o" />
          <feFlood floodColor="#000" floodOpacity="0.35" />
          <feComposite in2="o" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <radialGradient id="g-spec" cx="32%" cy="24%" r="38%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* GOLD */}
      <g filter="url(#g-ao)">
        <path
          d={gearPath(g1.cx, g1.cy, g1.n, g1.o, g1.p, g1.r, g1.hole, phase1)}
          fill="url(#g-gold-brush)"
          fillRule="evenodd"
          stroke="url(#g-gold-bevel)"
          strokeWidth="0.9"
        >
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g1.cx} ${g1.cy}`} to={`360 ${g1.cx} ${g1.cy}`} dur={`${t1}s`} repeatCount="indefinite" />
        </path>
        <path d={gearPath(g1.cx, g1.cy, g1.n, g1.o, g1.p, g1.r, g1.hole, phase1)} fill="url(#g-gold-key)" fillRule="evenodd" style={{ mixBlendMode: "soft-light" as const }}>
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g1.cx} ${g1.cy}`} to={`360 ${g1.cx} ${g1.cy}`} dur={`${t1}s`} repeatCount="indefinite" />
        </path>
        <g>
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g1.cx} ${g1.cy}`} to={`360 ${g1.cx} ${g1.cy}`} dur={`${t1}s`} repeatCount="indefinite" />
          <circle cx={g1.cx} cy={g1.cy} r={g1.p * 0.52} fill="#1a1508" opacity="0.35" />
          <circle cx={g1.cx} cy={g1.cy} r={g1.p * 0.52} fill="none" stroke="#c9a227" strokeWidth="1.2" opacity="0.4" />
          <circle cx={g1.cx} cy={g1.cy} r={g1.p * 0.38} fill="none" stroke="#5c4a12" strokeWidth="2" opacity="0.5" />
          {/* bolt circle */}
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const a = (deg * Math.PI) / 180;
            const br = g1.p * 0.38;
            return (
              <circle
                key={deg}
                cx={g1.cx + Math.cos(a) * br}
                cy={g1.cy + Math.sin(a) * br}
                r={2.2}
                fill="#0c0a04"
                stroke="#a88820"
                strokeWidth="0.6"
              />
            );
          })}
          <circle cx={g1.cx} cy={g1.cy} r={g1.p * 0.26} fill="url(#g-gold-brush)" stroke="#6b5510" strokeWidth="1.4" />
          <circle cx={g1.cx} cy={g1.cy} r={g1.p * 0.26} fill="url(#g-spec)" />
          <circle cx={g1.cx} cy={g1.cy} r={5.5} fill="#0a0802" />
          <circle cx={g1.cx} cy={g1.cy} r={2.4} fill="#f7ecc0" opacity="0.9" />
        </g>
      </g>

      {/* STEEL */}
      <g filter="url(#g-ao)">
        <path
          d={gearPath(g2.cx, g2.cy, g2.n, g2.o, g2.p, g2.r, g2.hole, phase2)}
          fill="url(#g-steel-brush)"
          fillRule="evenodd"
          stroke="url(#g-steel-bevel)"
          strokeWidth="0.85"
        >
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g2.cx} ${g2.cy}`} to={`-360 ${g2.cx} ${g2.cy}`} dur={`${t2}s`} repeatCount="indefinite" />
        </path>
        <path d={gearPath(g2.cx, g2.cy, g2.n, g2.o, g2.p, g2.r, g2.hole, phase2)} fill="url(#g-steel-key)" fillRule="evenodd" style={{ mixBlendMode: "soft-light" as const }}>
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g2.cx} ${g2.cy}`} to={`-360 ${g2.cx} ${g2.cy}`} dur={`${t2}s`} repeatCount="indefinite" />
        </path>
        <g>
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g2.cx} ${g2.cy}`} to={`-360 ${g2.cx} ${g2.cy}`} dur={`${t2}s`} repeatCount="indefinite" />
          <circle cx={g2.cx} cy={g2.cy} r={g2.p * 0.5} fill="#09090b" opacity="0.3" />
          <circle cx={g2.cx} cy={g2.cy} r={g2.p * 0.5} fill="none" stroke="#e4e4e7" strokeWidth="1" opacity="0.35" />
          <circle cx={g2.cx} cy={g2.cy} r={g2.p * 0.36} fill="none" stroke="#3f3f46" strokeWidth="1.8" opacity="0.6" />
          {[0, 72, 144, 216, 288].map((deg) => {
            const a = (deg * Math.PI) / 180;
            const br = g2.p * 0.36;
            return (
              <circle
                key={deg}
                cx={g2.cx + Math.cos(a) * br}
                cy={g2.cy + Math.sin(a) * br}
                r={1.8}
                fill="#18181b"
                stroke="#a1a1aa"
                strokeWidth="0.5"
              />
            );
          })}
          <circle cx={g2.cx} cy={g2.cy} r={g2.p * 0.24} fill="url(#g-steel-brush)" stroke="#52525b" strokeWidth="1.2" />
          <circle cx={g2.cx} cy={g2.cy} r={g2.p * 0.24} fill="url(#g-spec)" />
          <circle cx={g2.cx} cy={g2.cy} r={4.2} fill="#09090b" />
          <circle cx={g2.cx} cy={g2.cy} r={1.7} fill="#fafafa" opacity="0.9" />
        </g>
      </g>

      {/* GREEN */}
      <g filter="url(#g-ao)">
        <path
          d={gearPath(g3.cx, g3.cy, g3.n, g3.o, g3.p, g3.r, g3.hole, phase3)}
          fill="url(#g-green-brush)"
          fillRule="evenodd"
          stroke="#14532d"
          strokeWidth="0.75"
        >
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g3.cx} ${g3.cy}`} to={`-360 ${g3.cx} ${g3.cy}`} dur={`${t3}s`} repeatCount="indefinite" />
        </path>
        <path d={gearPath(g3.cx, g3.cy, g3.n, g3.o, g3.p, g3.r, g3.hole, phase3)} fill="url(#g-green-key)" fillRule="evenodd" style={{ mixBlendMode: "soft-light" as const }}>
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g3.cx} ${g3.cy}`} to={`-360 ${g3.cx} ${g3.cy}`} dur={`${t3}s`} repeatCount="indefinite" />
        </path>
        <g>
          <animateTransform attributeName="transform" type="rotate" from={`0 ${g3.cx} ${g3.cy}`} to={`-360 ${g3.cx} ${g3.cy}`} dur={`${t3}s`} repeatCount="indefinite" />
          <circle cx={g3.cx} cy={g3.cy} r={g3.p * 0.48} fill="#022c16" opacity="0.35" />
          <circle cx={g3.cx} cy={g3.cy} r={g3.p * 0.48} fill="none" stroke="#86efac" strokeWidth="0.8" opacity="0.3" />
          <circle cx={g3.cx} cy={g3.cy} r={g3.p * 0.22} fill="url(#g-green-brush)" stroke="#166534" strokeWidth="1.1" />
          <circle cx={g3.cx} cy={g3.cy} r={g3.p * 0.22} fill="url(#g-spec)" />
          <circle cx={g3.cx} cy={g3.cy} r={3.5} fill="#011a0d" />
          <circle cx={g3.cx} cy={g3.cy} r={1.4} fill="#bbf7d0" opacity="0.9" />
        </g>
      </g>
    </svg>
  );
}
