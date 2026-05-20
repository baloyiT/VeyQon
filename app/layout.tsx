import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'VeyQon Group',
  description:
    'VeyQon Group develops operational technologies and digital platforms that improve visibility, coordination, and execution across logistics, infrastructure, and enterprise operations.',
  openGraph: {
    title: 'VeyQon Group',
    description: "Building Digital Platforms for Africa's Operational Economy.",
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-theme="veyqon"
      className={`${sora.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-base-100 text-base-content min-h-screen flex flex-col"
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
