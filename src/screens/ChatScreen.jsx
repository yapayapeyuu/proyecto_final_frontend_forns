import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import IconSidebar from '../components/MiniSidebar/IconSidebar';
import ChatWindow from '../components/ChatWindow/ChatWindow';
import ContactInfoPanel from '../components/ContactInfoPanel/ContactInfoPanel';
import { useChat } from '../context/ChatContext';


const ChatScreen = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [mobileView, setMobileView] = useState("sidebar");
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const { contacts, activeChat } = useChat();
    const contact = contacts.find(c => c.PhoneNumber === activeChat);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
        if (activeChat && isMobile) {
            setMobileView("chat");
        }
    }, [activeChat, isMobile]);

    return (
        <div className="main-layout">

            {!isMobile && (
                <div className="mini-sidebar-container">
                    <IconSidebar />
                </div>
            )}


            {(!isMobile || mobileView === "sidebar") && (
                <div className="sidebar-container-desktop">
                    <Sidebar />
                </div>
            )}


            {(!isMobile || mobileView === "chat") && (
                <div className="chat-container">

                    <ChatWindow
                        onOpenInfo={() => {
                            if (isMobile) {
                                setMobileView("info");
                            } else {
                                setShowInfo(true);
                            }
                        }}
                        onBack={() => setMobileView("sidebar")}
                        isMobile={isMobile}
                    />
                </div>
            )}


            {(!isMobile && showInfo) || (isMobile && mobileView === "info") ? (
                <div className="info-container">
                    <ContactInfoPanel
                        contact={contact}
                        onClose={() => {
                            if (isMobile) {
                                setMobileView("chat");
                            } else {
                                setShowInfo(false);
                            }
                        }}
                    />
                </div>
            ) : null}

        </div>
    );
};

export default ChatScreen;