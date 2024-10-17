import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

import axios from 'axios'; // Importamos axios para hacer la petición al backend
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { Card } from 'primereact/card';
import { useUserContext } from '../userProvider'; // Ajusta la ruta según sea necesario
import './style.css';

const Login = () => {
    const [password, setPassword] = useState('');
    const { usuario } = useUserContext(); // Accede al contexto
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const handleGoogleSuccess = async (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        const userEmail = decoded.email;

        // Reinicia el mensaje de error cuando se intenta una nueva autenticación
        setErrorMessage('');

        // Verifica si el correo está en la base de datos
        try {
            const response = await axios.get(
                `http://localhost:8000/Auth/?correo=${userEmail}` // Cambia la URL por la correcta en tu entorno
            );

            if (response.status === 200) {
                if (userEmail.endsWith('@uda.edu.mx')) {
                    // Redirige al usuario a la página de inicio si el correo es correcto
                    navigate('/home');
                } else {
                    setErrorMessage('Acceso denegado. Utiliza tu correo institucional.');
                }
            }
        } catch (error) {
            if (error.response?.status === 404) {
                setErrorMessage('El correo no está registrado en el sistema.');
            } else {
                setErrorMessage('Error al verificar el correo.');
            }
        }
    };

    const handleGoogleError = () => {
        setErrorMessage('Error al iniciar sesión con Google');
    };

    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <div className="login-container">
                <br />
                <Card title="Portal Estudiante" className="login-card" style={{ alignItems: 'center' }}>
                    <br />
                    <div className="field mb-3">
                        <label htmlFor="email" className="block">Correo Electrónico Institucional</label>
                        <br />
                        <br />
                        <InputText
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingrese su correo institucional"
                            className="input-field"
                            disabled
                        />
                    </div>
                    <br />
                    <br />
                    {/* Mostrar el mensaje de error si existe */}
                    {errorMessage && (
                        <Message severity="error" text={errorMessage} className="mt-2" />
                    )}
                    {/* Botón de Inicio de Sesión con Google */}
                    <div className="social-login">
                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={handleGoogleError}
                        />
                    </div>
                </Card>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
