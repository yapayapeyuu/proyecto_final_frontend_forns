/* import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { useChat } from "../../context/ChatContext";
import "../../styles/loginScreen.css";
import { useNavigate } from "react-router";

const LoginScreen = ({ onLogin }) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const { setUserName } = useChat();
    const navigate = useNavigate();

    const handleSubmitLogin = (e) => {
        e.preventDefault(); //  evita recarga

        //  guardar el valor real
        localStorage.setItem('cracks_user', user);

        //  actualizar contexto
        setUserName(user);

        onLogin();
        navigate("/chat");
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmitLogin}>
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

                <button type="submit" onClick={handleSubmitLogin}>Ingresar</button>
            </form>
        </div>
    );
};

export default LoginScreen; */
/* 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/loginScreen.css";

function LoginScreen() {

  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!user.trim()) return;

    // guardar usuario
    localStorage.setItem("chat_user", user);

    // redirigir
    navigate("/chat");
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Whatsapp</h2>

        <input
          type="text"
          placeholder="Tu nombre"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />

        <button type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default LoginScreen; */

import { useState } from "react";
import { useNavigate } from "react-router";
import { useChat } from "../../context/ChatContext"; // mantener el contexto
import "../../styles/LoginScreen.css";

function LoginScreen({ onLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { setUserName } = useChat();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!user.trim() || !pass.trim()) return; // validación básica

    // guardar usuario
    localStorage.setItem("chat_user", user);

    // actualizar contexto
    setUserName(user);

    if (onLogin) onLogin(); // ejecutar callback

    // redirigir
    navigate("/chat");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Whatsapp</h2>

        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default LoginScreen; 
/* 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/loginScreen.css";

export default function LoginScreen() {

  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!user.trim()) return;

    localStorage.setItem("chat_user", user);

    navigate("/chat"); // ← REDIRECCIÓN
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>

        <h1>Bienvenido</h1>

        <input
          type="text"
          value={user}
          placeholder="Tu nombre"
          onChange={(e) => setUser(e.target.value)}
        />

        <button type="submit">
          Ingresar
        </button>

      </form>
    </div>
  );
} */