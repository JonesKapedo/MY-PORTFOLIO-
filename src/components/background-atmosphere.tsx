import { useRouterState } from "@tanstack/react-router";

/**
 * Global canvas field.
 * Intro: brand banner + soft material layers.
 * Inner: pure void / studio white — no mesh chrome.
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
      <div className="bg-canvas-base" />

      {isIntro ? (
        <>
          <div className="bg-brand-banner" />
          <div className="bg-brand-fade" />
          <div className="bg-mesh" />
          <div className="bg-orb bg-orb-a" />
          <div className="bg-orb bg-orb-b" />
          <div className="bg-orb bg-orb-c" />
        </>
      ) : (
        <>
          {/* Material depth only — no metallic mesh on content pages */}
          <div className="bg-orb bg-orb-a bg-orb-inner" />
          <div className="bg-orb bg-orb-b bg-orb-inner" />
        </>
      )}

      <div className="bg-vignette" />
      <div className="bg-grain" />
    </div>
  );
}
