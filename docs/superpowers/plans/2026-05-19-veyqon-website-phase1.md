# VeyQon Group Website — Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the VeyQon Group corporate website Phase 1 — 5 pages (Home, About, ShareConLoad, Contact, Waitlist) on top of a clean Next.js 16 + Tailwind v4 + DaisyUI v4 foundation with the gold/black brand identity.

**Architecture:** Layout-first approach — brand theme and global layout (Header + Footer) are established first so every page is immediately on-brand. Home page sections live in `components/sections/`. Shared primitives live in `components/ui/`. Contact form submits via a Next.js Route Handler to Resend. Waitlist page links out to the existing standalone waitlist app.

**Tech Stack:** Next.js 16, React 19, TypeScript 5, Tailwind CSS v4, DaisyUI v4, React Hook Form, Zod, @hookform/resolvers, Resend

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `app/globals.css` | Modify | DaisyUI plugin, custom `veyqon` theme tokens, font CSS variables |
| `app/layout.tsx` | Modify | Load Sora + Inter fonts, set metadata, render Header + Footer |
| `app/page.tsx` | Replace | Home page — imports 7 section components |
| `app/about/page.tsx` | Create | About page — 5 sections, static content |
| `app/shareconload/page.tsx` | Create | ShareConLoad page — 6 sections |
| `app/contact/page.tsx` | Create | Contact page — two-column layout, imports ContactForm |
| `app/waitlist/page.tsx` | Create | Waitlist page — CTA linking out to waitlist app |
| `app/api/contact/route.ts` | Create | POST Route Handler — validates body, sends email via Resend |
| `components/layout/Header.tsx` | Create | Sticky nav, scroll background, mobile drawer |
| `components/layout/Footer.tsx` | Create | 4-column footer, bottom bar |
| `components/ui/SectionHeading.tsx` | Create | Reusable h2 + subtext block |
| `components/ui/GoldIcon.tsx` | Create | Icon wrapper with gold colour |
| `components/sections/Hero.tsx` | Create | Home hero — two-column, dashboard mockup |
| `components/sections/TrustStrip.tsx` | Create | Home trust indicators strip |
| `components/sections/WhatWeDo.tsx` | Create | Home 3-card What We Do section |
| `components/sections/FeaturedProduct.tsx` | Create | Home ShareConLoad split section |
| `components/sections/Industries.tsx` | Create | Home 3-card industries section |
| `components/sections/WhyVeyQon.tsx` | Create | Home 2×2 Why VeyQon section |
| `components/sections/FinalCTA.tsx` | Create | Home full-width CTA section |
| `components/forms/ContactForm.tsx` | Create | Client form with React Hook Form + Zod |
| `lib/resend.ts` | Create | Resend client singleton |
| `CLAUDE.md` | Replace | Updated project context, brand tokens, conventions |
| `public/` | Modify | Remove default Next.js SVGs (next.svg, vercel.svg, etc.) |

---

## Task 1: Install dependencies and clean up defaults

**Files:**
- Modify: `package.json` (via npm install)
- Delete: `public/next.svg`, `public/vercel.svg`, `public/window.svg`, `public/file.svg`, `public/globe.svg`
- Replace: `app/page.tsx` (empty placeholder until Task 7)

- [ ] **Step 1: Install production dependencies**

```bash
npm install daisyui resend react-hook-form zod @hookform/resolvers
```

Expected: packages added to `node_modules/`, `package.json` updated with new dependencies.

- [ ] **Step 2: Verify DaisyUI v4 CSS plugin syntax**

Run:
```bash
cat node_modules/daisyui/README.md | head -80
```

Confirm the CSS import syntax — it should show `@plugin "daisyui"` for Tailwind v4. If the README shows a different syntax, use what the README specifies in Task 2.

- [ ] **Step 3: Remove default Next.js public assets**

Delete these files (they will never be used):
```bash
del public\next.svg public\vercel.svg public\window.svg public\file.svg public\globe.svg
```

- [ ] **Step 4: Replace default page.tsx with empty placeholder**

Replace `app/page.tsx` with:

```tsx
export default function Home() {
  return <main />
}
```

- [ ] **Step 5: Verify TypeScript compiles cleanly**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: install deps, clear default Next.js scaffold"
```

---

## Task 2: Brand foundation — theme, fonts, globals.css

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update globals.css with DaisyUI plugin and custom theme**

Replace the entire contents of `app/globals.css` with:

```css
@import "tailwindcss";
@plugin "daisyui";

[data-theme="veyqon"] {
  --color-primary: #C8A45D;
  --color-primary-content: #080B0D;
  --color-secondary: #9E7B3C;
  --color-secondary-content: #F5F5F3;
  --color-base-100: #080B0D;
  --color-base-200: #1C1F26;
  --color-base-300: #374151;
  --color-base-content: #F5F5F3;
  --color-neutral: #6B7280;
  --color-neutral-content: #F5F5F3;
  color-scheme: dark;
}

