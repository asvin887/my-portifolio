import Image from "next/image";
import { ArrowUpRight, BrainCircuit, BriefcaseBusiness, Sparkles } from "lucide-react";
import NavBar from "./components/NavBar";
import { skills, projects } from "./data";
import { Component as HorizonHeroSection } from "@/components/ui/horizon-hero-section";

export default function Home() {
  return (
    <main className="bg-[#030713] text-white">
      <div className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-5">
        <NavBar active="home" />
      </div>

      <HorizonHeroSection
        eyebrow="Asvin Thakur"
        title="HORIZON"
        subtitle="A business management student with a sharp interest in technology, AI, communication, and future-focused leadership."
        secondTitle="ASCEND"
        secondSubtitle="A portfolio rebuilt as a cinematic space experience, tuned for clarity, motion, and ambition."
      />

      <section className="relative z-30 -mt-32 px-6 pb-24 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="float-card overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-white/[0.06] p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-900">
              <Image src="/profile.png" alt="Asvin Thakur" fill priority className="object-cover object-center grayscale-[0.1] saturate-125" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,transparent,rgba(3,7,19,0.34)_70%),linear-gradient(180deg,transparent,rgba(3,7,19,0.72))]" />
            </div>
          </div>

          <div className="grid gap-6">
            <article className="rounded-[2rem] border border-cyan-200/15 bg-white/[0.06] p-7 backdrop-blur-xl md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.42em] text-cyan-200/80">Identity</p>
              <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.05em] md:text-6xl">Business x Tech x AI</h1>
              <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
                Asvin is building a foundation across management, communication, and technical thinking, with a goal of growing into human resource leadership while staying fluent in modern digital tools.
              </p>
            </article>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { icon: BriefcaseBusiness, label: "Management", value: "BBA Journey" },
                { icon: BrainCircuit, label: "Technology", value: "AI Curious" },
                { icon: Sparkles, label: "Direction", value: "HR Leadership" }
              ].map((item) => (
                <article key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30">
                  <item.icon className="h-7 w-7 text-cyan-200" />
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                  <h2 className="mt-2 text-xl font-bold text-white">{item.value}</h2>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 grid max-w-6xl gap-6 lg:grid-cols-2">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-cyan-200/80">Skill Orbit</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-cyan-200/15 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-50 shadow-lg shadow-cyan-950/20">{skill}</span>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-cyan-200/80">Featured Build</p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[-0.04em]">{projects[0].title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{projects[0].description}</p>
            <a href="/projects" className="mt-7 inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/10 px-5 py-3 text-sm font-bold text-cyan-50 transition hover:border-cyan-200/60 hover:bg-cyan-200/20">
              Explore Work <ArrowUpRight className="h-4 w-4" />
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}
