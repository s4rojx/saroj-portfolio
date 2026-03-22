import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { ViewCounter } from "@/components/ViewCounter";

export async function generateStaticParams() {
  const posts = getAllPosts("blogs");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("blogs", slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — Saroj Ghosh`,
    description: post.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug("blogs", slug);
  if (!post) notFound();

  return (
    <article>
      <div className="flex items-center justify-between mb-8">
        <Link href="/blogs"
          className="inline-flex items-center gap-2 transition-colors hover:text-white"
          style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "#555" }}>
          ← back to blogs
        </Link>
        <ViewCounter slug={slug} />
      </div>
      <h1 className="text-glow"
        style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: "36px", color: "#fff" }}>
        {post.title}
      </h1>
      <div className="flex items-center gap-3 mt-4 flex-wrap"
        style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "#666" }}>
        <span>{post.date}</span>
        {post.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 rounded"
            style={{ border: "0.5px solid #2a2a2a", fontSize: "12px", color: "#777" }}>
            {tag}
          </span>
        ))}
      </div>
      <div className="my-8" style={{ borderBottom: "0.5px solid #1c1c1c" }} />
      <div className="prose"
        style={{ fontFamily: "var(--font-jakarta)", fontWeight: 300, fontSize: "18px", color: "#aaa", lineHeight: 1.85, maxWidth: "75ch" }}
        dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}
      />
    </article>
  );
}
