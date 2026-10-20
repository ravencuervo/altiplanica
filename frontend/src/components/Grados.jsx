import React, { useState } from 'react';
import './AcademicLevels.css';

const gradosData = [
  {
    id: 'maestria',
    title: 'Maestría (Posgrado)',
    badge: 'Alto Nivel Investigativo',
    icon: 'bi-award',
    badgeColor: 'bg-indigo-700 text-white',
    description: 'Acompañamiento especializado para profesionales que buscan el grado académico de Magíster, con un aporte teórico, analítico o aplicativo de alto impacto según la exigencia de su escuela de posgrado.',
    features: [
      'Matriz de consistencia metodológica exhaustiva y estado del arte internacional',
      'Modelos explicativos, causales y multivariados (Regresión múltiple, Modelado)',
      'Software especializado: SPSS, Jamovi, RStudio, Stata y Python analítico',
      'Contrastación de hipótesis paramétricas y no paramétricas con rigor',
      'Discusión profunda contrastada con literatura científica indexada reciente',
      'Adaptación y preparación de manuscrito para publicación si el posgrado lo exige'
    ],
    audience: 'Maestrías en Administración (MBA), Gestión Pública, Ciencias de la Salud, Educación, Tecnologías e Ingeniería.'
  },
  {
    id: 'doctorado',
    title: 'Doctorado (PhD)',
    badge: 'Rigor Epistemológico Máximo',
    icon: 'bi-gem',
    badgeColor: 'bg-purple-800 text-white',
    description: 'Asesoría de élite en tesis doctorales donde se exige originalidad epistémica, generación de nuevo conocimiento científico y modelos predictivos o estructurales de alta complejidad.',
    features: [
      'Fundamentación epistemológica, ontológica y metodológica rigurosa',
      'Ecuaciones estructurales (PLS-SEM con SmartPLS o AMOS)',
      'Investigación mixta o cualitativa con Atlas.ti (teoría fundamentada)',
      'Redacción y adaptación a artículos de impacto (Scopus Q1/Q2/Q3/Q4 y Web of Science)',
      'Defensa ante jurados doctorales con argumentos científicos blindados',
      'Acompañamiento directo con doctores e investigadores calificados RENACYT / Concytec'
    ],
    audience: 'Doctorandos en Educación, Ciencias de la Salud, Administración, Derecho, Medio Ambiente, Ciencias e Ingeniería.'
  }
];

export default function Grados() {
  const [activeTab, setActiveTab] = useState('maestria');
  const current = gradosData.find((g) => g.id === activeTab) || gradosData[0];

  return (
    <section id="grados" className="grados-section py-20 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200">
            Posgrado de Alto Nivel
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Grados Académicos
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Investigación científica avanzada con rigor metodológico y bioestadístico para la obtención de los grados de Maestría y Doctorado.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {gradosData.map((grado) => {
            const isActive = activeTab === grado.id;
            return (
              <button
                key={grado.id}
                onClick={() => setActiveTab(grado.id)}
                className={`level-tab-btn flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm ${
                  isActive ? 'level-tab-active shadow-sm' : 'level-tab-inactive'
                }`}
              >
                <i className={`bi ${grado.icon} text-lg`}></i>
                <span>{grado.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Content Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-4">
              <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${current.badgeColor}`}>
                <i className={`bi ${current.icon}`}></i>
                {current.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                {current.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {current.description}
              </p>
              
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Especialidades habituales:
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <i className="bi bi-mortarboard-fill text-indigo-700 mr-1.5"></i>
                  {current.audience}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/51999999999?text=Hola%20TesisAltipl%C3%A1nica,%20solicito%20asesor%C3%ADa%20para%20el%20grado%20de%20${encodeURIComponent(current.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Consultar sobre {current.title.split(' ')[0]}</span>
                </a>
              </div>
            </div>

            {/* Right Features Checklist */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <i className="bi bi-check2-all text-indigo-700 text-xl"></i>
                ¿Qué incluye nuestro acompañamiento en {current.title.split(' ')[0]}?
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3.5">
                {current.features.map((feature, idx) => (
                  <li key={idx} className="level-feature-item flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-xs mt-0.5 font-bold">
                      <i className="bi bi-check"></i>
                    </span>
                    <span>{feature}</span>
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
