import React from 'react';
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
import './App.css';

export default function App() {
  return (
    <div className="app-wrapper font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Barra de navegación fija */}
      <Navbar />

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

        {/* 5. Metodología de Trabajo y Acompañamiento */}
        <ScrollReveal direction="up" delay={100}>
          <Methodology />
        </ScrollReveal>

        {/* Software Científico y Estándares Internacionales */}
        <ScrollReveal direction="up" delay={100}>
          <ToolsSection />
        </ScrollReveal>

        {/* 7. Preguntas Frecuentes */}
        <ScrollReveal direction="up" delay={100}>
          <FAQ />
        </ScrollReveal>

        {/* 8. Contáctanos (Diagnóstico Gratuito) */}
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
