import { useEffect, useState } from 'react'
import type { WindowId, WindowMeta } from '../types'

interface TaskbarProps {
  windows: WindowMeta[]
  openIds: WindowId[]
  activeId: WindowId | null
  minimized: Record<WindowId, boolean>
  onTaskClick: (id: WindowId) => void
  startOpen: boolean
  onToggleStart: () => void
}

export default function Taskbar({
  windows,
  openIds,
  activeId,
  minimized,
  onTaskClick,
  startOpen,
  onToggleStart,
}: TaskbarProps) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000 * 30)
    return () => clearInterval(t)
  }, [])

  const timeStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[36px] bevel-out bg-win-gray flex items-center gap-1 px-1 z-[9999]">
      <button
        onClick={onToggleStart}
        className={`flex items-center gap-1 px-2 h-[28px] font-bold text-[13px] ${
          startOpen ? 'bevel-in' : 'bevel-out'
        }`}
      >
        <span>🪟</span> Start
      </button>

      <div className="w-px h-[24px] bg-win-grayDark mx-1" />

      <div className="flex-1 flex items-center gap-1 overflow-x-auto">
        {openIds.map((id) => {
          const meta = windows.find((w) => w.id === id)
          if (!meta) return null
          const isActive = activeId === id && !minimized[id]
          return (
            <button
              key={id}
              onClick={() => onTaskClick(id)}
              className={`flex items-center gap-1.5 px-2 h-[28px] text-[12px] max-w-[160px] truncate ${
                isActive ? 'bevel-in' : 'bevel-out'
              }`}
            >
              <span>{meta.icon}</span>
              <span className="truncate">{meta.title}</span>
            </button>
          )
        })}
      </div>

      <div className="bevel-in px-3 h-[28px] flex items-center text-[12px]">{timeStr}</div>
    </div>
  )
}
