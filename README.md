# PMTE company portfolio

English and Arabic corporate website for Petroleum Machinery and Technical
Equipment - L.L.C. - S.P.C., Abu Dhabi. Production: https://petrolum.ae/.

## Local development

Use Node.js 22.13 or later and pnpm 10. The committed `pnpm-lock.yaml` is the
dependency lockfile; do not generate a second npm lockfile.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by the development server.

```bash
pnpm test
pnpm build
```

The test checks local media references, gallery entries, and essential public
downloads/SEO files. The build separately checks that the application bundles.

## Project structure

- `app/`: routes, components, styling, English/Arabic copy and SEO data.
- `app/gallery-manifest.json`: gallery photographs and captions.
- `public/assets/`: active logos, client images, project/equipment photographs,
  certificates, social image and hero video. This is the website's asset source.
- `public/PMTE-Company-Portfolio-2026.pdf`: the live downloadable portfolio.
- `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`: public crawler files.
- `DESIGN.md`, `PMTE_Company_Portfolio.md`: design and portfolio content sources.
- `ASSET_CREDITS.md`: media provenance and representative-image notes.
- `tests/`: asset integrity checks.

Gallery photos can remain in use even when they are no longer homepage card
images. Check both the manifest and page data before deleting media. AI-generated
representative images must retain their disclosure and must not be described as
photographs of completed projects.

## Deployment

Netlify uses `netlify.toml` and the Nitro adapter in `vite.config.ts` to build
server-rendered routes as well as client assets. Keep that configuration; simply
publishing client assets alone will not serve all routes.

The Cloudflare worker and `.openai/hosting.json` remain required by the local
development/Sites configuration. They are not unused database scaffolding.

Dependencies, build output, temporary exports and local environment files are
ignored by Git. Never commit credentials or `.env` files.
