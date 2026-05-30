import PageShell from "../components/PageShell";
import { projects } from "../data";

const snapshots = ["Strategy", "Interface", "Identity"];

export default function Projects() {
  return (
    <PageShell
      active="projects"
      eyebrow="Projects"
      title="Digital work with intention"
      intro="A compact project board for Asvin's identity system, built around clean presentation, strong typography, and responsive editorial structure."
    >
      <section className="mt-8 grid gap-6">
        {projects.map((project) => (
          <article key={project.title} className="group overflow-hidden border border-primary bg-background p-7 md:p-9">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.42em] text-muted-foreground">Featured Work</p>
                <h2 className="mt-5 text-5xl font-black uppercase leading-none tracking-[-0.08em] md:text-7xl">{project.title}</h2>
                <p className="mt-6 max-w-2xl font-mono text-sm font-medium uppercase leading-8 tracking-wide">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-primary bg-secondary px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">{tag}</span>
                  ))}
                </div>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex border border-primary bg-primary px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-background hover:text-primary">
                  View Repository
                </a>
              </div>

              <div className="grid gap-4 bg-secondary p-5 shadow-[14px_14px_0_#111]">
                {snapshots.map((snapshot, index) => (
                  <div key={snapshot} className="border border-primary bg-background p-5 transition duration-300 group-hover:translate-x-1">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-muted-foreground">0{index + 1}</p>
                    <h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.06em]">{snapshot}</h3>
                  </div>
                ))}
                <div className="border border-primary bg-primary p-5 text-primary-foreground">
                  <p className="font-mono text-sm uppercase leading-7 tracking-wide">status: redesigned<br />theme: hero-04 editorial<br />console: Updated by Anish</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
