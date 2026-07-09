"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/data/site";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Frequently Asked Questions</p>
          <h2 className="text-3xl font-semibold text-slate-900">Everything you need to know before you enroll</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {faqData.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-sm"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-900"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <ChevronDown
                  className={`transition ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                  size={20}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
