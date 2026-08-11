---
name: ui-ux-pro
description: >
  Advanced UI/UX design and frontend craftsmanship skill for building ultra-premium, modern, and visually stunning web interfaces.
  Activate this skill whenever designing, styling, refactoring, or building web components, layouts, color palettes, typography systems, animations, micro-interactions, responsive views, or full user interfaces. Trigger on mentions of: UI, UX, ui ux, design system, color palette, typography, layout, CSS, Tailwind, animation, motion, glassmorphism, dark mode, responsive design, hero section, navigation, card design, form design, modal, accessibility, visual hierarchy, polished, client-ready, or any frontend design request.
---

# UI & UX Pro Skill

## Overview

This skill establishes advanced, agency-grade UI/UX design standards and frontend craftsmanship. Whenever designing or implementing web interfaces, follow this comprehensive framework to produce visually captivating, accessible, and user-centric web applications.

---

## 1. Visual Aesthetics & Design Philosophy

### Visual Impact & First Impressions
- **The "WOW" Factor**: Every interface must feel bespoke, high-end, and intentionally crafted. Avoid raw browser defaults, basic borders, and default system colors.
- **Layering & Depth**: Use elevation layers, subtle multi-drop shadows, glowing ambient accents, backdrop blurs (glassmorphism), and border highlights (`1px solid rgba(...)`).
- **Surface Texture**: Combine rich dark tones or warm luxury light tones with subtle contrast overlays, radial lighting gradients, and smooth card transitions.

### Color Palette Strategy
- **Palette Rules**: Never use raw CSS base colors (`red`, `blue`, `#ff0000`). Define HSL-based or custom Hex CSS variables (`--bg-primary`, `--surface-card`, `--accent-brand`, `--text-primary`, `--border-subtle`).
- **Dark Mode vs Light Mode Luxury**:
  - *Dark Luxury*: Deep obsidian `#0D0F12`, midnight navy `#0A1128`, charcoal `#121316` paired with metallic gold `#D4AF37`, vibrant cyan `#00F2FE`, or emerald accents.
  - *Warm Light Luxury*: Warm ivory `#F7F5F0`, alabaster `#FAF8F5`, soft cream `#F0EDE6` paired with deep charcoal `#1A1A1A`, terracotta `#C86B45`, or bronze.
- **Gradients**: Use multi-stop linear and radial gradients for text headlines (`background-clip: text`), hero background ambient glows, and interactive button overlays.

### Typography & Text Hierarchy
- **Font Selection**:
  - *Display / Luxury / Editorial*: Google Fonts like `Cormorant Garamond`, `Playfair Display`, `Syne`, or `Cinzel`.
  - *Modern / Tech / Clean*: `Plus Jakarta Sans`, `Inter`, `Outfit`, `Space Grotesk`, `DM Sans`.
- **Typographic Scale & Contrast**:
  - Establish a crisp hierarchy: Display (64–120px) → H1 (40–56px) → H2 (28–36px) → H3 (20–24px) → Body (15–17px) → Small/Caption (12–14px).
  - Use `clamp()` for responsive fluid typography (e.g., `font-size: clamp(2.5rem, 6vw, 5rem)`).
  - Pair weights deliberately (e.g., light 300 display title paired with bold 700 uppercase tracking-widest eyebrow badge).

---

## 2. Layout, Grid & Responsiveness

### Spatial Grid System
- **8px Grid Standard**: Align margins, paddings, gaps, and component sizes to multiples of 8px (4px micro-spacing, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px).
- **Whitespace & Breathing Room**: Give key elements generous breathing space. Cluttered layouts destroy perceived luxury.

### Fluid & Grid Layouts
- **CSS Grid & Flexbox**: Prefer fluid CSS Grid (`grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))`) and Flexbox layouts over hardcoded pixels.
- **Responsive Breakpoints**: Design mobile-first (375px → 640px → 768px → 1024px → 1280px → 1536px). Ensure no horizontal overflow at any width.
- **Touch Targets**: Mobile interactive elements (buttons, inputs, menu links) must have minimum 44×44px touch targets.

