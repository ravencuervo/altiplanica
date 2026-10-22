import React from 'react';
import './ToolsSection.css';

// 5 Secciones ordenadas jerárquicamente:
// 1. Áreas Académicas UNA Puno (primero el contexto y pertenencia del estudiante)
// 2. Software Estadístico & Especializado (procesamiento cuantitativo de datos)
// 3. Integrativo con Inteligencia Artificial (IA) (razonamiento, síntesis y parafraseo)
// 4. Bibliografía, Referencias y Motores de Búsqueda (estado del arte y citas)
// 5. Software de Redacción y Formato de Texto (redacción final y maquetación)
const sectionsData = [
  {
    id: 'ciencias-unap',
    title: 'Áreas Académicas y Softwares Especializados (UNA Puno)',
    subtitle: 'Cobertura especializada y softwares aplicados a las 4 áreas formativas de la universidad.',
    direction: 'left', // Izquierda
    badge: '1. Áreas UNA Puno',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    tools: [
      {
        name: 'Ciencias de las Ingenierías',
        tag: 'UNA Puno • Especialidades',
        image: '/images/tools/ingenierias.png',
        fallbackIcon: 'bi-gear-wide-connected',
        accentBg: 'bg-indigo-50 text-indigo-600',
      },
      {
        name: 'Ciencias Biomédicas',
        tag: 'UNA Puno • Especialidades',
        image: '/images/tools/biomedicas.png',
        fallbackIcon: 'bi-heart-pulse-fill',
        accentBg: 'bg-indigo-50 text-indigo-600',
      },
      {
        name: 'Ciencias Sociales',
        tag: 'UNA Puno • Especialidades',
        image: '/images/tools/sociales.png',
        fallbackIcon: 'bi-people-fill',
        accentBg: 'bg-indigo-50 text-indigo-600',
      },
      {
        name: 'Ciencias Empresariales',
        tag: 'UNA Puno • Especialidades',
        image: '/images/tools/empresariales.png',
        fallbackIcon: 'bi-briefcase-fill',
        accentBg: 'bg-indigo-50 text-indigo-600',
      },
    ]
  },
  {
    id: 'estadistica',
    title: 'Software Estadístico & Especializado',
    subtitle: 'Herramientas de análisis cuantitativo, modelado econométrico y cálculo computacional.',
    direction: 'right', // Derecha
    badge: '2. Análisis Cuantitativo',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    tools: [
      {
        name: 'IBM SPSS Statistics',
        tag: 'Estadística',
        image: '/images/tools/spss.png',
        fallbackIcon: 'bi-bar-chart-line-fill',
        accentBg: 'bg-blue-50 text-blue-600',
      },
      {
        name: 'R & RStudio',
        tag: 'Bioestadística & Data',
        image: '/images/tools/rstudio.png',
        fallbackIcon: 'bi-code-slash',
        accentBg: 'bg-blue-50 text-blue-600',
      },
      {
        name: 'Python',
        tag: 'Data Science',
        image: '/images/tools/python.png',
        fallbackIcon: 'bi-terminal-fill',
        accentBg: 'bg-blue-50 text-blue-600',
      },
      {
        name: 'EViews',
        tag: 'Econometría',
        image: '/images/tools/eviews.png',
        fallbackIcon: 'bi-graph-up-arrow',
        accentBg: 'bg-blue-50 text-blue-600',
      },
      {
        name: 'Minitab',
        tag: 'Ingeniería & Calidad',
        image: '/images/tools/minitab.png',
        fallbackIcon: 'bi-sliders2',
        accentBg: 'bg-blue-50 text-blue-600',
      },
      {
        name: 'MATLAB',
        tag: 'Modelamiento Numérico',
        image: '/images/tools/matlab.png',
        fallbackIcon: 'bi-cpu-fill',
        accentBg: 'bg-blue-50 text-blue-600',
      },
      {
        name: 'Stata',
        tag: 'Econometría & Salud',
        image: '/images/tools/stata.png',
        fallbackIcon: 'bi-calculator-fill',
        accentBg: 'bg-blue-50 text-blue-600',
      },
    ]
  },
  {
    id: 'ia',
    title: 'Integrativo con Inteligencia Artificial (IA)',
    subtitle: 'Modelos de vanguardia aplicados al razonamiento metodológico, síntesis analítica y parafraseo académico.',
    direction: 'left', // Izquierda
    badge: '3. Inteligencia Artificial',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    tools: [
      {
        name: 'GPT Plus',
        tag: 'GPT-5.5 / GPT-5.6 Sol',
        image: '/images/tools/gpt.png',
        fallbackIcon: 'bi-robot',
        accentBg: 'bg-emerald-50 text-emerald-600',
      },
      {
        name: 'Claude Pro',
        tag: 'Claude Sonnet 5 / Opus 4.8',
        image: '/images/tools/claude.png',
        fallbackIcon: 'bi-stars',
        accentBg: 'bg-emerald-50 text-emerald-600',
      },
      {
        name: 'Gemini Pro',
        tag: 'Gemini Argon',
        image: '/images/tools/gemini.png',
        fallbackIcon: 'bi-lightning-charge-fill',
        accentBg: 'bg-emerald-50 text-emerald-600',
      },
      {
        name: 'QuillBot Premium',
        tag: 'Parafraseo y Estilo',
        image: '/images/tools/quillbot.png',
        fallbackIcon: 'bi-feather',
        accentBg: 'bg-emerald-50 text-emerald-600',
      },
    ]
  },
  {
    id: 'bibliografia',
    title: 'Bibliografía, Referencias y Motores de Búsqueda',
    subtitle: 'Gestores de citas automatizados, bases de datos indexadas y plataformas de recuperación científica.',
    direction: 'right', // Derecha
    badge: '4. Fuentes & Búsqueda',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    tools: [
      {
        name: 'Mendeley',
        tag: 'Gestor Bibliográfico',
        image: '/images/tools/mendeley.png',
        fallbackIcon: 'bi-journals',
        accentBg: 'bg-amber-50 text-amber-600',
      },
      {
        name: 'Zotero',
        tag: 'Gestor de Citas',
        image: '/images/tools/zotero.png',
        fallbackIcon: 'bi-bookmark-check-fill',
        accentBg: 'bg-amber-50 text-amber-600',
      },
      {
        name: 'Scopus',
        tag: 'Indexación Global',
        image: '/images/tools/scopus.png',
        fallbackIcon: 'bi-globe2',
        accentBg: 'bg-amber-50 text-amber-600',
      },
      {
        name: 'Web of Science (WoS)',
        tag: 'Bases de Alto Impacto',
        image: '/images/tools/wos.png',
        fallbackIcon: 'bi-trophy-fill',
        accentBg: 'bg-amber-50 text-amber-600',
      },
      {
        name: 'Latindex',
        tag: 'Bases Regionales',
        image: '/images/tools/latindex.png',
        fallbackIcon: 'bi-journals',
        accentBg: 'bg-amber-50 text-amber-600',
      },
      {
        name: 'Repositorios Universitarios',
        tag: 'Tesis Validadas',
        image: '/images/tools/repositorio.png',
        fallbackIcon: 'bi-building',
        accentBg: 'bg-amber-50 text-amber-600',
      },
      {
        name: 'ScienceDirect',
        tag: 'Búsqueda Científica',
        image: '/images/tools/sciencedirect.png',
        fallbackIcon: 'bi-search',
        accentBg: 'bg-amber-50 text-amber-600',
      },
      {
        name: 'Boriumh',
        tag: 'Motor Especializado',
        image: '/images/tools/boriumh.png',
        fallbackIcon: 'bi-compass-fill',
        accentBg: 'bg-amber-50 text-amber-600',
      },
    ]
  },
  {
    id: 'texto',
    title: 'Software de Redacción y Formato de Texto',
    subtitle: 'Maquetación institucional y tipografía científica según normas editoriales de la UNA Puno.',
    direction: 'left', // Izquierda
    badge: '5. Edición & Formato',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    tools: [
      {
        name: 'Microsoft Word Office',
        tag: 'Directivas UNA Puno',
        image: '/images/tools/word.png',
        fallbackIcon: 'bi-file-earmark-word-fill',
        accentBg: 'bg-cyan-50 text-cyan-600',
      },
      {
        name: 'LaTeX',
        tag: 'Tipografía Científica TeX',
        image: '/images/tools/latex.png',
        fallbackIcon: 'bi-file-earmark-code-fill',
        accentBg: 'bg-cyan-50 text-cyan-600',
      },
    ]
  }
];

