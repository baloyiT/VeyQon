import type { Metadata } from 'next'
import { TrendingUp, Zap, ShieldCheck, Globe, Award, Eye, Users, AlertTriangle, ArrowRight, Check, X } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GoldIcon } from '@/components/ui/GoldIcon'

export const metadata: Metadata = {
  title: 'ShareConLoad — VeyQon Group',
  description:
    'A digital freight marketplace connecting container operators with verified cargo opportunities across Africa. Smarter container utilisation starts here.',
}

const SCL_URL = 'https://www.shareconload.com/'

const benefits = [
  { icon: TrendingUp, title: 'Maximise Utilisation', desc: 'Fill every container with real cargo demand' },
  { icon: Zap, title: 'Faster Access', desc: 'Connect to cargo opportunities instantly' },
  { icon: ShieldCheck, title: 'Payment Protection', desc: 'Operate with transparency and security' },
  { icon: Globe, title: 'Less Friction', desc: 'No brokers, no endless calls, no delays' },
]

const charterPerks = [
  { icon: Award, text: 'Permanent founding recognition on the platform' },
  { icon: Eye, text: 'Priority visibility within the ShareConLoad ecosystem' },
  { icon: TrendingUp, text: 'Early positioning before wider market expansion' },
  { icon: Users, text: 'Direct strategic engagement as the platform grows' },
]

const oldWay = [
  'Phone calls and WhatsApp chains to find cargo',
  'Empty containers moving between depots',
  'No visibility into available capacity across routes',
  'Lost revenue from underutilised fleet assets',
]

const newWay = [
  'Digital cargo matching in minutes, not hours',
  'Containers move full — every leg optimised',
  'Network-wide capacity visible in real time',
  'Maximised revenue from every available CBM',
]

const steps = [
  { n: '01', label: 'Register', desc: 'Create your verified operator or shipper profile on the platform.' },
  { n: '02', label: 'List Capacity', desc: 'Post available container space with route, CBM, and pricing.' },
  { n: '03', label: 'Get Matched', desc: 'Receive verified cargo requests that fit your available capacity.' },
  { n: '04', label: 'Coordinate', desc: 'Confirm bookings digitally — no phone calls, no delays.' },
  { n: '05', label: 'Move Freight', desc: 'Execute shipments with full digital visibility for both parties.' },
]

const tags = [
  '#ShareConLoad', '#AfricanLogistics', '#ContainerShipping', '#FreightMarketplace',
  '#SupplyChainAfrica', '#DigitalLogistics', '#FreightTech', '#VeyQonGroup',
]

