---
title: "Building My Portfolio with Next.js"
date: "2026-03-15"
tags: ["tech", "nextjs"]
description: "How I built this minimal dark portfolio using Next.js 14, Tailwind CSS, and Markdown."
---

I wanted a portfolio that was simple, fast, and easy to update. No CMS, no database — just Markdown files pushed to GitHub.

## Why Next.js

Next.js gives me static generation out of the box. Every blog post and poem is rendered at build time, which means the site is fast and SEO-friendly without any extra work.

## The Stack

The site uses **Next.js 14** with the App Router, **Tailwind CSS** for styling, and **shadcn/ui** for a few minimal components. Content is written in Markdown and parsed with `gray-matter` and `remark`.

## How Content Works

Adding a new post is as simple as creating a `.md` file in the `/content/blogs/` folder with some frontmatter:

```markdown
---
title: "Your Post Title"
date: "2026-03-15"
tags: ["tag1", "tag2"]
---

Your content here.
```

Push to GitHub, and Vercel auto-deploys. No build steps to think about.

> The best tools are the ones that get out of your way.

That is the philosophy behind this site. Write, push, done.
