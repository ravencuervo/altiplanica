import React, { useState } from 'react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    email: '',
    nivel: 'Pregrado',
    servicio: 'Estadística (SPSS / R)',
    universidad: 'Universidad Nacional del Altiplano (UNA Puno)',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const text = `Hola TesisAltiplánica, deseo un diagnóstico gratuito:%0A` +
      `- Nombre: ${formData.nombre}%0A` +
      `- Nivel: ${formData.nivel}%0A` +
      `- Servicio: ${formData.servicio}%0A` +
      `- Universidad: ${formData.universidad || 'No especificada'}%0A` +
      `- WhatsApp: ${formData.whatsapp}%0A` +
      `- Consulta: ${formData.mensaje}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/51999999999?text=${text}`, '_blank');
    }, 800);
  };

  return (
    <section id="contacto" className="contact-section py-20 relative scroll-mt-20">
      {/* Anchor identifier for #contactanos */}
      <span id="contactanos" className="absolute -top-24 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="contact-hero-banner p-8 sm:p-12 lg:p-16 text-white">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
                Atención Inmediata
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Solicita tu Diagnóstico Metodológico Gratuito
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Cuéntanos sobre tu tema de tesis o investigación. Un especialista revisará la viabilidad de tus objetivos, la matriz de consistencia o tu base de datos sin ningún costo.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 text-lg">
                    <i className="bi bi-clock-history"></i>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tiempo de Respuesta</h4>
                    <p className="text-sm font-semibold text-white">Menos de 15 minutos por WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 text-lg">
                    <i className="bi bi-shield-lock-fill"></i>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Privacidad Estricta</h4>
                    <p className="text-sm font-semibold text-white">Confidencialidad absoluta de tu información</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 text-lg">
                    <i className="bi bi-whatsapp"></i>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Canal Directo</h4>
                    <p className="text-sm font-semibold text-white">+51 999 999 999 (Asesoría Académica)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center text-3xl font-bold">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">¡Solicitud Enviada con Éxito!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Te estamos redirigiendo a WhatsApp para conectarte con un asesor metodológico de inmediato.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-blue-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        WhatsApp / Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="Ej. +51 987 654 321"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-blue-700"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Nivel Académico
                      </label>
                      <select
                        name="nivel"
                        value={formData.nivel}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-blue-700 bg-white"
                      >
                        <option value="Pregrado / Titulación">Pregrado / Licenciatura</option>
                        <option value="Segunda Especialidad">Segunda Especialidad</option>
                        <option value="Maestría">Maestría (Posgrado)</option>
                        <option value="Doctorado">Doctorado (PhD)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Servicio Principal
                      </label>
                      <select
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-blue-700 bg-white"
                      >
                        <option value="Análisis Estadístico (SPSS/R)">Análisis Estadístico (SPSS / R / Jamovi)</option>
                        <option value="Perfil o Plan de Tesis">Perfil / Plan de Tesis</option>
                        <option value="Tesis Completa Integral">Tesis Completa Integral</option>
                        <option value="Artículos Científicos Scopus">Artículo Científico (Scopus / WoS)</option>
                        <option value="Formateo APA/Vancouver y Turnitin">Formateo APA / Vancouver + Turnitin</option>
                        <option value="Levantamiento de Observaciones">Levantamiento Urgente de Observaciones</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Universidad y Carrera (Opcional)
                    </label>
                    <input
                      type="text"
                      name="universidad"
                      value={formData.universidad}
                      onChange={handleChange}
                      placeholder="Ej. UNAP, UNA Puno, UNSA, UNMSM, PUCP, UCV, etc."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-blue-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Describe brevemente qué necesitas o en qué etapa estás
                    </label>
                    <textarea
                      name="mensaje"
                      rows="3"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Ej. Ya tengo mis datos recolectados pero necesito contrastar las hipótesis en SPSS y redactar los resultados bajo normas APA 7ma..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-blue-700 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="contact-submit-btn w-full py-3.5 px-6 rounded-xl font-bold text-white flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="bi bi-send-fill text-sm"></i>
                    <span>Enviar y Solicitar Diagnóstico Gratuito</span>
                  </button>
                  <p className="text-[11px] text-slate-500 text-center">
                    Tus datos son 100% confidenciales. No compartimos tu información con terceros.
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
