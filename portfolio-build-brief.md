# Tal Sznicer — Portfolio Site Build Brief

A personal portfolio for Tal Sznicer, Product Design Team Lead at LTX Studio (Lightricks). Editorial-brutalist aesthetic with a vertical timeline of case studies and a routed overlay for project deep-dives.

---

## 0. Build Approach — Read This First

This is a **two-phase build**. Do not attempt to deliver the finished site in one pass.

### Phase 1 — Spike (validate the mechanism)

The goal of Phase 1 is to prove the mechanism works end-to-end with minimal placeholder content and **zero design polish**.

What Phase 1 must include:
- Next.js project scaffolded and deployed to Vercel
- Homepage with a fixed navbar, placeholder intro section, and 3 dummy timeline sections (coloured boxes are fine)
- All three sticky scroll layers working correctly across Chrome, Safari, Firefox
- `/work` page with a placeholder grid of 2–3 cards
- `/cv` route rendering placeholder structured content
- Two case study routes (`/elements`, `/gen-space`) rendering plain text "Hello, this is the [Project] case study"
- Intercepting route overlay working from all three triggers: timeline entry, Selected Work card, CV link in nav. Each closes back to the page it was triggered from.
- Live deployed URL to test on desktop and mobile

What Phase 1 must NOT include:
- Real fonts (system default is fine)
- Real copy or content
- Real images or videos
- Final colours, spacing, or typography decisions
- Animation polish beyond the overlay slide
- Any design system work

### Phase 2 — Design pass

Once the spike is deployed and the mechanism is proven, Phase 2 layers in typography, colour, spacing, images, real content, and micro-interactions. This happens as a single pass on top of the working skeleton.

**Why this order:** the hardest parts of this site (nested sticky scroll, intercepting routes) are mechanical, not visual. Validating them with grey boxes is faster than validating them with a finished design — fewer variables, easier to debug. Visual decisions can change freely once the structure is proven.

**What still matters during Phase 1:** the DOM hierarchy of the sticky layers, the route structure, and the component boundaries (`<Section>`, `<TimelineLabel>`, `<CaseStudyOverlay>`). These are foundational — get them roughly right so Phase 2 is styling, not refactoring.

---

## 1. Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion (overlay slide-in, scroll-linked motion)
- **Content:** MDX for case studies (no CMS — content lives in repo)
- **Deploy target:** Vercel
- **Package manager:** pnpm

---

## 2. Site Structure

### Routes

- `/` — homepage (intro + full career timeline). The timeline is dense and chronological, showing the full flow of work across the career, including small things and major projects. About copy lives at the top of this page (no separate `/about` route).
- `/work` — **Selected Work** page. A curated grid of 4–5 featured case studies — the deep-dives the user is most encouraged to read. This is the primary entry point for visitors who don't want to scan the full timeline.
- `/[project]` — individual case study pages (e.g. `/elements`, `/gen-space`). Linked from both the homepage timeline AND the Selected Work grid. Both routes use the same intercepting-route pattern.
- `/cv` — CV page. Same dual-mode pattern as case studies (overlay when triggered from in-site nav, standalone when visited directly). Layout is **different** from the case study template — uses its own dedicated component with sections like Experience, Skills, Education. See section 5b for details.

### Top navigation

```
Tal Sznicer                          Selected Work · CV
```

No "About" link — about copy lives at the top of the homepage and is read on first scroll, so a separate route is redundant.

### Dual-mode pages (the critical architectural piece)

Both case studies AND the CV must work in two modes:

- **Overlay mode** — when navigated to from elsewhere on the site (timeline on `/`, grid on `/work`, "CV" link in nav). Slides in from the right over the current page; the current page stays rendered behind it; closing returns the user to the exact page and scroll position they came from.
- **Standalone mode** — when visited directly (cold link from social, refresh, share). Renders as a full standalone page.

**Closing behaviour:** the overlay always returns the user to the page they came from. Closing from the homepage returns to the homepage; closing from `/work` returns to `/work`. This is the natural behaviour of intercepting routes — no extra logic needed.

**Implementation:** use Next.js **parallel routes + intercepting routes**.

