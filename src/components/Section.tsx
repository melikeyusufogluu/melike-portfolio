import type { ReactNode } from 'react'

interface Props {
  id: string
  kicker: string
  title: string
  intro?: string
  children: ReactNode
}

/** Content section: wavy berry kicker, display heading, optional intro line, then content. */
export default function Section({ id, kicker, title, intro, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24 py-16 md:py-24">
      <div className="mb-10 flex max-w-2xl flex-col gap-3">
        <span className="kicker">{kicker}</span>
        <h2 className="text-3xl font-bold tracking-tight md:text-[2.6rem] md:leading-[1.1]">{title}</h2>
        {intro && <p className="text-muted">{intro}</p>}
      </div>
      {children}
    </section>
  )
}
