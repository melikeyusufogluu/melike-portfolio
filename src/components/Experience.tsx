import { education, interests, journey, languages, tools } from '../data'
import Section from './Section'

export default function Experience() {
  return (
    <>
      <Section
        id="journey"
        kicker="Journey"
        title="From Tekirdağ to Stuttgart"
        intro="Four stops, two countries, one constant: building interfaces people enjoy using."
      >
        {/* Route: dots on a dashed line, horizontal on desktop, vertical on mobile */}
        <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
          <span
            aria-hidden
            className="absolute bottom-3 left-[10px] top-3 border-l-2 border-dashed border-latte/60 md:bottom-auto md:left-3 md:right-3 md:top-[10px] md:border-l-0 md:border-t-2"
          />
          {journey.map((stop, i) => (
            <li key={stop.year + stop.place} className="relative flex gap-5 md:flex-col md:gap-4">
              <span
                aria-hidden
                className={`relative z-10 mt-0.5 h-[22px] w-[22px] shrink-0 rounded-full border-4 border-card shadow-sm md:mt-0 ${
                  i === journey.length - 1 ? 'bg-berry ring-4 ring-berry/25' : 'bg-latte ring-2 ring-latte/30'
                }`}
              />
              <div className="flex flex-col gap-1">
                <span className="text-sm tabular-nums text-muted">{stop.year}</span>
                <span className="font-display text-2xl font-bold tracking-tight">{stop.city}</span>
                <span className="font-medium">{stop.place}</span>
                <span className="text-sm text-muted">{stop.what}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 rounded-[20px] border border-dashed border-line px-6 py-5">
            <span className="font-display text-lg font-bold">
              {education.degree} <span className="font-normal text-muted">at</span> {education.school}
            </span>
            <span className="text-sm tabular-nums text-muted">{education.period}</span>
          </div>
        </div>
      </Section>

      <Section
        id="toolbox"
        kicker="Toolbox"
        title="What I work with"
        intro="Filled tags are the ones I'd call advanced."
      >
        <div className="flex flex-col gap-5">
          {tools.map((t) => (
            <div key={t.group} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
              <span className="w-44 shrink-0 text-sm font-semibold text-latte">{t.group}</span>
              <div className="flex flex-wrap gap-2">
                {t.items.map((item) => (
                  <span
                    key={item.name}
                    className={`rounded-full px-3.5 py-1.5 text-sm ${
                      item.strong
                        ? 'bg-band font-medium text-band-fg'
                        : 'bg-card shadow-[inset_0_0_0_1px_rgb(var(--line))]'
                    }`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="beyond" kicker="Beyond the code" title="Off the clock">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[24px] bg-latte/10 p-6 md:p-8">
            <h3 className="mb-4 text-lg font-bold">Languages I speak</h3>
            <ul className="flex flex-col gap-3">
              {languages.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between gap-4 border-b border-latte/20 pb-3 last:border-0 last:pb-0">
                  <span className="font-medium">{l.name}</span>
                  <span className="text-sm text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[24px] bg-berry/10 p-6 md:p-8">
            <h3 className="mb-4 text-lg font-bold">When I'm not coding</h3>
            <ul className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <li key={item} className="rounded-full bg-card px-3.5 py-1.5 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
