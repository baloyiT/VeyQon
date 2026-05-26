import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — VeyQon Group',
  description: 'Terms of Service governing use of the VeyQon Group corporate website.',
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

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Terms of Service
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
                These Terms of Service (&quot;Terms&quot;) govern your use of the VeyQon Group corporate
                website at <strong className="text-base-content">veyqon.com</strong> (&quot;Site&quot;),
                operated by <strong className="text-base-content">VEYQON GROUP (Pty) Ltd</strong>,
                registration number 2026/353683/07, Republic of South Africa (&quot;VeyQon&quot;,
                &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using the Site, you agree to
                be bound by these Terms. These Terms apply to the corporate website only.
                Use of the ShareConLoad logistics platform is governed by the separate{' '}
                <a
                  href="https://www.shareconload.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  ShareConLoad Terms &amp; Conditions
                </a>.
              </p>
            </div>

            <Section number="1" title="Acceptance of Terms">
              <p>
                By accessing or using the Site, you confirm that you have read, understood, and
                agree to be bound by these Terms. If you do not agree to these Terms, you must
                not use the Site.
              </p>
            </Section>

            <Section number="2" title="Use of the Site">
              <p>You may use the Site for lawful purposes only. You agree not to:</p>
              <Bullets items={[
                'Use the Site in any way that violates applicable laws or regulations',
                'Transmit any unsolicited commercial communications through the Site',
                'Attempt to gain unauthorised access to any part of the Site or its systems',
                'Introduce malicious code, viruses, or disruptive material to the Site',
                'Scrape, harvest, or systematically extract data from the Site without permission',
                'Impersonate VeyQon Group or any other person or entity',
              ]} />
            </Section>

            <Section number="3" title="Intellectual Property">
              <p>
                All content on the Site — including text, graphics, logos, images, and software
                — is the exclusive property of VEYQON GROUP (Pty) Ltd or its licensors and is
                protected by applicable intellectual property laws.
              </p>
              <p>You may not:</p>
              <Bullets items={[
                'Reproduce, distribute, or republish any Site content without prior written consent',
                'Modify or create derivative works based on Site content',
                'Use VeyQon Group branding, trademarks, or logos without authorisation',
                'Remove or alter any copyright or proprietary notices from Site content',
              ]} />
            </Section>

            <Section number="4" title="Third-Party Links and Products">
              <p>
                The Site contains links to third-party websites and platforms, including
                ShareConLoad (shareconload.com). These third-party sites are operated
                independently and are governed by their own terms and policies. VeyQon Group
                is not responsible for the content, availability, or practices of any
                third-party site.
              </p>
              <p>
                ShareConLoad is a separate digital platform operated by VeyQon Group under
                distinct terms and conditions. Accessing or using ShareConLoad through a link
                on this Site constitutes acceptance of the ShareConLoad Terms &amp; Conditions
                and related policies.
              </p>
            </Section>

            <Section number="5" title="No Professional Advice">
              <p>
                Content published on the Site is for general informational purposes only and
                does not constitute legal, financial, investment, or professional advice.
                VeyQon Group makes no representations as to the accuracy or completeness of
                any information on the Site. Reliance on any Site content is at your own risk.
              </p>
            </Section>

            <Section number="6" title="Disclaimer of Warranties">
              <p>
                The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis without any
                warranties of any kind, express or implied. VeyQon Group does not warrant that:
              </p>
              <Bullets items={[
                'The Site will be uninterrupted, error-free, or free from viruses or harmful components',
                'Information on the Site is accurate, complete, or current',
                'The Site will meet your specific requirements',
              ]} />
            </Section>

            <Section number="7" title="Limitation of Liability">
              <p>
                To the maximum extent permitted by applicable law, VeyQon Group shall not be
                liable for any indirect, incidental, special, consequential, or punitive
                damages arising from or in connection with your use of, or inability to use,
                the Site or any content on it. This includes, without limitation, loss of
                profits, data, goodwill, or business interruption.
              </p>
              <p>
                Nothing in these Terms limits liability for fraud, fraudulent misrepresentation,
                or any other liability that cannot be excluded under applicable law.
              </p>
            </Section>

            <Section number="8" title="Privacy">
              <p>
                Your use of the Site is subject to our{' '}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference. By using the Site, you
                consent to the collection and use of information as described in the Privacy Policy.
              </p>
            </Section>

            <Section number="9" title="Availability and Changes">
              <p>
                VeyQon Group reserves the right to modify, suspend, or discontinue any part of
                the Site at any time without notice. We may also update these Terms from time
                to time. Updated Terms become effective upon publication on the Site. Continued
                use of the Site after publication constitutes acceptance of the revised Terms.
              </p>
            </Section>

            <Section number="10" title="Governing Law">
              <p>
                These Terms shall be governed by and interpreted in accordance with the laws
                of the Republic of South Africa. Any disputes arising under these Terms shall
                be subject to the jurisdiction of the courts of the Republic of South Africa.
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
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy →
              </Link>
              <a
                href="https://www.shareconload.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ShareConLoad Terms &amp; Conditions →
              </a>
              <a
                href="https://www.shareconload.com/cancellation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Cancellation &amp; Refund Policy →
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
