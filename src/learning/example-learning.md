---
title: "Mental Models for CSS Grid"
maturity: "sapling"
date: 2026-01-30
tags: ["learning", "css", "web-design"]
related: ["box-model-deep-dive", "flexbox-vs-grid"]
---

## The Core Concept

I used to think of Grid as "Flexbox but 2D," but that's a limiting way to view it. Grid is actually about **defining the space first**, then placing items into it.

### Observations

- **Implicit vs Explicit:** The browser can "guess" where things go if you don't tell it (implicit), but defining your `grid-template-areas` is much more maintainable.
- **The `fr` unit:** It isn't a percentage; it's a share of _available_ space. This is a crucial distinction when using gaps.

### Open Questions / To-Research

- [ ] How does `subgrid` behave in older Safari versions?
- [ ] Look into the performance cost of deeply nested grids.

### Related Notes

- [[box-model-deep-dive]] — Understanding how margins affect grid tracks.
- [[flexbox-vs-grid]] — When to reach for which tool.
