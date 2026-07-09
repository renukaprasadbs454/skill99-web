import type { Metadata } from "next";
import { BookSessionForm } from "@/components/BookSessionForm";
import { siteMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: "Book Free Career Session · Skill99",
  description: "Reserve a free career session with Skill99 mentors and placement strategists.",
  openGraph: {
    title: "Book Free Career Session · Skill99",
    description: "Reserve a free career session with Skill99 mentors and placement strategists.",
    url: `${siteMetadata.siteUrl}/book`,
  },
};

export default function BookPage() {
  return (
    <div className="space-y-10">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Book a career session</p>
          <h1 className="text-4xl font-semibold text-slate-900">Master a skill in 99 days with a mentor roadmap</h1>
          <p className="mt-3 text-slate-600">
            Share your current goals and we will pair you with the right program, mentor, and placement cell.
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-6xl px-4">
          <BookSessionForm />
        </div>
      </section>
    </div>
  );
}
