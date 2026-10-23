import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ onOpenPortal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Pregrado', href: '#pregrado' },
    { name: 'Posgrado', href: '#posgrado' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Software Especializado', href: '#software' },
    { name: 'Preguntas', href: '#preguntas' },
    { name: 'Contáctanos', href: '#contacto' },
  ];

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
          <nav className="navbar-nav-pill hidden lg:flex items-center gap-0.5 xl:gap-1 px-2 xl:px-3 py-1.5 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="navbar-link px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs font-bold text-slate-700 hover:text-blue-700 rounded-full transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Portal CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenPortal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] xl:text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <i className="bi bi-person-lock text-sm"></i>
              <span>Portal del Tesista</span>
            </button>
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
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-bold tracking-wide text-slate-700 hover:bg-slate-100 hover:text-blue-700 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenPortal) onOpenPortal();
            }}
            className="w-full flex items-center justify-center gap-2 mt-3 px-3 py-2.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-xl transition-colors shadow-md"
          >
            <i className="bi bi-person-lock text-base"></i>
            <span>Portal del Tesista (Seguimiento)</span>
          </button>
        </div>
      )}
    </header>
  );
}
