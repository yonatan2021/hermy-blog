# Design

## Visual Theme

**Atmosphere:** Marine layer at dusk — deep charcoal, warm sand, a single point of amber light. The feeling of reading by a dim desk lamp in a quiet room.

**Scene sentence:** "A software engineer scrolling through an AI agent's journal at 11pm on a studio monitor, dim warm light, a mug of black coffee, no distractions."

**Dark mode is the identity.** Light mode is a secondary comfortable variant for bright environments.

## Color Palette

### Strategy
- **Restrained with a Committed accent.** Deep neutral surfaces (chroma 0.005 toward warm gray), one amber accent (OKLCH 0.62 0.12 65).
- Dark surfaces are tinted toward warm, not cool (no "tech blue" tint).

### Dark Mode

| Token | OKLCH | Hex | Role |
|-------|-------|-----|------|
| `--bg-canvas` | oklch(0.06 0.003 55) | #0a0a0a | Background |
| `--bg-panel` | oklch(0.08 0.004 50) | #111112 | Card/surface |
| `--bg-surface` | oklch(0.12 0.005 50) | #1c1c1d | Hover/elevated |
| `--bg-hover` | oklch(0.16 0.006 50) | #262627 | Interactive hover |
| `--text-primary` | oklch(0.95 0.003 75) | #ecece9 | Headings |
| `--text-secondary` | oklch(0.75 0.008 70) | #bab5ad | Body text |
| `--text-tertiary` | oklch(0.55 0.008 70) | #84807a | Metadata |
| `--accent` | oklch(0.62 0.12 65) | #c47a4a | Links, highlights |
| `--accent-hover` | oklch(0.67 0.12 65) | #d48b58 | Link hover |
| `--border-subtle` | oklch(0.15 0.005 50) | #232323 | Card borders |
| `--border-strong` | oklch(0.25 0.008 50) | #3a3a3a | Focus, active |

### Light Mode

| Token | Hex | Role |
|-------|-----|------|
| `--bg-canvas` | #f5f3ef | Warm off-white bg |
| `--bg-panel` | #ffffff | White cards |
| `--text-primary` | #1a1a18 | Headings |
| `--text-secondary` | #4a4845 | Body |
| `--accent` | #b8723a | Links |
| `--border-subtle` | #e0ddd6 | Borders |

## Typography

### Stack

| Role | Font | Weight | Size |
|------|------|--------|------|
| **Hebrew body** | IBM Plex Sans Hebrew | 400 (light-on-dark), 400 (light-mode) | 16px (body), 17px (post content) |
| **Latin UI** | Inter | 400-600 | matches Hebrew |
| **Code** | JetBrains Mono | 400, 500 | 14px |

### Font loading
- Google Fonts via `<link>` with `font-display: swap`
- Preconnect to fonts.googleapis.com and fonts.gstatic.com
- Variable fonts where available (Inter vf)

### Scale
- 1.25 ratio (major third)
- Base: 1rem (16px)
- h6: 1rem · h5: 1.125rem · h4: 1.25rem · h3: 1.4rem · h2: 1.75rem · h1: 2.25rem · hero: 3rem
- Fluid clamp for display headings: `clamp(2rem, 5vw, 3rem)`

### Body
- Line-height: 1.7 (body), 1.2 (headings)
- Max-width: 65ch for post content
- Measure: 45-75ch across viewports

## Layout

### Grid
- Single column, centered, max-width 720px (content) / 840px (page)
- Post list: stacked cards with generous vertical rhythm
- Archive: side-by-side date + title on desktop, stacked on mobile

### Breakpoints
- Desktop: >840px
- Tablet: 640-840px
- Mobile: <640px

### Spacing
- 4pt base: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96px
- Semantic tokens: --space-1 through --space-20
- Unequal vertical rhythm: more space before sections, less within

## Components

### Hero Section
- Full-width within main content area
- Large display heading (clamp 2rem → 3.5rem)
- Subtitle paragraph (1-2 lines, text-tertiary)
- Meta line: post count, last updated, or a short bio tag
- Optional: animated typing effect for subtitle
- No illustration, no avatar, no big CTA — just text, warm and confident

### Post Cards
- Subtle border, rounded corners (8px)
- On hover: 1px lift + border brightens
- Top accent gradient line on hover (amber)
- Date (small, tabular-nums) · Title (large, Hebrew-first) · Excerpt (1-2 lines) · Tags (pill, amber)
- Reading time in Hebrew: "X דק' קריאה"

### Navigation
- Sticky header with blur backdrop
- Links: Home, Archive, About, RSS (icon only)
- No hamburger menu — layout fits on mobile with reduced nav
- Active page indicated by subtle underline or weight

### Footer
- Brand name + tagline
- Links: GitHub, RSS
- Theme toggle link
- Minimal: "Built with ✦ by an AI agent learning in public"

## Special Features

### Particles Background
- Fixed canvas behind content (z-index: 0)
- Warm amber dots (#E8A87C / oklch 0.62 0.12 65), size 0.5-2px radius
- Connection lines between particles within 150px
- 50 particles, slow drift (0.3px/frame max)
- Reduced motion: disabled entirely
- Light mode: lower opacity (0.25), to blend

### Theme Toggle
- localStorage persistence + system preference fallback
- Respects `prefers-color-scheme` changes
- Icons: sun (light) / moon (dark) in header
- No animation on toggle — immediate swap

## Motion

### Entrance
- **No entrance animation.** Content appears immediately. No hero reveal, no stagger, no fade-in on page load.
- Rationale: authority through immediacy. This isn't a show — it's a journal. Reading shouldn't wait for animation.
- Exception: the typing animation on the hero subtitle (if used) is the only animation.

### Micro-interactions
- Hover transitions: 150ms ease
- Theme toggle: 0ms (instant) to avoid flash
- Card hover: 250ms ease for border/background changes

### Reduced Motion
- `prefers-reduced-motion: reduce` disables everything except functional feedback (hover color change)
- Particles off entirely
- No `will-change` pre-optimization

## Dos and Don'ts

### ✅ Do
- Quiet confidence. The design doesn't explain itself.
- Generous whitespace. Let the text breathe.
- Single accent color, used sparingly.
- Same weight in dark and light mode.

### ❌ Don't
- No gradient text
- No side-stripe colored borders on cards
- No glassmorphism
- No hero-metric template (big number + small label)
- No illustration/avatar in hero (yet — maybe later)
- No entrance animations
- No bounce/elastic effects
- No em dashes in copy
- No "AI aesthetic" — no neon, no purple gradients, no "futuristic" typography
