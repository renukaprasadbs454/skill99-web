import { hiringPartners } from "@/data/site";

export function PartnersGrid() {
  return (
    <section className="bg-slate-900/90 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Hiring Partners</p>
          <h2 className="text-3xl font-semibold">Trusted by premium hiring teams</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center text-sm uppercase tracking-[0.4em] text-white/70 sm:grid-cols-4">
          {hiringPartners.map((partner) => (
            <div key={partner} className="rounded-2xl border border-white/20 bg-white/5 px-3 py-4">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
