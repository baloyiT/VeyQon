import { Truck, Radio, Briefcase } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const industries = [
  {
    icon: Truck,
    title: 'Logistics & Freight',
    description:
      'Container movement, freight coordination, and cargo visibility across global trade routes.',
  },
  {
    icon: Radio,
    title: 'Telecom & Infrastructure',
    description:
      'Operational systems for telecom infrastructure management, field operations, and asset tracking.',
  },
  {
    icon: Briefcase,
    title: 'Enterprise Operations',
    description:
      'Digital platforms for large enterprise operational coordination, reporting, and workflow management.',
  },
]

export function Industries() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Industries"
            heading="Sectors We Serve"
            subtext="Our platforms are built for the operational realities of complex business environments worldwide."
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="p-6 md:p-8 rounded-xl border border-base-300 hover:border-primary transition-colors group space-y-4"
            >
              <industry.icon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {industry.title}
              </h3>
              <p className="text-neutral text-sm leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
