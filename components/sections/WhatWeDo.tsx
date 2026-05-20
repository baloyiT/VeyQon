import { Layers, LineChart, GitMerge } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GoldIcon } from '@/components/ui/GoldIcon'

const cards = [
  {
    icon: Layers,
    title: 'Digital Platforms',
    description:
      'Operational systems that improve visibility, coordination, and execution across complex business environments.',
  },
  {
    icon: LineChart,
    title: 'Operational Intelligence',
    description:
      'Data-driven decision support that gives operators real-time insight into their logistics and infrastructure operations.',
  },
  {
    icon: GitMerge,
    title: 'Systems Integration',
    description:
      'Connecting fragmented systems and workflows into unified, efficient digital operations.',
  },
]

export function WhatWeDo() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <SectionHeading
            eyebrow="What We Do"
            heading="Operational Technology Built for Real Environments"
            subtext="We build the digital systems that make African businesses more visible, more coordinated, and more effective."
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="card bg-base-200 border border-base-300 p-6 md:p-8 space-y-4"
            >
              <GoldIcon><card.icon className="w-5 h-5" /></GoldIcon>
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-neutral leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
