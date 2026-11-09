import { useRouterState } from "@tanstack/react-router";
import {
  Bot,
  FileText,
  GitBranch,
  LayoutDashboard,
  MessageCircle,
  Workflow,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

function resolveField(pathname: string): {
  key: string;
  numeral: string;
  icons: typeof FIELD_ICONS.services;
  brandStrip: boolean;
} {
  if (pathname.startsWith("/work"))
    return { key: "work", numeral: "02", icons: FIELD_ICONS.work, brandStrip: true };
  if (pathname.startsWith("/services"))
    return {
      key: "services",
      numeral: "03",
      icons: FIELD_ICONS.services,
      brandStrip: true,
    };
  if (pathname.startsWith("/concerns"))
    return {
      key: "concerns",
      numeral: "04",
      icons: FIELD_ICONS.concerns,
      brandStrip: true,
    };
  if (pathname.startsWith("/partners"))
    return {
      key: "partners",
      numeral: "05",
      icons: FIELD_ICONS.partners,
      brandStrip: true,
    };
  if (pathname.startsWith("/brief"))
    return { key: "brief", numeral: "06", icons: FIELD_ICONS.brief, brandStrip: true };
  if (pathname.startsWith("/privacy") || pathname.startsWith("/terms"))
    return { key: "legal", numeral: "—", icons: FIELD_ICONS.legal, brandStrip: false };
  return { key: "default", numeral: "01", icons: FIELD_ICONS.services, brandStrip: true };
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

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function useTabVisible() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onVis = () => setVisible(document.visibilityState === "visible");
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);
  return visible;
}

/**
 * Non-intro page field — void/studio material atmosphere.
 * Parallax + motion respect reduced-motion and tab visibility.
 */
export function PageAtmosphere() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reducedMotion = usePrefersReducedMotion();
  const tabVisible = useTabVisible();
  const fieldRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ y: 0 });

  useEffect(() => {
    if (pathname === "/" || reducedMotion) return;

    const isCoarse =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
    if (isCoarse) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = fieldRef.current?.closest(".page-screen");
        const top =
          el instanceof HTMLElement ? el.scrollTop : window.scrollY || 0;
        // 4–12px range — transform only
        setParallax({ y: Math.min(12, top * 0.04) });
      });
    };

    const scrollRoot = fieldRef.current?.closest(".page-screen");
    const target =
      scrollRoot instanceof HTMLElement && scrollRoot.scrollHeight > scrollRoot.clientHeight
        ? scrollRoot
        : window;

    target.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      target.removeEventListener("scroll", onScroll);
    };
  }, [pathname, reducedMotion]);

  if (pathname === "/") return null;

  const field = resolveField(pathname);
  const Icons = field.icons;
  const motionPaused = reducedMotion || !tabVisible;

  return (
    <div
      ref={fieldRef}
      className="page-field"
      data-field={field.key}
      data-motion={motionPaused ? "paused" : "live"}
      aria-hidden
    >
      {field.brandStrip ? <div className="page-field-brand-strip" /> : null}

      <div
        className="page-field-spotlight"
        style={{
          transform: reducedMotion
            ? undefined
            : `translate3d(0, ${parallax.y * 0.6}px, 0)`,
        }}
      />

      <div className="page-field-grid" />
      <div className="page-field-gutter" />

      <div
        className="page-field-orb page-field-orb-a"
        style={{
          transform: reducedMotion
            ? undefined
            : `translate3d(0, ${parallax.y * -0.35}px, 0)`,
        }}
      />
      <div
        className="page-field-orb page-field-orb-b"
        style={{
          transform: reducedMotion
            ? undefined
            : `translate3d(0, ${parallax.y * 0.25}px, 0)`,
        }}
      />

      <div className="page-field-vignette" />
      <div className="page-field-grain" />

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

      <span className="page-field-numeral">{field.numeral}</span>

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
