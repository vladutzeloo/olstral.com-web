---
name: web-design-pro
description: Use this skill when designing, redesigning, polishing, or extending the Olstral website or related landing pages. Provides a high-quality web design system covering layout, typography, color, components, accessibility, and anti-patterns to avoid.
---

# Web Design Pro

A comprehensive web design system for olstral.com and related Olstral projects. Covers design tokens, typography, layout, color, components, and anti-patterns.

## Design philosophy
- Industrial precision: clean, functional, credible
- No AI-slop aesthetics
- Restrained color: one accent plus neutrals
- Mobile-first design
- Accessibility and performance are non-negotiable

## Art direction
Olstral should feel like a serious CNC and precision manufacturing company:
- modern
- exact
- reliable
- premium but not flashy

Avoid startup-generic language and visuals. The design should suggest engineering discipline, not marketing theater.

## Color system

```css
:root, [data-theme="dark"] {
  --color-bg: #0f1117;
  --color-surface: #161b22;
  --color-surface-2: #1c2230;
  --color-surface-offset: #1a2035;
  --color-border: #30363d;
  --color-divider: #21262d;

  --color-text: #e6edf3;
  --color-text-muted: #8b949e;
  --color-text-faint: #484f58;
  --color-text-inverse: #0f1117;

  --color-primary: #00b4d8;
  --color-primary-hover: #0096b5;
  --color-primary-active: #007a94;

  --color-success: #3fb950;
  --color-warning: #d29922;
  --color-error: #f85149;

  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;

  --shadow-sm: 0 1px 3px oklch(0 0 0 / 0.3);
  --shadow-md: 0 4px 12px oklch(0 0 0 / 0.4);
  --shadow-lg: 0 12px 32px oklch(0 0 0 / 0.5);

  --transition: 180ms cubic-bezier(0.16, 1, 0.3, 1);
}

[data-theme="light"] {
  --color-bg: #f6f8fa;
  --color-surface: #ffffff;
  --color-surface-2: #f0f2f5;
  --color-surface-offset: #eaedf0;
  --color-border: #d0d7de;
  --color-divider: #e5e8eb;

  --color-text: #1f2328;
  --color-text-muted: #636c76;
  --color-text-faint: #adb5bd;
  --color-text-inverse: #ffffff;

  --color-primary: #0077a8;
  --color-primary-hover: #005c82;
  --color-primary-active: #004060;
}
```

## Type scale

```css
:root {
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.75vw, 1.5rem);
  --text-xl: clamp(1.5rem, 1.2rem + 1.25vw, 2.25rem);
  --text-2xl: clamp(2rem, 1.2rem + 2.5vw, 3.5rem);
  --text-3xl: clamp(2.5rem, 1rem + 4vw, 5rem);
}
```

Rules:
- Body text should usually be `--text-base`
- Tiny labels can use `--text-xs`
- Display sizes are for hero and section titles only
- No text smaller than 12px

## Fonts
Preferred pairing:
- General Sans for headings and body
- JetBrains Mono for metrics, codes, and precision values

Example:
```html
<link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## Spacing
Use a 4px spacing system everywhere.

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
}
```

## Layout rules
- Left-align body content by default
- Center only short hero statements when justified
- Use asymmetric sections instead of repetitive 3-column layouts
- Vary section spacing to create rhythm
- Keep paragraph widths readable, around 65ch
- Make the header sticky when useful
- Design mobile first at 375px width

## Components

### Buttons
- Primary buttons use solid `--color-primary`
- Never use gradient buttons
- Ghost buttons use quiet borders and surface hover states

### Cards
- Use neutral borders or surface separation
- Never use colored side borders
- Hover can lift slightly with shadow and translateY

### Navigation
- Clear top navigation
- Mobile menu should become an overlay or drawer
- Active links should use underline or text emphasis, not noisy fills

## Anti-patterns to avoid
Never do these:
- gradient buttons
- purple-blue startup gradients
- icons inside colored circles
- centered body text everywhere
- symmetric 3-column feature grids
- thick colored side borders on cards
- generic hero copy like "unlock the power of"
- emoji as design elements
- hardcoded spacing values when tokens exist

## Accessibility
Always check:
- 4.5:1 contrast for body text
- visible keyboard focus
- one h1 per page
- proper heading order
- alt text on all images
- touch targets at least 44x44px
- reduced motion support

## Performance
- lazy-load non-critical images
- include width and height on images
- use `font-display: swap`
- keep JS lean
- avoid decorative bloat
- prefer real photos of machining, CNC, and precision manufacturing over abstract decoration

## Copy guidance
The site copy should be specific and grounded:
- say exactly what Olstral does
- mention CNC machining, precision, reliability, and manufacturing capability directly
- avoid vague slogans and empty startup phrases

Good:
Precision CNC machining for parts that need to fit right the first time.

Bad:
Empowering innovation through next-generation manufacturing excellence.
