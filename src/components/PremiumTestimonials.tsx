"use client";

import { testimonials } from "@/data/site";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PremiumTestimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="space-y-6 rounded-[48px] border border-white/10 bg-gradient-to-br from-[#04040a] to-[#0b0e1a] p-8 shadow-[0_40px_120px_rgba(15,23,42,0.9)]">
      <div className="mesh-overlay" />
      <div className="relative z-10 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">Success Stories</p>
        <h2 className="text-3xl font-semibold text-white">Students who skyrocketed</h2>
      </div>
      <motion.div
        key={testimonials[active].name}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        className="relative z-10 rounded-[40px] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-primary/30 backdrop-blur-3xl"
      >
        <div className="space-y-3">
          <p className="text-4xl font-light text-white/90">{`"${testimonials[active].quote}"`}</p>
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.4em] text-white/50">
            <span>{testimonials[active].name}</span>
            <span>{testimonials[active].college}</span>
          </div>
          <div className="text-sm text-white/70">
            <p>Placed at {testimonials[active].company}</p>
            <p>Salary growth story curated with live cohorts and placement mentors.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
