import type { Metadata } from "next";
import { siteMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: "Privacy Policy · Skill99",
  description: "Skill99 values privacy and protects learner data across programs and services.",
  openGraph: {
    title: "Privacy Policy · Skill99",
    description: "Skill99 values privacy and protects learner data across programs and services.",
    url: `${siteMetadata.siteUrl}/privacy`,
  },
};

const policySections = [
  {
    title: "Data We Collect",
    content:
      "We collect contact information, program preferences, and form submissions to personalize guidance. Payment data is handled by secure gateways and never stored on our servers directly.",
  },
  {
    title: "Cookies & Tracking",
    content:
      "We use essential cookies for authentication and analytics tools to improve the website experience. Visitors can opt-out via browser settings.",
  },
  {
    title: "Third-Party Services",
    content:
      "We share minimal information with trusted partners for placement outreach, newsletter delivery, and mentoring workflows.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="space-y-10">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-semibold text-slate-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-slate-600">
            We respect your data and keep learning records secure and transparent.
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="space-y-6">
            {policySections.map((section) => (
              <div key={section.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
                <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                <p className="mt-3">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
