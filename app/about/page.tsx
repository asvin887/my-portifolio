import PageShell from "../components/PageShell";
import { skills } from "../data";

const details = [
  { title: "Education", text: "BBA batch 2026 to 2029 at Bharati Vidyapeeth College of Management Studies" },
  { title: "Communication", text: "Clear speaking, people focus, collaboration, and direct presentation" },
  { title: "Management", text: "Human resources, team culture, and balanced work-life growth" },
  { title: "Goal", text: "MBA in Human Resource Management and long-term HR leadership" },
];

export default function About() {
  return (
    <PageShell
      active="about"
      eyebrow="About"
      title="Management path with technology edge"
      intro="Asvin Thakur is pursuing business administration while shaping a profile around communication, technology, AI awareness, and future HR leadership."
    >
      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="border border-primary bg-background p-7 font-mono text-sm font-medium uppercase leading-8 tracking-wide md:p-9">
          <p>
            Asvin is enrolled in the Bachelor of Business Administration programme at Bharati Vidyapeeth College of Management Studies in Kharghar, Navi Mumbai. His current focus combines business fundamentals, communication skills, technical awareness, and practical learning around artificial intelligence.
          </p>
          <p className="mt-5">
            His long-term direction is to become a successful Human Resource Manager, continue into an MBA with Human Resource Management, and help people grow while maintaining productive and balanced work lives.
          </p>
        </article>

        <div className="grid gap-6">
          {details.map((item, index) => (
            <article key={item.title} className="border border-primary bg-secondary p-5 transition duration-300 hover:-translate-y-1 hover:bg-background">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-muted-foreground">0{index + 1}</p>
              <h2 className="mt-4 text-2xl font-black uppercase tracking-[-0.04em]">{item.title}</h2>
              <p className="mt-2 text-sm font-medium uppercase leading-6 tracking-wide">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 border border-primary bg-primary p-7 text-primary-foreground md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.42em] text-primary-foreground/70">Capabilities</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="border border-primary-foreground/70 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em]">{skill}</span>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
