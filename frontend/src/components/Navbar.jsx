import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ onOpenPortal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState({
    Pregrado: true,
    Posgrado: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    {
      name: 'Servicios',
      href: '#servicios',
      sublevels: [
        {
          name: 'Análisis Estadístico',
          desc: 'SPSS, RStudio, Jamovi y pruebas de hipótesis',
          icon: 'bi-bar-chart-fill',
          badge: 'SPSS/R',
          target: 'servicios',
          id: 'estadistica',
        },
        {
          name: 'Perfil y Proyecto',
          desc: 'Matriz de consistencia y aprobación',
          icon: 'bi-journal-bookmark-fill',
          badge: '100% Aprobación',
          target: 'servicios',
          id: 'perfil',
        },
        {
          name: 'Artículos Científicos',
          desc: 'Estructura IMRyD para Scopus, WoS y RIA',
          icon: 'bi-file-earmark-diff-fill',
          badge: 'Scopus / RIA',
          target: 'servicios',
          id: 'articulos',
        },
        {
          name: 'Formato & Repositorio',
          desc: 'APA 7ma, Vancouver y Turnitin < 15%',
          icon: 'bi-shield-check',
          badge: 'Turnitin',
          target: 'servicios',
          id: 'formato',
        },
        {
          name: 'Desarrollo Integral',
          desc: 'Acompañamiento 360° capítulo por capítulo',
          icon: 'bi-pencil-square',
          badge: 'Integral',
          target: 'servicios',
          id: 'integral',
        },
        {
          name: 'Diapositivas Sustentación',
          desc: 'Deck ejecutivo 16:9 con notas del orador',
          icon: 'bi-file-earmark-slides-fill',
          badge: 'Defensa',
          target: 'servicios',
          id: 'sustentacion',
        },
      ],
    },
    {
      name: 'Pregrado',
      href: '#pregrado',
      badge: 'UNA Puno',
      sublevels: [
        {
          name: 'Sustentación de Tesis',
          desc: 'Ruta completa de investigación para bachilleres UNA Puno',
          icon: 'bi-mortarboard-fill',
          badge: 'Tradicional',
          target: 'pregrado',
          tab: 'tesis',
        },
        {
          name: 'Titulación por Artículo',
          desc: 'Titúlate más rápido publicando en revistas Scopus / SciELO',
          icon: 'bi-file-earmark-text-fill',
          badge: 'Vía Rápida',
          target: 'pregrado',
          tab: 'articulo',
        },
      ],
    },
    {
      name: 'Posgrado',
      href: '#posgrado',
      badge: 'EPG Puno',
      sublevels: [
        {
          name: 'Segunda Especialidad',
          desc: 'Residentado médico, clínico y proyectos aplicados',
          icon: 'bi-hospital-fill',
          badge: 'Especialización',
          target: 'posgrado',
          tab: 'especialidad',
        },
        {
          name: 'Maestría',
          desc: 'Tesis explicativa, modelos multivariados o artículo',
          icon: 'bi-award-fill',
          badge: 'Magíster',
          target: 'posgrado',
          tab: 'maestria',
        },
        {
          name: 'Doctorado (PhD)',
          desc: 'Rigor epistemológico, SmartPLS, AMOS y Scopus Q1-Q4',
          icon: 'bi-gem',
          badge: 'PhD',
          target: 'posgrado',
          tab: 'doctorado',
        },
      ],
    },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Software', href: '#software' },
    { name: 'Preguntas', href: '#preguntas' },
    { name: 'Precios', href: '#precios' },
  ];

  const handleSublevelClick = (href, sub) => {
    // 1. Notificar al componente correspondiente para activar la pestaña o card
    if (sub.target && (sub.tab || sub.id)) {
      window.dispatchEvent(
        new CustomEvent('selectSublevel', {
          detail: {
            target: sub.target,
            tab: sub.tab,
            id: sub.id,
          },
        })
      );
    }

    // 2. Desplazar suavemente a la sección correspondiente
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = href;
    }

    // 3. Cerrar el menú móvil si estaba abierto
    setMobileMenuOpen(false);
  };

  const toggleMobileSublevel = (name) => {
    setExpandedMobile((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo Brand with System Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/images/logos/tesis_logo.svg"
              alt="TesisAltiplánica Logo"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col text-left">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 leading-none group-hover:text-blue-700 transition-colors">
                Tesis<span className="text-[#0052ff]">Altiplánica</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.14em] font-black text-slate-500 mt-1">
                CONSULTORÍA DE TESIS & ESTADÍSTICA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar-nav-pill hidden lg:flex items-center gap-0.5 xl:gap-1 px-2.5 xl:px-3 py-1.5 rounded-full">
            {navLinks.map((link) => {
              const hasSublevels = link.sublevels && link.sublevels.length > 0;

              if (!hasSublevels) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="navbar-link px-2.5 xl:px-3 py-1 text-[11px] xl:text-xs font-bold text-slate-700 hover:text-blue-700 rounded-full transition-colors whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                );
              }

              const isWide = link.sublevels.length > 3;

              return (
                <div key={link.name} className="navbar-dropdown-wrapper">
                  <a
                    href={link.href}
                    className="navbar-link inline-flex items-center gap-1 px-2.5 xl:px-3 py-1 text-[11px] xl:text-xs font-bold text-slate-700 hover:text-blue-700 rounded-full transition-colors whitespace-nowrap group cursor-pointer"
                  >
                    <span>{link.name}</span>
                    <i className="bi bi-chevron-down text-[9px] text-slate-400 group-hover:text-blue-700 group-hover:rotate-180 transition-transform duration-200"></i>
                  </a>

                  {/* Dropdown Menu Flotante */}
                  <div
                    className={`navbar-dropdown-menu ${
                      isWide ? 'dropdown-wide' : ''
                    }`}
                  >
                    <div
                      className={`bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden ${
                        isWide ? 'w-[520px] grid grid-cols-2 gap-1.5 p-2.5' : 'w-76 flex flex-col gap-1 p-2'
                      }`}
                    >
                      {link.sublevels.map((sub) => (
                        <button
                          key={sub.name}
                          type="button"
                          onClick={() => handleSublevelClick(link.href, sub)}
                          className="sublevel-card flex items-start gap-2.5 p-2 rounded-xl text-left hover:bg-blue-50/80 transition-all group/item w-full cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 group-hover/item:bg-blue-700 group-hover/item:text-white flex items-center justify-center shrink-0 text-sm transition-colors shadow-2xs">
                            <i className={`bi ${sub.icon}`}></i>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-bold text-slate-800 group-hover/item:text-blue-700 transition-colors truncate">
                                {sub.name}
                              </span>
                              {sub.badge && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 shrink-0">
                                  {sub.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[10.5px] text-slate-500 leading-tight line-clamp-1 mt-0.5">
                              {sub.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Desktop Contact CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/51958274958?text=Hola%20TesisAltipl%C3%A1nica%2C%20deseo%20contactarme%20para%20consultar%20sobre%20mi%20tesis%20o%20proyecto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] xl:text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Contacto</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Abrir menú"
          >
            <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1.5 max-h-[85vh] overflow-y-auto">
          {navLinks.map((link) => {
            const hasSublevels = link.sublevels && link.sublevels.length > 0;
            const isExpanded = !!expandedMobile[link.name];

            if (!hasSublevels) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-bold tracking-wide text-slate-700 hover:bg-slate-100 hover:text-blue-700 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <div key={link.name} className="rounded-xl border border-slate-100 overflow-hidden bg-slate-50/50">
                <div className="flex items-center justify-between px-3 py-2 text-sm font-bold tracking-wide text-slate-800">
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex-1 hover:text-blue-700 py-0.5"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded">
                        {link.badge}
                      </span>
                    )}
                  </a>
                  <button
                    type="button"
                    onClick={() => toggleMobileSublevel(link.name)}
                    className="p-1.5 text-slate-400 hover:text-blue-700 transition-colors"
                    aria-label={`Desplegar subniveles de ${link.name}`}
                  >
                    <i
                      className={`bi bi-chevron-down text-xs transition-transform inline-block ${
                        isExpanded ? 'rotate-180 text-blue-700' : ''
                      }`}
                    ></i>
                  </button>
                </div>

                {isExpanded && (
                  <div className="px-2 pb-2 space-y-1 border-t border-slate-100 pt-1.5 bg-white">
                    {link.sublevels.map((sub) => (
                      <button
                        key={sub.name}
                        type="button"
                        onClick={() => handleSublevelClick(link.href, sub)}
                        className="w-full flex items-center gap-2.5 p-2 rounded-lg text-left hover:bg-blue-50/80 transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 text-xs group-hover:bg-blue-700 group-hover:text-white transition-colors">
                          <i className={`bi ${sub.icon}`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold text-slate-800 group-hover:text-blue-700">
                              {sub.name}
                            </span>
                            {sub.badge && (
                              <span className="text-[9px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.2 rounded">
                                {sub.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-slate-400 truncate block mt-0.5">
                            {sub.desc}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <a
            href="https://wa.me/51958274958?text=Hola%20TesisAltipl%C3%A1nica%2C%20deseo%20contactarme%20para%20consultar%20sobre%20mi%20tesis%20o%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center mt-3 px-3 py-2.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors shadow-md cursor-pointer"
          >
            <i className="bi bi-whatsapp mr-2 text-base"></i>
            <span>Contacto Directo WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
