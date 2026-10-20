import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AcademicLevels from './components/AcademicLevels';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Methodology from './components/Methodology';
import ToolsSection from './components/ToolsSection';
import Testimonials from './components/Testimonials';
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

      {/* 2. Contenido principal con animación de entrada al hacer scroll */}
      <main className="main-content">
        {/* Hero Section (Fijo y estable al cargar) */}
        <Hero />

        {/* Niveles Académicos (Pregrado, Especialidad, Maestría, Doctorado) */}
        <ScrollReveal direction="up" delay={100}>
          <AcademicLevels />
        </ScrollReveal>

        {/* Portafolio de Servicios (Estadística, Perfil, Artículos, APA/Vancouver) */}
        <ScrollReveal direction="up" delay={100}>
          <Services />
        </ScrollReveal>

        {/* Cotizador Interactivo */}
        <ScrollReveal direction="up" delay={100}>
          <Calculator />
        </ScrollReveal>

        {/* Metodología de Trabajo en 4 Pasos */}
        <ScrollReveal direction="up" delay={100}>
          <Methodology />
        </ScrollReveal>

        {/* Software y Estándares Internacionales (SPSS, R, Jamovi, Scopus) */}
        <ScrollReveal direction="up" delay={100}>
          <ToolsSection />
        </ScrollReveal>

        {/* Casos de Éxito y Testimonios */}
        <ScrollReveal direction="up" delay={100}>
          <Testimonials />
        </ScrollReveal>

        {/* Preguntas Frecuentes */}
        <ScrollReveal direction="up" delay={100}>
          <FAQ />
        </ScrollReveal>

        {/* Formulario de Diagnóstico Gratuito */}
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
