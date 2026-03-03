/* import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import ChatWindow from '../../components/ChatWindow/ChatWindow';
import './ChatScreen.css'



const ChatScreen = () => {
    return (
        <div className="main-layout">
            <div className="sidebar-container-desktop">
                <Sidebar />
            </div>
            <ChatWindow />
        </div>
    );
};



export default ChatScreen; */

/* import IconSidebar from "../components/layout/IconSidebar";
import ContactList from "../components/layout/ContactList";
import ChatWindow from "../components/chat/ChatWindow";
import EmptyChat from "../components/chat/EmptyChat";

import { useChat } from "../context/ChatContext";

export default function ChatScreen() {

  const { activeChat } = useChat();

  return (
    <div className="chat-layout">

      <IconSidebar />

      <ContactList />

      {activeChat ? (
        <ChatWindow />
      ) : (
        <EmptyChat />
      )}

    </div>
  );
} */

  import IconSidebar from "../components/sidebar/IconSidebar";
import ContactList from "../components/contacts/ContactList";
import ChatWindow from "../components/chat/ChatWindow";

import "../styles/chatScreen.css";

export default function ChatScreen() {
  return (
    <div className="chat-screen">

      {/* Sidebar izquierda */}
      <IconSidebar />

      {/* Lista de contactos */}
      <ContactList />

      {/* Área del chat */}
      <ChatWindow />

    </div>
  );
}

