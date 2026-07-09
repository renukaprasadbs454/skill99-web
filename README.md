# Skill99 Marketing Site

Purpose-built Next.js 16.2+ marketing experience for Shivora Infotech’s Skill99 platform. Ship-ready with Tailwind 4, Framer Motion, premium layouts, and reusable components for every section defined in the PRD.

## Highlights

- Multi-page App Router structure covering Home, About, Programs (including slug pages), Placement, Success Stories, Blog (with Markdown support), Careers, Contact, Booking, and Policy pages.
- Reusable sections such as Hero, Stats, Program Cards, HowItWorks timeline, Testimonials carousel, Partners grid, FAQ accordion, CTAs, and contextual forms.
- React Hook Form + Zod forms (Book a Session, Contact, Newsletter) wired to API routes with validation and honeypot protection.
- SEO-first metadata, JSON-LD schema, sitemap.xml, robots.txt, and Next SEO defaults.
- Analytics-ready layout with sticky navbar, footer, back-to-top button, and polished typography.

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Lint the project:

```bash
npm run lint
```

## Deployment

Deploy to Vercel without structural changes—simply connect the repo and point the root to this project. Static assets, SEO configs, and serverless API routes are production-ready.
