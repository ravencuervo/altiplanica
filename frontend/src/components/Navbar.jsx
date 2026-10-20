import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
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
    { name: 'Niveles', href: '#niveles' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cotizador', href: '#cotizador' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Preguntas', href: '#faq' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand with System Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/images/logos/tesis_logo.png"
              alt="TesisAltiplánica Logo"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                Tesis<span className="text-blue-700">Altiplánica</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 -mt-1">
                Consultoría de Tesis & Estadística
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar-nav-pill hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="navbar-link px-4 py-1.5 text-sm font-semibold text-slate-700 rounded-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

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
              className="block px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-700 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
