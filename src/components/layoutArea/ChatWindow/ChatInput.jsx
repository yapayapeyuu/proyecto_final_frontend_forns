/* import { useState } from "react";
import { useChat } from "../../context/ChatContext";

export default function ChatInput() {

  const { activeChat, sendMessage } = useChat();

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    sendMessage(activeChat.PhoneNumber, text);
    setText("");
  };

  return (
    <form
      className="chat-input-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Escribe un mensaje..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Enviar
      </button>
    </form>
  );
} */

 /*  import { useState } from "react";
import { useChat } from "../../../context/ChatContext";

export default function ChatInput({ contact }) {

  const [text, setText] = useState("");
  const { setMessages } = useChat();

  const sendMessage = () => {

    if (!text.trim()) return;

    setMessages(prev => ({
      ...prev,
      [contact.PhoneNumber]: [
        ...(prev[contact.PhoneNumber] || []),
        {
          id: Date.now(),
          text,
          author: "me"
        }
      ]
    }));

    setText("");
  };

  return (
    <div className="chat-input">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
} */

  import { useState } from "react";
import { useChat } from "../../../context/ChatContext";
import "../../../styles/chatInput.css";


export default function ChatInput({ contact }) {

  const [text, setText] = useState("");

  const { sendMessage } = useChat();

  const handleSend = e => {
    e.preventDefault();

    if (!text.trim()) return;

    sendMessage(contact.PhoneNumber, text);
    setText("");
  };

  return (
    <form
      className="chat-input"
      onSubmit={handleSend}
    >
      <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Escribí un mensaje"
      />

      <button type="submit">
        Enviar
      </button>
    </form>
  );
}