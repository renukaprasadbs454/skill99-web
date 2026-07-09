import type { Metadata } from "next";
import Image from "next/image";
import { testimonials } from "@/data/site";
import { siteMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: "Success Stories · Skill99",
  description: "Real student transitions, salary growth, and placement wins from Skill99’s 99-day programs.",
  openGraph: {
    title: "Success Stories · Skill99",
    description: "Real student transitions, salary growth, and placement wins from Skill99’s 99-day programs.",
    url: `${siteMetadata.siteUrl}/success`,
  },
};

const storyHighlights = [
  { label: "Average Salary Hike", value: "43%" },
  { label: "Career Transitions", value: "98%" },
  { label: "Hiring Partners", value: "120+" },
];

export default function SuccessPage() {
  return (
    <div className="space-y-12">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Success Stories</p>
          <h1 className="text-4xl font-semibold text-slate-900">Salary growth, career changes, and confidence</h1>
          <p className="mt-3 text-slate-600">
            Hear from students who joined Skill99 with zero experience and left with offers from top tech, design, and product firms.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="grid gap-6 md:grid-cols-3">
            {storyHighlights.map((stat) => (
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
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-lg font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.company}</p>
                <p className="mt-3 text-sm text-slate-600">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Video Stories</p>
                <h2 className="text-3xl font-semibold text-slate-900">Watch the transformation</h2>
                <p className="mt-3 text-sm text-slate-600">
                  Real interviews from students who built projects, practiced mock interviews, and landed premium jobs in 99 days.
                </p>
              </div>
              <div className="space-y-3">
                {[1, 2].map((index) => (
                <div key={index} className="relative h-40 overflow-hidden rounded-2xl border border-slate-200">
                    <Image
                      src={`https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80`}
                      alt="Video placeholder"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.4em] text-white">
                      View Story
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
