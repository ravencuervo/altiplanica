import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Pregrado from './components/Pregrado';
import Posgrado from './components/Posgrado';
import Methodology from './components/Methodology';
import ToolsSection from './components/ToolsSection';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollReveal from './components/ScrollReveal';
import TrackingPortal from './components/TrackingPortal';
import './App.css';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    return path === '/login' || path === '/panel' || hash === '#login' || hash === '#portal'
      ? 'portal'
      : 'landing';
  });

  useEffect(() => {
    // Si el usuario ingresó con hash antiguo, normalizar a la ruta limpia /login o /panel
    if (window.location.hash === '#portal' || window.location.hash === '#login') {
      window.history.replaceState({}, '', '/login');
      setCurrentView('portal');
    }

    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === '/login' || path === '/panel') {
        setCurrentView('portal');
      } else {
        setCurrentView('landing');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleOpenLogin = () => {
    window.history.pushState({}, '', '/login');
    setCurrentView('portal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToLanding = () => {
    window.history.pushState({}, '', '/');
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'portal') {
    return <TrackingPortal onBackToLanding={handleBackToLanding} />;
  }

  return (
    <div className="app-wrapper font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Barra de navegación fija con botón al portal / login */}
      <Navbar onOpenPortal={handleOpenLogin} />

      {/* 2. Contenido principal con animación de entrada (orden exacto del navbar) */}
      <main className="main-content">
        {/* 1. Inicio */}
        <Hero />

        {/* 2. Servicios */}
        <ScrollReveal direction="up" delay={100}>
          <Services />
        </ScrollReveal>

        {/* 3. Pregrado (UNA Puno - Tesis y Artículo Científico) */}
        <ScrollReveal direction="up" delay={100}>
          <Pregrado />
        </ScrollReveal>

        {/* 4. Posgrado (EPG UNA Puno - Especialidad, Maestría y Doctorados) */}
        <ScrollReveal direction="up" delay={100}>
          <Posgrado />
        </ScrollReveal>

        {/* 5. Metodología de Trabajo y Acompañamiento (Stacking Cards al Scroll) */}
        <Methodology />

        {/* Software Científico y Estándares Internacionales */}
        <ScrollReveal direction="up" delay={100}>
          <ToolsSection />
        </ScrollReveal>

        {/* 7. Preguntas Frecuentes */}
        <ScrollReveal direction="up" delay={100}>
          <FAQ />
        </ScrollReveal>

        {/* 8. Precios Estimados y Contacto Directo WhatsApp */}
        <ScrollReveal direction="up" delay={100}>
          <ContactSection />
        </ScrollReveal>
      </main>

      {/* 3. Footer */}
      <ScrollReveal direction="up" delay={50}>
        <Footer />
      </ScrollReveal>

      {/* 4. Botón Flotante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
