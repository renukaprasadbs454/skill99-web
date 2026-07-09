import { AnimatedStats } from "@/components/AnimatedStats";
import { BentoFeatures } from "@/components/BentoFeatures";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PartnerMarquee } from "@/components/PartnerMarquee";
import { PremiumTestimonials } from "@/components/PremiumTestimonials";
import { ProgramShowcase } from "@/components/ProgramShowcase";
import { VerticalTimeline } from "@/components/VerticalTimeline";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />
      <AnimatedStats />
      <BentoFeatures />
      <ProgramShowcase />
      <VerticalTimeline />
      <PremiumTestimonials />
      <PartnerMarquee />
      <section className="space-y-6">
        <div className="mx-auto max-w-5xl space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-white/60">Newsletter</p>
          <h2 className="text-3xl font-semibold text-white">Get cinematic career playbooks</h2>
          <p className="text-sm text-white/70">
            Receive mentor-led briefs, AI/datascience spotlights, and placement diaries shaped like boutique magazinens.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <NewsletterForm />
        </div>
      </section>
      <CTASection />
    </div>
  );
}
