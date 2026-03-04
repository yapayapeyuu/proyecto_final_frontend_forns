import React from 'react';
import './ContactInfoPanel.css';
import { MdClose } from "react-icons/md";

const ContactInfoPanel = ({ contact, onClose }) => {
  if (!contact) return null;

  return (
    <aside className="info-panel">
      <button onClick={onClose}><MdClose /></button>

      <div className="info-header">
        <img src={contact.avatar} alt={contact.name} />
        <h2>{contact.name}</h2>
        <p>{contact.PhoneNumber}</p>
      </div>

      <div className="info-body">
        <p><strong>Edad:</strong> {contact.age}</p>
      </div>
    </aside>
  );
};

export default ContactInfoPanel;