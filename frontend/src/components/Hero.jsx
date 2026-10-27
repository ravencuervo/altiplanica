import React, { useState, useEffect } from 'react';
import Thesis3DViewer from './Thesis3DViewer';
import HeroPatternCanvas from './HeroPatternCanvas';
import './Hero.css';

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(min-width: 1024px)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleChange = (e) => setIsDesktop(e.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <section id="inicio" className="hero-section">
      {/* Interactive Statistical Dot Matrix Background */}
      <HeroPatternCanvas />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-3 sm:py-5">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">

            {/* Top pill badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-semibold bg-slate-100 border border-slate-200 text-slate-800 max-w-full">
              <span className="w-2 h-2 rounded-full bg-blue-700 shrink-0"></span>
              <span className="truncate sm:whitespace-normal">Asesoramiento y Asesoría de Tesis en Puno</span>
              <i className="bi bi-patch-check-fill text-blue-700 shrink-0"></i>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.18] sm:leading-[1.14]">
              Tu Tesis y Artículos <br className="hidden sm:inline" />
              <span className="hero-title-accent"> Aprobados sin Estrés</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Acompañamiento metodológico y estadístico en Puno y a nivel nacional para{' '}
              <strong className="text-slate-900 font-semibold">Pregrado</strong> (UNA Puno),{' '}
              <strong className="text-slate-900 font-semibold">Segunda Especialidad</strong>,{' '}
              <strong className="text-slate-900 font-semibold">Maestría</strong> y{' '}
              <strong className="text-slate-900 font-semibold">Doctorado</strong>.
              Desde el perfil de proyecto hasta la contrastación estadística (SPSS/R),
              formateo editorial (normas APA y formato de repositorio institucional) y publicación científica indexada.
            </p>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#contacto"
                className="hero-cta-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold"
              >
                <i className="bi bi-tag-fill"></i>
                <span>Ver Precios Estimados</span>
              </a>
              <a
                href="#servicios"
                className="hero-cta-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-semibold"
              >
                <i className="bi bi-compass-fill text-blue-700"></i>
                <span>Ver Servicios</span>
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

          {/* Right Column: 3D Interactive Model (Desktop only) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center w-full max-w-lg lg:max-w-none mx-auto">
            {isDesktop && (
              <div className="hidden lg:block w-full">
                <Thesis3DViewer />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
