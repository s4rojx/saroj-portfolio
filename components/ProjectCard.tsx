"use client";

import { useState } from "react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  live?: string;
  status: "live" | "in-progress" | "archived";
}

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  const statusColor = {
    live: "#4ade80",
    "in-progress": "#facc15",
    archived: "#666",
  };

  return (
    <div
      className="group relative cursor-pointer"
      onClick={() => setExpanded(!expanded)}
      style={{
        background: "#111",
        border: "0.5px solid #1e1e1e",
        borderRadius: "12px",
        padding: "24px",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#333";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1e1e1e";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* header */}
      <div className="flex items-start justify-between mb-3">
        <h3
          style={{
            fontFamily: "var(--font-jakarta)",
            fontWeight: 600,
            fontSize: "20px",
            color: "#fff",
          }}
        >
          {project.title}
        </h3>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: statusColor[project.status],
            padding: "2px 8px",
            border: `0.5px solid ${statusColor[project.status]}33`,
            borderRadius: "999px",
            whiteSpace: "nowrap",
          }}
        >
          {project.status}
        </span>
      </div>

      {/* short description */}
      <p
        style={{
          fontFamily: "var(--font-jakarta)",
          fontWeight: 300,
          fontSize: "15px",
          color: "#888",
          lineHeight: 1.7,
          marginBottom: "16px",
        }}
      >
        {project.description}
      </p>

      {/* tech stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "#777",
              border: "0.5px solid #2a2a2a",
              borderRadius: "4px",
              padding: "3px 8px",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* expanded popover */}
      <div
        style={{
          maxHeight: expanded ? "300px" : "0",
          opacity: expanded ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{
            borderTop: "0.5px solid #1e1e1e",
            paddingTop: "16px",
            marginTop: "4px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontWeight: 300,
              fontSize: "14px",
              color: "#aaa",
              lineHeight: 1.8,
              marginBottom: "16px",
            }}
          >
            {project.longDescription}
          </p>

          {/* links */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="transition-colors hover:text-white"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "#666",
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
                onClick={(e) => e.stopPropagation()}
                className="transition-colors hover:text-white"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "#666",
                }}
              >
                ↗ live
              </a>
            )}
          </div>
        </div>
      </div>

      {/* expand hint */}
      <div
        className="flex justify-center mt-2"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "#444",
        }}
      >
        {expanded ? "click to collapse" : "click to expand"}
      </div>
    </div>
  );
}
