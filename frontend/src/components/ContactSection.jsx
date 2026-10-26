import React from 'react';
import './ContactSection.css';

const WHATSAPP_BASE_URL = 'https://wa.me/51958274958';

const servicePricingCards = [
  {
    id: 'estadistica',
    num: '01',
    icon: 'bi-bar-chart-fill',
    title: 'Análisis Estadístico Avanzado',
    tag: 'SPSS / RStudio / Jamovi / Stata',
    price: '450',
    priceSuffix: 'aprox.',
    badge: 'Más Solicitado',
    badgeClass: 'bg-blue-900/60 text-blue-300 border-blue-700/60',
    time: '48 a 72 horas',
    deliverables: [
      'Limpieza de base de datos y contrastación de hipótesis (p < 0.05)',
      'Tablas y figuras estadísticas bajo normas APA o Vancouver',
      'Sesión virtual 1 a 1 para explicarte cada resultado para tu defensa'
    ],
    whatsappMsg: 'Hola TesisAltiplánica, deseo consultar y cotizar el servicio de *Análisis Estadístico Avanzado (SPSS/R)* (referencia aprox. desde S/ 450). Mi proyecto es de...'
  },
  {
    id: 'perfil',
    num: '02',
    icon: 'bi-journal-bookmark-fill',
    title: 'Perfil y Proyecto de Tesis',
    tag: 'Fase Inicial de Investigación',
    price: '500',
    priceSuffix: 'aprox.',
    badge: '100% Aprobación',
    badgeClass: 'bg-emerald-900/60 text-emerald-300 border-emerald-700/60',
    time: '3 a 5 días',
    deliverables: [
      'Matriz de consistencia metodológica articulada y sin observaciones',
      'Operacionalización precisa de variables e instrumentos validados',
      'Antecedentes actualizados en Scopus, SciELO y repositorios'
    ],
    whatsappMsg: 'Hola TesisAltiplánica, deseo consultar y cotizar el servicio de *Perfil y Proyecto de Tesis* (referencia aprox. desde S/ 500). Mi proyecto es de...'
  },
  {
    id: 'articulos',
    num: '03',
    icon: 'bi-file-earmark-diff-fill',
    title: 'Artículos Scopus, WoS y RIA (EPG)',
    tag: 'Publicación Indexada • Revistas EPG',
    price: '600',
    priceSuffix: 'aprox.',
    badge: 'Indexación Q1-Q4',
    badgeClass: 'bg-purple-900/60 text-purple-300 border-purple-700/60',
    time: 'Según revista',
    deliverables: [
      'Conversión de tesis a estructura científica IMRyD',
      'Adecuación a Author Guidelines y Revista RIA (EPG UNA Puno)',
      'Soporte editorial, parafraseo y respuesta a cartas de revisores'
    ],
    whatsappMsg: 'Hola TesisAltiplánica, deseo consultar y cotizar el servicio de *Artículos Scopus, WoS y RIA EPG* (referencia aprox. desde S/ 600). Mi proyecto es de...'
  },
  {
    id: 'formato',
    num: '04',
    icon: 'bi-shield-check',
    title: 'Formato APA y Formato Propuesto por Repositorio Institucional',
    tag: 'Directiva Institucional UNA Puno',
    price: '50',
    priceSuffix: 'aprox.',
    badge: 'Turnitin 0% Plagio',
    badgeClass: 'bg-amber-900/60 text-amber-300 border-amber-700/60',
    time: '24 a 48 horas',
    deliverables: [
      'Maquetación milimétrica según directiva del Repositorio Institucional',
      'Citas y referencias normadas bajo APA 7ma o Vancouver (Mendeley/Zotero)',
      'Reporte oficial Turnitin sin depósito con porcentaje permitido'
    ],
    whatsappMsg: 'Hola TesisAltiplánica, deseo consultar y cotizar el servicio de *Formato APA y Formato Propuesto por Repositorio Institucional* (referencia aprox. desde S/ 50). Mi proyecto es de...'
  },
  {
    id: 'integral',
    num: '05',
    icon: 'bi-pencil-square',
    title: 'Desarrollo Integral de Tesis',
    tag: 'Acompañamiento 360° Todo Incluido',
    price: '1,200',
    priceSuffix: 'en cuotas',
    badge: 'Modalidad por Hitos',
    badgeClass: 'bg-indigo-900/60 text-indigo-300 border-indigo-700/60',
    time: '4 a 8 semanas',
    deliverables: [
      'Elaboración integral capítulo por capítulo (Capítulo I al V)',
      'Pagos escalonados: solo abonas cada avance tras tu conformidad',
      'Levantamiento de observaciones del jurado hasta tu sustentación'
    ],
    whatsappMsg: 'Hola TesisAltiplánica, deseo consultar y cotizar el servicio de *Desarrollo Integral de Tesis en Cuotas* (referencia desde S/ 1,200). Mi proyecto es de...'
  },
  {
    id: 'diapositivas',
    num: '06',
    icon: 'bi-file-earmark-slides-fill',
    title: 'Diapositivas para Sustentación',
    tag: 'Defensa ante Jurado Calificador',
    price: '50',
    priceSuffix: 'aprox.',
    badge: 'Listo para Exponer',
    badgeClass: 'bg-teal-900/60 text-teal-300 border-teal-700/60',
    time: '24 a 48 horas',
    deliverables: [
      'Deck ejecutivo 16:9 con síntesis de metodología y resultados',
      'Notas del orador calibradas para exposición de 20 minutos',
      'Guion de defensa y banco de posibles preguntas de jurados'
    ],
    whatsappMsg: 'Hola TesisAltiplánica, deseo consultar y cotizar el servicio de *Diapositivas para Sustentación* (referencia aprox. desde S/ 50). Mi proyecto es de...'
  }
];

