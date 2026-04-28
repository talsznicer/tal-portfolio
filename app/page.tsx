import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";

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

          <Section date="Jul 2024" title="Elements" bg="#ffd6cc">
            <h2 className="text-4xl font-bold mb-6">
              Finding the abstraction under the sprawl.
            </h2>
            <Link href="/elements" className="underline">
              Read case study ↗
            </Link>
          </Section>

          <Section date="Mar 2024" title="Gen Space" bg="#cce0ff">
            <h2 className="text-4xl font-bold mb-6">
              A creative canvas for generative work.
            </h2>
            <Link href="/gen-space" className="underline">
              Read case study ↗
            </Link>
          </Section>

          <Section date="2023" title="Earlier work" bg="#d4ffcc">
            <h2 className="text-4xl font-bold mb-6">
              Earlier work — placeholder.
            </h2>
            <p>No case study yet.</p>
          </Section>
        </div>

        <footer className="px-6 py-24 text-sm">
          End of timeline — placeholder footer.
        </footer>
      </main>
    </>
  );
}
