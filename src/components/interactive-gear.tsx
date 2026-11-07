import { useCallback, useEffect, useRef, useState } from "react";
import { GearSystem } from "@/components/gear-system";
import { cn } from "@/lib/utils";

/** Perspective tilt that tracks pointer — still title, living machine. */
export function InteractiveGear({
  className,
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  const onMove = useCallback((e: React.MouseEvent | React.PointerEvent) => {
    if (reduced.current || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({
      x: +(py * -12).toFixed(2),
      y: +(px * 14).toFixed(2),
    });
  }, []);

  const onLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      className={cn("gear-3d-stage", className)}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      aria-hidden
    >
      <div className="gear-atmosphere-glow" />
      <div
        className="gear-3d-plane"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        <div className="gear-3d-depth" aria-hidden />
        <GearSystem className="gear-atmosphere-mark relative z-[1] h-auto w-full" />
      </div>
    </div>
  );
}
