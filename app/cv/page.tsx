import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { CV } from "@/components/cv/CV";

export default function CVPage() {
  return (
    <>
      <Navbar />
      <div className="px-6 pt-6">
        <Link href="/" className="underline text-sm">
          ← Back
        </Link>
      </div>
      <CV />
    </>
  );
}