export default function ContactSection() {
  return (
    <section id="contacto" className="contact-fullwidth-section w-full relative scroll-mt-10 overflow-hidden">
      {/* Anchor identifiers */}
      <span id="contactanos" className="absolute -top-24 pointer-events-none" />
      <span id="precios" className="absolute -top-24 pointer-events-none" />

      {/* Fondo navy sólido a todo el ancho */}
      <div className="w-full py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Encabezado Principal de Precios */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
              <i className="bi bi-tag-fill text-blue-400"></i>
              <span>Inversión Transparente • Sin Pagos Ocultos</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
              Precios Estimados por Servicio
            </h2>

            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Valores referenciales aproximados según el área académica (Ingenierías, Biomédicas, Sociales, Empresariales) y el estado actual de tu investigación. Facilidades de pago en cuotas según avances y entregables aprobados.
            </p>
          </div>

          {/* Grid de los 6 Cards de Precios Estimados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {servicePricingCards.map((item) => {
              const directWhatsAppUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(item.whatsappMsg)}`;

              return (
                <div
                  key={item.id}
                  className="pricing-card-item rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between border bg-slate-900/80 border-slate-700/80 hover:border-blue-500 hover:bg-slate-800/80"
                >
                  <div>
                    {/* Header Card: Número, Ícono y Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-extrabold text-slate-400 font-mono tracking-widest">{item.num}</span>
                        <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800/60 text-blue-400 flex items-center justify-center text-sm">
                          <i className={`bi ${item.icon}`}></i>
                        </div>
                      </div>
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${item.badgeClass}`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Título y Tag */}
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-4 font-medium">
                      {item.tag}
                    </p>

                    {/* Bloque de Precio */}
                    <div className="bg-slate-950/70 rounded-xl p-3.5 border border-slate-800 mb-4">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Desde</span>
                        <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">S/ {item.price}</span>
                        <span className="text-xs text-blue-300 font-medium">({item.priceSuffix})</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-300">
                        <i className="bi bi-clock-history text-blue-400"></i>
                        <span>Plazo referencial: <strong>{item.time}</strong></span>
                      </div>
                    </div>

                    {/* Entregables */}
                    <div className="space-y-2 mb-5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Lo que incluye:
                      </span>
                      {item.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                          <i className="bi bi-check2-circle text-blue-400 shrink-0 text-xs mt-0.5"></i>
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Botón de Acción Azul */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center transition-all cursor-pointer bg-blue-600 hover:bg-blue-500 text-white shadow-md hover:shadow-blue-900/40"
                    >
                      <span>Seleccionar y Cotizar</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
