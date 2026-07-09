import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import { siteMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: "Blog · Skill99",
  description: "Insights on career acceleration, mentorship, and tech learning from Skill99's team.",
  openGraph: {
    title: "Blog · Skill99",
    description: "Insights on career acceleration, mentorship, and tech learning from Skill99's team.",
    url: `${siteMetadata.siteUrl}/blog`,
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="space-y-10">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Skill99 Blog</p>
          <h1 className="text-4xl font-semibold text-slate-900">Stories on programs, placements, and AI</h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{post.category}</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">{post.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{post.excerpt}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.4em] text-primary">
                  {new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
