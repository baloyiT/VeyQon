# VeyQon Group Website — Phase 1 Design Spec

**Date:** 2026-05-19  
**Scope:** Phase 1 — 5 pages (Home, About, ShareConLoad, Contact, Waitlist)  
**Stack:** Next.js 16 + TypeScript + Tailwind CSS v4 + DaisyUI v4

---

## 1. Brand & Theme Foundation

### Color Tokens (DaisyUI custom theme `veyqon`)

| Token | Value | Role |
|---|---|---|
| `primary` | `#C8A45D` | Metallic Gold — CTAs, accents |
| `primary-content` | `#080B0D` | Text on gold buttons |
| `base-100` | `#080B0D` | Executive Black — page background |
| `base-200` | `#1C1F26` | Graphite — card backgrounds |
| `base-300` | `#374151` | Border color |
| `base-content` | `#F5F5F3` | Soft White — primary text |
| `neutral` | `#6B7280` | Slate Gray — secondary text |
| `secondary` | `#9E7B3C` | Deep Gold — hover states |

### Typography

- **Heading font:** Sora (Google Font, variable) — `--font-sora`, applied to all `h1`–`h4`
- **Body font:** Inter (Google Font, variable) — `--font-inter`, applied to `<html>`
- Both loaded via `next/font/google`, self-hosted, zero layout shift

### `globals.css` Structure

```css
@import "tailwindcss";
@plugin "daisyui";
@plugin "daisyui/theme" { /* custom token map */ }
@theme {
  --font-heading: var(--font-sora);
  --font-body: var(--font-inter);
}
```

- `<html>` gets `data-theme="veyqon"` to activate the custom DaisyUI theme

---

## 2. Global Layout

### Root Layout (`app/layout.tsx`)

- Loads Sora + Inter via `next/font/google`, exposes as CSS variables
- Sets root metadata: title `"VeyQon Group"`, appropriate description
- `<html>` gets `data-theme="veyqon"`, `lang="en"`
- `<body>` gets `font-inter bg-base-100 text-base-content min-h-screen flex flex-col`
- Renders `<Header />` above and `<Footer />` below `{children}`

### Header (`components/layout/Header.tsx`)

- Sticky (`sticky top-0 z-50`), `h-20`
- Transparent on mount, transitions to `bg-base-100/90 backdrop-blur-md border-b border-base-300` on scroll
- Scroll listener via `'use client'` + `useEffect`
- **Left:** VeyQon Group wordmark in Sora, gold, text-based (SVG logo added when asset is available)
- **Center (desktop):** Nav links — Home · About · ShareConLoad · Contact
- **Right (desktop):** `btn btn-outline btn-sm` "Join Waitlist" + `btn btn-primary btn-sm` "Request Demo" (links to `/contact` in Phase 1 — `/request-demo` is Phase 2)
- **Mobile:** Hamburger icon → slide-out right drawer, full nav + both buttons, `backdrop` overlay

### Footer (`components/layout/Footer.tsx`)

- 4-column grid on desktop, 2-column on tablet, single column on mobile
- Col 1: Wordmark + brand one-liner + LinkedIn icon link (placeholder)
- Col 2: Navigation links
- Col 3: Solutions (ShareConLoad, future products listed as "Coming Soon")
- Col 4: Contact info (email, location: South Africa)
- Bottom bar: `© 2026 VeyQon Group` + Privacy · Terms (placeholder `#` links)
- Background: `bg-base-200 border-t border-base-300`

---

## 3. Home Page (`app/page.tsx`)

### Section 1 — Hero

- `min-h-screen flex items-center`, `grid lg:grid-cols-2 gap-16`
- Background: subtle radial gradient from `#1C1F26` to `#080B0D`
- **Left:** Sora `h1` "Building Digital Platforms for Africa's Operational Economy", subtext paragraph, two CTAs: `btn btn-primary btn-lg` "Explore ShareConLoad" + `btn btn-outline` "Contact Us"
- **Right:** Dark dashboard mockup — SVG/div composition with KPI cards, freight route line, metric nodes. Pure CSS, no image files.

