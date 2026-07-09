import { programFilters, programListings } from "@/data/site";
import { ProgramCard } from "./ProgramCard";

export function ProgramsSection() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Featured Programs</p>
            <h2 className="text-3xl font-semibold text-slate-900">Programs built for outcomes</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {programFilters.categories.slice(0, 3).map((category) => (
              <button
                key={category}
                type="button"
                className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-primary hover:text-primary"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programListings.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
