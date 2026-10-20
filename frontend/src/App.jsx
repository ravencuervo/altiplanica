import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Grados from './components/Grados';
import Titulacion from './components/Titulacion';
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

      {/* 2. Contenido principal con animación de entrada (orden exacto del navbar) */}
      <main className="main-content">
        {/* 1. Inicio */}
        <Hero />

        {/* 2. Servicios */}
        <ScrollReveal direction="up" delay={100}>
          <Services />
        </ScrollReveal>

        {/* 3. Grados (Maestría y Doctorado / PhD) */}
        <ScrollReveal direction="up" delay={100}>
          <Grados />
        </ScrollReveal>

        {/* 4. Titulación (Pregrado y Segunda Especialidad) */}
        <ScrollReveal direction="up" delay={100}>
          <Titulacion />
        </ScrollReveal>

        {/* 5. Tesis (Desarrollo y Cotizador de Tesis) */}
        <ScrollReveal direction="up" delay={100}>
          <Calculator />
        </ScrollReveal>

        {/* 6. Metodología de Trabajo y Acompañamiento */}
        <ScrollReveal direction="up" delay={100}>
          <Methodology />
        </ScrollReveal>

        {/* Software Científico y Estándares Internacionales */}
        <ScrollReveal direction="up" delay={100}>
          <ToolsSection />
        </ScrollReveal>

        {/* Casos de Éxito y Testimonios de Tesistas */}
        <ScrollReveal direction="up" delay={100}>
          <Testimonials />
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