```
app/
├── layout.tsx
├── page.tsx                        # Homepage
├── @modal/
│   ├── default.tsx                 # null
│   └── (.)[project]/
│       ├── (.)[project]/
│       │   └── page.tsx                # Intercepted overlay for case studies
│       └── (.)cv/
│           └── page.tsx                # Intercepted overlay for CV
├── [project]/
│   └── page.tsx                        # Standalone case study
├── work/
│   └── page.tsx                        # Selected Work grid
├── cv/
│   └── page.tsx                        # Standalone CV
└── case-studies/
    ├── elements.mdx
    └── gen-space.mdx
```

Both the intercepted overlay and the standalone version render the same underlying component for each piece of content — the difference is just the wrapper (overlay vs. full page). One source of truth per case study, two presentations. Same applies to the CV.

---

## 3. Homepage Layout & Scroll Behaviour

This is the heart of the design. Three nested sticky layers must compose correctly.

### Layer 1 — Navbar
- `position: sticky; top: 0` (or fixed)
- Always pinned at top of viewport
- Contents: "Tal Sznicer" left, "Selected Work · CV" right
- Background matches page (off-white), no border

### Layer 2 — Timeline column (left rail)
- Initially scrolls with the intro paragraph
- Once it reaches the bottom of the navbar, it pins and stays anchored there for the rest of the page
- Implementation: wrap timeline section in a tall container, give the rail `position: sticky; top: [navbar height]`, height `calc(100vh - navbar)`
- Contains the vertical 1px black line + the date/title labels positioned along it

### Layer 3 — Per-section sticky labels
- Each timeline section's date+title label pins under the navbar while the user scrolls through that section's content
- When the next section arrives, it pushes the current label up and out, then takes its place
- Implementation: each section wraps its content with `position: relative`; the label has `position: sticky; top: [navbar height]`. Native CSS sticky handles the handoff automatically — **no JavaScript scroll listeners**.

### Layer 4 (optional) — Headline quote stickiness
- The headline quote on the right side of each section can also stick while supporting images scroll past beneath it
- Same pattern — `sticky` inside a tall section parent

### Layout shape per section

Two-column structure:

- **Left column** — timeline label (sticky). Narrow (~120–160px on desktop).
- **Right column** — headline + asymmetric image/video gallery. Takes remaining width.

Image placement is **asymmetric, not a grid**. Some images sit far right, some closer to the timeline rail, creating editorial rhythm. Implement with CSS Grid using explicit placement (`grid-column-start`/`end`) or absolute positioning within a relative parent.

---

## 4. Overlay Behaviour (Case Studies & CV)

The overlay pattern is shared between case studies and the CV. Same component shell, same animation, same close behaviour — only the inner content differs.

### Triggers
- Click a project headline (with ↗) on the homepage timeline
- Click a card in the Selected Work grid on `/work`
- Click "CV" in the top navigation from anywhere on the site

### Animation
- Slides in from the right
- Desktop: ~70–80% of viewport width — leaves the underlying page partially visible on the left
- Mobile: 100% width — covers the underlying page entirely
- Uses Framer Motion for the slide; transition ~300–400ms with easing

### Behaviour
- Content area inside the overlay scrolls independently of the page behind it
- The underlying page stays put (scroll position preserved)
- Body scroll lock on the underlying page while overlay is open

### Close
- × button top-right
- Escape key
- Click on the visible underlying page area to the left of the overlay
- All three slide the overlay back out to the right and return the user to the exact page and scroll position they came from

### Accessibility
- Use Radix UI Dialog (`@radix-ui/react-dialog`) or React Aria as the primitive — focus trap, ARIA, keyboard handling come for free
- Restore focus to the trigger element on close

---

## 5. Case Study Content

Each case study is an MDX file with frontmatter:

```mdx
---
title: "Finding the abstraction under the sprawl, and shipping it."
project: "Elements"
date: "July 2024"
role: "Lead Product Designer and Team Lead, hands on closer"
team: "PM, EM, research lead, mentee designer, 5+ engineers"
process: "Information architecture · Interaction design · Design strategy · Systems thinking · Cross functional leadership"
status: "Shipped — v0 launch Oct 22 2025, expanded through Apr 2026"
duration: "Jun 2025 — Apr 2026"
---

Body content as MDX...
```

### Case study page layout
- Left side / main column: title, date, intro paragraph, body sections with text, image carousels, embedded videos
- Right rail: metadata column (Date / Role / Team / Process / Status)
- Top-right: × close button (in overlay mode) OR back link (in standalone mode)

### Custom MDX components needed
- `<Carousel>` — image carousel with prev/next
- `<Video>` — autoplay, muted, loop, playsInline, no controls
- `<Figure>` — image with optional caption
- `<Pullquote>` — large display quote

