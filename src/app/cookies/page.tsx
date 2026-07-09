import type { Metadata } from "next";
import { siteMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: "Cookies Policy · Skill99",
  description: "Details on the cookies used across Skill99's website and services.",
  openGraph: {
    title: "Cookies Policy · Skill99",
    description: "Details on the cookies used across Skill99's website and services.",
    url: `${siteMetadata.siteUrl}/cookies`,
  },
};

export default function CookiesPage() {
  return (
    <div className="space-y-10">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h1 className="text-4xl font-semibold text-slate-900">Cookies & Tracking</h1>
          <p className="mt-2 text-sm text-slate-600">
            We use cookies to secure your session, analyze usage, and personalize learning recommendations.
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-6xl space-y-6 px-4 py-6">
          {[
            {
              title: "Essential Cookies",
              description: "Needed to maintain authenticated sessions and keep you logged in.",
            },
            {
              title: "Performance",
              description: "Collects aggregate usage data so we can improve site reliability.",
            },
            {
              title: "Marketing",
              description: "Serves personalized newsletter and program updates matching your interests.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
