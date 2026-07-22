export type WindowId =
  | 'welcome'
  | 'about'
  | 'work'
  | 'skills'
  | 'contact'
  | 'resume'
  | 'recycle'

export interface WindowMeta {
  id: WindowId
  title: string
  icon: string
  width: number
  height: number
}

export interface WindowState {
  x: number
  y: number
  width: number
  height: number
  zIndex: number
  open: boolean
  minimized: boolean
}
