import type { Metadata } from "next";
import { siteMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: "Refund Policy · Skill99",
  description: "Refund and cancellation terms for Skill99 programs.",
  openGraph: {
    title: "Refund Policy · Skill99",
    description: "Refund and cancellation terms for Skill99 programs.",
    url: `${siteMetadata.siteUrl}/refund`,
  },
};

export default function RefundPage() {
  return (
    <div className="space-y-10">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-semibold text-slate-900">Refund Policy</h1>
          <p className="mt-2 text-sm text-slate-600">
            We value accountability. Here&rsquo;s how refunds work for Skill99 programs.
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
            <p>
              Refund requests are eligible within the first 7 days of program start if onboarding tasks were not completed and no mentor hours were consumed.
            </p>
            <p>
              After 7 days, we evaluate refund requests on a case-by-case basis in consultation with mentors and placement counselors.
            </p>
            <p className="text-xs text-slate-500">
              Note: Processing may include identity verification and fees for resources already accessed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
