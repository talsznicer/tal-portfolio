import { TimelineLabel } from "./TimelineLabel";

export function TimelineEntry({
  date,
  title,
  bg,
  children,
}: {
  date: string;
  title: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative grid grid-cols-[160px_1fr] gap-8 px-6 py-24 min-h-[140vh]">
      <TimelineLabel date={date} title={title} />
      <div className="p-10" style={{ background: bg }}>
        {children}
      </div>
    </section>
  );
}
