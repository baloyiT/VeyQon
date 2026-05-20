import { Globe, Building2, Container, BarChart3 } from 'lucide-react'

const items = [
  { icon: Globe, label: 'Built for African Operational Environments' },
  { icon: Building2, label: 'Enterprise-Focused Technology' },
  { icon: Container, label: 'Logistics & Infrastructure Solutions' },
  { icon: BarChart3, label: 'Operational Intelligence Platforms' },
]

export function TrustStrip() {
  return (
    <section className="py-12 border-y border-base-300 bg-base-200/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-base-200/60 backdrop-blur border border-base-300"
            >
              <item.icon className="w-6 h-6 text-primary" />
              <p className="text-sm text-base-content/80 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
