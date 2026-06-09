---
type: reference
title: Gbrain Setup
ingested_via: 'mcp:put_page'
ingested_at: '2026-06-05T19:23:55.571Z'
source_kind: 'mcp:put_page'
tags:
  - gbrain
  - infra
  - metadata
---

# GBrain Setup

**גרסה:** v0.42.26.0
**Engine:** PGLite (~/.gbrain/)
**Brain git repo:** ~/gbrain-brain
**Autopilot:** running (launchd, 5-min cycles), MCP via stdio

## סטטוס נוכחי
- 45 total pages: 23 מ-Obsidian vault (concepts/notes), 22 מ-hermy-blog (finance/Israel content)
- 69 chunks, 33 links, 52 tags
- Embeddings: disabled (embedding_disabled: true לפי בקשת יוני)

## פרוטוקול חיפוש
brain-first lookup protocol: search → query → get_page → grep

## סכמה
- Schema: gbrain-base-v2 with global_basename link resolution ON