### Section 2 — Trust Strip

- Horizontal row of 4 glass cards (`bg-base-200/60 backdrop-blur border border-base-300`)
- Items: "Built for African Operational Environments" · "Enterprise-Focused Technology" · "Logistics & Infrastructure Solutions" · "Operational Intelligence Platforms"
- Each: small gold icon + short label

### Section 3 — What We Do

- Section heading + 3-card grid
- Cards: Digital Platforms · Operational Intelligence · Systems Integration
- Each: gold icon, bold Sora title, 2-line description
- Style: `card bg-base-200 border border-base-300 p-6`

### Section 4 — Featured Product (ShareConLoad)

- Split layout `lg:grid-cols-2`
- Left: product description, 5 feature bullets with gold checkmarks, `btn btn-primary` "Explore ShareConLoad" → `/shareconload`
- Right: styled div panel mockup of a cargo matching interface

### Section 5 — Industries

- 3-card grid: Logistics & Freight · Telecom & Infrastructure · Enterprise Operations
- Each: icon + title + one sentence, `border border-base-300 hover:border-primary transition-colors`

### Section 6 — Why VeyQon

- 2×2 grid: Operational Understanding · African Context · Scalable Platforms · Practical Innovation
- Each: gold icon, bold label, 2-line description

### Section 7 — Final CTA

- Full-width centered section, subtle gold top-border accent
- Sora `h2`: "Build Smarter Operations with VeyQon Group"
- `btn btn-primary btn-lg` "Request Demo" (→ `/contact` in Phase 1) + `btn btn-outline btn-lg` "Join Waitlist"

---

## 4. About Page (`app/about/page.tsx`)

### Hero

- Centered, `py-32`
- Sora `h1`: "Building Practical Digital Infrastructure for African Industries"
- Subtext paragraph, no CTA buttons

### Company Overview

- `lg:grid-cols-2`
- Left: 3–4 narrative paragraphs on origin, focus, approach
- Right: vertical timeline — 3–4 milestones with gold left-border line and year labels

### Vision & Mission

- Two cards side by side (`grid-cols-2` → stacks mobile)
- Each: gold top-border accent, Sora heading, statement text
- Background: `bg-base-200 border border-base-300`

### Leadership

- Single featured card: Mercy McAfful Baloyi — Co-Founder & CEO
- Avatar: initials in gold circle, name in Sora, title, 2-line bio
- Grid-ready for future leaders

### Brand Values Strip

- 6 values from brand guideline: Confident · Precise · Sophisticated · Visionary · Reliable · Strategic
- Each: small gold icon + label, `bg-base-200` strip

### Bottom CTA

- Centered: "Ready to work with us?" + `btn btn-primary` "Contact Us" + `btn btn-outline` "Explore ShareConLoad"

---

## 5. ShareConLoad Page (`app/shareconload/page.tsx`)

### Hero

- Centered, `py-32`, dark radial gradient background
- Gold eyebrow: "Flagship Platform"
- Sora `h1`: "Smarter Container Utilisation Starts Here"
- Subtext about the freight marketplace
- `btn btn-primary btn-lg` "Join the Waitlist" (links to existing waitlist app, `target="_blank"`) + `btn btn-outline` "How It Works" (scroll anchor)

### Problem vs Solution

- Two-column comparison panel
- Left (`border-l-4 border-neutral`): "The Old Way" — 4 pain points
- Right (`border-l-4 border-primary`): "The VeyQon Way" — 4 solutions with gold checkmarks

### Features

- 6-card grid (`grid-cols-2 lg:grid-cols-3`)
- Cargo Matching · Capacity Visibility · Digital Coordination · Verified Network · Operational Efficiency · Freight Intelligence
- Each: gold icon, bold title, 2-line description, `card bg-base-200 border border-base-300`

### How It Works

- Horizontal stepper, `id="how-it-works"` for anchor scroll
- 5 steps: Register → List Capacity → Receive Opportunities → Coordinate Digitally → Move Freight
- Each: gold numbered circle, bold label, one-line description
- Gold connector line on desktop, vertical stack on mobile

