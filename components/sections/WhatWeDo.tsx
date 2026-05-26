import { Layers, LineChart, Network } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GoldIcon } from '@/components/ui/GoldIcon'

const cards = [
  {
    icon: Layers,
    title: 'Operational Platforms',
    description:
      'Scalable operational systems that improve coordination, workflow visibility, and execution across complex operational environments.',
  },
  {
    icon: LineChart,
    title: 'Operational Intelligence',
    description:
      'Real-time operational insight, analytics, and decision support for enterprise and infrastructure operations.',
  },
  {
    icon: Network,
    title: 'Systems Orchestration',
    description:
      'Connecting fragmented systems, workflows, and operational data into unified digital ecosystems.',
  },
]

export function WhatWeDo() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <SectionHeading
            eyebrow="What We Build"
            heading="Building the Digital Layer for Modern Operations"
            subtext="We develop operational platforms and digital infrastructure technologies that improve visibility, coordination, execution, and decision-making across enterprise and infrastructure environments."
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
