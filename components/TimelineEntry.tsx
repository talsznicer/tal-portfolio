import Link from "next/link";
import Image from "next/image";
import { TimelineLabel } from "./TimelineLabel";
import {
  type TimelineEntry as Entry,
  type MediaItem,
  formatDate,
} from "@/lib/timeline";

export function TimelineEntry({ entry }: { entry: Entry }) {
  const date = formatDate(entry.date);
  const label = entry.kind === "case-study" ? entry.name : entry.title;
  const headline = entry.kind === "case-study" ? entry.notes : entry.description;

  return (
    <section className="relative grid grid-cols-[160px_1fr] gap-8 px-6 py-24 min-h-[140vh]">
      <TimelineLabel date={date} title={label} />
      <div className="space-y-10 max-w-2xl">
        {headline && (
          <h2 className="text-3xl font-bold leading-tight">{headline}</h2>
        )}
        {entry.media.length > 0 && (
          <div className="space-y-6">
            {entry.media.map((m, i) => (
              <Media key={`${entry.kind}-${i}`} item={m} />
            ))}
          </div>
        )}
        {entry.kind === "case-study" && (
          <Link href={`/${entry.slug}`} className="underline text-sm">
            Read case study ↗
          </Link>
        )}
      </div>
    </section>
  );
}

function Media({ item }: { item: MediaItem }) {
  const src = `/timeline/${item.src}`;
  if (item.kind === "image") {
    return (
      <Image
        src={src}
        alt={item.alt}
        width={1200}
        height={800}
        className="w-full h-auto"
      />
    );
  }
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={item.alt}
      className="w-full h-auto"
    />
  );
}
