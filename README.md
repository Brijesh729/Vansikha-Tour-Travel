# Vansikha Tour & Travel — Next.js

Migrated from the original Vite + React Router project to Next.js (App
Router + TypeScript + Tailwind CSS).

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run build
npm start          # serve the production build
```

## Before deploying to production

1. **Fonts**: this build environment had no internet access, so
   `app/layout.tsx` currently uses system font fallbacks instead of
   `next/font/google` (Playfair Display + Inter). Once you build on a
   machine with normal internet access, swap the font block back in —
   the exact code to restore is commented directly in `app/layout.tsx`.

2. **Business details to fill in** — see `config/site.ts`:
   - `streetAddress` and `postalCode` are placeholders (`PLACEHOLDER_...`).
     Real registered address needed before the site is submitted for
     AdSense review or published widely.
   - `latitude`/`longitude` are approximate Jaipur coordinates, not an
     exact business location.
   - Phone (`8058104662`), WhatsApp, email (`brijeshvermaa1@gmail.com`),
     city/state, and the GA4 ID were all carried over from the real
     values already in the original codebase.

3. **Legal pages** (`/privacy-policy`, `/terms-and-conditions`,
   `/disclaimer`, `/refund-policy`) are placeholder pages, marked
   `noindex` and excluded from the sitemap on purpose. Replace the
   placeholder text with real policies, then remove the `noindex` in
   each page's metadata and add the routes back into `app/sitemap.ts`.

4. **Set your real production domain**:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
   ```
   (used for canonical URLs, sitemap, and OG tags)

5. **External images**: a few images (car-rental reference photos,
   some background images, blog thumbnails/avatars) still point to
   external Unsplash/vendor URLs, same as the original project. Swap
   for owned/licensed assets where possible — see
   `next.config.ts` → `images.remotePatterns` for the current allowlist.

6. **Ads**: `components/ads/AdSlot.tsx` renders nothing until you set
   `NEXT_PUBLIC_ADS_ENABLED=true` and add real AdSense unit code.

## What changed vs. the original Vite app

- React Router → Next.js App Router (file-based routing)
- react-helmet-async → Next.js Metadata API (`generateMetadata`)
- All tour/blog/destination content moved out of JSX into `data/*.ts`
- New: `/destinations` + `/destinations/[slug]`, `/tours` index,
  `/about`, `sitemap.ts`, `robots.ts`, breadcrumbs + JSON-LD, site search,
  redirects from old `/CarRental`, `/Gallery`, `/Contact` paths
- Old fake placeholder phone/address from the SEO schema replaced with
  the real contact details already used elsewhere in the app

## Deploying

**Vercel** (simplest): connect the repo, set the env vars above, deploy.
Static/SSG pages generated at build time (36 pages currently).

**Firebase Hosting** (if you want to keep it): Firebase Hosting serves
static files — it does not run a Next.js server by default. Use
`firebase-frameworks` (`firebase deploy` with Next.js support) or
export static output; a plain `firebase.json` built for the old Vite
SPA will not work unmodified for this Next.js app.
