import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: '¿Cómo garantizan que la tesis no tenga plagio en Turnitin?',
    a: 'Realizamos redacción y parafraseo científico original con citas normadas bajo estándares APA 7ma, Vancouver o IEEE. Cada entrega pasa por nuestra cuenta institucional de Turnitin Feedback Studio (sin depósito ni almacenamiento en el repositorio) y te entregamos el reporte oficial en PDF con porcentaje menor al permitido por tu universidad.'
  },
  {
    q: 'Ya tengo mi tesis avanzada pero mi jurado me hizo muchas observaciones, ¿me pueden ayudar?',
    a: '¡Por supuesto! Uno de nuestros servicios más solicitados es el "Levantamiento de Observaciones". Analizamos la matriz de observaciones emitida por tus revisores o jurados, corregimos cada punto metodológico o estadístico y elaboramos una carta de subsanación detallada punto por punto para asegurar su aprobación inmediata.'
  },
  {
    q: '¿Cómo se maneja el pago y qué facilidades ofrecen?',
    a: 'Manejamos pagos en cuotas flexibles vinculadas a entregables e hitos aprobados. Nunca pagas el total por adelantado: abonas una parte para iniciar, revisas y validas el capítulo o la etapa, y continuas con la siguiente cuota una vez conforme.'
  },
  {
    q: '¿Qué incluye la asesoría en análisis estadístico?',
    a: 'Incluye la limpieza y codificación de tu base de datos, pruebas de normalidad, fiabilidad de instrumentos (Alfa de Cronbach / Omega), tablas y gráficos estadísticos en alta resolución según normas APA/Vancouver, redacción de la interpretación y discusión de resultados, y una sesión personalizada en video para explicarte cada número y tabla para tu defensa.'
  },
  {
    q: '¿Realizan asesoría para artículos científicos en Scopus o Web of Science?',
    a: 'Sí. Contamos con investigadores activos y doctores calificados con publicaciones indexadas en revistas Scopus (cuartiles Q1, Q2, Q3, Q4) y SciELO. Adaptamos tu tesis al formato IMRyD, seleccionamos la revista con mayor probabilidad de aceptación y te guiamos en el proceso de revisión por pares.'
  },
  {
    q: '¿Atienden estudiantes y tesistas de cualquier universidad y país?',
    a: 'Sí. Trabajamos de manera 100% online mediante Google Meet, Zoom y WhatsApp. Nos ceñimos con absoluta fidelidad a la guía y reglamento de titulación específico de tu universidad (pública o privada).'
  }
];

export default function FAQ() {
  // Inicialmente cerrado para que al presionar se abra con la animación suave
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="preguntas" className="faq-section py-20 relative scroll-mt-20">
      {/* Anchor identifier for existing #faq links */}
      <span id="faq" className="absolute -top-24 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
            Resuelve tus Dudas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Conoce cómo funciona nuestra asesoría y el respaldo metodológico que te brindamos.
          </p>
        </div>

        {/* Accordion con transición fluida de apertura y cierre */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="faq-toggle-btn"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-slate-900 flex items-center gap-3 text-left">
                    <i className={`bi bi-question-circle-fill text-lg flex-shrink-0 transition-colors ${
                      isOpen ? 'text-blue-600' : 'text-slate-400'
                    }`}></i>
                    <span>{faq.q}</span>
                  </span>
                  
                  <div className={`faq-chevron-box ${isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-400'}`}>
                    <i className="bi bi-chevron-down text-sm"></i>
                  </div>
                </button>

                {/* Contenedor animado con CSS Grid (despliegue suave) */}
                <div className={`faq-answer-wrapper ${isOpen ? 'is-open' : ''}`}>
                  <div className="faq-answer-inner">
                    <div className="faq-answer-panel">
                      <p className="faq-answer-text">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