// Helper para multiplicar los elementos y asegurar bucle infinito suave sin saltos
function getRepeatedTools(tools) {
  if (tools.length <= 2) {
    return [...tools, ...tools, ...tools, ...tools, ...tools, ...tools, ...tools, ...tools];
  }
  if (tools.length <= 4) {
    return [...tools, ...tools, ...tools, ...tools, ...tools];
  }
  return [...tools, ...tools, ...tools];
}

export default function ToolsSection() {
  return (
    <section id="herramientas" className="tools-section py-16 sm:py-20 overflow-hidden">
      
      {/* Encabezado General Centrado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 mb-3.5">
          <i className="bi bi-shield-check text-blue-600 text-xs"></i>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
            Dominio Técnico & Herramientas Especializadas
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Software Especializado, IA y Fuentes Científicas
        </h3>

        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Ecosistema visual estructurado por áreas académicas, análisis de datos y estándares exigidos por la UNA Puno.
        </p>
      </div>

      {/* Secciones Individuales con borde de extremo a extremo de la ventana */}
      <div className="w-full">
        {sectionsData.map((section) => {
          const repeatedItems = getRepeatedTools(section.tools);
          const isDirectionLeft = section.direction === 'left';

          return (
            <div key={section.id} className="tools-fullwidth-section w-full border-t border-slate-200/80 py-7 sm:py-9">
              
              {/* Encabezado Específico de cada Sección con su Subtítulo */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${section.badgeColor}`}>
                    {section.badge}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {section.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-500">
                  {section.subtitle}
                </p>
              </div>

              {/* Riel Continuo sin bordes en los items de software */}
              <div className="marquee-wrapper w-full">
                <div className="marquee-track-container">
                  <div 
                    className={`marquee-track ${
                      isDirectionLeft ? 'animate-marquee-left' : 'animate-marquee-right'
                    }`}
                  >
                    {repeatedItems.map((tool, tIdx) => (
                      <div key={tIdx} className="tool-logo-card">
                        {/* Contenedor de Imagen Flotante Sin Bordes Cuadriculados */}
                        <div className={`tool-logo-box ${tool.accentBg}`}>
                          {tool.image && (
                            <img 
                              src={tool.image} 
                              alt={tool.name} 
                              className="tool-logo-img"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.nextElementSibling) {
                                  e.currentTarget.nextElementSibling.style.display = 'flex';
                                }
                              }}
                            />
                          )}
                          <div 
                            className="tool-logo-fallback"
                            style={{ display: tool.image ? 'none' : 'flex' }}
                          >
                            <i className={`bi ${tool.fallbackIcon} text-2xl sm:text-3xl`}></i>
                          </div>
                        </div>

                        {/* Título y Etiqueta del Software */}
                        <div className="tool-info text-center min-w-0 w-full px-1">
                          <h5 className="text-xs sm:text-sm font-bold text-slate-900 truncate" title={tool.name}>
                            {tool.name}
                          </h5>
                          {tool.tag && (
                            <span className="text-[10px] font-medium text-slate-500 truncate block mt-0.5">
                              {tool.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
        {/* Borde inferior final para cerrar la última sección a todo el ancho */}
        <div className="w-full border-t border-slate-200/80"></div>
      </div>

    </section>
  );
}
