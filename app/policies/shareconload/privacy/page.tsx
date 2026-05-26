import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | ShareConLoad',
  description: 'Privacy Policy for the ShareConLoad logistics marketplace platform operated by VEYQON GROUP (Pty) Ltd.',
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-base font-bold text-base-content mb-3" style={{ fontFamily: 'var(--font-sora)' }}>
        {number}. {title}
      </h2>
      <div className="text-sm text-neutral leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

function Sub({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <p className="font-semibold text-base-content/80 mb-1.5">{number} {title}</p>
      {children}
    </div>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 pl-1">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-2 text-sm text-neutral mb-6">
            <Link href="/policies" className="hover:text-primary transition-colors">Policies</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/policies/shareconload" className="hover:text-primary transition-colors">ShareConLoad</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-base-content">Privacy Policy</span>
          </div>

          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Legal · ShareConLoad</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Privacy Policy
          </h1>
          <p className="text-neutral text-sm">Effective Date: 09 May 2026 · VEYQON GROUP (Pty) Ltd</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">

            <div className="card bg-base-200 border border-base-300 p-8 sm:p-10 mb-8">
              <p className="text-sm text-neutral leading-relaxed">
                This Privacy Policy explains how <strong className="text-base-content">VEYQON GROUP (Pty) Ltd</strong>,
                registration number 2026/353683/07 (&quot;ShareConLoad&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), collects,
                uses, stores, processes, and protects personal information through the ShareConLoad platform
                and related services. ShareConLoad is committed to protecting user privacy in accordance with
                applicable laws, including the Protection of Personal Information Act, 2013 (&quot;POPIA&quot;) of
                South Africa. By accessing or using the Platform, you consent to the practices described in
                this Privacy Policy.
              </p>
            </div>

            <Section number="1" title="About ShareConLoad">
              <p>ShareConLoad is a digital logistics marketplace platform operated by VEYQON GROUP (Pty) Ltd. The Platform facilitates shipment booking and payment coordination between cargo owners and independent transport operators for international maritime shared-container shipping services.</p>
            </Section>

            <Section number="2" title="Information We Collect">
              <Sub number="2.1" title="Customer Information">
                <Bullets items={['Full names', 'Company names', 'Email addresses', 'Telephone numbers', 'Billing information', 'Shipment information', 'Cargo details', 'Customs documentation', 'Import/export documentation', 'Account credentials', 'Communication records', 'Transaction history']} />
              </Sub>
              <Sub number="2.2" title="Operator Information">
                <Bullets items={['Company registration details', 'Business contact information', 'Banking details', 'Tax information', 'Operational licenses', 'Permits and certifications', 'Insurance documentation', 'Shipment performance information', 'Compliance records']} />
              </Sub>
              <Sub number="2.3" title="Technical Information">
                <p className="mb-2">We may automatically collect technical and usage information, including:</p>
                <Bullets items={['IP addresses', 'Browser type', 'Operating system', 'Device information', 'Login timestamps', 'Platform activity', 'Cookies and session data', 'Analytics and performance information']} />
              </Sub>
            </Section>

            <Section number="3" title="How We Collect Information">
              <p className="mb-2">Information may be collected through:</p>
              <Bullets items={['Account registration', 'Booking submissions', 'Payment processing', 'Customer support interactions', 'Uploaded documents', 'Website usage', 'Cookies and analytics technologies', 'Communications with Operators and Customers']} />
            </Section>

            <Section number="4" title="How We Use Information">
              <p className="mb-2">We use personal information to:</p>
              <Bullets items={['Facilitate shipment bookings', 'Process payments', 'Verify users and Operators', 'Coordinate shipment activities', 'Communicate operational updates', 'Manage disputes and claims', 'Comply with legal obligations', 'Improve platform functionality', 'Detect fraud or suspicious activity', 'Maintain operational security', 'Provide customer support', 'Send service-related notifications']} />
              <p className="mt-3">Where users consent, we may also send promotional communications, product updates, and marketing information. Users may opt out of marketing communications at any time.</p>
            </Section>

            <Section number="5" title="Payment Processing">
              <p>Payments are processed through authorized third-party payment providers, including Paystack. ShareConLoad does not store full payment card details directly unless expressly stated otherwise. Payment information may be subject to the privacy and security policies of third-party payment providers.</p>
            </Section>

            <Section number="6" title="Sharing of Information">
              <p className="mb-2">We may share information with:</p>
              <Bullets items={['Independent Operators and Carriers', 'Payment service providers', 'Customs and regulatory authorities', 'Logistics and operational partners', 'Cloud hosting and technology providers', 'Legal and compliance advisors', 'Law enforcement or government authorities where legally required']} />
              <p className="mt-3">Information is shared only where reasonably necessary for operational, legal, compliance, or security purposes.</p>
            </Section>

            <Section number="7" title="International Data Transfers">
              <p>Because ShareConLoad operates internationally, personal information may be processed, transferred, or stored outside South Africa through third-party service providers and cloud infrastructure providers. By using the Platform, users consent to such international transfers where necessary for service delivery and operational purposes.</p>
            </Section>

            <Section number="8" title="Data Retention">
              <p className="mb-2">ShareConLoad retains personal information only for as long as reasonably necessary to:</p>
              <Bullets items={['Provide services', 'Comply with legal obligations', 'Resolve disputes', 'Enforce agreements', 'Maintain operational records', 'Protect legitimate business interests']} />
              <p className="mt-3">Certain information may be retained longer where required by law or regulatory obligations.</p>
            </Section>

            <Section number="9" title="User Rights">
              <p className="mb-2">Subject to applicable laws, users may request to:</p>
              <Bullets items={['Access their personal information', 'Correct inaccurate information', 'Update account information', 'Request deletion of personal information where legally permissible', 'Object to certain processing activities', 'Withdraw consent where applicable']} />
              <p className="mt-3">
                Requests may be submitted to:{' '}
                <a href="mailto:support@shareconload.com" className="text-primary hover:underline">
                  support@shareconload.com
                </a>. ShareConLoad may require reasonable identity verification before processing requests.
              </p>
            </Section>

            <Section number="10" title="Cookies and Tracking Technologies">
              <p className="mb-2">ShareConLoad may use cookies, session tracking, analytics tools, and similar tracking technologies to:</p>
              <Bullets items={['Improve platform performance', 'Maintain user sessions', 'Analyze usage patterns', 'Enhance security', 'Improve user experience']} />
              <p className="mt-3">Users may disable cookies through browser settings, although some platform functionality may be affected.</p>
            </Section>

            <Section number="11" title="Data Security">
              <p>ShareConLoad implements reasonable technical and organizational security measures to protect personal information against unauthorized access, misuse, loss, disclosure, alteration, and destruction. Despite reasonable safeguards, no internet-based system can be guaranteed completely secure. Users are responsible for maintaining the confidentiality of their account credentials.</p>
            </Section>

            <Section number="12" title="Operator and Third-Party Responsibility">
              <p>Operators and third-party service providers may independently process personal information in connection with shipment execution and operational services. ShareConLoad is not responsible for the privacy practices of independent third parties. Users are encouraged to review third-party privacy policies where applicable.</p>
            </Section>

            <Section number="13" title="Children and Minors">
              <p>The Platform is not intended for individuals under the age of 18 years. ShareConLoad does not knowingly collect personal information from minors. If we become aware that information relating to a minor has been submitted, such information may be removed.</p>
            </Section>

            <Section number="14" title="Legal Disclosures">
              <p className="mb-2">ShareConLoad may disclose personal information:</p>
              <Bullets items={['Where required by law', 'In response to lawful regulatory requests', 'To protect legal rights', 'To investigate fraud or unlawful conduct', 'To protect platform security and operational integrity']} />
            </Section>

            <Section number="15" title="Changes to This Privacy Policy">
              <p>ShareConLoad reserves the right to update or amend this Privacy Policy from time to time. Updated versions become effective upon publication on the Platform. Continued use of the Platform constitutes acceptance of revised policies.</p>
            </Section>

            <Section number="16" title="Contact Information">
              <div className="card bg-base-200 border border-base-300 border-l-4 border-l-primary p-5 text-sm text-neutral space-y-1">
                <p className="font-bold text-base-content">VEYQON GROUP (Pty) Ltd</p>
                <p>Registration Number: 2026/353683/07</p>
                <p>Republic of South Africa</p>
                <p>Website: <a href="https://shareconload.com" className="text-primary hover:underline">shareconload.com</a></p>
                <p>Email: <a href="mailto:support@shareconload.com" className="text-primary hover:underline">support@shareconload.com</a></p>
              </div>
            </Section>

          </div>
        </div>
      </section>
    </>
  )
}
