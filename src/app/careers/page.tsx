import type { Metadata } from "next";
import Link from "next/link";
import { benefits } from "@/data/site";
import { siteMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: "Careers · Skill99",
  description: "Join Skill99 as a mentor, engineer, or placement strategist to help learners master skills in 99 days.",
  openGraph: {
    title: "Careers · Skill99",
    description: "Join Skill99 as a mentor, engineer, or placement strategist to help learners master skills in 99 days.",
    url: `${siteMetadata.siteUrl}/careers`,
  },
};

const openings = [
  { role: "Mentor - AI & Data", type: "Full-time", location: "Hybrid - Bengaluru" },
  { role: "Placement Strategist", type: "Full-time", location: "Remote" },
  { role: "Program Producer", type: "Internship", location: "Hyderabad" },
];

export default function CareersPage() {
  return (
    <div className="space-y-10">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Careers</p>
          <h1 className="text-4xl font-semibold text-slate-900">Impact modern learning as part of Skill99</h1>
          <p className="mt-3 text-slate-600">
            We are building a team of mentors, strategists, and builders who help graduates transition in record time.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <div className="space-y-6">
            {openings.map((job) => (
              <div key={job.role} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-slate-900">{job.role}</h2>
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">{job.type}</span>
                </div>
                <p className="mt-1 text-sm text-slate-500">{job.location}</p>
                <p className="mt-4 text-sm text-slate-600">
                  Partner with mentors, design immersive curriculum, and support placement drives that deliver real jobs.
                </p>
                <Link href="/book" className="mt-4 inline-flex text-sm font-semibold text-primary underline">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Benefits & Culture</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
                {benefit}
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-600">
            <p>Inclusive teams, flexible work, and a culture that values experimentation and data-backed decisions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
