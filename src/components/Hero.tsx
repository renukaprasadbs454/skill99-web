import Link from "next/link";

function FloatingCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-card float w-full rounded-[32px] px-6 py-5 text-sm text-white shadow-2xl shadow-blue-500/30 backdrop-blur-md sm:w-64">
      <p className="text-xs uppercase tracking-[0.4em] text-white/70">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[64px] border border-white/10 bg-gradient-to-br from-[#0b1221] via-[#0b1221]/90 to-[#0c1c2f] p-8 shadow-[0_35px_150px_rgba(15,23,42,0.85)]">
      <div className="mesh-overlay" />
      <div className="absolute inset-y-0 left-1/2 hidden w-80 translate-x-[-50%] rounded-[38px] bg-gradient-to-br from-[#2f8dfa]/30 via-[#ae5bff]/30 to-[#ff8c3e]/20 blur-3xl opacity-70 lg:block" />
      <div className="relative z-10 grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.6em] text-slate-400">Skill99 · Shivora Infotech</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-[5.2rem]">
            <span className="block">MASTER A SKILL</span>
            <span className="block">IN</span>
            <span className="relative inline-flex items-center gap-3 text-primary sm:text-[5rem]">
              <span className="text-6xl font-black uppercase tracking-[0.35em] text-primary sm:text-7xl">99</span>
              <span className="rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.4em] text-white shadow-[0_20px_70px_rgba(47,141,250,0.4)]">
                DAYS
              </span>
            </span>
          </h1>
          <p className="max-w-3xl text-lg font-medium text-slate-300">
            An outcome-first playbook with elite mentors, cinematic learning rituals, and recruitment-grade placement sessions—crafted to feel like an Apple keynote for career transformation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/book"
              className="glass-card flex items-center justify-center rounded-full border border-white/30 bg-gradient-to-r from-primary to-secondary px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_20px_90px_rgba(47,141,250,0.6)]"
            >
              Book Free Career Session
            </Link>
            <Link
              href="/programs"
              className="glass-card flex items-center justify-center rounded-full border border-primary/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition duration-300 hover:border-secondary hover:text-secondary"
            >
              Explore Programs
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <FloatingCard label="Live Mentors" value="50+" />
            <FloatingCard label="Projects Reviewed" value="2000+" />
          </div>
        </div>
        <div className="relative space-y-6">
          <div className="blob absolute inset-0 -z-10 rounded-[48px] bg-gradient-to-br from-[#2f8dfa]/60 to-[#ff8c3e]/50 opacity-70 blur-[160px]" />
          <div className="glass-card flex flex-col gap-6 rounded-[42px] px-8 py-10 text-white shadow-[0_40px_120px_rgba(47,141,250,0.25)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.5em] text-white/70">
              <span>Live Alchemy Board</span>
              <span>99-day sprint</span>
            </div>
            <div className="space-y-3 text-right">
              <p className="text-3xl font-semibold tracking-tight">Placement-ready rituals</p>
              <p className="text-sm text-white/70">Weekly mock interviews, live projects, salary workshops, and career ops</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/20 bg-black/40 p-4 text-left">
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">Projected Salary</p>
                <p className="text-xl font-semibold">₹12L - ₹27L</p>
              </div>
              <div className="rounded-3xl border border-white/20 bg-black/40 p-4 text-left">
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">Placements</p>
                <p className="text-xl font-semibold">5,000+</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-card flex flex-col gap-2 rounded-[32px] px-5 py-4 text-sm text-white/80">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">Student Offers</p>
              <p className="text-2xl font-semibold text-white">Meta · Google · Infosys</p>
            </div>
            <div className="glass-card flex flex-col gap-2 rounded-[32px] px-5 py-4 text-sm text-white/80">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">AI + Product</p>
              <p className="text-2xl font-semibold text-white">Real-time labs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
