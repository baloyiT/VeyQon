# Demo Navbar & Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Demo" dropdown to the VeyQon navbar and create two Next.js pages that embed the Operator and Shipper demo HTML prototypes via full-height iframes.

**Architecture:** The two demo HTML files are copied to `public/demos/` as static assets served by Next.js. Two pages at `/demo/operator` and `/demo/shipper` render a full-height `<iframe>` loading those files, wrapped in a thin breadcrumb bar. The Header component gets a controlled dropdown for "Demo" on desktop and two indented links in the mobile drawer.

**Tech Stack:** Next.js 16 App Router, TypeScript 5, Tailwind CSS v4, DaisyUI v5

---

### Task 1: Copy HTML demo files to public/

**Files:**
- Copy: `Myasset/shareconload-operator-demo.html` → `public/demos/operator-demo.html`
- Copy: `Myasset/shareconload-shipper-demo.html` → `public/demos/shipper-demo.html`

- [ ] **Step 1: Create `public/demos/` and copy both files**

```powershell
New-Item -ItemType Directory -Force public\demos
Copy-Item Myasset\shareconload-operator-demo.html public\demos\operator-demo.html
Copy-Item Myasset\shareconload-shipper-demo.html  public\demos\shipper-demo.html
```

- [ ] **Step 2: Verify files are accessible**

Start dev server (`npm run dev`) and open:
- `http://localhost:3000/demos/operator-demo.html` — should render the full operator demo UI
- `http://localhost:3000/demos/shipper-demo.html` — should render the full shipper demo UI

- [ ] **Step 3: Commit**

```bash
git add public/demos/operator-demo.html public/demos/shipper-demo.html
git commit -m "feat: add operator and shipper demo HTML to public/demos"
```

---

### Task 2: Create the Operator Demo page

**Files:**
- Create: `app/demo/operator/page.tsx`

- [ ] **Step 1: Create `app/demo/operator/page.tsx`**

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Operator Demo — ShareConLoad | VeyQon Group',
  description:
    'Interactive demo of the ShareConLoad operator experience — list container space, manage bookings, and track payouts.',
}

export default function OperatorDemoPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b border-base-300 bg-base-200 px-6 py-3 flex items-center gap-3">
        <a
          href="/shareconload"
          className="text-sm text-neutral hover:text-primary transition-colors"
        >
          ← Back to ShareConLoad
        </a>
        <span className="text-base-300">|</span>
        <span className="text-sm font-semibold text-base-content">Operator Demo</span>
        <span className="ml-auto text-xs text-neutral bg-base-300 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
          Demo Mode
        </span>
      </div>
      <iframe
        src="/demos/operator-demo.html"
        className="w-full border-0"
        style={{ height: 'calc(100vh - 128px)' }}
        title="ShareConLoad Operator Demo"
      />
    </div>
  )
}
```

- [ ] **Step 2: Verify the page renders**

Navigate to `http://localhost:3000/demo/operator`. Expected:
- VeyQon sticky header visible at top
- Thin breadcrumb bar with "← Back to ShareConLoad | Operator Demo | DEMO MODE"
- Full operator demo UI inside the iframe (progress bar, 8 screens, Next/Back buttons)
- Demo keyboard navigation (arrow keys) works inside the iframe

- [ ] **Step 3: Commit**

```bash
git add app/demo/operator/page.tsx
git commit -m "feat: add /demo/operator page with iframe embed"
```

---

### Task 3: Create the Shipper Demo page

**Files:**
- Create: `app/demo/shipper/page.tsx`

- [ ] **Step 1: Create `app/demo/shipper/page.tsx`**

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipper Demo — ShareConLoad | VeyQon Group',
  description:
    'Interactive demo of the ShareConLoad shipper experience — find container space, book a slot, and track your shipment.',
}

