import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* 1. Información de Marca (Logo Blanco grande arriba, letras abajo - Centrado en responsive) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
            <div className="w-full flex flex-col items-center lg:items-start gap-3">
              <img
                src="/images/logos/tesis_logo.svg"
                alt="TesisAltiplánica"
                className="h-16 sm:h-20 w-auto object-contain footer-logo-white mx-auto lg:mx-0"
              />
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight">
                  Tesis<span className="text-blue-500">Altiplánica</span>
                </span>
                <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mt-1">
                  Consultoría de Tesis & Estadística • Puno, Perú
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
              Centro especializado en consultoría metodológica, análisis estadístico avanzado, bioestadística y publicación de artículos científicos con sede en Puno, Perú.
            </p>

            {/* Redes sociales exactas: Facebook, Instagram, TikTok, LinkedIn y WhatsApp - Centradas en responsive */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 pt-2 w-full">
              <a 
                href="https://www.facebook.com/profile.php?id=61595570445839" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link hover:bg-blue-600 hover:border-blue-500" 
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a 
                href="https://www.instagram.com/tesis.altiplanica/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link hover:bg-pink-600 hover:border-pink-500" 
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@tesisaltiplanica" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link hover:bg-slate-700 hover:border-slate-500" 
                aria-label="TikTok"
              >
                <i className="bi bi-tiktok"></i>
              </a>
              <a 
                href="https://www.linkedin.com/company/tesis-altipl%C3%A1nica/home/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link hover:bg-blue-700 hover:border-blue-600" 
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a 
                href="https://wa.me/51958274958" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link hover:bg-emerald-600 hover:border-emerald-500" 
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* 2. Enlaces: Servicios */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Servicios</h4>
            <ul className="footer-link-list space-y-2.5 text-xs">
              <li><a href="#servicios">Análisis Estadístico SPSS / R</a></li>
              <li><a href="#servicios">Perfil y Plan de Tesis</a></li>
              <li><a href="#servicios">Artículos Scopus, WoS y RIA (EPG)</a></li>
              <li><a href="#servicios">Formato APA & Repositorio Institucional</a></li>
              <li><a href="#servicios">Subsanación de Observaciones</a></li>
              <li><a href="#herramientas">Software y Modelamiento</a></li>
            </ul>
          </div>

          {/* 3. Enlaces: Pregrado & Posgrado */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Programas</h4>
            <ul className="footer-link-list space-y-2.5 text-xs">
              <li><a href="#pregrado">Tesis de Pregrado y Licenciatura</a></li>
              <li><a href="#pregrado">Titulación por Artículo Científico</a></li>
              <li><a href="#posgrado">Segunda Especialidad</a></li>
              <li><a href="#posgrado">Maestrías y Doctorados</a></li>
              <li><a href="#metodologia">Metodología y Cronogramas</a></li>
            </ul>
          </div>

          {/* 4. Contacto & Mapa Puno, Perú */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <i className="bi bi-envelope-fill text-blue-500"></i>
                <a href="mailto:tesisaltiplanica@gmail.com" className="hover:text-white transition-colors">
                  tesisaltiplanica@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-whatsapp text-blue-400"></i>
                <a href="https://wa.me/51958274958" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +51 958 274 958
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="bi bi-geo-alt-fill text-blue-500"></i>
                <span>Puno, Puno, Perú</span>
              </li>
            </ul>

            {/* Mapa general de Puno, Perú */}
            <div className="mt-3.5 w-full h-32 rounded-xl overflow-hidden border border-slate-800 shadow-2xs">
              <iframe
                title="Mapa Puno, Perú"
                src="https://maps.google.com/maps?q=Puno%2C%20Puno%2C%20Per%C3%BA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-10 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} TesisAltiplánica. Todos los derechos reservados. Consultoría Académica y Científica.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400">Términos del Servicio</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Política de Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400">Ética Académica</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
