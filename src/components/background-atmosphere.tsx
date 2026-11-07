/** Brand banner as atmospheric field — soft fades so UI text stays primary. */
export function BackgroundAtmosphere() {
  return (
    <div className="bg-atmosphere" aria-hidden>
      <div className="bg-brand-banner" />
      <div className="bg-brand-fade" />
      <div className="bg-mesh" />
      <div className="bg-orb bg-orb-a" />
      <div className="bg-orb bg-orb-b" />
      <div className="bg-vignette" />
      <div className="bg-grain" />
    </div>
  );
}
