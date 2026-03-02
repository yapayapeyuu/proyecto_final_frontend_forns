import React from 'react';
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



export default ChatScreen;