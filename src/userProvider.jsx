// src/userProvider.js
import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto
const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUserContext };
