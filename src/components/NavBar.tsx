const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#repos', label: 'Side projects' },
  { href: '#contact', label: 'Contact' },
]

export default function NavBar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#2E4770]/40 bg-[#0B1B33]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-xs uppercase tracking-[0.25em] text-[#E8A33D]">
          M.G.
        </a>
        <ul className="flex gap-3 sm:gap-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#EAF0FA]/70 transition-colors hover:text-[#E8A33D] sm:text-[11px] sm:tracking-[0.2em]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
