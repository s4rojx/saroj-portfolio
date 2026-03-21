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
    <Link href={href} className="block py-4 transition-colors"
      style={{ borderBottom: "0.5px solid #181818" }}>
      <div className="flex items-start justify-between gap-4">
        <h3 className={variant === "poem" ? "italic" : ""}
          style={{
            fontFamily: variant === "poem" ? "var(--font-rubik)" : "var(--font-jakarta)",
            fontWeight: variant === "poem" ? 300 : 400,
            fontSize: "15px",
            color: variant === "poem" ? "#d0d0d0" : "#e0e0e0",
          }}>
          {title}
        </h3>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#333", whiteSpace: "nowrap" }}>
          {date}
        </span>
      </div>
      {tags.length > 0 && (
        <div className="flex gap-2 mt-2 flex-wrap">
          {tags.map((tag) => (
            <span key={tag}
              className="inline-block px-2 py-0.5 rounded"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "#444",
                border: "0.5px solid #222",
              }}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
