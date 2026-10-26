import React, { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import './Services.css';

const servicesData = [
  {
    id: 'estadistica',
    num: '01',
    icon: 'bi-bar-chart-fill',
    title: 'Análisis Estadístico Avanzado',
    tag: 'SPSS / RStudio / Jamovi',
    badge: 'Máximo Rigor',
    badgeColor: 'bg-blue-100 text-blue-800 border border-blue-200',
    shortDesc: 'Procesamiento de datos, contrastación de hipótesis y tablas normalizadas en APA o Vancouver.',
    time: '48 a 72 horas',
    formats: ['.sav (SPSS)', '.RData', 'Tablas APA en Word'],
    proofTitle: 'Análisis Estadístico: Antes vs Después',
    proofSubtitle: 'De datos dispersos con errores de fórmula a procesamiento inferencial y tablas APA verificadas',
    beforeImage: '/images/services/3.svg',
    afterImage: '/images/services/4.svg',
    beforeLabel: 'ANTES: Excel con Errores',
    afterLabel: 'DESPUÉS: SPSS/R Verificado',
    beforeDesc: 'Base de datos desordenada, errores de cálculo #¡VALOR!, sin pruebas de normalidad ni p-valor para sustentar.',
    afterDesc: 'Modelos de regresión, tablas APA automáticas, R² = 0.884, hipótesis contrastada (p < 0.001) y explicación 1 a 1.',
  },
  {
    id: 'perfil',
    num: '02',
    icon: 'bi-journal-bookmark-fill',
    title: 'Perfil y Proyecto de Tesis',
    tag: 'Fase Inicial Crítica',
    badge: '100% Aprobación',
    badgeColor: 'bg-blue-100 text-blue-800 border border-blue-200',
    shortDesc: 'Estructuración metodológica, matriz de consistencia y antecedentes actualizados sin rechazos.',
    time: '3 a 5 días',
    formats: ['Matriz de Consistencia', 'Word Institucional', 'Operacionalización'],
    proofTitle: 'Perfil de Tesis: Antes vs Después',
    proofSubtitle: 'De un borrador observado por el comité a un plan de tesis aprobado con resolución oficial',
    beforeImage: '/images/services/5.svg',
    afterImage: '/images/services/6.svg',
    beforeLabel: 'ANTES: Proyecto Observado',
    afterLabel: 'DESPUÉS: Plan Aprobado 100%',
    beforeDesc: 'Tema ambiguo, objetivos desconectados de las variables y rechazo reiterado de la comisión evaluadora.',
    afterDesc: 'Matriz de consistencia perfectamente articulada, antecedentes Scopus/SciELO recientes y resolución de aprobación.',
  },
  {
    id: 'articulos',
    num: '03',
    icon: 'bi-file-earmark-diff-fill',
    title: 'Artículos Scopus, WoS y RIA (EPG)',
    tag: 'Publicación Indexada • Revistas EPG',
    badge: 'Indexación Q1 / Q4',
    badgeColor: 'bg-blue-100 text-blue-800 border border-blue-200',
    shortDesc: 'Conversión de tesis a manuscrito bajo estructura IMRyD para Scopus, Web of Science y Revista RIA para EPG.',
    time: 'Según revista',
    formats: ['Estructura IMRyD', 'Revista RIA (EPG UNA Puno)', 'Scopus / WoS Q1-Q4', 'Carta a Revisores'],
    proofTitle: 'Artículo Científico: Antes vs Después',
    proofSubtitle: 'De rechazo editorial sin revisión a carta formal de aceptación en revista indexada Scopus Q1/Q2 o RIA EPG',
    beforeImage: '/images/services/7.svg',
    afterImage: '/images/services/8.svg',
    beforeLabel: 'ANTES: Desk Reject (Rechazado)',
    afterLabel: 'DESPUÉS: Aceptado Scopus / RIA',
    beforeDesc: 'Devolución de manuscrito por falta de formato IMRyD, literatura desactualizada e incumplimiento de pautas editoriales.',
    afterDesc: 'Manuscrito ajustado a Author Guidelines, respuesta sólida a cartas de revisores y código DOI oficial emitido.',
  },
  {
    id: 'formato',
    num: '04',
    icon: 'bi-shield-check',
    title: 'Formato APA y Formato Propuesto por Repositorio Institucional',
    tag: 'Directiva Institucional & Originalidad',
    badge: 'Turnitin 0% Plagio',
    badgeColor: 'bg-blue-100 text-blue-800 border border-blue-200',
    shortDesc: 'Maquetación editorial milimétrica según la plantilla del repositorio institucional, normas APA 7ma / Vancouver y reporte oficial Turnitin.',
    time: '24 a 48 horas',
    formats: ['Plantilla de Repositorio Institucional', 'Normas APA 7ma / Vancouver', 'Reporte Oficial Turnitin', 'Índices Automáticos'],
    proofTitle: 'Formato APA & Repositorio Institucional: Antes vs Después',
    proofSubtitle: 'De observaciones reiteradas en mesa de partes por formato a documento aprobado para el repositorio digital institucional',
    beforeImage: '/images/services/1.svg',
    afterImage: '/images/services/2.svg',
    beforeLabel: 'ANTES: Formato Observado (38% Similitud)',
    afterLabel: 'DESPUÉS: Aprobado Repositorio (2% Turnitin)',
    beforeDesc: 'Márgenes incorrectos, citas manuales desordenadas, carátula observada y párrafos con similitud que impiden el depósito en el repositorio.',
    afterDesc: 'Maquetación milimétrica con plantilla institucional, normas APA 7ma, referencias automáticas y reporte Turnitin sin depósito.',
  },
  {
    id: 'integral',
    num: '05',
    icon: 'bi-pencil-square',
    title: 'Desarrollo Integral de Tesis',
    tag: 'Acompañamiento 360°',
    badge: 'Capítulo por Capítulo',
    badgeColor: 'bg-blue-100 text-blue-800 border border-blue-200',
    shortDesc: 'Acompañamiento completo desde el primer capítulo hasta las conclusiones con entregas validadas.',
    time: 'Por entregables',
    formats: ['Word con Control de Cambios', 'Entregas Progresivas', 'Sesiones 1 a 1'],
    proofTitle: 'Desarrollo Integral: Antes vs Después',
    proofSubtitle: 'De meses de estancamiento y carpetas dispersas a un documento final con todos los capítulos aprobados',
    beforeImage: '/images/services/9.svg',
    afterImage: '/images/services/10.svg',
    beforeLabel: 'ANTES: Estancado Meses',
    afterLabel: 'DESPUÉS: 5 Capítulos Validados',
    beforeDesc: 'Frustración, versiones contradictorias en Word, falta de tiempo laboral y observaciones continuas de asesores.',
    afterDesc: 'Entregas progresivas capítulo por capítulo con control de cambios, reuniones de avance 1 a 1 y pagos por hito aprobado.',
  },
  {
    id: 'sustentacion',
    num: '06',
    icon: 'bi-file-earmark-slides-fill',
    title: 'Creación de Diapositivas para Sustentación',
    tag: 'Presentaciones PPT / PDF',
    badge: 'Listo para Exponer',
    badgeColor: 'bg-blue-100 text-blue-800 border border-blue-200',
    shortDesc: 'Diseño profesional de diapositivas ejecutivas con síntesis metodológica, gráficos estadísticos y guion de exposición.',
    time: '24 a 48 horas',
    formats: ['PowerPoint (.pptx)', 'PDF 16:9 HD', 'Guion de Exposición'],
    proofTitle: 'Presentación de Sustentación: Antes vs Después',
    proofSubtitle: 'De diapositivas saturadas de texto que aburren al jurado a un deck ejecutivo 16:9 de alto impacto',
    beforeImage: '/images/services/11.svg',
    afterImage: '/images/services/12.svg',
    beforeLabel: 'ANTES: Párrafos Saturados',
    afterLabel: 'DESPUÉS: Deck Ejecutivo 16:9',
    beforeDesc: 'Copiar y pegar texto de la tesis en láminas densas que cansan al jurado y provocan exceso de preguntas.',
    afterDesc: '15 a 18 diapositivas ejecutivas con gráficos claros, notas del orador calibradas para 20 minutos y plantilla institucional.',
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState('estadistica');
  const activeService = servicesData.find((s) => s.id === activeId) || servicesData[0];

  return (
    <section id="servicios" className="services-section py-20 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Pruebas Reales de Entregables
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Portafolio de Servicios: Antes y Después
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Desliza la barra interactiva para comparar el estado inicial habitual frente al resultado final profesional que recibirás.
          </p>
        </div>

        {/* Service Selector Tabs (6 Services) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-8">
          {servicesData.map((service) => {
            const isActive = activeId === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveId(service.id)}
                type="button"
                className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl border transition-all ${
                  isActive
                    ? 'bg-blue-700 text-white border-blue-700 shadow-lg shadow-blue-700/20 ring-2 ring-blue-700/30'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-sm'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg mb-2 transition-colors ${
                    isActive ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-700'
                  }`}
                >
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${isActive ? 'text-blue-200' : 'text-slate-400'}`}>
                  {service.num}
                </span>
                <h3 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2">
                  {service.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Full-Width A4 Document Comparator */}
        <div className="w-full max-w-2xl mx-auto">
          <div className="proof-viewer-window bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden p-2 sm:p-4">
            <BeforeAfterSlider
              key={activeService.id}
              beforeImage={activeService.beforeImage}
              afterImage={activeService.afterImage}
              beforeLabel="ANTES"
              afterLabel="DESPUÉS"
            />
          </div>
        </div>


      </div>
    </section>
  );
}
