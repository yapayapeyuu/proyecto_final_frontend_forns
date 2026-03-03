/* import React, { createContext, useState, useContext, useEffect } from 'react';
import { formatTime, getBotResponse } from '../utils/constants';
import { contactsData } from '../data/contactsData.js';
import { initialMessages } from "../data/initialMessages";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {


    const [userName, setUserName] = useState(() => {
        return localStorage.getItem('cracks_user') || '';
    });

    const [activeStatus, setActiveStatus] = useState(null);

    const openStatus = (videoUrl) => setActiveStatus(videoUrl);
    const closeStatus = () => setActiveStatus(null);

    const navigate = useNavigate();
    const contacts = contactsData;

    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem('cracks_messages');
        if (saved) return JSON.parse(saved);

        const initialUser = localStorage.getItem('cracks_user') || '';
        return initialMessages(initialUser);
    });

    const [isTyping, setIsTyping] = useState(null);


    useEffect(() => {
        if (userName) {
            localStorage.setItem('cracks_user', userName);
        }
    }, [userName]);

    useEffect(() => {
        localStorage.setItem('cracks_messages', JSON.stringify(messages));
    }, [messages]);

    const logout = () => {
        localStorage.removeItem('cracks_user');
        localStorage.removeItem('cracks_messages');
        setUserName('');
        navigate("/login");
    };

    const sendMessage = (contactId, text) => {

        const hora = formatTime(new Date());

        const newMessage = {
            id: Date.now(),
            text,
            author: userName,
            time: hora,
            status: 'sent'
        };

        setMessages(prev => ({
            ...prev,
            [contactId]: [...(prev[contactId] || []), newMessage]
        }));

 
        setIsTyping(contactId);

        setTimeout(() => {

            const contact = contacts.find(c => c.PhoneNumber === contactId);

            if (contact) {

                const reply = {
                    id: Date.now() + 1,
                    text: getBotResponse(userName, text),
                    author: contact.name,
                    time: formatTime(new Date()),
                    status: 'read'
                };

                setMessages(prev => {

                    const chatActual = prev[contactId] || [];

                    const chatActualizado = chatActual.map(m =>
                        m.author === userName
                            ? { ...m, status: 'read' }
                            : m
                    );

                    return {
                        ...prev,
                        [contactId]: [...chatActualizado, reply]
                    };
                });

                setIsTyping(null);
            }

        }, 2000);
    };

    return (
        <ChatContext.Provider value={{
            contacts,
            messages,
            sendMessage,
            userName,
            setUserName,
            isTyping,
            logout,
            openStatus,
            closeStatus,
            activeStatus
        }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext); */
/* 
import { createContext, useContext, useState } from "react";
import { getContacts } from "../services/service";


const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

  const contacts = getContacts();

  const [messages, setMessages] = useState({});

  const [activeChat, setActiveChat] = useState(null);

  const userName = "Yo";

  const sendMessage = (phone, text) => {

    const newMessage = {
      id: Date.now(),
      author: userName,
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      }),
      status: "sent"
    };

    setMessages(prev => ({
      ...prev,
      [phone]: [...(prev[phone] || []), newMessage]
    }));
  };

  const openStatus = (video) => {
    console.log("abrir status", video);
  };

  return (
    <ChatContext.Provider
      value={{
        contacts,
        messages,
        sendMessage,
        userName,
        activeChat,
        setActiveChat,
        openStatus
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext); */

/* import { createContext, useContext, useState } from "react";
import { getContacts } from "../services/services";
//import { getContacts } from "../services/services";

const ChatContext = createContext();

export function ChatProvider({ children }) {

  const contacts = getContacts();

  const [messages, setMessages] = useState({});

  const sendMessage = (phone, text) => {

    const newMessage = {
      id: Date.now(),
      author: "Yo",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      }),
      status: "sent"
    };

    setMessages(prev => ({
      ...prev,
      [phone]: [...(prev[phone] || []), newMessage]
    }));
  };

  return (
    <ChatContext.Provider
      value={{
        contacts,
        messages,
        sendMessage
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext); */

