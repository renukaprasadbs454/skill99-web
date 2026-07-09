import { featureHighlights } from "@/data/site";
import { Sparkles } from "lucide-react";

export function FeatureGrid() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Why Skill99</p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Built for your career outcome</h2>
          <p className="text-slate-600">
            Every program, mentor interaction, and project is aligned to the premium standards of global hiring managers.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featureHighlights.map((feature) => (
            <div key={feature.title} className="glass-card flex h-full flex-col gap-3 p-6">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles size={20} />
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{feature.title}</span>
              </div>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
