import { useRouterState } from "@tanstack/react-router";

/**
 * Global canvas field.
 * Intro: brand banner atmosphere.
 * Inner pages: pure dark field only — no metallic banner (avoids chrome cards).
 */
export function BackgroundAtmosphere() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isIntro = pathname === "/";

  return (
    <div
      className="bg-atmosphere"
      data-shell={isIntro ? "intro" : "inner"}
      aria-hidden
    >
      {/* Solid base — always dark canvas, never transparent to browser chrome */}
      <div className="bg-canvas-base" />

      {isIntro ? (
        <>
          <div className="bg-brand-banner" />
          <div className="bg-brand-fade" />
        </>
      ) : null}

      <div className="bg-mesh" />
      <div className="bg-orb bg-orb-a" />
      <div className="bg-orb bg-orb-b" />
      <div className="bg-orb bg-orb-c" />
      <div className="bg-vignette" />
      <div className="bg-grain" />
    </div>
  );
}
