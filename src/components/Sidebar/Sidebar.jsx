import React from 'react';
import { Link } from 'react-router-dom';
import { useChat } from '../../context/ChatContext';
import './Sidebar.css'
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  const { contacts, userName, logout } = useChat();

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <div className="user-avatar-container">
          <img src="/Imagenes/baghee.jpg" className='foto-user' alt='foto-user'/>
        </div>
        <h2 className="user-name"> {userName}</h2>
      </header>

      <nav className="contact-list">
        {contacts.map((contact) => (
          <Link key={contact.PhoneNumber} to={`/chat/${contact.PhoneNumber}`} className="contact-link">
            <img src={contact.avatar} alt={contact.name} className="avatar" />
            <div>
              <strong>{contact.name}</strong>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'gray' }}>{contact.lastMsg}</p>
            </div>
          </Link>
        ))}
      </nav>
      <div>
        <button
          onClick={() => {
            logout();
            navigate('/login');
            }}
            className="logout-btn-mobile">
            <CiLogout />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;