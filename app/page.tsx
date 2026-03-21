import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saroj Ghosh",
  description: "An engineering student, a developer, and sometimes a writer.",
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center" style={{ minHeight: "calc(100vh - 200px)" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "16px", color: "#888", letterSpacing: "0.02em" }}>
        Hello, I am
      </p>
      <h1 className="text-glow mt-3"
        style={{
          fontFamily: "var(--font-jakarta)",
          fontWeight: 800,
          fontSize: "clamp(44px, 7vw, 64px)",
          color: "#fff",
          lineHeight: 1.1,
        }}>
        Saroj Ghosh
      </h1>
      <p className="mt-5"
        style={{
          fontFamily: "var(--font-jakarta)",
          fontWeight: 300,
          fontSize: "20px",
          color: "#777",
          lineHeight: 1.7,
        }}>
        A Engineering student, A Developer, And sometimes a writer.
      </p>
    </div>
  );
}
