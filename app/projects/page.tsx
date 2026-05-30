import { ArrowUpRight, Code2, Orbit, Rocket } from "lucide-react";
import PageShell from "../components/PageShell";
import { projects } from "../data";

export default function Projects() {
  return (
    <PageShell
      active="projects"
      eyebrow="Projects"
      title="Digital work built with intention"
      intro="The project section is now designed as a mission board, showing the portfolio as a complete identity system instead of a simple repository card."
    >
      <section className="mt-8 grid gap-6">
        {projects.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-white/[0.06] p-7 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl md:p-9">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="flex items-center gap-3 text-cyan-200">
                  <Orbit className="h-6 w-6" />
                  <p className="text-xs font-semibold uppercase tracking-[0.42em]">Featured Mission</p>
                </div>
                <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.05em] md:text-6xl">{project.title}</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-200">{tag}</span>
                  ))}
                </div>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/10 px-5 py-3 text-sm font-bold text-cyan-50 transition hover:border-cyan-200/60 hover:bg-cyan-200/20">
                  View Repository <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="relative min-h-72 rounded-[1.5rem] border border-white/10 bg-[#06101f] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.28),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.22),transparent_34%)]" />
                <div className="relative grid h-full content-between gap-8">
                  <Rocket className="h-14 w-14 text-cyan-200 transition duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" />
                  <div>
                    <Code2 className="mb-4 h-7 w-7 text-violet-200" />
                    <p className="font-mono text-sm leading-7 text-cyan-100/80">status: redesigned<br />motion: enabled<br />identity: cosmic<br />console: Updated by Anish</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
