/* import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useChat } from '../../context/ChatContext';
import './ChatWindow.css'
import { MdSend } from "react-icons/md";

const ChatWindow = () => {
    const { PhoneNumber } = useParams();
    const navigate = useNavigate();

    const {
        contacts,
        messages,
        sendMessage,
        userName,
        isTyping,
        logout,
        openStatus
    } = useChat();

    const [text, setText] = useState('');
    const scrollRef = useRef();

    const contact = useMemo(
        () => contacts.find(c => c.PhoneNumber === PhoneNumber),
        [contacts, PhoneNumber]
    );

    const chatMessages = useMemo(
        () => messages[PhoneNumber] || [],
        [messages, PhoneNumber]
    );

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        sendMessage(PhoneNumber, text);
        setText('');
    };

    if (!contact) return <div className="error">Contacto no encontrado</div>;

    return (
        <div className="chat-window">
            <header className="chat-header">
                <Link to="/" className="back-btn">←</Link>

                <div className="chat-header-content">

                    <img
                        src={contact.avatar}
                        alt={contact.name}
                        className="avatar"
                        onClick={() => openStatus(contact.statusVideo)}
                        style={{ cursor: 'pointer' }}
                    />

                    <div className="header-info">
                        <h3 className="contact-name">{contact.name}</h3>
                        <span className="contact-status">
                            {isTyping === PhoneNumber ? 'Escribiendo...' : 'En línea'}
                        </span>
                    </div>
                </div>
            </header>

            <main className="message-area">
                {chatMessages.map(m => (
                    <div
                        key={m.id}
                        className={`msg-bubble ${m.author === userName ? 'me' : 'them'}`}
                    >
                        <p>{m.text}</p>
                        <div className="msg-footer">
                            <span className="msg-time">{m.time}</span>
                            {m.author === userName && (
                                <div className={`msg-status ${m.status === 'read' ? 'read' : ''}`}>
                                    <span className="check">✓</span>
                                    <span className="check">✓</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                <div ref={scrollRef} />
            </main>

            <form onSubmit={handleSubmit} className="chat-input-form">
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />

                <button type="submit" className="send-btn">
                    <MdSend />
                </button>
            </form>
        </div>
    );
};

export default ChatWindow;
 */

