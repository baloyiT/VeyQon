# VeyQon Group Website Design Document

## Project Overview

### Project Name
VeyQon Group Corporate Website

### Objective
Design and develop a modern corporate website for VeyQon Group that positions the company as a serious African operational technology and digital infrastructure business.

The website must:

- Establish trust and credibility
- Clearly communicate VeyQon Group services and products
- Introduce ShareConLoad as a flagship platform
- Capture leads and early platform interest
- Support future scalability
- Provide a strong executive-level digital presence

---

# Technology Stack

## Frontend

- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- DaisyUI

## Deployment

- Vercel

## Optional Supporting Services

### Forms
- Resend
- React Hook Form

### CMS
- Sanity CMS (optional future phase)

### Analytics
- Google Analytics
- Microsoft Clarity

---

# Design Principles

## Core Brand Personality

The website should feel:

- Executive
- Professional
- Strategic
- Operationally intelligent
- Corporate-modern
- African but globally credible

---

## Avoid

- Startup gimmicks
- Over-animation
- Excessive gradients
- Crypto aesthetics
- Cartoon visuals
- Bright playful palettes
- Overloaded interfaces

---

# Design Language

## Visual Identity

### Theme Style
Dark enterprise interface with clean modern contrast.

### Design Inspiration
Combination of:

- Enterprise SaaS
- Infrastructure intelligence platforms
- Logistics control systems
- Executive consulting websites

---

# Color System

## Primary Colors

### Primary Background
#0B1120

### Secondary Background
#111827

### Surface Card
#1F2937

### Primary Text
#F9FAFB

### Secondary Text
#9CA3AF

### Accent Color
#2563EB

### Accent Hover
#1D4ED8

### Border Color
#374151

---

# Typography

## Font Family

### Primary Font
Inter

### Alternative Fonts
- Manrope
- DM Sans

---

## Typography Scale

### Hero Heading
text-5xl md:text-7xl
font-bold
leading-tight

### Section Heading
text-3xl md:text-5xl
font-bold

### Body Text
text-base md:text-lg
leading-relaxed

### Small Text
text-sm text-gray-400

---

# Layout System

## Max Width
max-w-7xl mx-auto

---

## Spacing

### Section Padding
py-20 md:py-32

### Container Padding
px-6 md:px-10

### Card Padding
p-6 md:p-8

---

# Website Architecture

## Public Routes

### Home
/

### About
/about

### Solutions
/solutions

### ShareConLoad
/shareconload

### Industries
/industries

### Insights
/insights

### Contact
/contact

### Request Demo
/request-demo

### Waitlist
/waitlist

---

# Application Structure

## Recommended Folder Structure

```bash
app/
│
├── layout.tsx
├── page.tsx
├── globals.css
│
├── about/
│   └── page.tsx
│
├── solutions/
│   └── page.tsx
│
├── shareconload/
│   └── page.tsx
│
├── industries/
│   └── page.tsx
│
├── insights/
│   └── page.tsx
│
├── contact/
│   └── page.tsx
│
├── request-demo/
│   └── page.tsx
│
└── waitlist/
    └── page.tsx

components/
│
├── layout/
├── sections/
├── ui/
├── forms/
└── shared/

lib/

styles/

public/
│
├── images/
├── icons/
└── logos/
```

---

# Global Layout Design

## Header

### Behavior
- Sticky navigation
- Transparent on top
- Solid background on scroll

---

## Navigation Items

- Home
- About
- Solutions
- ShareConLoad
- Industries
- Insights
- Contact

---

## Right Side Actions

### Primary Button
Request Demo

### Secondary Button
Join Waitlist

---

# Header Styling

## Desktop

Height:
- h-20

