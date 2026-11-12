import { profile } from '../data'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 text-band-fg">
      <nav className="mx-auto flex max-w-page items-center justify-between gap-4 px-5 py-6 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold">
          <span
            aria-hidden
            className="grid h-8 w-7 place-items-center rounded-arch bg-band-fg text-sm text-band"
          >
            M
          </span>
          {profile.firstName}
        </a>
        <div className="flex items-center gap-1 text-sm font-medium">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden rounded-full px-3.5 py-1.5 opacity-80 transition hover:bg-band-fg/10 hover:opacity-100 sm:inline"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-full border border-band-fg/30 px-4 py-1.5 transition hover:bg-band-fg hover:text-band"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
