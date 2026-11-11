"use client";

import { useState } from "react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  live?: string;
  status?: "live" | "in-progress" | "archived";
}

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `${project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-details`;
  const projectMark = project.title.trim().charAt(0).toUpperCase();
  const statusLabel = project.status === "in-progress" ? "in progress" : project.status;

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#3a3a3a] hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
      style={{
        background: "linear-gradient(180deg, #181818 0%, #111 34%, #0d0d0d 100%)",
        border: "1px solid #292929",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.16)",
      }}
    >
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{
              border: "1px solid #383838",
              backgroundColor: "#101010",
              color: "#d4d4d4",
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
            aria-hidden="true"
          >
            {projectMark}
          </div>

          {statusLabel && (
            <span
              className="rounded-full"
              style={{
                border: "1px solid #3a3a3a",
                backgroundColor: "#151515",
                color: "#a5a5a5",
                padding: "5px 10px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              {statusLabel}
            </span>
          )}
        </div>

        <div className="mt-6">
          <h3
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 700,
              fontSize: "22px",
              color: "#f5f5f5",
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>
          <p
            className="mt-3"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 300,
              fontSize: "15px",
              color: "#969696",
              lineHeight: 1.75,
            }}
          >
            {project.description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="rounded-md"
              style={{
                border: "1px solid #303030",
                backgroundColor: "rgba(255,255,255,0.02)",
                color: "#8f8f8f",
                padding: "5px 9px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
              }}
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-between border-t px-6 py-4 text-left transition-colors duration-200 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-inset sm:px-7"
        style={{
          borderColor: "#292929",
          color: "#777",
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
        }}
        aria-expanded={expanded}
        aria-controls={detailsId}
        onClick={() => setExpanded((isExpanded) => !isExpanded)}
      >
        <span>{expanded ? "hide details" : "view details"}</span>
        <span
          className="transition-transform duration-300"
          style={{
            display: "inline-block",
            transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
            fontSize: "16px",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        id={detailsId}
        aria-hidden={!expanded}
        style={{
          maxHeight: expanded ? "320px" : "0px",
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease, opacity 0.25s ease",
        }}
      >
        <div
          className="border-t px-6 pb-6 pt-5 sm:px-7"
          style={{ borderColor: "#292929" }}
        >
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 300,
              fontSize: "14px",
              color: "#a9a9a9",
              lineHeight: 1.8,
            }}
          >
            {project.longDescription}
          </p>

          {(project.github || project.live) && (
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={expanded ? 0 : -1}
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  style={{
                    color: "#858585",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                  }}
                >
                  ↗ github
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={expanded ? 0 : -1}
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                  style={{
                    color: "#858585",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                  }}
                >
                  ↗ live site
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
