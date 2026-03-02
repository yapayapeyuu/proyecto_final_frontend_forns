import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from "../../context/ChatContext";
import './LoginScreen.css'

const LoginScreen = ({ onLogin }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const { setUserName } = useChat();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); //  evita recarga

        //  guardar el valor real
        localStorage.setItem('cracks_user', user);

        //  actualizar contexto
        setUserName(user);

        onLogin();
        navigate("/chat/123");
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Whatsapp</h2>

                <input
                    type="text"
                    placeholder="usuario"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="contraseña"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                />

                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
};

export default LoginScreen;