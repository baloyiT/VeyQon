const SCL_URL = 'https://www.shareconload.com/'

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32 border-t-2 border-primary/30 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 0%, #C8A45D10 0%, transparent 70%)',
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Start with ShareConLoad. Grow with VeyQon.
        </h2>
        <p className="text-neutral text-lg leading-relaxed">
          VeyQon's first platform is live. Join the waitlist and get positioned
          before the wider market launch.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href={SCL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  )
}
