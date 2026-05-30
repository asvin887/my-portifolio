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
    <main className="relative min-h-screen overflow-hidden bg-background px-6 pb-24 pt-6 text-foreground md:px-10">
      <div className="editorial-grid absolute inset-0 z-0" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <nav className="mb-16 flex justify-center">
          <NavBar active={active} />
        </nav>
        <section className="border border-primary bg-secondary p-6 shadow-[14px_14px_0_#111] md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.48em] text-muted-foreground">{eyebrow}</p>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.32em]">Asvin Thakur / 2006</p>
          </div>
          <h1 className="mt-5 max-w-5xl text-5xl font-black uppercase leading-none tracking-[-0.08em] md:text-8xl">{title}</h1>
          <p className="mt-6 max-w-3xl font-mono text-sm font-medium uppercase leading-7 tracking-wide md:text-base">{intro}</p>
        </section>
        {children}
      </div>
    </main>
  );
}
