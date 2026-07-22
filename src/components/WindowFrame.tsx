import { useRef, type ReactNode, type MouseEvent as ReactMouseEvent } from 'react'

interface WindowFrameProps {
  title: string
  icon: string
  x: number
  y: number
  width: number
  height: number
  zIndex: number
  active: boolean
  children: ReactNode
  statusText?: string
  onClose: () => void
  onMinimize: () => void
  onFocus: () => void
  onMove: (x: number, y: number) => void
}

export default function WindowFrame({
  title,
  icon,
  x,
  y,
  width,
  height,
  zIndex,
  active,
  children,
  statusText,
  onClose,
  onMinimize,
  onFocus,
  onMove,
}: WindowFrameProps) {
  const dragRef = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(
    null
  )

  const handleTitleMouseDown = (e: ReactMouseEvent) => {
    onFocus()
    dragRef.current = { startX: e.clientX, startY: e.clientY, originX: x, originY: y }

    const handleMouseMove = (ev: globalThis.MouseEvent) => {
      if (!dragRef.current) return
      const dx = ev.clientX - dragRef.current.startX
      const dy = ev.clientY - dragRef.current.startY
      const newX = Math.max(0, dragRef.current.originX + dx)
      const newY = Math.max(0, dragRef.current.originY + dy)
      onMove(newX, newY)
    }
    const handleMouseUp = () => {
      dragRef.current = null
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <div
      className="absolute bevel-out bg-win-gray flex flex-col"
      style={{ left: x, top: y, width, height, zIndex }}
      onMouseDown={onFocus}
    >
      {/* Title bar */}
      <div
        className={`flex items-center justify-between px-1 py-1 cursor-move ${
          active ? 'title-bar-gradient' : 'title-bar-gradient-inactive'
        }`}
        onMouseDown={handleTitleMouseDown}
      >
        <div className="flex items-center gap-1.5 text-white font-bold text-[13px] pl-0.5 truncate">
          <span>{icon}</span>
          <span className="truncate">{title}</span>
        </div>
        <div className="flex items-center gap-0.5 shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onMinimize()
            }}
            className="w-[18px] h-[16px] bevel-out bg-win-gray text-black text-[11px] font-bold flex items-center justify-center leading-none active:bevel-in"
            aria-label="Minimize"
          >
            _
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="w-[18px] h-[16px] bevel-out bg-win-gray text-black text-[11px] font-bold flex items-center justify-center leading-none active:bevel-in"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Menu bar */}
      <div className="flex items-center gap-4 px-2 py-0.5 text-[12px] bg-win-gray border-b border-win-grayDark">
        <span className="hover:bg-win-navy hover:text-white px-1 cursor-default">File</span>
        <span className="hover:bg-win-navy hover:text-white px-1 cursor-default">Edit</span>
        <span className="hover:bg-win-navy hover:text-white px-1 cursor-default">View</span>
        <span className="hover:bg-win-navy hover:text-white px-1 cursor-default">Help</span>
      </div>

      {/* Content */}
      <div className="flex-1 bevel-in m-1 bg-white overflow-auto scrollbar-win">
        <div className="p-3 text-[13px] leading-relaxed">{children}</div>
      </div>

      {/* Status bar */}
      <div className="bevel-in mx-1 mb-1 px-2 py-0.5 text-[11px] bg-win-gray text-black">
        {statusText ?? 'Ready'}
      </div>
    </div>
  )
}
