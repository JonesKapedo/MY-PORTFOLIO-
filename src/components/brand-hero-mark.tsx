import { cn } from "@/lib/utils";

/**
 * Immersive square brand mark for the intro hero.
 * Bottom tagline (incl. Naivasha) is cropped via mask; subtitle is HTML.
 */
export function BrandHeroMark({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn("brand-hero-stage", className)}>
      <div className="brand-hero-glow" aria-hidden />
      <div className="brand-hero-frame">
        <img
          src="/logo-square.jpg"
          alt=""
          className="brand-hero-img"
          width={900}
          height={473}
          decoding="async"
        />
        {/* Cover residual tagline / Naivasha */}
        <div className="brand-hero-tag-mask" aria-hidden />
      </div>
      <p className="brand-hero-sub">AI &amp; Automation</p>
    </div>
  );
}
