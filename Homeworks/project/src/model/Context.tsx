'use client' // Important for client-side context

import { createContext, useContext, useState } from 'react'

type DateContextType = {
  date: string
  setDate: (date: string) => void
}

type ThemeContextType = {
  theme: string
  setTheme: (theme: string) => void
}

const DateContext = createContext<DateContextType | undefined>(undefined)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [date, setDate] = useState("")
  const [theme, setTheme] = useState("dark")

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <DateContext.Provider value={{ date, setDate }}>
        {children}
      </DateContext.Provider>
    </ThemeContext.Provider>
  )
}

export function useDate() {
  const context = useContext(DateContext)
  if (context === undefined) {
    throw new Error('useDate must be used within a DateProvider')
  }
  return context
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}