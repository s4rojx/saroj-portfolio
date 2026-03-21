import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full max-w-[720px] mx-auto px-6 md:px-12 mb-16 md:mb-0"
      style={{ borderTop: "0.5px solid #1a1a1a", padding: "24px 0" }}>
      <div className="flex items-center justify-between px-6 md:px-12"
        style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#2a2a2a" }}>
        <span>© Saroj Ghosh 2026.</span>
        <Link href="/now"
          className="transition-colors duration-200 hover:text-white"
          style={{ color: "#333", fontFamily: "var(--font-mono)", fontSize: "11px" }}>
          now
        </Link>
      </div>
    </footer>
  );
}
