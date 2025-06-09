'use client' // Important for client-side context

import { createContext, useContext, useState } from 'react'

type DateContextType = {
  date: string
  setDate: (date: string) => void
}

const ThemeContext = createContext<DateContextType | undefined>(undefined)

export function DateProvider({ children }: { children: React.ReactNode }) {
  const [date, setDate] = useState("")

  return (
    <ThemeContext.Provider value={{ date, setDate }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useDate() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}