/* import { useParams } from "react-router";
import { useChat } from "../../context/ChatContext";
import { useState, useEffect, useRef, useMemo } from "react";
import { MdSend } from "react-icons/md";
import EmptyChat from "./EmptyChat";
import "../../styles/chat.css";



export default function ChatWindow() {

  const { PhoneNumber } = useParams();

  const {
    contacts,
    messages,
    sendMessage,
    userName,
    isTyping,
    openStatus
  } = useChat();

  const [text, setText] = useState("");
  const scrollRef = useRef();

  // si todavía no eligieron chat
  if (!PhoneNumber) {
    return <EmptyChat/>;
  }

  const contact = useMemo(
    () => contacts.find(c => c.PhoneNumber === PhoneNumber),
    [contacts, PhoneNumber]
  );

  if (!contact) {
    return <EmptyChat />;
  }

  const chatMessages = useMemo(
    () => messages[PhoneNumber] || [],
    [messages, PhoneNumber]
  );

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    sendMessage(PhoneNumber, text);
    setText("");
  };

  return (
    <div className="chat-window">

      {/* HEADER *//*}
      <header className="chat-header">

        <div className="chat-header-content">

          <img
            src={contact.avatar}
            alt={contact.name}
            className="avatar"
            onClick={() => openStatus(contact.statusVideo)}
            style={{ cursor: "pointer" }}
          />

          <div className="header-info">
            <h3 className="contact-name">{contact.name}</h3>
            <span className="contact-status">
              {isTyping === PhoneNumber
                ? "Escribiendo..."
                : "En línea"}
            </span>
          </div>

        </div>

      </header>

      {/* MENSAJES *//*}
      <main className="message-area">

        {chatMessages.map(m => (
          <div
            key={m.id}
            className={`msg-bubble ${m.author === userName ? "me" : "them"}`}
          >
            <p>{m.text}</p>

            <div className="msg-footer">
              <span className="msg-time">{m.time}</span>

              {m.author === userName && (
                <div className={`msg-status ${m.status === "read" ? "read" : ""}`}>
                  <span className="check">✓</span>
                  <span className="check">✓</span>
                </div>
              )}
            </div>

          </div>
        ))}

        <div ref={scrollRef} />

      </main>

      {/* INPUT *//*}
      <form onSubmit={handleSubmit} className="chat-input-form">

        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />

        <button type="submit" className="send-btn">
          <MdSend />
        </button>

      </form>

    </div>
  );
} */
/* 
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router";
import { useChat } from "../../context/ChatContext";
import { useState, useEffect, useRef, useMemo } from "react";
import { MdSend } from "react-icons/md";
import EmptyChat from "./EmptyChat";
import "../../styles/chat.css";



export default function ChatWindow() {

  const [searchParams] = useSearchParams();

const phone = searchParams.get("contact");
  const { PhoneNumber } = useParams();

  const {
    contacts,
    messages,
    sendMessage,
    userName,
    isTyping,
    openStatus
  } = useChat();

  const [text, setText] = useState("");
  const scrollRef = useRef();

  // si todavía no eligieron chat
  if (!PhoneNumber) {
    return <EmptyChat/>;
  }

  const contact = useMemo(
    () => contacts.find(c => c.PhoneNumber === PhoneNumber),
    [contacts, PhoneNumber]
  );

  if (!contact) {
    return <EmptyChat />;
  }

  const chatMessages = useMemo(
    () => messages[PhoneNumber] || [],
    [messages, PhoneNumber]
  );

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    sendMessage(PhoneNumber, text);
    setText("");
  };

  return (
    <div className="chat-window">


      <header className="chat-header">

        <div className="chat-header-content">

          <img
            src={contact.avatar}
            alt={contact.name}
            className="avatar"
            onClick={() => openStatus(contact.statusVideo)}
            style={{ cursor: "pointer" }}
          />

          <div className="header-info">
            <h3 className="contact-name">{contact.name}</h3>
            <span className="contact-status">
              {isTyping === PhoneNumber
                ? "Escribiendo..."
                : "En línea"}
            </span>
          </div>

        </div>

      </header>

      <main className="message-area">

        {chatMessages.map(m => (
          <div
            key={m.id}
            className={`msg-bubble ${m.author === userName ? "me" : "them"}`}
          >
            <p>{m.text}</p>

            <div className="msg-footer">
              <span className="msg-time">{m.time}</span>

              {m.author === userName && (
                <div className={`msg-status ${m.status === "read" ? "read" : ""}`}>
                  <span className="check">✓</span>
                  <span className="check">✓</span>
                </div>
              )}
            </div>

          </div>
        ))}

        <div ref={scrollRef} />

      </main>

 
      <form onSubmit={handleSubmit} className="chat-input-form">

        <input
          type="text"
          placeholder="Escribe un mensaje..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />

        <button type="submit" className="send-btn">
          <MdSend />
        </button>

      </form>

    </div>
  );
}


 */

import { useSearchParams } from "react-router-dom";
import { useChat } from "../../context/ChatContext";
import "../../styles/chat.css";

export default function ChatWindow() {

  const [searchParams] = useSearchParams();
  const phone = searchParams.get("contact");

  const { messages, sendMessage } = useChat();

  if (!phone) {
    return <div className="empty-chat">Selecciona un chat</div>;
  }

  const chatMessages = messages[phone] || [];

  return (
    <div className="chat-window">

      {chatMessages.map(m => (
        <p key={m.id}>{m.text}</p>
      ))}

      <button onClick={() => sendMessage(phone, "Hola!")}>
        Enviar
      </button>

    </div>
  );
}