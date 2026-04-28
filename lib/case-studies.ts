export type CaseStudy = {
  slug: string;
  project: string;
  date: string;
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  { slug: "elements", project: "Elements", date: "July 2024", featured: true },
  { slug: "gen-space", project: "Gen Space", date: "March 2024", featured: true },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
