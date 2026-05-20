import { Map, Globe, TrendingUp, Lightbulb } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GoldIcon } from '@/components/ui/GoldIcon'

const points = [
  {
    icon: Map,
    title: 'Operational Understanding',
    description:
      'We build from deep familiarity with how complex logistics and enterprise operations actually work across global markets, not how they should work in theory.',
  },
  {
    icon: Globe,
    title: 'Built for Complexity',
    description:
      "Our platforms are engineered for the world's most demanding operational environments — connectivity constraints, route complexity, and multi-currency markets.",
  },
  {
    icon: TrendingUp,
    title: 'Scalable Platforms',
    description:
      'Every system we build is designed to grow, from a single operator to a continental network without architectural rework.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Innovation',
    description:
      'We focus on innovation that solves real problems, not innovation for its own sake. Every feature earns its place.',
  },
]

export function WhyVeyQon() {
  return (
    <section className="py-20 md:py-32 bg-base-200/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Why VeyQon"
            heading="Built Different. Intentionally."
            subtext="Four principles that define how we approach every platform we build."
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
