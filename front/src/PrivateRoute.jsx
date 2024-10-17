import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from './userProvider'; 

function PrivateRoute({ children, Rol}) {
  const location = useLocation();
  const { usuario } = useUserContext(); // Extrae el contexto del usuario

  if (!usuario) {
    // Si no hay usuario, redirigir a la página de login
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (Rol&& !Rol.includes(usuario.Rol)) {
    // Si el usuario no tiene un rol permitido, redirigir a la página no autorizado
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children; // Si pasa las comprobaciones, renderiza el componente solicitado
}

export default PrivateRoute;
