import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { CaseStudyContent } from "@/components/CaseStudyContent";
import { caseStudies } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ project: cs.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const cs = caseStudies.find((c) => c.slug === project);
  if (!cs) notFound();
  return (
    <>
      <Navbar />
      <div className="px-6 pt-6">
        <Link href="/" className="underline text-sm">
          ← Back
        </Link>
      </div>
      <CaseStudyContent slug={project} />
    </>
  );
}
