@AGENTS.md

# VeyQon Group Website

## Project

Phase 1 corporate website for VeyQon Group — 5 pages (Home, About, ShareConLoad, Contact, Waitlist).

## Stack

- Next.js 16 (App Router) — read `node_modules/next/dist/docs/` before touching framework code
- TypeScript 5 (strict)
- Tailwind CSS v4 — uses `@import "tailwindcss"`, NOT `@tailwind base/components/utilities`
- DaisyUI v5 — `@plugin "daisyui"` in globals.css, custom `veyqon` theme via `[data-theme="veyqon"]`
- React Hook Form + Zod v4 — contact form only (`parsed.error.issues`, NOT `.errors`)
- Resend — email delivery via Route Handler at `app/api/contact/route.ts`

## Brand Tokens

| Token          | Value     | Use                  |
| -------------- | --------- | -------------------- |
| Primary (Gold) | `#C8A45D` | CTAs, accents, icons |
| Primary hover  | `#9E7B3C` | Gold hover states    |
| Base 100 (BG)  | `#080B0D` | Page background      |
| Base 200       | `#1C1F26` | Cards, panels        |
| Base 300       | `#374151` | Borders              |
| Base content   | `#F5F5F3` | Primary text         |
| Neutral        | `#6B7280` | Secondary text       |

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

| Variable                   | Purpose                                       |
| -------------------------- | --------------------------------------------- |
| `RESEND_API_KEY`           | Resend email API                              |
| `RESEND_FROM_EMAIL`        | Verified sender address                       |
| `CONTACT_TO_EMAIL`         | Recipient for contact submissions             |
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

##Github link
https://github.com/baloyiT/VeyQon.git
