import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ShareConLoad Policies — VeyQon Group',
  description: 'Legal policies for the ShareConLoad logistics marketplace platform — privacy, terms, cancellation, and pricing.',
}

const policies = [
  {
    title: 'Privacy Policy',
    description: 'How ShareConLoad collects, stores, uses, and protects personal information for customers and operators on the platform.',
    href: '/policies/shareconload/privacy',
    updated: '09 May 2026',
  },
  {
    title: 'Terms & Conditions',
    description: 'The terms governing use of the ShareConLoad platform, including booking rules, customer and operator responsibilities, payment terms, and liability.',
    href: '/policies/shareconload/terms',
    updated: '09 May 2026',
  },
  {
    title: 'Cancellation & Refund Policy',
    description: 'Cancellation stages, refund eligibility, operator non-performance procedures, force majeure provisions, and chargeback rules.',
    href: '/policies/shareconload/cancellation',
    updated: '21 May 2026',
  },
  {
    title: 'Pricing',
    description: 'How shipping costs are calculated, the three-stage payment structure for customers, and the tiered commission schedule for operators.',
    href: '/policies/shareconload/pricing',
    updated: '21 May 2026',
  },
]

export default function ShareConLoadPoliciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-neutral mb-6">
            <Link href="/policies" className="hover:text-primary transition-colors">Policies</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-base-content">ShareConLoad</span>
          </div>

          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">ShareConLoad</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Platform Policies
          </h1>
          <p className="text-neutral text-lg max-w-2xl">
            Legal documents governing use of the ShareConLoad logistics marketplace, operated by
            VEYQON GROUP (Pty) Ltd, registration number 2026/353683/07.
          </p>
        </div>
      </section>

      {/* Policy list */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl space-y-4">
            {policies.map((policy, i) => (
              <Link
                key={policy.title}
                href={policy.href}
                className="card bg-base-200 border border-base-300 px-7 py-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-primary/40 transition-colors group block"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-primary/60 w-5 shrink-0">0{i + 1}</span>
                    <h2 className="text-base font-bold text-base-content group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-sora)' }}>
                      {policy.title}
                    </h2>
                  </div>
                  <p className="text-sm text-neutral leading-relaxed pl-8">{policy.description}</p>
                  <p className="text-xs text-neutral/50 pl-8 mt-2">Last updated: {policy.updated}</p>
                </div>
                <svg className="w-5 h-5 text-neutral group-hover:text-primary transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <div className="card bg-base-200 border border-base-300 border-l-4 border-l-primary px-7 py-5 text-sm text-neutral space-y-1">
              <p className="font-bold text-base-content">Questions about these policies?</p>
              <p>Contact us at{' '}
                <a href="mailto:support@shareconload.com" className="text-primary hover:underline">
                  support@shareconload.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
