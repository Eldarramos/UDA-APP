// src/App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from './component/login.js';
import { UserProvider } from './userProvider'; 
import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css';  // Tema de PrimeReact
import 'primereact/resources/primereact.min.css';          // Estilos de PrimeReact
import 'primeicons/primeicons.css';                        // Iconos de Prime


function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Agrega otras rutas aquí si es necesario */}
      </Routes>
    </UserProvider>
  );
}

export default App;