---

## 3. Motion, Animation & Interaction Design

### Micro-Animations & Dynamic States
- **Transitions**: Smooth state transitions on all interactive elements (`transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`).
- **Hover Effects**: Subtitle scale shifts (`scale(1.02)`), card border glow activation, image zoom on hover (`scale(1.08)` in overflow hidden wrapper), dynamic shadow expansion.
- **Scroll Reveal & Parallax**: Utilize Framer Motion, IntersectionObserver, or CSS scroll-driven animations for staggered entrance reveals, sticky section pins, and subtle parallax background movements.

### Accessibility & Reduced Motion
- Always wrap complex keyframe animations or layout transforms in `@media (prefers-reduced-motion: reduce)` to support users who prefer static UI.

---

## 4. Component Craftsmanship & Design Tokens

### Core Design Tokens Template (CSS / Tailwind)
```css
:root {
  /* Color Tokens */
  --color-bg-main: #0B0D10;
  --color-bg-surface: #13161C;
  --color-bg-card: #1A1E26;
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-hover: rgba(255, 255, 255, 0.2);
  --color-primary: #3B82F6;
  --color-accent: #8B5CF6;
  --color-text-main: #F9FAFB;
  --color-text-muted: #9CA3AF;
  
  /* Shadows & Glass */
  --shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  --glass-bg: rgba(19, 22, 28, 0.7);
  --glass-blur: blur(16px);
  
  /* Typography */
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
  
  /* Radii */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;
}
```

### Component Guidelines
- **Buttons**: Primary (solid with glow/hover lift), Secondary (glass/border with hover glow), Ghost (minimal text with background hover), Icon (circular/square with subtle ring).
- **Cards**: Layered surface, subtle outer border, clear image aspect ratio (16:9, 4:3, or 1:1), crisp badge tag, title, body excerpt, and distinct call-to-action link.
- **Header & Navigation**: Glassmorphic sticky header (`backdrop-filter: blur(12px)`), logo brand mark, active indicator links, mobile slide-over menu drawer, primary conversion CTA.
- **Forms & Inputs**: Floating labels or crisp top labels, clear input focus rings (`ring-2 ring-primary/50`), helper text, validation success/error states, context-aware placeholders.
- **Modals & Overlays**: Dark backdrop blur backdrop (`bg-black/60 backdrop-blur-md`), smooth scale-up reveal animation, accessible escape key & backdrop click handling.

---

## 5. UI/UX Quality Verification Checklist

Before completing any frontend or UI task, verify against this 10-point quality checklist:

1. [ ] **Typography**: High quality web font imported, font scale hierarchy is clear, text is legible.
2. [ ] **Color Harmony**: Palette is cohesive, WCAG AA contrast passes for text elements.
3. [ ] **Spacing Consistency**: Padding & margins follow standard grid increments without layout jumps.
4. [ ] **Interactive Feedback**: Every button, link, card, and input has hover, focus-visible, and active states.
5. [ ] **Responsive Design**: Tested across mobile (375px), tablet (768px), and desktop (1280px+).
6. [ ] **Animations & Performance**: Motion is smooth (60fps), non-blocking, and respects `prefers-reduced-motion`.
7. [ ] **Glass & Depth**: Drop shadows, borders, and backdrop blurs enhance depth without clutter.
8. [ ] **Empty & Loading States**: Skeleton screens, spinners, or elegant fallback states implemented where data loads.
9. [ ] **Accessibility (a11y)**: Semantic HTML tags (`<nav>`, `<main>`, `<article>`, `<header>`, `<footer>`), `aria-*` attributes present, keyboard focus states visible.
10. [ ] **Perceived Brand Value**: The design feels expensive, intentional, and production-ready for client delivery.
