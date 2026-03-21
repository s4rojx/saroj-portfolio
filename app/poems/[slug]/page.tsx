import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";

export async function generateStaticParams() {
  const posts = getAllPosts("poems");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug("poems", slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — Saroj Ghosh`,
    description: post.description,
  };
}

export default async function PoemPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug("poems", slug);
  if (!post) notFound();

  return (
    <article>
      <Link href="/poems"
        className="inline-flex items-center gap-2 mb-8 transition-colors hover:text-white"
        style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "#555" }}>
        ← back to poems
      </Link>
      <h1 className="text-glow"
        style={{ fontFamily: "var(--font-rubik)", fontWeight: 400, fontSize: "34px", color: "#fff" }}>
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
      <div className="prose poem-body"
        style={{ fontFamily: "var(--font-rubik)", fontWeight: 300, fontSize: "19px", color: "#bbb", lineHeight: 2.0 }}
        dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}
      />
    </article>
  );
}
