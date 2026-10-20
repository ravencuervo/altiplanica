import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand info (2 cols) with system logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logos/tesis_logo.svg"
                alt="TesisAltiplánica"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-extrabold tracking-tight text-white">
                Tesis<span className="text-blue-500">Altiplánica</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Centro especializado en consultoría metodológica, análisis estadístico avanzado, bioestadística y publicación de artículos científicos para pregrado, segunda especialidad, maestría y doctorado.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="footer-social-link hover:bg-blue-700" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="footer-social-link hover:bg-emerald-600" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#" className="footer-social-link hover:bg-rose-600" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="footer-social-link hover:bg-blue-600" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Links 1: Servicios */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Servicios</h4>
            <ul className="footer-link-list space-y-2.5 text-xs">
              <li><a href="#servicios">Análisis Estadístico SPSS / R</a></li>
              <li><a href="#servicios">Perfil y Plan de Tesis</a></li>
              <li><a href="#servicios">Artículos Scopus & WoS</a></li>
              <li><a href="#servicios">Formato APA 7ma / Vancouver</a></li>
              <li><a href="#servicios">Revisión Turnitin Originalidad</a></li>
              <li><a href="#servicios">Subsanación de Observaciones</a></li>
            </ul>
          </div>

          {/* Links 2: Grados y Titulación */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Grados & Titulación</h4>
            <ul className="footer-link-list space-y-2.5 text-xs">
              <li><a href="#titulacion">Pregrado y Titulación</a></li>
              <li><a href="#titulacion">Segunda Especialidad</a></li>
              <li><a href="#grados">Maestría (Posgrado)</a></li>
              <li><a href="#grados">Doctorado (PhD)</a></li>
              <li><a href="#tesis">Cotizador de Tesis</a></li>
              <li><a href="#metodologia">Metodología y Garantías</a></li>
            </ul>
          </div>

          {/* Contacto Directo */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <i className="bi bi-geo-alt-fill text-blue-500"></i>
                <span>Puno, Arequipa, Cusco y Lima (Atención presencial y virtual)</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-whatsapp text-emerald-500"></i>
                <span>+51 999 999 999</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-envelope-fill text-blue-500"></i>
                <span>asesoria@tesisaltiplanica.com</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-clock-fill text-slate-400"></i>
                <span>Lunes a Sábado: 8:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-10 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} TesisAltiplánica. Todos los derechos reservados. Consultoría Académica y Científica.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400">Términos del Servicio</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Política de Privacidad (NDA)</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Ética Académica</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
