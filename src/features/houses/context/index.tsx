import * as React from 'react';
import { House } from '../types';

interface ContextHouse {
  setCurrentHouse: (house: House) => void;
  currentHouse: House | null;
  setSavedHouses: (houses: House[]) => void;
  savedHouses: House[];
}

export const ContextHouse = React.createContext<ContextHouse>(
  {} as ContextHouse
);

export const ContextProviderHouse: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentHouse, setCurrentHouse] = React.useState<House | null>(null);
  const [savedHouses, setSavedHouses] = React.useState<House[]>([]);

  return (
    <ContextHouse.Provider
      value={{
        currentHouse,
        setCurrentHouse,
        savedHouses,
        setSavedHouses,
      }}
    >
      {children}
    </ContextHouse.Provider>
  );
};
