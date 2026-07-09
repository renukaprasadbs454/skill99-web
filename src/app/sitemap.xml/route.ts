import { NextResponse } from "next/server";

const baseUrl = "https://skill99.com";

const staticPages = [
  "",
  "/about",
  "/programs",
  "/placement",
  "/success",
  "/blog",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
  "/refund",
  "/cookies",
  "/book",
];

export function GET() {
  const urls = staticPages
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    )
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(body.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
