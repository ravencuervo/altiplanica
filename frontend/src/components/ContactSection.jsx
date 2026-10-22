import React, { useState } from 'react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    area: 'Ciencias de las Ingenierías',
    nivel: 'Pregrado / Tesis (UNA Puno)',
    servicio: 'Análisis Estadístico (SPSS / R / Python / Stata)',
    escuela: '',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const text = `Hola TesisAltiplánica, deseo solicitar mi diagnóstico metodológico gratuito:%0A` +
      `- *Nombre:* ${formData.nombre}%0A` +
      `- *WhatsApp:* ${formData.whatsapp}%0A` +
      `- *Área UNA Puno:* ${formData.area}%0A` +
      `- *Nivel Académico:* ${formData.nivel}%0A` +
      `- *Servicio Requerido:* ${formData.servicio}%0A` +
      `- *Facultad / Escuela:* ${formData.escuela || 'No especificada'}%0A` +
      `- *Detalle del Proyecto:* ${formData.mensaje || 'Solicitud de evaluación inicial'}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/51958274958?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <section id="contacto" className="contact-fullwidth-section w-full relative scroll-mt-10 overflow-hidden">
      {/* Anchor identifier for #contactanos */}
      <span id="contactanos" className="absolute -top-24 pointer-events-none" />

      {/* Fondo azul a todo el ancho de la ventana */}
      <div className="w-full py-10 sm:py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Columna Izquierda: Información de Confianza y Respaldo Institucional */}
            <div className="lg:col-span-5 text-white space-y-4 sm:space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <i className="bi bi-shield-check text-blue-400"></i>
                <span>100% Gratuito • Sin Compromiso</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Solicita tu Diagnóstico Metodológico Gratuito
              </h2>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                Evaluamos el estado real de tu investigación sin ningún costo. Revisamos la formulación del problema, coherencia de variables, matriz de consistencia, base de datos estadística o las observaciones de tu jurado.
              </p>

              {/* Puntos Clave de Confianza: Grid responsivo de 1 col en móvil, 3 col en tablet, 1 col en desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 sm:gap-3 pt-1">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="w-9 h-9 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center text-base shrink-0 border border-blue-900/50">
                    <i className="bi bi-clock-history"></i>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Respuesta Rápida</h4>
                    <p className="text-xs sm:text-sm font-semibold text-white leading-snug">En menos de 15 min vía WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="w-9 h-9 rounded-lg bg-teal-950 text-teal-400 flex items-center justify-center text-base shrink-0 border border-teal-900/50">
                    <i className="bi bi-mortarboard-fill"></i>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Estándares UNA Puno</h4>
                    <p className="text-xs sm:text-sm font-semibold text-white leading-snug">Alineado a las 4 áreas académicas</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="w-9 h-9 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center text-base shrink-0 border border-emerald-900/50">
                    <i className="bi bi-shield-lock-fill"></i>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Confidencialidad Total</h4>
                    <p className="text-xs sm:text-sm font-semibold text-white leading-snug">Protección estricta de tus datos</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Columna Derecha: Formulario Limpio y Específico */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 shadow-2xl border border-slate-100">
              {submitted ? (
                <div className="text-center py-8 sm:py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center text-3xl font-bold">
                    <i className="bi bi-check-lg"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">¡Solicitud Registrada con Éxito!</h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                    Te estamos redirigiendo a WhatsApp con los datos de tu consulta para que un asesor te asista al instante.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  
                  <div className="pb-1 border-b border-slate-100 mb-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                      Datos de tu Proyecto
                    </h3>
                    <p className="text-xs text-slate-500">
                      Completa los campos para asignarte al especialista de tu área.
                    </p>
                  </div>

                  {/* Fila 1: Nombre y WhatsApp */}
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm min-h-[44px] focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp / Celular *
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="Ej. +51 987 654 321"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm min-h-[44px] focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  {/* Fila 2: Área UNA Puno y Nivel Académico */}
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Área Académica (UNA Puno)
                      </label>
                      <select
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm min-h-[44px] focus:outline-none focus:border-blue-600 bg-white cursor-pointer"
                      >
                        <option value="Ciencias de las Ingenierías">Ciencias de las Ingenierías</option>
                        <option value="Ciencias Biomédicas">Ciencias Biomédicas</option>
                        <option value="Ciencias Sociales">Ciencias Sociales</option>
                        <option value="Ciencias Empresariales">Ciencias Empresariales</option>
                        <option value="Otra Universidad / Institución">Otra Universidad / Institución</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nivel de Grado
                      </label>
                      <select
                        name="nivel"
                        value={formData.nivel}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm min-h-[44px] focus:outline-none focus:border-blue-600 bg-white cursor-pointer"
                      >
                        <option value="Pregrado / Tesis (UNA Puno)">Pregrado / Tesis Tradicional</option>
                        <option value="Titulación por Artículo Científico">Titulación por Artículo Científico</option>
                        <option value="Segunda Especialidad">Segunda Especialidad</option>
                        <option value="Maestría (EPG UNA Puno)">Maestría (Posgrado)</option>
                        <option value="Doctorado (PhD)">Doctorado (PhD)</option>
                      </select>
                    </div>
                  </div>

                  {/* Fila 3: Servicio Requerido y Escuela Profesional */}
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Servicio Principal
                      </label>
                      <select
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm min-h-[44px] focus:outline-none focus:border-blue-600 bg-white cursor-pointer"
                      >
                        <option value="Análisis Estadístico (SPSS / R / Python / Stata)">Análisis Estadístico (SPSS / R / Python / Stata)</option>
                        <option value="Levantamiento de Observaciones del Jurado">Levantamiento de Observaciones del Jurado</option>
                        <option value="Perfil o Plan de Tesis Aprobado">Perfil o Plan de Tesis Aprobado</option>
                        <option value="Tesis Completa Integral">Tesis Completa Integral</option>
                        <option value="Artículo Científico (Scopus / WoS)">Artículo Científico (Scopus / WoS)</option>
                        <option value="Redacción y Formato (Word / LaTeX)">Redacción y Formato (Word / LaTeX)</option>
                        <option value="Parafraseo y Corrección de Estilo">Parafraseo y Corrección de Estilo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Facultad o Escuela Profesional
                      </label>
                      <input
                        type="text"
                        name="escuela"
                        value={formData.escuela}
                        onChange={handleChange}
                        placeholder="Ej. Ing. Civil, Medicina, Contabilidad..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm min-h-[44px] focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  {/* Mensaje o Descripción */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Describe brevemente qué necesitas o en qué etapa estás
                    </label>
                    <textarea
                      name="mensaje"
                      rows="3"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Ej. Tengo mi borrador con observaciones del dictaminante / Requiero procesar encuestas en SPSS y redactar resultados en APA 7ma..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 resize-none transition-all"
                    ></textarea>
                  </div>

                  {/* Botón de Envío */}
                  <button
                    type="submit"
                    className="contact-submit-btn w-full py-3.5 px-6 rounded-xl font-bold text-white flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm sm:text-base min-h-[48px]"
                  >
                    <i className="bi bi-whatsapp text-lg"></i>
                    <span>Enviar y Solicitar Diagnóstico Gratuito</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-0.5">
                    <i className="bi bi-shield-check text-emerald-600 mr-1"></i>
                    Tus datos son 100% confidenciales. Revisión preliminar sin costo ni compromiso.
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
