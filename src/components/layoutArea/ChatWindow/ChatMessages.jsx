/* import { useState } from "react";
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


import { useChat } from "../../../context/ChatContext";
import "../../../styles/chatMessages.css";

export default function ChatMessages({ contact }) {

  const { messages } = useChat();

  const chatMessages =
    messages[contact.PhoneNumber] || [];

  return (
    <div className="chat-messages">

      {chatMessages.map(msg => (
        <div
          key={msg.id}
          className={`message ${
            msg.author === "me"
              ? "message--me"
              : "message--other"
          }`}
        >
          {msg.text}
        </div>
      ))}

    </div>
  );
}