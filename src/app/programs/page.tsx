import type { Metadata } from "next";
import Link from "next/link";
import { ProgramCard } from "@/components/ProgramCard";
import { programFilters, programListings } from "@/data/site";
import { siteMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: "Programs · Skill99",
  description: "Explore Skill99's mentor-led 99-day programs across Development, AI, Analytics, Design, Marketing, Cloud, and Security.",
  openGraph: {
    title: "Programs · Skill99",
    description: "Explore Skill99's mentor-led 99-day programs across Development, AI, Analytics, Design, Marketing, Cloud, and Security.",
    url: `${siteMetadata.siteUrl}/programs`,
  },
};

export default function ProgramsPage() {
  return (
    <div className="space-y-10">
      <section className="section-panel">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">Programs</p>
        <h1 className="mt-2 text-4xl font-semibold text-white">99-day career programs</h1>
        <p className="mt-3 max-w-3xl text-sm text-white/70">
          Choose a guided path with real projects, certifications, mentorship, and placement support tailored to each career track.
        </p>
      </section>

      <section className="relative section-panel">
        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="flex flex-wrap gap-3">
            {programFilters.levels.map((level) => (
              <button
                key={level}
                type="button"
                className="glass-card border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-primary hover:text-primary"
              >
                {level}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <select className="rounded-2xl border border-white/20 bg-black/40 px-4 py-2 text-sm text-white focus:border-primary focus:outline-none">
              <option className="bg-[#0b1221]">Category</option>
              {programFilters.categories.map((category) => (
                <option key={category} className="bg-[#0b1221] text-white">
                  {category}
                </option>
              ))}
            </select>
            <select className="rounded-2xl border border-white/20 bg-black/40 px-4 py-2 text-sm text-white focus:border-primary focus:outline-none">
              <option className="bg-[#0b1221]">Career</option>
              {programFilters.careers.map((career) => (
                <option key={career} className="bg-[#0b1221] text-white">
                  {career}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="section-panel">
        <div className="grid gap-6 md:grid-cols-2">
          {programListings.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </section>

      <section className="section-panel text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">Need help choosing?</p>
        <h2 className="text-3xl font-semibold text-white">Talk to a career counselor</h2>
        <p className="text-sm text-white/70">
          We will map your background to the right 99-day Sprint and placement support, no strings attached.
        </p>
        <Link href="/book" className="mt-4 inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white">
          Book Free Career Session
        </Link>
      </section>
    </div>
  );
}
