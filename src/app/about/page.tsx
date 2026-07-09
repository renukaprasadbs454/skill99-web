import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { careerTimeline, coreValues, cultureHighlights, teamMembers } from "@/data/site";
import { siteMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: "About · Skill99",
  description: "Discover the mission, values, team, and 99-day vision behind Skill99.",
  openGraph: {
    title: "About · Skill99",
    description: "Discover the mission, values, team, and 99-day vision behind Skill99.",
    url: `${siteMetadata.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Our Story</p>
            <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">From mentor-led labs to career-first acceleration</h1>
            <p className="text-lg text-slate-600">
              Skill99, a Shivora Infotech initiative, was built to bridge the campus-to-career gap for engineering and allied graduates through structured 99-day sprints, real-world projects, and personalized placement cells.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/programs" className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-900">
                Explore Programs
              </Link>
              <Link href="/book" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white">
                Book Free Career Session
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="h-full rounded-[40px] border border-slate-200 bg-gradient-to-br from-white to-white/60 p-6 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80"
                alt="Mentors guiding students"
                width={600}
                height={500}
                className="h-full w-full rounded-[32px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3 md:px-6">
          {[
            {
              title: "Mission",
              description: "Empower students with career-ready skills, mentor guidance, and placement confidence in 99 days.",
            },
            {
              title: "Vision",
              description: "Become the most trusted career studio for tech, data, and design across India and beyond.",
            },
            {
              title: "Why 99 Days?",
              description: "Fast-paced focus, measurable milestones, and a daily habit stack ensures momentum and measurable outcomes.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Meet the Team</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Leaders who have hired, mentored, and built global products</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
                <p className="text-lg font-semibold text-slate-900">{member.name}</p>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Company Timeline</p>
          <div className="mt-6 space-y-4">
            {careerTimeline.map((entry) => (
              <div key={entry.year} className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-primary">{entry.year}</div>
                <p className="text-sm text-slate-600">{entry.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Core Values</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {coreValues.map((value) => (
              <div key={value} className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Careers</p>
              <h3 className="text-2xl font-semibold text-slate-900">We are hiring mentors, strategists, and student champions</h3>
              <p className="text-sm text-slate-600">
                Collaborate with industry partners, design immersive programs, and coach cohorts who value career outcomes.
              </p>
              <Link href="/careers" className="text-sm font-semibold text-primary underline">
                View open positions
              </Link>
            </div>
            <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Life at Skill99</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {cultureHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
