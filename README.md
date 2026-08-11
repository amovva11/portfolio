# Abhijay Movva — Portfolio

A VS Code themed developer portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Editing content

All copy lives in typed data files under `data/` — no content is hardcoded in components.

| File | Drives |
|---|---|
| `data/site.ts` | Name, role, domain, contact details, hero cards |
| `data/experience.ts` | The Experience timeline |
| `data/skills.ts` | The Skills page, grouped by category |
| `data/projects.ts` | Project cards, detail pages, **and** their Explorer rows |
| `data/blogs.ts` | The Blogs page |
| `data/explorer.ts` | The sidebar file tree and header links |

Adding a project to `data/projects.ts` is enough to publish its card, its detail
page at `/Projects/<n>`, and its row in the sidebar — all three derive from that
one list.

## Running locally

```sh
npm install --legacy-peer-deps
npm run dev
```

`--legacy-peer-deps` is required: `react-custom-scrollbars@4` declares a peer
dependency on React ≤16 while this project runs React 18.

## Contact form

`/api/sendEmail` posts through AWS SES. Set these in your deploy environment:

```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
CONTACT_TO_EMAIL
CONTACT_FROM_EMAIL
```

Without them the endpoint still returns 200 and the form reports success, so
verify delivery before relying on it.

## Credits

The IDE shell design is adapted from Raj Savaliya's
[VS Code Theme Portfolio](https://github.com/SRX-OSS/VS-Code-Theme-Portfolio)
(MIT). Content discipline is modelled on
[Brittany Chiang's v4](https://github.com/bchiang7/v4).
