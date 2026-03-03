/* import { createContext, useContext, useState } from "react";
import { getContacts } from "../services/services";

const ContactsContext = createContext();

export const useContacts = () => useContext(ContactsContext);

export default function ContactsContextProvider({ children }) {

  const contactsData = getContacts();

  const [contacts] = useState(contactsData);

  const provider_values = {
    contacts,
    //favorite_name: "pepe"
  };

  return (
    <ContactsContext.Provider value={provider_values}>
      {children}
    </ContactsContext.Provider>
  );
} */
/* 
  import { createContext, useContext, useState } from "react";
import { getContacts } from "../services/services";

const ContactsContext = createContext();

export const useContacts = () => useContext(ContactsContext);

export default function ContactsContextProvider({ children }) {

  const [contacts] = useState(getContacts());

  return (
    <ContactsContext.Provider value={{ contacts }}>
      {children}
    </ContactsContext.Provider>
  );
} */
/* import { createContext, useContext, useState } from "react";
import { getContacts } from "../services/services";

const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {

  // 👇 usamos SERVICE (NO data directa)
  const [contacts, setContacts] = useState(getContacts());

  const value = {
    contacts,
    setContacts
  };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext); */

/* import { createContext, useContext, useState, useMemo } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState({});

  // 👇 usuario guardado en login
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


   // 🔥 BUG INVISIBLE FIX (SAFE)
   
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

export const useChat = () => useContext(ChatContext); */

/* import { createContext, useContext, useState, useMemo } from "react";

const ChatContext = createContext();

export const ContactsContext = createContext({
  contacts: [],
  favorite_name: ""
});

export const ChatProvider = ({ children }) => {

  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState({});

  // 👇 usuario guardado en login
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

export const useChat = () => useContext(ChatContext); */
import { createContext, useContext, useState } from "react";
import contactsData from "../data/contactsData";

const ContactsContext = createContext();

export const ContactsContextProvider = ({ children }) => {

  const [contacts, setContacts] = useState(contactsData);

  return (
    <ContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);