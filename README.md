# Imrexx — @Imrexx_dev site

Next.js 14 + TypeScript + Tailwind CSS. One page, built around getting hired: hero → values → services → process → stack → shipped work → testimonials → FAQ → contact.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy (same flow as your other Vercel projects)

1. Push this folder to a new GitHub repo.
2. In Vercel, "Add New Project" → import the repo. It auto-detects Next.js, no config needed.
3. Put the deployed URL in your X bio.

## Editing — you'll only ever need `lib/data.ts`

All real content lives in one file: `lib/data.ts`.

- **`values`** — the "how I work" section. Four traits with a short description each. Entirely your call to edit.
- **`services`** — the service list (software development, content creation, technical writing, growth strategy). Add, remove, or reword freely.
- **`shipped`** — your proof-of-work list. `IMREXX HUB` and `Crypto Hub` are in there with empty `visitUrl`/`codeUrl` — add the real links when you have them, or the Visit/Code buttons just won't render for that item.
- **`vouches`** — quotes from people vouching for you. Copy an existing object to add a new one.
  - Each vouch can have an optional `avatar`: drop a photo in `public/avatars/` and point `avatar` at it (e.g. `"/avatars/dargonne.jpg"`), or paste a direct image URL. Leave it `""` for an initial-letter circle instead.
- **`process`** — the four-step "how we'd work together" timeline.
- **`stack`** — the grouped tech pills (Frontend / Backend / Web3).
- **`faqs`** — the accordion near the bottom. Put whatever question you actually keep getting asked.
- **`availability`** — set `open: false` when you're fully booked and want the green "Open to new projects" pill in the hero to disappear, without deleting the content.
- **`social`** — your X, GitHub, and email links, used in the hero and footer.
- **`buildingSince`** — the year shown in the hero stats row.

You won't need to touch anything in `components/` for routine updates.

## Design notes

Color, font, and spacing tokens are in `tailwind.config.ts` if you want to adjust the palette. Three fonts: Fraunces (display headlines), IBM Plex Sans (body), IBM Plex Mono (data — stats, tags, nav). Signal-green (`signal.pass` / `pass-vivid`) is the one accent color in the whole page — everything else stays quiet graphite and paper-white, with automatic light mode based on the visitor's system setting.

`components/icons.tsx` and `components/Reveal.tsx` are internal plumbing (the icon set and the scroll-reveal animation wrapper) — you won't need to touch either for routine edits.
