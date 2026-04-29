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

**Code state vs lexicon (mismatches still to clean up):**
- `lib/case-studies.ts` currently models only case studies; needs to become a timeline-entry data model with two kinds (case study and moment).
- MDX frontmatter currently has a `project: "Elements"` field; "project" is no longer a lexicon term, so this field will want renaming.
- Component naming should follow the lexicon (e.g. `<TimelineEntry>` as the umbrella, case-study and moment variants).
