import { visit } from "unist-util-visit";
import type { Root, Paragraph, Image } from "mdast";

// Remark plugin: wraps consecutive images in grid divs
export function remarkImageGrid() {
  return (tree: Root) => {
    visit(tree, "paragraph", (node: Paragraph, index, parent) => {
      if (!parent || index === undefined) return;

      // Check if paragraph contains only image nodes
      const images = node.children.filter(
        (child): child is Image => child.type === "image"
      );
      if (images.length < 2 || images.length !== node.children.length) return;

      const gridClass = images.length === 2 ? "grid-2" : "grid-3";
      const imgTags = images
        .map((img) => {
          const alt = img.alt || "";
          const caption = alt
            ? `<span class="image-caption">${alt}</span>`
            : "";
          return `<div><img src="${img.url}" alt="${alt}" style="border-radius:8px;border:0.5px solid #1e1e1e;width:100%" />${caption}</div>`;
        })
        .join("\n");

      const htmlNode = {
        type: "html" as const,
        value: `<div class="image-grid ${gridClass}">\n${imgTags}\n</div>`,
      };

      parent.children.splice(index!, 1, htmlNode);
    });
  };
}
