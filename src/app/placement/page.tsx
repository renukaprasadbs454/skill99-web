import type { Metadata } from "next";
import { hiringPartners } from "@/data/site";
import { siteMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: "Placement · Skill99",
  description: "Skill99 placement cell combines resume clinics, mock interviews, and hiring company outreach to land graduates in premium roles.",
  openGraph: {
    title: "Placement · Skill99",
    description: "Skill99 placement cell combines resume clinics, mock interviews, and hiring company outreach to land graduates in premium roles.",
    url: `${siteMetadata.siteUrl}/placement`,
  },
};

const placementStats = [
  { label: "Companies Interviewed", value: "150+" },
  { label: "Interview Slots Per Week", value: "40" },
  { label: "Avg. Offer Time", value: "48 days" },
];

const successStories = [
  { name: "Rohan Patel", title: "Placed at Meta", highlight: "Building AI dashboards and prepping portfolio for technical interviews." },
  { name: "Sneha Iyer", title: "Placed at Infosys", highlight: "Cloud automation sprint + resume clinic led to multiple offers." },
];

export default function PlacementPage() {
  return (
    <div className="space-y-10">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Placement Support</p>
          <h1 className="text-4xl font-semibold text-slate-900">Strategy-first placement cell</h1>
          <p className="mt-3 text-slate-600">
            Our placement innovators run 99-day playbooks combining resume architecture, mock interviews, hiring partner sprints, and salary coaching.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="grid gap-6 md:grid-cols-3">
            {placementStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
                <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-semibold text-slate-900">Placement Process</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {[
              "Resume blueprint & ATS review",
              "Mock interview intelligence (technical + HR)",
              "Hiring partner matchmaking and referral introductions",
              "Salary negotiation & offer evaluation coaching",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-semibold text-slate-900">Resume Support & Mock Interviews</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Resume Support</h3>
              <p className="mt-2 text-sm text-slate-600">
                Personalized story crafting, ATS scanning, and recruiter-approved formatting.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">Mock Interviews</h3>
              <p className="mt-2 text-sm text-slate-600">
                Weekly peer + mentor sessions, recorded playback, and targeted rubrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Hiring Partners</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm uppercase tracking-[0.4em] text-slate-500 sm:grid-cols-4">
            {hiringPartners.map((partner) => (
              <div key={partner} className="rounded-2xl border border-slate-200 bg-white py-4">{partner}</div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-2xl font-semibold text-slate-900">Success Stories</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {successStories.map((story) => (
              <div key={story.name} className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
                <p className="text-lg font-semibold text-slate-900">{story.name}</p>
                <p className="text-primary">{story.title}</p>
                <p className="mt-3">{story.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
