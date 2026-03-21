"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/blogs", label: "blogs" },
  { href: "/poems", label: "poems" },
  { href: "/handles", label: "handles" },
  { href: "/resume", label: "resume" },
];

// mobile icons
const icons: Record<string, React.ReactNode> = {
  home: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10"/></svg>,
  about: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>,
  blogs: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h4"/></svg>,
  poems: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20l-7-7a4.5 4.5 0 116.36-6.36L12 7.28l.64-.64A4.5 4.5 0 1119 13z"/></svg>,
  handles: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>,
  resume: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
};

export function Navbar() {
  const pathname = usePathname();
  const [logoExists, setLogoExists] = useState(false);

  useEffect(() => {
    fetch("/logo.svg", { method: "HEAD" })
      .then((res) => {
        const ct = res.headers.get("content-type") || "";
        if (res.ok && ct.includes("svg")) setLogoExists(true);
      })
      .catch(() => {});
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* desktop */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: "#0e0e0e" }}>
        <div className="flex items-center justify-between max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 py-5">
          <Link href="/">
            {logoExists ? (
              <Image src="/logo.svg" alt="Logo" width={42} height={42}
                className="rounded-full" style={{ border: "1px solid #333" }} />
            ) : (
              <div className="flex items-center justify-center"
                style={{
                  width: "42px", height: "42px", borderRadius: "50%",
                  border: "1px solid #333", fontFamily: "var(--font-mono)",
                  fontSize: "14px", color: "#888",
                }}>
                SG
              </div>
            )}
          </Link>
          <div className="flex items-center" style={{ fontFamily: "var(--font-mono)", fontSize: "15px" }}>
            {navLinks.map((link, i) => (
              <span key={link.href} className="flex items-center">
                <Link href={link.href}
                  className="transition-colors duration-200"
                  style={{
                    color: isActive(link.href) ? "#ffffff" : "#777",
                    textShadow: isActive(link.href) ? "0 0 40px rgba(255,255,255,0.15), 0 0 2px rgba(255,255,255,0.25)" : "none",
                  }}
                  onMouseEnter={(e) => { if (!isActive(link.href)) e.currentTarget.style.color = "#ddd"; }}
                  onMouseLeave={(e) => { if (!isActive(link.href)) e.currentTarget.style.color = "#777"; }}>
                  {link.label}
                </Link>
                {i < navLinks.length - 1 && (
                  <span className="mx-3" style={{ color: "#333" }}>/</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around py-2 px-1"
        style={{ backgroundColor: "#0e0e0e", borderTop: "0.5px solid #1a1a1a" }}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}
            className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors"
            style={{
              color: isActive(link.href) ? "#fff" : "#666",
              backgroundColor: isActive(link.href) ? "#1a1a1a" : "transparent",
            }}>
            {icons[link.label]}
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px" }}>
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
    </>
  );
}
