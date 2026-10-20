import React from 'react';
import './ToolsSection.css';

const tools = [
  { name: 'IBM SPSS Statistics', desc: 'Pruebas estadísticas, correlaciones y modelos multivariados', icon: 'bi-cpu-fill', category: 'Estadística' },
  { name: 'R & RStudio', desc: 'Análisis de datos avanzado, bioestadística y gráficos ggplot2', icon: 'bi-code-square', category: 'Bioestadística' },
  { name: 'Jamovi & JASP', desc: 'Estadística moderna, transparente y contrastación de hipótesis', icon: 'bi-pie-chart-fill', category: 'Estadística' },
  { name: 'SmartPLS 4 & AMOS', desc: 'Modelos de ecuaciones estructurales (PLS-SEM y CB-SEM)', icon: 'bi-diagram-3-fill', category: 'Modelado SEM' },
  { name: 'Atlas.ti / NVivo', desc: 'Análisis de contenido, teoría fundamentada y entrevistas cualitativas', icon: 'bi-chat-square-quote-fill', category: 'Cualitativo' },
  { name: 'Turnitin Feedback Studio', desc: 'Reportes de originalidad sin depósito previo en base de datos', icon: 'bi-patch-check-fill', category: 'Antiplagio' },
  { name: 'Normas APA 7ma / Vancouver', desc: 'Citas directas, indirectas, tablas, figuras y referencias cruzadas', icon: 'bi-book-fill', category: 'Estilo Editorial' },
  { name: 'Scopus & Web of Science', desc: 'Artículos científicos indexados de alto factor de impacto', icon: 'bi-globe2', category: 'Indexación' },
];

export default function ToolsSection() {
  return (
    <section className="tools-section py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Dominio Técnico & Herramientas Especializadas
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Software y Estándares Internacionales que Aplicamos
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {tools.map((t, idx) => (
            <div key={idx} className="tool-card group">
              <div className="tool-icon-wrapper w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl mb-3">
                <i className={`bi ${t.icon}`}></i>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block mb-1">
                {t.category}
              </span>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                {t.name}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
