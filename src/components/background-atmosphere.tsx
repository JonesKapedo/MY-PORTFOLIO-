/** Quiet professional field — soft light only, no decorative icons. */
export function BackgroundAtmosphere() {
  return (
    <div className="bg-atmosphere" aria-hidden>
      <div className="bg-orb bg-orb-a" />
      <div className="bg-orb bg-orb-b" />
      <div className="bg-vignette" />
      <div className="bg-grain" />
    </div>
  );
}
