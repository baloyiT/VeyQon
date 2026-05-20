import type { Metadata } from 'next'
import {
  TrendingUp, Zap, ShieldCheck, Globe, Award, Eye, Users, AlertTriangle,
  ArrowRight, Check, X, Phone, Truck, EyeOff, AlertCircle, BadgeCheck, Building2,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GoldIcon } from '@/components/ui/GoldIcon'
import { CharterForm } from '@/components/forms/CharterForm'

export const metadata: Metadata = {
  title: "ShareConLoad — Global Freight Network | VeyQon Group",
  description:
    'A digital freight marketplace connecting container operators with verified cargo owners worldwide. Apply for Charter Membership — only 20 founding operators.',
  openGraph: {
    title: "ShareConLoad — Global Freight Network | VeyQon Group",
    description:
      'A digital freight marketplace connecting container operators with verified cargo owners worldwide.',
    type: 'website',
  },
}

const SCL_URL = 'https://www.shareconload.com/'

const stats = [
  { value: '0%', label: 'Empty Miles Target' },
  { value: '20', label: 'Charter Spots Available' },
  { value: 'Global', label: 'Network Coverage' },
  { value: '1', label: 'Unified Platform' },
]

const benefits = [
  { icon: TrendingUp, title: 'Maximise Utilisation', desc: 'Fill every container with real cargo demand' },
  { icon: Zap, title: 'Faster Access', desc: 'Connect to cargo opportunities instantly' },
  { icon: ShieldCheck, title: 'Payment Protection', desc: 'Operate with transparency and security' },
  { icon: Globe, title: 'Less Friction', desc: 'No brokers, no endless calls, no delays' },
]

const problems = [
  {
    icon: Phone,
    title: 'Endless Calls',
    desc: 'Operators rely on phone and WhatsApp chains to source cargo — slow, unreliable, and unscalable.',
  },
  {
    icon: Truck,
    title: 'Containers Run Empty',
    desc: 'Unutilised capacity moves between depots at a cost, draining revenue from every empty leg.',
  },
  {
    icon: EyeOff,
    title: 'Zero Visibility',
    desc: 'No network-wide view of available container space across routes — decisions made blind.',
  },
  {
    icon: AlertCircle,
    title: 'Payment Risk',
    desc: 'No structured payment protection across informal operator arrangements — exposure at every transaction.',
  },
]

const audience = [
  {
    title: 'Container Operators & Carriers',
    points: [
      'Fill empty container legs with verified cargo',
      'Reduce fleet downtime and improve asset utilisation',
      'Digital bookings replace phone-based coordination',
      'Access to a growing network of verified cargo owners',
    ],
  },
  {
    title: 'Cargo Owners & Shippers',
    points: [
      'Find available container space on your required route',
      'Transparent pricing from verified, vetted operators',
      'Digital coordination — no brokers, no middlemen',
      'Access to capacity across global trade routes',
    ],
  },
]

const steps = [
  {
    n: '01',
    label: 'List or Search',
    desc: 'Post your available container space or search for capacity on your route.',
  },
  {
    n: '02',
    label: 'Match & Connect',
    desc: 'Get matched instantly with verified operators or cargo owners in the network.',
  },
  {
    n: '03',
    label: 'Move Goods Smarter',
    desc: 'Execute shipments with full digital coordination — no calls, no delays, no friction.',
  },
]

const trust = [
  { icon: BadgeCheck, title: 'Verified Operators', desc: 'All operators are vetted before joining the network.' },
  { icon: ShieldCheck, title: 'Payment Protection', desc: 'Structured payments with built-in protections for every transaction.' },
  { icon: Globe, title: 'Global Reach', desc: 'Africa-rooted. Globally connected. Wherever freight moves, we\'re building there.' },
  { icon: Building2, title: 'VeyQon Backed', desc: "Built on VeyQon Group's operational and technology infrastructure." },
]

const charterPerks = [
  { icon: Award, text: 'Permanent founding recognition on the platform' },
  { icon: Eye, text: 'Priority visibility within the ShareConLoad ecosystem' },
  { icon: TrendingUp, text: 'Early positioning before wider market expansion' },
  { icon: Users, text: 'Direct strategic engagement as the platform grows' },
]

const tags = [
  '#ShareConLoad', '#AfricanLogistics', '#ContainerShipping', '#FreightMarketplace',
  '#SupplyChainAfrica', '#DigitalLogistics', '#FreightTech', '#VeyQonGroup',
]

