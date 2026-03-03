/* import { useChat } from "../../context/ChatContext";
import { getContacts } from "../../services/service";

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
  
import { useChat } from "../../context/ChatContext";
import { getContacts } from "../../services/service";

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
}*/

/* import { useChat } from "../../context/ChatContext";
import { Link } from "react-router-dom";

export default function ContactList() {

  const { contacts, setActiveChat } = useChat();

  return (
    <div className="contact-list">

      {contacts.map(contact => (

        <Link
          key={contact.id}
          to={`/chat/${contact.PhoneNumber}`}
          className="contact-item"
          onClick={() => setActiveChat(contact)}
        >

          <img
            src={contact.avatar}
            alt={contact.name}
            className="avatar"
          />

          <span>{contact.name}</span>

        </Link>

      ))}

    </div>
  );
} */
/* import { useChat } from "../../context/ChatContext";
import { Link } from "react-router";
import "../../styles/contacts.css";


export default function ContactList() {

  const { contacts } = useChat();

  return (
    <div className="contact-list">

      {contacts.map(contact => (

        <Link
          key={contact.id}
          to={`/chat/${contact.PhoneNumber}`}
          className="contact-item"
        >

          <img
            src={contact.avatar}
            alt={contact.name}
            className="avatar"
          />

          <span>{contact.name}</span>

        </Link>

      ))}

    </div>
  );
} */

 /*  import { useChat } from "../../context/ChatContext";
import { Link } from "react-router";
import "../../styles/contacts.css";

export default function ContactList() {
  const { contacts } = useChat();

  return (
    <aside className="contacts">
      <div className="contacts__header">
        <h2 className="contacts__title">Chats</h2>
      </div>

      <div className="contacts__list">
        {contacts.map((contact) => (
          <Link
            key={contact.PhoneNumber}
            to={`/chat/${contact.PhoneNumber}`}
            className="contacts__item"
          >
            <img
              src={contact.avatar}
              alt={contact.name}
              className="contacts__avatar"
            />

            <div className="contacts__info">
              <span className="contacts__name">
                {contact.name}
              </span>
              <span className="contacts__last-msg">
                {contact.lastMsg}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
} */
/* import { useNavigate } from "react-router-dom";
import { useContacts } from "../../context/ContactsContext";

export default function ContactList() {

  const { contacts } = useContacts();
  const navigate = useNavigate();

  const openChat = (contact) => {
    navigate(`/chat?contact=${contact.PhoneNumber}`);
  };

  return (
    <div className="contact-list">

      {contacts.map(contact => (
        <div
          key={contact.PhoneNumber}
          onClick={() => openChat(contact)}
          className="contact-item"
        >
          {contact.name}
        </div>
      ))}

    </div>
  );
} */
/* 
import { useNavigate } from "react-router-dom";
import { useContacts } from "../../context/ContactsContext";
import "../../styles/contactList.css";



export default function ContactList() {

  const { contacts } = useContacts();
  const navigate = useNavigate();

  const openChat = (contact) => {
    navigate(`/chat?contact=${contact.PhoneNumber}`);
  };

  return (
    <div className="contact-list">

      {contacts.map(contact => (
        <div
          key={contact.PhoneNumber}
          className="contact-item"
          onClick={() => openChat(contact)}
        >
          {contact.name}
        </div>
      ))}

    </div>
  );
} */

/*   import { useContacts } from "../../context/ContactsContext";
import { useNavigate } from "react-router-dom";
//import "../../styles/chatList.css";
import "../../styles/contactList.css";

export default function ContactList() {

  const { contacts } = useContacts();
  const navigate = useNavigate();

  const openChat = (contact) => {
    navigate(`/chat?contact=${contact.PhoneNumber}`);
  };

  return (
    <aside className="chat-list">

      {contacts.map(contact => (
        <div
          key={contact.PhoneNumber}
          className="chat-item"
          onClick={() => openChat(contact)}
        >
          <img
            src={contact.avatar}
            className="avatar"
            alt={contact.name}
          />

          <div className="chat-info">
            <h4>{contact.name}</h4>
            <p>{contact.lastMessage || "Mensaje..."}</p>
          </div>

        </div>
      ))}

    </aside>
  );
} */

  /* import { Link } from "react-router-dom";
import { useContacts } from "../../context/ContactsContext";
import "../../styles/contactList.css";

export default function ContactList() {

  const { contacts } = useContacts();

  return (
    <div className="contacts">

      <div className="contacts__header">
        <h2 className="contacts__title">Chats</h2>
      </div>

      <div className="contacts__list">

        {contacts.map((contact) => (

          <Link
            key={contact.PhoneNumber}
            to={`/chat/${contact.PhoneNumber}`}
            className="contacts__item"
          >

            <img
              src={contact.avatar}
              alt={contact.name}
              className="contacts__avatar"
            />

            <div className="contacts__info">
              <span className="contacts__name">
                {contact.name}
              </span>

              <span className="contacts__last-msg">
                {contact.lastMsg}
              </span>
            </div>

          </Link>

        ))}

      </div>

    </div>
  );
} */
/* import { Link } from "react-router-dom";
import { useContacts } from "../../context/ContactsContext";
import "../../styles/contactList.css";

export default function ContactList() {

  const { contacts } = useContacts();

  return (
    <div className="contacts">

      <div className="contacts__header">
        <h2 className="contacts__title">Chats</h2>
      </div>

      <div className="contacts__list">

        {contacts.map((contact) => (

          <Link
            key={contact.PhoneNumber}
            to={`/chat/${contact.PhoneNumber}`}
            className="contacts__item"
          >

            <img
              src={contact.avatar}
              alt={contact.name}
              className="contacts__avatar"
            />

            <div className="contacts__info">
              <span className="contacts__name">
                {contact.name}
              </span>

              <span className="contacts__last-msg">
                {contact.lastMsg}
              </span>
            </div>

          </Link>

        ))}

      </div>

    </div>
  );
} */

  import { memo } from "react";
import { Link } from "react-router-dom";
import { useContacts } from "../../context/ContactsContext";
import "../../styles/contactList.css";

function ContactList() {

  const { contacts } = useContacts();

  console.log("ContactList render");

  return (
    <div className="contacts">

      <div className="contacts__header">
        <h2 className="contacts__title">Chats</h2>
      </div>

      <div className="contacts__list">

        {contacts.map((contact) => (

          <Link
            key={contact.PhoneNumber}
            to={`/chat/${contact.PhoneNumber}`}
            className="contacts__item"
          >

            <img
              src={contact.avatar}
              alt={contact.name}
              className="contacts__avatar"
            />

            <div className="contacts__info">
              <span className="contacts__name">
                {contact.name}
              </span>

              <span className="contacts__last-msg">
                {contact.lastMsg}
              </span>
            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default memo(ContactList);