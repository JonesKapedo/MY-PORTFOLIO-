import { useRouterState } from "@tanstack/react-router";
import {
  Bot,
  FileText,
  GitBranch,
  LayoutDashboard,
  MessageCircle,
  Workflow,
} from "lucide-react";

function resolveField(pathname: string): {
  key: string;
  numeral: string;
  icons: typeof FIELD_ICONS.services;
} {
  if (pathname.startsWith("/work"))
    return { key: "work", numeral: "02", icons: FIELD_ICONS.work };
  if (pathname.startsWith("/services"))
    return { key: "services", numeral: "03", icons: FIELD_ICONS.services };
  if (pathname.startsWith("/concerns"))
    return { key: "concerns", numeral: "04", icons: FIELD_ICONS.concerns };
  if (pathname.startsWith("/partners"))
    return { key: "partners", numeral: "05", icons: FIELD_ICONS.partners };
  if (pathname.startsWith("/brief"))
    return { key: "brief", numeral: "06", icons: FIELD_ICONS.brief };
  if (pathname.startsWith("/privacy") || pathname.startsWith("/terms"))
    return { key: "legal", numeral: "—", icons: FIELD_ICONS.legal };
  return { key: "default", numeral: "01", icons: FIELD_ICONS.services };
}

const FIELD_ICONS = {
  work: [LayoutDashboard, Workflow, GitBranch],
  services: [Workflow, MessageCircle, Bot],
  concerns: [MessageCircle, FileText, Workflow],
  partners: [GitBranch, Workflow, LayoutDashboard],
  brief: [FileText, MessageCircle, Workflow],
  legal: [FileText, FileText, FileText],
} as const;

const PARTICLES = [
  { x: 12, y: 22, d: 18, s: 1 },
  { x: 28, y: 58, d: 24, s: 0.7 },
  { x: 48, y: 18, d: 22, s: 0.85 },
  { x: 62, y: 72, d: 28, s: 0.6 },
  { x: 78, y: 34, d: 20, s: 0.9 },
  { x: 88, y: 64, d: 26, s: 0.55 },
  { x: 18, y: 82, d: 30, s: 0.5 },
  { x: 72, y: 12, d: 16, s: 0.75 },
  { x: 40, y: 44, d: 32, s: 0.45 },
  { x: 92, y: 48, d: 22, s: 0.65 },
  { x: 8, y: 48, d: 26, s: 0.7 },
  { x: 55, y: 88, d: 20, s: 0.5 },
] as const;

/**
 * Non-intro page field — pure dark + refined atmosphere.
 * No full-bleed metallic banner; thin top brand residual only.
 */
export function PageAtmosphere() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname === "/") return null;

  const field = resolveField(pathname);
  const Icons = field.icons;

  return (
    <div className="page-field" data-field={field.key} aria-hidden>
      {/* 7 — thin top brand residual (heavily masked, not a chrome card) */}
      <div className="page-field-brand-strip" />

      {/* 1 — soft radial spotlight under title zone only */}
      <div className="page-field-spotlight" />

      {/* 2 — engineering plate grid */}
      <div className="page-field-grid" />

      {/* 5 — left gutter wash */}
      <div className="page-field-gutter" />

      {/* 6 — page-tinted ambient orbs (very soft) */}
      <div className="page-field-orb page-field-orb-a" />
      <div className="page-field-orb page-field-orb-b" />

      {/* 9 — grain + edge vignette (stronger on long pages) */}
      <div className="page-field-vignette" />
      <div className="page-field-grain" />

      {/* 4 — sparse drift particles */}
      <div className="page-field-particles">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="page-field-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              animationDuration: `${p.d}s`,
              animationDelay: `${-i * 1.4}s`,
              width: `${p.s * 2.5}px`,
              height: `${p.s * 2.5}px`,
              opacity: 0.08 + p.s * 0.06,
            }}
          />
        ))}
      </div>

      {/* 3 — corner micro-gear watermark */}
      <svg
        className="page-field-gear"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinejoin="round"
          className="page-field-gear-spin"
        >
          <circle cx="60" cy="60" r="18" />
          <circle cx="60" cy="60" r="8" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * 30 * Math.PI) / 180;
            const x1 = 60 + Math.cos(a) * 22;
            const y1 = 60 + Math.sin(a) * 22;
            const x2 = 60 + Math.cos(a) * 32;
            const y2 = 60 + Math.sin(a) * 32;
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="2.75" />
            );
          })}
        </g>
      </svg>

      {/* 8 — ghost chapter numeral (desktop) */}
      <span className="page-field-numeral">{field.numeral}</span>

      {/* 10 — path-aware margin icons (desktop) */}
      <div className="page-field-icons">
        {Icons.map((Icon, i) => (
          <Icon
            key={i}
            className={`page-field-icon page-field-icon-${i}`}
            strokeWidth={1.1}
          />
        ))}
      </div>
    </div>
  );
}
