import React, { useState, useEffect } from 'react';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="floating-whatsapp-wrapper">
      {/* Advisor prompt bubble */}
      {showBubble && (
        <div className="floating-whatsapp-chat-bubble">
          <div className="floating-whatsapp-chat-header">
            <div className="floating-whatsapp-advisor-info">
              <div className="floating-whatsapp-avatar">
                <i className="bi bi-person-fill"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Asesor Metodológico</p>
                <p className="text-[10px] text-slate-500 font-medium">TesisAltiplánica</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowBubble(false)}
              className="floating-whatsapp-close-btn"
              aria-label="Cerrar mensaje"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            ¿Tienes dudas con el perfil, la estadística o las observaciones de tu jurado? Escríbenos para una consulta orientativa.
          </p>

          <a
            href="https://wa.me/51999999999?text=Hola,%20deseo%20orientaci%C3%B3n%20para%20mi%20tesis%20universitaria"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
          >
            <i className="bi bi-whatsapp"></i>
            <span>Iniciar Consulta en WhatsApp</span>
          </a>
        </div>
      )}

      {/* Button Row */}
      <div className="floating-whatsapp-btn-row">
        {!showBubble && (
          <div className="floating-whatsapp-tooltip hidden sm:block">
            ¿Dudas con tu tesis? Escríbenos 👋
          </div>
        )}

        <button
          type="button"
          onClick={() => setShowBubble(!showBubble)}
          aria-label="Contactar por WhatsApp"
          className="floating-whatsapp-btn"
        >
          <span className="floating-whatsapp-ping"></span>
          <i className="bi bi-whatsapp"></i>
        </button>
      </div>
    </div>
  );
}
