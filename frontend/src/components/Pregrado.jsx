import React, { useState } from 'react';
import './Pregrado.css';

const modalidadesPregrado = [
  {
    id: 'tesis',
    title: 'Sustentación de Tesis',
    badge: 'Modalidad Tradicional',
    icon: 'bi-mortarboard-fill',
    badgeClass: 'bg-blue-800 text-white',
    summary: 'Ruta completa de investigación institucional para bachilleres de la UNA Puno.',
    pills: ['Perfil Aprobado', 'SPSS / Jamovi', 'Turnitin < 20%', 'Simulacro con Jurados'],
    highlights: [
      'Delimitación del tema y aprobación del Perfil o Plan de Tesis.',
      'Diseño metodológico y validación de instrumentos (Alfa de Cronbach, V de Aiken).',
      'Procesamiento estadístico de datos y prueba de hipótesis.',
      'Redacción del borrador final, levantamiento de observaciones y sustentación.'
    ]
  },
  {
    id: 'articulo',
    title: 'Titulación por Artículo',
    badge: 'Modalidad Extraordinaria',
    icon: 'bi-file-earmark-text-fill',
    badgeClass: 'bg-emerald-700 text-white',
    summary: 'Titúlate más rápido publicando en revistas científicas indexadas (Scopus / SciELO).',
    pills: ['Vía Rápida', 'Scopus / SciELO', 'Formato IMRyD', 'Sin Trámite de Borrador'],
    highlights: [
      'Redacción y estructuración del artículo en formato IMRyD.',
      'Selección de revista indexada afín a tu carrera con tiempos ágiles de revisión.',
      'Formato bajo normas de autor (APA 7ma, Vancouver o IEEE).',
      'Acompañamiento en la sumisión y subsanación de arbitraje hasta la aceptación.'
    ]
  }
];

export default function Pregrado() {
  const [activeTab, setActiveTab] = useState('tesis');
  const current = modalidadesPregrado.find((m) => m.id === activeTab) || modalidadesPregrado[0];

  return (
    <section id="pregrado" className="pregrado-section py-16 sm:py-20 bg-white relative scroll-mt-20">
      <span id="titulacion" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with UNA Puno Official Logo */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 p-2 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
              <img
                src="/images/logos/logo_unap.svg"
                alt="Logo UNA Puno"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                Pregrado • UNA Puno
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1.5 tracking-tight">
                Titulación Profesional
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                Modalidades vigentes para bachilleres de todas las facultades
              </p>
            </div>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            {modalidadesPregrado.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`pregrado-tab-btn ${
                    isActive ? 'pregrado-tab-active' : 'pregrado-tab-inactive'
                  }`}
                >
                  <i className={`bi ${item.icon} text-base`}></i>
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Card (Clear, visual, uncluttered) */}
        <div className="pregrado-card mt-8 p-6 sm:p-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Summary and Tags */}
            <div className="md:col-span-5 space-y-4">
              <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${current.badgeClass}`}>
                <i className={`bi ${current.icon}`}></i>
                {current.badge}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                {current.summary}
              </h3>

              {/* Tags / Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {current.pills.map((pill, idx) => (
                  <span key={idx} className="pregrado-pill">
                    <i className="bi bi-tag-fill text-blue-600 text-[10px]"></i>
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Key Highlights */}
            <div className="md:col-span-7 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Etapas clave del proceso
              </h4>
              <ul className="space-y-3">
                {current.highlights.map((point, idx) => (
                  <li key={idx} className="pregrado-item-check">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center text-xs mt-0.5 shrink-0 font-bold border border-blue-200">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700 leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
