import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — VeyQon Group',
  description:
    'Get in touch with VeyQon Group to discuss your operational challenges and digital platform needs.',
}

export default function ContactPage() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Get in Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Let's Discuss Your Operational Challenges
              </h1>
              <p className="text-neutral leading-relaxed">
                Whether you're looking to digitalise your logistics operations, explore platform
                partnerships, or learn more about ShareConLoad — we'd like to hear from you.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: '✉', label: 'Email', value: 'support@shareconload.com' },
                { icon: '📍', label: 'Location', value: 'South Africa' },
                {
                  icon: '💼',
                  label: 'LinkedIn',
                  value: 'VeyQon Group',
                  href: 'https://www.linkedin.com/company/veyqon-group/',
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-neutral uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base-content hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base-content">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="card bg-base-200 border border-base-300 p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
