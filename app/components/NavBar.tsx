const links = [
  { href: "/", label: "Home", key: "home" },
  { href: "/about", label: "About", key: "about" },
  { href: "/projects", label: "Projects", key: "projects" },
  { href: "/contact", label: "Contact", key: "contact" },
];

export default function NavBar({ active }: { active: string }) {
  return (
    <nav className="w-fit border border-primary bg-background/85 px-5 py-4 shadow-[8px_8px_0_#111] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[10px_10px_0_#111] sm:px-8">
      <div className="flex gap-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:gap-8">
        {links.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className={
              active === link.key
                ? "text-primary transition-colors hover:text-primary"
                : "transition-colors hover:text-primary"
            }
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
