import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { ContentCard } from "@/components/ContentCard";

export const metadata: Metadata = {
  title: "Blogs — Saroj Ghosh",
  description: "Blog posts by Saroj Ghosh on tech, code, and life.",
};

export default function Blogs() {
  const posts = getAllPosts("blogs");

  return (
    <div>
      <h1 className="text-glow mb-10"
        style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: "36px", color: "#fff" }}>
        Blogs
      </h1>
      {posts.length === 0 ? (
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "16px", color: "#666" }}>
          No posts yet.
        </p>
      ) : (
        <div>
          {posts.map((post) => (
            <ContentCard
              key={post.slug}
              title={post.title}
              date={post.date}
              tags={post.tags}
              href={`/blogs/${post.slug}`}
              variant="blog"
            />
          ))}
        </div>
      )}
    </div>
  );
}
