import React from 'react';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  return (
    <div className="floating-whatsapp-wrapper">
      <div className="floating-whatsapp-btn-row">
        <div className="floating-whatsapp-tooltip hidden sm:block">
          ¿Dudas con tu tesis? Escríbenos
        </div>

        <a
          href="https://wa.me/51958274958?text=Hola,%20deseo%20orientaci%C3%B3n%20para%20mi%20tesis%20universitaria"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="floating-whatsapp-btn"
        >
          <span className="floating-whatsapp-ping"></span>
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </div>
  );
}

