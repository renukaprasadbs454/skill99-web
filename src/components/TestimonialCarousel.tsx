"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/site";

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Success Stories</p>
          <h2 className="text-3xl font-semibold text-slate-900">Students who shipped projects & joined top companies</h2>
        </div>
        <div className="mt-8">
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[active].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-lg text-slate-600">{`"${testimonials[active].quote}"`}</p>
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                  <span>{testimonials[active].name}</span>
                  <span className="text-slate-300">•</span>
                  <span>{testimonials[active].college}</span>
                  <span className="text-slate-300">•</span>
                  <span>Placed at {testimonials[active].company}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2 w-10 rounded-full transition ${index === active ? "bg-primary" : "bg-slate-200"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
