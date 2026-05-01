import { getCaseStudy } from "@/lib/timeline";

export function CaseStudyContent({ slug }: { slug: string }) {
  const cs = getCaseStudy(slug);
  if (!cs) {
    return <div className="p-8">Case study not found.</div>;
  }

  if (slug === "elements") {
    return <ElementsTemplate />;
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

function ElementsTemplate() {
  return (
    <article>
      <section className="bg-black">
        <video
          src="/timeline/vid-07.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
          aria-label="Elements feature overview"
        />
      </section>

      <section className="bg-[#f3f3f1] px-12 py-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <p className="text-sm font-bold">Elements</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-4">
              Finding the abstraction under the sprawl, and shipping it.
            </h1>
            <p className="text-base mt-12">
              Consistency across LTX Studio generations was the platform&apos;s
              foundational challenge from day zero. Characters, locations,
              lighting, style, and objects had to stay coherent across outputs
              so a story could be told. Through 2025 the product carried two
              parallel consistency systems that had grown layered with edge
              cases. When a new generation primitive arrived, the team tried
              to absorb every existing capability into the next version of
              the feature, and the project lost convergence. Elements is the
              consolidation that came out of that. One concept, one creation
              flow, eight reusable types. This case study is about coming in
              as the closer, finding the abstraction under the sprawl, and
              shipping it.
            </p>
          </div>
          <aside className="col-span-12 md:col-span-3 md:col-start-10 text-xs space-y-4">
            <Meta label="Date" value="Jun 2025 — Apr 2026" />
            <Meta
              label="Role"
              value="Lead Product Designer and Team Lead, hands on closer"
            />
            <Meta
              label="Team"
              value="PM, EM, research lead, mentee designer, 5+ engineers"
            />
            <Meta
              label="Process"
              value="Information architecture · Interaction design · Design strategy · Systems thinking · Cross functional leadership"
            />
            <Meta
              label="Status"
              value="Shipped — v0 launch Oct 22 2025, expanded through Apr 2026"
            />
          </aside>
        </div>
      </section>

      <section className="bg-[#ebe9e5] px-12 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold">Context</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
            Edge cases drive the design, the product loses its point of view.
          </h2>
          <p className="text-base mt-12 max-w-2xl mx-auto">
            LTX Studio&apos;s consistency tooling had grown too complex. Two
            parallel systems for character creation lived side by side, each
            carrying its own assumptions and pile of edge cases. When a new
            generation capability arrived, the team tried to absorb everything
            into one feature. The product was being shaped by accumulated
            concerns rather than a deliberate point of view.
          </p>
        </div>
        <figure className="max-w-2xl mx-auto mt-16">
          <video
            src="/timeline/vid-12.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
            aria-label="Train actor flow"
          />
          <figcaption className="text-xs mt-4 text-center">
            <strong>Train actor</strong>
            <br />
            Two paths to create an actor. Describe the character in text and
            let the model generate the training set, or upload reference
            photos. Either way, around thirty minutes of training before the
            actor exists.
          </figcaption>
        </figure>
      </section>

      <section className="bg-white px-12 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold">Decision Moments</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
            Closer work as a series of decisions across scope, ambiguity, and
            product coherence.
          </h2>
          <p className="text-base mt-12 max-w-2xl mx-auto">
            By late August 2025, the project had grown beyond what engineering
            could land in the window. The mandate shifted to focus mode: ship
            a tighter version, get signals. I stepped in hands on as closer.
            What followed was three calls that cut the scope hard enough to
            ship.
          </p>
        </div>
      </section>

      <section className="bg-white px-12 pb-24 space-y-24">
        <DecisionRow
          heading="One project, one library"
          body="Elements was originally planned as a global account-level library, based on the older Characters model. I pushed for a project-scoped approach after data and research showed users mainly wanted consistency within a single project, not across projects."
          mediaSrc="/timeline/vid-09.mp4"
          mediaAlt="Project scoped library"
        />
        <DecisionRow
          heading="Sunset the trained Actor workflow"
          body="The older trained Actor workflow could have remained as a separate power-user path, but the product moved to a full migration into Elements to preserve a single concept and mental model. The decision was made to reduce cognitive load and improve coherence; although power users pushed back, broader adoption improved within weeks of launch."
          mediaSrc="/timeline/vid-10.mp4"
          mediaAlt="Save Pro Actors as Elements"
        />
        <DecisionRow
          heading="The @ mention as the trigger pattern"
          body="For invoking an Element while writing, the @ symbol carried the pattern from chat and document tools. Mentioning an Element in a prompt is the same gesture as mentioning a person in a comment. Small move, big leverage on learning curve."
        />
      </section>

      <section className="bg-white px-12 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Feature Highlights / Key Screens
        </h2>
      </section>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-bold">{label}</p>
      <p>{value}</p>
    </div>
  );
}

function DecisionRow({
  heading,
  body,
  mediaSrc,
  mediaAlt,
}: {
  heading: string;
  body: string;
  mediaSrc?: string;
  mediaAlt?: string;
}) {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 md:col-span-3">
        <h3 className="text-sm font-bold">{heading}</h3>
        <p className="text-sm mt-2">{body}</p>
      </div>
      {mediaSrc && (
        <div className="col-span-12 md:col-span-9">
          <video
            src={mediaSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full"
            aria-label={mediaAlt}
          />
        </div>
      )}
    </div>
  );
}
