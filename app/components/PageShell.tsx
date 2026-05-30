import NavBar from "./NavBar";

type PageShellProps = {
  active: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

export default function PageShell({ active, eyebrow, title, intro, children }: PageShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030713] px-6 pb-24 pt-6 text-white md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.2),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.2),transparent_32%),linear-gradient(180deg,#030713,#081225_54%,#030713)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(125,211,252,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.12)_1px,transparent_1px)] [background-size:54px_54px]" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <nav className="mb-16 flex justify-center">
          <NavBar active={active} />
        </nav>
        <section className="reveal-panel rounded-[2rem] border border-cyan-200/15 bg-white/[0.06] p-6 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.48em] text-cyan-200/80">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{intro}</p>
        </section>
        {children}
      </div>
    </main>
  );
}
