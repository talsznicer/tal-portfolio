import { Overlay } from "@/components/Overlay";
import { CaseStudyContent } from "@/components/CaseStudyContent";
import { getCaseStudy } from "@/lib/timeline";

export default async function CaseStudyOverlay({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  if (!getCaseStudy(project)) return null;
  return (
    <Overlay>
      <CaseStudyContent slug={project} />
    </Overlay>
  );
}
