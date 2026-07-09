import { NextResponse } from "next/server";

const robotsContent = `
User-agent: *
Allow: /
Sitemap: https://skill99.com/sitemap.xml
`;

export function GET() {
  return new NextResponse(robotsContent.trim(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
