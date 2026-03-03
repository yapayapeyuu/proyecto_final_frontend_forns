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

import IconSidebar from "../../components/layout temp/IconSidebar";
import ContactList from "../../components/layout temp/ContactList";
import ChatWindow from "../../components/chat/ChatWindow";

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