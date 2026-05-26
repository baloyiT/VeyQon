import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Policies — VeyQon Group',
  description: 'Legal policies and terms for VeyQon Group products including ShareConLoad.',
}

const products = [
  {
    name: 'ShareConLoad',
    tagline: 'Global Shared Container Logistics Marketplace',
    description: 'Policies covering the ShareConLoad platform — privacy, terms of service, cancellation & refund rules, and pricing structure.',
    href: '/policies/shareconload',
    available: true,
    policies: ['Privacy Policy', 'Terms & Conditions', 'Cancellation & Refund Policy', 'Pricing'],
  },
  {
    name: 'Fintech',
    tagline: 'Financial Technology Solutions',
    description: 'Platform policies will be published when this product launches.',
    href: '#',
    available: false,
    policies: [],
  },
  {
    name: 'AI Solutions',
    tagline: 'Enterprise AI & Automation',
    description: 'Platform policies will be published when this product launches.',
    href: '#',
    available: false,
    policies: [],
  },
  {
    name: 'Consulting',
    tagline: 'Enterprise Advisory Services',
    description: 'Engagement terms and policies will be published when this service launches.',
    href: '#',
    available: false,
    policies: [],
  },
]

export default function PoliciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Policies
          </h1>
          <p className="text-neutral text-lg max-w-2xl">
            VeyQon Group operates multiple products and services. Select a product below to view
            its legal policies, terms, and compliance documents.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className={`card bg-base-200 border border-base-300 p-8 flex flex-col gap-5 ${product.available ? 'border-t-2 border-t-primary' : 'opacity-60'}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-lg font-bold text-base-content" style={{ fontFamily: 'var(--font-sora)' }}>
                      {product.name}
                    </h2>
                    {!product.available && (
                      <span className="text-[10px] font-semibold uppercase tracking-widest border border-base-300 text-neutral px-2 py-0.5 rounded">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                    {product.tagline}
                  </p>
                  <p className="text-sm text-neutral leading-relaxed">{product.description}</p>
                </div>

                {product.policies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {product.policies.map((p) => (
                      <span
                        key={p}
                        className="text-xs px-2.5 py-1 rounded-full border border-base-300 text-neutral"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                )}

                {product.available ? (
                  <Link
                    href={product.href}
                    className="btn btn-primary btn-sm self-start mt-auto"
                  >
                    View Policies
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <span className="text-xs text-neutral mt-auto">Policies not yet available</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
