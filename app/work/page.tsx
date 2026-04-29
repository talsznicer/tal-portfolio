import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { caseStudies } from "@/lib/timeline";

export default function WorkPage() {
  const featured = caseStudies.filter((cs) => cs.featured);
  return (
    <>
      <Navbar />
      <main className="px-6 py-12">
        <h1 className="text-3xl font-bold mb-12">Selected Work</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((cs) => (
            <Link
              key={cs.slug}
              href={`/${cs.slug}`}
              className="block aspect-[4/3] p-6 bg-white"
            >
              <div className="text-xs uppercase tracking-widest">{cs.date}</div>
              <div className="text-2xl font-bold mt-2">{cs.name}</div>
            </Link>
          ))}
          <div className="aspect-[4/3] p-6 bg-white opacity-50">
            <div className="text-xs uppercase tracking-widest">Coming soon</div>
            <div className="text-2xl font-bold mt-2">Placeholder</div>
          </div>
        </div>
      </main>
    </>
  );
}
