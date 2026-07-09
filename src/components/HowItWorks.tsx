import { howItWorks } from "@/data/site";

export function HowItWorks() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">How Skill99 Works</p>
          <h2 className="text-3xl font-semibold text-slate-900">A clear 5-step career journey</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-5">
          {howItWorks.map((step, index) => (
            <div key={step} className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">{`Step ${index + 1}`}</span>
              <p className="mt-3 text-lg font-semibold text-slate-900">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