export default function ShipperDemoPage() {
  return (
    <div className="flex flex-col">
      <div className="border-b border-base-300 bg-base-200 px-6 py-3 flex items-center gap-3">
        <a
          href="/shareconload"
          className="text-sm text-neutral hover:text-primary transition-colors"
        >
          ← Back to ShareConLoad
        </a>
        <span className="text-base-300">|</span>
        <span className="text-sm font-semibold text-base-content">Shipper Demo</span>
        <span className="ml-auto text-xs text-neutral bg-base-300 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">
          Demo Mode
        </span>
      </div>
      <iframe
        src="/demos/shipper-demo.html"
        className="w-full border-0"
        style={{ height: 'calc(100vh - 128px)' }}
        title="ShareConLoad Shipper Demo"
      />
    </div>
  )
}
```

- [ ] **Step 2: Verify the page renders**

Navigate to `http://localhost:3000/demo/shipper`. Expected:
- VeyQon sticky header visible at top
- Breadcrumb bar with "← Back to ShareConLoad | Shipper Demo | DEMO MODE"
- Full shipper demo UI inside the iframe with all its navigation working

- [ ] **Step 3: Commit**

```bash
git add app/demo/shipper/page.tsx
git commit -m "feat: add /demo/shipper page with iframe embed"
```

---

### Task 4: Add Demo dropdown to the Header

**Files:**
- Modify: `components/layout/Header.tsx`

- [ ] **Step 1: Replace `components/layout/Header.tsx` with the updated version**

```tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SCL_URL = 'https://www.shareconload.com/'

const navLinks = [
  { label: 'Home', href: '/', external: false },
  { label: 'About', href: '/about', external: false },
  { label: 'ShareConLoad', href: '/shareconload', external: false },
]

const demoLinks = [
  { label: 'Operator Demo', href: '/demo/operator', description: 'List space & manage bookings' },
  { label: 'Shipper Demo',  href: '/demo/shipper',  description: 'Find space & book a slot' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDemoOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 select-none">
            <Image
              src="/logo.png"
              alt="VeyQon Group"
              width={52}
              height={52}
              className="object-contain mix-blend-lighten"
            />
            <div className="flex flex-col leading-none">
              <span
                className="text-primary font-bold text-lg tracking-wider"
                style={{ fontFamily: 'var(--font-sora)' }}
              >
                VEYQON
              </span>
              <span className="text-base-content/60 text-[10px] tracking-[0.3em] uppercase">GROUP</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-base-content/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-base-content/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Demo dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDemoOpen((o) => !o)}
                className="text-sm text-base-content/70 hover:text-primary transition-colors flex items-center gap-1"
              >
                Demo
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className={`transition-transform duration-200 ${demoOpen ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {demoOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-base-200 border border-base-300 rounded-xl shadow-xl overflow-hidden z-50">
                  <div className="p-1">
                    {demoLinks.map((demo) => (
                      <Link
                        key={demo.href}
                        href={demo.href}
                        onClick={() => setDemoOpen(false)}
                        className="flex flex-col px-4 py-3 rounded-lg hover:bg-base-300 transition-colors group"
                      >
                        <span className="text-sm font-semibold text-base-content group-hover:text-primary transition-colors">
                          {demo.label}
                        </span>
                        <span className="text-xs text-neutral mt-0.5">{demo.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={SCL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Join Waitlist
            </a>
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
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-base-content/80 hover:text-primary transition-colors"
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-base-content/80 hover:text-primary transition-colors"
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          {/* Demo sub-links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-neutral uppercase tracking-widest">Demo</span>
            {demoLinks.map((demo) => (
              <Link
                key={demo.href}
                href={demo.href}
                className="text-base text-base-content/80 hover:text-primary transition-colors pl-3 border-l border-base-300 hover:border-primary"
                onClick={() => setDrawerOpen(false)}
              >
                {demo.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="flex flex-col gap-3">
          <a
            href={SCL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-full"
            onClick={() => setDrawerOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Verify desktop dropdown**

Click "Demo" in the desktop nav. A dropdown should open with:
- "Operator Demo" (subtitle: "List space & manage bookings")
- "Shipper Demo" (subtitle: "Find space & book a slot")

Clicking outside should close it. Chevron rotates when open.

- [ ] **Step 3: Verify mobile drawer**

Resize browser to mobile width. Open hamburger menu. Under the existing nav links, see "DEMO" label with "Operator Demo" and "Shipper Demo" indented below it. Tapping either should navigate and close the drawer.

- [ ] **Step 4: Commit**

```bash
git add components/layout/Header.tsx
git commit -m "feat: add Demo dropdown to navbar with Operator and Shipper links"
```
