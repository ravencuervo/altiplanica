import React, { useState } from 'react';
import './Posgrado.css';

const programasPosgrado = [
  {
    id: 'especialidad',
    title: 'Segunda Especialidad',
    badge: 'Especialización EPG',
    icon: 'bi-hospital-fill',
    badgeClass: 'bg-blue-700 text-white',
    summary: 'Proyectos clínicos, aplicados y epidemiológicos para especialistas.',
    pills: ['Residentado Médico', 'Enfermería', 'Comité de Ética', 'Vancouver / APA'],
    highlights: [
      'Informes de experiencia profesional o proyectos de mejora continua.',
      'Estudios clínicos y epidemiológicos con bioestadística en SPSS/R.',
      'Subsanación de observaciones ante comités de ética hospitalaria.',
      'Modalidad de titulación por artículo científico en ciencias de la salud.'
    ]
  },
  {
    id: 'maestria',
    title: 'Maestría',
    badge: 'Grado de Magíster',
    icon: 'bi-award-fill',
    badgeClass: 'bg-blue-800 text-white',
    summary: 'Modelos explicativos, análisis multivariado y titulación por artículo o tesis.',
    pills: ['Tesis Explicativa', 'Graduación por Artículo', 'SPSS / R / Stata', 'Scopus / SciELO'],
    highlights: [
      'Matriz de consistencia rigurosa con literatura científica indexada.',
      'Modelos multivariados (regresiones, modelado y contrastación de hipótesis).',
      'Titulación por Artículo: adaptación de la investigación a revistas Scopus y SciELO.',
      'Sustentación blindada ante el jurado calificador de la EPG UNA Puno.'
    ]
  },
  {
    id: 'doctorado',
    title: 'Doctorado (PhD)',
    badge: 'Rigor Epistemológico',
    icon: 'bi-gem',
    badgeClass: 'bg-blue-900 text-white',
    summary: 'Generación de nuevo conocimiento, ecuaciones estructurales y artículos Scopus/WoS.',
    pills: ['PLS-SEM / AMOS', 'Atlas.ti 23', 'Artículos Scopus Q1-Q4', 'Docentes RENACYT'],
    highlights: [
      'Fundamentación epistemológica y ontológica de máximo nivel.',
      'Modelado de ecuaciones estructurales (SmartPLS o AMOS) y análisis cualitativo (Atlas.ti).',
      'Graduación por Artículo Scopus / Web of Science: redacción y sumisión editorial.',
      'Defensa doctoral con argumentos metodológicos y científicos sólidos.'
    ]
  }
];

export default function Posgrado() {
  const [activeTab, setActiveTab] = useState('especialidad');
  const current = programasPosgrado.find((p) => p.id === activeTab) || programasPosgrado[0];

  return (
    <section id="posgrado" className="posgrado-section py-16 sm:py-20 relative scroll-mt-20">
      <span id="grados" className="absolute -top-24 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with EPG UNA Puno Official Logo */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-slate-200">
          <div className="flex items-center gap-3.5 sm:gap-4 text-left w-full sm:w-auto">
            <div className="w-14 h-14 sm:w-20 sm:h-20 p-2 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
              <img
                src="/images/logos/logo_epg.svg"
                alt="Logo Escuela de Posgrado UNA Puno"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-900 bg-indigo-50 px-2.5 py-0.5 sm:py-1 rounded-md border border-indigo-200">
                Escuela de Posgrado • EPG UNA Puno
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
                Posgrado UNA Puno
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                Segunda Especialidad, Maestría y Doctorado (Tesis o Artículo)
              </p>
            </div>
          </div>

          {/* Program Tabs - 3 columnas en móviles y en desktop para navegación inmediata */}
          <div className="w-full sm:w-auto grid grid-cols-3 gap-1 sm:gap-1.5 bg-slate-200/70 p-1 sm:p-1.5 rounded-2xl border border-slate-300/50">
            {programasPosgrado.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`posgrado-tab-btn ${
                    isActive ? 'posgrado-tab-active' : 'posgrado-tab-inactive'
                  }`}
                >
                  <i className={`bi ${item.icon} text-xs sm:text-base shrink-0`}></i>
                  <span className="text-[11px] sm:text-xs font-bold leading-tight text-center">
                    {item.id === 'especialidad' ? (
                      <>
                        <span className="hidden sm:inline">Segunda </span>Especialidad
                      </>
                    ) : (
                      item.title
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Card */}
        <div className="posgrado-card mt-6 sm:mt-8 p-4 sm:p-8">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
            
            {/* Left: Summary and Tags */}
            <div className="md:col-span-5 space-y-4">
              <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${current.badgeClass}`}>
                <i className={`bi ${current.icon}`}></i>
                {current.badge}
              </span>

              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                {current.summary}
              </h3>

              {/* Tags / Pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {current.pills.map((pill, idx) => (
                  <span key={idx} className="posgrado-pill">
                    <i className="bi bi-award text-indigo-600 text-[10px]"></i>
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Key Highlights */}
            <div className="md:col-span-7 bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <i className="bi bi-check2-circle text-indigo-700"></i>
                <span>Puntos clave del acompañamiento</span>
              </h4>
              <ul className="space-y-3">
                {current.highlights.map((point, idx) => (
                  <li key={idx} className="posgrado-item-check">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-900 flex items-center justify-center text-xs mt-0.5 shrink-0 font-bold border border-indigo-200">
                      <i className="bi bi-check"></i>
                    </span>
                    <span className="text-slate-700 text-xs sm:text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Banner: Titulación / Graduación por Artículo Científico en Posgrado */}
          <div className="posgrado-article-banner mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4">
            <div className="flex items-center gap-2 text-indigo-900 font-bold text-xs sm:text-sm shrink-0">
              <i className="bi bi-journal-richtext text-indigo-700 text-lg"></i>
              <span>Titulación por Artículo:</span>
            </div>
            <div className="text-xs sm:text-sm text-indigo-950 leading-relaxed">
              En la EPG UNA Puno puedes optar al grado mediante la publicación de artículos científicos en revistas indexadas (Scopus / Web of Science). Te asesoramos en redacción y arbitraje editorial.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
