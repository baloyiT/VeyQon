import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing — ShareConLoad',
  description: 'Transparent pricing structure for the ShareConLoad logistics marketplace — shipper payment stages and operator commission tiers.',
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Pricing · ShareConLoad</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-sora)' }}>
            Simple, Transparent Pricing
          </h1>
          <p className="text-neutral text-lg">
            No hidden fees. Pay only for the space you use. Operators earn more as volumes grow.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-10">

          {/* ── Shippers ── */}
          <div className="card bg-base-200 border border-base-300 p-8 sm:p-10">
            <div className="mb-6">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/30 text-primary"
              >
                For Shippers
              </span>
            </div>

            <h2 className="text-xl font-bold text-base-content mb-2" style={{ fontFamily: 'var(--font-sora)' }}>
              How shipping costs work
            </h2>
            <p className="text-sm text-neutral mb-6">
              Each operator sets their own price per CBM (cubic metre) on their container listing. You
              pay only for the exact space your cargo occupies — no whole-container commitment required.
              Your total cost is calculated as:
            </p>

            <div className="rounded-xl border border-base-300 bg-base-100 px-5 py-4 text-sm font-mono text-base-content/80 mb-8">
              Total Cost = CBM booked × Price per CBM (set by operator)
            </div>

            <h3 className="text-sm font-bold text-base-content mb-2">Payment stages</h3>
            <p className="text-sm text-neutral mb-5">
              Your total is never charged at once. It is split into three stages tied to shipment
              milestones — so your money moves only as the shipment progresses.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  pct: '20%',
                  label: 'Deposit — paid at booking',
                  detail: 'Secures your space immediately. Refundable within 48 hours of booking confirmation. Non-refundable after that window.',
                  highlight: true,
                },
                {
                  pct: '50%',
                  label: 'Pre-Departure — due 7 days before sailing',
                  detail: 'Required before the container departs the origin port. Booking may be cancelled if not paid in time.',
                  highlight: false,
                },
                {
                  pct: '30%',
                  label: 'Final Release — paid at destination',
                  detail: 'Due before cargo is released to you at the destination. Cargo is held until this stage is cleared.',
                  highlight: false,
                },
              ].map(({ pct, label, detail, highlight }) => (
                <div key={pct} className="flex gap-4 items-start rounded-xl border border-base-300 px-5 py-4">
                  <span className={`text-xl font-extrabold shrink-0 w-12 text-right ${highlight ? 'text-primary' : 'text-base-content'}`}>
                    {pct}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-base-content">{label}</p>
                    <p className="text-xs text-neutral mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 text-sm text-base-content/80 mb-4">
              <p className="font-semibold text-primary mb-1">Platform service fee</p>
              <p>
                A non-refundable platform service fee is included in the total at checkout. This covers
                marketplace coordination, booking administration, payment processing, and transaction
                facilitation. The exact fee is displayed before you confirm your booking.
              </p>
            </div>

            <div className="rounded-xl border border-base-300 px-5 py-4 text-xs text-neutral space-y-1">
              <p>All amounts are denominated in South African Rand (ZAR).</p>
              <p>Payments are processed securely via Paystack.</p>
            </div>
          </div>

          {/* ── Operators ── */}
          <div className="card bg-base-200 border border-base-300 p-8 sm:p-10">
            <div className="mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-base-300 text-base-content/70">
                For Operators
              </span>
            </div>

            <h2 className="text-xl font-bold text-base-content mb-2" style={{ fontFamily: 'var(--font-sora)' }}>
              Platform commission
            </h2>
            <p className="text-sm text-neutral mb-6">
              Operators set their own price per CBM and keep the majority of every booking.
              ShareConLoad charges a tiered commission on each payout stage — the rate decreases
              automatically as shipment value grows.
            </p>

            <div className="rounded-xl border border-base-300 overflow-hidden mb-3">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-base-100 border-b border-base-300">
                    <th className="py-3 px-5 text-xs font-semibold text-base-content/40 uppercase tracking-wider text-left">Shipment Value</th>
                    <th className="py-3 px-5 text-xs font-semibold text-base-content/40 uppercase tracking-wider text-left">Commission Rate</th>
                    <th className="py-3 px-5 text-xs font-semibold text-base-content/40 uppercase tracking-wider text-left hidden sm:table-cell">Operator Keeps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-base-300">
                  {[
                    { range: 'R0 – R5 000',       rate: '12%', keeps: '88%', highlight: false },
                    { range: 'R5 001 – R20 000',   rate: '10%', keeps: '90%', highlight: true },
                    { range: 'R20 001 – R50 000',  rate: '8%',  keeps: '92%', highlight: false },
                    { range: 'R50 001 and above',  rate: '6%',  keeps: '94%', highlight: false },
                  ].map(({ range, rate, keeps, highlight }) => (
                    <tr key={range} className={highlight ? 'bg-primary/5' : ''}>
                      <td className="py-3.5 px-5 font-medium text-base-content">{range}</td>
                      <td className="py-3.5 px-5">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-sm font-extrabold ${highlight ? 'text-primary bg-primary/10' : 'text-base-content/60 bg-base-300/40'}`}>
                          {rate}
                        </span>
                      </td>
                      <td className="py-3.5 px-5 text-neutral hidden sm:table-cell">{keeps}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral mb-8">
              Commission is charged on the gross payout per shipment stage, not on the total booking value.
            </p>

            <h3 className="text-sm font-bold text-base-content mb-3">Payout schedule</h3>
            <p className="text-sm text-neutral mb-4">
              Payouts are released automatically as each customer payment stage clears:
            </p>

            <div className="space-y-3 mb-6">
              {[
                { stage: 'Stage 1', pct: '20%', trigger: 'Released after customer deposit clears and booking is confirmed' },
                { stage: 'Stage 2', pct: '50%', trigger: 'Released after pre-departure payment clears (7 days before sailing)' },
                { stage: 'Stage 3', pct: '30%', trigger: 'Released after final customer payment clears at destination' },
              ].map(({ stage, pct, trigger }) => (
                <div key={stage} className="flex gap-4 items-start rounded-xl border border-base-300 px-5 py-4">
                  <div className="shrink-0 text-center w-14">
                    <p className="text-xs text-neutral font-semibold">{stage}</p>
                    <p className="text-lg font-extrabold text-primary" style={{ fontFamily: 'var(--font-sora)' }}>{pct}</p>
                  </div>
                  <p className="text-sm text-neutral mt-1">{trigger}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 text-sm text-base-content/80">
              <p className="font-semibold text-primary mb-1">Payout eligibility</p>
              <p>
                Payouts require a verified bank account, an active Paystack recipient code, no open
                dispute on the booking, and a 48-hour refund window to have elapsed on Stage 1.
              </p>
            </div>
          </div>

          {/* ── No hidden fees ── */}
          <div className="card bg-base-200 border border-base-300 p-8 sm:p-10">
            <h2 className="text-lg font-bold text-base-content mb-5" style={{ fontFamily: 'var(--font-sora)' }}>
              What is never charged
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-neutral">
              {[
                'No listing fees for operators',
                'No subscription or monthly fees',
                'No charge to browse containers',
                'No charge to create an account',
                'No charge to submit a support ticket or dispute',
                'No charge for shipment tracking',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Related links ── */}
          <div className="flex flex-col sm:flex-row gap-3 text-sm">
            <Link href="/cancellation" className="flex-1 flex items-center justify-between card bg-base-200 border border-base-300 px-5 py-4 hover:border-primary/40 transition-colors">
              <div>
                <p className="font-semibold text-base-content">Cancellation &amp; Refund Policy</p>
                <p className="text-xs text-neutral mt-0.5">Deposit windows, refund eligibility, and operator non-performance rules</p>
              </div>
              <svg className="w-4 h-4 text-neutral shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/terms" className="flex-1 flex items-center justify-between card bg-base-200 border border-base-300 px-5 py-4 hover:border-primary/40 transition-colors">
              <div>
                <p className="font-semibold text-base-content">Terms &amp; Conditions</p>
                <p className="text-xs text-neutral mt-0.5">Full payment terms, booking conditions, and platform rules</p>
              </div>
              <svg className="w-4 h-4 text-neutral shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
