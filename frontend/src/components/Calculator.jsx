import React, { useState } from 'react';
import './Calculator.css';

const serviceOptions = [
  { id: 'tesis_completa', name: 'Desarrollo Integral de Tesis (Todo Incluido)', basePrice: 1200, time: '4-8 semanas', installments: 4 },
  { id: 'estadistica', name: 'Análisis Estadístico + Interpretación (SPSS / R)', basePrice: 450, time: '5-10 días', installments: 2 },
  { id: 'perfil', name: 'Perfil / Proyecto de Investigación', basePrice: 500, time: '2-3 semanas', installments: 2 },
  { id: 'articulo', name: 'Artículo Científico (Scopus / WoS / SciELO)', basePrice: 900, time: '3-6 semanas', installments: 3 },
  { id: 'formato', name: 'Formateo (APA/Vancouver) + Reporte Turnitin', basePrice: 250, time: '3-5 días', installments: 1 },
  { id: 'observaciones', name: 'Levantamiento de Observaciones de Jurado', basePrice: 380, time: '4-8 días', installments: 2 },
];

const levelMultipliers = {
  pregrado: { label: 'Pregrado / Licenciatura', multiplier: 1.0 },
  especialidad: { label: 'Segunda Especialidad', multiplier: 1.15 },
  maestria: { label: 'Maestría (Posgrado)', multiplier: 1.35 },
  doctorado: { label: 'Doctorado (PhD)', multiplier: 1.8 },
};

const urgencyMultipliers = {
  standard: { label: 'Tiempo Estándar', multiplier: 1.0 },
  rapido: { label: 'Prioritario (Acelerado)', multiplier: 1.15 },
  urgente: { label: 'Urgente / Fecha Límite Próxima', multiplier: 1.3 },
};

