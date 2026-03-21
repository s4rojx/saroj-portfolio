import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { remarkImageGrid } from "./remark-image-grid";

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  content: string;
  htmlContent?: string;
}

const contentDir = path.join(process.cwd(), "content");

// Get all posts of a given type, sorted newest first
export function getAllPosts(type: "blogs" | "poems"): Post[] {
  const dir = path.join(contentDir, type);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      tags: data.tags || [],
      description: data.description || "",
      content,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

// Get a single post with rendered HTML
export async function getPostBySlug(
  type: "blogs" | "poems",
  slug: string
): Promise<Post | null> {
  const filePath = path.join(contentDir, type, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const processed = await remark()
    .use(remarkImageGrid)
    .use(html, { sanitize: false })
    .process(content);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    tags: data.tags || [],
    description: data.description || "",
    content,
    htmlContent: processed.toString(),
  };
}

// Read and render the /now page content
export async function getNowContent(): Promise<{
  htmlContent: string;
}> {
  const filePath = path.join(contentDir, "now.md");
  if (!fs.existsSync(filePath)) {
    return { htmlContent: "<p>Nothing here yet.</p>" };
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  const processed = await remark()
    .use(html, { sanitize: false })
    .process(content);

  return { htmlContent: processed.toString() };
}
