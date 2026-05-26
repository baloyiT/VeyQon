import Image from 'next/image'
import Link from 'next/link'

const SCL_URL = 'https://www.shareconload.com/'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'ShareConLoad', href: '/shareconload' },
]

const solutions = [
  { label: 'ShareConLoad', href: SCL_URL, note: 'Logistics Platform', external: true },
]

export function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="VeyQon Group" width={48} height={48} className="object-contain mix-blend-lighten" />
              <div className="flex flex-col leading-none">
                <span className="text-primary font-bold text-lg tracking-wider" style={{ fontFamily: 'var(--font-sora)' }}>VEYQON</span>
                <span className="text-base-content/60 text-[10px] tracking-[0.3em] uppercase">GROUP</span>
              </div>
            </div>
            <p className="text-neutral text-sm leading-relaxed">
              Building trusted digital infrastructure for modern business worldwide.
            </p>
            <a
              href="https://www.linkedin.com/company/veyqon-group/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral hover:text-primary transition-colors text-sm"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="text-base-content font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <p className="text-base-content font-semibold mb-4 text-sm uppercase tracking-wider">
              Solutions
            </p>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral hover:text-primary transition-colors text-sm flex items-center gap-2"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-neutral hover:text-primary transition-colors text-sm flex items-center gap-2"
                    >
                      {item.label}
                      {item.note !== 'Logistics Platform' && (
                        <span className="text-[10px] text-neutral/60 border border-base-300 px-1 rounded">
                          {item.note}
                        </span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="text-base-content font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-neutral">
              <li>support@shareconload.com</li>
              <li>South Africa</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral">
          <p>© {new Date().getFullYear()} VeyQon Group. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/policies" className="hover:text-primary transition-colors">
              Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
