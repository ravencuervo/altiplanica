import React from 'react';
import Thesis3DViewer from './Thesis3DViewer';
import HeroPatternCanvas from './HeroPatternCanvas';
import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      {/* Interactive Statistical Dot Matrix Background */}
      <HeroPatternCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold bg-slate-100 border border-slate-200 text-slate-800 max-w-full">
              <span className="w-2 h-2 rounded-full bg-blue-700 shrink-0"></span>
              <span className="truncate sm:whitespace-normal">Asesoría Especializada Universitaria & Posgrado</span>
              <i className="bi bi-patch-check-fill text-blue-700 shrink-0"></i>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] sm:leading-[1.14]">
              Tu Tesis y Artículos <br className="hidden sm:inline" />
              <span className="hero-title-accent"> Aprobados sin Estrés</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Acompañamiento metodológico y estadístico riguroso para{' '}
              <strong className="text-slate-900 font-semibold">Pregrado</strong>,{' '}
              <strong className="text-slate-900 font-semibold">Segunda Especialidad</strong>,{' '}
              <strong className="text-slate-900 font-semibold">Maestría</strong> y{' '}
              <strong className="text-slate-900 font-semibold">Doctorado</strong>. 
              Desde el perfil de proyecto hasta la contrastación estadística (SPSS/R), 
              formateo editorial (APA/Vancouver) y publicación científica indexada.
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#contacto"
                className="hero-cta-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold"
              >
                <i className="bi bi-chat-dots-fill"></i>
                <span>Diagnóstico Gratuito de tu Tesis</span>
              </a>
              <a
                href="#cotizador"
                className="hero-cta-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold"
              >
                <i className="bi bi-calculator-fill text-blue-700"></i>
                <span>Cotizar Proyecto</span>
              </a>
            </div>

            {/* Value checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-left border-t border-slate-200">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <i className="bi bi-shield-lock-fill text-slate-900 text-base sm:text-lg shrink-0"></i>
                <span className="text-xs sm:text-sm font-medium text-slate-700">100% Confidencial</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <i className="bi bi-file-earmark-check-fill text-blue-700 text-base sm:text-lg shrink-0"></i>
                <span className="text-xs sm:text-sm font-medium text-slate-700">Antiplagio Turnitin</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <i className="bi bi-person-video3 text-slate-900 text-base sm:text-lg shrink-0"></i>
                <span className="text-xs sm:text-sm font-medium text-slate-700">Sesiones 1 a 1 en vivo</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Model directly integrated in the Hero */}
          <div className="lg:col-span-6 flex flex-col items-center w-full max-w-lg lg:max-w-none mx-auto mt-2 lg:mt-0">
            <Thesis3DViewer />

            {/* Stats badges directly beneath */}
            <div className="w-full grid grid-cols-3 gap-2 sm:gap-3 mt-3 sm:mt-4">
              <div className="hero-stats-badge">
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">Tesis Aprobadas</p>
                <p className="text-sm sm:text-base md:text-xl font-bold text-slate-900 mt-0.5">+1,250</p>
              </div>
              <div className="hero-stats-badge">
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">Tasa de Éxito</p>
                <p className="text-sm sm:text-base md:text-xl font-bold text-emerald-700 mt-0.5">99.6%</p>
              </div>
              <div className="hero-stats-badge">
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium truncate">Turnitin 0%</p>
                <p className="text-sm sm:text-base md:text-xl font-bold text-blue-800 mt-0.5">Garantizado</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
