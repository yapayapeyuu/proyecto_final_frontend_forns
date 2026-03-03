/*import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
) */

/* import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ChatProvider } from './context/ChatContext.jsx'
import App from './App.jsx'
import "./styles/global.css";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ChatProvider>
      <App />
    </ChatProvider>
  </BrowserRouter>
) */

/*   import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import ChatProvider from "./context/ChatContext";
import ContactsContextProvider from "./context/ContactsContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContactsContextProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </ContactsContextProvider>
  </BrowserRouter>
) */

/* import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ChatProvider from "./context/ChatContext.jsx";
import ContactsContextProvider from "./context/ContactsContext.jsx";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContactsContextProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </ContactsContextProvider>
  </BrowserRouter>
); */

/* import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import ChatProvider from "./context/ChatContext";
import ContactsContextProvider from "./context/ContactsContext";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContactsContextProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </ContactsContextProvider>
  </BrowserRouter>
);
 */
/*import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { ContactsProvider } from "./context/ContactsContext";
import { ChatProvider } from "./context/ChatContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContactsProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </ContactsProvider>
  </BrowserRouter>
); */

/* import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";
import ContactsContextProvider from "./context/ContactsContext.jsx";

import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContactsContextProvider>
      <ChatProvider>
        <App />
      </ChatProvider>
    </ContactsContextProvider>
  </BrowserRouter>
); */

import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import { ChatProvider } from "./context/ChatContext";
import { ContactsContextProvider } from "./context/ContactsContext";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChatProvider>
      <ContactsContextProvider>
        <App />
      </ContactsContextProvider>
    </ChatProvider>
  </BrowserRouter>
);