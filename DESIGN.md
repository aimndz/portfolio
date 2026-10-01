---
name: Amiel Ian Mendoza Portfolio
description: Architectural and monochromatic developer portfolio built with technical drafting precision and razor-sharp geometry.
colors:
  obsidian-void: "#000101"
  warm-bone: "#fafbf8"
  charcoal-hairline: "#282424"
  silver-ash: "#a7a7a7"
  vellum-cream: "#efebe5"
  stone-hairline: "#d8d3ce"
  graphite-muted: "#575352"
  off-black: "#0b0b0a"
typography:
  display:
    fontFamily: "var(--font-sans), Arial, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "var(--font-sans), Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "var(--font-sans), Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "var(--font-sans), Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-mono), Courier New, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.warm-bone}"
    textColor: "{colors.obsidian-void}"
    rounded: "{rounded.none}"
    padding: "0px 16px"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.silver-ash}"
    rounded: "{rounded.none}"
    padding: "0px 16px"
    height: "32px"
  card:
    backgroundColor: "{colors.obsidian-void}"
    textColor: "{colors.warm-bone}"
    rounded: "{rounded.none}"
    padding: "16px"
  nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.silver-ash}"
    rounded: "{rounded.none}"
    height: "48px"
---

# Design System: Amiel Ian Mendoza Portfolio

## Overview

**Creative North Star: "The Technical Drafter's Folio"**

The portfolio balances full-stack software engineering rigor with the deliberate craft of an artist. It operates not as a marketing landing page or a bubbly SaaS dashboard, but as a disciplined digital blueprint—a technical folio bound by 1px hairline rules, pure contrast, and razor-sharp geometries. Every boundary is drawn with intentionality; nothing floats on vague drop shadows or arbitrary blur effects.

Density is calibrated for high-speed recruiter scannability while preserving tactile character. White space functions as architectural breathing room rather than empty void. Content is compartmentalized inside clear gridlines and bordered panels, punctuated by subtle drafting cues: hairline corner crop marks framing visual work, monospace metadata lines with slash delimiters, and 45-degree rotated diamond timeline nodes.

