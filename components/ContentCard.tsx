import Link from "next/link";

interface ContentCardProps {
  title: string;
  date: string;
  tags: string[];
  href: string;
  variant: "blog" | "poem";
}

export function ContentCard({ title, date, tags, href, variant }: ContentCardProps) {
  return (
    <Link href={href} className="block py-5 transition-colors group"
      style={{ borderBottom: "0.5px solid #1c1c1c" }}>
      <div className="flex items-start justify-between gap-4">
        <h3 className={`group-hover:text-white transition-colors ${variant === "poem" ? "italic" : ""}`}
          style={{
            fontFamily: variant === "poem" ? "var(--font-rubik)" : "var(--font-jakarta)",
            fontWeight: variant === "poem" ? 300 : 400,
            fontSize: "20px",
            color: variant === "poem" ? "#d0d0d0" : "#e0e0e0",
          }}>
          {title}
        </h3>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "#666", whiteSpace: "nowrap" }}>
          {date}
        </span>
      </div>
      {tags.length > 0 && (
        <div className="flex gap-2 mt-3 flex-wrap">
          {tags.map((tag) => (
            <span key={tag}
              className="inline-block px-2.5 py-1 rounded"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "#777",
                border: "0.5px solid #2a2a2a",
              }}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