---

## 5b. Selected Work Page (`/work`)

A curated grid of 4–5 featured case studies — the deep-dives the user is most encouraged to read. This page exists as an alternative entry point for users who don't want to scan the full homepage timeline.

### Layout
- Classical grid (3 or 4 columns on desktop, 2 on tablet, 1 on mobile)
- Each card shows: project name, date, a representative image, optional one-line tagline
- Clicking a card opens the same case study overlay used from the homepage timeline
- No additional decoration — same restrained aesthetic as the rest of the site

### Behaviour
- Hover/focus on a card: subtle response (slight image scale, or text underline)
- Click: triggers intercepting route → overlay slides in over `/work`
- Closing the overlay returns the user to the grid, scroll position preserved

### Implementation
- Cards are server components reading from the same MDX frontmatter as the case studies
- Single source of truth — adding a new case study automatically makes it eligible for the grid (with a `featured: true` flag in frontmatter to control which 4–5 appear)

---

## 5c. CV Page (`/cv`)

The CV uses its **own dedicated layout component**, distinct from the case study template. Same overlay shell, different inner content.

### Content sections
- Header: name, role, location, contact links
- Experience: chronological list with role, company, dates, brief description
- Skills: grouped by category (Design, Process, Tools)
- Education: institution, degree, dates
- Selected speaking / writing (optional)

### Layout
- Single-column or two-column depending on Phase 2 design decisions
- Print-friendly CSS (so the standalone `/cv` page can be printed or saved as PDF cleanly)
- All content lives in a structured data file (JSON or TypeScript object), not MDX, since the CV is more structured than narrative

### Behaviour
- Same overlay/standalone dual-mode pattern as case studies
- Triggered from the "CV" link in the top nav
- Closing returns the user to the page they came from

### Layout component
- A separate `<CV />` component, not the `<CaseStudy />` template
- Lives in `/components/cv/CV.tsx`
- Phase 1: scaffold with placeholder structured content; Phase 2 finalise visual design

---

## 6. Visual & Typography

### Type
- Heavy black sans-serif for everything: Inter Bold, Söhne, or Neue Haas Grotesk Display Bold
- Self-host via `next/font` (Google Fonts for Inter, or licensed file for Söhne)
- One typeface, varying weight/size — no font pairing
- Sizes: oversized intro (`clamp(40px, 5vw, 96px)`), section headlines (`clamp(32px, 3.5vw, 64px)`), body (16–18px), metadata (13–14px)

### Colour
- Background: off-white `#f3f3f1` (or similar — final value to be tuned)
- Text: pure black `#000000`
- No accent colours, gradients, or decorative tints
- Timeline line: 1px solid black

### Spacing
- Generous vertical rhythm between sections (96–160px)
- Tailwind spacing scale, no arbitrary pixel values

### Restraint rules
- No gradients
- No drop shadows
- No rounded corners on layout containers (small radius OK on UI elements like the close button)
- No decorative dividers — only the timeline line itself

### Reference sites
- mont-fort.com (Astro, editorial typography)
- structured.money (Astro, similar restraint)
- terminalindustries.com (custom, asymmetric layouts)
- studio-onto.com (vanilla JS, page transitions)

---

## 7. Performance & Constraints

### Hard rules
- **No smooth-scroll library.** No Lenis, no Locomotive Scroll. Native scroll only.
- All sticky behaviour uses CSS `position: sticky`. **No JavaScript scroll listeners** for layout.
- Animation is reserved for the overlay slide-in and tasteful enter-on-scroll fades. Nothing scroll-scrubbed.

### Targets
- Lighthouse performance: 90+ on desktop and mobile
- Largest Contentful Paint: under 2.5s
- No layout shift (CLS = 0)
- Initial JS bundle: under 100kb gzipped

### Image handling
- All images use `next/image` with proper `sizes` attribute
- Source images at 2x intended display size, WebP/AVIF auto-served by Next
- Below-fold images lazy-loaded (default in Next/Image)

### Video handling
- Autoplay, muted, loop, playsInline
- No controls (videos are decorative)
- Use `<video>` tag directly, not embed
- Provide MP4 + WebM sources where possible

---

## 8. Responsive Behaviour

### Desktop (≥1024px)
- Two-column section layout
- Timeline rail visible on left
- Overlay takes 70–80% of viewport

