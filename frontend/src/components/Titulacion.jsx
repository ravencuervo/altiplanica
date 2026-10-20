import React, { useState } from 'react';
import './AcademicLevels.css';

const titulacionData = [
  {
    id: 'pregrado',
    title: 'Pregrado y Título Profesional',
    badge: 'Título Universitario',
    icon: 'bi-mortarboard',
    badgeColor: 'bg-blue-800 text-white',
    description: 'Orientado a egresados y bachilleres que buscan titularse con una investigación rigurosa, metodológicamente sólida y conforme a la guía de titulación de su facultad.',
    features: [
      'Elección y delimitación de tema viable con respaldo bibliográfico',
      'Elaboración y aprobación del Perfil o Plan de Tesis de titulación',
      'Diseño metodológico (descriptivo, correlacional, cuasiexperimental)',
      'Aplicación y validación de instrumentos (Alfa de Cronbach, V de Aiken)',
      'Procesamiento estadístico de datos en SPSS, Jamovi o Excel avanzado',
      'Informe de originalidad Turnitin con porcentaje menor al límite institucional',
      'Diapositivas y simulacro personalizado de sustentación ante jurados'
    ],
    audience: 'Ingenierías, Ciencias de la Salud, Derecho, Administración, Contabilidad, Educación y Humanidades.'
  },
  {
    id: 'especialidad',
    title: 'Segunda Especialidad Profesional',
    badge: 'Especialización Práctica',
    icon: 'bi-hospital',
    badgeColor: 'bg-teal-700 text-white',
    description: 'Dirigido a profesionales en ejercicio (médicos residentes, enfermeros especialistas, juristas, docentes) que requieren proyectos de investigación clínica, aplicada o de gestión.',
    features: [
      'Informes de experiencia profesional o proyectos de mejora continua',
      'Estudios clínicos y epidemiológicos con estricto rigor bioestadístico',
      'Alineamiento riguroso a las normas de su colegio profesional o institución',
      'Formato bajo normas Vancouver o APA según la disciplina',
      'Subsanación y levantamiento veloz de observaciones de comités de ética',
      'Flexibilidad y reuniones adaptadas a tus turnos y horarios laborales'
    ],
    audience: 'Especialidades Médicas, Quirúrgicas, Enfermería, Salud Pública, Derecho Procesal y Docencia Superior.'
  }
];

export default function Titulacion() {
  const [activeTab, setActiveTab] = useState('pregrado');
  const current = titulacionData.find((t) => t.id === activeTab) || titulacionData[0];

  return (
    <section id="titulacion" className="titulacion-section py-20 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Graduación y Colegiatura
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Titulación Profesional
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Acompañamiento integral para estudiantes y profesionales en la obtención de su Título Profesional y Segunda Especialidad.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {titulacionData.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`level-tab-btn flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm ${
                  isActive ? 'level-tab-active shadow-sm' : 'level-tab-inactive'
                }`}
              >
                <i className={`bi ${item.icon} text-lg`}></i>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Content Box */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200">
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
                  Carreras y Áreas:
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-800 bg-white p-3 rounded-xl border border-slate-200">
                  <i className="bi bi-mortarboard-fill text-blue-700 mr-1.5"></i>
                  {current.audience}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/51999999999?text=Hola%20TesisAltipl%C3%A1nica,%20solicito%20asesor%C3%ADa%20para%20${encodeURIComponent(current.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-700 text-white font-semibold text-sm hover:bg-blue-800 transition-colors shadow-sm"
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
                ¿Qué incluye nuestro acompañamiento para titulación?
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3.5">
                {current.features.map((feature, idx) => (
                  <li key={idx} className="level-feature-item flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-xs mt-0.5 font-bold">
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
