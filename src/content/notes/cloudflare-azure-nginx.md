---
title: "A Static Delivery Path with Cloudflare, Azure, and Nginx"
description: "A personal-site deployment path designed to be simple, verifiable, and reversible."
published: 2026-06-05
category: "Infrastructure"
lang: en
tags: ["Cloudflare", "Azure", "Nginx", "Astro"]
---

A personal homepage does not need a complex runtime. For Astro's static output, a short delivery path is usually more reliable: Git manages the source, a local machine or CI produces `dist/`, Nginx serves static files, and Cloudflare sits at the public edge.

## Separate building from serving

The server stores build artifacts and does not run Node.js. A release is uploaded to a temporary directory and checked before the active site directory changes, reducing the chance of exposing a half-finished deployment.

```bash
npm ci
npm run build
rsync -az --delete dist/ server:/tmp/site-next/
```

Nginx can serve Astro routes through directory indexes. A missing path should return a real 404 rather than falling back to the homepage, which improves search behavior and diagnosis.

## Cache policy

Content-hashed assets under `/_astro/` can use long-lived immutable caching. HTML should have a short lifetime so content changes appear quickly. Cloudflare and origin rules should agree; otherwise stale-content diagnosis gains another source of uncertainty.

## Rollback

Keeping the previous release directory and pointing a symbolic link at the active version provides a low-cost rollback. A deployment is complete not when upload finishes, but when status codes, important pages, and static assets have been checked through the public domain.
