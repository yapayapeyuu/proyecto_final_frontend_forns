import { getContacts } from "../../services/services";
import { useChat } from "../../context/ChatContext";

export default function ContactList() {

  const contacts = getContacts();
  const { setActiveChat } = useChat();

  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <div
          key={contact.id}
          onClick={() => setActiveChat(contact)}
        >
          {contact.name}
        </div>
      ))}
    </div>
  );
}