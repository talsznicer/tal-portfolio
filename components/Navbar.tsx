import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 h-16 bg-[#f3f3f1] flex items-center justify-between px-6">
      <Link href="/" className="font-bold tracking-tight">
        Tal Sznicer
      </Link>
      <nav className="flex gap-6 text-sm">
        <Link href="/work">Selected Work</Link>
        <Link href="/cv">CV</Link>
      </nav>
    </header>
  );
}
