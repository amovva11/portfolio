Got it — you've swapped the name in 4 files (Hero.jsx:21, Header.jsx:106, Footer.jsx:49, index.js). Everything else is still Pratham's identity, and a few items are things you genuinely don't want to ship — his analytics IDs collect your traffic into his dashboard, and the Resume button downloads his actual PDF.

One thing worth naming up front: right now the site says "Abhijay Movva" but claims Associate Consultant at Infosys, 4+ years, ServiceNow/GenAI and lists Krishworks employment. Until the content in group 3 is rewritten, it's presenting someone else's job history under your name.

1. Ship-blockers — these route your visitors to Pratham's accounts
 His logo personal_logo.png + alt="Pratham" — Header.jsx:98-99
2. Social + domain
 LinkedIn — Footer.jsx:6, index.js:30
 GitHub — Footer.jsx:15, index.js:31
 Twitter/X — Footer.jsx:24, index.js:33, plus @agrawal_2002 in index.js:117-118
 Instagram — Footer.jsx:33, index.js:32
 Blogs nav link blogs.agrawalpratham.in — Header.jsx:11, index.js:34. Delete the nav item if you don't have a blog.
 agrawalpratham.in → your domain — index.js:16,64,98,113, next-sitemap.config.js:2
 Profile meta first_name/last_name/username still Pratham — index.js:104-106
 public/robots.txt, sitemap.xml, sitemap-0.xml hardcode his domain. These regenerate from next-sitemap.config.js on npm run build, so fix the config and rebuild rather than hand-editing.
3. Content — his career, needs rewriting not find-replace
 Hero: role, company, 4-yr blurb, and the "4+ / ServiceNow & AI" stat strip — Hero.jsx:26-38,61-70
 About bio: 4 paragraphs about Infosys/ServiceNow/Krishworks — About.jsx:68-97
 Skills array: 28 entries, ~10 are ServiceNow-ecosystem — About.jsx:4-33. Also 7 of them reuse the same ServiceNow logo, and "GenAI" uses the Python icon while "Agentic AI" uses the VS Code icon.
 Work experience: both entries are his, hardcoded as JSX — Infosys WorkExperience.jsx:27-74, Krishworks 114-155
 Projects: Tech Solutions + Zostel Clone, incl. screenshots and repo links — Projects.jsx:6-26
 Footer tagline — Footer.jsx:52-55
 All SEO copy in index.js: jobTitle, worksFor: Infosys, addressLocality: Mumbai, description, knowsAbout[], <title>, keywords, og/twitter descriptions — index.js:18-58,75-124
4. Assets and housekeeping
 Favicon set — favicon.ico, favicon-16/32, apple-touch-icon, android-chrome-192/512, mstile-150, safari-pinned-tab.svg are all generated from his logo. Regenerate the whole set (realfavicongenerator) from yours.
 site.webmanifest already says your name ✓ but still calls you "Full Stack Web Developer", and its theme_color/background_color are #d3f4f7 — which contradicts the #12151A in index.js:93-94. Same stale color in browserconfig.xml.
 Delete unused assets: me_bg_remove.png (3.1 MB, unreferenced), github-ico.png/insta-ico.png/linkedin-ico.png/twitter-ico.png/yt-ico.png (Footer uses inline SVG now), project-mockup-example.jpeg, common-bg.svg. That's ~3.3 MB of dead weight.
 work_exp.svg / fullstack_dev.svg are generic stock illustrations — keep or swap, but the alt text says "ServiceNow & AI Consultancy" (WorkExperience.jsx:85).
 README.md — still create-next-app boilerplate
 package.json name — my_portfolio_nextjs
 Optional: wire the cookie banner to actually gate analytics, since right now it's cosmetic.
Fastest path: I can do groups 1, 2, and 4 mechanically right now — I'd stub the analytics IDs and social links as obvious placeholders (REPLACE_ME) so nothing silently points at his accounts, and delete the dead assets. Group 3 needs your real experience and projects, which I'd need you to give me.

Want me to start on 1/2/4?

