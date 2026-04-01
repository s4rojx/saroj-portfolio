import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Saroj Ghosh",
  description: "Things I've built — apps, tools, and experiments.",
};

const projects = [
  {
  title: "DSA Forge",
  description: "A full-stack DSA tracking platform for mastering problems through patterns, progress tracking.",
  longDescription:
    "DSA Forge is a full-stack web application for learning and tracking Data Structures and Algorithms progress through topic-based and pattern-based practice. It includes secure credentials authentication, protected dashboard and profile pages, problem completion tracking.",
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Prisma"
  ],
  github: "https://github.com/s4rojx/dsa-forge",
  live: "https://dsa-forge-five.vercel.app/",
  status: "live" as const,
},
{
    title: "Portfolio",
    description: "This very website — a minimal dark portfolio with markdown-powered blog and poetry sections.",
    longDescription: "Built with Next.js 14, Tailwind CSS, and shadcn/ui. Content is managed through markdown files. Features include view counters via Upstash Redis, SEO optimization, and auto-deployment via Vercel.",
    tech: ["Next.js", "Tailwind CSS", "Markdown", "Upstash Redis"],
    github: "https://github.com/s4rojx/saroj-portfolio",
    live: "https://saroj-portfolio-beta.vercel.app",
    status: "live" as const,
  },
  {
    title: "BlogIt",
    description: "A full-stack blogging platform with authentication, rich text editing, and a clean reading experience.",
    longDescription: "Built with the MERN stack. Features include JWT-based auth, markdown support, image uploads, user profiles, and a responsive dark UI. Deployed on Vercel (frontend) and Render (backend).",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/s4rojx/blogit",
    live: "https://blog-it-rohz.vercel.app/",
    status: "live" as const,
  },
  
  // add more projects here
];

export default function Projects() {
  return (
    <div>
      <h1
        className="text-glow mb-3"
        style={{
          fontFamily: "var(--font-jakarta)",
          fontWeight: 700,
          fontSize: "36px",
          color: "#fff",
        }}
      >
        Projects
      </h1>
      <p
        className="mb-10"
        style={{
          fontFamily: "var(--font-jakarta)",
          fontWeight: 300,
          fontSize: "16px",
          color: "#666",
        }}
      >
        Things I&apos;ve built — click a card to see more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
