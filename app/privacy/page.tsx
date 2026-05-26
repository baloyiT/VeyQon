import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — VeyQon Group',
  description: 'Privacy Policy for the VeyQon Group corporate website.',
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

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Privacy Policy
          </h1>
          <p className="text-neutral text-sm">
            Effective Date: 21 May 2026 · VEYQON GROUP (Pty) Ltd
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">

            <div className="card bg-base-200 border border-base-300 p-8 sm:p-10 mb-8">
              <p className="text-sm text-neutral leading-relaxed">
                This Privacy Policy describes how <strong className="text-base-content">VEYQON GROUP (Pty) Ltd</strong>,
                registration number 2026/353683/07, Republic of South Africa (&quot;VeyQon&quot;, &quot;we&quot;, &quot;us&quot;,
                or &quot;our&quot;) collects, uses, and protects information when you visit the VeyQon Group
                corporate website at <strong className="text-base-content">veyqon.com</strong> (&quot;Site&quot;).
                This policy applies to the corporate website only. For privacy practices relating
                to the ShareConLoad logistics platform, please refer to the{' '}
                <a
                  href="https://www.shareconload.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  ShareConLoad Privacy Policy
                </a>.
              </p>
            </div>

            <Section number="1" title="Information We Collect">
              <p>We collect the following categories of information when you use the Site:</p>
              <p className="font-semibold text-base-content">Information you provide directly:</p>
              <Bullets items={[
                'Name and contact details submitted through contact or enquiry forms',
                'Email address submitted for waitlist registration or correspondence',
                'Organisation name and role where provided voluntarily',
                'Content of messages or enquiries submitted through the Site',
              ]} />
              <p className="font-semibold text-base-content mt-3">Information collected automatically:</p>
              <Bullets items={[
                'IP address and general geographic location',
                'Browser type, device type, and operating system',
                'Pages visited, referral source, and time spent on pages',
                'Technical logs and error data generated during your visit',
              ]} />
            </Section>

            <Section number="2" title="How We Use Your Information">
              <p>We use the information we collect for the following purposes:</p>
              <Bullets items={[
                'Responding to enquiries, contact form submissions, and correspondence',
                'Processing waitlist registrations and sending relevant communications',
                'Improving the Site and understanding how visitors interact with it',
                'Monitoring and maintaining the security and performance of the Site',
                'Complying with applicable legal obligations',
                'Communicating updates about VeyQon Group products and services where you have consented',
              ]} />
            </Section>

            <Section number="3" title="Legal Basis for Processing">
              <p>We process personal information on the following legal bases:</p>
              <Bullets items={[
                'Consent — where you have provided explicit consent (e.g. waitlist sign-up)',
                'Legitimate interests — to operate, improve, and secure the Site',
                'Legal obligation — where processing is required by applicable law',
                'Contractual necessity — where processing is required to respond to your enquiry',
              ]} />
            </Section>

            <Section number="4" title="Third-Party Services">
              <p>We may use third-party service providers to support Site operations, including:</p>
              <Bullets items={[
                'Email delivery providers (for contact form responses and communications)',
                'Hosting and infrastructure providers (for Site availability)',
                'Analytics services (for understanding Site usage and performance)',
              ]} />
              <p>
                These providers may process limited personal information on our behalf under
                appropriate data processing agreements. We do not sell personal information to
                third parties.
              </p>
            </Section>

            <Section number="5" title="Data Retention">
              <p>
                We retain personal information only for as long as necessary for the purposes
                described in this Policy, or as required by applicable law. Contact enquiry data
                is retained for a reasonable period to manage correspondence. Where you request
                deletion of your data, we will action this within a reasonable timeframe subject
                to any legal retention obligations.
              </p>
            </Section>

            <Section number="6" title="Cookies and Tracking">
              <p>
                The Site may use cookies or similar technologies to support functionality,
                remember preferences, and analyse Site traffic. You may manage or disable cookies
                through your browser settings. Disabling certain cookies may affect Site
                functionality.
              </p>
            </Section>

            <Section number="7" title="Data Security">
              <p>
                We implement reasonable technical and organisational measures to protect personal
                information from unauthorised access, loss, or misuse. No method of internet
                transmission or electronic storage is completely secure, and we cannot guarantee
                absolute security.
              </p>
            </Section>

            <Section number="8" title="Your Rights">
              <p>Subject to applicable law, you may have the right to:</p>
              <Bullets items={[
                'Access the personal information we hold about you',
                'Request correction of inaccurate or incomplete information',
                'Request deletion of your personal information',
                'Object to or restrict certain types of processing',
                'Withdraw consent where processing is based on consent',
              ]} />
              <p>
                To exercise any of these rights, please contact us using the details in
                Section 10 below.
              </p>
            </Section>

            <Section number="9" title="Links to Third-Party Sites">
              <p>
                The Site may contain links to third-party websites, including the ShareConLoad
                platform. VeyQon Group is not responsible for the privacy practices of
                third-party sites. We encourage you to review the privacy policies of any
                third-party sites you visit.
              </p>
            </Section>

            <Section number="10" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Updated versions will be
                published on this page with a revised effective date. Continued use of the Site
                following any update constitutes acceptance of the revised Policy.
              </p>
            </Section>

            <Section number="11" title="Contact">
              <div className="card bg-base-200 border border-base-300 border-l-4 border-l-primary p-5 text-sm text-neutral space-y-1">
                <p className="font-bold text-base-content">VEYQON GROUP (Pty) Ltd</p>
                <p>Registration Number: 2026/353683/07</p>
                <p>Republic of South Africa</p>
                <p>
                  Email:{' '}
                  <a href="mailto:support@shareconload.com" className="text-primary hover:underline">
                    support@shareconload.com
                  </a>
                </p>
                <p>
                  Website:{' '}
                  <a href="https://veyqon.com" className="text-primary hover:underline">
                    veyqon.com
                  </a>
                </p>
              </div>
            </Section>

            <div className="border-t border-base-300 pt-6 flex flex-col sm:flex-row gap-3 text-sm">
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service →
              </Link>
              <a
                href="https://www.shareconload.com/cancellation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ShareConLoad Cancellation &amp; Refund Policy →
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
