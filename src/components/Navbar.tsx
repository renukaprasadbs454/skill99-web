"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Placement", href: "/placement" },
  { label: "Success Stories", href: "/success" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const programsMenu = [
  "Full Stack Development",
  "Artificial Intelligence",
  "Data Analytics",
  "Cloud Computing",
  "Cyber Security",
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-b from-[#0b1221]/90 via-[#0b1221]/50 to-transparent backdrop-blur-3xl transition duration-300">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-lg font-semibold uppercase tracking-[0.4em] text-white/90">
          Skill99
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-white/70 md:flex">
          <div className="relative group">
            <Link href="/programs" className="hover:text-slate-900 transition">
              Programs
            </Link>
            <div className="pointer-events-none absolute left-0 top-6 hidden w-56 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg group-hover:pointer-events-auto group-hover:block">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Featured Programs</p>
              <div className="mt-3 grid gap-2 text-sm text-slate-900">
                {programsMenu.map((item) => (
                  <Link key={item} href="/programs" className="rounded-lg px-2 py-1 bg-white/5 text-white transition hover:bg-primary/20">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {links.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative transition hover:text-white"
            >
              {item.label}
              <span className="absolute left-0 bottom-[-6px] h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/book"
            className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-secondary hover:text-secondary hover:shadow-[0_15px_40px_rgba(47,141,250,0.45)]"
          >
            Book Free Career Session
          </Link>
        </nav>
        <button
          type="button"
          className="flex items-center rounded-full border border-white/30 p-2 text-white transition hover:border-secondary md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div
        className={clsx(
          "md:hidden",
          "transition-all duration-300",
          open ? "max-h-[500px]" : "max-h-0 overflow-hidden",
        )}
      >
        <div className="divide-y border-t border-white/20 bg-black/70 px-4 py-4 text-sm font-semibold text-white/80">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="block py-2">
              {item.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="mt-2 block rounded-full border border-white/40 px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white"
          >
            Start Your 99-Day Journey
          </Link>
        </div>
      </div>
    </header>
  );
}
