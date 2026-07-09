import { featureHighlights } from "@/data/site";

export function BentoFeatures() {
  return (
    <section className="relative grid gap-6 overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-[#070b16] via-[#0d1322] to-[#05070e] px-6 py-10 shadow-[0_35px_120px_rgba(15,23,42,0.7)] md:grid-cols-3">
      <div className="mesh-overlay" />
      <div className="relative z-10 flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">Why Skill99</p>
        <h2 className="text-3xl font-semibold text-white">A curated blend of muscle and design</h2>
        <p className="max-w-sm text-sm text-white/60">
          Every card feels custom curated, with asymmetrical layouts, glowing gradients, and motion that feels alive.
        </p>
      </div>
      <div className="relative z-10 col-span-2 grid gap-5 md:grid-cols-2">
        {featureHighlights.slice(0, 4).map((feature, index) => (
          <article
            key={feature.title}
            className={`glass-card relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br ${
              index % 2 === 0 ? "from-[#2f8dfa]/40 to-[#0f172a]/30" : "from-[#ae5bff]/40 to-[#0f172a]/30"
            } px-6 py-6 text-white transition duration-400 hover:scale-[1.02]`}
          >
            <div className="absolute inset-x-0 top-0 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">{feature.title}</p>
            <p className="mt-4 text-sm text-white/80">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
