import type { Metadata } from "next";
import { siteMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: "Terms & Conditions · Skill99",
  description: "Terms of use for the Skill99 platform, programs, and community.",
  openGraph: {
    title: "Terms & Conditions · Skill99",
    description: "Terms of use for the Skill99 platform, programs, and community.",
    url: `${siteMetadata.siteUrl}/terms`,
  },
};

const termsList = [
  {
    title: "Course Access",
    content:
      "Programs run for 99 days. Access to mentors, sessions, and resources is granted within this timeline unless otherwise extended.",
  },
  {
    title: "Code of Conduct",
    content:
      "Respect peers, mentors, and follow community guidelines. Harassment or academic dishonesty can lead to removal.",
  },
  {
    title: "Intellectual Property",
    content:
      "Project work remains your IP, but Skill99 can showcase anonymized highlights. Do not share proprietary content without consent.",
  },
];

export default function TermsPage() {
  return (
    <div className="space-y-10">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-semibold text-slate-900">Terms & Conditions</h1>
          <p className="mt-2 text-sm text-slate-600">
            By enrolling in Skill99 programs, you agree to the following terms.
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="space-y-6">
            {termsList.map((term) => (
              <div key={term.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
                <h2 className="text-xl font-semibold text-slate-900">{term.title}</h2>
                <p className="mt-3">{term.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
