const SCL_URL = 'https://www.shareconload.com/'

const SECTORS = [
  { label: 'LOGISTICS',              top: '13%', left: '7%'  },
  { label: 'ENERGY',                 top: '8%',  right: '5%' },
  { label: 'TELECOMMUNICATIONS',     top: '58%', left: '2%'  },
  { label: 'INDUSTRY',               top: '56%', right: '4%' },
  { label: 'ENTERPRISE OPERATIONS',  top: '80%', left: '30%' },
]

const METRICS = [
  { label: 'Active Operations', value: '1,248' },
  { label: 'Assets Online',     value: '8,642' },
  { label: 'Live Events',       value: '236'   },
]

const ACTIVITY = [
  { title: 'Shipment Delivered',       loc: 'Shanghai',  time: '2m ago'  },
  { title: 'Port Operation Completed', loc: 'Rotterdam', time: '15m ago' },
  { title: 'System Update',            loc: '',          time: '1h ago'  },
  { title: 'Maintenance Completed',    loc: 'Singapore', time: '2h ago'  },
]

const BARS = [
  { label: '5.8k', pct: 27 },
  { label: '2.6k', pct: 20 },
  { label: '1.8k', pct: 12 },
  { label: '3.5k', pct: 31 },
]

// SVG polyline points for charts
const VISIBILITY_PTS = '0,40 10,32 20,36 30,22 40,28 50,15 60,22 70,13 80,19 90,9 100,15 110,7 120,11'
const OVERVIEW_PTS   = '0,44 8,40 16,42 24,37 32,34 40,30 48,32 56,27 64,29 72,23 80,26 88,19 96,21 104,16 112,13 120,15'

