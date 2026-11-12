import type { Company } from '../data'
import { work } from '../data'
import Section from './Section'

function CompanyCard({ c, wide }: { c: Company; wide: boolean }) {
  return (
    <article className="flex flex-col gap-8 rounded-[28px] border border-line bg-card p-6 md:p-9">
      {/* Company header */}
      <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
        <div className="flex min-w-0 flex-col gap-1">
          <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">{c.company}</h3>
          <p className="text-muted">
            {c.role} · {c.location}
          </p>
        </div>
        <span className="rounded-full bg-latte/10 px-3 py-1 text-sm tabular-nums text-latte">{c.period}</span>
      </header>

      <p className="max-w-[68ch] text-lg leading-relaxed">{c.intro}</p>

      {/* Client projects with links */}
      {c.projects.length > 0 && (
        <ul className={`grid gap-x-8 border-t border-line ${wide ? 'sm:grid-cols-2' : ''}`}>
          {c.projects.map((p) => (
            <li key={p.name} className="flex flex-col gap-2 border-b border-line py-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h4 className="font-display text-xl font-bold">{p.name}</h4>
                <span className="text-xs font-semibold uppercase tracking-wide text-berry">{p.domain}</span>
              </div>
              {p.client !== p.name && <p className="text-sm text-muted">{p.client}</p>}
              <p className="text-[15px] leading-relaxed text-muted">{p.description}</p>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-line px-3 py-1 text-sm font-medium transition hover:border-berry hover:text-berry"
              >
                {p.linkLabel} <span aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Key results */}
      <dl className={`mt-auto grid gap-4 ${wide ? 'sm:grid-cols-2 lg:grid-cols-4' : ''}`}>
        {c.highlights.map((h) => (
          <div key={h.label} className="flex flex-col gap-1 rounded-2xl bg-bg p-4">
            <dt className="font-display text-3xl font-extrabold tracking-tight text-berry">{h.value}</dt>
            <dd className="text-sm leading-snug text-muted">{h.label}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}

export default function Work() {
  const [first, ...rest] = work
  return (
    <Section
      id="work"
      kicker="Work"
      title="Work I'm proud of"
      intro="The companies I've worked for, the products I helped build, and what changed because of them."
    >
      <div className="flex flex-col gap-5">
        {first && <CompanyCard c={first} wide />}
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((c) => (
            <CompanyCard key={c.company} c={c} wide={false} />
          ))}
        </div>
      </div>
    </Section>
  )
}
