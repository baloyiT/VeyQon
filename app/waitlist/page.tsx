import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join the Waitlist — ShareConLoad by VeyQon Group',
  description:
    "Secure your early access to ShareConLoad — the global digital freight marketplace connecting container operators with verified cargo.",
}

export default function WaitlistPage() {
  const waitlistUrl = process.env.NEXT_PUBLIC_WAITLIST_URL ?? '#'

  return (
    <section className="min-h-screen flex items-center justify-center py-32">
      <div className="max-w-xl mx-auto px-6 md:px-10 text-center space-y-8">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest">
          Early Access
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Join the ShareConLoad Waitlist
        </h1>
        <p className="text-neutral text-lg leading-relaxed">
          ShareConLoad is the global digital freight marketplace — connecting container operators
          with verified cargo opportunities across worldwide trade routes. Secure your
          early access position before public launch.
        </p>
        <div className="space-y-4">
          <a
            href={waitlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg w-full sm:w-auto"
          >
            Apply for Early Access →
          </a>
          <p className="text-neutral text-sm">
            Already registered? Check your email for updates.
          </p>
        </div>
      </div>
    </section>
  )
}
