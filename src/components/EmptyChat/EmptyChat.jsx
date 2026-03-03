import React from "react"
import "./EmptyChat.css"

export default function EmptyChat() {
  return (
    <div className="empty-chat">
      <h1 className="empty-chat__title">Descarga WhatsApp para Windows</h1>
      <p className="empty-chat__text">
        Obtén funciones adicionales, como llamadas y videollamadas, compartir pantalla y más.
      </p>
      <div className="empty-chat__buttons">
        <button className="empty-chat__button">Enviar documento</button>
        <button className="empty-chat__button">Añadir contacto</button>
      </div>
    </div>
  )
}