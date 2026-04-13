# AI Guide — Astro Starter Template

Bare Astro 6 skeleton with Tailwind CSS 4, Cloudflare Pages, and a Resend-powered contact form. No design, no content — just functional plumbing ready for any project.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Astro | ^6.0.6 |
| CSS | Tailwind CSS via `@tailwindcss/vite` | ^4.2.2 |
| Hosting | Cloudflare Pages | — |
| Email | Resend (via fetch, no SDK) | — |
| Package manager | pnpm | 10.16.x |
| Node | >= 22.12.0 | — |
| TypeScript | Strict mode | — |

---

## Directory Structure

```
├── AI-GUIDE.md
├── templates/
│   └── content-entry.md     ← Example CMS entry — copy into src/content/menu/
├── .pages.yml               ← CMS field definitions for external tooling
├── astro.config.mjs         ← Vite + Tailwind + redirects (e.g. /items → /menu)
├── wrangler.jsonc            ← Cloudflare Pages config + env vars
├── package.json
├── tsconfig.json
│
├── functions/                ← Cloudflare Pages Functions (server-side)
│   ├── tsconfig.json
│   └── api/
│       └── contact.ts        ← POST /api/contact → Resend email
│
├── public/
│   ├── _redirects             ← Cloudflare Pages: legacy /items/* → /menu/*
│   ├── favicon.svg
│   └── media/
│       └── uploads/          ← Content images go here (/media/uploads/*)
│
└── src/
    ├── content.config.ts     ← Content collection schema (Zod + glob loader)
    ├── content/
    │   └── menu/             ← Pagers CMS: menu item markdown (see .pages.yml)
    │
    ├── data/
    │   ├── site.ts           ← Site name, nav links, contact info
    │   └── menu.ts           ← Menu CMS helpers (grouped, featured, A–Z)
    │
    ├── components/
    │   ├── Navigation.astro  ← Bare nav (data-driven from site.ts)
    │   └── Footer.astro      ← Bare footer (data-driven from site.ts)
    │
    ├── layouts/
    │   └── Layout.astro      ← HTML shell: <head>, Navigation, <slot/>, Footer
    │
    ├── pages/
    │   ├── index.astro       ← Home (empty)
    │   ├── about.astro       ← About (empty)
    │   ├── contact.astro     ← Contact form (functional)
    │   └── menu/
    │       ├── index.astro   ← /menu — full menu + highlights (from CMS)
    │       └── [slug].astro  ← /menu/:slug — item detail
    │
    ├── scripts/
    │   └── contact-form.ts   ← setupFormLogic(prefix) — form submission + UI states
    │
    └── styles/
        └── global.css        ← Tailwind 4 import + @theme tokens
```

---

## Site Data: `src/data/site.ts`

Single source for site-wide strings. Update these first for any new project.

- **`SITE`** — `{ name, tagline, description, logoUrl }`. Used in `<title>`, meta, nav, footer.
- **`NAV_LINKS`** — Array of `{ href, label }`. Add pages here as you build them.
- **`CONTACT_INFO`** — `{ email, phone, phoneHref, location }`. Used on contact page.

---

## Content Collections (CMS)

### Schema: `src/content.config.ts`

The **`menu`** collection loads `src/content/menu/**/*.md`. Fields: `title`, `description`, `price`, `category`, optional `image`. URL slug comes from the **filename** only (`gata.md` → `/menu/gata`). Within each section, items are sorted **alphabetically by title**. Home “What Our Customers LOVE!” is **static** in `src/data/home-loves.ts` (not CMS).

### Adding content

1. Copy `templates/content-entry.md` into `src/content/menu/` as `{slug}.md` (filename must match the `slug` field).
2. Public URLs: **`/menu`** (full menu), **`/menu/{slug}`** (detail).
3. **Images:** Pagers bucket `uploads` writes to `public/media/uploads/` (site URL `/media/uploads/*`). Set `image: "/media/uploads/your-file.webp"` on menu items, or use a full `https://` URL.

### Data helpers: `src/data/menu.ts`

- **`getMenuGroupedByCategory()`** — Sections for `/menu` (sorted A–Z by title within each category)
- **`getAllMenuItemsAlphabetically()`** — A–Z across all items
- **`getMenuItemViewBySlug(slug)`** — Lookup by filename slug
- **`MenuItemView`** — Shape used in pages

Home page favorites: **`src/data/home-loves.ts`** (edit copy/images there; links to `/menu/{slug}`).

### CMS config: `.pages.yml`

Defines media buckets and content fields for external CMS tooling. Keep field definitions in sync with the Zod schema in `content.config.ts`.

---

## Contact Form System

End-to-end: client form → Cloudflare Pages Function → Resend API → email.

### Flow