Background:
- bg-[#0B1120]/80 backdrop-blur-md

Border:
- border-b border-gray-800

---

## Mobile Navigation

### Style
Slide-out right drawer.

### Features
- Smooth animation
- Full-screen overlay
- Large touch-friendly menu items

---

# Footer Design

## Sections

### Column 1
Company overview.

### Column 2
Navigation links.

### Column 3
Solutions.

### Column 4
Contact information.

---

## Footer Bottom

- Copyright
- Privacy Policy
- Terms
- Social links

---

# HOME PAGE DESIGN

# SECTION 1 — HERO

## Layout

Two-column layout.

### Left Side
Text content.

### Right Side
Interactive dashboard visual.

---

## Hero Heading

Building Digital Platforms for Africa’s Operational Economy

---

## Hero Supporting Text

VeyQon Group develops operational technologies and digital platforms that improve visibility, coordination, and execution across logistics, infrastructure, and enterprise operations.

---

## CTA Buttons

### Primary
Explore Solutions

### Secondary
Request Demo

---

## Hero Visual Direction

### Main Visual
Dark operational command dashboard.

Include:

- Freight movement
- Infrastructure maps
- KPI cards
- Operational metrics
- Container tracking visualisation
- Connected nodes

---

## Hero Styling

### Layout Classes

```tsx
<section className="min-h-screen flex items-center">
```

---

### Grid

```tsx
<div className="grid lg:grid-cols-2 gap-16 items-center">
```

---

# SECTION 2 — TRUST STRIP

## Layout
Horizontal trust indicators.

---

## Content

- Built for African operational environments
- Enterprise-focused technology
- Logistics and infrastructure solutions
- Operational intelligence platforms

---

## Style

Dark glass-style cards.

---

# SECTION 3 — WHAT WE DO

## Layout
Three-card grid.

---

## Card Design

### Style

```tsx
card bg-base-200 border border-base-300
```

---

## Cards

### Digital Platforms
Operational systems that improve visibility and execution.

### Operational Intelligence
Data-driven operational decision support.

### Systems Integration
Connecting fragmented systems and workflows.

---

# SECTION 4 — FEATURED PRODUCT

## Product
ShareConLoad

---

## Layout
Split layout.

### Left
Product description.

### Right
Platform UI mockup.

---

## Features List

- Cargo matching
- Capacity visibility
- Digital coordination
- Verified network
- Operational optimisation

---

## CTA
Explore ShareConLoad

---

# SECTION 5 — INDUSTRIES

## Layout
Responsive card grid.

---

## Cards

### Logistics & Freight

### Telecom & Infrastructure

### Enterprise Operations

---

# SECTION 6 — WHY VEYQON

## Layout
Alternating content blocks.

---

## Points

### Operational Understanding

### African Context

### Scalable Platforms

### Practical Innovation

---

# SECTION 7 — FINAL CTA

## Heading
Build Smarter Operations with VeyQon Group

---

## Buttons
- Request Demo
- Join Waitlist

---

# ABOUT PAGE

# HERO

## Heading
Building Practical Digital Infrastructure for African Industries

---

## Supporting Text

VeyQon Group develops operational platforms and enterprise technologies that improve coordination, visibility, and operational efficiency across complex business environments.

---

# COMPANY OVERVIEW SECTION

## Layout
Two-column layout.

### Left
Narrative text.

### Right
Visual timeline or company visual.

---

# VISION & MISSION

## Layout
Two-card section.

---

## Vision
Enable smarter and more connected operational ecosystems across Africa.

---

## Mission
Build practical digital platforms that solve real operational challenges.

---

# LEADERSHIP SECTION

## Card Layout
Executive profile cards.

---

## Featured Leader

### Mercy McAfful Baloyi
Co-Founder & Chief Executive Officer

Responsible for strategic direction, product conceptualisation, platform development, and operational execution.

---

# SOLUTIONS PAGE

# HERO

## Heading
Operational Technology Solutions Built for Real-World Execution

---

# SOLUTION CATEGORIES

## Grid Layout

### Freight & Logistics Platforms

### Operational Management Systems

### Systems Integration

### Data & Intelligence

---

# SHARECONLOAD PAGE

# HERO

## Heading
Smarter Container Utilisation Starts Here

---

## Supporting Text

A digital freight marketplace connecting container Operators with verified cargo opportunities across Africa.

---

# PROBLEM SECTION

## Layout
Two-column comparison.

### Left
Traditional fragmented operations.

### Right
Modern connected coordination.

---

# FEATURES SECTION

## Card Grid

### Cargo Matching

### Capacity Visibility

### Digital Coordination

### Verified Network

### Operational Efficiency

### Freight Intelligence

---

# HOW IT WORKS SECTION

## Horizontal Stepper

### Step 1
Register

### Step 2
List Capacity

### Step 3
Receive Opportunities

### Step 4
Coordinate Digitally

### Step 5
Move Freight

---

# WAITLIST SECTION

## Form Fields

- Company Name
- Full Name
- Email
- Country
- Fleet Size
- Industry

---

# INSIGHTS PAGE

# HERO

## Heading
Operational Intelligence & Industry Insights

---

# BLOG GRID

## Layout
Three-column responsive layout.

---

## Card Elements

- Cover image
- Category
- Title
- Excerpt
- Read more

---

# CONTACT PAGE

# LAYOUT

Two-column layout.

---

## Left Side

### Heading
Let’s Discuss Your Operational Challenges

### Details
- Email
- Phone
- LinkedIn
- Business location

---

## Right Side
Contact form.

---

# COMPONENT DESIGN SYSTEM

# BUTTONS

## Primary Button

```tsx
btn btn-primary
```

---

## Secondary Button

```tsx
btn btn-outline
```

---

## Large CTA Button

```tsx
btn btn-primary btn-lg
```

---

# CARDS

## Standard Card

```tsx
card bg-base-200 border border-base-300 shadow-xl
```

---

# INPUTS

## Input Styling

```tsx
input input-bordered w-full
```

---

# TEXTAREA

```tsx
textarea textarea-bordered
```

---

# RESPONSIVE DESIGN

## Mobile First

Design priorities:

- Readability
- Strong spacing
- Large tap targets
- Simple navigation
- Fast loading

---

# PERFORMANCE REQUIREMENTS

## Core Requirements

- Lighthouse score above 90
- Fast initial page load
- Optimised images
- Lazy loading where appropriate
- SEO-friendly structure
- Semantic HTML

---

# SEO REQUIREMENTS

## Meta Structure

Each page should include:

- Unique title
- Meta description
- Open Graph tags
- Twitter cards
- Structured metadata

---

## SEO Focus Areas

Target:

- African logistics technology
- Digital freight marketplace
- Container coordination platform
- Operational intelligence systems
- Enterprise operational platforms

---

# ACCESSIBILITY REQUIREMENTS

## Must Include

- Proper heading hierarchy
- Keyboard accessibility
- Accessible color contrast
- Semantic HTML
- ARIA labels where needed

---

# ANIMATION GUIDELINES

## Animation Style
Subtle and professional.

---

## Recommended Effects

- Fade-in sections
- Hover transitions
- Smooth scrolling
- Card elevation hover

---

## Avoid

- Excessive motion
- Distracting effects
- Heavy parallax
- Overly animated backgrounds

---

# IMAGE STRATEGY

## Recommended Visual Assets

### Infrastructure
- Ports
- Roads
- Telecom towers
- Freight operations

### UI Mockups
- Dashboards
- Analytics panels
- Operational systems

### Abstract Graphics
- Network visualisations
- Data flow diagrams
- Operational maps

---

# DEVELOPMENT PHASES

# PHASE 1

## Core Launch

Pages:

- Home
- About
- ShareConLoad
- Contact
- Waitlist

Features:

- Lead capture
- Responsive design
- SEO setup
- Analytics integration

---

# PHASE 2

## Expansion

Add:

- Insights/blog system
- CMS integration
- Case studies
- Enhanced animations
- Dashboard demos

---

# PHASE 3

## Advanced Platform Presence

Add:

- Client portal
- Product documentation
- Interactive demos
- Enterprise onboarding flows

---

# FINAL CREATIVE DIRECTION

The final website should feel like:

“A serious operational technology company building scalable digital infrastructure solutions for African industries.”

The experience must communicate:

- Trust
- Capability
- Strategic thinking
- Operational intelligence
- Enterprise readiness
- Long-term vision

The design should balance:

- Corporate credibility
- Modern technology aesthetics
- Clean usability
- Strong business positioning
- Scalable product identity

