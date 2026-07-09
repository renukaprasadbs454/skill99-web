import { programListings } from "@/data/site";

export function ProgramShowcase() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.6em] text-white/60">Programs</p>
          <h2 className="text-3xl font-semibold text-white">Premium 99-day cohorts</h2>
        </div>
        <p className="max-w-md text-sm text-white/60">
          Launcher tracks, mentor-led cohorts, and placement-ready outcomes wrapped in theatrical gradients.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {programListings.map((program) => (
          <article
            key={program.slug}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0b1221]/80 to-[#0f172a]/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:border-secondary"
          >
            <div className="absolute inset-0 rounded-[40px] border border-dashed border-white/10" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/50">
                <span>{program.duration}</span>
                <span>{program.level}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white">{program.title}</h3>
              <p className="text-sm text-white/60">{program.career} · {program.category}</p>
              <div className="space-y-2 text-sm text-white/70">
                <p>Salary: <span className="text-white">{program.salary}</span></p>
                <div className="flex flex-wrap gap-2">
                  {program.hires?.map((company) => (
                    <span key={company} className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.4em] text-white/70">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