```
Browser form → setupFormLogic(prefix) → POST /api/contact → Pages Function → Resend → Email
```

### Page HTML: `src/pages/contact.astro`

Uses a **prefix-based ID convention** so the same script can work on multiple pages. Every element ID starts with `${prefix}-`:

| Element | ID pattern | Purpose |
|---------|-----------|---------|
| Form | `${prefix}-contact-form` | The `<form>` element |
| Submit button | `${prefix}-submit-btn` | Disabled during submission |
| Button text | `${prefix}-btn-text` | Swapped to "Sending..." |
| Button arrow | `${prefix}-btn-arrow` | Hidden during submission |
| Button spinner | `${prefix}-btn-spinner` | Shown during submission |
| Error div | `${prefix}-form-error` | Displays error messages |
| Success div | `${prefix}-form-success` | Shown after success |
| Type select | `${prefix}-projectType` | Triggers subcategory dropdown |
| Subcategory wrap | `${prefix}-subcategory-wrap` | Show/hide container (start with `opacity-0 max-h-0 overflow-hidden pointer-events-none`) |
| Subcategory select | `${prefix}-subcategory` | Populated dynamically |

### Client script: `src/scripts/contact-form.ts`

`setupFormLogic(prefix)` handles:
- Dynamic subcategory dropdown based on type selection
- Form submission via `fetch` POST to `/api/contact`
- Loading, success, and error UI states

Usage:
```html
<script>
  import { setupFormLogic } from "../scripts/contact-form";
  setupFormLogic("ct");
</script>
```

### Server: `functions/api/contact.ts`

Cloudflare Pages Function for `POST /api/contact`:

- **Env vars**:
  - `CLIENT_NAME` — In email subject/sender (set in `wrangler.jsonc`)
  - `NOTIFICATION_EMAIL` — Where emails go (set in `wrangler.jsonc`)
  - `RESEND_API_KEY` — **Secret** (set via `wrangler secret put RESEND_API_KEY`, never in config)
- **Payload**: `name`, `email`, `message` (required); `phone`, `address`, `projectType`, `subcategory`, `constructionEstimate` (optional)
- **Sender**: `${clientName} Leads <no-reply@submissions.socalwebexperts.com>` — change domain to your Resend-verified domain
- Validates required fields + email format, sends HTML + plaintext email, handles CORS

---

## Styling: `src/styles/global.css`

Tailwind 4 via Vite plugin (no `tailwind.config`). The `@theme` block defines:

- **Fonts**: `--font-sans`, `--font-serif`, `--font-display`
- **Colors**: Stone palette (50–950), accent (#a8946b gold), deep (#183138 teal)
- **Easing**: `--ease-out-expo`

These are infrastructure tokens — customize or replace for each project.

---

## Cloudflare Deployment

### `wrangler.jsonc`

```jsonc
{
  "name": "astro-starter-template",
  "pages_build_output_dir": "./dist",
  "compatibility_date": "2026-03-24",
  "vars": {
    "CLIENT_NAME": "Client Name",
    "NOTIFICATION_EMAIL": "your-email@example.com"
  }
}
```

### Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Local Astro dev server |
| `pnpm build` | Build to `./dist` |
| `pnpm pages:dev` | Local Cloudflare Pages dev (with Functions) |
| `pnpm pages:deploy` | Deploy to Cloudflare Pages |

### Local secrets

Create `.dev.vars` for local development:
```
RESEND_API_KEY=re_your_key_here
```

---

## New Project Checklist

1. **`src/data/site.ts`** — Set name, tagline, description, logo, contact info. Add nav links as you create pages.
2. **`wrangler.jsonc`** — Set `name`, `CLIENT_NAME`, `NOTIFICATION_EMAIL`
3. **`package.json`** — Set `name` and `--project-name` in deploy script
4. **Add fonts** — Add `<link>` tags to `Layout.astro` `<head>`
5. **Extend CMS schema** — Add fields to `content.config.ts`, `menu.ts`, and `.pages.yml`
6. **Menu routes** — Use `src/pages/menu/` (`index` + `[slug]`) with content in `src/content/menu/`
7. **Design pages** — Build `index.astro`, `about.astro`, etc.
8. **Design nav + footer** — Style `Navigation.astro` and `Footer.astro`
9. **Style contact form** — Add Tailwind classes to `contact.astro`
10. **Style listing + detail** — Design `src/pages/menu/index.astro` and `src/pages/menu/[slug].astro`
11. **Add content** — Copy `templates/content-entry.md`, place images in `public/media/uploads/`
12. **Set Resend key** — `wrangler secret put RESEND_API_KEY`
13. **Update sender domain** — Change `from` in `functions/api/contact.ts` to your verified domain
14. **Deploy** — `pnpm build && pnpm pages:deploy`
