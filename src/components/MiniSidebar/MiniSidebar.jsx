import React from 'react';
import { useChat } from '../../context/ChatContext';
import { useNavigate } from 'react-router-dom';
import './MiniSidebar.css';
import { CiLogout } from "react-icons/ci";
import { FaCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa6";

const MiniSidebar = () => {
    const { userName, logout, toggleTheme, theme } = useChat();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="mini-sidebar">

       
            <div className="mini-avatar">
                <img src="/Imagenes/flan.jpeg" alt="User" />
            </div>

            
            <div className="mini-actions">

             
                <button 
                    className="mini-btn"
                    onClick={toggleTheme}
                    title="Cambiar tema"
                >
                    {theme === 'dark' ? <FaRegCircle /> :  <FaCircle/> }
                </button>

              
                <button 
                    className="mini-btn logout"
                    onClick={handleLogout}
                    title="Cerrar sesión"
                >
                     <CiLogout />
                </button>

            </div>
        </div>
    );
};

export default MiniSidebar;