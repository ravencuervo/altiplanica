import React, { useState, useEffect } from 'react';
import './AcademicLevels.css';

const levelsData = [
  {
    id: 'pregrado',
    title: 'Pregrado y Título Profesional',
    badge: 'Grado y Título',
    icon: 'bi-mortarboard',
    badgeColor: 'bg-blue-800 text-white',
    description: 'Orientado a estudiantes de últimos ciclos y bachilleres que buscan titularse con una investigación sólida y conforme al reglamento de su universidad.',
    features: [
      'Elección y delimitación del tema de investigación viable',
      'Elaboración y aprobación del Perfil o Plan de Tesis',
      'Diseño metodológico (descriptivo, correlacional, explicativo)',
      'Aplicación y validación de instrumentos (Alfa de Cronbach, V de Aiken)',
      'Procesamiento estadístico de datos en SPSS o Excel avanzado',
      'Revisión de turnitin con porcentaje menor al límite universitario',
      'Diapositivas y simulacro de sustentación ante jurados'
    ],
    audience: 'Ingenierías, Ciencias de la Salud, Derecho, Administración, Educación, Humanidades.'
  },
  {
    id: 'especialidad',
    title: 'Segunda Especialidad',
    badge: 'Especialización Práctica',
    icon: 'bi-hospital',
    badgeColor: 'bg-teal-700 text-white',
    description: 'Dirigido a profesionales en ejercicio (Médicos, Enfermeros, Odontólogos, Juristas, Docentes) que requieren trabajos de investigación clínica, aplicada o de gestión.',
    features: [
      'Informes de experiencia profesional o proyectos de mejora continua',
      'Estudios clínicos y epidemiológicos con rigor bioestadístico',
      'Alineamiento estricto a las normas de su colegio o institución',
      'Formato bajo normas Vancouver o APA según la especialidad',
      'Levantamiento veloz de observaciones de comités de ética',
      'Flexibilidad horaria adaptada a tus turnos de trabajo'
    ],
    audience: 'Especialidades Médicas, Quirúrgicas, Enfermería, Salud Pública, Derecho Procesal, Docencia Superior.'
  },
  {
    id: 'maestria',
    title: 'Maestría (Posgrado)',
    badge: 'Alto Nivel Investigativo',
    icon: 'bi-award',
    badgeColor: 'bg-indigo-700 text-white',
    description: 'Para profesionales que buscan el grado de Magíster con un aporte teórico, analítico o aplicativo de alto impacto para la toma de decisiones.',
    features: [
      'Matriz de consistencia exhaustiva y estado del arte internacional',
      'Modelos explicativos, causales y multivariados (Regresión múltiple, Modelado)',
      'Software especializado: SPSS, Jamovi, RStudio, Stata',
      'Contrastación de hipótesis paramétricas y no paramétricas',
      'Discusión profunda contrastada con literatura indexada reciente',
      'Preparación de manuscrito para publicación si la maestría lo exige'
    ],
    audience: 'Maestrías en Administración (MBA), Gestión Pública, Ciencias de la Salud, Educación, Tecnologías.'
  },
  {
    id: 'doctorado',
    title: 'Doctorado (PhD)',
    badge: 'Rigor Epistemológico Máximo',
    icon: 'bi-gem',
    badgeColor: 'bg-purple-800 text-white',
    description: 'Acompañamiento especializado en tesis doctorales donde se exige originalidad epistémica, generación de nuevo conocimiento y modelos predictivos o estructurales.',
    features: [
      'Fundamentación epistemológica, ontológica y metodológica rigurosa',
      'Ecuaciones estructurales (PLS-SEM con SmartPLS o AMOS)',
      'Investigación mixta o cualitativa con Atlas.ti (teoría fundamentada)',
      'Redacción y adaptación a artículos de impacto (Scopus Q1/Q2/Q3/Q4)',
      'Defensa ante jurados doctorales con argumentos científicos blindados',
      'Asesoría directa con doctores e investigadores RENACYT / Concytec'
    ],
    audience: 'Doctorandos en Educación, Ciencias de la Salud, Administración, Derecho, Medio Ambiente, Ingeniería.'
  }
];

export default function AcademicLevels() {
  const [activeTab, setActiveTab] = useState('pregrado');
  const current = levelsData.find((l) => l.id === activeTab) || levelsData[0];

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#titulacion') {
        setActiveTab('pregrado');
      } else if (hash === '#grados') {
        setActiveTab('maestria');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section id="grados" className="academic-section py-20 relative scroll-mt-20">
      {/* Anchor identifiers for seamless navigation */}
      <span id="titulacion" className="absolute -top-24 pointer-events-none" />
      <span id="niveles" className="absolute -top-24 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
            Adaptado a tu Grado Académico
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Asesoría Personalizada para Todos los Niveles
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Cada grado académico tiene exigencias metodológicas y evaluadores distintos. Diseñamos una estrategia a la medida de tu universidad y reglamento.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {levelsData.map((level) => {
            const isActive = activeTab === level.id;
            return (
              <button
                key={level.id}
                onClick={() => setActiveTab(level.id)}
                className={`level-tab-btn flex items-center gap-2 px-5 py-3 rounded-2xl font-semibold text-sm ${
                  isActive ? 'level-tab-active' : 'level-tab-inactive'
                }`}
              >
                <i className={`bi ${level.icon} text-lg`}></i>
                <span>{level.title.split(' ')[0]} {level.id === 'especialidad' ? 'Especialidad' : ''}</span>
              </button>
            );
          })}
        </div>

        {/* Active Content Box */}
        <div className="level-card-box rounded-3xl p-6 sm:p-10">
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
                  Áreas habituales de trabajo:
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-800 bg-white p-3 rounded-xl border border-slate-200">
                  <i className="bi bi-mortarboard-fill text-blue-700 mr-1.5"></i>
                  {current.audience}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/51999999999?text=Hola,%20solicito%20asesor%C3%ADa%20para%20${encodeURIComponent(current.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
                >
                  <i className="bi bi-whatsapp"></i>
                  <span>Consultar sobre {current.title.split(' ')[0]}</span>
                </a>
              </div>
            </div>

            {/* Right Features Checklist */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <i className="bi bi-check2-all text-blue-700 text-xl"></i>
                ¿Qué incluye nuestro acompañamiento en este nivel?
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3.5">
                {current.features.map((feature, idx) => (
                  <li key={idx} className="level-feature-item flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs mt-0.5 font-bold">
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
