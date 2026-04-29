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
            Placeholder intro. Tal Sznicer is a product designer based in
            [city]. About copy lives at the top of the homepage and is read
            on first scroll.
          </p>
        </section>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 left-[184px] w-px bg-black"
          />

          {sortedTimelineEntries.map((entry) => (
            <TimelineEntry
              key={entry.kind === "case-study" ? entry.slug : entry.id}
              entry={entry}
            />
          ))}
        </div>

        <footer className="px-6 py-24 text-sm">
          End of timeline — placeholder footer.
        </footer>
      </main>
    </>
  );
}
