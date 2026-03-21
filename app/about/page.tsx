import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Saroj Ghosh",
  description: "Learn more about Saroj Ghosh — engineering student, developer, and writer.",
};

export default function About() {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-16">
      {/* photo */}
      <div className="shrink-0 md:w-[175px]">
        <div className="overflow-hidden mb-5" style={{ borderRadius: "12px", border: "0.5px solid #1e1e1e" }}>
          <Image
            src="/images/saroj.jpg"
            alt="Saroj Ghosh"
            width={175}
            height={175}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <h1 className="text-glow"
          style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: "28px", color: "#fff" }}>
          Saroj Ghosh
        </h1>
        <p className="mt-1"
          style={{ fontFamily: "var(--font-jakarta)", fontWeight: 700, fontSize: "15px", color: "#777" }}>
          Engineering undergrad &amp; Developer.
        </p>
      </div>

      {/* bio */}
      <div className="flex-1" style={{ fontFamily: "var(--font-jakarta)", fontWeight: 300, fontSize: "17px", color: "#aaa", lineHeight: 1.9 }}>
        <p className="mb-5">
          I&apos;m an engineering student who enjoys building things that live on the internet. I care about clean code, simple interfaces, and writing that makes people feel something. Currently, I&apos;m proficient in the MERN stack and also exploring AI and Machine Learning, along with attending regular Codeforces contests (rated 1281) and trying out interesting LeetCode problems.
        </p>
        <p className="mb-5">
          When I&apos;m not coding (which is the major chunk of my time), I write poems — mostly about human emotions, love, loss, and the strange beauty of being alive in the age of machines. Other than poems, I love reading blogs and articles, majorly on technology. I believe technology and art are not opposites; they are different expressions of the same curiosity. I have a never-ending thirst for learning new things and exploring new ideas.
        </p>
        <p>
          I&apos;m currently learning, building, and sharing in public. This website is my corner of the internet — a place for my work, my words, and whatever I&apos;m thinking about right now.
        </p>
      </div>
    </div>
  );
}
