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

The site uses a single light theme built around Olstral red as the brand accent. These are the existing tokens in `styles.css` — keep using them; do not introduce a parallel naming scheme.

```css
:root {
  --red: #CC0000;
  --red-dark: #990000;
  --red-light: #ff1a1a;

  --black: #0d0d0d;
  --dark: #1a1a1a;
  --white: #ffffff;
  --off-white: #f8f8f8;
  --light-gray: #f2f2f2;
  --mid-gray: #e0e0e0;

  --text: #1a1a1a;
  --text-muted: #444444;
  --text-light: #666666;
}
```

Rules:
- `--red` is the only brand accent — never introduce a second hue
- Use `--red-dark` for hover and `--red-light` sparingly for emphasis
- Surfaces alternate between `--white`, `--off-white`, and `--black` / `--dark` for inverted sections
- No dark mode — do not add `prefers-color-scheme` or `[data-theme]` blocks

## Type scale
The current site uses fixed `px` sizes in `styles.css` rather than a clamp-based token scale. When extending the site:
- Match the existing sizes used in nearby components rather than inventing new ones
- Body copy is around 15–17px, hero displays go up to ~80px
- Keep a strong size contrast between display headings and body text
- Never use text smaller than 12px
- Headings: `Barlow Condensed`, weight 700–900, often uppercase with letter-spacing

## Fonts
The site ships with locally-hosted Barlow:
- `Barlow Condensed` for headings, eyebrows, labels, and uppercase UI elements
- `Barlow` for body copy and form fields

Font files live in `fonts/`. Do not introduce additional families without removing one first — keep the typographic system tight.

## Spacing
The site does not yet have spacing tokens — values are written directly in `styles.css`. When adding new spacing:
- Stay on a 4px / 8px rhythm (4, 8, 12, 16, 24, 32, 48, 64, 96)
- Match the spacing used by nearby sections so vertical rhythm stays consistent
- Avoid one-off values like 13px or 27px

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
- Primary buttons use solid `--red`, hover to `--red-dark` (see `.btn-red`)
- Never use gradient buttons
- Outline buttons use a white or red border on inverted sections (see `.btn-outline-white`)
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
- introducing a second brand color alongside `--red`
- inventing parallel token names (e.g. `--color-primary`) instead of using the existing `--red*` / `--text*` tokens

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
