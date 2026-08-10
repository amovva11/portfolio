# Portfolio website — project brief

## What this is

A personal portfolio site for Abhijay, a CS + Data Science student (UW-Madison) and
software engineer, built for a technical audience — specifically recruiters at large
tech companies screening for engineering roles. The site should read as evidence of
engineering taste and execution, not just a list of credentials.

## Design inspiration

This project's visual language is a synthesis of two real, existing portfolios.
Both are credited here as design inspiration — this is not a fork or clone of
either, and no code, copy, or assets should be copied directly from them.

1. **Brittany Chiang — v4** — https://github.com/bchiang7/v4 (live: https://v4.brittanychiang.com/)
   Taken from this: content discipline. One component per content section, a fixed
   sidebar for identity/nav, zero filler sections, restrained animation, strong
   accessibility and semantic HTML. This is the model for *what content survives
   and how little of it there should be*.

2. **Raj Savaliya — VS Code Theme Portfolio** — https://github.com/SRX-OSS/VS-Code-Theme-Portfolio (live: https://www.rajsavaliya.com/)
   Taken from this: the interaction shell. A two-panel sidebar (narrow activity bar
   + file/folder explorer), a tab bar for open content, and IDE-flavored visual
   chrome. This is the model for *the container the content lives in*.
   Explicitly NOT taken from this: the misc personal pages (Anime, Gaming, Hobbies,
   Startup), sound effects, and any content that isn't directly recruiting-relevant.
   That pattern dilutes recruiter signal and is deliberately excluded here.

**Design thesis:** borrow the IDE shell as a distinctive, memorable container, but
fill it with the same tight, recruiter-first content discipline Brittany's site
demonstrates. The metaphor should never get in the way of someone finding what
they came for in under 30 seconds.

## Tech stack

- Next.js (App Router) + TypeScript — matches Abhijay's existing professional
  stack from his Panda UI work, so patterns and conventions should feel familiar
- Tailwind CSS for styling
- Deployed on Vercel
- No CMS needed — content lives in typed local data files, not code-mixed-with-copy

## Visual design spec

**Theme:** VS Code Dark+-inspired palette.

| Purpose | Color |
|---|---|
| Editor background | `#1e1e1e` |
| Sidebar background | `#252526` |
| Active tab background | `#2d2d30` |
| Primary text | `#d4d4d4` / `#cccccc` |
| Muted/comment text | `#858585` |
| Keyword accent (blue) | `#569cd6` |
| Variable/property accent (cyan) | `#9cdcfe` |
| String accent (orange) | `#ce9178` |
| Comment accent (green) | `#6a9955` |
| Folder icon accent (amber) | `#dcb67a` |
| Status bar background | `#007acc` |

**Typography:**
- Monospace (e.g. JetBrains Mono, Fira Code) for all IDE-chrome UI: sidebar file
  names, tab labels, status bar, and any content styled as literal code (Welcome,
  Skills, Contact).
- A clean sans-serif for prose content (About) — code-styling prose hurts
  readability and isn't worth the theme purity.

**Motion:** subtle only — tab open/close transitions, sidebar hover states. No
scroll-triggered animation circus. Respect `prefers-reduced-motion`.

## Component architecture

```
components/
  layout/
    ActivityBar.tsx     // narrow icon rail, far left — Explorer, GitHub link, theme toggle
    Explorer.tsx          // file tree panel — the site's actual nav
    TabBar.tsx              // open tabs, click to switch, closable (except Welcome)
    StatusBar.tsx             // bottom bar — availability, resume link, clock
  sections/
    Welcome.tsx                 // hero, open by default
    About.tsx                     // rendered as a markdown preview, sans-serif prose
    Experience.tsx                  // commit-log-styled timeline
    Skills.tsx                        // JSON-styled, grouped by category
    Contact.tsx                         // styled as an exported config object
    projects/
      HandshakeEvals.tsx                  // confirmed project #1
      [project-2-tbd].tsx                   // open slot — see Open items below
  ui/
    CodeBlock.tsx        // shared syntax-highlight wrapper
    FileIcon.tsx           // file-type icon by extension
data/
  experience.ts       // typed content, not hardcoded in components
  skills.ts
  projects.ts
```

