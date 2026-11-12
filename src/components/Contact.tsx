import { useState } from 'react'
import { profile } from '../data'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      // clipboard unavailable; the mailto link still works
    }
  }

  return (
    <section id="contact" className="pinstripe scroll-mt-24 bg-band text-band-fg">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-5 pb-10 pt-20 md:px-8 md:pt-28">
        <h2 className="max-w-[16ch] text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
          Let's build something good together.
        </h2>
        <p className="max-w-[48ch] text-lg text-band-fg/80">
          I'm happy to talk about frontend roles, React and TypeScript projects, or AI-powered interfaces.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-band-fg px-5 py-3 font-semibold text-band transition hover:-translate-y-0.5"
          >
            {profile.email}
          </a>
          <button
            onClick={copyEmail}
            className="rounded-full border border-band-fg/30 px-4 py-3 text-sm font-medium transition hover:bg-band-fg/10"
          >
            {copied ? 'Copied!' : 'Copy email'}
          </button>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-band-fg/30 px-4 py-3 text-sm font-medium transition hover:bg-band-fg/10"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-band-fg/30 px-4 py-3 text-sm font-medium transition hover:bg-band-fg/10"
          >
            GitHub ↗
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-band-fg/30 px-4 py-3 text-sm font-medium transition hover:bg-band-fg/10"
          >
            Resume (PDF) ↗
          </a>
        </div>

        <footer className="mt-16 flex flex-wrap justify-between gap-4 border-t border-band-fg/15 pt-6 text-sm text-band-fg/60">
          <span>
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
          </span>
          <span>Made in {profile.location.split(',')[0]} with React &amp; Tailwind</span>
        </footer>
      </div>
    </section>
  )
}
