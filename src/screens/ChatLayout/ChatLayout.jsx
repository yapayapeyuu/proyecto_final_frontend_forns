/* import ContactList from "../../components/Layout/ContactList";
import IconSidebar from "../../components/Layout/IconSidebar";
//import ChatWindow from "../../components/ChatWindow/ChatWindow";
import { Outlet } from "react-router";
import "../../styles/layout.css";


export default function ChatLayout() {
  return (
    <div className="chat-layout">

      <IconSidebar />

      <ContactList />

      <Outlet/>

    </div>
  );
} */

/* import ContactList from "../../components/Layout/ContactList";
import IconSidebar from "../../components/Layout/IconSidebar";
import { Outlet } from "react-router";
import "../../styles/layout.css";

export default function ChatLayout() {
  return (
    <div className="chat-layout">

      <IconSidebar />


      <ContactList />

      <main className="chat-layout__main">
        <Outlet />
      </main>

    </div>
  );
} */

/* import ContactList from "../../components/Layout/ContactList";
import IconSidebar from "../../components/Layout/IconSidebar";
import { Outlet } from "react-router";
import "../../styles/layout.css"


export default function ChatLayout() {
  return (
    <div className="chat-layout">

      <IconSidebar />

      <ContactList />

      <Outlet />

    </div>
  );
} */

import IconSidebar from "../../components/layoutArea/IconSidebar";
import ContactList from "../../components/layoutArea/ContactList";
import ChatWindow from "../../components/chatArea/ChatWindow";

import "../../styles/layout.css";

export default function ChatLayout() {
  return (
    <div className="chat-layout">
      <IconSidebar />
      <ContactList />
      <ChatWindow />
      
    </div>
  );
}