"use client";

import { useEffect, useRef } from "react";
import { hiringPartners } from "@/data/site";

export function PartnerMarquee() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let start = 0;
    const step = () => {
      start = (start + 1) % el.scrollWidth;
      el.scrollLeft = start;
      requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#05070f] to-[#060912] p-6 shadow-[0_30px_90px_rgba(15,23,42,0.7)]">
      <div className="mesh-overlay" />
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">Hiring Partners</p>
        <div ref={marqueeRef} className="mt-4 flex gap-10 whitespace-nowrap text-sm uppercase tracking-[0.5em] text-white/60">
          {hiringPartners.map((partner, idx) => (
            <span key={`${partner}-${idx}`} className="px-4 py-2 text-lg font-semibold text-white/90">
              {partner}
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#05070f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#05070f] to-transparent" />
    </section>
  );
}
