import Link from "next/link";

export type Program = {
  title: string;
  slug: string;
  duration: string;
  level: string;
  category: string;
  career: string;
};

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="flex flex-col justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lg">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{program.category}</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-900">{program.title}</h3>
        <p className="mt-2 text-sm text-slate-600">
          {program.level} · {program.duration} · Career path: {program.career}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{program.duration}</span>
        <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
          {program.level}
        </span>
        <Link
          href={`/programs/${program.slug}`}
          className="ml-auto rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold text-slate-900 transition hover:border-primary hover:text-primary"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}