@theme {
  --font-heading: var(--font-sora);
  --font-body: var(--font-inter);
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
}
```

- [ ] **Step 2: Update layout.tsx with Sora + Inter fonts and metadata**

Replace `app/layout.tsx` with:

```tsx
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
    description:
      'Building Digital Platforms for Africa\'s Operational Economy.',
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
    >
      <body className="bg-base-100 text-base-content min-h-screen flex flex-col" style={{ fontFamily: 'var(--font-inter)' }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

Note: Header and Footer don't exist yet — TypeScript will error. Stub them in the next step.

- [ ] **Step 3: Create stub Header and Footer to unblock compilation**

Create `components/layout/Header.tsx`:

```tsx
export function Header() {
  return <header />
}
```

Create `components/layout/Footer.tsx`:

```tsx
export function Footer() {
  return <footer />
}
```

- [ ] **Step 4: Verify compilation**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Run dev server and verify dark background renders**

```bash
npm run dev
```

Open `http://localhost:3000`. Background should be `#080B0D` (near-black). If still white, confirm `data-theme="veyqon"` is on `<html>` and the CSS variables are present in `globals.css`.

- [ ] **Step 6: Commit**

```bash
git add app/globals.css app/layout.tsx components/layout/Header.tsx components/layout/Footer.tsx
git commit -m "feat: add brand theme, Sora/Inter fonts, DaisyUI veyqon theme"
```

---

## Task 3: Shared UI primitives — SectionHeading and GoldIcon

**Files:**
- Create: `components/ui/SectionHeading.tsx`
- Create: `components/ui/GoldIcon.tsx`

- [ ] **Step 1: Create SectionHeading component**

Create `components/ui/SectionHeading.tsx`:

```tsx
interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  subtext?: string
  centered?: boolean
}

export function SectionHeading({
  eyebrow,
  heading,
  subtext,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
        {heading}
      </h2>
      {subtext && (
        <p className="text-neutral text-base md:text-lg leading-relaxed max-w-2xl">
          {subtext}
        </p>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Create GoldIcon component**

Create `components/ui/GoldIcon.tsx`:

```tsx
interface GoldIconProps {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'w-8 h-8 text-lg',
  md: 'w-12 h-12 text-2xl',
  lg: 'w-16 h-16 text-3xl',
}

export function GoldIcon({ children, size = 'md' }: GoldIconProps) {
  return (
    <div
      className={`${sizeMap[size]} rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary`}
    >
      {children}
    </div>
  )
}
```

- [ ] **Step 3: Verify compilation**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/ui/
git commit -m "feat: add SectionHeading and GoldIcon UI primitives"
```

---

## Task 4: Header component

**Files:**
- Replace: `components/layout/Header.tsx`

- [ ] **Step 1: Replace the stub Header with the full implementation**

Replace `components/layout/Header.tsx` with:

```tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'ShareConLoad', href: '/shareconload' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 h-20 transition-all duration-300 ${
          scrolled
            ? 'bg-base-100/90 backdrop-blur-md border-b border-base-300'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">
          {/* Wordmark */}
          <Link href="/" className="flex flex-col leading-none select-none">
            <span className="text-primary font-bold text-xl tracking-wider" style={{ fontFamily: 'var(--font-sora)' }}>
              VEYQON
            </span>
            <span className="text-base-content/60 text-[10px] tracking-[0.3em] uppercase">
              GROUP
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-base-content/70 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/waitlist" className="btn btn-outline btn-sm">
              Join Waitlist
            </Link>
            <Link href="/contact" className="btn btn-primary btn-sm">
              Request Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-base-content"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-base-200 border-l border-base-300 flex flex-col p-8 transition-transform duration-300 ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="self-end mb-8 text-base-content"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <nav className="flex flex-col gap-6 mb-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg text-base-content/80 hover:text-primary transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3">
          <Link href="/waitlist" className="btn btn-outline w-full" onClick={() => setDrawerOpen(false)}>
            Join Waitlist
          </Link>
          <Link href="/contact" className="btn btn-primary w-full" onClick={() => setDrawerOpen(false)}>
            Request Demo
          </Link>
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Verify compilation**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Run dev and verify Header**

```bash
npm run dev
```

Open `http://localhost:3000`. Verify:
- Wordmark "VEYQON / GROUP" appears top-left in gold
- Nav links visible on desktop
- Hamburger visible on mobile (resize browser)
- Drawer slides in from right on mobile
- Background transitions to `bg-base-100/90` after scrolling 20px

- [ ] **Step 4: Commit**

```bash
git add components/layout/Header.tsx
git commit -m "feat: add sticky Header with mobile drawer"
```

---

## Task 5: Footer component

**Files:**
- Replace: `components/layout/Footer.tsx`

- [ ] **Step 1: Replace the stub Footer with the full implementation**

Replace `components/layout/Footer.tsx` with:

```tsx
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'ShareConLoad', href: '/shareconload' },
  { label: 'Contact', href: '/contact' },
]

const solutions = [
  { label: 'ShareConLoad', href: '/shareconload', note: 'Logistics Platform' },
  { label: 'Fintech', href: '#', note: 'Coming Soon' },
  { label: 'AI Solutions', href: '#', note: 'Coming Soon' },
  { label: 'Consulting', href: '#', note: 'Coming Soon' },
]

export function Footer() {
  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="leading-none">
              <p className="text-primary font-bold text-lg tracking-wider" style={{ fontFamily: 'var(--font-sora)' }}>
                VEYQON
              </p>
              <p className="text-base-content/60 text-[10px] tracking-[0.3em] uppercase">GROUP</p>
            </div>
            <p className="text-neutral text-sm leading-relaxed">
              Building trusted digital infrastructure for modern African business.
            </p>
            <a
              href="https://linkedin.com"
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
            <p className="text-base-content font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <p className="text-base-content font-semibold mb-4 text-sm uppercase tracking-wider">Solutions</p>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-neutral hover:text-primary transition-colors text-sm flex items-center gap-2">
                    {item.label}
                    {item.note !== 'Logistics Platform' && (
                      <span className="text-[10px] text-neutral/60 border border-base-300 px-1 rounded">
                        {item.note}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="text-base-content font-semibold mb-4 text-sm uppercase tracking-wider">Contact</p>
            <ul className="space-y-3 text-sm text-neutral">
              <li>contact@veyqon.com</li>
              <li>South Africa</li>
              <li>
                <Link href="/contact" className="text-primary hover:text-secondary transition-colors">
                  Send a message →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral">
          <p>© {new Date().getFullYear()} VeyQon Group. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Verify compilation**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Run dev and verify Footer**

```bash
npm run dev
```

Open `http://localhost:3000`. Scroll to bottom. Verify:
- 4 columns visible on desktop, stacks on mobile
- Gold wordmark in col 1
- Copyright year dynamic
- Gold hover on links

- [ ] **Step 4: Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "feat: add 4-column Footer with brand columns"
```

---

## Task 6: Home page — Hero section

**Files:**
- Create: `components/sections/Hero.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Hero section component**

Create `components/sections/Hero.tsx`:

```tsx
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Radial background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 40%, #1C1F26 0%, #080B0D 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest">
              Africa's Operational Technology Group
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building Digital Platforms for Africa's{' '}
              <span className="text-primary">Operational Economy</span>
            </h1>
            <p className="text-neutral text-lg md:text-xl leading-relaxed max-w-lg">
              VeyQon Group develops operational technologies and digital platforms
              that improve visibility, coordination, and execution across logistics,
              infrastructure, and enterprise operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shareconload" className="btn btn-primary btn-lg">
                Explore ShareConLoad
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right: Dashboard mockup */}
          <div className="hidden lg:block">
            <div className="rounded-2xl border border-base-300 bg-base-200/80 backdrop-blur p-6 space-y-4">
              {/* Top bar */}
              <div className="flex items-center justify-between pb-3 border-b border-base-300">
                <span className="text-xs text-neutral uppercase tracking-wider">Operations Dashboard</span>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs text-neutral">Live</span>
                </div>
              </div>

              {/* KPI cards row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Active Routes', value: '124' },
                  { label: 'Containers', value: '3,847' },
                  { label: 'On Time %', value: '94.2' },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-base-100 rounded-lg p-3 border border-base-300">
                    <p className="text-[10px] text-neutral uppercase tracking-wider mb-1">{kpi.label}</p>
                    <p className="text-primary font-bold text-xl">{kpi.value}</p>
                  </div>
                ))}
              </div>

              {/* Route visualisation */}
              <div className="bg-base-100 rounded-lg p-4 border border-base-300">
                <p className="text-[10px] text-neutral uppercase tracking-wider mb-3">Freight Routes</p>
                <div className="relative h-24 flex items-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-dashed border-primary/40" />
                  </div>
                  {['JHB', 'BFN', 'CPT', 'DUR', 'ACC'].map((city, i) => (
                    <div
                      key={city}
                      className="relative z-10 flex flex-col items-center"
                      style={{ marginLeft: i === 0 ? 0 : 'auto' }}
                    >
                      <div className="w-3 h-3 rounded-full bg-primary border-2 border-base-100" />
                      <p className="text-[9px] text-neutral mt-1">{city}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status rows */}
              <div className="space-y-2">
                {[
                  { id: 'VQ-2041', status: 'In Transit', pct: 72 },
                  { id: 'VQ-2038', status: 'Loading', pct: 30 },
                  { id: 'VQ-2035', status: 'Delivered', pct: 100 },
                ].map((row) => (
                  <div key={row.id} className="flex items-center gap-3">
                    <span className="text-xs text-neutral w-16 shrink-0">{row.id}</span>
                    <div className="flex-1 h-1.5 bg-base-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-neutral w-16 text-right shrink-0">{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Update app/page.tsx to use Hero**

Replace `app/page.tsx` with:

```tsx
import { Hero } from '@/components/sections/Hero'

export default function Home() {
  return (
    <>
      <Hero />
    </>
  )
}
```

- [ ] **Step 3: Verify compilation**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Run dev and verify Hero**

```bash
npm run dev
```

Open `http://localhost:3000`. Verify:
- Full viewport height hero
- Gold accent on "Operational Economy"
- Dashboard panel visible on the right (desktop)
- Two CTA buttons render with correct DaisyUI styles
- Mobile: dashboard hidden (`hidden lg:block`), text centred

- [ ] **Step 5: Commit**

```bash
git add components/sections/Hero.tsx app/page.tsx
git commit -m "feat: add Hero section with dashboard mockup"
```

---

## Task 7: Home page — Trust Strip, What We Do, Featured Product

**Files:**
- Create: `components/sections/TrustStrip.tsx`
- Create: `components/sections/WhatWeDo.tsx`
- Create: `components/sections/FeaturedProduct.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create TrustStrip component**

Create `components/sections/TrustStrip.tsx`:

```tsx
const items = [
  {
    icon: '🌍',
    label: 'Built for African Operational Environments',
  },
  {
    icon: '🏢',
    label: 'Enterprise-Focused Technology',
  },
  {
    icon: '🚢',
    label: 'Logistics & Infrastructure Solutions',
  },
  {
    icon: '📊',
    label: 'Operational Intelligence Platforms',
  },
]

export function TrustStrip() {
  return (
    <section className="py-12 border-y border-base-300 bg-base-200/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-2 p-5 rounded-xl bg-base-200/60 backdrop-blur border border-base-300"
            >
              <span className="text-primary text-2xl">{item.icon}</span>
              <p className="text-sm text-base-content/80 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create WhatWeDo component**

Create `components/sections/WhatWeDo.tsx`:

```tsx
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GoldIcon } from '@/components/ui/GoldIcon'

const cards = [
  {
    icon: '⬡',
    title: 'Digital Platforms',
    description:
      'Operational systems that improve visibility, coordination, and execution across complex business environments.',
  },
  {
    icon: '◎',
    title: 'Operational Intelligence',
    description:
      'Data-driven decision support that gives operators real-time insight into their logistics and infrastructure operations.',
  },
  {
    icon: '⇌',
    title: 'Systems Integration',
    description:
      'Connecting fragmented systems and workflows into unified, efficient digital operations.',
  },
]

export function WhatWeDo() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <SectionHeading
            eyebrow="What We Do"
            heading="Operational Technology Built for Real Environments"
            subtext="We build the digital systems that make African businesses more visible, more coordinated, and more effective."
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="card bg-base-200 border border-base-300 p-6 md:p-8 space-y-4">
              <GoldIcon>{card.icon}</GoldIcon>
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-neutral leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create FeaturedProduct component**

Create `components/sections/FeaturedProduct.tsx`:

```tsx
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'

const features = [
  'Cargo matching between operators and shippers',
  'Real-time capacity visibility across the network',
  'Digital coordination replacing phone-based operations',
  'Verified operator and shipper network',
  'Operational optimisation for empty container reduction',
]

export function FeaturedProduct() {
  return (
    <section className="py-20 md:py-32 bg-base-200/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <p className="text-primary text-xs font-semibold uppercase tracking-widest">
              Flagship Platform
            </p>
            <SectionHeading
              heading="ShareConLoad"
              subtext="A digital freight marketplace connecting container operators with verified cargo opportunities across Africa."
            />
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-base-content/80">
                  <span className="text-primary mt-0.5 shrink-0">✓</span>
                  <span className="text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <Link href="/shareconload" className="btn btn-primary">
              Explore ShareConLoad →
            </Link>
          </div>

          {/* Right: UI mockup */}
          <div className="rounded-2xl border border-base-300 bg-base-200 p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-base-300">
              <span className="text-xs text-neutral uppercase tracking-wider">Cargo Matching</span>
              <span className="badge badge-success badge-sm">3 matches found</span>
            </div>
            {[
              { route: 'JHB → ACC', cbm: '14 CBM', price: 'R4,200', operator: 'Verified' },
              { route: 'CPT → LOS', cbm: '8 CBM', price: 'R2,800', operator: 'Verified' },
              { route: 'DUR → ACC', cbm: '22 CBM', price: 'R6,100', operator: 'Verified' },
            ].map((match, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-base-100 border border-base-300">
                <div>
                  <p className="text-sm font-medium">{match.route}</p>
                  <p className="text-[11px] text-neutral">{match.cbm} available</p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-semibold text-sm">{match.price}</p>
                  <p className="text-[10px] text-green-400">{match.operator}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Add sections to Home page**

Replace `app/page.tsx` with:

```tsx
import { Hero } from '@/components/sections/Hero'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { FeaturedProduct } from '@/components/sections/FeaturedProduct'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhatWeDo />
      <FeaturedProduct />
    </>
  )
}
```

- [ ] **Step 5: Verify compilation**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 6: Run dev and verify sections**

```bash
npm run dev
```

Scroll through `http://localhost:3000`. Verify:
- Trust strip shows 4 gold-icon cards
- What We Do shows 3 `bg-base-200` cards with GoldIcon
- Featured Product shows split layout; matching panel mock on right

- [ ] **Step 7: Commit**

```bash
git add components/sections/TrustStrip.tsx components/sections/WhatWeDo.tsx components/sections/FeaturedProduct.tsx app/page.tsx
git commit -m "feat: add TrustStrip, WhatWeDo, FeaturedProduct home sections"
```

---

## Task 8: Home page — Industries, Why VeyQon, Final CTA

**Files:**
- Create: `components/sections/Industries.tsx`
- Create: `components/sections/WhyVeyQon.tsx`
- Create: `components/sections/FinalCTA.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Industries component**

Create `components/sections/Industries.tsx`:

```tsx
import { SectionHeading } from '@/components/ui/SectionHeading'

const industries = [
  {
    icon: '🚛',
    title: 'Logistics & Freight',
    description: 'Container movement, freight coordination, and cargo visibility across southern and west African routes.',
  },
  {
    icon: '📡',
    title: 'Telecom & Infrastructure',
    description: 'Operational systems for telecom infrastructure management, field operations, and asset tracking.',
  },
  {
    icon: '🏗️',
    title: 'Enterprise Operations',
    description: 'Digital platforms for large enterprise operational coordination, reporting, and workflow management.',
  },
]

export function Industries() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Industries"
            heading="Sectors We Serve"
            subtext="Our platforms are built for the operational realities of African business environments."
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="p-6 md:p-8 rounded-xl border border-base-300 hover:border-primary transition-colors group space-y-4"
            >
              <span className="text-3xl">{industry.icon}</span>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {industry.title}
              </h3>
              <p className="text-neutral text-sm leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create WhyVeyQon component**

Create `components/sections/WhyVeyQon.tsx`:

```tsx
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GoldIcon } from '@/components/ui/GoldIcon'

const points = [
  {
    icon: '🗺️',
    title: 'Operational Understanding',
    description: 'We build from deep familiarity with how African logistics and enterprise operations actually work — not how they should work in theory.',
  },
  {
    icon: '🌍',
    title: 'African Context',
    description: 'Our platforms are designed for African infrastructure realities: connectivity constraints, route complexity, and multi-currency environments.',
  },
  {
    icon: '📈',
    title: 'Scalable Platforms',
    description: 'Every system we build is designed to grow — from a single operator to a continental network without architectural rework.',
  },
  {
    icon: '⚙️',
    title: 'Practical Innovation',
    description: 'We focus on innovation that solves real problems, not innovation for its own sake. Every feature earns its place.',
  },
]

export function WhyVeyQon() {
  return (
    <section className="py-20 md:py-32 bg-base-200/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Why VeyQon"
            heading="Built Different. Intentionally."
            subtext="Four principles that define how we approach every platform we build."
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {points.map((point) => (
            <div key={point.title} className="flex gap-5">
              <GoldIcon size="sm">{point.icon}</GoldIcon>
              <div className="space-y-2">
                <h3 className="font-bold text-lg">{point.title}</h3>
                <p className="text-neutral text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create FinalCTA component**

Create `components/sections/FinalCTA.tsx`:

```tsx
import Link from 'next/link'

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32 border-t-2 border-primary/30 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 50% 0%, #C8A45D10 0%, transparent 70%)',
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Build Smarter Operations with VeyQon Group
        </h2>
        <p className="text-neutral text-lg leading-relaxed">
          Join the businesses across Africa that are replacing fragmented operations with digital platforms built for scale.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn btn-primary btn-lg">
            Request Demo
          </Link>
          <Link href="/waitlist" className="btn btn-outline btn-lg">
            Join Waitlist
          </Link>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Complete the Home page**

Replace `app/page.tsx` with the final version:

```tsx
import { Hero } from '@/components/sections/Hero'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { FeaturedProduct } from '@/components/sections/FeaturedProduct'
import { Industries } from '@/components/sections/Industries'
import { WhyVeyQon } from '@/components/sections/WhyVeyQon'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhatWeDo />
      <FeaturedProduct />
      <Industries />
      <WhyVeyQon />
      <FinalCTA />
    </>
  )
}
```

- [ ] **Step 5: Verify compilation**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 6: Run dev and verify full Home page**

```bash
npm run dev
```

Scroll through all 7 sections on `http://localhost:3000`. Verify each section renders, gold accents visible, CTA buttons correct.

- [ ] **Step 7: Commit**

```bash
git add components/sections/Industries.tsx components/sections/WhyVeyQon.tsx components/sections/FinalCTA.tsx app/page.tsx
git commit -m "feat: complete Home page with all 7 sections"
```

---

## Task 9: About page

**Files:**
- Create: `app/about/page.tsx`

- [ ] **Step 1: Create the About page**

Create `app/about/page.tsx`:

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GoldIcon } from '@/components/ui/GoldIcon'

export const metadata: Metadata = {
  title: 'About — VeyQon Group',
  description:
    'VeyQon Group builds practical digital infrastructure for African industries, improving coordination, visibility, and operational efficiency.',
}

const timeline = [
  { year: '2023', event: 'VeyQon Group founded with a focus on African operational technology' },
  { year: '2024', event: 'ShareConLoad concept developed — first platform under the group' },
  { year: '2025', event: 'Platform development and early operator network established' },
  { year: '2026', event: 'Public launch and Phase 1 market rollout' },
]

const values = [
  { icon: '✓', label: 'Confident' },
  { icon: '◎', label: 'Precise' },
  { icon: '◆', label: 'Sophisticated' },
  { icon: '◉', label: 'Visionary' },
  { icon: '⬡', label: 'Reliable' },
  { icon: '♟', label: 'Strategic' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-32 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center space-y-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">About VeyQon Group</p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Building Practical Digital Infrastructure for African Industries
          </h1>
          <p className="text-neutral text-lg leading-relaxed max-w-2xl mx-auto">
            VeyQon Group develops operational platforms and enterprise technologies that improve coordination,
            visibility, and operational efficiency across complex business environments.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Narrative */}
            <div className="space-y-6 text-base-content/80 leading-relaxed">
              <SectionHeading eyebrow="Our Story" heading="Who We Are" />
              <p>
                VeyQon Group is an African operational technology company building digital platforms and
                enterprise systems for industries that rely on coordination, movement, and infrastructure.
              </p>
              <p>
                We started with a simple observation: across African logistics and infrastructure sectors,
                the biggest operational problems aren't caused by a lack of capacity — they're caused by a
                lack of visibility and coordination. Containers move empty. Cargo waits for operators.
                Systems don't talk to each other.
              </p>
              <p>
                Our answer is practical digital platforms — built for the real operational environment of
                African business, not for a hypothetical version of it. We build with the constraints,
                connectivity realities, and commercial dynamics of our markets in mind.
              </p>
              <p>
                VeyQon Group is the parent of ShareConLoad and future ventures in fintech, AI solutions,
                and enterprise consulting — all operating under a single commitment: precision, reliability,
                and scale.
              </p>
            </div>

            {/* Right: Timeline */}
            <div className="space-y-0">
              <SectionHeading eyebrow="Timeline" heading="Our Journey" />
              <div className="mt-8 relative">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-base-300" />
                {timeline.map((item) => (
                  <div key={item.year} className="relative pl-12 pb-10 last:pb-0">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-primary font-bold text-sm mb-1">{item.year}</p>
                    <p className="text-base-content/70 text-sm leading-relaxed">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-base-200/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                label: 'Vision',
                text: 'To be Africa\'s most trusted technology group, enabling the next generation of digital infrastructure and enterprise innovation.',
              },
              {
                label: 'Mission',
                text: 'To deliver innovative, reliable, and scalable solutions that solve real business problems with excellence and integrity.',
              },
            ].map((item) => (
              <div key={item.label} className="card bg-base-200 border border-base-300 border-t-2 border-t-primary p-8 space-y-4">
                <p className="text-primary text-xs font-semibold uppercase tracking-widest">{item.label}</p>
                <p className="text-base-content text-lg leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <SectionHeading eyebrow="Leadership" heading="Who Leads VeyQon Group" />
          </div>
          <div className="max-w-sm">
            <div className="card bg-base-200 border border-base-300 p-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
                <span className="text-primary font-bold text-xl" style={{ fontFamily: 'var(--font-sora)' }}>MB</span>
              </div>
              <div>
                <p className="font-bold text-lg">Mercy McAfful Baloyi</p>
                <p className="text-primary text-sm">Co-Founder & Chief Executive Officer</p>
              </div>
              <p className="text-neutral text-sm leading-relaxed">
                Responsible for strategic direction, product conceptualisation, platform development,
                and operational execution across the VeyQon Group portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-14 bg-base-200/40 border-y border-base-300">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {values.map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2 text-center">
                <GoldIcon size="sm">{v.icon}</GoldIcon>
                <p className="text-xs font-semibold uppercase tracking-wider text-base-content/70">{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-xl mx-auto px-6 md:px-10 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to work with us?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
            <Link href="/shareconload" className="btn btn-outline">Explore ShareConLoad</Link>
          </div>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Verify compilation**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Run dev and verify About page**

Open `http://localhost:3000/about`. Verify:
- Hero heading renders in Sora
- Timeline has gold dot + connecting line
- Vision/Mission cards have gold top border
- Leadership card with "MB" initials
- Values strip shows 6 items
- Bottom CTA renders two buttons

- [ ] **Step 4: Commit**

```bash
git add app/about/
git commit -m "feat: add About page with timeline, leadership, and brand values"
```

---

## Task 10: ShareConLoad page

**Files:**
- Create: `app/shareconload/page.tsx`

Note: The waitlist URL is set via `NEXT_PUBLIC_WAITLIST_URL` env var. During development, use `http://localhost:3001` or the actual deployed URL. Create `.env.local` and add the variable before running dev.

- [ ] **Step 1: Add NEXT_PUBLIC_WAITLIST_URL to .env.local**

Open `.env.local` (create if it doesn't exist) and add:

```env
NEXT_PUBLIC_WAITLIST_URL=https://your-waitlist-app-url.vercel.app
```

Replace the value with the actual deployed URL of the existing waitlist app.

- [ ] **Step 2: Create the ShareConLoad page**

Create `app/shareconload/page.tsx`:

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GoldIcon } from '@/components/ui/GoldIcon'

export const metadata: Metadata = {
  title: 'ShareConLoad — VeyQon Group',
  description:
    'A digital freight marketplace connecting container operators with verified cargo opportunities across Africa. Smarter container utilisation starts here.',
}

const features = [
  { icon: '🔗', title: 'Cargo Matching', description: 'Automated matching of available container capacity with verified cargo opportunities across African trade routes.' },
  { icon: '👁', title: 'Capacity Visibility', description: 'Real-time view of available container space across the network — eliminating blind spots in logistics planning.' },
  { icon: '💬', title: 'Digital Coordination', description: 'Replace phone calls and WhatsApp chains with structured digital workflows for booking and confirmation.' },
  { icon: '✓', title: 'Verified Network', description: 'All operators and shippers are verified before joining — protecting every transaction in the network.' },
  { icon: '⚙️', title: 'Operational Efficiency', description: 'Reduce empty legs, improve utilisation rates, and cut coordination overhead across your fleet.' },
  { icon: '📊', title: 'Freight Intelligence', description: 'Access route-level data and operational insights to make better decisions about capacity and pricing.' },
]

const oldWay = [
  'Phone calls and WhatsApp chains to find cargo',
  'Empty containers moving between depots',
  'No visibility into available capacity across routes',
  'Lost revenue from underutilised fleet assets',
]

const newWay = [
  'Digital cargo matching in minutes, not hours',
  'Containers move full — every leg optimised',
  'Network-wide capacity visible in real time',
  'Maximised revenue from every available CBM',
]

const steps = [
  { n: '01', label: 'Register', desc: 'Create your verified operator or shipper profile on the platform.' },
  { n: '02', label: 'List Capacity', desc: 'Post available container space with route, CBM, and pricing details.' },
  { n: '03', label: 'Receive Opportunities', desc: 'Get matched with verified cargo requests that fit your capacity.' },
  { n: '04', label: 'Coordinate Digitally', desc: 'Confirm bookings and coordinate pickup and delivery through the platform.' },
  { n: '05', label: 'Move Freight', desc: 'Execute the shipment with full digital visibility for both parties.' },
]

export default function ShareConLoadPage() {
  const waitlistUrl = process.env.NEXT_PUBLIC_WAITLIST_URL ?? '#'

  return (
    <>
      {/* Hero */}
      <section className="py-32 text-center relative overflow-hidden border-b border-base-300">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, #1C1F26 0%, #080B0D 100%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 space-y-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">Flagship Platform</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Smarter Container Utilisation Starts Here
          </h1>
          <p className="text-neutral text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            A digital freight marketplace connecting container operators with verified cargo
            opportunities across Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href={waitlistUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
              Join the Waitlist
            </a>
            <a href="#how-it-works" className="btn btn-outline btn-lg">
              How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12 text-center">
            <SectionHeading
              eyebrow="The Problem"
              heading="African Freight Runs on Inefficiency"
              centered
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-base-200 border-l-4 border-neutral space-y-4">
              <p className="font-bold text-lg text-base-content/60">The Old Way</p>
              <ul className="space-y-3">
                {oldWay.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral text-sm">
                    <span className="text-neutral mt-0.5 shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-xl bg-base-200 border-l-4 border-primary space-y-4">
              <p className="font-bold text-lg text-primary">The VeyQon Way</p>
              <ul className="space-y-3">
                {newWay.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base-content/80 text-sm">
                    <span className="text-primary mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32 bg-base-200/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14">
            <SectionHeading
              eyebrow="Platform Features"
              heading="Everything You Need to Move Freight Smarter"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card bg-base-200 border border-base-300 p-6 space-y-4">
                <GoldIcon>{f.icon}</GoldIcon>
                <h3 className="font-bold text-lg">{f.title}</h3>
                <p className="text-neutral text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-14 text-center">
            <SectionHeading
              eyebrow="How It Works"
              heading="From Registration to Freight Movement"
              centered
            />
          </div>
          {/* Desktop stepper */}
          <div className="hidden lg:flex items-start gap-0">
            {steps.map((step, i) => (
              <div key={step.n} className="flex-1 flex flex-col items-center text-center px-4 relative">
                {i < steps.length - 1 && (
                  <div className="absolute top-5 left-1/2 w-full h-px bg-primary/30" />
                )}
                <div className="relative z-10 w-10 h-10 rounded-full bg-primary/10 border border-primary flex items-center justify-center mb-4">
                  <span className="text-primary text-xs font-bold">{step.n}</span>
                </div>
                <p className="font-bold text-sm mb-2">{step.label}</p>
                <p className="text-neutral text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          {/* Mobile stepper */}
          <div className="lg:hidden space-y-6">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary flex items-center justify-center shrink-0">
                  <span className="text-primary text-xs font-bold">{step.n}</span>
                </div>
                <div>
                  <p className="font-bold">{step.label}</p>
                  <p className="text-neutral text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-base-200/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <SectionHeading eyebrow="Who It's For" heading="Built for Both Sides of Freight" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Container Operators',
                icon: '🚛',
                points: [
                  'Fill empty container legs with verified cargo',
                  'Reduce fleet downtime and improve asset utilisation',
                  'Digital bookings replace phone-based coordination',
                  'Access to a growing network of verified shippers',
                ],
              },
              {
                title: 'Cargo Owners & Shippers',
                icon: '📦',
                points: [
                  'Find available container space on your required route',
                  'Transparent pricing from verified operators',
                  'Digital coordination and shipment tracking',
                  'Access to capacity across South Africa and West Africa',
                ],
              },
            ].map((group) => (
              <div key={group.title} className="card bg-base-200 border border-base-300 p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{group.icon}</span>
                  <h3 className="font-bold text-xl">{group.title}</h3>
                </div>
                <ul className="space-y-3">
                  {group.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-base-content/80">
                      <span className="text-primary mt-0.5 shrink-0">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-20 md:py-32 border-t-2 border-primary/30">
        <div className="max-w-2xl mx-auto px-6 md:px-10 text-center space-y-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">Early Access</p>
          <h2 className="text-4xl font-bold">Be First on the Platform</h2>
          <p className="text-neutral leading-relaxed">
            ShareConLoad is opening to early operators and shippers. Join the waitlist to secure your
            position in the network before public launch.
          </p>
          <a href={waitlistUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            Join the Waitlist
          </a>
        </div>
      </section>
    </>
  )
}
```

- [ ] **Step 3: Verify compilation**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Run dev and verify ShareConLoad page**

Open `http://localhost:3000/shareconload`. Verify:
- Hero with two CTA buttons
- Problem/solution two-column comparison
- 6-card feature grid
- 5-step stepper (horizontal on desktop, vertical on mobile)
- Who It's For two cards
- Waitlist CTA

- [ ] **Step 5: Commit**

```bash
git add app/shareconload/
git commit -m "feat: add ShareConLoad page with full feature set and waitlist CTA"
```

Note: `.env.local` is in `.gitignore` — do not commit it. Set env vars in the Vercel dashboard for production.

---

## Task 11: Contact page — form, Route Handler, Resend

**Files:**
- Create: `lib/resend.ts`
- Create: `components/forms/ContactForm.tsx`
- Create: `app/api/contact/route.ts`
- Create: `app/contact/page.tsx`

Note: Requires `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_TO_EMAIL` in `.env.local`. Add these before running.

- [ ] **Step 1: Add Resend env vars to .env.local**

Open `.env.local` and add:

```env
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_FROM_EMAIL=contact@veyqon.com
CONTACT_TO_EMAIL=justice.baloyi@gmail.com
```

Replace values with real keys from the Resend dashboard.

- [ ] **Step 2: Create Resend client**

Create `lib/resend.ts`:

```ts
import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)
```

- [ ] **Step 3: Create the Route Handler**

Create `app/api/contact/route.ts`:

```ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { resend } from '@/lib/resend'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(1, 'Company is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const parsed = schema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.errors[0].message },
      { status: 400 }
    )
  }

  const { name, company, email, message } = parsed.data

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.CONTACT_TO_EMAIL!,
    subject: `New contact form submission from ${name} — ${company}`,
    text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nMessage:\n${message}`,
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
```

- [ ] **Step 4: Create the ContactForm client component**

Create `components/forms/ContactForm.tsx`:

```tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(1, 'Company is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('idle')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    const json = await res.json()
    if (!res.ok) {
      setStatus('error')
      setErrorMessage(json.error ?? 'Something went wrong.')
      return
    }
    setStatus('success')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="form-control">
        <label className="label"><span className="label-text text-base-content">Full Name</span></label>
        <input
          {...register('name')}
          className="input input-bordered w-full"
          placeholder="Your full name"
        />
        {errors.name && <p className="text-error text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div className="form-control">
        <label className="label"><span className="label-text text-base-content">Company</span></label>
        <input
          {...register('company')}
          className="input input-bordered w-full"
          placeholder="Your company name"
        />
        {errors.company && <p className="text-error text-xs mt-1">{errors.company.message}</p>}
      </div>

      <div className="form-control">
        <label className="label"><span className="label-text text-base-content">Email</span></label>
        <input
          {...register('email')}
          type="email"
          className="input input-bordered w-full"
          placeholder="you@company.com"
        />
        {errors.email && <p className="text-error text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className="form-control">
        <label className="label"><span className="label-text text-base-content">Message</span></label>
        <textarea
          {...register('message')}
          className="textarea textarea-bordered w-full min-h-32"
          placeholder="Tell us about your operational challenges..."
        />
        {errors.message && <p className="text-error text-xs mt-1">{errors.message.message}</p>}
      </div>

      {status === 'success' && (
        <div className="alert alert-success text-sm">
          Message sent successfully. We'll be in touch shortly.
        </div>
      )}

      {status === 'error' && (
        <div className="alert alert-error text-sm">{errorMessage}</div>
      )}

      <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
        {isSubmitting ? <span className="loading loading-spinner loading-sm" /> : 'Send Message'}
      </button>
    </form>
  )
}
```

- [ ] **Step 5: Create the Contact page**

Create `app/contact/page.tsx`:

```tsx
import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — VeyQon Group',
  description: 'Get in touch with VeyQon Group to discuss your operational challenges and digital platform needs.',
}

export default function ContactPage() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Let's Discuss Your Operational Challenges
              </h1>
              <p className="text-neutral leading-relaxed">
                Whether you're looking to digitalise your logistics operations, explore platform partnerships,
                or learn more about ShareConLoad — we'd like to hear from you.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: '✉', label: 'Email', value: 'contact@veyqon.com' },
                { icon: '📍', label: 'Location', value: 'South Africa' },
                { icon: '💼', label: 'LinkedIn', value: 'VeyQon Group', href: 'https://linkedin.com' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-neutral uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-base-content hover:text-primary transition-colors">
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
```

- [ ] **Step 6: Verify compilation**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 7: Run dev and verify Contact page UI**

```bash
npm run dev
```

Open `http://localhost:3000/contact`. Verify:
- Two-column layout renders
- Form fields visible with correct DaisyUI styles
- Submitting empty form shows Zod validation errors inline
- With valid data and real Resend API key: submit sends email and shows success message

- [ ] **Step 8: Commit**

```bash
git add lib/resend.ts components/forms/ContactForm.tsx app/api/contact/ app/contact/
git commit -m "feat: add Contact page with React Hook Form, Zod validation, and Resend email"
```

---

## Task 12: Waitlist page

**Files:**
- Create: `app/waitlist/page.tsx`

- [ ] **Step 1: Create the Waitlist page**

Create `app/waitlist/page.tsx`:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join the Waitlist — ShareConLoad by VeyQon Group',
  description:
    'Secure your early access to ShareConLoad — Africa\'s digital freight marketplace connecting container operators with verified cargo.',
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
          ShareConLoad is Africa's digital freight marketplace — connecting container operators
          with verified cargo opportunities across southern and west African routes.
          Secure your early access position before public launch.
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
```

- [ ] **Step 2: Verify compilation**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 3: Run dev and verify Waitlist page**

Open `http://localhost:3000/waitlist`. Verify:
- Vertically centered layout
- Gold eyebrow, large Sora heading
- CTA button links to external waitlist URL (check `href` in DOM)
- "Already registered" secondary line present

- [ ] **Step 4: Commit**

```bash
git add app/waitlist/
git commit -m "feat: add Waitlist page linking to existing waitlist app"
```

---

## Task 13: Update CLAUDE.md

**Files:**
- Replace: `CLAUDE.md`

- [ ] **Step 1: Replace CLAUDE.md with project-specific instructions**

Replace the entire content of `CLAUDE.md` with:

```markdown
@AGENTS.md

# VeyQon Group Website

## Project
Phase 1 corporate website for VeyQon Group — 5 pages (Home, About, ShareConLoad, Contact, Waitlist).

## Stack
- Next.js 16 (App Router) — read `node_modules/next/dist/docs/` before touching framework code
- TypeScript 5 (strict)
- Tailwind CSS v4 — uses `@import "tailwindcss"`, NOT `@tailwind base/components/utilities`
- DaisyUI v4 — `@plugin "daisyui"` in globals.css, custom `veyqon` theme via `[data-theme="veyqon"]`
- React Hook Form + Zod — contact form only
- Resend — email delivery via Route Handler at `app/api/contact/route.ts`

## Brand Tokens

| Token | Value | Use |
|---|---|---|
| Primary (Gold) | `#C8A45D` | CTAs, accents, icons |
| Primary hover | `#9E7B3C` | Gold hover states |
| Base 100 (BG) | `#080B0D` | Page background |
| Base 200 | `#1C1F26` | Cards, panels |
| Base 300 | `#374151` | Borders |
| Base content | `#F5F5F3` | Primary text |
| Neutral | `#6B7280` | Secondary text |

## Typography
- Headings (h1–h4): Sora — CSS var `--font-sora`
- Body: Inter — CSS var `--font-inter`
- Apply heading font via `style={{ fontFamily: 'var(--font-sora)' }}` or via the global `h1,h2,h3,h4` rule in globals.css

## Folder Conventions
- `components/layout/` — Header, Footer (global layout)
- `components/sections/` — Home page section components (one file per section)
- `components/ui/` — Shared primitives: SectionHeading, GoldIcon
- `components/forms/` — Client form components
- `lib/` — Singleton clients (Resend)
- `app/api/` — Route Handlers only

## Environment Variables
| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend email API |
| `RESEND_FROM_EMAIL` | Verified sender address |
| `CONTACT_TO_EMAIL` | Recipient for contact submissions |
| `NEXT_PUBLIC_WAITLIST_URL` | URL of the existing ShareConLoad waitlist app |

## Phase 2 (not yet built)
- `/solutions`, `/industries`, `/insights`, `/request-demo`
- CMS (Sanity), analytics (GA, Clarity), blog system

## Design Rules
- Always use DaisyUI class names where they exist (`btn`, `card`, `input`, `alert`, etc.)
- Max width: `max-w-7xl mx-auto px-6 md:px-10`
- Section padding: `py-20 md:py-32`
- Card style: `card bg-base-200 border border-base-300`
- Gold accent borders: `border-primary/30` or `border-l-4 border-primary`
- No custom CSS — use Tailwind utilities and DaisyUI tokens
```

- [ ] **Step 2: Verify file saved correctly**

```bash
cat CLAUDE.md
```

Confirm the file contains the VeyQon-specific content, not the old `@AGENTS.md` pointer only.

- [ ] **Step 3: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md with VeyQon website project context and conventions"
```

---

## Task 14: Final build verification

**Files:** None (verification only)

- [ ] **Step 1: Run full TypeScript check**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: build completes with no errors. Note any warnings about missing env vars — these are acceptable in CI if vars are set in Vercel dashboard.

- [ ] **Step 3: Run dev and do a full page-by-page walkthrough**

```bash
npm run dev
```

Visit each route and verify:
- `http://localhost:3000` — Home: all 7 sections, gold accents, dashboard mockup
- `http://localhost:3000/about` — About: timeline, leadership card, values strip
- `http://localhost:3000/shareconload` — ShareConLoad: stepper, features grid, waitlist CTA
- `http://localhost:3000/contact` — Contact: form validation works, two-column layout
- `http://localhost:3000/waitlist` — Waitlist: external link in CTA button correct
- Mobile: resize to 375px, verify Header drawer, stacked layouts, touch targets

- [ ] **Step 4: Verify Header scroll behaviour**

On the Home page, scroll down 30px. Confirm the Header background changes from transparent to `bg-base-100/90 backdrop-blur`. Scroll back to top — confirm it returns to transparent.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore: Phase 1 complete — 5 pages, brand foundation, contact form, waitlist CTA"
```

---

## Environment Variables Reference

Before running or deploying, ensure these are set in `.env.local` (dev) and in Vercel dashboard (production):

```env
NEXT_PUBLIC_WAITLIST_URL=https://your-waitlist-app-url.vercel.app
RESEND_API_KEY=re_xxxxxxxxxxxx
RESEND_FROM_EMAIL=contact@veyqon.com
CONTACT_TO_EMAIL=justice.baloyi@gmail.com
```

The `RESEND_FROM_EMAIL` domain must be verified in the Resend dashboard before emails will deliver.
