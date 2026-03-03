/* export default function IconSidebar() {
  return (
    <div className="icon-sidebar">
    </div>
  );
} */

/* import { FaCommentDots, FaCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useChat } from "../../context/ChatContext";
import "../../styles/iconSidebar.css";


export default function IconSidebar() {
  const navigate = useNavigate();
  const { userName, userAvatar, logout } = useChat();

  return (
    <div className="icon-sidebar">

      {/* BLOQUE SUPERIOR *//*}
      <div className="icon-sidebar__top">
        <button
          className="icon-sidebar__button icon-sidebar__button--chat"
          onClick={() => navigate("/chat")}
          title="Chats"
        >
          <FaCommentDots className="icon-sidebar__icon" />
        </button>

        <button
          className="icon-sidebar__button icon-sidebar__button--status"
          onClick={() => alert("Aquí iría la ruta de Estados")}
          title="Estados"
        >
          <FaCircle className="icon-sidebar__icon icon-sidebar__icon--status" />
        </button>
      </div>

      {/* BLOQUE INFERIOR *//*}
      <div className="icon-sidebar__bottom">

        {/* AVATAR *//*}
        {userAvatar ? (
          <img
            src={userAvatar}
            alt={userName}
            className="icon-sidebar__avatar icon-sidebar__avatar--image"
          />
        ) : (
          <div className="icon-sidebar__avatar icon-sidebar__avatar--initial">
            {userName?.[0]?.toUpperCase() || "U"}
          </div>
        )}

        <button
          className="icon-sidebar__button icon-sidebar__button--logout"
          onClick={() => navigate("/")}
          title="Cerrar sesión"
        >
        <CiLogout />
        </button>
      </div>

    </div>
  );
} */

  import { memo } from "react";
import { FaCommentDots, FaCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useChat } from "../../context/ChatContext";
import "../../styles/iconSidebar.css";

function IconSidebar() {

  const navigate = useNavigate();
  const { userName, userAvatar, logout } = useChat();

  console.log("IconSidebar render");

  return (
    <div className="icon-sidebar">

      <div className="icon-sidebar__top">
        <button
          className="icon-sidebar__button icon-sidebar__button--chat"
          onClick={() => navigate("/chat")}
          title="Chats"
        >
          <FaCommentDots className="icon-sidebar__icon" />
        </button>

        <button
          className="icon-sidebar__button icon-sidebar__button--status"
          onClick={() => alert("Aquí iría la ruta de Estados")}
          title="Estados"
        >
          <FaCircle className="icon-sidebar__icon icon-sidebar__icon--status" />
        </button>
      </div>

      <div className="icon-sidebar__bottom">

        {userAvatar ? (
          <img
            src={userAvatar}
            alt={userName}
            className="icon-sidebar__avatar icon-sidebar__avatar--image"
          />
        ) : (
          <div className="icon-sidebar__avatar icon-sidebar__avatar--initial">
            {userName?.[0]?.toUpperCase() || "U"}
          </div>
        )}

        <button
          className="icon-sidebar__button icon-sidebar__button--logout"
          onClick={() => {
            logout();
            navigate("/");
          }}
          title="Cerrar sesión"
        >
          <CiLogout />
        </button>

      </div>

    </div>
  );
}

export default memo(IconSidebar);