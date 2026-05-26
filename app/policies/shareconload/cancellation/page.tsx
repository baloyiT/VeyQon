import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy — ShareConLoad',
  description: 'Cancellation and Refund Policy for the ShareConLoad logistics marketplace platform operated by VEYQON GROUP (Pty) Ltd.',
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

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-base-content/80">
      <strong className="text-primary">Important:</strong> {children}
    </div>
  )
}

export default function CancellationPolicyPage() {
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
            <span className="text-base-content">Cancellation & Refund Policy</span>
          </div>

          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Legal · ShareConLoad</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Cancellation &amp; Refund Policy
          </h1>
          <p className="text-neutral text-sm">Effective Date: 21 May 2026 · VEYQON GROUP (Pty) Ltd</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">

            <div className="card bg-base-200 border border-base-300 p-8 sm:p-10 mb-8">
              <p className="text-sm text-neutral leading-relaxed">
                This Cancellation &amp; Refund Policy (&quot;Policy&quot;) governs cancellations, refunds, payment
                reversals, operational recovery processes, and related financial matters applicable to bookings
                made through the ShareConLoad platform operated by{' '}
                <strong className="text-base-content">VEYQON GROUP (Pty) Ltd</strong>, registration number
                2026/353683/07. By using the Platform, Customers and Operators agree to this Policy.
                ShareConLoad operates as a digital logistics marketplace connecting Customers with independent
                Operators and logistics service providers. ShareConLoad acts as a coordination platform and
                operational facilitator and does not operate as a direct shipping carrier, financial
                institution, or escrow custodian.
              </p>
            </div>

            {/* Section 1 */}
            <Section number="1" title="Customer Cancellations">
              <p>The following table summarises the refund entitlement at each cancellation stage:</p>

              <div className="overflow-x-auto rounded-xl border border-base-300">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="bg-base-200 text-base-content/60 font-semibold border-b border-base-300">
                      <th className="px-4 py-3 w-1/3">Cancellation Stage</th>
                      <th className="px-4 py-3 w-1/4">Deposit Status</th>
                      <th className="px-4 py-3">Refund / Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-base-300 text-neutral">
                    <tr><td className="px-4 py-3">Within 48 hrs of booking</td><td className="px-4 py-3">20% Deposit</td><td className="px-4 py-3">May be refunded · Service fees non-refundable</td></tr>
                    <tr><td className="px-4 py-3">After 48 hrs of booking</td><td className="px-4 py-3">20% Deposit</td><td className="px-4 py-3">Non-refundable · Service fees non-refundable</td></tr>
                    <tr><td className="px-4 py-3">After 2nd payment (pre-departure)</td><td className="px-4 py-3">50% payment</td><td className="px-4 py-3">Partial — subject to review · Deposit &amp; service fees non-refundable</td></tr>
                    <tr><td className="px-4 py-3">After vessel departure</td><td className="px-4 py-3">All payments</td><td className="px-4 py-3">Non-refundable · Booking fully non-refundable</td></tr>
                    <tr><td className="px-4 py-3">After cargo arrival/release</td><td className="px-4 py-3">All payments</td><td className="px-4 py-3">Non-refundable · Shipment deemed completed</td></tr>
                  </tbody>
                </table>
              </div>

              <Sub number="1.1" title="Cancellation Within 48 Hours of Booking">
                <p>Customers may cancel a booking within forty-eight (48) hours of booking confirmation. Under such circumstances:</p>
                <Bullets items={['The 20% Deposit may be refunded', 'Platform service fees remain non-refundable']} />
              </Sub>
              <Sub number="1.2" title="Cancellation After 48 Hours of Booking">
                <p>Where a Customer cancels a booking more than forty-eight (48) hours after booking confirmation:</p>
                <Bullets items={['The 20% Deposit shall be fully non-refundable', 'Platform service fees shall remain non-refundable']} />
              </Sub>
              <Sub number="1.3" title="Cancellation After Second-Stage Payment">
                <p>Where the Customer has already completed the second-stage 50% payment and subsequently cancels before vessel departure:</p>
                <Bullets items={['The initial 20% Deposit remains non-refundable', 'Platform service fees remain non-refundable', 'Partial refunds of the second-stage payment may be considered subject to operational, administrative, and processing deductions determined by ShareConLoad']} />
              </Sub>
              <Sub number="1.4" title="Cancellation After Vessel Departure">
                <Warning>Once the Shipment has departed from the origin port, the booking shall become fully non-refundable.</Warning>
              </Sub>
              <Sub number="1.5" title="Cancellation After Cargo Arrival or Release">
                <p>No refunds shall apply after:</p>
                <Bullets items={['Cargo arrival at destination', 'Cargo release authorization', 'Cargo collection by the consignee or authorized party']} />
                <p className="mt-2">Once cargo release authorization has been issued, the Shipment shall be regarded as operationally completed for refund purposes. Cargo shall be regarded as collected where the consignee, customer, clearing agent, transporter, or any authorized representative has taken possession, custody, or control of the cargo at the destination point.</p>
              </Sub>
            </Section>

            {/* Section 2 */}
            <Section number="2" title="Operator Cancellation & Non-Performance">
              <Sub number="2.1" title="Operator Cancellation Before Departure">
                <p>Operators may not unreasonably cancel confirmed Shipments after accepting a booking. Where an Operator cancels a confirmed Shipment before vessel departure, ShareConLoad reserves the right to:</p>
                <Bullets items={['Investigate the cancellation', 'Suspend or withhold pending payouts', 'Attempt reassignment to an alternative Operator', 'Issue refunds or platform credits where applicable', 'Apply operational penalties against the Operator']} />
              </Sub>
              <Sub number="2.2" title="Operator Failure to Load Cargo">
                <p>Where an Operator fails to load Cargo for a confirmed Shipment, ShareConLoad may investigate, request documentation, attempt reassignment, suspend related payouts, and determine appropriate resolution measures. Where reassignment is not reasonably possible, ShareConLoad may issue a refund, issue platform credits, or cancel the affected booking.</p>
              </Sub>
              <Sub number="2.3" title="Shipment Delays and Service Disruptions">
                <Warning>Shipment delays shall not automatically entitle Customers to compensation, refunds, credits, or payout adjustments.</Warning>
              </Sub>
              <Sub number="2.4" title="Platform Investigation Process">
                <p>Where operational disputes or cancellation incidents arise, ShareConLoad may conduct an investigation including review of shipment records, communications, customs documentation, and evidence from Customers or Operators. All parties agree to cooperate reasonably.</p>
              </Sub>
              <Sub number="2.5" title="Replacement Operator Process">
                <p>Where operationally feasible, ShareConLoad may arrange an alternative Operator. Replacement arrangements may be subject to Operator availability, revised schedules, updated pricing, and operational constraints. ShareConLoad does not guarantee replacement Operator availability.</p>
              </Sub>
              <Sub number="2.6" title="Refund & Recovery Process Resulting from Operator Failure">
                <p>Where Operator non-performance materially prevents Shipment completion, ShareConLoad may initiate a four-step resolution process: Investigation → Operational Resolution Attempt → Recovery Coordination → Refund Determination.</p>
                <Warning>ShareConLoad does not guarantee immediate or full refunds in all operational failure scenarios.</Warning>
              </Sub>
              <Sub number="2.7" title="Operator Penalties">
                <p>Where Operators repeatedly fail to fulfill confirmed Shipments, ShareConLoad may apply penalties including warning notices, trust-score reductions, reduced marketplace visibility, payout withholding, temporary suspension, or permanent removal from the Platform.</p>
              </Sub>
              <Sub number="2.8" title="Fraudulent or Serious Operational Misconduct">
                <p>Where ShareConLoad reasonably suspects fraudulent activity or unlawful conduct by an Operator, ShareConLoad may immediately suspend the account, freeze payouts, terminate Platform access, report to relevant authorities, and pursue lawful recovery of losses.</p>
              </Sub>
            </Section>

            {/* Section 3 */}
            <Section number="3" title="Refund Coordination & Payment Resolution">
              <Sub number="3.1" title="Refund Coordination Method">
                <p>Where a refund is determined to be applicable, ShareConLoad may coordinate resolution through the original payment method or platform credits where agreed. ShareConLoad reserves the right to determine the most appropriate refund method based on payment provider limitations, banking restrictions, and compliance considerations.</p>
              </Sub>
              <Sub number="3.2" title="Refund Coordination Timelines">
                <p>Refund timelines may vary depending on Operators, payment providers, financial institutions, and investigation requirements. ShareConLoad shall not be responsible for delays caused by third-party financial institutions or payment processors.</p>
              </Sub>
              <Sub number="3.3" title="Partial Refunds">
                <p>Where applicable, refunds may be issued on a partial basis after deduction of platform service fees, payment processing charges, banking fees, operational costs, and third-party charges already incurred.</p>
              </Sub>
              <Sub number="3.4" title="Refund Verification">
                <p>Before administering refund review procedures, ShareConLoad may request identity verification, payment confirmation, shipment documentation, or additional supporting evidence. Procedures may be delayed until verification is completed.</p>
              </Sub>
              <Sub number="3.5" title="Currency and Exchange Variations">
                <p>ShareConLoad shall not be responsible for exchange-rate fluctuations, intermediary banking deductions, foreign exchange conversion costs, or losses arising from currency variations during refund processing.</p>
              </Sub>
              <Sub number="3.6" title="Platform Credits">
                <p>Where operationally appropriate, ShareConLoad may offer Platform credits instead of cash refunds. Platform credits may be applied toward future Shipments, may be subject to validity periods, are non-transferable unless otherwise approved, and may not be redeemable for cash unless required by applicable law.</p>
              </Sub>
              <Sub number="3.7" title="Refund Restrictions">
                <p>Refunds may be delayed, reduced, suspended, or declined where disputes remain under investigation, fraudulent activity is suspected, chargebacks have been initiated, compliance reviews are pending, or operational liabilities remain unresolved.</p>
              </Sub>
              <Sub number="3.8" title="Final Refund Determinations">
                <p>All refund determinations shall be based on operational records, shipment status, payment status, applicable costs incurred, Operator recovery status, and available supporting evidence. ShareConLoad reserves the right to make reasonable final determinations regarding refund eligibility.</p>
              </Sub>
            </Section>

            {/* Section 3A */}
            <Section number="3A" title="Limitation of Liability">
              <Sub number="3A.1" title="Exclusion of Indirect and Consequential Losses">
                <p>To the maximum extent permitted by applicable law, ShareConLoad shall not be liable for any indirect, incidental, special, consequential, or punitive losses including loss of profits, shipment delays, demurrage, customs penalties, third-party Operator failures, or any loss arising from reliance on Platform information.</p>
              </Sub>
              <Sub number="3A.2" title="Cargo Space and Operational Availability">
                <p>Booking confirmation does not constitute an absolute guarantee of vessel space availability. ShareConLoad shall not be liable for losses arising from oversubscription, Operator allocation changes, vessel substitutions, or other operational disruptions.</p>
              </Sub>
            </Section>

            {/* Section 4 */}
            <Section number="4" title="Non-Refundable Items">
              <Sub number="4.1" title="Platform Service Fees">
                <p>All Platform service fees charged by ShareConLoad are non-refundable unless expressly determined otherwise by ShareConLoad.</p>
              </Sub>
              <Sub number="4.2" title="Expired Booking Deposits">
                <p>The 20% booking Deposit becomes non-refundable after forty-eight (48) hours from booking confirmation.</p>
              </Sub>
              <Sub number="4.3" title="Payment Processing and Banking Charges">
                <p>Payment processing charges, banking fees, intermediary bank deductions, and related transaction charges are non-refundable.</p>
              </Sub>
              <Sub number="4.4" title="Customer Compliance Failures">
                <p>Refunds may be denied where cancellation or failure results from inaccurate shipment information, missing documentation, customs non-compliance, permit failures, prohibited cargo declarations, or customer-related regulatory violations.</p>
              </Sub>
              <Sub number="4.5" title="Prohibited Cargo">
                <p>Payments relating to prohibited, unlawful, or restricted Cargo may be retained where operational, compliance, legal, or administrative costs have already been incurred.</p>
              </Sub>
              <Sub number="4.6" title="Fraudulent Transactions">
                <p>ShareConLoad reserves the right to deny refunds relating to fraudulent bookings, deceptive transactions, payment abuse, unauthorized account activity, or suspected unlawful conduct.</p>
              </Sub>
              <Sub number="4.7" title="Completed Shipment Stages">
                <p>Refund eligibility may reduce or cease entirely once shipment preparation has commenced, cargo has been loaded, vessel departure has occurred, cargo release authorization has been issued, or cargo has been collected at destination.</p>
              </Sub>
              <Sub number="4.8" title="Chargeback-Related Costs">
                <p>Where Customers initiate invalid or fraudulent chargebacks, ShareConLoad reserves the right to retain or recover operational costs, payment dispute costs, banking penalties, administrative costs, and associated losses permitted by applicable law.</p>
              </Sub>
            </Section>

            {/* Section 5 */}
            <Section number="5" title="Force Majeure">
              <Sub number="5.1" title="Force Majeure Events">
                <p>ShareConLoad shall not be liable for delays or disruptions caused by events beyond its reasonable control, including natural disasters, war, terrorism, labor strikes, port congestion, customs delays, government actions, sanctions, vessel breakdowns, pandemics, cyber incidents, or failures of third-party service providers.</p>
              </Sub>
              <Sub number="5.2" title="Operational Impact">
                <p>Where a Force Majeure Event occurs, ShareConLoad may suspend services, delay or revise shipment schedules, cancel affected bookings, or implement contingency measures. ShareConLoad does not guarantee uninterrupted operations during Force Majeure Events.</p>
              </Sub>
              <Sub number="5.3" title="Refunds During Force Majeure">
                <Warning>Refunds during Force Majeure Events are not guaranteed. Platform service fees remain non-refundable unless otherwise determined by ShareConLoad.</Warning>
              </Sub>
              <Sub number="5.4" title="No Waiver of Rights">
                <p>A Force Majeure Event shall not waive payment obligations already due, applicable operational costs, non-refundable fees, or lawful recovery rights available to ShareConLoad.</p>
              </Sub>
            </Section>

            {/* Section 6 */}
            <Section number="6" title="Chargebacks, Payment Disputes & Fraud">
              <Sub number="6.1" title="Fraudulent or Invalid Chargebacks">
                <p>Customers may not initiate fraudulent, abusive, or invalid payment chargebacks for Shipments, bookings, or transactions that were knowingly authorized, operationally processed, or materially fulfilled.</p>
              </Sub>
              <Sub number="6.2" title="Platform Right to Dispute Chargebacks">
                <p>Where a chargeback or payment reversal is initiated, ShareConLoad reserves the right to dispute the claim through applicable payment providers, financial institutions, or dispute-resolution channels, submitting booking confirmations, shipment documentation, operational logs, and applicable contractual agreements.</p>
              </Sub>
              <Sub number="6.3" title="Account Suspension and Restrictions">
                <p>Where fraudulent or suspicious payment activity is suspected, ShareConLoad may suspend accounts, restrict Platform access, freeze related transactions, withhold payouts, or cancel pending Shipments until investigations are completed.</p>
              </Sub>
              <Sub number="6.4" title="Recovery of Associated Costs">
                <p>ShareConLoad reserves the right to recover costs arising from fraudulent or invalid payment disputes, including chargeback penalties, banking charges, investigation costs, and related administrative expenses through deduction from future refunds, payouts, or lawful recovery processes.</p>
              </Sub>
              <Sub number="6.5" title="Reporting to Authorities">
                <p>Where unlawful conduct is reasonably suspected, ShareConLoad reserves the right to report incidents to payment providers, notify financial institutions, cooperate with regulatory authorities and law enforcement, and disclose relevant information where legally permitted or required.</p>
              </Sub>
            </Section>

            {/* Section 7 */}
            <Section number="7" title="General Provisions">
              <Sub number="7.1" title="Policy Amendments">
                <p>ShareConLoad reserves the right to amend this Policy from time to time. Updated versions become effective upon publication. Continued use of the Platform following publication constitutes acceptance of such revisions.</p>
              </Sub>
              <Sub number="7.2" title="Governing Law">
                <p>This Policy shall be governed by and interpreted in accordance with the laws of the Republic of South Africa.</p>
              </Sub>
              <Sub number="7.3" title="Dispute Resolution">
                <p>Parties shall first attempt to resolve disputes through good-faith discussions. Where disputes remain unresolved, parties agree to attempt mediation before initiating formal legal proceedings. Nothing in this section prevents either party from seeking urgent legal relief where reasonably necessary.</p>
              </Sub>
              <Sub number="7.4" title="Entire Policy Understanding">
                <p>This Policy forms part of the broader ShareConLoad legal framework, including the Terms &amp; Conditions, Privacy Policy, Operator Agreement, and related Platform policies.</p>
              </Sub>
              <Sub number="7.5" title="Contact Information">
                <div className="card bg-base-200 border border-base-300 border-l-4 border-l-primary p-5 text-sm text-neutral space-y-1">
                  <p className="font-bold text-base-content">VEYQON GROUP (Pty) Ltd</p>
                  <p>Registration Number: 2026/353683/07</p>
                  <p>Republic of South Africa</p>
                  <p>Website: <a href="https://shareconload.com" className="text-primary hover:underline">shareconload.com</a></p>
                  <p>Email: <a href="mailto:support@shareconload.com" className="text-primary hover:underline">support@shareconload.com</a></p>
                </div>
              </Sub>
            </Section>

            <div className="border-t border-base-300 pt-6 flex flex-col sm:flex-row gap-3 text-sm">
              <Link href="/policies/shareconload/terms" className="text-primary hover:underline">Terms &amp; Conditions →</Link>
              <Link href="/policies/shareconload/pricing" className="text-primary hover:underline">Pricing →</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
