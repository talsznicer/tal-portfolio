import Link from "next/link";

export function TimelineLabel({
  date,
  title,
  isCaseStudy = false,
  href,
}: {
  date: string;
  title: string;
  isCaseStudy?: boolean;
  href?: string;
}) {
  const inner = (
    <>
      <div className="text-[11px] uppercase tracking-widest">{date}</div>
      <div className="text-sm font-semibold">{title}</div>
      {isCaseStudy && <div className="text-sm mt-1">↗</div>}
    </>
  );

  return (
    <div className="sticky top-16 self-start py-2 z-10">
      {isCaseStudy && href ? (
        <Link href={href} className="block">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </div>
  );
}
