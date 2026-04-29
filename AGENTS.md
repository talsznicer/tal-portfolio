<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Lexicon — site parts

Use these terms consistently in conversation and in code (variable names, component names, types, comments). If something feels wrong about the lexicon as you work, raise it with Tal rather than silently using a different word.

- **Timeline** — the vertical scrolling thing on the homepage.
- **Timeline entry** — umbrella term for any item on the timeline.
- **Case study** — a timeline entry with "Read more". Clicking it opens the overlay with a full deep-dive page (e.g. Elements, Gen Space).
- **Moment** — a timeline entry *without* "Read more". Just an image, video, text, or a combo. No deep link, no overlay.
- **Overlay** — the slide-in panel that shows a case study or the CV without leaving the page.
- **Selected Work** — the `/work` page. A curated grid showing **only case studies** (no moments).
- **Work card** — one item in the Selected Work grid. Always opens a case study via the same overlay.

**Key relationships**

- Timeline = case studies + moments, mixed chronologically.
- Selected Work = case studies only, in a grid.
- The same overlay opens from both the timeline (case study entries only — moments aren't clickable) and the Selected Work grid.

**Why "moment" and not "project":** the user-facing difference between the two kinds of timeline entry is whether there's a "Read more" — that's also the lexicon split. "Moment" fits the editorial-brutalist vibe and is broad enough to cover photos, talks, small wins, trips, etc.

# Adding a case study

When you add a new case study, you must touch **two** places — miss either one and routing breaks:

1. **Add the entry to `lib/timeline.ts`** with `kind: "case-study"`, a unique `slug`, `name`, and `date`. This makes the standalone `/<slug>` route work and (if `featured: true`) puts it in the Selected Work grid.
2. **Create an intercept folder at `app/@modal/(.)<slug>/page.tsx`** that renders `<Overlay><CaseStudyContent slug="<slug>" /></Overlay>`. Without this, clicking the timeline link or the work card will navigate the URL but won't open the overlay.

**Why explicit per-slug folders, not a dynamic `(.)[project]`:** Next.js intercepting routes can't be conditionally constrained, so a dynamic intercept greedily matches every single-segment URL — including `/work` and `/cv` — and silently breaks navigation to those pages. Two near-identical files per case study is the price for working navigation. See commit `0f481fd` for the full reasoning.