export default function Calculator() {
  const [level, setLevel] = useState('pregrado');
  const [service, setService] = useState('estadistica');
  const [urgency, setUrgency] = useState('standard');
  const [area, setArea] = useState('Salud / Medicina / Enfermería');
  const [currency, setCurrency] = useState('PEN');

  const selectedService = serviceOptions.find(s => s.id === service) || serviceOptions[0];
  const levelData = levelMultipliers[level];
  const urgencyData = urgencyMultipliers[urgency];

  const rawPEN = Math.round(selectedService.basePrice * levelData.multiplier * urgencyData.multiplier);
  const estimatedPrice = currency === 'PEN' ? rawPEN : Math.round(rawPEN / 3.75);
  const currencySymbol = currency === 'PEN' ? 'S/' : '$';
  const installmentCount = selectedService.installments || 2;
  const installmentAmount = Math.round(estimatedPrice / installmentCount);

  const getWhatsAppMessage = () => {
    const text = `Hola TesisAltiplánica, he calculado mi cotización en su web:%0A` +
      `- Nivel: ${levelData.label}%0A` +
      `- Servicio: ${selectedService.name}%0A` +
      `- Especialidad/Área: ${area}%0A` +
      `- Plazo: ${urgencyData.label}%0A` +
      `- Estimado web: ${currencySymbol} ${estimatedPrice} ${currency}%0A` +
      `- Modalidad: ${installmentCount > 1 ? `${installmentCount} cuotas de aprox ${currencySymbol} ${installmentAmount}` : 'Pago único'}%0A%0A` +
      `¿Podrían brindarme los detalles y el diagnóstico de mi proyecto?`;
    return `https://wa.me/51999999999?text=${text}`;
  };

  return (
    <section id="cotizador" className="calculator-section py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-950 border border-teal-800 px-3.5 py-1.5 rounded-full">
              Transparencia Total
            </span>

            {/* Currency Switcher */}
            <div className="calc-currency-toggle">
              <button
                type="button"
                onClick={() => setCurrency('PEN')}
                className={`calc-currency-btn ${currency === 'PEN' ? 'active' : 'inactive'}`}
              >
                PEN (S/)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`calc-currency-btn ${currency === 'USD' ? 'active' : 'inactive'}`}
              >
                USD ($)
              </button>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Calcula tu Cotización Personalizada
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Selecciona tu grado académico, el tipo de servicio y el tiempo estimado para obtener una referencia inmediata.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Options Panel (Left) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            
            {/* 1. Academic Level */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                1. Nivel Académico
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {Object.entries(levelMultipliers).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setLevel(key)}
                    className={`calc-option-btn p-3 rounded-xl text-xs sm:text-sm font-semibold text-left border ${
                      level === key ? 'active' : 'inactive'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Service Type */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
                2. Servicio Requerido
              </label>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setService(opt.id)}
                    className={`calc-option-btn p-3 rounded-xl text-xs sm:text-sm font-semibold text-left border flex flex-col justify-between ${
                      service === opt.id ? 'active' : 'inactive'
                    }`}
                  >
                    <span>{opt.name}</span>
                    <span className="text-[11px] opacity-75 mt-1">Tiempo ref: {opt.time}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Area / Carrera & Plazo */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  3. Área o Carrera
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-600"
                >
                  <option value="Salud / Medicina / Enfermería">Ciencias de la Salud / Medicina</option>
                  <option value="Ingeniería y Tecnología">Ingenierías y Tecnología</option>
                  <option value="Educación y Humanidades">Educación y Humanidades</option>
                  <option value="Derecho y Ciencias Políticas">Derecho y Ciencias Políticas</option>
                  <option value="Administración, Contabilidad y Negocios">Gestión, Negocios y Economía</option>
                  <option value="Ciencias Sociales y Psicología">Ciencias Sociales y Psicología</option>
                  <option value="Otra Especialidad">Otra Especialidad</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  4. Urgencia / Plazo
                </label>
                <select
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-600"
                >
                  {Object.entries(urgencyMultipliers).map(([key, item]) => (
                    <option key={key} value={key}>{item.label}</option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Results Summary Box (Right) */}
          <div className="calc-result-card lg:col-span-5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-700 mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Resumen Estimado</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700">
                  Sin Compromiso
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-xs sm:text-sm text-slate-300">
                  <span className="text-slate-400">Nivel académico:</span>
                  <span className="font-semibold text-white">{levelData.label}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm text-slate-300">
                  <span className="text-slate-400">Servicio:</span>
                  <span className="font-semibold text-white text-right max-w-[200px]">{selectedService.name}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm text-slate-300">
                  <span className="text-slate-400">Área:</span>
                  <span className="font-semibold text-white">{area}</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm text-slate-300">
                  <span className="text-slate-400">Plazo aproximado:</span>
                  <span className="font-semibold text-teal-400">{selectedService.time}</span>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-center mb-6">
                <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">Inversión Estimada Desde</p>
                <div className="flex items-baseline justify-center gap-1.5 mt-2">
                  <span className="text-2xl font-bold text-blue-400">{currencySymbol}</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{estimatedPrice}</span>
                  <span className="text-xs text-slate-400">{currency}*</span>
                </div>

                {/* Installment breakdown callout */}
                {installmentCount > 1 && (
                  <div className="calc-installment-box flex items-center justify-center gap-2 text-xs text-teal-300">
                    <i className="bi bi-wallet2 text-teal-400"></i>
                    <span>O en <strong>{installmentCount} cuotas</strong> de aprox <strong>{currencySymbol} {installmentAmount}</strong> según avances</span>
                  </div>
                )}

                <p className="text-[11px] text-slate-400 mt-2">
                  *Precio referencial sujeto a evaluación de la guía de titulación de tu universidad. Incluye facilidades de pago por hitos aprobados.
                </p>
              </div>

              {/* Included perks */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <i className="bi bi-shield-check text-emerald-400 text-sm"></i>
                  <span>Reporte de originalidad Turnitin incluido</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <i className="bi bi-camera-video text-blue-400 text-sm"></i>
                  <span>Explicación didáctica por videollamada</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <i className="bi bi-arrow-repeat text-slate-400 text-sm"></i>
                  <span>Correcciones de observaciones sin costo extra</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quote Button */}
            <a
              href={getWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-sm sm:text-base text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
            >
              <i className="bi bi-whatsapp text-xl"></i>
              <span>Enviar esta Cotización por WhatsApp</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
