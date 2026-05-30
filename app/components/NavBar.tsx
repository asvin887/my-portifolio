const links = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/about', label: 'About', key: 'about' },
  { href: '/projects', label: 'Projects', key: 'projects' },
  { href: '/contact', label: 'Contact', key: 'contact' },
];

export default function NavBar({ active }: { active: string }) {
  return (
    <nav className="w-fit rounded-full border border-cyan-200/20 bg-slate-950/55 px-5 py-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl transition-all duration-300 hover:border-cyan-200/40 hover:bg-slate-950/75 sm:px-8">
      <div className="flex gap-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 sm:gap-8">
        {links.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className={
              active === link.key
                ? 'text-cyan-200 transition-colors hover:text-white'
                : 'transition-colors hover:text-cyan-200'
            }
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
