import { useRouterState } from "@tanstack/react-router";

/**
 * Global canvas field.
 * Intro keeps the full brand banner; inner pages soften the banner and
 * lean on PageAtmosphere for local texture.
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
      <div className="bg-brand-banner" />
      <div className="bg-brand-fade" />
      <div className="bg-mesh" />
      <div className="bg-orb bg-orb-a" />
      <div className="bg-orb bg-orb-b" />
      <div className="bg-orb bg-orb-c" />
      <div className="bg-vignette" />
      <div className="bg-grain" />
    </div>
  );
}
