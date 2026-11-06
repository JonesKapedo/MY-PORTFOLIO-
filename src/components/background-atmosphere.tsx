/** Soft ambient orbs, grid, grain, and pulse rings behind the whole app. */
export function BackgroundAtmosphere() {
  return (
    <div className="bg-atmosphere" aria-hidden>
      <div className="bg-grid" />
      <div className="bg-orb bg-orb-a" />
      <div className="bg-orb bg-orb-b" />
      <div className="bg-orb bg-orb-c" />
      <div className="bg-ring bg-ring-1" />
      <div className="bg-ring bg-ring-2" />
      <div className="bg-grain" />
    </div>
  );
}