### Tablet (768–1023px)
- Same two-column structure, narrower columns
- Overlay takes 90% of viewport

### Mobile (<768px)
- Single column stacking
- Timeline rail thins or hides; date/title labels become inline section headers
- Overlay takes 100% of viewport
- Touch-friendly tap targets (≥44px)

---

## 9. Build Order

Walk through these one step at a time, in order. Don't tackle everything at once.

### Phase 1 — Spike (mechanism only)

1. **Scaffold** — Next.js 15 + TypeScript + Tailwind v4 + MDX setup. Get a "Hello World" homepage running. Deploy to Vercel immediately so deployment is proven.
2. **Homepage shell** — navbar with "Tal Sznicer · Selected Work · CV", placeholder intro, 3 dummy timeline sections as coloured boxes.
3. **Sticky scroll** — all three layers working. Test in Chrome, Safari, Firefox before moving on. **This is the highest-risk step — get it solid.**
4. **Standalone case study route** — `/[project]` rendering plain text. Two stub case studies: `/elements`, `/gen-space`.
5. **Standalone Selected Work page** — `/work` with a placeholder grid linking to the case studies.
6. **Standalone CV page** — `/cv` with placeholder structured content.
7. **Intercepting route + overlay** — parallel routes wired up for both case studies and CV. Overlay animation with Framer Motion. Focus trap and scroll lock via Radix Dialog.
8. **Verify all three triggers** — timeline entry, Selected Work card, CV link. Each opens overlay, closes back to its origin page with scroll preserved.
9. **Deploy and test** — push to Vercel, test on desktop and mobile, share URL with a friend to sanity-check.

### Phase 2 — Design pass (after spike is approved)

10. **Typography & layout primitives** — load real fonts, define type scale, set container widths and spacing scale.
11. **Homepage visual design** — apply real intro copy, real timeline labels, real spacing, asymmetric image placement.
12. **Case study template** — typography, metadata column, MDX custom components (`<Carousel>`, `<Video>`, `<Figure>`, `<Pullquote>`).
13. **Selected Work grid** — final card design, hover states, image treatment.
14. **CV layout** — final visual design for the CV component.
15. **Mobile responsive** — adjust all layers for small screens.
16. **Polish** — micro-interactions, hover states, transitions, accessibility audit.
17. **Real content** — replace placeholders with two real case studies (Elements, Gen Space) and real CV data.
18. **Final deploy** — custom domain, analytics, performance audit.

---

## 10. Provided Assets

When kicking off, I will drop the following into the project:

- `/design-references/` — screenshots of the homepage and case study layout (these define the spec visually)
- `/public/images/` — project images and reference photos
- `/public/videos/` — project videos
- `/app/case-studies/elements.mdx` — first case study content
- `/app/case-studies/gen-space.mdx` — second case study content

For v1, scaffold with placeholder content for two case studies: **Elements** and **Gen Space**. Real content comes after the structure works.

---

## 11. Definition of Done — v1

- Homepage scrolls with all sticky layers behaving correctly on Chrome, Safari, Firefox
- Two case studies linkable from the homepage
- Each case study openable as an overlay AND accessible directly via URL
- Closing the overlay returns to the exact homepage scroll position
- Mobile layout works on iPhone and Android viewports
- Lighthouse performance score 90+
- Deployed to Vercel with a custom domain
- Keyboard navigation works (Tab, Escape, Enter)

---

## 12. Out of Scope for v1

- CMS or admin interface (content stays in MDX files)
- Blog or writing section
- Comments, likes, or social features
- Newsletter signup
- Analytics beyond Vercel's built-in
- i18n / multiple languages
- Dark mode

---

## Notes for Claude Code

- **Read the design references first.** Before writing any code, look at the screenshots in `/design-references/` and confirm understanding of the visual spec.
- **Use Radix UI primitives** wherever a primitive is needed (Dialog, focus management, etc). Don't roll your own.
- **The intercepting route piece is the trickiest part.** If you stumble, refer to the canonical Next.js docs example (Instagram-style photo modal) — same pattern as this site's case study overlay.
- **Sticky scroll is finicky.** Native CSS sticky has gotchas around `overflow: hidden` ancestors, transformed parents, and parent height. Test in all browsers before declaring it done.
- **Iterate visually.** After every meaningful change, run `pnpm dev` and view the result. Don't batch changes blindly.
- **No smooth-scroll libraries, ever.** If you find yourself reaching for Lenis, stop and use native scroll instead.
