import React, { createContext, useContext, useState } from "react";

const auth = createContext();

export function CorreoProvider({ children }) {
  const [Correo, setCorreo] = useState("");

  return (
    <auth.Provider value={{ Correo, setCorreo }}>
      {children}
    </auth.Provider>
  );
}

export function useCorreo() {
  return useContext(auth);
}