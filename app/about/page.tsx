import { GraduationCap, MessageCircle, Target, Users } from "lucide-react";
import PageShell from "../components/PageShell";
import { skills } from "../data";

export default function About() {
  return (
    <PageShell
      active="about"
      eyebrow="About"
      title="A management path with a technology edge"
      intro="Asvin Thakur is currently pursuing a Bachelor of Business Administration and building a profile around communication, technology, AI awareness, and future HR leadership."
    >
      <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 leading-8 text-slate-300 backdrop-blur-xl md:p-9">
          <p>
            Asvin is enrolled in the Bachelor of Business Administration programme at Bharati Vidyapeeth College of Management Studies in Kharghar, Navi Mumbai. His current focus combines business fundamentals, communication skills, technical awareness, and practical learning around artificial intelligence.
          </p>
          <p className="mt-5">
            His long-term direction is to become a successful Human Resource Manager, continue into an MBA with Human Resource Management, and help people grow while maintaining productive and balanced work lives.
          </p>
        </article>

        <div className="grid gap-6">
          {[
            { icon: GraduationCap, title: "Education", text: "BBA batch 2026 to 2029" },
            { icon: MessageCircle, title: "Communication", text: "Clear speaking, people focus, and collaboration" },
            { icon: Users, title: "Management", text: "Human resources and work-life growth" },
            { icon: Target, title: "Goal", text: "MBA in Human Resource Management" }
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-cyan-200/15 bg-cyan-200/10 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40">
              <item.icon className="h-6 w-6 text-cyan-200" />
              <h2 className="mt-4 text-xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.42em] text-cyan-200/80">Capabilities</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-cyan-200/15 bg-slate-950/40 px-4 py-2 text-sm font-semibold text-cyan-50">{skill}</span>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
