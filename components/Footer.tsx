import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ borderTop: "0.5px solid #1a1a1a" }}>
      <div className="w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 py-6 mb-14 md:mb-0">
        <div className="flex items-center justify-between"
          style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#555" }}>
          <span>© Saroj Ghosh 2026.</span>
          <Link href="/now"
            className="transition-all duration-200 hover:brightness-125"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              fontWeight: 700,
              color: "#c5793a",
              textShadow: "0 0 8px rgba(197,121,58,0.25)",
            }}>
            now
          </Link>
        </div>
      </div>
    </footer>
  );
}
