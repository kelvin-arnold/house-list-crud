import React, { createContext, useState } from 'react';

interface ContextAuth {
  name: string;
  authenticated: boolean;
}

export const ContextAuth = createContext<ContextAuth>({} as ContextAuth);

export const ContextAuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [name, setName] = useState<string>('Kelvin Arnold');
  const [authenticated, setAuthenticated] = useState<boolean>(true);

  return (
    <ContextAuth.Provider
      value={{
        name,
        authenticated,
      }}
    >
      {children}
    </ContextAuth.Provider>
  );
};
