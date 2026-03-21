import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Rubik, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Saroj Ghosh",
  description: "An engineering student, a developer, and sometimes a writer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${rubik.variable} ${jetbrainsMono.variable}`}
      style={{ backgroundColor: "#0e0e0e" }}
    >
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{ backgroundColor: "#0e0e0e", color: "#aaa", fontFamily: "var(--font-jakarta), sans-serif" }}
      >
        <Navbar />
        <main className="flex-1 w-full max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-20 md:pt-24 md:pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
