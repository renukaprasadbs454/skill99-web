import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/blog";
import { siteMetadata } from "@/config/seo";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Blog Post · Skill99",
      description: siteMetadata.description,
    };
  }

  return {
    title: `${post.title} · Skill99`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} · Skill99`,
      description: post.excerpt,
      url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="space-y-8">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{post.category}</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">{post.title}</h1>
          <p className="mt-2 text-sm text-slate-500">
            {new Date(post.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-6xl px-4 py-10">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]} className="space-y-6 text-sm text-slate-700">
            {post.content}
          </ReactMarkdown>
        </div>
      </section>
    </article>
  );
}
