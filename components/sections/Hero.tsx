const SCL_URL = 'https://www.shareconload.com/'

const SECTORS = [
  { label: 'LOGISTICS',              top: '13%', left: '7%'  },
  { label: 'ENERGY',                 top: '8%',  right: '5%' },
  { label: 'TELECOMMUNICATIONS',     top: '58%', left: '2%'  },
  { label: 'INDUSTRY',               top: '56%', right: '4%' },
  { label: 'ENTERPRISE OPERATIONS',  top: '80%', left: '30%' },
]

export function Hero() {
  return (
    <section className="bg-base-100 relative overflow-hidden" style={{ minHeight: '100svh' }}>

      {/* ── Hero area ── */}
      <div className="relative flex items-center" style={{ minHeight: '100svh' }}>

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

    </section>
  )
}
