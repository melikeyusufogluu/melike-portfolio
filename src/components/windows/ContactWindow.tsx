import { useState } from 'react'
import { profile } from '../../data'

export default function ContactWindow() {
  const [copied, setCopied] = useState<'email' | 'linkedin' | null>(null)

  const copy = async (value: string, which: 'email' | 'linkedin') => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      // clipboard API unavailable — silently ignore, link is still usable
    }
    setCopied(which)
    window.setTimeout(() => setCopied((prev) => (prev === which ? null : prev)), 1500)
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="font-bold text-[14px]">Get in touch</p>
      <p>
        I'm always open to discussing new opportunities, front-end challenges, or just talking
        shop about React and TypeScript.
      </p>

      <table className="border-collapse text-[12px]">
        <tbody>
          <tr>
            <td className="pr-3 py-1 font-bold align-top">✉️ Email</td>
            <td className="py-1">
              <div className="flex items-center gap-2 flex-wrap">
                <a href={`mailto:${profile.email}`} className="text-win-navy underline">
                  {profile.email}
                </a>
                <button
                  onClick={() => copy(profile.email, 'email')}
                  className="bevel-out active:bevel-in bg-win-gray px-1.5 py-0.5 text-[11px]"
                >
                  {copied === 'email' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="pr-3 py-1 font-bold align-top">🔗 LinkedIn</td>
            <td className="py-1">
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-win-navy underline"
                >
                  {profile.linkedin.replace('https://', '')}
                </a>
                <button
                  onClick={() => copy(profile.linkedin, 'linkedin')}
                  className="bevel-out active:bevel-in bg-win-gray px-1.5 py-0.5 text-[11px]"
                >
                  {copied === 'linkedin' ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="pr-3 py-1 font-bold align-top">📍 Location</td>
            <td className="py-1">{profile.location}</td>
          </tr>
        </tbody>
      </table>

      <a
        href={`mailto:${profile.email}`}
        className="bevel-out active:bevel-in bg-win-gray px-4 py-1.5 text-[13px] font-bold w-fit"
      >
        Say Hello
      </a>
    </div>
  )
}