## IDE shell mechanics

- **Activity bar:** icon rail on the far left. Minimum viable set: Explorer
  (default active), GitHub profile link, resume download, theme toggle. Keep it
  under 5 icons — this is chrome, not a feature showcase.
- **Explorer:** the file tree IS the nav. Every item maps 1:1 to a real content
  section. No nesting deeper than `projects/`.
- **Tab bar:** clicking a file in Explorer opens (or focuses) a tab. Multiple tabs
  can stay open at once, mimicking a real editor. `Welcome` opens by default and
  isn't closable. Tabs are keyboard-navigable (arrow keys / Ctrl+Tab) for
  accessibility, not just mouse-driven.
- **Status bar:** always visible. Left side: current "branch" (`main`) as a small
  easter egg. Right side: open-to-work indicator, resume link, local time.

## Content spec

### `welcome.tsx` (hero)
A short `const developer = {...}` object, 5–6 lines max: name, role, one-line
focus area, and two CTA "methods" like `viewProjects()` and `downloadResume()`.
The one place styling can have a little personality since it carries no dense
information.

### `about.md`
Rendered as clean prose (not code-styled). 2–3 short paragraphs: CS + Data
Science background at UW-Madison, what he's building toward (AI/ML systems,
full-stack engineering), one line of personality so it doesn't read like a
LinkedIn summary restated.

### `experience.log`
Styled like a commit history / log file. One confirmed entry:
- **Medline Industries** — IT Software Engineering Intern, WMS Modernization
  team. 2–3 impact bullets, action-verb/metric/impact structure (matching his
  existing resume bullet style). Do not name individual managers or coworkers in
  public copy — describe the team/project, not the org chart.

Add further entries here as they become available (e.g. Handshake AI Fellowship
as a second log entry if he wants it represented as experience rather than only
as a project).

### `projects/`
**Confirmed:** `HandshakeEvals.tsx` — AI Fellowship benchmark-authoring work.
Cover: what SWE-bench-style task authoring actually is (most recruiters won't
know the term — explain it in one sentence before diving in), the real scope
(33 commits, ~2,600 lines across forks of Svelte, Astropy, smart_open, Quay,
and Liger-Kernel), and link the forks directly.

**Open slot:** a second project is needed to avoid the page feeling thin with
only one entry. Panda UI is intentionally excluded (internal/proprietary — not
publicly shareable). See Open items below.

### `skills.json`
Literally styled as JSON. Grouped by category (languages, frameworks,
infra/tools) rather than a flat list.

### `contact.ts`
Small `export const contact = {...}` block: email, GitHub, LinkedIn, resume
link.

## Accessibility & performance

Borrowing directly from Brittany's site as the bar to hit:
- Semantic HTML under the hood regardless of how "code-styled" something looks
  visually — a `<nav>` is still a `<nav>` even if it's styled like a file tree
- Full keyboard navigability: tab through Explorer items, arrow/ctrl+tab through
  open tabs, visible focus states
- Respect `prefers-reduced-motion`
- Target Lighthouse 90+ across the board; this is itself a small proof point of
  engineering care
- Real `alt` text and meta tags — no accessibility left as an afterthought

## Explicitly out of scope

- No misc personal pages (anime, gaming, hobbies) — every tree item must serve
  the "hire me" signal
- No sound effects or audio easter eggs
- No content that requires a recruiter to click more than 2 levels deep to find
  Experience, Projects, or Contact

## Open items (need input before/while building)

- [ ] Second project to fill the open `projects/` slot
- [ ] Final resume PDF to link from Welcome / Contact / status bar
- [ ] Contact email and social links to finalize in `contact.ts`
- [ ] Whether Handshake Fellowship should also get an `experience.log` entry, or
      stay project-only
- [ ] Domain name for deployment
