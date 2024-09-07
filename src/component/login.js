// src/component/login.js
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useUserContext } from '../userProvider'; // Ajusta la ruta según sea necesario
import './style.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { usuario } = useUserContext(); // Accede al contexto

    const handleLogin = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para autenticar al usuario
        console.log('Email:', email);
        console.log('Password:', password);
    };

    
    return (
        <div className="login-container">
            <Card title="Portal Estudiante" className="login-card">
                <form onSubmit={handleLogin} className="login-form">
                    <div className="field mb-3">
                        <label htmlFor="email" className="block">Correo Electrónico</label>
                        <InputText
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingrese su correo"
                            className="input-field"
                        />
                    </div>
                    <div className="field mb-3">
                        <label htmlFor="password" className="block">Contraseña</label>
                        <div className="password-wrapper">
                            <Password
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                feedback={false}
                                toggleMask
                                placeholder="Ingrese su contraseña"
                                className="input-field-pass"
                            />
                        </div>

                    </div>
                    <Button label="Iniciar Sesión" icon="pi pi-sign-in" className="login-button" />
                </form>
            </Card>
        </div>
    );
    
};

export default Login;
