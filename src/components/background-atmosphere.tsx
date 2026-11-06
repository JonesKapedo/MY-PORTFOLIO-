/** Soft, realistic depth: light wells, horizon, quiet structure. */
export function BackgroundAtmosphere() {
  return (
    <div className="bg-atmosphere" aria-hidden>
      {/* Volumetric light */}
      <div className="bg-orb bg-orb-a" />
      <div className="bg-orb bg-orb-b" />
      <div className="bg-orb bg-orb-c" />

      {/* Horizon wash */}
      <div className="bg-horizon" />

      {/* Soft architectural silhouettes — filled, not wireframe-heavy */}
      <svg
        className="bg-structure"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bldg-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.14" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="bldg-fade-r" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.015" />
          </linearGradient>
        </defs>

        {/* Left massing */}
        <g className="bg-structure-left">
          <rect x="40" y="280" width="120" height="420" fill="url(#bldg-fade)" />
          <rect x="170" y="340" width="90" height="360" fill="url(#bldg-fade)" />
          <rect x="60" y="320" width="40" height="8" fill="currentColor" opacity="0.06" />
          <rect x="60" y="380" width="40" height="8" fill="currentColor" opacity="0.06" />
          <rect x="60" y="440" width="40" height="8" fill="currentColor" opacity="0.06" />
          <rect x="60" y="500" width="40" height="8" fill="currentColor" opacity="0.06" />
          <rect x="60" y="560" width="40" height="8" fill="currentColor" opacity="0.06" />
        </g>

        {/* Right massing */}
        <g className="bg-structure-right">
          <rect x="1180" y="300" width="100" height="400" fill="url(#bldg-fade-r)" />
          <rect x="1290" y="240" width="110" height="460" fill="url(#bldg-fade-r)" />
          <rect x="1310" y="280" width="36" height="6" fill="currentColor" opacity="0.05" />
          <rect x="1310" y="340" width="36" height="6" fill="currentColor" opacity="0.05" />
          <rect x="1310" y="400" width="36" height="6" fill="currentColor" opacity="0.05" />
          <rect x="1310" y="460" width="36" height="6" fill="currentColor" opacity="0.05" />
        </g>

        {/* Distant mid skyline suggestion */}
        <g opacity="0.07" fill="currentColor">
          <rect x="520" y="480" width="28" height="90" />
          <rect x="556" y="450" width="36" height="120" />
          <rect x="600" y="500" width="22" height="70" />
          <rect x="800" y="470" width="40" height="100" />
          <rect x="848" y="510" width="24" height="60" />
        </g>
      </svg>

      <div className="bg-vignette" />
      <div className="bg-grain" />
    </div>
  );
}
