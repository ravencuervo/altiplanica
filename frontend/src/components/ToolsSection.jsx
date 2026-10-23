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
        image: '/images/logos_software/7.svg',
        fallbackIcon: 'bi-bar-chart-line-fill',
        accentBg: '',
      },
      {
        name: 'R & RStudio',
        tag: 'Bioestadística & Data',
        image: '/images/logos_software/6.svg',
        fallbackIcon: 'bi-code-slash',
        accentBg: '',
      },
      {
        name: 'Python',
        tag: 'Data Science',
        image: '/images/logos_software/5.svg',
        fallbackIcon: 'bi-terminal-fill',
        accentBg: '',
      },
      {
        name: 'EViews',
        tag: 'Econometría',
        image: '/images/logos_software/4.svg',
        fallbackIcon: 'bi-graph-up-arrow',
        accentBg: '',
      },
      {
        name: 'Minitab',
        tag: 'Ingeniería & Calidad',
        image: '/images/logos_software/3.svg',
        fallbackIcon: 'bi-sliders2',
        accentBg: '',
      },
      {
        name: 'MATLAB',
        tag: 'Modelamiento Numérico',
        image: '/images/logos_software/2.svg',
        fallbackIcon: 'bi-cpu-fill',
        accentBg: '',
      },
      {
        name: 'Stata',
        tag: 'Econometría & Salud',
        image: '/images/logos_software/1.svg',
        fallbackIcon: 'bi-calculator-fill',
        accentBg: '',
      },
    ]
  },
  {
    id: 'ia',
    title: 'Integrativo con Inteligencia Artificial (IA)',
    subtitle: 'Modelos de vanguardia aplicados al razonamiento metodológico, síntesis analítica y parafraseo académico.',
    direction: 'left', // Izquierda
    badge: '3. Inteligencia Artificial',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    tools: [
      {
        name: 'GPT Plus',
        tag: 'GPT-5.5 / GPT-5.6 Sol',
        image: '/images/logos_software_ia/1.svg',
        fallbackIcon: 'bi-robot',
        accentBg: '',
      },
      {
        name: 'Claude Pro',
        tag: 'Claude Sonnet 5 / Opus 4.8',
        image: '/images/logos_software_ia/2.svg',
        fallbackIcon: 'bi-stars',
        accentBg: '',
      },
      {
        name: 'Gemini Pro',
        tag: 'Gemini Argon',
        image: '/images/logos_software_ia/3.svg',
        fallbackIcon: 'bi-lightning-charge-fill',
        accentBg: '',
      },
      {
        name: 'QuillBot Premium',
        tag: 'Parafraseo y Estilo',
        image: '/images/logos_software_ia/4.svg',
        fallbackIcon: 'bi-feather',
        accentBg: '',
      },
    ]
  },
  {
    id: 'bibliografia',
    title: 'Bibliografía, Referencias y Motores de Búsqueda',
    subtitle: 'Gestores de citas automatizados, bases de datos indexadas y plataformas de recuperación científica.',
    direction: 'right', // Derecha
    badge: '4. Fuentes & Búsqueda',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    tools: [
      {
        name: 'Mendeley',
        tag: 'Gestor Bibliográfico',
        image: '/images/logos_bibliografia/1.svg',
        fallbackIcon: 'bi-journals',
        accentBg: '',
      },
      {
        name: 'Zotero',
        tag: 'Gestor de Citas',
        image: '/images/logos_bibliografia/2.svg',
        fallbackIcon: 'bi-bookmark-check-fill',
        accentBg: '',
      },
      {
        name: 'Scopus',
        tag: 'Indexación Global',
        image: '/images/logos_bibliografia/3.svg',
        fallbackIcon: 'bi-globe2',
        accentBg: '',
      },
      {
        name: 'Web of Science (WoS)',
        tag: 'Bases de Alto Impacto',
        image: '/images/logos_bibliografia/4.svg',
        fallbackIcon: 'bi-trophy-fill',
        accentBg: '',
      },
      {
        name: 'Latindex',
        tag: 'Bases Regionales',
        image: '/images/logos_bibliografia/5.svg',
        fallbackIcon: 'bi-journals',
        accentBg: '',
      },
      {
        name: 'ScienceDirect',
        tag: 'Búsqueda Científica',
        image: '/images/logos_bibliografia/6.svg',
        fallbackIcon: 'bi-search',
        accentBg: '',
      },
      {
        name: 'Bohrium',
        tag: 'Motor Especializado',
        image: '/images/logos_bibliografia/7.svg',
        fallbackIcon: 'bi-compass-fill',
        accentBg: '',
      },
      {
        name: 'Repositorios Universitarios',
        tag: 'Tesis Validadas',
        image: null,
        fallbackIcon: 'bi-building-check',
        accentBg: 'bg-blue-50 text-blue-600',
      },
    ]
  },
  {
    id: 'texto',
    title: 'Software de Redacción y Formato de Texto',
    subtitle: 'Maquetación institucional y tipografía científica según normas editoriales de la UNA Puno.',
    direction: 'left', // Izquierda
    badge: '5. Edición & Formato',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    tools: [
      {
        name: 'Microsoft Word Office',
        tag: 'Directivas UNA Puno',
        image: '/images/logos_texto/2.svg',
        fallbackIcon: 'bi-file-earmark-word-fill',
        accentBg: '',
      },
      {
        name: 'LaTeX',
        tag: 'Tipografía Científica TeX',
        image: '/images/logos_texto/1.svg',
        fallbackIcon: 'bi-file-earmark-code-fill',
        accentBg: '',
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
    <section id="software" className="tools-section py-16 sm:py-20 overflow-hidden relative">
      <div id="herramientas" className="absolute -top-24 pointer-events-none"></div>
      
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
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Encabezado Específico de cada Sección con su Subtítulo */}
                <div className="mb-4 sm:mb-5">
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

                {/* Riel Continuo sin bordes en los items de software - Respetando el ancho del contenedor normal */}
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
            </div>
          );
        })}
        {/* Borde inferior final para cerrar la última sección a todo el ancho */}
        <div className="w-full border-t border-slate-200/80"></div>
      </div>

    </section>
  );
}
