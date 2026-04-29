import { getCaseStudy } from "@/lib/timeline";

export function CaseStudyContent({ slug }: { slug: string }) {
  const cs = getCaseStudy(slug);
  if (!cs) {
    return <div className="p-8">Case study not found.</div>;
  }
  return (
    <article className="p-8 max-w-3xl">
      <p className="text-sm uppercase tracking-widest">{cs.date}</p>
      <h1 className="text-4xl font-bold mt-2">{cs.name}</h1>
      <p className="mt-12 text-lg">
        Hello, this is the {cs.name} case study.
      </p>
    </article>
  );
}