/* import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export default function ChatProvider({ children }) {

  const [messages, setMessages] = useState({});

  const sendMessage = (phone, text) => {

    setMessages(prev => ({
      ...prev,
      [phone]: [
        ...(prev[phone] || []),
        {
          id: Date.now(),
          text,
          author: "me"
        }
      ]
    }));
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
} *//* 

  import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export default function ChatProvider({ children }) {

  const [userName, setUserName] = useState(
    localStorage.getItem("chat_user") || ""
  );

  const [messages, setMessages] = useState({});

  const sendMessage = (phone, text) => {
    setMessages(prev => ({
      ...prev,
      [phone]: [
        ...(prev[phone] || []),
        {
          id: Date.now(),
          text,
          author: userName
        }
      ]
    }));
  };

  const value = {
    userName,
    setUserName, // ✅ ESTO FALTABA
    messages,
    sendMessage
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
} */

 /*  import { createContext, useContext, useState, useMemo } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState({});

  const sendMessage = (phone, text) => {

    const newMessage = {
      id: Date.now(),
      text,
      author: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    setMessages(prev => ({
      ...prev,
      [phone]: [...(prev[phone] || []), newMessage]
    }));
  };
  const value = useMemo(() => ({
    activeChat,
    setActiveChat,
    messages,
    sendMessage
  }), [activeChat, messages]);

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext); */

/* import { createContext, useContext, useState } from "react";

// 1️⃣ Crear contexto
export const ContactsContext = createContext({
  contacts: [],
  favorite_name: ""
});

// 2️⃣ Provider
const ContactsContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [favorite_name, setFavoriteName] = useState("");

  const value = {
    contacts,
    setContacts,
    favorite_name,
    setFavoriteName
  };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};

// 3️⃣ CUSTOM HOOK (🔥 ESTE FALTABA)
export const useContacts = () => {
  return useContext(ContactsContext);
};

export default ContactsContextProvider; */

/* import { createContext, useContext, useState, useMemo } from "react";

/* =========================
   CONTEXT
========================= *//*

export const ChatContext = createContext();*/

/* =========================
   PROVIDER
========================= *//*

const ChatProvider = ({ children }) => {

  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState({});

  // datos de usuario (porque IconSidebar los usa)
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState(null);

  const logout = () => {
    setUserName("");
    setUserAvatar(null);
    setActiveChat(null);
  };

  const sendMessage = (phone, text) => {

    const newMessage = {
      id: Date.now(),
      text,
      author: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    setMessages(prev => ({
      ...prev,
      [phone]: [...(prev[phone] || []), newMessage]
    }));
  };*/

  /* 🔥 evita re-render global *//*
  const value = useMemo(() => ({
    activeChat,
    setActiveChat,
    messages,
    sendMessage,
    userName,
    setUserName,
    userAvatar,
    setUserAvatar,
    logout
  }), [activeChat, messages, userName, userAvatar]);

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};*/

/* =========================
   CUSTOM HOOK
========================= *//*

export const useChat = () => {
  return useContext(ChatContext);
};

export default ChatProvider; */

import { createContext, useContext, useState, useMemo } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState({});

  const [userName, setUserName] = useState(
    localStorage.getItem("chat_user") || ""
  );

  const [userAvatar, setUserAvatar] = useState(null);

  const logout = () => {
    localStorage.removeItem("chat_user");
    setUserName("");
  };

  const sendMessage = (phone, text) => {

    const newMessage = {
      id: Date.now(),
      text,
      author: userName || "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    setMessages(prev => ({
      ...prev,
      [phone]: [...(prev[phone] || []), newMessage]
    }));
  };

  const value = useMemo(() => ({
    activeChat,
    setActiveChat,
    messages,
    sendMessage,
    userName,
    setUserName,
    userAvatar,
    setUserAvatar,
    logout
  }), [activeChat, messages, userName, userAvatar]);

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);