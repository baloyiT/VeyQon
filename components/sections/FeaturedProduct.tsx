import { SectionHeading } from '@/components/ui/SectionHeading'

const SCL_URL = 'https://www.shareconload.com/'

const features = [
  'Cargo matching between operators and shippers',
  'Real-time capacity visibility across the network',
  'Digital coordination replacing phone-based operations',
  'Verified operator and shipper network',
  'Operational optimisation for empty container reduction',
]

export function FeaturedProduct() {
  return (
    <section className="py-20 md:py-32 bg-base-200/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest">
              Flagship Platform
            </p>
            <SectionHeading
              heading="ShareConLoad"
              subtext="A digital freight marketplace connecting container operators with verified cargo opportunities across Africa."
            />
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-base-content/80">
                  <span className="text-primary mt-0.5 shrink-0">✓</span>
                  <span className="text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <a href={SCL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Join Waitlist →
            </a>
          </div>

          {/* Right: UI mockup */}
          <div className="rounded-2xl border border-base-300 bg-base-200 p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-base-300">
              <span className="text-xs text-neutral uppercase tracking-wider">Cargo Matching</span>
              <span className="badge badge-success badge-sm">3 matches found</span>
            </div>
            {[
              { route: 'JHB → ACC', cbm: '14 CBM', price: 'R4,200', operator: 'Verified' },
              { route: 'CPT → LOS', cbm: '8 CBM', price: 'R2,800', operator: 'Verified' },
              { route: 'DUR → ACC', cbm: '22 CBM', price: 'R6,100', operator: 'Verified' },
            ].map((match, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-base-100 border border-base-300"
              >
                <div>
                  <p className="text-sm font-medium">{match.route}</p>
                  <p className="text-[11px] text-neutral">{match.cbm} available</p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-semibold text-sm">{match.price}</p>
                  <p className="text-[10px] text-green-400">{match.operator}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
