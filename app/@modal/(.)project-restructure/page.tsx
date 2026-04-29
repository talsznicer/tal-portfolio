import { Overlay } from "@/components/Overlay";
import { CaseStudyContent } from "@/components/CaseStudyContent";

export default function CaseStudyOverlay() {
  return (
    <Overlay>
      <CaseStudyContent slug="project-restructure" />
    </Overlay>
  );
}
