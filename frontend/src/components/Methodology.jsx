import React from 'react';
import './Methodology.css';

const stepsData = [
  {
    step: '01',
    badge: '100% Free • Sin Costo',
    badgeClass: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    iconColor: 'text-emerald-600',
    title: 'Diagnóstico Inicial Gratuito',
    tagline: 'Evaluamos el estado de tu investigación sin costo alguno.',
    description: 'Envíanos tu tema, borrador, matriz de consistencia o base de datos. Un asesor metodológico revisa la situación de tu proyecto para identificar exactamente qué necesitas y cómo resolverlo.',
    points: [
      'Revisión de tema, variables y congruencia metodológica.',
      'Identificación de vacíos teóricos o errores de formulación.',
      'Orientación preliminar clara sin ningún compromiso.'
    ],
    image: '/images/methodology/1.svg',
    imageAlt: 'Paso 1: Diagnóstico Inicial Gratuito'
  },
  {
    step: '02',
    badge: 'Auditoría Metodológica',
    badgeClass: 'bg-blue-50 text-blue-800 border border-blue-200',
    iconColor: 'text-blue-600',
    title: 'Análisis y Entendimiento del Problema',
    tagline: 'Comprendemos a fondo las normativas y observaciones de tu facultad.',
    description: 'Auditamos las observaciones de tus jurados dictaminantes, la directiva de grados de tu universidad y el alcance técnico que se requiere para lograr una investigación viable y aprobada.',
    points: [
      'Análisis minucioso del dictamen u observaciones del jurado.',
      'Alineamiento con las líneas de investigación institucionales.',
      'Definición precisa del alcance metodológico y estadístico.'
    ],
    image: '/images/methodology/2.svg',
    imageAlt: 'Paso 2: Análisis y Entendimiento del Problema'
  },
  {
    step: '03',
    badge: 'Propuesta a la Medida',
    badgeClass: 'bg-purple-50 text-purple-800 border border-purple-200',
    iconColor: 'text-purple-600',
    title: 'Propuesta de Plan de Servicios a la Medida',
    tagline: 'Diseñamos una hoja de ruta con los servicios exactos que requieres.',
    description: 'Te presentamos una propuesta estructurada con los requerimientos puntuales de tu tesis (análisis estadístico, estructuración de artículo, perfil, etc.), sin paquetes inflados ni cobros innecesarios.',
    points: [
      'Selección de módulos específicos que tu proyecto necesita.',
      'Presupuesto transparente y cerrado sin sobrecostos sorpresa.',
      'Definición de objetivos claros para cada etapa del trabajo.'
    ],
    image: '/images/methodology/3.svg',
    imageAlt: 'Paso 3: Propuesta de Plan de Servicios a la Medida'
  },
  {
    step: '04',
    badge: 'Gestión por Sistema',
    badgeClass: 'bg-orange-50 text-orange-800 border border-orange-200',
    iconColor: 'text-orange-600',
    title: 'Cronograma de Entregables por Nuestro Sistema',
    tagline: 'Seguimiento transparente de fases y fechas de entrega en plataforma.',
    description: 'Programamos un calendario con fechas y fases de entrega por capítulos a través de nuestro sistema de consultoría. Podrás revisar, validar y dar feedback de cada avance con total control de tu tiempo.',
    points: [
      'Planificación de entregas por fases mediante el sistema.',
      'Seguimiento en tiempo real del progreso de tu investigación.',
      'Aprobación modular de cada avance antes de continuar.'
    ],
    image: '/images/methodology/4.svg',
    imageAlt: 'Paso 4: Cronograma de Entregables por Nuestro Sistema'
  },
  {
    step: '05',
    badge: '100% Remoto • Google Meet',
    badgeClass: 'bg-sky-50 text-sky-800 border border-sky-200',
    iconColor: 'text-sky-600',
    title: 'Asesorías en Vivo vía Google Meet',
    tagline: 'Acompañamiento 1 a 1 para que domines cada parte de tu tesis.',
    description: 'Realizamos sesiones remotas en vivo mediante Google Meet para explicarte paso a paso la interpretación de resultados, las pruebas estadísticas y cada decisión metodológica con total claridad y seguridad.',
    points: [
      'Sesiones personalizadas en vivo 1 a 1 desde tu hogar.',
      'Explicación didáctica de tablas, gráficos y pruebas de hipótesis.',
      'Resolución de dudas en tiempo real con grabaciones de respaldo.'
    ],
    image: '/images/methodology/5.svg',
    imageAlt: 'Paso 5: Asesorías en Vivo vía Google Meet'
  }
];

export default function Methodology() {
  return (
    <section id="metodologia" className="methodology-section py-16 sm:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Nuestra Metodología
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Paso a Paso Hacia tu Aprobación
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed">
            Un proceso estructurado, transparente y gestionado por nuestro sistema para que avances con total seguridad en cada fase.
          </p>
        </div>

        {/* Zigzag Alternating Steps */}
        <div className="methodology-steps-container">
          {stepsData.map((item, index) => {
            const isEven = index % 2 === 1; // 0-based: 1 (step 02) and 3 (step 04) are even

            return (
              <div key={item.step} className="methodology-row">

                {/* Text Column (alternating on md+ screens) */}
                <div className={`methodology-text-col ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl font-black text-slate-300">
                      {item.step}
                    </span>
                    <span className={`methodology-step-pill ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-blue-700 font-semibold text-sm sm:text-base leading-snug">
                    {item.tagline}
                  </p>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {item.points.map((point, pIdx) => (
                      <div key={pIdx} className="methodology-point">
                        <i className={`bi bi-check-circle-fill text-sm ${item.iconColor}`}></i>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Column (alternating on md+ screens) */}
                <div className={`methodology-img-col ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="methodology-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                    />
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
