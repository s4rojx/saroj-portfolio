import type { Metadata } from "next";
import { getNowContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Now — Saroj Ghosh",
  description: "What Saroj Ghosh is currently focused on.",
};

export default async function Now() {
  const { htmlContent } = await getNowContent();

  return (
    <div style={{ maxWidth: "800px" }}>
      <p className="mb-8"
        style={{ fontFamily: "var(--font-mono)", fontSize: "15px", color: "#777", textTransform: "lowercase" }}>
        now
      </p>

      <div className="prose"
        style={{ fontFamily: "var(--font-jakarta)", fontWeight: 300, fontSize: "18px", color: "#aaa", lineHeight: 1.9 }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      <p className="mt-16"
        style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "#666" }}>
        This page is inspired by the now movement, started by Derek Sivers. It's a way to share what I'm focused on right now.
      </p>
    </div>
  );
}
