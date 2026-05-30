import NavBar from '../components/NavBar';

const projects = [
  {
    title: 'My Portifolio',
    description:
      'A personal portfolio website built to introduce myself, show my skills, and share my work.',
    githubUrl: 'https://github.com/asvin887/my-portifolio',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
];

export default function Projects() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-amber-50 px-6 pb-20 pt-6 text-slate-950">
      <div className="absolute inset-0 opacity-90 [background-image:linear-gradient(rgba(146,64,14,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(146,64,14,0.09)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(254,243,199,0.96),rgba(255,255,255,0.72)_42%,rgba(253,186,116,0.48)_70%,rgba(191,219,254,0.34))]" />
      <div className="relative mx-auto max-w-5xl">
        <nav className="mb-14 flex justify-center">
          <NavBar active="projects" />
        </nav>

        <p className="text-xs font-medium tracking-[0.35em] text-amber-700 uppercase">
          Projects
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-slate-950 md:text-5xl">
          My Work
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 md:text-lg">
          Here are some of the projects that I have  worked on. Each project is a unique experience that has helped me grow as a developer and has allowed me to apply for my skill in real-world scenarios.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border border-amber-200 bg-white/85 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                    Featured Project
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                    {project.title}
                  </h2>
                </div>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                  GitHub
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center rounded-full border border-amber-300 bg-amber-50 px-5 py-3 text-sm font-semibold text-amber-800 transition-colors hover:bg-amber-100"
              >
                View GitHub Repository
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
