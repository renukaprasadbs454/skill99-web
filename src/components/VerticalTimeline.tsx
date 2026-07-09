import { howItWorks } from "@/data/site";
import { Circle } from "lucide-react";

export function VerticalTimeline() {
  return (
    <section className="relative grid gap-10 overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-[#070b20] via-[#0d1227] to-[#040711] px-6 py-10 shadow-[0_35px_120px_rgba(15,23,42,0.85)]">
      <div className="mesh-overlay" />
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">How Skill99 works</p>
        <h2 className="text-3xl font-semibold text-white">A choreographed 99-day path</h2>
      </div>
      <div className="relative z-10 grid gap-6">
        {howItWorks.map((step, index) => (
          <div key={step} className="grid gap-3 rounded-[32px] border border-white/10 bg-black/40 px-5 py-4 text-sm text-white/70 shadow-lg shadow-blue-500/10 md:grid-cols-[auto_1fr]">
            <div className="flex items-center gap-3 text-white">
              <Circle size={20} className="text-primary" />
              <div className="text-xs uppercase tracking-[0.4em]">{`Step ${index + 1}`}</div>
            </div>
            <p className="text-lg font-semibold text-white">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
