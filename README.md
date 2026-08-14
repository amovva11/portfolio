# abhijaymovva.vercel.app

Personal portfolio for Abhijay Movva — CS + Data Science at UW–Madison.

Live at **[abhijaymovva.vercel.app](https://abhijaymovva.vercel.app)**.

## Stack

Next.js 14 (Pages Router), React 18, Tailwind CSS 3, deployed on Vercel.
No TypeScript, no database, no API routes — it's a single static page.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build + sitemap generation
npm start        # serve the production build
```

## Layout

```
src/
  pages/
    index.js        the only page — also holds all SEO meta + JSON-LD schema
    _app.js         global wrapper, analytics
    _document.js    inline script that applies the saved theme before first paint
  components/
    Header.jsx      fixed nav, theme toggle, mobile menu
    Hero.jsx        landing section
    About.jsx       bio + skills grid
    WorkExperience.jsx
    Projects.jsx
    Footer.jsx      social links
    ScrollTop.jsx
    Cookie/
  data/
    site.js         shared links (resume, blog)
  styles/
    globals.css     CSS custom properties for both themes
```

## Editing content

Most content lives in arrays at the top of its component, so adding an entry
means adding an object:

| What | Where |
|---|---|
| Jobs | `experiences` in `WorkExperience.jsx` |
| Projects | `projects` in `Projects.jsx` |
| Skills | `skills` in `About.jsx` |
| Social links | `socialLinks` in `Footer.jsx` |
| Nav items | `navLinks` in `Header.jsx` |
| Resume / blog URLs | `src/data/site.js` |

Projects take an optional `image` — cards without one render full width, so
you can add a screenshot later without touching the layout.

## Theming

Colors are CSS custom properties defined twice in `globals.css`: once on
`:root` for dark (the default) and once under `html.light` for light. Components
reference them as `var(--accent-primary)` and never hardcode a hex value, so
changing a color means editing those two blocks only.

The toggle in the header uses the View Transitions API for a circular reveal,
falling back to an instant swap where that isn't supported. The choice persists
in `localStorage` and is re-applied by a blocking script in `_document.js` so
there's no flash of the wrong theme on load.

## Deploying

Pushing to `main` triggers a Vercel deploy. The site URL is set in
`next-sitemap.config.js`; `robots.txt` and the sitemaps are generated from it
by the `postbuild` hook, so change it there rather than editing `public/`.

## Analytics

Vercel Web Analytics is enabled and needs no configuration. Google Analytics is
wired up but inactive — set `GA_MEASUREMENT_ID` in `_app.js` to turn it on.
