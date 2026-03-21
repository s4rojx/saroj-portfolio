import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import { ContentCard } from "@/components/ContentCard";

export const metadata: Metadata = {
  title: "Poems — Saroj Ghosh",
  description: "Poems by Saroj Ghosh.",
};

export default function Poems() {
  const posts = getAllPosts("poems");

  return (
    <div>
      <h1 className="text-glow mb-10"
        style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: "36px", color: "#fff" }}>
        Poems
      </h1>
      {posts.length === 0 ? (
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "16px", color: "#666" }}>
          No poems yet.
        </p>
      ) : (
        <div>
          {posts.map((post) => (
            <ContentCard
              key={post.slug}
              title={post.title}
              date={post.date}
              tags={post.tags}
              href={`/poems/${post.slug}`}
              variant="poem"
            />
          ))}
        </div>
      )}
    </div>
  );
}
