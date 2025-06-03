import { createContext, useContext, useState } from 'react';

type SportContextType = {
  sport: string;
  setSport: (sport: string) => void;
};

const SportContext = createContext<SportContextType | undefined>(undefined);

export function SportContextProvider({ children }: { children: React.ReactNode }) {
  const [sport, setSport] = useState('football');
  return (
    <SportContext.Provider value={{ sport, setSport }}>
      {children}
    </SportContext.Provider>
  );
}

export function useSport() {
  const context = useContext(SportContext);
  if (!context) throw new Error('useSport must be used within SportContextProvider');
  return context;
}