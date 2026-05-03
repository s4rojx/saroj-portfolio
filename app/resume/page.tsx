import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume — Saroj Ghosh",
  description: "Download or view the resume of Saroj Ghosh.",
};

export default function Resume() {
  return (
    <div>
      <h1 className="text-glow mb-8"
        style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: "36px", color: "#fff" }}>
        Resume
      </h1>


      <div className="w-full mb-6" style={{ border: "0.5px solid #1c1c1c", borderRadius: "8px", overflow: "hidden" }}>
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="w-full"
          style={{ height: "80vh", border: "none", backgroundColor: "#141414" }}
        >
          <p style={{ color: "#888", padding: "2rem", fontFamily: "var(--font-mono)", fontSize: "13px" }}>
            Your browser can&apos;t display PDFs inline.{" "}
            <a href="/resume.pdf" style={{ color: "#fff" }}>Download it here ↓</a>
          </p>
        </object>
      </div>


      <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer"
        className="inline-block transition-colors duration-200 hover:text-white"
        style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#555", padding: "8px 0" }}>
        ↓ download pdf
      </Link>
    </div>
  );
}
