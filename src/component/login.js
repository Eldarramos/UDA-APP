// src/component/login.js
import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useUserContext } from '../userProvider'; // Ajusta la ruta según sea necesario
import './style.css';


const Login = () => {
    //const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { usuario } = useUserContext(); // Accede al contexto
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    //const CLIENT_ID='422356463744-6ph6gvs0ge55fqli9nkv09lhfpu0amjv.apps.googleusercontent.com'
    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para autenticar al usuario
        console.log('Email:', email);
        
    };
    const handleGoogleSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        const userEmail = decoded.email;
    
        // Reinicia el mensaje de error cuando se intenta una nueva autenticación
        setErrorMessage('');
    
        if (userEmail.endsWith('@uda.edu.mx')) {
            // Redirige al usuario a la página de inicio si el correo es correcto
            navigate('/home');
        } else {
            // Establece un mensaje de error si el correo no es válido
            setErrorMessage('Acceso denegado. Por favor, utiliza tu correo institucional.');
        }
    };
    
  

    const handleGoogleError = () => {
        setErrorMessage('Error al iniciar sesión con Google');
    };
    
    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <div className="login-container">
            <br>
            </br>
            <Card title="Portal Estudiante" className="login-card" style={{  alignItems: 'center' }}>
                <br>
                </br>
                    <div className="field mb-3">
                        <label htmlFor="email" className="block">Correo Electrónico Institucional</label>
                        <br>
                        </br>
                        <br>
                        </br>
                        <InputText
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingrese su correo institucional"
                            className="input-field"
                            disabled
                        />
                    </div>
                    <br>
                    </br>
                    <br>
                    </br>
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