export function Hero() {
  return (
    <section className="bg-base-100 flex flex-col overflow-hidden" style={{ minHeight: '100svh' }}>

      {/* ── Hero area ── */}
      <div className="flex-1 relative flex items-center">

        {/* Hero image — right column, absolute */}
        <div className="absolute right-0 top-0 h-full w-[62%] pointer-events-none select-none">
          {/* Gradient fade: image dissolves into page on the left */}
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(to right, #080B0D 0%, rgba(8,11,13,0.55) 20%, rgba(8,11,13,0.1) 50%, transparent 75%)' }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(to top, #080B0D 0%, transparent 30%)' }}
          />

          {/* The image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/VeyQon hero.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Sector labels */}
          {SECTORS.map((s) => (
            <div
              key={s.label}
              className="absolute z-20 text-white/60 text-[9px] font-bold tracking-[0.22em]"
              style={{ top: s.top, left: s.left, right: (s as { right?: string }).right }}
            >
              {s.label}
            </div>
          ))}
        </div>

        {/* Text content — left */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10 py-28">
          <div style={{ maxWidth: '480px' }}>

            <p className="text-primary font-bold uppercase tracking-[0.22em] mb-3" style={{ fontSize: '11px' }}>
              South African Technology Company
            </p>
            <div className="mb-6" style={{ width: '32px', height: '2px', backgroundColor: '#C8A45D' }} />

            <h1
              className="font-bold leading-[1.06] mb-6 text-base-content"
              style={{ fontFamily: 'var(--font-sora)', fontSize: 'clamp(2.4rem, 4.5vw, 4rem)' }}
            >
              Building Digital<br />
              Platforms for the<br />
              <span style={{ color: '#C8A45D' }}>Modern Operational<br />Economy</span>
            </h1>

            <p className="text-neutral leading-relaxed mb-8" style={{ fontSize: '15px', maxWidth: '380px' }}>
              VeyQon develops modern digital platforms and intelligent business
              solutions that improve operational efficiency, connectivity, and access
              across logistics, transport, and enterprise operations.
            </p>

            <a href={SCL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Join Waitlist
            </a>
          </div>
        </div>

      </div>

      {/* ── Dashboard metrics strip ── */}
      <div className="relative z-20 border-t border-base-300 shrink-0">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5">

            {/* 1 — Regional Activity bars */}
            <Panel>
              <PanelLabel>Regional Activity</PanelLabel>
              <div className="space-y-1.5 mt-2">
                {BARS.map((b) => (
                  <div key={b.label} className="flex items-center gap-2">
                    <span className="text-neutral w-8 shrink-0" style={{ fontSize: '9px' }}>{b.label}</span>
                    <div className="flex-1 rounded-full overflow-hidden" style={{ height: '3px', backgroundColor: '#1C1F26' }}>
                      <div className="h-full rounded-full" style={{ width: `${b.pct * 3}%`, backgroundColor: '#C8A45D' }} />
                    </div>
                    <span className="text-neutral w-5 text-right" style={{ fontSize: '9px' }}>{b.pct}%</span>
                  </div>
                ))}
              </div>
            </Panel>

            {/* 2 — Key metrics */}
            <Panel>
              <div className="space-y-1.5">
                {METRICS.map((m) => (
                  <div key={m.label}>
                    <p className="text-neutral leading-none mb-0.5" style={{ fontSize: '9px' }}>{m.label}</p>
                    <p className="font-bold text-base-content" style={{ fontFamily: 'var(--font-sora)', fontSize: '15px' }}>{m.value}</p>
                  </div>
                ))}
              </div>
            </Panel>

            {/* 3 — Operational Visibility */}
            <Panel>
              <PanelLabel>Operational Visibility</PanelLabel>
              <svg viewBox="0 0 120 50" className="w-full mt-1.5" preserveAspectRatio="none" height={44}>
                <defs>
                  <linearGradient id="vg1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C8A45D" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#C8A45D" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon points={`0,40 ${VISIBILITY_PTS.split(' ').slice(1).join(' ')} 120,50 0,50`} fill="url(#vg1)" />
                <polyline points={VISIBILITY_PTS} fill="none" stroke="#C8A45D" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </Panel>

            {/* 4 — System Performance */}
            <Panel>
              <PanelLabel>System Performance</PanelLabel>
              <div className="flex items-center gap-2 mt-1.5">
                <svg viewBox="0 0 60 60" width={48} height={48} className="shrink-0 -rotate-90">
                  <circle cx="30" cy="30" r="22" fill="none" stroke="#1C1F26" strokeWidth="6" />
                  <circle cx="30" cy="30" r="22" fill="none" stroke="#C8A45D" strokeWidth="6"
                    strokeDasharray={`${0.87 * 138.2} 138.2`} strokeLinecap="round" />
                </svg>
                <div>
                  <p className="font-bold text-base-content" style={{ fontFamily: 'var(--font-sora)', fontSize: '18px' }}>87%</p>
                  <p className="text-neutral" style={{ fontSize: '9px' }}>System Performance</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-1" style={{ fontSize: '9px' }}>
                <span className="text-neutral"><span className="text-primary font-semibold">96.0%</span> On-time</span>
                <span className="text-neutral"><span className="text-primary font-semibold">94.1%</span> In-transit</span>
                <span className="text-neutral"><span className="text-base-content/50 font-semibold">2.9%</span> Except.</span>
              </div>
            </Panel>

            {/* 5 — Activity Feed */}
            <Panel>
              <PanelLabel>Activity Feed</PanelLabel>
              <div className="space-y-1.5 mt-2">
                {ACTIVITY.map((ev) => (
                  <div key={ev.title + ev.time} className="flex items-start gap-1.5">
                    <span className="mt-[3px] w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#C8A45D' }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-base-content leading-none truncate" style={{ fontSize: '9px' }}>{ev.title}</p>
                      {ev.loc && <p className="text-neutral" style={{ fontSize: '8px' }}>{ev.loc}</p>}
                    </div>
                    <span className="text-neutral shrink-0" style={{ fontSize: '8px' }}>{ev.time}</span>
                  </div>
                ))}
              </div>
            </Panel>

            {/* 6 — Performance Overview */}
            <Panel>
              <PanelLabel>Performance Overview</PanelLabel>
              <svg viewBox="0 0 120 50" className="w-full mt-1.5" preserveAspectRatio="none" height={44}>
                <defs>
                  <linearGradient id="vg2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C8A45D" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#C8A45D" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon points={`0,44 ${OVERVIEW_PTS.split(' ').slice(1).join(' ')} 120,50 0,50`} fill="url(#vg2)" />
                <polyline points={OVERVIEW_PTS} fill="none" stroke="#C8A45D" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
              </svg>
            </Panel>

          </div>
        </div>
      </div>

    </section>
  )
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-base-300 bg-base-200 p-3" style={{ minHeight: '104px' }}>
      {children}
    </div>
  )
}

function PanelLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base-content/40 font-semibold uppercase tracking-wide" style={{ fontSize: '9px' }}>
      {children}
    </p>
  )
}
