const links = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/about', label: 'About', key: 'about' },
  { href: '/projects', label: 'Projects', key: 'projects' },
  { href: '/contact', label: 'Contact', key: 'contact' },
];

export default function NavBar({ active }: { active: string }) {
  return (
    <nav className="w-fit rounded-full border border-slate-200 bg-white/75 px-5 py-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-amber-200 hover:bg-white/90 sm:px-8">
      <div className="flex gap-5 text-xs font-medium tracking-wider text-slate-700 sm:gap-8">
        {links.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className={
              active === link.key
                ? 'text-amber-700 transition-colors hover:text-amber-800'
                : 'transition-colors hover:text-amber-700'
            }
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