export default function ShareConLoadPage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden border-b border-base-300">
        {/* dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #1B2B4B60 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 pt-32 pb-16 space-y-6">
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
          <div className="flex flex-wrap gap-4 pt-2">
            <a href={SCL_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Register Now <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#charter" className="btn btn-outline btn-lg">
              Charter Programme
            </a>
          </div>
        </div>

        {/* stat strip */}
        <div className="relative z-10 border-t border-base-300 mt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-base-300">
              {stats.map((s) => (
                <div key={s.label} className="py-8 px-6 text-center space-y-1">
                  <p className="text-primary font-bold text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-sora)' }}>
                    {s.value}
                  </p>
                  <p className="text-neutral text-xs uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PLATFORM INTRO + BENEFITS ── */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-14">
          <div className="max-w-3xl space-y-6">
            <div className="border-l-4 border-primary pl-5">
              <p className="text-base-content/80 text-lg italic leading-relaxed">
                For too long, container operators and carriers have depended on fragmented systems
                and slow manual coordination to secure cargo. That era is gone.
              </p>
            </div>
            <SectionHeading eyebrow="Introducing ShareConLoad" heading="A Global Digital Freight Marketplace" />
            <p className="text-neutral leading-relaxed">
              Built to connect container operators directly with verified cargo owners worldwide —
              designed to maximise utilisation, reduce friction, and move freight smarter.
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

      {/* ── 3. PROBLEM ── */}
      <section className="py-20 bg-base-200/30 border-y border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14 text-center">
            <SectionHeading eyebrow="The Problem" heading="Freight Has a Coordination Problem" centered />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map((p) => (
              <div key={p.title} className="card bg-base-200 border border-base-300 p-6 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-base-300/60 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-neutral" />
                </div>
                <div>
                  <p className="font-bold text-base-content">{p.title}</p>
                  <p className="text-neutral text-sm mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. AUDIENCE ── */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12 text-center">
            <SectionHeading eyebrow="Who It's For" heading="Built for Both Sides of Freight" centered />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {audience.map((group) => (
              <div key={group.title} className="card bg-base-200 border border-base-300 border-t-2 border-t-primary p-8 space-y-5">
                <h3 className="font-bold text-xl">{group.title}</h3>
                <ul className="space-y-3">
                  {group.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-base-content/80">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOW IT WORKS ── */}
      <section className="py-20 bg-base-200/30 border-y border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14 text-center">
            <SectionHeading eyebrow="How It Works" heading="From First Click to Goods in Motion" centered />
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex items-start gap-0">
            {steps.map((step, i) => (
              <div key={step.n} className="flex-1 flex flex-col items-center text-center px-8 relative">
                {i < steps.length - 1 && (
                  <div className="absolute top-5 left-1/2 w-full h-px bg-primary/30" />
                )}
                <div className="relative z-10 w-10 h-10 rounded-full bg-primary/10 border border-primary flex items-center justify-center mb-5">
                  <span className="text-primary text-xs font-bold">{step.n}</span>
                </div>
                <p className="font-bold mb-2">{step.label}</p>
                <p className="text-neutral text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="lg:hidden space-y-8">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary flex items-center justify-center shrink-0">
                  <span className="text-primary text-xs font-bold">{step.n}</span>
                </div>
                <div>
                  <p className="font-bold">{step.label}</p>
                  <p className="text-neutral text-sm leading-relaxed mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TRUST SIGNALS ── */}
      <section className="py-14 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trust.map((t) => (
              <div key={t.title} className="flex flex-col items-start gap-3 p-4">
                <GoldIcon size="sm"><t.icon className="w-4 h-4" /></GoldIcon>
                <div>
                  <p className="font-bold text-sm">{t.title}</p>
                  <p className="text-neutral text-xs mt-1 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CHARTER MEMBER PROGRAMME ── */}
      <section id="charter" className="py-20 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 0%, #C8A45D08 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — description */}
            <div className="space-y-6">
              <SectionHeading eyebrow="Charter Member Programme" heading="Only 20 Founding Operators" />
              <p className="text-neutral leading-relaxed">
                These are the businesses recognised from day one as early movers in the next
                evolution of global freight logistics. Charter Members define the industry that follows.
              </p>

              <div className="flex items-start gap-4 bg-primary/10 border border-primary/30 rounded-xl p-5">
                <AlertTriangle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">
                    Membership is limited to{' '}
                    <span className="text-primary">20 Operators only.</span>
                  </p>
                  <p className="text-neutral text-sm mt-1">
                    The companies that move early define the industry that follows.
                  </p>
                </div>
              </div>

              <ul className="space-y-4 pt-2">
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

            {/* Right — application form */}
            <div className="card bg-base-200 border border-base-300 border-t-2 border-t-primary p-8 space-y-6">
              <div>
                <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">
                  Apply Now
                </p>
                <h3 className="text-xl font-bold">Charter Member Application</h3>
                <p className="text-neutral text-sm mt-2">
                  Submit your details and our team will be in touch to begin onboarding.
                </p>
              </div>
              <CharterForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TAGS ── */}
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
