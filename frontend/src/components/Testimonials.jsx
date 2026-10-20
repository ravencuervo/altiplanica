import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Dra. Patricia Quispe M.',
    degree: 'Doctorado en Ciencias de la Educación',
    service: 'Tesis Doctoral + Modelo SmartPLS + Artículo Scopus Q2',
    comment: 'Llegué con mi tesis estancada en el análisis multivariado. El equipo no solo procesó los datos en SmartPLS con una precisión impecable, sino que me preparó con cada argumento para defender las hipótesis ante el jurado doctoral. ¡Aprobé con felicitación pública!',
    rating: 5,
    tag: 'Doctorado'
  },
  {
    name: 'Mg. Carlos Mendoza V.',
    degree: 'Maestría en Gestión Pública',
    service: 'Perfil de Proyecto + Estadística en SPSS',
    comment: 'Tenía observaciones severas de dos jurados que no se ponían de acuerdo. TesisAltiplánica me estructuró una matriz de consistencia impecable y la contrastación no paramétrica en SPSS. Levantaron las observaciones en menos de 10 días.',
    rating: 5,
    tag: 'Maestría'
  },
  {
    name: 'Lic. Claudia Flores T.',
    degree: 'Segunda Especialidad en Centro Quirúrgico',
    service: 'Normas Vancouver + Bioestadística',
    comment: 'Por mis turnos de hospital no tenía tiempo para formatear bajo normas Vancouver ni interpretar los odds ratios. Me explicaron todo por Meet con una paciencia increíble y el reporte de Turnitin salió en 4%. 100% recomendados.',
    rating: 5,
    tag: '2da Especialidad'
  },
  {
    name: 'Ing. Rodrigo Paredes C.',
    degree: 'Título Profesional en Ingeniería Civil',
    service: 'Tesis de Pregrado Integral + Diapositivas',
    comment: 'Excelente asesoría desde el perfil hasta la sustentación. Las diapositivas fueron ejecutivas y el simulacro de preguntas me salvó, porque el presidente de mesa me hizo 3 de las preguntas que practicamos exactamente.',
    rating: 5,
    tag: 'Pregrado'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="testimonials-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100">
            Casos de Éxito
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Egresados y Graduados que Confiaron en Nosotros
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Más de 1,200 profesionales ya cuentan con su título, segunda especialidad, grado de magíster o doctor.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-7">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400 text-sm">
                    {[...Array(item.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-indigo-800">
                    {item.tag}
                  </span>
                </div>

                <p className="testimonial-quote text-sm sm:text-base mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.degree}</p>
                  <p className="text-[11px] text-indigo-600 font-semibold mt-0.5">{item.service}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg flex-shrink-0">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
