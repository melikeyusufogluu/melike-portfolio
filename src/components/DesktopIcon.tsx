interface DesktopIconProps {
  label: string
  icon: string
  selected: boolean
  onSelect: () => void
  onOpen: () => void
}

export default function DesktopIcon({ label, icon, selected, onSelect, onOpen }: DesktopIconProps) {
  return (
    <button
      onClick={onSelect}
      onDoubleClick={onOpen}
      className="flex flex-col items-center gap-1 w-[84px] p-1.5 rounded-sm outline-none"
      style={{
        backgroundColor: selected ? 'rgba(0,0,128,0.35)' : 'transparent',
      }}
    >
      <span className="text-4xl leading-none drop-shadow-[1px_1px_0_rgba(0,0,0,0.6)]">{icon}</span>
      <span
        className={`text-[12px] text-center text-white leading-tight px-1 ${
          selected ? 'bg-win-navy' : ''
        }`}
        style={{ textShadow: selected ? 'none' : '1px 1px 1px rgba(0,0,0,0.9)' }}
      >
        {label}
      </span>
    </button>
  )
}
