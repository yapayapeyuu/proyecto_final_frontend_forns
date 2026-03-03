/* import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import React, { useState, useEffect } from 'react';
import { ChatProvider, useChat } from './context/ChatContext.jsx';
import LoginScreen from './screens/LoginScreen/LoginScreen.jsx';
import ChatScreen from './screens/ChatScreen/ChatScreen.jsx';
import './styles/App.css';
import ChatLayout from './screens/ChatLayout/ChatLayout.jsx';

// Para los estados de whatsapp
const StatusOverlay = () => {
  const { activeStatus, closeStatus } = useChat();

  if (!activeStatus) return null;

  return (
    <div className="status-overlay" onClick={closeStatus}>
      <div className="status-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-status-btn" onClick={closeStatus}>×</button>
        <video
          src={activeStatus}
          autoPlay
          onEnded={closeStatus}
          className="status-video"
        />
      </div>
    </div>
  );
};

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedUser = localStorage.getItem('cracks_user');
    return savedUser && savedUser !== 'Usuario';
  });

  useEffect(() => {
    const checkAuth = () => {
      const savedUser = localStorage.getItem('cracks_user');
      setIsAuthenticated(savedUser && savedUser !== 'Usuario');
    };

    window.addEventListener('storage', checkAuth);
    checkAuth();

    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  return (
 /*  <Router>
    <ChatProvider> 
      <div className="app-container">
       <Routes>
          <Route path="/login" element={<LoginScreen onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/chat/:PhoneNumber" element={isAuthenticated ? <ChatScreen /> : <Navigate to="/login" />} />
        </Routes>
        <StatusOverlay /> 
      </div>
    </ChatProvider>
  </Router> 
  <Routes>

  <Route path="/" element={<LoginScreen />} />

  <Route path="/chat" element={<ChatLayout />}>

      <Route index element={<EmptyChat />} />

      <Route path=":PhoneNumber" element={<ChatWindow />} />

  </Route>

</Routes>
  );
}

export default App;

 */

/* import { Routes, Route } from "react-router";

import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ChatLayout from "./screens/ChatLayout/ChatLayout";
import EmptyChat from "./components/Chat/EmptyChat";
import ChatWindow from "./components/ChatWindow/ChatWindow";
//import './styles/App.css';


function App() {
  return (
    <Routes>

      <Route path="/" element={<LoginScreen />} />
      <Route path="/chat" element={<ChatLayout />}>

        <Route index element={<EmptyChat />} />

        <Route path=":PhoneNumber" element={<ChatWindow />} />

      </Route>

    </Routes>
  );
}

export default App; */

/* import { Routes, Route } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ChatLayout from "./screens/ChatLayout/ChatLayout";
import EmptyChat from "./components/Chat/EmptyChat"
import ChatWindow from "./components/Chat/ChatWindow";

function App() {

  return (
    <Routes>

      <Route path="/" element={<LoginScreen />} />

      <Route path="/chat" element={<ChatLayout />}>

        <Route index element={<EmptyChat />} />

        <Route path=":PhoneNumber" element={<ChatWindow />} />

      </Route>

    </Routes>
  );
}

export default App; */

import { Routes, Route } from "react-router-dom";

//import LoginScreen from "./screens/LoginScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ChatLayout from "./screens/ChatLayout/ChatLayout";
//import ChatLayout from "./screens/ChatLayout";
import ChatWindow from "./components/Chat/ChatWindow";
import EmptyChat from "./components/Chat/EmptyChat";


export default function App() {
  return (
    <Routes>

      <Route path="/" element={<LoginScreen />} />

      <Route path="/chat" element={<ChatLayout />}>

        <Route index element={<EmptyChat />} />

        <Route path="chat" element={<ChatWindow />} />

      </Route>

    </Routes>
  );
}