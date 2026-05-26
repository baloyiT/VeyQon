const SCL_URL = 'https://www.shareconload.com/'

export function Hero() {
  return (
    <section className="bg-base-100 relative overflow-hidden" style={{ minHeight: '100svh' }}>

      {/* Mobile: full-width background image with strong overlay */}
      <div className="md:hidden absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to bottom, rgba(8,11,13,0.88) 0%, rgba(8,11,13,0.75) 50%, #080B0D 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/VeyQon hero.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Desktop: image pinned to right at 62% width */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-[62%] pointer-events-none select-none">
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to right, #080B0D 0%, rgba(8,11,13,0.55) 20%, rgba(8,11,13,0.1) 50%, transparent 75%)' }}
        />
        <div
          className="absolute inset-0 z-10"
          style={{ background: 'linear-gradient(to top, #080B0D 0%, transparent 30%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/VeyQon hero.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Text content */}
      <div className="relative z-20 flex items-center" style={{ minHeight: '100svh' }}>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-28">
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
