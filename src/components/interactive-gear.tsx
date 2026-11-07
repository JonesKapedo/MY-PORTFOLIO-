import { useCallback, useEffect, useRef, useState } from "react";
import { GearSystem } from "@/components/gear-system";
import { cn } from "@/lib/utils";

/**
 * Multi-layer CSS perspective mark:
 * - pointer tilt on the whole plane
 * - glow / depth / gears at different translateZ (parallax)
 */
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

  const onMove = useCallback((e: React.PointerEvent) => {
    if (reduced.current || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({
      x: +(py * -14).toFixed(2),
      y: +(px * 16).toFixed(2),
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
      <div
        className="gear-3d-plane"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Layer −2: ambient light, farthest */}
        <div className="gear-layer gear-layer-glow" />
        {/* Layer −1: soft ground plane */}
        <div className="gear-layer gear-layer-floor" />
        {/* Layer 0: machine */}
        <div className="gear-layer gear-layer-mark">
          <GearSystem className="gear-atmosphere-mark h-auto w-full" />
        </div>
        {/* Layer +1: specular rim (reads as nearer metal edge) */}
        <div className="gear-layer gear-layer-rim" />
      </div>
    </div>
  );
}
