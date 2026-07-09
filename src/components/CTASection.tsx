import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative mx-auto max-w-6xl rounded-[50px] border border-white/10 bg-gradient-to-br from-[#061c37] to-[#0f0718] px-6 py-12 shadow-[0_35px_120px_rgba(15,23,42,0.9)]">
      <div className="mesh-overlay" />
      <div className="relative z-10 space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">Launch Sequence</p>
        <h2 className="text-3xl font-semibold text-white">Start Your 99-Day Journey Today</h2>
        <p className="mx-auto max-w-2xl text-sm text-white/70">
          Reserve a bespoke mentor runway, live labs, and placement strategy that feels more like a design showcase than a class.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/book"
            className="glass-card rounded-full border border-white/30 bg-gradient-to-r from-primary to-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:translate-y-0.5"
          >
            Book Free Career Session
          </Link>
          <Link
            href="/programs"
            className="glass-card rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:text-secondary"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
