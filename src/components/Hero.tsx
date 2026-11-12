import { profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="pinstripe relative overflow-hidden bg-band text-band-fg">
      <div className="mx-auto grid max-w-page items-end gap-12 px-5 pb-0 pt-32 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:px-8 md:pt-36">
        <div className="float-in flex flex-col gap-6 pb-16 md:pb-24">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-card/70 px-3.5 py-1.5 text-sm">
            <span className="h-2 w-2 rounded-full bg-latte" aria-hidden />
            {profile.title} · {profile.location.split(',')[0]}
          </span>

          <h1 className="text-[clamp(2.75rem,6.5vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
            Merhaba, I'm {profile.firstName}.
          </h1>

          <p className="max-w-[46ch] text-lg leading-relaxed text-band-fg/85">{profile.lead}</p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-band-fg px-5 py-3 font-semibold text-band transition hover:-translate-y-0.5"
            >
              See my projects
            </a>
          </div>
        </div>

        {/* Arched photo, echoing the window frames behind her */}
        <div className="float-in relative mx-auto w-full max-w-[380px] [animation-delay:150ms]">
          <div className="overflow-hidden rounded-t-[999px] border-[6px] border-b-0 border-card bg-card shadow-[0_24px_60px_-30px_rgb(var(--berry)/0.5)]">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.firstName} ${profile.lastName} by a window over the latte`}
              width={760}
              height={900}
              className="aspect-[4/5] w-full object-cover object-[46%_30%]"
            />
          </div>
          <div className="absolute left-2 top-[38%] rotate-[-6deg] rounded-2xl bg-card px-4 py-3 text-fg shadow-xl md:-left-10">
            <p className="font-display text-2xl font-extrabold leading-none text-berry">
              {profile.experienceBadge}
            </p>
            <p className="text-xs text-muted">of frontend</p>
          </div>
        </div>
      </div>
    </section>
  )
}
