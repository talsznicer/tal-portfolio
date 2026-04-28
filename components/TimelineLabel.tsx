export function TimelineLabel({
  date,
  title,
}: {
  date: string;
  title: string;
}) {
  return (
    <div className="sticky top-16 self-start py-2 z-10">
      <div className="text-[11px] uppercase tracking-widest">{date}</div>
      <div className="text-sm font-semibold">{title}</div>
    </div>
  );
}
