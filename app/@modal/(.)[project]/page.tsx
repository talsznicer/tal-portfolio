import { Overlay } from "@/components/Overlay";
import { CaseStudyContent } from "@/components/CaseStudyContent";

export default async function CaseStudyOverlay({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  return (
    <Overlay>
      <CaseStudyContent slug={project} />
    </Overlay>
  );
}