### Who It's For

- Two cards: Container Operators + Cargo Owners/Shippers
- Brief value description per user type

### Waitlist CTA

- Full-width gold-accented section
- Heading: "Be First on the Platform"
- `btn btn-primary btn-lg` "Join the Waitlist" → existing waitlist app URL, `target="_blank"`

---

## 6. Contact Page (`app/contact/page.tsx`)

### Layout

- `lg:grid-cols-2`, `py-32`

### Left Column

- Sora `h1`: "Let's Discuss Your Operational Challenges"
- Short intro paragraph
- Contact details: Email (placeholder — use `CONTACT_DISPLAY_EMAIL` env var or hardcode before launch) · LinkedIn · Location (South Africa)
- Each: gold icon + label

### Right Column — Contact Form

- `'use client'` component using React Hook Form + Zod
- Fields: Full Name · Company · Email · Message (textarea)
- Styled: `input input-bordered w-full`, `textarea textarea-bordered`
- Submit: `btn btn-primary w-full`
- Submission via Route Handler `app/api/contact/route.ts` → Resend API
- Success: inline confirmation message, no redirect
- Error: inline error below submit button
- Requires env var: `RESEND_API_KEY`

---

## 7. Waitlist Page (`app/waitlist/page.tsx`)

- `min-h-screen flex items-center justify-center`
- Sora `h1`: "Join the ShareConLoad Waitlist"
- Paragraph explaining platform and early access benefit
- `btn btn-primary btn-lg` "Apply for Early Access" → existing waitlist app (external URL, `target="_blank"`)
- Secondary line: "Already registered? Check your email for updates."
- No form — delegates entirely to the existing standalone waitlist app

---

## 8. Folder Structure

```
app/
├── layout.tsx
├── page.tsx                   # Home (7 sections)
├── globals.css
├── about/page.tsx
├── shareconload/page.tsx
├── contact/page.tsx
├── waitlist/page.tsx
└── api/contact/route.ts       # Resend Route Handler

components/
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
├── sections/                  # Home page sections
│   ├── Hero.tsx
│   ├── TrustStrip.tsx
│   ├── WhatWeDo.tsx
│   ├── FeaturedProduct.tsx
│   ├── Industries.tsx
│   ├── WhyVeyQon.tsx
│   └── FinalCTA.tsx
└── ui/
    ├── SectionHeading.tsx     # Reusable h2 + subtext block
    └── GoldIcon.tsx           # Icon wrapper with gold colour

lib/
└── resend.ts                  # Resend client init
```

---

## 9. Dependencies to Install

```
npm install daisyui resend react-hook-form zod @hookform/resolvers
```

---

## 10. Environment Variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend email API key for contact form |
| `RESEND_FROM_EMAIL` | Sender address (must be verified in Resend) |
| `CONTACT_TO_EMAIL` | Recipient address for contact form submissions |
| `NEXT_PUBLIC_WAITLIST_URL` | URL of the existing ShareConLoad waitlist app |

---

## 11. CLAUDE.md Updates

Replace current CLAUDE.md content with:
- Project: VeyQon Group corporate website, Phase 1
- Stack: Next.js 16 + TypeScript + Tailwind v4 + DaisyUI v4
- Brand tokens (gold/black palette, Sora/Inter fonts)
- Phase 1 scope: 5 pages only
- Component conventions: sections/ for home sections, layout/ for Header/Footer, ui/ for shared primitives
- Note: Next.js 16 has breaking changes — always read `node_modules/next/dist/docs/` before writing framework code
- Forms: React Hook Form + Zod + Resend for Contact; Waitlist links out to existing app

---

## 12. Out of Scope (Phase 2+)

- `/solutions`, `/industries`, `/insights`, `/request-demo` routes
- CMS integration (Sanity)
- Analytics (Google Analytics, Microsoft Clarity)
- Blog/Insights system
- Interactive dashboard demos
- Client portal
