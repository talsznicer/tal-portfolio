import { Navbar } from "@/components/Navbar";
import { TimelineEntry } from "@/components/TimelineEntry";
import { sortedTimelineEntries } from "@/lib/timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="px-6 pt-16 pb-32 max-w-4xl">
          <p className="text-2xl leading-snug">
            I&rsquo;m Tal, a product designer based in London. I lead design
            at LTX Studio, an AI filmmaking platform by Lightricks, where I
            work on creative tools, design systems. I like to build, not just
            design, sketching ideas in code, prototyping with AI, and getting
            close enough to the material to know what&rsquo;s actually
            possible.
          </p>
        </section>

        {sortedTimelineEntries.map((entry) => (
          <TimelineEntry
            key={entry.kind === "case-study" ? entry.slug : entry.id}
            entry={entry}
          />
        ))}

        <footer className="px-6 py-24 text-sm">
          End of timeline — placeholder footer.
        </footer>
      </main>
    </>
  );
}
