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
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="faq-section py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
            Resuelve tus Dudas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Conoce cómo funciona nuestra asesoría y el respaldo que te brindamos.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="faq-item overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="faq-toggle-btn hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-base font-bold text-slate-900 flex items-center gap-2.5">
                    <i className="bi bi-question-circle-fill text-indigo-600 text-lg flex-shrink-0"></i>
                    <span>{faq.q}</span>
                  </span>
                  <i
                    className={`bi bi-chevron-down text-slate-400 font-bold transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-indigo-600' : ''
                    }`}
                  ></i>
                </button>

                {isOpen && (
                  <div className="faq-answer-panel">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900">¿Tienes una pregunta específica sobre tu tesis?</h4>
            <p className="text-xs sm:text-sm text-slate-500">Un asesor metodológico está en línea para responderte de inmediato.</p>
          </div>
          <a
            href="https://wa.me/51999999999?text=Hola,%20tengo%20una%20consulta%20espec%C3%ADfica%20sobre%20mi%20tesis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 shadow-sm transition-all"
          >
            <i className="bi bi-chat-text-fill"></i>
            <span>Preguntar a un Asesor</span>
          </a>
        </div>

      </div>
    </section>
  );
}
