import { useState } from 'react'
import { skills } from '../../data'

export default function SkillsWindow() {
  const [active, setActive] = useState<string | null>(null)

  const toggle = (name: string) => setActive((prev) => (prev === name ? null : name))

  const activeSkill = skills.find((s) => s.name === active)

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <button
            key={skill.name}
            onClick={() => toggle(skill.name)}
            className={`px-3 py-3 flex flex-col items-center gap-1 text-center ${
              active === skill.name
                ? 'bevel-in bg-white'
                : 'bevel-out bg-win-gray hover:bg-win-navy hover:text-white'
            }`}
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-[12px] font-bold">{skill.name}</span>
          </button>
        ))}
      </div>

      {activeSkill && (
        <div className="bevel-in bg-white p-2 text-[12px] flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <p className="font-bold">
              {activeSkill.icon} {activeSkill.name}
            </p>
            <p className="text-win-grayDark">{activeSkill.level}%</p>
          </div>
          <div className="bevel-in bg-win-gray h-4 p-[2px]">
            <div
              className="h-full bg-win-navy"
              style={{
                width: `${activeSkill.level}%`,
                backgroundImage:
                  'repeating-linear-gradient(90deg, #000080 0, #000080 6px, #1084d0 6px, #1084d0 8px)',
              }}
            />
          </div>
          <p>{activeSkill.note}</p>
        </div>
      )}
    </div>
  )
}
