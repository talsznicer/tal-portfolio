export type CaseStudy = {
  kind: "case-study";
  slug: string;
  name: string;
  date: string;
  featured?: boolean;
};

export type Moment = {
  kind: "moment";
  id: string;
  date: string;
  title?: string;
};

export type TimelineEntry = CaseStudy | Moment;

export const timelineEntries: TimelineEntry[] = [
  { kind: "case-study", slug: "elements", name: "Elements", date: "July 2024", featured: true },
  { kind: "case-study", slug: "gen-space", name: "Gen Space", date: "March 2024", featured: true },
];

export const caseStudies: CaseStudy[] = timelineEntries.filter(
  (entry): entry is CaseStudy => entry.kind === "case-study",
);

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
