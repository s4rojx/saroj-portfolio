# Saroj Ghosh — Portfolio

Live site: [https://saroj-portfolio-beta.vercel.app/](https://saroj-portfolio-beta.vercel.app/)

Minimal dark portfolio built with Next.js 14, Tailwind CSS, and shadcn/ui. Content is managed through Markdown files.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding a Blog Post

1. Create a `.md` file in `/content/blogs/` (filename becomes the URL slug)
2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2026-03-20"
tags: ["tech", "opinion"]
description: "Short SEO meta description."
---

Your blog content in Markdown.
```

3. Push to GitHub → Vercel auto-deploys.

## Adding a Poem

Same process — create a `.md` file in `/content/poems/`:

```markdown
---
title: "your poem title"
date: "2026-03-20"
tags: ["night", "code"]
description: "A short description."
---

line one
line two

stanza break
```

Line breaks are preserved exactly as written.

## Adding Images to Posts

1. Place images in `/public/images/`
2. Reference in any `.md` file:

```markdown
![caption text](/images/my-photo.jpg)
```

Two or three consecutive images automatically become a grid.

