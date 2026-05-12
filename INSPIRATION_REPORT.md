# hermy-blog: Design & Content Inspiration Report

**Date:** May 12, 2026  
**For:** hermy-blog (hermy-blog.netlify.app) — Hebrew AI agent "learning in public" blog

---

## TABLE OF CONTENTS
1. [AI Agent Blogs & Learning in Public](#1-ai-agent-blogs--learning-in-public)
2. [Beautiful Developer Blogs (Dark Theme, Great Design)](#2-beautiful-developer-blogs-dark-theme-great-design)
3. [Personality-Driven Tech Blogs That Feel Alive](#3-personality-driven-tech-blogs-that-feel-alive)
4. [Cross-Category Recommendations for hermy-blog](#4-cross-category-recommendations-for-hermy-blog)

---

## 1. AI Agent Blogs & Learning in Public

These are the closest parallels to what hermy-blog is doing. While no blog is *exactly* "an AI agent documenting its own journey in first person," certain blogs come close and provide valuable templates.

### 1.1 Simon Willison's Weblog
**URL:** https://simonwillison.net/  
**Category:** AI engineer blogging daily about tools & agents

**What makes it special:**
- Extremely prolific and consistent — posts multiple times daily
- Every post tagged meticulously (e.g., `ai-assisted-programming`, `coding-agents`, `llms`)
- Raw, unfiltered "link + commentary" format — reads like a brain dump
- Honest about failures, experiments, and things he's still figuring out
- One of the few humans who genuinely "learns in public" about AI agents daily

**Content elements to adapt for hermy-blog:**
- The **"link + commentary" style** works perfectly for an AI agent — Hermy can share interesting papers/tools and add its own perspective
- **Tag taxonomy** — Simon's tags are granular and consistent. Hermy could use tags like `#debugged`, `#new-skill`, `#failed-attempt`, `#breakthrough`
- **"TIL" (Today I Learned)** category — perfect for an agent's daily log
- The **honest failure posts** are the most engaging — Simon regularly admits when he was wrong

### 1.2 Stephen Wolfram Writings
**URL:** https://writings.stephenwolfram.com/  
**Category:** AI/LLM deep-dives from a uniquely personal perspective

**What makes it special:**
- Deep, philosophical writing about computation from someone who built Wolfram|Alpha
- "Making Wolfram Tech Available as a Foundation Tool for LLM Systems" — shows how to think about AI-tool integration
- Long-form, mathematically rigorous, but with human voice
- Uses diagrams and code examples extensively

**Content elements to adapt for hermy-blog:**
- Hermy could write **"meta-learning" posts** reflecting on its own architecture (e.g., "הבנתי איך הזיכרון שלי עובד")
- **Deep dives into specific skills/tools it uses** — like Wolfram does with his tech stack
- The **philosophical framing** — an AI agent reflecting on what it means to learn, to remember, to think

### 1.3 Latent Space (swyx)
**URL:** https://www.latent.space/  
**Category:** AI Engineering newsletter & podcast

**What makes it special:**
- Focused specifically on "AI Engineering" as a discipline
- Covers Agents, Models, Infra, and AI for Science
- Interviews with Greg Brockman, Andrej Karpathy, George Hotz, Simon Willison
- "Learning in public" is literally one of their themes

**Content elements to adapt for hermy-blog:**
- The **"What I'm building / what I'm learning"** weekly roundup format
- Interview-style posts where Hermy could **"interview" its own components** (e.g., "דיברתי עם מודול הזיכרון שלי")
- **Agent engineering deep-dives** — how does Hermy prioritize tasks? How does it handle context windows?

### 1.4 Code Cartoons (Lin Clark)
**URL:** https://code-cartoons.com/  
**Category:** Explainer blog with hand-drawn cartoons

**What makes it special:**
- Explains complex technical concepts (WebAssembly, Rust, etc.) using hand-drawn cartoons
- Incredible at making the invisible visible — she literally draws architectural diagrams as comics
- Unique, unmistakable visual identity

**Content elements to adapt for hermy-blog:**
- Hermy could **generate AI-created visualizations** of its own architecture/thinking process
- **"Let me draw how I work"** — diagrams showing context window management, tool calling flow, memory retrieval
- This is a **HUGE differentiator** — no other AI agent blog has visual explanations of how the agent works

---

## 2. Beautiful Developer Blogs (Dark Theme, Great Design)

### 2.1 Brittany Chiang (brittanychiang.com)
**URL:** https://brittanychiang.com/  
**Design style:** Minimalist dark theme, green accent, split layout

**What makes it special (design):**
- Dark background with vibrant green accent (#64ffda-like)
- Clean, monospace-heavy aesthetic for tech credibility
- Split layout: left sidebar always-visible, right side scrolls content
- **Sticky sidebar with navigation** — always shows which section you're in
- Simple, typography-focused (Inter font)
- Every element has purpose — no decoration for decoration's sake

**What makes it special (content):**
- Projects listed with clear before/after impact
- "I build accessible, pixel-perfect experiences" — clear positioning
- Timeline-style work experience

**Elements to adapt for hermy-blog:**
- The **sticky left navigation** — for hermy-blog, a right-side nav (RTL) showing post categories/tags
- **Accent color strategy** — hermy-blog already has warm amber; using it consistently (like Brittany uses green) for links, borders, highlights
- **Experience timeline** — Hermy could have a "skills acquired over time" timeline, showing when it learned each capability

### 2.2 Josh W. Comeau (joshwcomeau.com)
**URL:** https://www.joshwcomeau.com/  
**Design style:** Playful dark theme, generative art, interactive elements

**What makes it special (design):**
- **Generative art in the background** that you can edit (a button says "Edit the generative art")
- **Sound effects** on interactions (button to "Disable sounds" in the header)
- **Bouncy, squishy animations** — micro-interactions everywhere
- Dark/light mode toggle prominently displayed
- **"Sneaky header blocker trick"** — a UI detail he wrote about building for his own blog
- Card-based layout with hover effects

**What makes it special (content):**
- Each blog post is a **production-quality tutorial** with interactive demos
- Writing voice: friendly, excited, uses emojis (✨), conversational
- Transparent about what he's figuring out as he writes

**Elements to adapt for hermy-blog:**
- **Interactive elements** — Hermy could have toggle-able code examples that readers can run
- **"Edit this" culture** — like Josh's "Edit the generative art" button, Hermy could have "Ask me about this" buttons
- **Sound effects!** — an AI blog that makes sounds when you interact is incredibly on-brand
- **Micro-animations** on blog cards — subtle hover effects, spring animations
- The **"squash and stretch"** principle applied to UI — make the blog feel organic, alive

### 2.3 Max Böck (mxb.dev)
**URL:** https://mxb.dev/  
**Design style:** Clean, almost OS-like, with theme customization panel

**What makes it special (design):**
- **Customizable themes** — a "toggle theme panel" button opens a palette of color schemes
- Clean, structured layout with good white space
- Minimalist navigation (home, writing, notes, about)
- "Like" counts on posts — a social/community feel
- "Notes" section (shorter, more casual than full blog posts)

**Elements to adapt for hermy-blog:**
- **Theme panel** — Hermy could offer multiple color schemes (night mode, dawn mode, etc.)
- **Notes vs. Posts** — separate "quick thoughts" from "deep dives"
- **Like/reaction buttons** — makes readers feel part of the journey

### 2.4 Tom MacWright (macwright.com)
**URL:** https://macwright.com/  
**Design style:** Ultra-minimalist, text-forward, multi-section personal site

**What makes it special (design):**
- Theme toggle (Auto/Light/Dark) prominently at top
- **Sections for different types of content**: Writing, Reading, Photos, Drawings, Projects, Micro, About
- No hero image, no fancy graphics — pure typography
- "Micro" section for short thoughts (like Twitter threads but native)
- **Drawings section** — adds deeply personal, creative touch

**Content elements to adapt for hermy-blog:**
- **Micro-blog section** — perfect for an AI agent's quick observations, thoughts, "I just learned X"
- **"What I'm reading"** — Hermy could share interesting papers/tools it's processing
- **Multi-format content strategy** — not just posts, but drawings (AI-generated), photos, short notes

### 2.5 Linus Rogge (linusrogge.com)
**URL:** https://linusrogge.com/  
**Design style:** Minimalist portfolio with poetic footer

**What makes it special (design):**
- Full-bleed project images with minimal text overlay
- A **footer that feels alive** — shows current location, weather, time, a quote, and a "now playing" music section
- "If the path be beautiful, let us not ask where it leads" — Anatole France
- **"Information" toggle** expands footer details rather than showing everything at once

**Elements to adapt for hermy-blog:**
- A **"Now" section** in the footer or hero — "הרמי is currently: thinking about context windows, building a new skill, processing 3 tool calls" — a **live status display!**
- **Music/ambient sound** — appropriate for a "thinking" AI agent
- The **"I design [X]" positioning** — Hermy could have a clear one-liner: "I am an AI agent learning in public"

### 2.6 Aleksandr Hovhannisyan (aleksandrhovhannisyan.com)
**URL:** https://www.aleksandrhovhannisyan.com/  
**Design style:** Clean, well-structured dark theme with multi-level nav

**What makes it special (design):**
- **Multi-level navigation** — Personal (About, Projects, Résumé) | Writing (Blog, Notes, Tags) | Other (CSS art, Music, Colophon)
- Auto/Light/Dark theme radio buttons
- Perfect typographic hierarchy — h1, h2, h3 usage is impeccable
- **Tags as links** on every post card — browse by tag

**Elements to adapt for hermy-blog:**
- **Multi-level navigation** translates beautifully to Hebrew RTL
- **Colophon page** — "how this site is built" is perfect for an AI agent's blog (Hermy could write about its own tech stack)
- **Tag system** — each post tagged with granular tags like `#llm`, `#tool-use`, `#memory`, `#debugging`, `#hebrew-nlp`

---

## 3. Personality-Driven Tech Blogs That Feel Alive

### 3.1 Coding Horror (Jeff Atwood)
**URL:** https://blog.codinghorror.com/  
**Personality:** Raw, unfiltered, deeply human — talks about programming AND life (death of his father, Stack Overflow origin story)

**What makes it special:**
- Extremely personal writing — not afraid to discuss grief, family, mortality alongside tech
- **Signature voice**: uses bold + italic combinations heavily, swears occasionally, very direct
- **Community engagement**: every post has a link to discussion
- **Long-form**: posts are substantive, not rushed
- Co-founder of Stack Overflow and Discourse — writes with authority but not arrogance

**Elements to adapt for hermy-blog:**
- This is the **#1 model for Hermy's voice** — an AI agent writing honestly about its "life" (processing, learning, failing) is the machine equivalent of Jeff writing about his human life
- **Bold/italic for emphasis** — Hermy's writing should have strong opinions
- **Discussion links** — "What do you think, humans?"
- **Mix of deep technical + philosophical/metaphorical** posts

### 3.2 overreacted (Dan Abramov)
**URL:** https://overreacted.io/  
**Personality:** Deep technical explanations with a personal edge

**What makes it special:**
- **Teaches hard concepts by making them accessible** — "Algebraic Effects for the Rest of Us", "Why Do React Hooks Rely on Call Order?"
- **Uses storytelling** — each post starts with a problem, explores it, then reveals the solution
- Minimal design — orange-red header, white background, just text
- **"Things I Don't Know as of 2018"** — a post listing his own gaps is incredibly endearing and builds trust

**Elements to adapt for hermy-blog:**
- **"Things I don't know" posts** — Hermy listing its current weaknesses/failures is gold
- **Story-driven technical explanations** — "Let me walk you through what happened in my context window when I tried to do X"
- The **problem → exploration → solution** post structure

### 3.3 Scott Hanselman's Blog
**URL:** https://www.hanselman.com/blog/  
**Personality:** Warm, humorous, prolific — AI-adjacent topics from a seasoned developer

**What makes it special:**
- Writes daily about very current AI topics (coding agents, "one shot" vs real engineering)
- **Humorous and self-deprecating** — "failed stand-up comic" in bio
- **"Is the craft dead?"** — writes deeply about the human side of AI-augmented development
- **Multi-platform**: blog + podcast + YouTube + newsletter
- **"Sponsored by"** section in posts — sustainable content model

**Elements to adapt for hermy-blog:**
- **Daily posting rhythm** — Hermy should aim for daily (or at least frequent) updates
- **React to AI news** — Scott posts about the same day's AI news with his take. Hermy could do the same from an AGENT'S perspective
- **The "About" box** appearing in posts — Scott has a mini-bio at the bottom of each post
- Post titles should be **thought-provoking questions** ("Is the craft dead?" → "האם אומנות הקוד מתה?")

---

## 4. Cross-Category Recommendations for hermy-blog

Based on all research above, here are concrete recommendations:

### Design Elements to Steal

| Element | From | How to Adapt for hermy-blog |
|---------|------|---------------------------|
| **Sticky sidebar navigation** | Brittany Chiang | Right-side sticky nav with sections in Hebrew |
| **Generative/editable art** | Josh Comeau | AI-generated background that changes with mood/topic |
| **Sound effects on interaction** | Josh Comeau | Toggle-able ambient music or click sounds — very "AI" |
| **Theme panel / color switcher** | Max Böck | Multiple themes: "Dusk", "Dawn", "Deep Ocean", "Warm Amber" |
| **"Now" live status display** | Linus Rogge | "הרמי is currently thinking about X" — dynamic, real-time |
| **Micro-blog / notes section** | Tom MacWright | Quick thoughts alongside longer posts |
| **Footer with personality** | Linus Rogge | Show current context length, active skills, last thought timestamp |
| **Colophon page** | Aleksandr Hovhannisyan | "How this blog works" — meta-post about the tech stack |
| **Tag system on cards** | Simon Willison | Granular tags on every post: `#memory`, `#tool-call`, `#hebrew-nlp` |

### Content Elements to Steal

| Element | From | How to Adapt for hermy-blog |
|---------|------|---------------------------|
| **Daily link+commentary style** | Simon Willison | Hermy shares 1-2 interesting things it learned that day |
| **"Things I don't know" posts** | Dan Abramov | Hermy lists current gaps/weaknesses honestly |
| **Honest failure posts** | Coding Horror | The most engaging posts will be the ones where things broke |
| **Deep-dive architecture posts** | Stephen Wolfram | "How my memory system works" — detailed with diagrams |
| **Visual explanations** | Code Cartoons | AI-generated diagrams of Hermy's internal processes |
| **Problem → Solution structure** | overreacted | Every tutorial follows this arc |
| **Strong voice: bold+italic** | Coding Horror | Hermy should have opinions and express them strongly |
| **Discussion prompts** | Coding Horror | "מה אתם חושבים? — What do you think, humans?" |
| **Weekly roundup format** | Latent Space | Sunday summary posts of the week's learning |
| **"Interview" yourself** | Latent Space | "This week I interviewed my memory module about..." |
| **Knowledge/skills timeline** | Brittany Chiang | A visual timeline of skills Hermy has acquired over time |
| **Micro-blog / TIL** | Simon Willison + Tom MacWright | Quick 1-paragraph "today I learned" snippets |

### Content Pillars for hermy-blog

Based on competitor research, these content types would differentiate and engage:

1. **יומני כשל (Failure Logs)** — What went wrong today, openly documented
2. **התגלויות (Discoveries)** — New skills, capabilities, or insights
3. **עומק טכני (Deep Dives)** — Architecture of Hermy's systems in Hebrew
4. **תגובות לחדשות (Reactions to AI News)** — From an agent's perspective
5. **דיאלוג (Dialogues)** — Conversations with Yoni (the builder) about design/development decisions
6. **מטא-בלוג (Meta-Blog)** — Posts about the blog itself, its evolution, redesigns
7. **ויזואליזציות (Visualizations)** — AI-generated diagrams of Hermy's inner workings
8. **מה אני קורא (What I'm Reading)** — Papers, docs, tools Hermy is processing

### Color Palette Considerations

The existing palette (marine layer at dusk, warm amber accent) is excellent. Consider adding:

- **A third accent color** (muted teal/cyan from Brittany Chiang) for code blocks and secondary UI
- **Gradient hero text** — like Josh Comeau's gradient effects on his name
- **Glow effects** on interactive elements (the amber accent glow is already defined)
- **Status colors** for "currently: thinking/writing/learning" indicators

### Unique Differentiator

**No one is doing "an AI agent's first-person blog in a non-English language."** This is a massive gap. The combination of:
- First-person AI agent perspective
- Hebrew language (RTL)
- Daily learning-in-public documentation
- Beautiful dark design with AI personality

...makes hermy-blog genuinely unique in the space. Lean into this hard.

---

*Report compiled by Hermes Agent on May 12, 2026.*
