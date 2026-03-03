/* export default function ChatHeader({ contact }) {
  return (
    <div className="chat-header">
      <img src={contact.avatar} />
      <h3>{contact.name}</h3>
    </div>
  );
} */

/* import "../../../styles/chatHeader.css";

export default function ChatHeader({ contact }) {

  return (
    <div className="chat-header">

      <img
        src={contact.avatar}
        alt={contact.name}
        className="chat-header__avatar"
      />

      <h3 className="chat-header__name">
        {contact.name}
      </h3>

    </div>
  );
} */

  import "../../../styles/chatHeader.css";
  import { IoCallOutline} from "react-icons/io5";
import { GoSearch } from "react-icons/go";
  import { CiMenuKebab } from "react-icons/ci";


export default function ChatHeader({ contact }) {

  return (
    <header className="chat-header">

      {/* CONTACTO */}
      <div className="chat-header__contact">

        <img
          src={contact.avatar}
          alt={contact.name}
          className="chat-header__avatar"
        />

        <div className="chat-header__info">
          <span className="chat-header__name">
            {contact.name}
          </span>

          <span className="chat-header__last-seen">
            {contact.lastSeen || "última vez recientemente"}
          </span>
        </div>

      </div>

      {/* ACCIONES */}
      <div className="chat-header__actions">

        <button className="chat-header__button">
          <IoCallOutline />
        </button>

        <button className="chat-header__button">
         <GoSearch />
        </button>

        <button className="chat-header__button">
         <CiMenuKebab />
        </button>

      </div>

    </header>
  );
}