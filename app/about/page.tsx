import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Target, Gem, Eye, Shield, Compass } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GoldIcon } from '@/components/ui/GoldIcon'

export const metadata: Metadata = {
  title: 'About — VeyQon Group',
  description:
    'VeyQon Group builds practical digital infrastructure for industries worldwide, improving coordination, visibility, and operational efficiency.',
}


const values = [
  { icon: CheckCircle2, label: 'Confident' },
  { icon: Target, label: 'Precise' },
  { icon: Gem, label: 'Sophisticated' },
  { icon: Eye, label: 'Visionary' },
  { icon: Shield, label: 'Reliable' },
  { icon: Compass, label: 'Strategic' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-32 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center space-y-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">
            About VeyQon Group
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Building Practical Digital Infrastructure for Modern Industries
          </h1>
          <p className="text-neutral text-lg leading-relaxed max-w-2xl mx-auto">
            VeyQon Group develops operational platforms and enterprise technologies that improve
            coordination, visibility, and operational efficiency across complex business environments.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-6 text-base-content/80 leading-relaxed">
            <SectionHeading eyebrow="Our Story" heading="Who We Are" />
            <p>
              VeyQon Group is an operational technology company building digital platforms
              and enterprise systems for industries that rely on coordination, movement, and
              infrastructure worldwide.
            </p>
            <p>
              We started with a simple observation: across global logistics and infrastructure
              sectors, the biggest operational problems are not caused by a lack of capacity. They
              are caused by a lack of visibility and coordination. Containers move empty. Cargo
              waits for operators. Systems do not talk to each other.
            </p>
            <p>
              Our answer is practical digital platforms built for the real operational environment
              of modern business, not for a hypothetical version of it. We build with the
              constraints, connectivity realities, and commercial dynamics of real markets in mind.
            </p>
            <p>
              VeyQon Group is the parent of ShareConLoad and future ventures in fintech, AI
              solutions, and enterprise consulting. Every venture operates under a single
              commitment: precision, reliability, and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-base-200/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                label: 'Vision',
                text: "To be the world's most trusted technology group, enabling the next generation of digital infrastructure and enterprise innovation.",
              },
              {
                label: 'Mission',
                text: 'To deliver innovative, reliable, and scalable solutions that solve real business problems with excellence and integrity.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="card bg-base-200 border border-base-300 border-t-2 border-t-primary p-8 space-y-4"
              >
                <p className="text-primary text-xs font-semibold uppercase tracking-widest">
                  {item.label}
                </p>
                <p className="text-base-content text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <SectionHeading eyebrow="Leadership" heading="Who Leads VeyQon Group" />
          </div>
          <div className="max-w-md">
            <div className="card bg-base-200 border border-base-300 overflow-hidden">
              <div className="relative h-[560px] w-full">
                <Image
                  src="/ceo.png"
                  alt="Mercy McAfful Baloyi — Co-Founder & CEO, VeyQon Group"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-base-200/20 to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <p className="font-bold text-lg">Mercy McAfful Baloyi</p>
                  <p className="text-primary text-sm">Co-Founder & Chief Executive Officer</p>
                </div>
                <p className="text-neutral text-sm leading-relaxed">
                  Responsible for strategic direction, product conceptualisation, platform
                  development, and operational execution across the VeyQon Group portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-14 bg-base-200/40 border-y border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {values.map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2 text-center">
                <GoldIcon size="sm"><v.icon className="w-4 h-4" /></GoldIcon>
                <p className="text-xs font-semibold uppercase tracking-wider text-base-content/70">
                  {v.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-6 md:px-10 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to work with us?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.shareconload.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Join Waitlist
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
