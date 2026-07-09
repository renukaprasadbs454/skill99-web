import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { programDetails, programListings } from "@/data/site";
import { siteMetadata } from "@/config/seo";

const fallbackDetail = {
  overview: "A mentor-led 99-day sprint focused on outcomes, projects, and placement guidance.",
  curriculum: ["Foundation module", "Hands-on labs", "Mock interviews"],
  projects: ["Capstone showcase", "Team collaboration sprint"],
  tools: ["Industry stack", "Mentor review", "Placement copy"],
  outcomes: ["Placement ready roadmap", "Portfolio that stands out"],
  instructor: {
    name: "Skill99 Mentor",
    title: "Industry Expert",
    bio: "Guides cohort through practical projects and recruiter prep.",
  },
};

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const program = programListings.find((item) => item.slug === params.slug);
  if (!program) {
    return {
      title: "Program · Skill99",
      description: siteMetadata.description,
    };
  }

  return {
    title: `${program.title} · Skill99`,
    description: `99-Day ${program.title} program covering ${program.category} fundamentals, mentor support, and placement prep.`,
    openGraph: {
      title: `${program.title} · Skill99`,
      description: `99-Day ${program.title} program covering ${program.category} fundamentals, mentor support, and placement prep.`,
      url: `${siteMetadata.siteUrl}/programs/${program.slug}`,
    },
  };
}

export default function ProgramDetailPage({ params }: Params) {
  const program = programListings.find((item) => item.slug === params.slug);
  if (!program) {
    notFound();
  }

  const detail = programDetails[params.slug] ?? fallbackDetail;

  return (
    <div className="space-y-12">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{program?.category}</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">{program?.title}</h1>
          <p className="mt-3 max-w-3xl text-slate-600">{detail.overview}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-900">{program?.duration}</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-900">{program?.level}</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 font-semibold text-slate-900">{program?.career}</span>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">Curriculum</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {detail.curriculum.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-slate-900">Projects & Tools</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {detail.projects.map((project) => (
                  <p key={project}>{project}</p>
                ))}
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.4em] text-slate-400">Tools</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {detail.tools.map((tool) => (
                  <span key={tool} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <h2 className="text-2xl font-semibold text-slate-900">Career Outcomes</h2>
          <p className="mt-2 text-sm text-slate-600">
            {program?.title} graduates join cohorts, startups, and global firms with confidence, shipped projects, and interview-ready toolkits.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {detail.outcomes.map((outcome) => (
              <div key={outcome} className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
                {outcome}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Instructor</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{detail.instructor.name}</h3>
              <p className="text-sm text-primary">{detail.instructor.title}</p>
              <p className="mt-2 text-sm text-slate-600">{detail.instructor.bio}</p>
            </div>
            <div className="md:col-span-2 rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">FAQs</h3>
              <p className="mt-2 text-sm text-slate-600">
                Mentors guide projects weekly, reviewer feedback is delivered in 48 hours, and the placement cell keeps candidates aligned with partner drives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="mx-auto max-w-6xl space-y-3 px-4 py-10 text-center">
          <h2 className="text-3xl font-semibold">Ready to launch into {program?.career}?</h2>
          <p className="text-sm text-white/80">
            Secure personalized guidance, real-world projects, and placement strategy with Skill99.
          </p>
          <Link href="/book" className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary">
            Book Free Career Session
          </Link>
        </div>
      </section>
    </div>
  );
}
