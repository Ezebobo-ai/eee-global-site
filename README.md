# EEE Global — Marketing Website

A production-quality marketing site for **EEE Global**, built with Next.js (App Router), React, TypeScript, and Tailwind CSS. Premium dark navy-to-blue theme with glassmorphism, gradient accents, and scroll-triggered motion.

## Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS 3** with a custom design-token theme (navy / electric blue / cyan)
- **next/font** for self-hosted Space Grotesk (display), Inter (body), and JetBrains Mono (data/labels)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css        Tailwind layers + glass/gradient/animation utilities
components/
  Navbar.tsx          Sticky navbar, scroll-aware shrink, mobile menu
  Hero.tsx            Hero with animated orbit/globe SVG signature visual
  LogoStrip.tsx        Infinite-scroll trust logo ticker
  WhyChooseUs.tsx      4-up advantage grid
  AdvantageCard.tsx    Reusable advantage card
  Services.tsx          6-up services grid
  ServiceCard.tsx        Reusable service card with hover glow
  GlobalPresence.tsx     Stat band + regional office cards
  Testimonials.tsx        Client quote grid
  TestimonialCard.tsx      Reusable testimonial card
  CTABand.tsx               Closing call-to-action panel
  Footer.tsx                 Site footer
  Reveal.tsx                  Scroll-triggered fade-up wrapper (IntersectionObserver)
  LogoMark.tsx                 Shared SVG logo mark (navbar + footer)
tailwind.config.js    Color tokens, fonts, keyframes/animations
```

## Design tokens

| Token | Value | Use |
|---|---|---|
| `navy-950` | `#05070F` | Page background |
| `navy-900` | `#0A0F22` | Section tint |
| `ebl-600` | `#2563EB` | Primary electric blue |
| `cy-400` | `#22D3EE` | Cyan highlight / accent |
| Display font | Space Grotesk | Headings |
| Body font | Inter | Paragraphs |
| Mono font | JetBrains Mono | Eyebrows, stats, nav labels |

## Customizing content

All copy lives in small typed data arrays at the top of each section component (e.g. `SERVICES` in `Services.tsx`, `ADVANTAGES` in `WhyChooseUs.tsx`, `TESTIMONIALS` in `Testimonials.tsx`) — edit those arrays to update content without touching markup.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (animations disabled in `globals.css`).
- Semantic landmarks (`header`, `main`, `footer`) and heading hierarchy throughout.
- Fonts are self-hosted via `next/font` (no layout shift, no external font requests).
- Scroll reveals use a single shared `IntersectionObserver`-based `Reveal` component rather than a heavy animation library.

## Deployment

Deploy as-is to Vercel, or run `npm run build && npm start` on any Node host.
