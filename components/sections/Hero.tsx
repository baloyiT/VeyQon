const SCL_URL = 'https://www.shareconload.com/'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Radial background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 40%, #1C1F26 0%, #080B0D 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-32 w-full">
        <div className="max-w-3xl">
          <div className="space-y-8">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest">
              Global Operational Technology Group
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building Digital Platforms for the{' '}
              <span className="text-primary">Modern Operational Economy</span>
            </h1>
            <p className="text-neutral text-lg md:text-xl leading-relaxed max-w-lg">
              VeyQon Group develops operational technologies and digital platforms
              that improve visibility, coordination, and execution across logistics,
              infrastructure, and enterprise operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={SCL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                Join Waitlist
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
