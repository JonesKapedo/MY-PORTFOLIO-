/** Ambient field: soft light, blueprint structure, and calm motion. */
export function BackgroundAtmosphere() {
  return (
    <div className="bg-atmosphere" aria-hidden>
      {/* Soft depth only — no harsh rings */}
      <div className="bg-orb bg-orb-a" />
      <div className="bg-orb bg-orb-b" />

      {/* Building / structure motifs — elevation, frame, beams */}
      <svg
        className="bg-structure"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left elevation — floors */}
        <g className="bg-structure-left" opacity="0.55">
          <rect
            x="48"
            y="120"
            width="160"
            height="520"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          {[180, 260, 340, 420, 500, 580].map((y) => (
            <line
              key={y}
              x1="48"
              y1={y}
              x2="208"
              y2={y}
              stroke="currentColor"
              strokeWidth="0.75"
            />
          ))}
          {[88, 128, 168].map((x) => (
            <line
              key={x}
              x1={x}
              y1="120"
              x2={x}
              y2="640"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.7"
            />
          ))}
        </g>

        {/* Right frame — bay structure */}
        <g className="bg-structure-right" opacity="0.45">
          <path
            d="M980 160 L1120 160 L1120 640 L980 640 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line x1="980" y1="280" x2="1120" y2="280" stroke="currentColor" strokeWidth="0.75" />
          <line x1="980" y1="400" x2="1120" y2="400" stroke="currentColor" strokeWidth="0.75" />
          <line x1="980" y1="520" x2="1120" y2="520" stroke="currentColor" strokeWidth="0.75" />
          <line x1="1050" y1="160" x2="1050" y2="640" stroke="currentColor" strokeWidth="0.5" />
        </g>

        {/* Center span beams — construction lines */}
        <g className="bg-structure-beams" opacity="0.35">
          <line x1="280" y1="200" x2="900" y2="200" stroke="currentColor" strokeWidth="0.6" strokeDasharray="6 10" />
          <line x1="320" y1="480" x2="860" y2="480" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 12" />
          <line x1="600" y1="140" x2="600" y2="620" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 14" />
        </g>

        {/* Corner registration marks — blueprint feel */}
        <g opacity="0.4" stroke="currentColor" strokeWidth="1" fill="none">
          <path d="M24 40 H56 M40 24 V56" />
          <path d="M1144 40 H1176 M1160 24 V56" />
          <path d="M24 744 H56 M40 760 V728" />
          <path d="M1144 744 H1176 M1160 760 V728" />
        </g>
      </svg>

      <div className="bg-grain" />
    </div>
  );
}
