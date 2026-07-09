import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SeoDefaults } from "@/components/SeoDefaults";
import { BackToTop } from "@/components/BackToTop";
import { siteMetadata } from "@/config/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: "%s | Skill99",
  },
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.siteUrl),
  keywords: [
    "Skill99",
    "99-Day Career Programs",
    "EdTech",
    "Placement Assistance",
    "Engineering Careers",
    "AI Programs",
  ],
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Students collaborating in a premium learning environment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Skill99",
    creator: "@Skill99",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-background text-white">
        <SeoDefaults />
        <Navbar />
        <main className="flex-1 bg-transparent">
          <div className="relative z-10 mx-auto max-w-6xl space-y-10 px-4 py-12 lg:px-6">
            {children}
          </div>
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
