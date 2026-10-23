import React from 'react';
import './Methodology.css';

const stepsData = [
  {
    step: '01',
    badge: '100% Gratuito • Sin Costo',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
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
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
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
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
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
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
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
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
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
    <section id="metodologia" className="methodology-section pt-16 sm:pt-24 pb-20 relative scroll-mt-20">
      
      {/* Encabezado General Centrado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-3.5 shadow-2xs">
          <i className="bi bi-diagram-3-fill text-[#0052ff] text-xs"></i>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
            Nuestra Metodología de Acompañamiento
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Paso a Paso Hacia tu Aprobación
        </h2>

        <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Un proceso estructurado, transparente y dividido en 5 etapas secuenciales para garantizar el rigor científico de tu tesis.
        </p>
      </div>

      {/* Contenedor de Tarjetas Apilables al Scroll (Stacking Cards) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="methodology-cards-stack">
          {stepsData.map((item, index) => {
            return (
              <div 
                key={item.step} 
                className="methodology-card-wrapper"
                style={{
                  '--card-index': index,
                  '--total-cards': stepsData.length
                }}
              >
                <div className="methodology-card">
                  {/* Barra superior de acento degradado */}
                  <div className="methodology-card-topbar"></div>

                  <div className="grid lg:grid-cols-12 items-stretch min-h-[460px] lg:min-h-[490px]">

                    {/* Columna Izquierda: Información del Paso */}
                    <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-4">
                        
                        {/* Indicadores de Paso */}
                        <div className="flex items-center gap-3">
                          <span className="text-3xl sm:text-4xl font-black text-[#0052ff] font-mono tracking-tight">
                            {item.step}
                          </span>
                          <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeClass}`}>
                            {item.badge}
                          </span>
                          <span className="text-xs font-semibold text-slate-600 ml-auto hidden sm:inline-block">
                            Fase {item.step} de 05
                          </span>
                        </div>

                        {/* Título Principal */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                          {item.title}
                        </h3>

                        {/* Subtítulo / Tagline */}
                        <p className="text-[#0052ff] font-semibold text-sm sm:text-base leading-snug">
                          {item.tagline}
                        </p>

                        {/* Descripción clara */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {item.description}
                        </p>

                        {/* Puntos Clave con Check Azul */}
                        <div className="space-y-2.5 pt-2">
                          {item.points.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                              <i className="bi bi-check-circle-fill text-sm mt-0.5 shrink-0 text-[#0052ff]"></i>
                              <span className="leading-snug font-medium">{point}</span>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>

                    {/* Columna Derecha: Ilustración 3D con Tono Azul Oscurecido y Corte Diagonal */}
                    <div className="lg:col-span-5 relative overflow-hidden flex items-center justify-center">
                      <div className="methodology-card-img-container methodology-card-diagonal">
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          loading="lazy"
                          className="methodology-card-img"
                        />
                        {/* Capa de mezcla multiply para asentar tonos azules ricos */}
                        <div className="methodology-card-img-tint" aria-hidden="true"></div>
                      </div>
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
