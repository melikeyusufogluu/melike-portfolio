import { useState } from 'react'
import { profile } from '../../data'

export default function ResumeWindow() {
  const [opening, setOpening] = useState(false)

  const handleOpen = () => {
    setOpening(true)
    window.setTimeout(() => setOpening(false), 900)
  }

  return (
    <div className="flex flex-col items-center gap-3 text-center py-4">
      <div
        className={`text-5xl transition-transform ${opening ? 'scale-90' : 'hover:scale-105'}`}
      >
        📄
      </div>
      <p className="font-bold">{profile.name} — Resume.pdf</p>
      <p className="text-win-grayDark">Front-End Developer · 5+ years experience</p>

      <div className="bevel-in bg-white w-full max-w-[260px] px-2 py-1 text-[11px] text-left">
        {opening ? 'Opening Resume.pdf…' : 'Ready'}
      </div>

      <div className="flex gap-2">
        <a
          href="/MelikeYusufogluResume.pdf"
          target="_blank"
          rel="noreferrer"
          onClick={handleOpen}
          className="bevel-out active:bevel-in bg-win-gray px-4 py-1.5 text-[13px] font-bold"
        >
          Open Resume.pdf
        </a>
        <a
          href="/MelikeYusufogluResume.pdf"
          download
          className="bevel-out active:bevel-in bg-win-gray px-4 py-1.5 text-[13px] font-bold"
        >
          Download
        </a>
      </div>
    </div>
  )
}
