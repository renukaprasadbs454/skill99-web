import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { siteMetadata } from "@/config/seo";

export const metadata: Metadata = {
  title: "Contact · Skill99",
  description: "Get in touch with Skill99 for program guidance, partnerships, and mentorship queries.",
  openGraph: {
    title: "Contact · Skill99",
    description: "Get in touch with Skill99 for program guidance, partnerships, and mentorship queries.",
    url: `${siteMetadata.siteUrl}/contact`,
  },
};

const officeAddress = {
  line1: "No. 19, Richmond Road",
  line2: "Koramangala 5th Block, Bengaluru",
  phone: "+91 80 1234 5678",
  email: "hello@skill99.com",
};

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Contact</p>
          <h1 className="text-4xl font-semibold text-slate-900">We are here to help you master your career</h1>
          <p className="mt-3 text-slate-600">
            Reach out for program queries, partnerships, or to schedule a campus talk.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1fr,1fr] md:px-6">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Office</p>
              <p className="mt-2 text-sm text-slate-700">{officeAddress.line1}</p>
              <p className="text-sm text-slate-700">{officeAddress.line2}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Email</p>
              <Link href={`mailto:${officeAddress.email}`} className="text-sm font-semibold text-primary">
                {officeAddress.email}
              </Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Phone</p>
              <Link href={`tel:${officeAddress.phone}`} className="text-sm font-semibold text-primary">
                {officeAddress.phone}
              </Link>
            </div>
            <div className="rounded-3xl border border-dashed border-slate-200 p-4 text-sm text-slate-600">
              Google Maps Placeholder
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