**Key Characteristics:**
- **Extreme Monochromatic Contrast:** Obsidian Void (#000101) anchored against Warm Bone White (#fafbf8).
- **Hairline Containment:** Surfaces, dividers, and interactive states are demarcated by 1px solid hairline borders (#282424 dark, #d8d3ce light).
- **Zero-Radius Brutalism:** Strict 0px corner geometry across containers, buttons, cards, and headers.
- **Typographic Duality:** Clean sans-serif headings and body prose paired with technical uppercase monospace for metadata, coordinates, navigation, and tags.
- **Tactile Micro-Feedback:** Instant, snappy transitions (150ms) with slight vertical micro-shifts (-1px) rather than sluggish ambient swells.

## Colors

The palette is stark, timeless monochrome, leaning on subtle warm undertones to prevent eye fatigue while preserving absolute architectural clarity.

### Primary
- **Warm Bone White** (`#fafbf8`): Serves as the primary foreground text and highlight accent in dark mode, and flips to the canvas background in light mode. Used for high-emphasis typography, primary action CTA fills, and active indicators.

### Secondary
- **Silver Ash** (`#a7a7a7`): Mid-tone neutral used for secondary copy, inactive navigation items, technical captions, and supporting timestamps. Provides readable contrast without competing with primary headings.

### Neutral
- **Obsidian Void** (`#000101`): Pitch black canvas base in dark mode, primary solid ink in light mode. Deep and immersive with zero blue light bleed.
- **Charcoal Hairline** (`#282424`): The foundational 1px border color in dark mode. Outlines header grids, cards, separator rules, and interactive button frames.
- **Stone Hairline** (`#d8d3ce`): The 1px border counterpart in light mode, mirroring architectural pencil guidelines on drafting paper.
- **Off-Black Surface** (`#0b0b0a`): Low-elevation surface fill for muted containers, subtle hover fills, and nested toolbars.
- **Vellum Cream** (`#efebe5`): Light mode muted fill for hover states and secondary container backgrounds.
- **Graphite Muted** (`#575352`): Low-emphasis metadata text, inactive timeline rules, and icon accents.

### Named Rules
**The Hairline Boundary Rule.** Colors are bounded by explicit 1px rules, never by ambient gradient bleeds or soft drop shadows. Structural separation is structural, not atmospheric.

**The Absolute Contrast Rule.** Interactive action elements (such as the primary contact button) use full inverted polarity: solid Warm Bone background (#fafbf8) with Obsidian Void text (#000101) in dark mode, and vice-versa in light mode.

## Typography

**Display & Body Font:** Geist Sans (fallback: Arial, sans-serif)  
**Label & Mono Font:** Geist Mono (fallback: "Courier New", monospace)

**Character:** A surgical pairing between neutral modern grotesk sans-serif for comfortable reading and mechanical monospace for precision technical metadata, tags, and navigation.

### Hierarchy
- **Display** (600 SemiBold, 1.875rem / 30px, line-height 1): Hero name and primary brand heading in the profile hero.
- **Headline** (600 SemiBold, 1.5rem / 24px, line-height 1.1): Section titles accompanied by trailing hairline separators.
- **Title** (500 Medium, 1.125rem / 18px, line-height 1.25): Project titles, experience roles, and dialog headings.
- **Body** (400 Regular, 0.875rem / 14px, line-height 1.625, max-width 65ch): Biographical about text, project narrative summaries, and descriptive copy.
- **Label** (500 Medium, 0.6875rem / 11px, line-height 1.2, tracking 0.05em, uppercase): Navigation headers, dates, technology badges, location/email links, and social links.

### Named Rules
**The Metadata Is Monospace Rule.** Any data point representing a timestamp, file size, route, category, technology name, coordinate, or status indicator must be set in uppercase Geist Mono at 11px.

**The Underline Highlight Rule.** Inline emphasized text in body prose receives a solid bottom hairline border (`border-b border-border text-foreground`), never colored marker fills or bold italic treatments.

## Layout

The spatial structure is disciplined, centered, and grid-aligned:
- **Main Container:** Centered column capped at a maximum width of `840px`, with horizontal padding `16px` (sm: `24px`).
- **Sticky Top Bar:** Full-width 3-column grid container locked to `840px` with vertical and horizontal hairline borders (`border-x border-b border-border`). Navigation tiles are evenly distributed across equal-width columns.
- **Section Spacing:** Consistent vertical rhythm of `28px` (7 spacing units) between section blocks, with internal gaps of `16px` to `24px`.
- **Responsive Adaptability:** On mobile devices (< 640px), multi-column grids collapse cleanly into stacked single columns, while interactive drawer modals transition from centered desktop dialogs to bottom sheets.

## Elevation & Depth

This system is unapologetically flat. Spatial hierarchy is communicated through high-contrast tonal layers, precise 1px borders, and physical alignment.

### Shadow Vocabulary
- **Flat Rest** (`box-shadow: none`): The universal state for cards, buttons, inputs, and containers.
- **Modal Elevation** (`box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7)`): Reserved strictly for floating project preview dialog frames on desktop screens to detach the interactive modal from the blurred backdrop.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are completely flat at rest. Depth is established through 1px hairline boundaries (#282424 / #d8d3ce) and subtle background fills (#0b0b0a / #efebe5), not ambient shadows.

## Shapes

The geometric vocabulary is defined by crisp, 90-degree right angles and draftsperson indicators.

- **Corner Radius:** Universal 0px (`rounded-none`). No rounded corners on buttons, cards, images, or modal containers.
- **Crosshair Crop Marks:** The profile avatar and highlighted visual elements are framed by 8 perimeter hairline tick marks (`h-px w-2` and `h-2 w-px`), evoking print trim marks and optical alignment crosshairs.
- **Diamond Markers:** Experience timeline nodes use a 10px square rotated 45 degrees (`rotate-45 size-2.5 border border-primary bg-background`), resting precisely centered over a vertical 1px hairline track.

### Named Rules
**The Right-Angle Invariant.** Corner radii on core UI structures (cards, buttons, inputs, headers, tags) must remain strictly 0px. Soft rounded pills are prohibited.

## Components

### Buttons
- **Shape:** Square 0px edges (`rounded-none`).
- **Primary:** Warm Bone background (`#fafbf8`), Obsidian Void text (`#000101`), uppercase mono text (`font-mono text-xs`), height 48px, horizontal padding 16px.
- **Outline / Filter:** Transparent background, hairline border (`border-border`), text secondary (`#a7a7a7`), height 32px, uppercase mono (`text-[11px]`).
- **Hover / Focus:** Primary dims subtly to 90% opacity (`hover:bg-primary/90`); outline elevates with background fill (`hover:bg-muted hover:text-foreground`) and slight micro-scale (`hover:scale-[1.02]`).

### Navigation
- **Header Grid:** 3-column sticky grid at the top of the 840px layout.
- **Nav Links:** 48px height, monospace uppercase 12px, centered text with right hairline border. Active state highlighted by a bottom solid foreground border (`border-b-foreground text-foreground`).

### Cards & Project Showcases
- **Container:** 0px radius, 1px solid hairline border (`border-border`), background card (`#000101`).
- **Action Triggers:** Square external link icon buttons (`size-7 border border-border bg-card hover:border-primary hover:-translate-y-0.5`).
- **Browser Mockup Frame:** Project preview modals feature a retro browser chrome bar with three monochrome window control dots and a centered monospace URL display.

### Chips & Tech Badges
- **Style:** Compact inline flex items with 18px vector icons and 14px monospace text.
- **Color:** Subtle silver text (`#a7a7a7`) with high-contrast icon glyphs using non-scaling vector strokes.

### Signature Components
- **Architectural Crop Avatar:** 144px square profile frame encased within 8 drafting trim marks.
- **Timeline Diamond Spine:** Experience chronology mapped along a vertical hairline divider punctuated by 45-degree diamond nodes.
- **ChatGPT Theme Sandbox:** Fully functional retro terminal/chat view providing a conversational interactive persona alongside standard layout modes.

## Do's and Don'ts

### Do:
- **Do** maintain strict 0px border radius across buttons, cards, modals, and container frames.
- **Do** format all dates, technology tags, categories, navigation items, and coordinates in uppercase monospace (`font-mono text-[11px]`).
- **Do** use 1px solid hairline borders (`#282424` dark / `#d8d3ce` light) as the primary tool for spatial separation.
- **Do** separate list items and metadata with explicit slash delimiters (`" / "`).
- **Do** keep micro-interactions rapid and snappy (150ms transitions, subtle 1px hover lifts).

### Don't:
- **Don't** use bubbly pill-shaped buttons, rounded badges, or soft rounded cards.
- **Don't** add colored gradients, ambient pastel glows, or multi-colored background blurs.
- **Don't** use arbitrary drop shadows on static resting elements.
- **Don't** use generic saturated accent colors; remain anchored in the high-contrast Obsidian & Bone monochrome palette.
