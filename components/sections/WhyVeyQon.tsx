import { Map, Globe, TrendingUp, Lightbulb } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GoldIcon } from '@/components/ui/GoldIcon'

const points = [
  {
    icon: Map,
    title: 'Operational Understanding',
    description:
      'VeyQon platforms are shaped by how industries actually operate, not adapted from generic software to fit a sector they were never designed for.',
  },
  {
    icon: Globe,
    title: 'Built for Complexity',
    description:
      'Real operational environments are complex. Our products are built to handle that complexity without oversimplifying in ways that break under real conditions.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Platforms',
    description:
      'From first deployment to full-scale network, VeyQon products grow with the businesses and industries they serve. No re-platforming required.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Innovation',
    description:
      'VeyQon products do not accumulate features. Every capability in our platforms exists because it solves a specific operational problem with precision.',
  },
]

export function WhyVeyQon() {
  return (
    <section className="py-20 md:py-32 bg-base-200/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Why VeyQon"
            heading="Platforms Built for Operational Reality"
            subtext="What sets VeyQon products apart from generic software."
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {points.map((point) => (
            <div key={point.title} className="flex gap-5">
              <GoldIcon size="sm"><point.icon className="w-4 h-4" /></GoldIcon>
              <div className="space-y-2">
                <h3 className="font-bold text-lg">{point.title}</h3>
                <p className="text-neutral text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
