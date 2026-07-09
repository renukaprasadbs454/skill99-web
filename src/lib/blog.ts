import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import path from "path";

const POSTS_PATH = path.join(process.cwd(), "src/content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
};

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const files = await readdir(POSTS_PATH);
  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const source = await readFile(path.join(POSTS_PATH, file), "utf-8");
      const { content, data } = matter(source);
      return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        content,
      } as BlogPost;
    }),
  );
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const source = await readFile(path.join(POSTS_PATH, `${slug}.md`), "utf-8");
    const { content, data } = matter(source);
    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt,
      content,
    };
  } catch (error) {
    console.error("Failed to load blog post", error);
    return null;
  }
}
