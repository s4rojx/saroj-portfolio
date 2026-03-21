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

// Simple inline SVG icons for mobile nav
const icons: Record<string, JSX.Element> = {
  home: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10"/></svg>,
  about: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>,
  blogs: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h4"/></svg>,
  poems: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20l-7-7a4.5 4.5 0 116.36-6.36L12 7.28l.64-.64A4.5 4.5 0 1119 13z"/></svg>,
  handles: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>,
  resume: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>,
};

export function Navbar() {
  const pathname = usePathname();
  const [logoExists, setLogoExists] = useState(true);

  // Check if logo.svg exists
  useEffect(() => {
    fetch("/logo.svg", { method: "HEAD" })
      .then((res) => { if (!res.ok) setLogoExists(false); })
      .catch(() => setLogoExists(false));
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-6 md:px-12 py-4 max-w-[720px] mx-auto"
        style={{ backgroundColor: "#0e0e0e" }}>
        <Link href="/">
          {logoExists ? (
            <Image src="/logo.svg" alt="Logo" width={38} height={38}
              className="rounded-full border border-[#333]" />
          ) : (
            <div className="w-[38px] h-[38px] rounded-full border border-[#333] flex items-center justify-center"
              style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#888" }}>
              SG
            </div>
          )}
        </Link>
        <div className="flex items-center gap-0" style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
          {navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center">
              <Link href={link.href}
                className="transition-colors duration-200"
                style={{ color: isActive(link.href) ? "#ffffff" : "#555555" }}
                onMouseEnter={(e) => { if (!isActive(link.href)) e.currentTarget.style.color = "#cccccc"; }}
                onMouseLeave={(e) => { if (!isActive(link.href)) e.currentTarget.style.color = "#555555"; }}>
                {link.label}
              </Link>
              {i < navLinks.length - 1 && (
                <span className="mx-2" style={{ color: "#2a2a2a" }}>/</span>
              )}
            </span>
          ))}
        </div>
      </nav>

      {/* Mobile bottom navbar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around py-2 px-1 border-t"
        style={{ backgroundColor: "#0e0e0e", borderColor: "#1a1a1a" }}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}
            className="flex flex-col items-center gap-1 px-2 py-1.5 rounded-lg transition-colors"
            style={{
              color: isActive(link.href) ? "#fff" : "#555",
              backgroundColor: isActive(link.href) ? "#1a1a1a" : "transparent",
            }}>
            {icons[link.label]}
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px" }}>
              {link.label}
            </span>
          </Link>
        ))}
      </nav>
    </>
  );
}
