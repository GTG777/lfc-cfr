'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Palette = 'A' | 'B' | 'C' | 'D'
type Mode = 'light' | 'dark'

interface ThemeCtx {
  palette: Palette
  mode: Mode
  setPalette: (p: Palette) => void
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeCtx>({
  palette: 'A', mode: 'light',
  setPalette: () => {}, toggleMode: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [palette, setPaletteState] = useState<Palette>('A')
  const [mode, setModeState] = useState<Mode>('light')

  useEffect(() => {
    const savedPalette = (localStorage.getItem('palette') as Palette) ?? 'A'
    const savedMode = (localStorage.getItem('mode') as Mode) ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setPaletteState(savedPalette)
    setModeState(savedMode)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.palette = palette
    document.documentElement.dataset.mode = mode
    localStorage.setItem('palette', palette)
    localStorage.setItem('mode', mode)
  }, [palette, mode])

  const setPalette = (p: Palette) => setPaletteState(p)
  const toggleMode = () => setModeState(m => m === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ palette, mode, setPalette, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
