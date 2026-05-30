import NavBar from "./components/NavBar";
import { skills, projects } from "./data";
import { HeroSection04 } from "@/components/ui/hero-04";

const notes = [
  { label: "01 / Focus", value: "Business management with a people-first technology edge" },
  { label: "02 / Year", value: "Born in 2006 and building toward an HR leadership path" },
  { label: "03 / Style", value: "Sharp editorial identity, clean grids, direct communication" },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <div className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-5">
        <NavBar active="home" />
      </div>

      <HeroSection04 />

      <section className="relative z-30 px-6 pb-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="border border-primary bg-secondary p-6 shadow-[14px_14px_0_#111] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-muted-foreground">Identity</p>
            <h2 className="mt-5 text-5xl font-black uppercase leading-none tracking-[-0.08em] md:text-7xl">Asvin Thakur</h2>
            <p className="mt-6 font-mono text-sm font-medium uppercase leading-7 tracking-wide">
              Business student, technology learner, AI-curious thinker, and future HR leader with a design-led personal brand.
            </p>
          </article>

          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-3">
              {notes.map((item) => (
                <article key={item.label} className="border border-primary bg-background p-5 transition duration-300 hover:-translate-y-1 hover:bg-secondary">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">{item.label}</p>
                  <h3 className="mt-5 text-2xl font-black uppercase leading-tight tracking-[-0.05em]">{item.value}</h3>
                </article>
              ))}
            </div>
            <article className="border border-primary bg-primary p-6 text-primary-foreground md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.42em] text-primary-foreground/70">Current Direction</p>
              <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.07em] md:text-6xl">Business x Tech x AI</h2>
            </article>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-2">
          <section className="border border-primary bg-background p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-muted-foreground">Capabilities</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="border border-primary bg-secondary px-4 py-2 text-sm font-bold uppercase tracking-[0.18em]">{skill}</span>
              ))}
            </div>
          </section>

          <section className="border border-primary bg-secondary p-7 shadow-[14px_14px_0_#111] md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-muted-foreground">Featured Build</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.06em]">{projects[0].title}</h2>
            <p className="mt-4 font-mono text-sm font-medium uppercase leading-7 tracking-wide">{projects[0].description}</p>
            <a href="/projects" className="mt-7 inline-flex border border-primary bg-primary px-5 py-3 text-sm font-bold uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-background hover:text-primary">
              Explore Work
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}
