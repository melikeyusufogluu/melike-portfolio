import { useState } from 'react'
import type { WindowId, WindowMeta, WindowState } from '../types'
import DesktopIcon from './DesktopIcon'
import WindowFrame from './WindowFrame'
import Taskbar from './Taskbar'
import WelcomeWindow from './windows/WelcomeWindow'
import AboutWindow from './windows/AboutWindow'
import WorkHistoryWindow from './windows/WorkHistoryWindow'
import SkillsWindow from './windows/SkillsWindow'
import ContactWindow from './windows/ContactWindow'
import ResumeWindow from './windows/ResumeWindow'
import RecycleBinWindow from './windows/RecycleBinWindow'

const WINDOW_META: WindowMeta[] = [
  { id: 'welcome', title: 'Welcome!', icon: '💛', width: 420, height: 300 },
  { id: 'about', title: 'About Melike', icon: '👩‍💻', width: 460, height: 460 },
  { id: 'work', title: 'Work History', icon: '💼', width: 620, height: 420 },
  { id: 'skills', title: 'Skills', icon: '🎓', width: 460, height: 320 },
  { id: 'contact', title: 'Contact', icon: '✉️', width: 420, height: 320 },
  { id: 'resume', title: 'Resume.pdf', icon: '📄', width: 380, height: 280 },
  { id: 'recycle', title: 'Recycle Bin', icon: '🗑️', width: 380, height: 260 },
]

const initialPositions: Record<WindowId, { x: number; y: number }> = {
  welcome: { x: 160, y: 80 },
  about: { x: 220, y: 60 },
  work: { x: 140, y: 100 },
  skills: { x: 260, y: 90 },
  contact: { x: 300, y: 120 },
  resume: { x: 340, y: 140 },
  recycle: { x: 200, y: 70 },
}

const TASKBAR_HEIGHT = 36

function buildInitialState(): Record<WindowId, WindowState> {
  const state = {} as Record<WindowId, WindowState>
  WINDOW_META.forEach((meta) => {
    const isWelcome = meta.id === 'welcome'
    const x = isWelcome
      ? Math.max(0, Math.round((window.innerWidth - meta.width) / 2))
      : initialPositions[meta.id].x
    const y = isWelcome
      ? Math.max(0, Math.round((window.innerHeight - TASKBAR_HEIGHT - meta.height) / 2))
      : initialPositions[meta.id].y
    state[meta.id] = {
      x,
      y,
      width: meta.width,
      height: meta.height,
      zIndex: 1,
      open: meta.id === 'welcome',
      minimized: false,
    }
  })
  return state
}

export default function Desktop() {
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>(buildInitialState)
  const [zCounter, setZCounter] = useState(2)
  const [activeId, setActiveId] = useState<WindowId | null>('welcome')
  const [selectedIcon, setSelectedIcon] = useState<WindowId | null>(null)
  const [startOpen, setStartOpen] = useState(false)

  const openWindow = (id: WindowId) => {
    setZCounter((z) => z + 1)
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], open: true, minimized: false, zIndex: zCounter + 1 },
    }))
    setActiveId(id)
    setStartOpen(false)
  }

  const closeWindow = (id: WindowId) => {
    setWindows((prev) => ({ ...prev, [id]: { ...prev[id], open: false } }))
    if (activeId === id) setActiveId(null)
  }

  const minimizeWindow = (id: WindowId) => {
    setWindows((prev) => ({ ...prev, [id]: { ...prev[id], minimized: true } }))
    if (activeId === id) setActiveId(null)
  }

  const focusWindow = (id: WindowId) => {
    setZCounter((z) => z + 1)
    setWindows((prev) => ({ ...prev, [id]: { ...prev[id], zIndex: zCounter + 1 } }))
    setActiveId(id)
  }

  const moveWindow = (id: WindowId, x: number, y: number) => {
    setWindows((prev) => ({ ...prev, [id]: { ...prev[id], x, y } }))
  }

  const handleTaskClick = (id: WindowId) => {
    const w = windows[id]
    if (w.minimized || activeId !== id) {
      setWindows((prev) => ({ ...prev, [id]: { ...prev[id], minimized: false } }))
      focusWindow(id)
    } else {
      minimizeWindow(id)
    }
  }

  const openIds = WINDOW_META.filter((m) => windows[m.id].open).map((m) => m.id)

  const renderContent = (id: WindowId) => {
    switch (id) {
      case 'welcome':
        return <WelcomeWindow onOpen={(target) => openWindow(target)} />
      case 'about':
        return <AboutWindow />
      case 'work':
        return <WorkHistoryWindow />
      case 'skills':
        return <SkillsWindow />
      case 'contact':
        return <ContactWindow />
      case 'resume':
        return <ResumeWindow />
      case 'recycle':
        return <RecycleBinWindow />
      default:
        return null
    }
  }

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-win-desktop"
      onClick={() => {
        setSelectedIcon(null)
        setStartOpen(false)
      }}
    >
      {/* Desktop icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-4">
        {WINDOW_META.filter((m) => m.id !== 'welcome').map((meta) => (
          <DesktopIcon
            key={meta.id}
            label={meta.title}
            icon={meta.icon}
            selected={selectedIcon === meta.id}
            onSelect={() => setSelectedIcon(meta.id)}
            onOpen={() => openWindow(meta.id)}
          />
        ))}
      </div>

      {/* Windows */}
      {WINDOW_META.map((meta) => {
        const w = windows[meta.id]
        if (!w.open || w.minimized) return null
        return (
          <WindowFrame
            key={meta.id}
            title={meta.title}
            icon={meta.icon}
            x={w.x}
            y={w.y}
            width={w.width}
            height={w.height}
            zIndex={w.zIndex}
            active={activeId === meta.id}
            onClose={() => closeWindow(meta.id)}
            onMinimize={() => minimizeWindow(meta.id)}
            onFocus={() => focusWindow(meta.id)}
            onMove={(x, y) => moveWindow(meta.id, x, y)}
          >
            {renderContent(meta.id)}
          </WindowFrame>
        )
      })}

      {/* Start menu */}
      {startOpen && (
        <div
          className="absolute bottom-[36px] left-0 bevel-out bg-win-gray w-[220px] z-[9999]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex">
            <div className="title-bar-gradient w-8 flex items-center justify-center writing-vertical text-white font-bold text-[13px] py-4">
              <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Melike Yusufoglu
              </span>
            </div>
            <div className="flex-1 py-1">
              {WINDOW_META.map((meta) => (
                <button
                  key={meta.id}
                  onClick={() => openWindow(meta.id)}
                  className="w-full flex items-center gap-2 px-3 py-1.5 text-left text-[13px] hover:bg-win-navy hover:text-white"
                >
                  <span>{meta.icon}</span> {meta.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Taskbar
        windows={WINDOW_META}
        openIds={openIds}
        activeId={activeId}
        minimized={Object.fromEntries(
          WINDOW_META.map((m) => [m.id, windows[m.id].minimized])
        ) as Record<WindowId, boolean>}
        onTaskClick={handleTaskClick}
        startOpen={startOpen}
        onToggleStart={() => setStartOpen((s) => !s)}
      />
    </div>
  )
}
