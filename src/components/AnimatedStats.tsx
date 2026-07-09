"use client";

import { useEffect, useState } from "react";

type Counter = { label: string; target: number; suffix: string };

const counters: Counter[] = [
  { label: "Students Enrolled", target: 10000, suffix: "+" },
  { label: "Placements Assisted", target: 5000, suffix: "+" },
  { label: "Completion Rate", target: 95, suffix: "%" },
  { label: "Industry Mentors", target: 50, suffix: "+" },
];

export function AnimatedStats() {
  const [values, setValues] = useState(counters.map(() => 0));

  useEffect(() => {
    const intervals = counters.map((counter, idx) => {
      const step = Math.max(1, Math.floor(counter.target / 80));
      return setInterval(() => {
        setValues((prev) => {
          const next = [...prev];
          if (next[idx] < counter.target) {
            next[idx] = Math.min(counter.target, next[idx] + step);
          }
          return next;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-[#10162a] via-[#0b111f] to-[#06090f] px-6 py-10 shadow-[0_35px_120px_rgba(15,23,42,0.75)]">
      <div className="mesh-overlay" />
      <div className="relative z-10 grid gap-6 text-center text-white md:grid-cols-4">
        {counters.map((counter, idx) => (
          <div key={counter.label} className="glass-card flex flex-col gap-2 rounded-[32px] bg-white/5 py-6 px-4 text-center backdrop-blur-lg">
            <p className="text-5xl font-bold">
              {values[idx]}
              {counter.suffix}
            </p>
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">{counter.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
