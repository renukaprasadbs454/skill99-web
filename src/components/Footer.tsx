import Link from "next/link";
import { socialLinks } from "@/data/site";

const footerGroups = [
  { title: "Company", links: ["About", "Careers", "Blog"] },
  { title: "Programs", links: ["Full Stack", "AI & Data", "Design", "Marketing"] },
  { title: "Legal", links: ["Privacy", "Refund", "Terms", "Cookies"] },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 text-sm text-slate-500 md:flex-row md:items-start md:justify-between md:px-6">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-slate-900">Skill99</p>
          <p>Master a Skill in 99 Days with mentor-led programs and placement support.</p>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-slate-900 hover:text-primary" target="_blank" rel="noreferrer">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-6 md:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{group.title}</p>
              <div className="mt-3 space-y-2">
                {group.links.map((label) => (
                  <Link
                    key={label}
                    href={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-slate-900 hover:text-primary"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-100 bg-slate-50 px-4 py-4 text-center text-xs text-slate-500 md:px-6">
        © {new Date().getFullYear()} Skill99 · Shivora Infotech Pvt. Ltd. · Built for premium career growth.
      </div>
    </footer>
  );
}
