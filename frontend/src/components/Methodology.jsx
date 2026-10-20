import React from 'react';
import './Methodology.css';

const steps = [
  {
    step: '01',
    title: 'Diagnóstico & Auditoría Inicial',
    icon: 'bi-search',
    description: 'Analizamos el estado actual de tu investigación, el reglamento de grados de tu universidad y las exigencias de tu carrera. Te decimos con exactitud qué falta y cómo abordarlo sin perder tiempo.',
    pill: 'Sin Costo',
    pillColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    step: '02',
    title: 'Cronograma por Entregables',
    icon: 'bi-calendar-check',
    description: 'Definimos un plan de trabajo claro con fechas exactas de entrega por capítulos. Puedes pagar en cuotas flexibles a medida que revisas y apruebas cada avance de tu proyecto.',
    pill: 'Transparencia',
    pillColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    step: '03',
    title: 'Asesorías 1 a 1 y Redacción',
    icon: 'bi-person-video2',
    description: 'Sesiones personalizadas por Google Meet o Zoom. Te explicamos los análisis estadísticos, la fundamentación de las hipótesis y cada decisión metodológica para que domines tu tema.',
    pill: 'Didáctico',
    pillColor: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  {
    step: '04',
    title: 'Turnitin & Simulacro de Jurado',
    icon: 'bi-trophy',
    description: 'Pasamos tu trabajo por Turnitin con reporte oficial de similitud (0% plagio). Diseñamos tus diapositivas y realizamos un simulacro intensivo de sustentación con preguntas reales de jurados.',
    pill: 'Garantía Total',
    pillColor: 'bg-purple-50 text-purple-700 border-purple-200'
  }
];

export default function Methodology() {
  return (
    <section id="metodologia" className="methodology-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
            Nuestra Metodología
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            ¿Cómo Trabajamos Contigo Hacia tu Titulación?
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Un proceso estructurado, transparente y con acompañamiento continuo para que nunca te sientas solo frente a tu tesis.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="methodology-card rounded-3xl p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-slate-300 group-hover:text-indigo-600 transition-colors">
                    {item.step}
                  </span>
                  <div className="methodology-icon-box w-12 h-12 rounded-2xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center text-xl shadow-sm">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full border ${item.pillColor}`}>
                  {item.pill}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="methodology-nda-banner mt-14 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-indigo-600/30">
              <i className="bi bi-shield-check"></i>
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Acuerdo de Confidencialidad y Propiedad Intelectual</h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Tu proyecto, ideas y datos te pertenecen al 100%. Firmamos acuerdo de no divulgación (NDA) para tu absoluta tranquilidad.
              </p>
            </div>
          </div>
          <a
            href="#contacto"
            className="flex-shrink-0 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all"
          >
            Agendar Sesión Inicial
          </a>
        </div>

      </div>
    </section>
  );
}
