import { useState } from 'react'
import { experience } from '../../data'

export default function WorkHistoryWindow() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({ 0: true })

  const toggle = (idx: number) =>
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }))

  return (
    <table className="w-full border-collapse text-[12px]">
      <thead>
        <tr className="bg-win-gray">
          <th className="text-left px-2 py-1 border border-win-grayDark font-bold w-8"></th>
          <th className="text-left px-2 py-1 border border-win-grayDark font-bold">Company</th>
          <th className="text-left px-2 py-1 border border-win-grayDark font-bold">Period</th>
          <th className="text-left px-2 py-1 border border-win-grayDark font-bold">Role</th>
        </tr>
      </thead>
      <tbody>
        {experience.map((job, idx) => (
          <>
            <tr
              key={job.company}
              onClick={() => toggle(idx)}
              className="cursor-pointer hover:bg-win-navy hover:text-white"
            >
              <td className="px-2 py-1 border border-win-grayDark text-center select-none">
                {expanded[idx] ? '▾' : '▸'}
              </td>
              <td className="px-2 py-1 border border-win-grayDark font-bold">{job.company}</td>
              <td className="px-2 py-1 border border-win-grayDark whitespace-nowrap">{job.period}</td>
              <td className="px-2 py-1 border border-win-grayDark">{job.role}</td>
            </tr>
            {expanded[idx] && (
              <tr key={`${job.company}-detail`}>
                <td className="border border-win-grayDark bg-white" />
                <td colSpan={3} className="border border-win-grayDark bg-white px-3 py-2">
                  <p className="text-win-grayDark mb-1">{job.location}</p>
                  <ul className="list-disc list-inside space-y-0.5 mb-2">
                    {job.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="bevel-out px-1.5 py-0.5 text-[11px] bg-win-gray"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            )}
          </>
        ))}
      </tbody>
    </table>
  )
}
