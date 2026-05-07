# Claude Project Instructions — olstral.com-web

This is the Olstral company website (olstral.com). It is a static HTML/CSS/JS site deployed on Netlify.

## Project Structure
- `index.html` — main page
- `styles.css` — all styles
- `script.js` — interactions
- `fonts/` — local font files
- `.claude/skills/` — Claude Code skill definitions

## Active Skills
Load these skills when working on this repo:
- `.claude/skills/realistic-speech` — for any voice/speech output or TTS copy
- `.claude/skills/web-design-pro` — design system, tokens, and anti-patterns for all UI work

## Key Rules
- This is a static site — no server-side code
- Deployed via Netlify (see `netlify.toml`)
- Keep all styles in `styles.css` using CSS custom properties (tokens defined in `:root`)
- No inline styles except for dynamic JS-driven values
- Mobile-first responsive design
- Single light theme — the site does not currently support dark mode