export default function ShareConLoadPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-32 relative overflow-hidden border-b border-base-300">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #1C1F2680 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 space-y-6">
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded">
            Announcement
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Every Empty Container Is{' '}
            <span className="text-primary">Revenue Left Behind.</span>
          </h1>
          <p className="text-neutral text-lg md:text-xl leading-relaxed max-w-2xl">
            The era of fragmented systems, endless calls, and slow manual coordination is changing.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href={SCL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Register Now <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#charter" className="btn btn-outline btn-lg">
              Charter Programme
            </a>
          </div>
        </div>
      </section>

      {/* Intro + Platform + Benefits */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-14">
          <div className="max-w-3xl space-y-6">
            <div className="border-l-4 border-primary pl-5">
              <p className="text-base-content/80 text-lg italic leading-relaxed">
                For too long, container operators and carriers have depended on fragmented systems
                and slow manual coordination to secure cargo. That era is changing.
              </p>
            </div>
            <SectionHeading eyebrow="Introducing ShareConLoad" heading="A Digital Freight Marketplace for Africa" />
            <p className="text-neutral leading-relaxed">
              Built to connect container operators directly with verified cargo owners across
              Africa — designed to maximise utilisation, reduce friction, and move freight smarter.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="card bg-base-200 border border-base-300 p-6 space-y-4">
                <GoldIcon><b.icon className="w-5 h-5" /></GoldIcon>
                <div>
                  <p className="font-bold text-base-content">{b.title}</p>
                  <p className="text-neutral text-sm mt-1 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Old Way vs New Way */}
      <section className="py-20 bg-base-200/30 border-y border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12 text-center">
            <SectionHeading eyebrow="The Problem" heading="African Freight Runs on Inefficiency" centered />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-base-200 border-l-4 border-base-300 space-y-4">
              <p className="font-bold text-lg text-base-content/50">The Old Way</p>
              <ul className="space-y-3">
                {oldWay.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral text-sm">
                    <X className="w-4 h-4 text-neutral/50 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-xl bg-base-200 border-l-4 border-primary space-y-4">
              <p className="font-bold text-lg text-primary">The ShareConLoad Way</p>
              <ul className="space-y-3">
                {newWay.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base-content/80 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Charter Member Programme */}
      <section id="charter" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <SectionHeading eyebrow="Charter Member Programme" heading="Only 20 Founding Operators" />
              <p className="text-neutral leading-relaxed">
                These are the businesses recognised from day one as early movers in the next
                evolution of African logistics. Charter Members define the industry that follows.
              </p>
              <div className="flex items-start gap-4 bg-primary/10 border border-primary/30 rounded-xl p-5">
                <AlertTriangle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-base-content text-sm">
                    Charter Membership is limited to{' '}
                    <span className="text-primary">20 Operators only.</span>
                  </p>
                  <p className="text-neutral text-sm mt-1">
                    The companies that move early define the industry that follows.
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 border border-base-300 border-t-2 border-t-primary p-8 space-y-6">
              <div>
                <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">
                  Founding Benefits
                </p>
                <h3 className="text-xl font-bold">What Charter Members Receive</h3>
              </div>
              <ul className="space-y-5">
                {charterPerks.map((perk) => (
                  <li key={perk.text} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <perk.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-base-content/80 text-sm leading-relaxed pt-2">{perk.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-base-200/30 border-y border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14 text-center">
            <SectionHeading eyebrow="How It Works" heading="From Registration to Freight Movement" centered />
          </div>
          {/* Desktop stepper */}
          <div className="hidden lg:flex items-start gap-0">
            {steps.map((step, i) => (
              <div key={step.n} className="flex-1 flex flex-col items-center text-center px-4 relative">
                {i < steps.length - 1 && (
                  <div className="absolute top-5 left-1/2 w-full h-px bg-primary/30" />
                )}
                <div className="relative z-10 w-10 h-10 rounded-full bg-primary/10 border border-primary flex items-center justify-center mb-4">
                  <span className="text-primary text-xs font-bold">{step.n}</span>
                </div>
                <p className="font-bold text-sm mb-2">{step.label}</p>
                <p className="text-neutral text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          {/* Mobile stepper */}
          <div className="lg:hidden space-y-6">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary flex items-center justify-center shrink-0">
                  <span className="text-primary text-xs font-bold">{step.n}</span>
                </div>
                <div>
                  <p className="font-bold">{step.label}</p>
                  <p className="text-neutral text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 border-t-2 border-primary/30 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 0%, #C8A45D10 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-10 text-center space-y-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">Early Access</p>
          <h2 className="text-4xl font-bold">Be First on the Platform</h2>
          <p className="text-neutral leading-relaxed">
            Register at{' '}
            <strong className="text-base-content">shareconload.com</strong> or comment{' '}
            <strong className="text-primary">"CHARTER"</strong> on our LinkedIn post to begin
            the onboarding process.
          </p>
          <a
            href={SCL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Register at shareconload.com <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-neutral/40 text-xs pt-2">Share the Load. Connect the World.</p>
        </div>
      </section>

      {/* Tags */}
      <section className="py-8 border-t border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-neutral bg-base-200 border border-base-300 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
