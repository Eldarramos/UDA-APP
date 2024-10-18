import React, { createContext, useContext, useState } from "react";

const CorreoContext = createContext();

export function useCorreoContext() {
  return useContext(CorreoContext);
}

export function CorreoProvider({ children }) {
  const [correo, setCorreo] = useState("");
  return (
    <CorreoContext.Provider value={{ correo, setCorreo }}>
      {children}
    </CorreoContext.Provider>
  );
}
