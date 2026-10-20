import React from 'react';
import './Services.css';

const services = [
  {
    icon: 'bi-bar-chart-fill',
    title: 'Análisis Estadístico Avanzado',
    tag: 'Especialidad Principal',
    tagColor: 'bg-blue-100 text-blue-800',
    description: 'Procesamiento de datos con rigor científico. Tablas, gráficos en alta resolución e interpretación detallada de resultados.',
    items: [
      'Contrastación de hipótesis paramétricas y no paramétricas (t-Student, ANOVA, Chi-cuadrado, Mann-Whitney)',
      'Pruebas de normalidad (Kolmogorov-Smirnov, Shapiro-Wilk) y confiabilidad (Alfa de Cronbach, Omega de McDonald)',
      'Modelos de regresión lineal, logística, multivariado y ecuaciones estructurales (SmartPLS)',
      'Manejo de software: SPSS, RStudio, Jamovi, Stata y Python estadístico'
    ],
    highlight: 'Incluye explicación personalizada en video o sesión para tu defensa ante el jurado.'
  },
  {
    icon: 'bi-journal-bookmark-fill',
    title: 'Perfil y Proyecto de Tesis',
    tag: 'Fase Inicial Crítica',
    tagColor: 'bg-emerald-100 text-emerald-800',
    description: 'Estructuración sólida de tu plan de investigación para lograr una aprobación rápida sin rechazos de los comités.',
    items: [
      'Planteamiento, formulación y justificación teórica y práctica del problema',
      'Matriz de consistencia metodológica perfectamente articulada',
      'Estado del arte y antecedentes nacionales e internacionales actualizados (últimos 5 años)',
      'Operacionalización exhaustiva de variables e indicadores medibles'
    ],
    highlight: 'Garantía de aprobación en comisiones de investigación y ética universitaria.'
  },
  {
    icon: 'bi-file-earmark-diff-fill',
    title: 'Artículos Científicos (Scopus / WoS)',
    tag: 'Publicación Indexada',
    tagColor: 'bg-purple-100 text-purple-800',
    description: 'Transformación de tu tesis o investigación en manuscritos de alto impacto científico listos para someter a revisión por pares.',
    items: [
      'Estructura IMRyD (Introducción, Métodos, Resultados y Discusión)',
      'Adaptación estricta a directrices para autores (Author Guidelines) de revistas indexadas',
      'Selección estratégica de revistas en Scopus (Q1, Q2, Q3, Q4), Web of Science, SciELO y Latindex',
      'Respuesta y subsanación de cartas de observaciones de revisores pares'
    ],
    highlight: 'Orientación para cumplimiento de requisitos de graduación y categorización RENACYT.'
  },
  {
    icon: 'bi-file-text-fill',
    title: 'Formateo y Normas Editoriales',
    tag: 'Estilo y Citas',
    tagColor: 'bg-amber-100 text-amber-800',
    description: 'Edición profesional de formato, citas bibliográficas y diagramación conforme al manual institucional de tu universidad.',
    items: [
      'Normas APA (7ma edición), Vancouver (Ciencias Médicas), IEEE (Ingeniería), ISO 690 y Chicago',
      'Gestión automatizada de referencias bibliográficas con Mendeley, Zotero o EndNote',
      'Formateo integral de índices automáticos de tablas, figuras, ecuaciones y anexos',
      'Informe preliminar y final de similitud Turnitin sin depósito'
    ],
    highlight: 'Reducción de porcentaje de similitud textual con estricta ética académica.'
  },
  {
    icon: 'bi-pencil-square',
    title: 'Desarrollo Integral de Tesis',
    tag: 'Acompañamiento 360°',
    tagColor: 'bg-indigo-100 text-indigo-800',
    description: 'Guía paso a paso desde el primer capítulo hasta las conclusiones y recomendaciones finales del informe final.',
    items: [
      'Redacción del marco teórico y conceptual con literatura de alto impacto',
      'Diseño metodológico: tipo, nivel, diseño, población, muestra y técnicas de recolección',
      'Construcción y discusión de resultados contrastados con los antecedentes',
      'Redacción de conclusiones contundentes y recomendaciones aplicables'
    ],
    highlight: 'Entregas por capítulos progresivos para que revises y valides en cada fase.'
  },
  {
    icon: 'bi-easel2-fill',
    title: 'Sustentación y Balotario de Preguntas',
    tag: 'Defensa Exitosa',
    tagColor: 'bg-rose-100 text-rose-800',
    description: 'Entrenamiento intensivo y simulacro para defender tu investigación con confianza y seguridad total ante el tribunal.',
    items: [
      'Diseño de diapositivas ejecutivas de alto impacto visual y síntesis metodológica',
      'Balotario con las más de 50 preguntas más frecuentes de jurados y sus respuestas modelo',
      'Simulacro de sustentación por videollamada con retroalimentación en tiempo real',
      'Técnicas de oratoria científica y manejo del tiempo en la exposición'
    ],
    highlight: 'Llega al día de tu sustentación con el dominio total de cada página de tu tesis.'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="services-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
            Portafolio de Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Soluciones Integrales para tu Graduación
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            No importa en qué etapa te encuentres: podemos ayudarte desde cero, destrabar un capítulo detenido o perfeccionar tu trabajo final.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="service-card rounded-3xl p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="service-icon-box w-13 h-13 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl shadow-sm">
                    <i className={`bi ${srv.icon}`}></i>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${srv.tagColor}`}>
                    {srv.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-indigo-600 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                  {srv.description}
                </p>

                {/* Items list */}
                <ul className="space-y-2.5 mb-6">
                  {srv.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                      <i className="bi bi-check-circle-fill text-emerald-500 mt-0.5 text-xs flex-shrink-0"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom highlight pill */}
              <div className="pt-4 border-t border-slate-100">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 text-xs text-slate-600">
                  <i className="bi bi-stars text-amber-500 text-sm flex-shrink-0 mt-0.5"></i>
                  <span>{srv.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="services-cta-banner mt-14 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">¿Tienes observaciones de tu asesor o jurado?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Realizamos auditoría metodológica urgente y levantamiento minucioso de observaciones en tiempo récord.
            </p>
          </div>
          <a
            href="https://wa.me/51999999999?text=Hola,%20tengo%20observaciones%20de%20mi%20jurado%20y%20necesito%20ayuda%20para%20subsanarlas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-bold text-sm text-white shadow-lg transition-all"
          >
            <i className="bi bi-whatsapp text-lg"></i>
            <span>Revisar Observaciones Gratis</span>
          </a>
        </div>

      </div>
    </section>
  );
}
