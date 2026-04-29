export type MediaItem = {
  kind: "image" | "video";
  src: string;
  alt: string;
};

export type CaseStudy = {
  kind: "case-study";
  slug: string;
  name: string;
  date: string;
  featured?: boolean;
  notes?: string;
  media: MediaItem[];
};

export type Moment = {
  kind: "moment";
  id: string;
  date: string;
  title: string;
  description?: string;
  media: MediaItem[];
};

export type TimelineEntry = CaseStudy | Moment;

export const timelineEntries: TimelineEntry[] = [
  {
    kind: "case-study",
    slug: "editing-space",
    name: "Editing Space",
    date: "2026-04",
    featured: false,
    notes:
      "Standalone image editing destination inside LTX Studio. QWEN LoRA camera angles, TOPAZ Redefine, upscale, adjust.",
    media: [
      { kind: "image", src: "img-01.jpeg", alt: "Editing Space hero" },
      { kind: "video", src: "vid-01.mp4", alt: "Editing Space interaction" },
    ],
  },
  {
    kind: "case-study",
    slug: "ai-production-workspace",
    name: "AI Production Workspace",
    date: "2026-03",
    featured: true,
    notes:
      "AI native multi track video composition workspace inside LTX Studio. Keyframes, Retake, Audio, Guide tracks with novel range overlays.",
    media: [
      { kind: "video", src: "vid-02.mp4", alt: "AI Production Workspace demo" },
      { kind: "image", src: "img-02.jpeg", alt: "Workspace tracks UI" },
      { kind: "video", src: "vid-03.mp4", alt: "Range overlay interaction" },
    ],
  },
  {
    kind: "case-study",
    slug: "canvas",
    name: "Canvas",
    date: "2026-02",
    featured: true,
    notes:
      "Canvas based mood and reference collection tool, built entirely via vibe coding. Designer who ships production code.",
    media: [
      { kind: "video", src: "vid-04.mp4", alt: "Canvas tool walkthrough" },
      { kind: "image", src: "img-03.jpeg", alt: "Canvas surface" },
    ],
  },
  {
    kind: "moment",
    id: "home-screen-v6",
    date: "2026-02",
    title: "Home Screen V6 + new navigation",
    description:
      "Sixth iteration of the LTX Studio home page, plus entry points and creation dock acting as the new top level navigation. Made the call to pause the GSAP animation when it hit a 6x CPU slowdown to keep the launch on track.",
    media: [
      { kind: "video", src: "vid-15.mp4", alt: "Home Screen V6 in motion" },
      { kind: "image", src: "img-04.jpeg", alt: "Creation dock detail" },
    ],
  },
  {
    kind: "case-study",
    slug: "storyboard-v2",
    name: "Script to Storyboard V2",
    date: "2025-09",
    featured: false,
    notes:
      "Iteration on the core script to storyboard flow with Tam. Element assignment to script objects, hero image generation.",
    media: [
      { kind: "image", src: "img-05.jpeg", alt: "Storyboard V2 hero" },
      { kind: "video", src: "vid-05.mp4", alt: "Element assignment flow" },
    ],
  },
  {
    kind: "moment",
    id: "ltx-2-launch",
    date: "2025-09",
    title: "LTX-2 model launch",
    description:
      "Marketing and growth release coordination. Designed the dismissable launch banner, animated text strip with hover use cases, and example cards pre filled with prompts.",
    media: [
      { kind: "image", src: "img-06.jpeg", alt: "LTX-2 launch banner" },
      { kind: "video", src: "vid-16.mp4", alt: "Animated text strip" },
    ],
  },
  {
    kind: "case-study",
    slug: "project-restructure",
    name: "Project Restructure",
    date: "2025-07",
    featured: true,
    notes:
      "Linear storyboard reframed as a flexible workspace, integrating Storyboard, Timeline, and GenSpace. Addressed ~41% seven day churn.",
    media: [
      { kind: "video", src: "vid-06.mp4", alt: "Project Restructure overview" },
      { kind: "image", src: "img-07.jpeg", alt: "Workspace integration" },
      { kind: "image", src: "img-08.jpeg", alt: "Churn metrics narrative" },
    ],
  },
  {
    kind: "case-study",
    slug: "elements",
    name: "Elements",
    date: "2025-06",
    featured: true,
    notes:
      "Cross product element system. Project scoped libraries with @mention references in prompts. Sunsetting Locations at 0.2% daily usage.",
    media: [
      { kind: "image", src: "img-09.jpeg", alt: "Element system overview" },
      { kind: "video", src: "vid-07.mp4", alt: "@mention prompt flow" },
    ],
  },
  {
    kind: "case-study",
    slug: "rough-cut-editor",
    name: "Rough Cut Editor",
    date: "2025-04",
    featured: false,
    notes:
      "Professional cut, trim, and clip arrangement timeline. Shipped in a 10 day design to handoff window.",
    media: [
      { kind: "video", src: "vid-08.mp4", alt: "Rough Cut Editor in motion" },
    ],
  },
  {
    kind: "case-study",
    slug: "gen-space",
    name: "GenSpace",
    date: "2025-02",
    featured: true,
    notes:
      "Step based generation hub. Reframed the platform from mode based to destination based editing.",
    media: [
      { kind: "image", src: "img-10.jpeg", alt: "GenSpace hub" },
      { kind: "video", src: "vid-09.mp4", alt: "Step based generation" },
      { kind: "image", src: "img-11.avif", alt: "GenSpace destination view" },
    ],
  },
  {
    kind: "moment",
    id: "team-lead-transition",
    date: "2025-01",
    title: "Team Lead transition",
    description:
      "Moved from sole senior IC to Team Lead of a team of five. Mentoring, design reviews, hiring, strategy with Product and Engineering leadership.",
    media: [{ kind: "image", src: "img-01.jpeg", alt: "Team org chart" }],
  },
  {
    kind: "moment",
    id: "dark-mode",
    date: "2024-11",
    title: "Dark Mode",
    description:
      "Led the full dark mode implementation. Defined the theming vocabulary still used across LTX (Versatile, Inverted, Locked, Custom) and solved shadow rendering.",
    media: [
      { kind: "image", src: "img-02.jpeg", alt: "Light and dark side by side" },
      { kind: "image", src: "img-03.jpeg", alt: "Theming vocabulary" },
    ],
  },
  {
    kind: "case-study",
    slug: "converging-identities",
    name: "Converging Identities",
    date: "2024-10",
    featured: false,
    notes:
      "Character consistency system. Actor management, face swap, identity preserved across scenes. Foundation for the LoRA character pattern.",
    media: [
      { kind: "video", src: "vid-10.mp4", alt: "Identity consistency demo" },
      { kind: "image", src: "img-04.jpeg", alt: "Actor management UI" },
    ],
  },
  {
    kind: "case-study",
    slug: "composition-tool",
    name: "Composition Tool",
    date: "2024-06",
    featured: false,
    notes:
      "Canvas based composition tool (internal name Frame Creator). Generative fill, camera angle controls, retry toast pattern, activity indicators.",
    media: [
      { kind: "image", src: "img-05.jpeg", alt: "Composition Tool canvas" },
      { kind: "video", src: "vid-11.mp4", alt: "Generative fill flow" },
    ],
  },
  {
    kind: "moment",
    id: "initiation-flow",
    date: "2024-05",
    title: "Initiation Flow V2 and V3",
    description:
      "First major redesign of project creation. Start from Scratch and Start from Script flows, scene breakdown, character essence system, and the thumbnail gallery component that propagated across other surfaces.",
    media: [
      { kind: "video", src: "vid-17.mp4", alt: "Initiation flow walkthrough" },
      { kind: "image", src: "img-06.jpeg", alt: "Annotated flow map" },
    ],
  },
  {
    kind: "moment",
    id: "shot-editor-v1",
    date: "2024-02",
    title: "Shot Editor V1",
    description:
      "LTX Studio's first real editing interface. Designed everything: preview, timeline, panel UI, shot card, navigation. Founding designer setting every pattern from scratch.",
    media: [
      { kind: "video", src: "vid-18.webm", alt: "Shot Editor V1 in motion" },
      { kind: "image", src: "img-07.jpeg", alt: "Shot Editor hero" },
      { kind: "image", src: "img-08.jpeg", alt: "Panel UI detail" },
    ],
  },
  {
    kind: "case-study",
    slug: "ltx-design-system",
    name: "LTX Design System",
    date: "2024",
    featured: false,
    notes:
      "Built the design system from zero. Component library, token architecture, camelCase naming, handoff standards.",
    media: [
      { kind: "video", src: "vid-12.mp4", alt: "Design system walkthrough" },
    ],
  },
  {
    kind: "moment",
    id: "videoleap-web",
    date: "2023",
    title: "Videoleap Web → LTX Studio origins",
    description:
      "Initiated Videoleap Web during MA at Weißensee, the conceptual seed that became LTX Studio. Early web editor patterns: timeline, templates, component alignment.",
    media: [
      { kind: "image", src: "img-09.jpeg", alt: "Videoleap Web mockup" },
    ],
  },
  {
    kind: "case-study",
    slug: "sky-replace",
    name: "Sky Replace",
    date: "2022",
    featured: false,
    notes:
      "Sky replacement feature on Photoleap. Designed within the rigid two hierarchy mobile toolbar constraint.",
    media: [
      { kind: "image", src: "img-10.jpeg", alt: "Sky Replace UI" },
      { kind: "video", src: "vid-13.mp4", alt: "Sky swap demo" },
    ],
  },
  {
    kind: "case-study",
    slug: "lightleap-content-revamp",
    name: "Lightleap content revamp",
    date: "2021",
    featured: false,
    notes:
      "Full content overhaul of Lightleap. Filter family adopted across Lightricks products. First example of cross product creative direction.",
    media: [
      { kind: "video", src: "vid-14.mp4", alt: "Filter family demo" },
      { kind: "image", src: "img-11.avif", alt: "Lightleap content" },
    ],
  },
];

export const caseStudies: CaseStudy[] = timelineEntries.filter(
  (entry): entry is CaseStudy => entry.kind === "case-study",
);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

const monthAbbrev = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatDate(date: string): string {
  if (date.length === 4) return date;
  const [year, month] = date.split("-");
  const m = parseInt(month, 10);
  if (Number.isNaN(m) || m < 1 || m > 12) return date;
  return `${monthAbbrev[m - 1]} ${year}`;
}

function toComparable(date: string): string {
  return date.length === 4 ? `${date}-12` : date;
}

export const sortedTimelineEntries: TimelineEntry[] = [...timelineEntries].sort(
  (a, b) => toComparable(b.date).localeCompare(toComparable(a.date)),
);
