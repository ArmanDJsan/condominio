import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import fetchCSRFToken from '../functions/fetchCSRFToken';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login , logout, user }= useAuth();
    useEffect(() => {
        fetchCSRFToken();
    }, []);

    const handleLogin = () => {
        login(email, password);
    };

    const handleLogout = () => {
          logout();
      };

    return (
        <div>
            {user ? (
                <div>
                    <h2>Bienvenido: {user.name + ' ' + user.email}</h2>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
            ) : (
                <div>
                    <h2>Iniciar Sesión</h2>
                    <form>
                        <label>
                            Email:
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Contraseña:
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                        <br />
                        <button type="button" onClick={handleLogin}>
                            Iniciar Sesión
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Login