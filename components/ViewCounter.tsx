"use client";

import { useEffect, useState } from "react";

export function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/views/${slug}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => setViews(data.views))
      .catch(() => {});
  }, [slug]);

  if (views === null) return null;

  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "#555",
      }}
    >
      {views.toLocaleString()} {views === 1 ? "view" : "views"}
    </span>
  );
}
