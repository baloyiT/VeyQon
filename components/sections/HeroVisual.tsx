const GOLD = '#C8A45D'

const PORTS = [
  { id: 'cpt', label: 'Cape Town',  sub: 'South Africa', cx: 306, cy: 278, tx: 316, ty: 295, anchor: 'start' as const },
  { id: 'acc', label: 'Accra',      sub: 'Ghana',        cx: 262, cy: 228, tx: 250, ty: 220, anchor: 'end'   as const },
  { id: 'rtm', label: 'Rotterdam',  sub: 'Netherlands',  cx: 278, cy: 108, tx: 266, ty: 100, anchor: 'end'   as const },
  { id: 'dxb', label: 'Dubai',      sub: 'UAE',          cx: 386, cy: 168, tx: 396, ty: 161, anchor: 'start' as const },
  { id: 'sha', label: 'Shanghai',   sub: 'China',        cx: 476, cy: 142, tx: 486, ty: 135, anchor: 'start' as const },
]

// Quadratic bezier arcs tracing real shipping corridors
const ROUTES = [
  { id: 'r1', d: 'M 306 278 Q 236 256 262 228', delay: 0.0 },  // CPT → ACC  West African coast
  { id: 'r2', d: 'M 262 228 Q 232 168 278 108', delay: 0.6 },  // ACC → RTM  Atlantic
  { id: 'r3', d: 'M 278 108 Q 334 72  386 168', delay: 1.2 },  // RTM → DXB  Med & Red Sea
  { id: 'r4', d: 'M 386 168 Q 434 118 476 142', delay: 1.8 },  // DXB → SHA  Indian Ocean
  { id: 'r5', d: 'M 306 278 Q 374 250 386 168', delay: 2.4 },  // CPT → DXB  Indian Ocean route
]

const COLS = 29
const ROWS = 21
const STEP = 20

export function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none" aria-hidden="true">
      <style>{`
        @keyframes vq-flow {
          0%   { stroke-dashoffset: 240; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { stroke-dashoffset: 0;   opacity: 0; }
        }
        @keyframes vq-ping {
          0%   { transform: scale(1);   opacity: 0.55; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes vq-pulse {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1;   }
        }
        .vq-flow {
          stroke-dasharray: 8 232;
          animation: vq-flow 3.6s linear infinite;
        }
        .vq-ping {
          transform-box: fill-box;
          transform-origin: center;
          animation: vq-ping 2.4s ease-out infinite;
        }
        .vq-pulse {
          animation: vq-pulse 2.8s ease-in-out infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 560 400"
        width="100%"
        height="100%"
        style={{ maxHeight: '520px' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Dot grid ── */}
        <g opacity="0.07">
          {Array.from({ length: ROWS }, (_, row) =>
            Array.from({ length: COLS }, (_, col) => (
              <circle
                key={`d-${row}-${col}`}
                cx={col * STEP}
                cy={row * STEP}
                r={1}
                fill={GOLD}
              />
            ))
          )}
        </g>

        {/* ── Static route lines (faint) ── */}
        {ROUTES.map((r) => (
          <path
            key={`static-${r.id}`}
            d={r.d}
            fill="none"
            stroke={GOLD}
            strokeWidth={1}
            opacity={0.12}
          />
        ))}

        {/* ── Animated flow dashes ── */}
        {ROUTES.map((r) => (
          <path
            key={`flow-${r.id}`}
            d={r.d}
            fill="none"
            stroke={GOLD}
            strokeWidth={1.5}
            strokeLinecap="round"
            className="vq-flow"
            style={{ animationDelay: `${r.delay}s` }}
          />
        ))}

        {/* ── Port nodes ── */}
        {PORTS.map((p, i) => (
          <g key={p.id}>
            {/* Expanding ping ring */}
            <circle
              cx={p.cx}
              cy={p.cy}
              r={7}
              fill="none"
              stroke={GOLD}
              strokeWidth={1}
              className="vq-ping"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
            {/* Static dot */}
            <circle
              cx={p.cx}
              cy={p.cy}
              r={3.5}
              fill={GOLD}
              className="vq-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            {/* Label */}
            <text
              x={p.tx}
              y={p.ty}
              textAnchor={p.anchor}
              fontSize={8.5}
              fontFamily="var(--font-inter), sans-serif"
              fill={GOLD}
              opacity={0.7}
              fontWeight={600}
              letterSpacing={0.5}
            >
              {p.label}
            </text>
            <text
              x={p.tx}
              y={p.ty + 9}
              textAnchor={p.anchor}
              fontSize={7}
              fontFamily="var(--font-inter), sans-serif"
              fill={GOLD}
              opacity={0.4}
              letterSpacing={0.3}
            >
              {p.sub}
            </text>
          </g>
        ))}

        {/* ── Corner label ── */}
        <text
          x={548}
          y={394}
          textAnchor="end"
          fontSize={7}
          fontFamily="var(--font-inter), sans-serif"
          fill={GOLD}
          opacity={0.25}
          letterSpacing={1.5}
        >
          OPERATIONAL NETWORK
        </text>
      </svg>
    </div>
  )
}
