import React, { useState, useEffect } from 'react';
import './TrackingPortal.css';

// Base de datos de facultades y escuelas de la UNA Puno
const UNA_FACULTADES_PREGRADO = [
  {
    facultad: 'Facultad de Ingeniería Civil y Arquitectura',
    escuelas: ['Ingeniería Civil', 'Arquitectura y Urbanismo']
  },
  {
    facultad: 'Facultad de Medicina Humana',
    escuelas: ['Medicina Humana']
  },
  {
    facultad: 'Facultad de Ciencias Jurídicas y Políticas',
    escuelas: ['Derecho']
  },
  {
    facultad: 'Facultad de Ciencias Contables y Administrativas',
    escuelas: ['Ciencias Contables', 'Administración']
  },
  {
    facultad: 'Facultad de Ingeniería Estadística e Informática',
    escuelas: ['Ingeniería Estadística e Informática']
  },
  {
    facultad: 'Facultad de Ciencias de la Educación',
    escuelas: ['Educación Secundaria', 'Educación Primaria', 'Educación Inicial']
  },
  {
    facultad: 'Facultad de Ciencias Sociales',
    escuelas: ['Antropología', 'Sociología', 'Trabajo Social', 'Ciencias de la Comunicación Social']
  },
  {
    facultad: 'Facultad de Enfermería',
    escuelas: ['Enfermería']
  }
];

const EPG_PROGRAMAS_POSGRADO = {
  maestria: [
    'Maestría en Ciencias de la Ingeniería Civil',
    'Maestría en Educación con Mención en Didáctica de la Educación Superior',
    'Maestría en Contabilidad y Administración',
    'Maestría en Salud Pública',
    'Maestría en Informática y Tecnologías de la Información',
    'Maestría en Economía y Políticas Públicas'
  ],
  doctorado: [
    'Doctorado en Ciencia, Tecnología y Medio Ambiente',
    'Doctorado en Educación',
    'Doctorado en Ciencias Contables y Administrativas',
    'Doctorado en Derecho',
    'Doctorado en Ciencias de la Salud'
  ],
  segunda_especialidad: [
    'Segunda Especialidad en Medicina y Cirugía',
    'Segunda Especialidad en Enfermería en Cuidados Intensivos',
    'Segunda Especialidad en Gestión y Políticas Educativas'
  ]
};

// Catálogo de Trabajos / Servicios en lenguaje sencillo para el estudiante
const SERVICIOS_CATALOGO = {
  formato2: {
    id: 'formato2',
    nombre: 'Formateo de Tesis (Formato 2.0 de Repositorio)',
    tag: 'Trámite de Diploma UNA Puno',
    badge: 'MÁS SOLICITADO',
    icono: 'bi-file-earmark-check-fill',
    resumen: 'Adecuamos tu tesis aprobada por jurados al Formato 2.0 reglamentario de la UNA Puno para que el repositorio institucional no te la observe y saques tu diploma rápido.',
    caracteristicas: [
      'Plantilla oficial Formato 2.0 UNA Puno',
      'Márgenes 3.0 cm x 2.5 cm y carátula reglamentaria',
      'Numeración preliminar en romanos y cuerpo en arábigos',
      'Resumen bilingüe (español y quechua o inglés)',
      'Conversión final a PDF/A Renati / SUNEDU'
    ],
    pasos: [
      {
        id: 1,
        titulo: 'Paso 1: Sube tu Tesis en Word (.docx)',
        subtitulo: 'Borrador aprobado por tus jurados',
        descripcion: 'Sube tu documento Word (.docx) tal como te lo aprobaron tus jurados. Tu asesor revisará márgenes, tipo de letra, carátula, resumen bilingüe y anexos para adaptarla a la directiva oficial.',
        estado: 'requiere_archivo',
        archivo: null,
        monto: 0
      },
      {
        id: 2,
        titulo: 'Paso 2: Adecuación a la Plantilla Formato 2.0 UNA Puno',
        subtitulo: 'Márgenes, carátula reglamentaria, numeración y resumen bilingüe',
        descripcion: 'Tu asesor diagramará todo tu documento según la directiva oficial de la UNA Puno para evitar observaciones del repositorio institucional.',
        estado: 'pendiente',
        archivo: 'Tesis_Formato_2.0_Oficial_UNAP.docx',
        monto: 220
      },
      {
        id: 3,
        titulo: 'Paso 3: Tesis Lista en Formato 2.0 y PDF/A SUNEDU',
        subtitulo: 'Expedición de Diploma de Título Profesional',
        descripcion: 'Descarga tu tesis en Word editable y versión PDF/A con metadatos lista para subir al repositorio institucional y tramitar tu título.',
        estado: 'pendiente',
        archivo: 'Tesis_Formato_2.0_Aprobado_SUNEDU.pdf',
        monto: 0
      }
    ]
  },
  pgi: {
    id: 'pgi',
    nombre: 'Preparar mi Sustentación',
    tag: 'Diapositivas & Balotario',
    icono: 'bi-mortarboard-fill',
    resumen: 'Te preparamos con diapositivas de alto impacto, preguntas del jurado y simulacro para aprobar con distinción.',
    caracteristicas: [
      'Borrador final de tesis revisado',
      'Diapositivas PPT estructuradas (22 láminas)',
      'Balotario con posibles preguntas del jurado',
      'Simulacro y ensayo de sustentación'
    ],
    pasos: [
      {
        id: 1,
        titulo: 'Paso 1: Tu Borrador Final Completo',
        descripcion: 'Revisión final de coherencia, matriz de consistencia y anexos listos para jurados.',
        estado: 'completado',
        archivo: 'Tesis_Final_Corregida.docx',
        monto: 0
      },
      {
        id: 2,
        titulo: 'Paso 2: Diapositivas PPT y Preguntas del Jurado',
        descripcion: 'Presentación ejecutiva en PowerPoint / Canva y balotario de 25 preguntas frecuentes.',
        estado: 'bloqueado',
        archivo: 'Diapositivas_Sustentacion_Oficial.pptx',
        monto: 280
      },
      {
        id: 3,
        titulo: 'Paso 3: Ensayo y Simulación de Sustentación',
        descripcion: 'Sesión virtual en vivo para practicar tu defensa ante el jurado calificador.',
        estado: 'pendiente',
        archivo: null,
        monto: 200
      }
    ]
  },
  articulos: {
    id: 'articulos',
    nombre: 'Artículo Científico',
    tag: 'Titulación & Publicación',
    icono: 'bi-journal-bookmark-fill',
    resumen: 'Convertimos tu tesis en artículo científico para titularte por artículo en la UNA Puno o publicar en revistas indexadas.',
    caracteristicas: [
      'Modalidad de titulación de pregrado',
      'Revistas científicas de la UNA Puno (OJS)',
      'Revistas indexadas Scopus / WoS / SciELO',
      'Estructura IMRyD y figuras científicas'
    ],
    pasos: [
      {
        id: 1,
        titulo: 'Paso 1: Elección de la Revista Diana',
        descripcion: 'Selección según las directrices de tu escuela o catálogo Scopus / Web of Science.',
        estado: 'completado',
        archivo: 'Ficha_Revista_Aprobada.pdf',
        monto: 0
      },
      {
        id: 2,
        titulo: 'Paso 2: Redacción Científica IMRyD',
        descripcion: 'Redacción rigurosa, tablas y figuras vectoriales en el formato exacto de la revista.',
        estado: 'bloqueado',
        archivo: 'Articulo_Cientifico_Final.docx',
        monto: 350
      },
      {
        id: 3,
        titulo: 'Paso 3: Envío Editorial y Respuesta a Revisores',
        descripcion: 'Subida a la plataforma editorial y cartas de respuesta a las observaciones de los pares.',
        estado: 'pendiente',
        archivo: null,
        monto: 250
      }
    ]
  },
  estadistica: {
    id: 'estadistica',
    nombre: 'Procesar mi Estadística',
    tag: 'Análisis de Datos',
    icono: 'bi-bar-chart-fill',
    resumen: 'Limpiamos tus encuestas o datos, corremos pruebas de hipótesis en SPSS/R y te entregamos tablas en normas APA.',
    caracteristicas: [
      'Depuración de base de datos en Excel y SPSS',
      'Análisis descriptivo y pruebas de normalidad',
      'Pruebas de hipótesis (t-Student, Chi-cuadrado, etc.)',
      'Tablas y gráficos listos en normas APA 7'
    ],
    pasos: [
      {
        id: 1,
        titulo: 'Paso 1: Matriz de Datos Limpia en SPSS',
        descripcion: 'Limpieza de inconsistencias, codificación de variables y matriz depurada.',
        estado: 'completado',
        archivo: 'Matriz_Datos_Depurada.sav',
        monto: 0
      },
      {
        id: 2,
        titulo: 'Paso 2: Pruebas de Hipótesis y Tablas APA 7',
        descripcion: 'Informe estadístico interpretado con tablas y gráficos en normas APA 7.',
        estado: 'bloqueado',
        archivo: 'Informe_Estadistico_APA7.docx',
        monto: 320
      }
    ]
  },
  observaciones: {
    id: 'observaciones',
    nombre: 'Corregir a mis Jurados',
    tag: 'Dictamen de Jurados',
    icono: 'bi-tools',
    resumen: 'Levantamos todas las observaciones de tus tres jurados de tesis con control de cambios y carta de descargo.',
    caracteristicas: [
      'Matriz de observaciones punto por punto',
      'Correcciones en Word con control de cambios',
      'Carta formal de descargo para la facultad',
      'Garantía de visto bueno de jurados'
    ],
    pasos: [
      {
        id: 1,
        titulo: 'Paso 1: Matriz de Observaciones',
        descripcion: 'Desglose ordenado de las observaciones emitidas por presidente, primer y segundo miembro.',
        estado: 'completado',
        archivo: 'Matriz_Observaciones_Jurados.xlsx',
        monto: 0
      },
      {
        id: 2,
        titulo: 'Paso 2: Tesis Corregida y Carta de Descargo',
        descripcion: 'Documento Word con correcciones visibles y carta formal dirigida al decanato.',
        estado: 'bloqueado',
        archivo: 'Tesis_Corregida_Control_Cambios.docx',
        monto: 300
      }
    ]
  },
  proyecto: {
    id: 'proyecto',
    nombre: 'Proyecto / Plan de Tesis',
    tag: 'Empezar desde Cero',
    icono: 'bi-clipboard2-check-fill',
    resumen: 'Elaboramos tu plan de tesis completo según el reglamento de grados de tu facultad para su aprobación en consejo.',
    caracteristicas: [
      'Planteamiento del problema y justificación',
      'Marco teórico con antecedentes de últimos 5 años',
      'Metodología, población, muestra e instrumentos',
      'Matriz de consistencia y operacionalización'
    ],
    pasos: [
      {
        id: 1,
        titulo: 'Paso 1: Problema, Objetivos y Justificación',
        descripcion: 'Formulación del problema general y específicos con justificación teórica y práctica.',
        estado: 'completado',
        archivo: 'Capitulo_1_Problema.docx',
        monto: 0
      },
      {
        id: 2,
        titulo: 'Paso 2: Marco Teórico y Antecedentes',
        descripcion: 'Bases teóricas y antecedentes nacionales e internacionales citados en APA / Vancouver.',
        estado: 'bloqueado',
        archivo: 'Capitulo_2_Marco_Teorico.docx',
        monto: 250
      },
      {
        id: 3,
        titulo: 'Paso 3: Metodología y Matriz Aprobada',
        descripcion: 'Diseño metodológico, instrumentos y plan completo listo para trámite.',
        estado: 'pendiente',
        archivo: null,
        monto: 250
      }
    ]
  }
};

export default function TrackingPortal({ onBackToLanding }) {
  // Estado de la sesión del usuario
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  // Modo de visualización: 'nuevo' (alumno desde cero que sube su tesis) o 'en_proceso' (alumno con entrega para pagar y descargar)
  const [studentMode, setStudentMode] = useState('nuevo');

  // Estado del flujo inicial de Formato 2.0 (Alumno Nuevo)
  const [uploadedThesisFile, setUploadedThesisFile] = useState(null);
  const [advisorFormattingDone, setAdvisorFormattingDone] = useState(false);
  const [cuota2Paid, setCuota2Paid] = useState(false);

  // Servicio activo seleccionado. Por defecto comenzamos con Formateo de Tesis (Formato 2.0 de Repositorio)
  const [activeServiceId, setActiveServiceId] = useState('formato2');

  // Pestaña activa del Navbar interno: 'avances' | 'calendario' | 'pagos' | 'perfil'
  const [activeTab, setActiveTab] = useState('avances');

  // Velocidad de entrega
  const [prioridadExpress, setPrioridadExpress] = useState(false);

  // Datos personales de registro (Paso 1)
  const [personalData, setPersonalData] = useState({
    nombres: 'Alejandro',
    apellidos: 'Quispe Mamani',
    whatsapp: '951832940',
    email: 'alejandro.quispe@unap.edu.pe',
    password: ''
  });

  // Datos institucionales del Onboarding (Paso 2 - Exclusivo UNA Puno)
  const [institutionalData, setInstitutionalData] = useState({
    grado: 'pregrado', // 'pregrado' | 'posgrado'
    facultad: UNA_FACULTADES_PREGRADO[0].facultad,
    escuela: UNA_FACULTADES_PREGRADO[0].escuelas[0],
    nivelPosgrado: 'maestria', // 'maestria' | 'doctorado' | 'segunda_especialidad'
    programaPosgrado: EPG_PROGRAMAS_POSGRADO.maestria[0],
    expediente: 'EXP-2026-0814'
  });

  // Pasos dinámicos (permite desbloquear tras pagar)
  const [serviciosState, setServiciosState] = useState(SERVICIOS_CATALOGO);

  // Modal de Pago
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [activePaymentStep, setActivePaymentStep] = useState(null);
  const [paymentTab, setPaymentTab] = useState('yape'); // 'yape' | 'bbva'
  const [voucherFile, setVoucherFile] = useState(null);
  const [operacionNumber, setOperacionNumber] = useState('');
  const [paymentApprovedAlert, setPaymentApprovedAlert] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  // Sincronizar ruta en barra de direcciones (/login vs /panel)
  useEffect(() => {
    const isPanel = window.location.pathname === '/panel';
    const isAuth = sessionStorage.getItem('tesis_auth') === 'true';

    if (isPanel && isAuth) {
      setIsAuthenticated(true);
      setOnboardingCompleted(true);
    } else if (isPanel && !isAuth) {
      window.history.replaceState({}, '', '/login');
      setIsAuthenticated(false);
    } else if (window.location.pathname === '/login' && isAuth) {
      setIsAuthenticated(true);
      setOnboardingCompleted(true);
      window.history.replaceState({}, '', '/panel');
    }
  }, []);

  // Manejo de copiado al portapapeles
  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  // Autenticación con Google
  const handleGoogleSignIn = () => {
    setPersonalData({
      nombres: 'Alejandro',
      apellidos: 'Quispe Mamani',
      whatsapp: '951832940',
      email: 'alejandro.quispe.m@gmail.com',
      password: 'oauth_google_verified'
    });
    setIsAuthenticated(true);
    setOnboardingCompleted(false);
    setActiveServiceId('formato2');
    setStudentMode('nuevo');
    sessionStorage.setItem('tesis_auth', 'true');
    window.history.pushState({}, '', '/panel');
  };

  // Manejo de Cuentas Demo Rápidas
  const handleDemoLogin = (type) => {
    setPersonalData({
      nombres: 'Alejandro',
      apellidos: 'Quispe Mamani',
      whatsapp: '951832940',
      email: 'aquispe@unap.edu.pe',
      password: '••••••••'
    });
    setInstitutionalData({
      grado: 'pregrado',
      facultad: 'Facultad de Ingeniería Civil y Arquitectura',
      escuela: 'Ingeniería Civil',
      nivelPosgrado: 'maestria',
      programaPosgrado: '',
      expediente: 'EXP-2026-0814'
    });
    setActiveServiceId('formato2');

    if (type === 'nuevo') {
      // Estado Alumno Nuevo desde cero (Sube su tesis en Word)
      setStudentMode('nuevo');
      setUploadedThesisFile(null);
      setAdvisorFormattingDone(false);
      setCuota2Paid(false);
    } else {
      // Estado Alumno con Entrega Lista (Prueba pago y descarga)
      setStudentMode('en_proceso');
      setUploadedThesisFile({
        name: 'Tesis_Alejandro_Quispe_Aprobada.docx',
        size: '3.4 MB',
        date: 'Hace unos instantes'
      });
      setAdvisorFormattingDone(true);
      setCuota2Paid(false);
    }

    setIsAuthenticated(true);
    setOnboardingCompleted(true);
    sessionStorage.setItem('tesis_auth', 'true');
    window.history.pushState({}, '', '/panel');
  };

  // Cerrar Sesión
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('tesis_auth');
    window.history.pushState({}, '', '/login');
  };

  // Salir a la Web Principal
  const handleExitToLanding = () => {
    sessionStorage.removeItem('tesis_auth');
    onBackToLanding();
  };

  // Enviar formulario Registro Personal (Paso 1)
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setOnboardingCompleted(false);
    setActiveServiceId('formato2');
    setStudentMode('nuevo');
    sessionStorage.setItem('tesis_auth', 'true');
    window.history.pushState({}, '', '/panel');
  };

  // Enviar formulario Login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setOnboardingCompleted(true);
    setActiveServiceId('formato2');
    setStudentMode('nuevo');
    sessionStorage.setItem('tesis_auth', 'true');
    window.history.pushState({}, '', '/panel');
  };

  // Completar Onboarding Institucional (Paso 2)
  const handleOnboardingSubmit = (e) => {
    e.preventDefault();
    setOnboardingCompleted(true);
  };

  // Abrir Modal de Pagos para un Paso Bloqueado
  const handleOpenPayment = (paso) => {
    setActivePaymentStep(paso);
    setPaymentModalOpen(true);
    setPaymentApprovedAlert(false);
  };

  // Simular Aprobación de Pago
  const handleSimulatePaymentApproval = () => {
    setCuota2Paid(true);

    if (activePaymentStep && activeServiceId) {
      setServiciosState(prev => {
        const currentService = prev[activeServiceId];
        const updatedPasos = currentService.pasos.map(p => {
          if (p.id === activePaymentStep.id) {
            return { ...p, estado: 'completado' };
          }
          return p;
        });
        return {
          ...prev,
          [activeServiceId]: {
            ...currentService,
            pasos: updatedPasos
          }
        };
      });
    }

    setPaymentApprovedAlert(true);
    setTimeout(() => {
      setPaymentModalOpen(false);
      setPaymentApprovedAlert(false);
    }, 2000);
  };

  const servicioActual = activeServiceId ? serviciosState[activeServiceId] : null;

  // ==========================================
  // VISTA 1: AUTENTICACIÓN (LOGIN / REGISTRO)
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="portal-root flex flex-col justify-center items-center py-12 px-4 sm:px-6">
        {/* Barra superior de retorno */}
        <div className="w-full max-w-md mb-6 flex items-center">
          <button
            onClick={handleExitToLanding}
            className="text-xs font-bold text-slate-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <i className="bi bi-arrow-left"></i> Volver a la página principal
          </button>
        </div>

        {/* Tarjeta de Autenticación */}
        <div className="portal-card w-full max-w-md p-6 sm:p-8 bg-white border border-slate-200 shadow-sm">
          {/* Logo Oficial y Encabezado Idéntico a la Imagen */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center gap-3.5 mb-2.5">
              <img
                src="/images/logos/tesis_logo.svg"
                alt="TesisAltiplánica Logo"
                className="h-14 sm:h-16 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col text-left">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 leading-none">
                  Tesis<span className="text-[#0052ff]">Altiplánica</span>
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.14em] font-black text-slate-500 mt-1.5">
                  CONSULTORÍA DE TESIS & ESTADÍSTICA
                </span>
              </div>
            </div>
          </div>

          {/* Selector Login / Registro (Pestañas de alternancia) */}
          <div className="flex border-b border-slate-200 mb-5">
            <button
              type="button"
              onClick={() => setAuthMode('login')}
              className={`flex-1 pb-2.5 text-xs font-bold text-center border-b-2 transition-all cursor-pointer ${
                authMode === 'login'
                  ? 'border-blue-700 text-blue-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Iniciar Sesión
            </button>
            <button
              type="button"
              onClick={() => setAuthMode('register')}
              className={`flex-1 pb-2.5 text-xs font-bold text-center border-b-2 transition-all cursor-pointer ${
                authMode === 'register'
                  ? 'border-blue-700 text-blue-700'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Crear Cuenta
            </button>
          </div>

          {/* Contenedor de Google + Separador con Transición Suave */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              authMode === 'login'
                ? 'max-h-40 opacity-100 scale-100 mb-4'
                : 'max-h-0 opacity-0 scale-95 pointer-events-none mb-0'
            }`}
          >
            {/* Botón de Google */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full btn-google py-2.5 px-4 rounded-xl flex items-center justify-center gap-3 text-xs font-bold mb-4 shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Continuar con Google</span>
            </button>

            {/* Separador Perfectamente Centrado */}
            <div className="relative my-3">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-center">
                <span className="bg-white px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  o con tu correo
                </span>
              </div>
            </div>
          </div>

          {/* Formulario de Login */}
          {authMode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="ej. aquispe@unap.edu.pe o tu_correo@gmail.com"
                    value={personalData.email}
                    onChange={(e) => setPersonalData({ ...personalData, email: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Contraseña
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <i className="bi bi-key"></i>
                  </span>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    defaultValue="password123"
                    className="w-full bg-white border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer"
              >
                Ingresar al Portal
              </button>

              {/* Demos de acceso rápido */}
              <div className="pt-4 border-t border-slate-100">
                <span className="block text-[11px] font-semibold text-slate-500 mb-2 text-center">
                  Cuentas de prueba rápida:
                </span>
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('nuevo')}
                    className="w-full py-2 px-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-900 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <i className="bi bi-person-fill-add text-blue-700 text-sm"></i>
                    <span>🎓 Alumno Nuevo: Formateo 2.0 (Desde Cero)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDemoLogin('en_proceso')}
                    className="w-full py-2 px-3 bg-slate-50 hover:bg-amber-50 border border-slate-200 text-slate-700 hover:text-amber-900 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="bi bi-box-seam text-amber-600 text-sm"></i>
                    <span>📦 Tesista con Entrega Lista (Probar Pagos)</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            /* Formulario de Registro (Paso 1: Solo Datos Personales) */
            <form onSubmit={handleRegisterSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Nombres
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ej. Juan Carlos"
                    value={personalData.nombres}
                    onChange={(e) => setPersonalData({ ...personalData, nombres: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Apellidos
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ej. Quispe Mamani"
                    value={personalData.apellidos}
                    onChange={(e) => setPersonalData({ ...personalData, apellidos: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  WhatsApp / Celular (Para coordinaciones)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 text-slate-400">
                    <i className="bi bi-whatsapp text-xs text-emerald-600"></i>
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="ej. 951832940"
                    value={personalData.whatsapp}
                    onChange={(e) => setPersonalData({ ...personalData, whatsapp: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  placeholder="ej. mi_correo@gmail.com"
                  value={personalData.email}
                  onChange={(e) => setPersonalData({ ...personalData, email: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Contraseña
                </label>
                <input
                  type="password"
                  required
                  placeholder="Mínimo 6 caracteres"
                  value={personalData.password}
                  onChange={(e) => setPersonalData({ ...personalData, password: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-700"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-colors shadow-sm mt-2 cursor-pointer"
              >
                Continuar al Onboarding Académico <i className="bi bi-arrow-right ml-1"></i>
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // ==========================================
  // VISTA 2: ONBOARDING INSTITUCIONAL (PASO 2)
  // ==========================================
  if (isAuthenticated && !onboardingCompleted) {
    const facultadSeleccionada = UNA_FACULTADES_PREGRADO.find(f => f.facultad === institutionalData.facultad) || UNA_FACULTADES_PREGRADO[0];

    return (
      <div className="portal-root flex flex-col justify-center items-center py-12 px-4 sm:px-6">
        <div className="portal-card w-full max-w-lg p-6 sm:p-8 bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs bg-emerald-50 border border-emerald-200 text-emerald-700 px-2.5 py-0.5 rounded-full font-bold">
              Paso 2 de 2: Ficha Académica
            </span>
            <span className="text-xs text-slate-500">
              Bienvenido, {personalData.nombres}
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight mb-1">
            Configuración de tu Expediente Institucional
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            Selecciona tu grado académico y facultad para estructurar tu cronograma oficial en la UNA Puno.
          </p>

          <form onSubmit={handleOnboardingSubmit} className="space-y-4">
            {/* Selector de Grado: Pregrado o Posgrado */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                ¿Qué grado académico estás tramitando?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setInstitutionalData({ ...institutionalData, grado: 'pregrado' })}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    institutionalData.grado === 'pregrado'
                      ? 'border-blue-700 bg-blue-50 text-blue-950 ring-2 ring-blue-700/20'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-xs text-blue-700">
                    <i className="bi bi-mortarboard text-base"></i> Pregrado / Licenciatura
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Tesis o Artículo para Título Profesional
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setInstitutionalData({ ...institutionalData, grado: 'posgrado' })}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    institutionalData.grado === 'posgrado'
                      ? 'border-emerald-700 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-700/20'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-xs text-emerald-700">
                    <i className="bi bi-award text-base"></i> Posgrado (EPG)
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Maestría, Doctorado o Segunda Especialidad
                  </p>
                </button>
              </div>
            </div>

            {/* Campos condicionales de Pregrado */}
            {institutionalData.grado === 'pregrado' ? (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Facultad (UNA Puno)
                  </label>
                  <select
                    value={institutionalData.facultad}
                    onChange={(e) => {
                      const fac = UNA_FACULTADES_PREGRADO.find(f => f.facultad === e.target.value);
                      setInstitutionalData({
                        ...institutionalData,
                        facultad: e.target.value,
                        escuela: fac ? fac.escuelas[0] : ''
                      });
                    }}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-700"
                  >
                    {UNA_FACULTADES_PREGRADO.map(f => (
                      <option key={f.facultad} value={f.facultad}>
                        {f.facultad}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Escuela Profesional
                  </label>
                  <select
                    value={institutionalData.escuela}
                    onChange={(e) => setInstitutionalData({ ...institutionalData, escuela: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-700"
                  >
                    {facultadSeleccionada.escuelas.map(esc => (
                      <option key={esc} value={esc}>
                        {esc}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              /* Campos condicionales de Posgrado */
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nivel de Posgrado
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['maestria', 'doctorado', 'segunda_especialidad'].map((nivel) => (
                      <button
                        key={nivel}
                        type="button"
                        onClick={() => {
                          setInstitutionalData({
                            ...institutionalData,
                            nivelPosgrado: nivel,
                            programaPosgrado: EPG_PROGRAMAS_POSGRADO[nivel][0]
                          });
                        }}
                        className={`py-1.5 px-2 rounded-lg border text-center text-[11px] font-bold capitalize transition-all cursor-pointer ${
                          institutionalData.nivelPosgrado === nivel
                            ? 'border-emerald-700 bg-emerald-50 text-emerald-800'
                            : 'border-slate-200 bg-white text-slate-600'
                        }`}
                      >
                        {nivel.replace('_', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Programa Específico de Posgrado (EPG UNA Puno)
                  </label>
                  <select
                    value={institutionalData.programaPosgrado}
                    onChange={(e) => setInstitutionalData({ ...institutionalData, programaPosgrado: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-700"
                  >
                    {EPG_PROGRAMAS_POSGRADO[institutionalData.nivelPosgrado].map(prog => (
                      <option key={prog} value={prog}>
                        {prog}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2 mt-4 cursor-pointer"
            >
              <i className="bi bi-check2-circle text-base"></i> Guardar y Abrir Mi Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // =========================================================================
  // PANTALLA 1: CATÁLOGO DE SELECCIÓN DE SERVICIOS ("¿Qué necesitas hoy?")
  // =========================================================================
  if (isAuthenticated && onboardingCompleted && !activeServiceId) {
    return (
      <div className="portal-root pb-16">
        {/* Header superior */}
        <header className="portal-navbar sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/logos/tesis_logo.svg"
              alt="Logo"
              className="h-8 w-auto object-contain shrink-0"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-black tracking-tight text-slate-950 leading-none">
                Tesis<span className="text-[#0052ff]">Altiplánica</span>
              </span>
              <span className="text-[7.5px] uppercase tracking-[0.14em] font-black text-slate-500 mt-0.5">
                CONSULTORÍA DE TESIS & ESTADÍSTICA
              </span>
            </div>
            <span className="text-[10px] bg-slate-100 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full font-mono font-bold ml-1.5">
              {institutionalData.expediente}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-800 hidden sm:inline">
              {personalData.nombres} {personalData.apellidos}
            </span>
            <button
              onClick={handleLogout}
              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg text-sm transition-colors cursor-pointer"
              title="Cerrar Sesión"
            >
              <i className="bi bi-box-arrow-right"></i>
            </button>
          </div>
        </header>

        {/* Contenido Catálogo */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold bg-blue-50 border border-blue-200 text-[#0052ff] px-3 py-1 rounded-full uppercase tracking-wider">
              {institutionalData.grado === 'pregrado' ? institutionalData.escuela : institutionalData.programaPosgrado}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-950 mt-3 mb-2">
              ¿En qué etapa de tu tesis te ayudamos hoy?
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              Elige el trabajo que necesitas para estructurar tus avances y coordinar con tu asesor especialista:
            </p>
          </div>

          {/* Cuadrícula de 6 servicios con iconos Bootstrap y palabras sencillas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.values(serviciosState).map((srv) => (
              <div
                key={srv.id}
                onClick={() => setActiveServiceId(srv.id)}
                className="service-pick-card group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="service-pick-icon mb-0">
                      <i className={`bi ${srv.icono}`}></i>
                    </div>
                    {srv.badge && (
                      <span className="service-badge-popular">
                        {srv.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#0052ff] block mb-1">
                    {srv.tag}
                  </span>
                  <h3 className="text-base font-black text-slate-900 group-hover:text-[#0052ff] transition-colors mb-2">
                    {srv.nombre}
                  </h3>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {srv.resumen}
                  </p>

                  <ul className="space-y-1.5 mb-5 text-[11px] text-slate-700">
                    {srv.caracteristicas.map((c, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <i className="bi bi-check-circle-fill text-emerald-600 text-xs shrink-0"></i>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className="w-full py-2.5 bg-slate-50 group-hover:bg-[#0052ff] text-[#0052ff] group-hover:text-white font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-200 group-hover:border-[#0052ff]"
                >
                  <span>Empezar aquí</span>
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // =========================================================================
  // PANTALLA 2: PANEL DEL TESISTA ACTIVO (CON NAVBAR INTERNO ORGANIZADO)
  // =========================================================================
  return (
    <div className="portal-root pb-16">
      {/* 1. Header superior institucional */}
      <header className="portal-navbar sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={handleExitToLanding}
            className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Volver a la página web"
          >
            <i className="bi bi-arrow-left"></i>
            <span className="hidden sm:inline">Web Principal</span>
          </button>
          <div className="h-5 w-px bg-slate-200"></div>
          <div className="flex items-center gap-2.5">
            <img
              src="/images/logos/tesis_logo.svg"
              alt="Logo"
              className="h-8 w-auto object-contain shrink-0"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-black tracking-tight text-slate-950 leading-none">
                Tesis<span className="text-[#0052ff]">Altiplánica</span>
              </span>
              <span className="text-[7.5px] uppercase tracking-[0.14em] font-black text-slate-500 mt-0.5">
                CONSULTORÍA DE TESIS & ESTADÍSTICA
              </span>
            </div>
            <span className="text-[10px] bg-slate-100 border border-slate-200 text-slate-600 px-2 py-0.5 rounded-full font-mono font-bold ml-1.5">
              {institutionalData.expediente}
            </span>
          </div>
        </div>

        {/* Usuario y Salir */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-xs font-bold text-slate-900">
              {personalData.nombres} {personalData.apellidos}
            </span>
            <span className="text-[10px] text-slate-500">
              {institutionalData.grado === 'pregrado' ? institutionalData.escuela : institutionalData.nivelPosgrado}
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg text-sm transition-colors cursor-pointer"
            title="Cerrar Sesión"
          >
            <i className="bi bi-box-arrow-right"></i>
          </button>
        </div>
      </header>

      {/* 2. Navbar Interno del Panel (Pestañas limpias) */}
      <div className="bg-white border-b border-slate-200 sticky top-[57px] z-20 px-4 sm:px-8 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Pestañas principales */}
          <nav className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveTab('avances')}
              className={`portal-nav-tab ${activeTab === 'avances' ? 'portal-nav-tab-active' : 'portal-nav-tab-inactive'}`}
            >
              <i className="bi bi-kanban"></i>
              <span>Mis Avances</span>
            </button>

            <button
              onClick={() => setActiveTab('calendario')}
              className={`portal-nav-tab ${activeTab === 'calendario' ? 'portal-nav-tab-active' : 'portal-nav-tab-inactive'}`}
            >
              <i className="bi bi-calendar-event"></i>
              <span>Mi Calendario</span>
            </button>

            <button
              onClick={() => setActiveTab('pagos')}
              className={`portal-nav-tab ${activeTab === 'pagos' ? 'portal-nav-tab-active' : 'portal-nav-tab-inactive'}`}
            >
              <i className="bi bi-credit-card"></i>
              <span>Mis Pagos</span>
            </button>

            <button
              onClick={() => setActiveTab('perfil')}
              className={`portal-nav-tab ${activeTab === 'perfil' ? 'portal-nav-tab-active' : 'portal-nav-tab-inactive'}`}
            >
              <i className="bi bi-person-gear"></i>
              <span>Mi Perfil</span>
            </button>
          </nav>

          {/* Botón para cambiar de trabajo o ver catálogo */}
          <button
            onClick={() => setActiveServiceId(null)}
            className="text-xs font-bold text-slate-600 hover:text-[#0052ff] flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <i className="bi bi-arrow-repeat"></i>
            <span className="hidden md:inline">Cambiar de Trabajo</span>
          </button>
        </div>
      </div>

      {/* 3. Contenido Principal según la pestaña activa */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">

        {/* ========================================================
            PESTAÑA 1: "MIS AVANCES" (PASOS DE LA TESIS Y ARCHIVOS)
           ======================================================== */}
        {/* ========================================================
            PESTAÑA 1: "MIS AVANCES" (PASOS DE LA TESIS Y ARCHIVOS)
           ======================================================== */}
        {activeTab === 'avances' && servicioActual && (() => {
          // Determinar los pasos a mostrar (interactivos para Formato 2.0)
          const pasosFormato2 = [
            {
              id: 1,
              titulo: 'Paso 1: Sube tu Tesis en Word (.docx)',
              subtitulo: 'Borrador aprobado por tus jurados de la UNA Puno',
              descripcion: 'Sube tu documento Word (.docx) tal como te lo aprobaron tus jurados. Tu asesor revisará márgenes, tipo de letra, carátula, resumen bilingüe y anexos para adaptarla a la directiva oficial.',
              estado: (studentMode === 'en_proceso' || uploadedThesisFile) ? 'completado' : 'requiere_archivo',
              archivo: uploadedThesisFile ? uploadedThesisFile.name : (studentMode === 'en_proceso' ? 'Tesis_Alejandro_Quispe_Aprobada.docx' : null),
              monto: 0
            },
            {
              id: 2,
              titulo: 'Paso 2: Adecuación a la Plantilla Formato 2.0 UNA Puno',
              subtitulo: 'Márgenes reglamentarios, carátula oficial y resumen bilingüe',
              descripcion: 'Tu asesor diagramará todo tu documento según la directiva oficial de la UNA Puno para evitar observaciones del repositorio institucional.',
              estado: (studentMode === 'nuevo' && !uploadedThesisFile)
                ? 'pendiente'
                : (studentMode === 'nuevo' && !advisorFormattingDone)
                ? 'en_proceso'
                : (cuota2Paid ? 'completado' : 'bloqueado'),
              archivo: 'Tesis_Formato_2.0_Oficial_UNAP.docx',
              monto: 220
            },
            {
              id: 3,
              titulo: 'Paso 3: Tesis Lista en Formato 2.0 y PDF/A SUNEDU',
              subtitulo: 'Expedición de Diploma de Título Profesional',
              descripcion: 'Descarga tu tesis en Word editable y versión PDF/A con metadatos lista para subir al repositorio institucional y tramitar tu título.',
              estado: cuota2Paid ? 'completado' : 'pendiente',
              archivo: 'Tesis_Formato_2.0_Aprobado_SUNEDU.pdf',
              monto: 0
            }
          ];

          const pasosActuales = servicioActual.id === 'formato2' ? pasosFormato2 : servicioActual.pasos;
          const totalPasos = pasosActuales.length;
          const pasosCompletados = pasosActuales.filter(p => p.estado === 'completado').length;
          const porcentajeAvance = Math.round((pasosCompletados / totalPasos) * 100);

          return (
            <div className="space-y-6">
              {/* Banner de Datos del Estudiante */}
              <section className="portal-card p-5 bg-white">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold bg-blue-50 border border-blue-200 text-[#0052ff] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {institutionalData.grado === 'pregrado' ? 'Pregrado • UNA Puno' : `Posgrado • ${institutionalData.nivelPosgrado}`}
                      </span>
                      {prioridadExpress ? (
                        <span className="priority-badge-express text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <i className="bi bi-lightning-charge-fill"></i> Entrega Urgente
                        </span>
                      ) : (
                        <span className="priority-badge-standard text-xs font-bold px-2.5 py-0.5 rounded-full">
                          Entrega Normal
                        </span>
                      )}
                    </div>
                    <h1 className="text-lg sm:text-xl font-black text-slate-900">
                      {personalData.nombres} {personalData.apellidos}
                    </h1>
                    <p className="text-xs text-slate-600 mt-1 flex items-center gap-1.5">
                      <i className="bi bi-mortarboard-fill text-[#0052ff]"></i>
                      <span className="text-slate-800 font-semibold">
                        {institutionalData.grado === 'pregrado'
                          ? `${institutionalData.escuela} — ${institutionalData.facultad}`
                          : institutionalData.programaPosgrado}
                      </span>
                    </p>
                  </div>

                  {/* Selector de Modo (Demo / Inspección) y Velocidad */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs">
                      <span className="text-[10px] font-bold text-slate-500 px-1.5 hidden sm:inline">Modo:</span>
                      <button
                        onClick={() => {
                          setStudentMode('nuevo');
                          setUploadedThesisFile(null);
                          setAdvisorFormattingDone(false);
                          setCuota2Paid(false);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          studentMode === 'nuevo'
                            ? 'bg-white text-blue-700 shadow-xs border border-slate-200'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <i className="bi bi-person-fill-add text-blue-700 mr-1"></i> Alumno Nuevo (Subir Tesis)
                      </button>
                      <button
                        onClick={() => {
                          setStudentMode('en_proceso');
                          setUploadedThesisFile({
                            name: 'Tesis_Alejandro_Quispe_Aprobada.docx',
                            size: '3.4 MB',
                            date: 'Hace unos instantes'
                          });
                          setAdvisorFormattingDone(true);
                          setCuota2Paid(false);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          studentMode === 'en_proceso'
                            ? 'bg-white text-blue-700 shadow-xs border border-slate-200'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <i className="bi bi-box-seam text-amber-600 mr-1"></i> Entrega Lista
                      </button>
                    </div>

                    {/* Selector de Velocidad */}
                    <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-200">
                      <button
                        onClick={() => setPrioridadExpress(false)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          !prioridadExpress ? 'bg-blue-700 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Normal
                      </button>
                      <button
                        onClick={() => setPrioridadExpress(true)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                          prioridadExpress ? 'bg-amber-600 text-white shadow-xs' : 'text-slate-600 hover:text-amber-700'
                        }`}
                      >
                        <i className="bi bi-lightning-fill text-xs"></i> ⚡ Urgente
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Layout en 2 columnas: Pasos del trabajo (Izq) y Asesor/Pagos (Der) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Columna Izquierda: Pasos de la Tesis */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="portal-card p-5 sm:p-6 bg-white">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                      <div>
                        <span className="text-xs font-bold text-[#0052ff] uppercase tracking-wider block">
                          Trabajo en Curso
                        </span>
                        <h2 className="text-base sm:text-lg font-black text-slate-900">
                          {servicioActual.nombre}
                        </h2>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-slate-400 block">Avance total</span>
                        <span className="text-base font-extrabold text-emerald-700">
                          {porcentajeAvance}% terminado
                        </span>
                      </div>
                    </div>

                    {/* Barra de progreso visual */}
                    <div className="w-full bg-slate-100 h-2.5 rounded-full mb-6 overflow-hidden">
                      <div
                        className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${porcentajeAvance}%` }}
                      ></div>
                    </div>

                    {/* Lista de Pasos (Lenguaje simple y sin tecnicismos) */}
                    <div className="milestone-track space-y-6">
                      {pasosActuales.map((paso) => {
                        const isCompleted = paso.estado === 'completado';
                        const isLocked = paso.estado === 'bloqueado';
                        const isPending = paso.estado === 'pendiente';
                        const isUploadRequired = paso.estado === 'requiere_archivo';
                        const isInProgress = paso.estado === 'en_proceso';

                        return (
                          <div key={paso.id} className="milestone-item flex items-start gap-4">
                            {/* Ícono */}
                            <div
                              className={`milestone-icon-wrapper ${
                                isCompleted
                                  ? 'milestone-icon-completed'
                                  : isLocked
                                  ? 'milestone-icon-locked'
                                  : isUploadRequired || isInProgress
                                  ? 'border-2 border-blue-500 bg-blue-50 text-blue-700'
                                  : 'milestone-icon-pending'
                              }`}
                            >
                              {isCompleted && <i className="bi bi-check-lg text-xl"></i>}
                              {isLocked && <i className="bi bi-lock-fill text-lg"></i>}
                              {isUploadRequired && <i className="bi bi-cloud-arrow-up text-lg text-[#0052ff]"></i>}
                              {isInProgress && <i className="bi bi-arrow-repeat text-blue-700 animate-spin text-lg"></i>}
                              {isPending && <i className="bi bi-clock text-base"></i>}
                            </div>

                            {/* Contenido del Paso */}
                            <div className="flex-1 bg-white border border-slate-200 p-4 rounded-xl shadow-xs">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">
                                  {paso.titulo}
                                </h4>
                                <div>
                                  {isCompleted && (
                                    <span className="text-[10px] bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold px-2.5 py-0.5 rounded-full">
                                      ✅ Listo para descargar
                                    </span>
                                  )}
                                  {isLocked && (
                                    <span className="text-[10px] bg-amber-50 border border-amber-200 text-amber-700 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                      <i className="bi bi-lock-fill"></i> Pago pendiente para descargar
                                    </span>
                                  )}
                                  {isUploadRequired && (
                                    <span className="text-[10px] bg-blue-50 border border-blue-200 text-blue-700 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                      <i className="bi bi-arrow-up-circle-fill"></i> Sube tu archivo
                                    </span>
                                  )}
                                  {isInProgress && (
                                    <span className="text-[10px] bg-blue-50 border border-blue-200 text-blue-700 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                      <i className="bi bi-gear-fill animate-spin text-xs"></i> En trabajo por asesor
                                    </span>
                                  )}
                                  {isPending && (
                                    <span className="text-[10px] bg-slate-100 border border-slate-200 text-slate-500 font-bold px-2.5 py-0.5 rounded-full">
                                      ⏳ Siguiente paso
                                    </span>
                                  )}
                                </div>
                              </div>

                              <p className="text-xs text-slate-600 mb-3">
                                {paso.descripcion}
                              </p>

                              {/* Caso 1: Subida de archivo (Paso 1 Alumno Nuevo) */}
                              {isUploadRequired && (
                                <div className="upload-dropzone mt-2">
                                  <i className="bi bi-file-earmark-word text-4xl text-[#0052ff] mb-2 block"></i>
                                  <span className="text-xs font-bold text-slate-800 block">
                                    Sube el archivo Word (.docx) de tu tesis aprobada por jurados
                                  </span>
                                  <span className="text-[11px] text-slate-500 block mb-3">
                                    Tu asesor aplicará la plantilla oficial Formato 2.0 según la directiva de la UNA Puno
                                  </span>
                                  <div className="flex flex-wrap items-center justify-center gap-2">
                                    <label className="py-2 px-3.5 bg-[#0052ff] hover:bg-blue-700 text-white rounded-xl text-xs font-bold cursor-pointer transition-colors shadow-xs flex items-center gap-2">
                                      <i className="bi bi-folder2-open"></i>
                                      <span>Examinar en mi computadora</span>
                                      <input
                                        type="file"
                                        accept=".docx,.doc"
                                        className="hidden"
                                        onChange={(e) => {
                                          if (e.target.files && e.target.files[0]) {
                                            setUploadedThesisFile({
                                              name: e.target.files[0].name,
                                              size: `${(e.target.files[0].size / (1024 * 1024)).toFixed(1)} MB`,
                                              date: 'Hace unos instantes'
                                            });
                                          }
                                        }}
                                      />
                                    </label>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setUploadedThesisFile({
                                          name: 'Tesis_Alejandro_Quispe_Aprobada.docx',
                                          size: '3.4 MB',
                                          date: 'Hace unos instantes'
                                        });
                                      }}
                                      className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                                    >
                                      <i className="bi bi-lightning-charge-fill text-amber-500"></i>
                                      <span>Simular subida de prueba</span>
                                    </button>
                                  </div>
                                </div>
                              )}

                              {/* Caso 2: Archivo del Paso 1 ya subido */}
                              {paso.id === 1 && isCompleted && uploadedThesisFile && (
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-emerald-50 border border-emerald-200 p-3 rounded-xl gap-2 mt-2">
                                  <div className="flex items-center gap-3">
                                    <i className="bi bi-file-earmark-word-fill text-blue-700 text-2xl shrink-0"></i>
                                    <div>
                                      <span className="text-xs font-bold text-slate-900 block">{uploadedThesisFile.name}</span>
                                      <span className="text-[10px] text-emerald-800 font-medium">
                                        {uploadedThesisFile.size} • Archivo validado • Tu asesor M.Sc. Carlos Condori lo tiene asignado
                                      </span>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => setUploadedThesisFile(null)}
                                    className="text-[11px] font-bold text-slate-500 hover:text-red-600 transition-colors cursor-pointer self-start sm:self-auto"
                                  >
                                    Cambiar archivo
                                  </button>
                                </div>
                              )}

                              {/* Caso 3: Paso 2 en proceso por el Asesor */}
                              {isInProgress && (
                                <div className="space-y-3 mt-2 bg-blue-50/50 border border-blue-200 p-3.5 rounded-xl">
                                  <div className="flex items-center gap-2 text-xs font-bold text-blue-900">
                                    <i className="bi bi-gear-wide-connected animate-spin text-blue-700 text-base"></i>
                                    <span>Tu asesor M.Sc. Carlos Condori está diagramando tu documento:</span>
                                  </div>
                                  <div className="space-y-1.5 text-[11px] text-slate-700 pl-6">
                                    <div className="flex items-center gap-2">
                                      <i className="bi bi-check2 text-emerald-600 font-bold"></i>
                                      <span>Márgenes oficiales: Izquierdo 3.0 cm, Superior/Derecho/Inferior 2.5 cm</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <i className="bi bi-check2 text-emerald-600 font-bold"></i>
                                      <span>Carátula institucional con escudo reglamentario de la UNA Puno</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <i className="bi bi-check2 text-emerald-600 font-bold"></i>
                                      <span>Páginas preliminares con numeración romana en minúscula (i, ii, iii...)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <i className="bi bi-check2 text-emerald-600 font-bold"></i>
                                      <span>Resumen bilingüe (español y quechua/inglés) según directiva</span>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => setAdvisorFormattingDone(true)}
                                    className="w-full py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                                  >
                                    <i className="bi bi-check2-circle"></i>
                                    <span>Simular que el asesor terminó la diagramación (Listo para entrega)</span>
                                  </button>
                                </div>
                              )}

                              {/* Caso 4: Paso completado con archivo para descargar */}
                              {isCompleted && paso.archivo && paso.id !== 1 && (
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-slate-200 gap-2 mt-2">
                                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                                    <i className="bi bi-file-earmark-check text-emerald-600 text-base"></i>
                                    <span>{paso.archivo}</span>
                                  </div>
                                  <button
                                    onClick={() => alert(`Descargando: ${paso.archivo}`)}
                                    className="btn-download-active px-3 py-1.5 rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                                  >
                                    <i className="bi bi-cloud-arrow-down-fill"></i> Descargar mi archivo
                                  </button>
                                </div>
                              )}

                              {/* Caso 5: Paso con candado financiero */}
                              {isLocked && (
                                <div className="bg-amber-50/70 border border-amber-200 p-3.5 rounded-xl space-y-2 mt-2">
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
                                    <div>
                                      <span className="font-extrabold text-amber-950 block">
                                        🔒 Tu tesis ya está 100% diagramada en Formato 2.0
                                      </span>
                                      <span className="text-[11px] text-slate-600">
                                        Archivo listo: <strong className="text-slate-800">{paso.archivo}</strong>
                                      </span>
                                    </div>
                                    <span className="text-sm font-black text-amber-900">
                                      S/ {paso.monto}.00 PEN
                                    </span>
                                  </div>

                                  <button
                                    onClick={() => handleOpenPayment(paso)}
                                    className="btn-unlock-payment w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                                  >
                                    <i className="bi bi-credit-card"></i> Pagar y Descargar mi Archivo Formateado
                                  </button>
                                </div>
                              )}

                              {/* Caso 6: Paso pendiente */}
                              {isPending && (
                                <div className="text-[11px] text-slate-400 italic mt-1">
                                  Se activará automáticamente al completar el paso anterior.
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

              {/* Columna Derecha: Asesor y Acciones Rápidas */}
              <div className="space-y-5">
                {/* Asesor Asignado */}
                <div className="portal-card p-5 bg-white">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                    Tu Asesor Asignado
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-[#0052ff] text-lg font-bold">
                      MC
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900">
                        M.Sc. Carlos Condori C.
                      </h3>
                      <p className="text-xs text-slate-500">
                        Metodólogo y Estadístico UNA Puno
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs flex items-center justify-between">
                    <span className="text-slate-600 font-medium">Disponibilidad:</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      Disponible de inmediato
                    </span>
                  </div>
                </div>

                {/* Próxima Sesión Google Meet */}
                <div className="portal-card p-5 bg-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Próxima Reunión Virtual
                    </span>
                    <span className="text-xs text-[#0052ff] font-bold flex items-center gap-1">
                      <i className="bi bi-camera-video"></i> Google Meet
                    </span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-slate-900 mb-1">
                      Viernes • 07:00 PM
                    </div>
                    <p className="text-[11px] text-slate-600 mb-3">
                      Revisión del Paso 2 y preparación para sustentación.
                    </p>
                    <a
                      href="https://meet.google.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2 bg-[#0052ff] hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-xs"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Entrar a la Reunión
                    </a>
                  </div>
                </div>

                {/* WhatsApp Directo */}
                <div className="portal-card p-4 bg-emerald-50 border-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg font-bold">
                      <i className="bi bi-whatsapp"></i>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-950 block">
                        WhatsApp con Asesor
                      </span>
                      <span className="text-[11px] text-emerald-800">
                        Consultas y dudas directas
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/51951832940?text=Hola,%20tengo%20una%20consulta%20sobre%20mi%20tesis%20en%20TesisAltiplanica"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    Escribir
                  </a>
                </div>
              </div>

            </div>
          </div>
        );
      })()}

        {/* ========================================================
            PESTAÑA 2: "MI CALENDARIO" (FECHAS Y REUNIONES MEET)
           ======================================================== */}
        {activeTab === 'calendario' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="portal-card p-6 bg-white">
              <h2 className="text-lg font-black text-slate-900 mb-1 flex items-center gap-2">
                <i className="bi bi-calendar-event text-[#0052ff]"></i>
                <span>Mi Calendario de Asesorías y Entregas</span>
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Fechas acordadas para revisiones, reuniones virtuales y plazos fijados por tu facultad:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-[#0052ff] uppercase tracking-wider block mb-1">
                      Próxima Reunión Virtual
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900">
                      Sesión de Retroalimentación en Google Meet
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Fecha: <strong>Viernes, 24 de Octubre</strong> • Hora: <strong>07:00 PM</strong>
                    </p>
                  </div>
                  <a
                    href="https://meet.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[#0052ff] hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    Unirme a Meet
                  </a>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Acuerdos de la Última Sesión
                  </span>
                  <p className="text-xs text-slate-700 italic">
                    "Se validaron las 22 diapositivas preparadas y se acordó realizar la simulación oral el día viernes a las 7:00 PM".
                  </p>
                  <span className="text-[10px] text-slate-400 block">
                    Registrado por M.Sc. Carlos Condori C.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            PESTAÑA 3: "MIS PAGOS" (CUOTAS, YAPE/PLIN Y BBVA)
           ======================================================== */}
        {activeTab === 'pagos' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="portal-card p-6 bg-white">
              <h2 className="text-lg font-black text-slate-900 mb-1 flex items-center gap-2">
                <i className="bi bi-credit-card text-[#0052ff]"></i>
                <span>Gestión de Pagos y Comprobantes</span>
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Consulta tus cuotas pagadas, pagos pendientes y cuentas oficiales:
              </p>

              {/* Resumen de Cuotas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                    Cuota 1 (Inicio)
                  </span>
                  <span className="text-lg font-black text-emerald-700 mt-1 block">
                    S/ 200.00
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1 mt-1">
                    <i className="bi bi-check-circle-fill"></i> Pagado y Validado
                  </span>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                    Cuota 2 (Paso 2)
                  </span>
                  <span className="text-lg font-black text-amber-800 mt-1 block">
                    S/ 280.00
                  </span>
                  <span className="text-[11px] font-bold text-amber-800 flex items-center gap-1 mt-1">
                    <i className="bi bi-clock-fill"></i> Pendiente de pago
                  </span>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Cuota 3 (Final)
                  </span>
                  <span className="text-lg font-black text-slate-600 mt-1 block">
                    S/ 200.00
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    Al terminar la simulación
                  </span>
                </div>
              </div>

              {/* Métodos de Pago Disponibles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Yape / Plin */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <i className="bi bi-phone text-[#0052ff]"></i> Yape / Plin
                  </span>
                  <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200">
                    <span className="text-sm font-black font-mono text-slate-900">
                      951 832 940
                    </span>
                    <button
                      onClick={() => handleCopy('951832940', 'yapeNum')}
                      className="copy-badge-btn px-2.5 py-1 rounded text-xs font-bold cursor-pointer"
                    >
                      {copiedField === 'yapeNum' ? '¡Copiado!' : 'Copiar'}
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-500 block">
                    Titular: TesisAltiplánica Consultoría Académica
                  </span>
                </div>

                {/* BBVA */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <i className="bi bi-bank text-[#0052ff]"></i> BBVA Perú (Cuenta & CCI)
                  </span>
                  <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-200 text-xs">
                    <span className="font-mono font-bold text-slate-800">
                      0011-0284-0200874123
                    </span>
                    <button
                      onClick={() => handleCopy('001102840200874123', 'bbvaNum')}
                      className="copy-badge-btn px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer"
                    >
                      {copiedField === 'bbvaNum' ? '¡Copiado!' : 'Copiar'}
                    </button>
                  </div>
                  <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-200 text-xs">
                    <span className="font-mono font-bold text-slate-800">
                      CCI: 011-284-000200874123-14
                    </span>
                    <button
                      onClick={() => handleCopy('01128400020087412314', 'bbvaCCI')}
                      className="copy-badge-btn px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer"
                    >
                      {copiedField === 'bbvaCCI' ? '¡Copiado!' : 'Copiar CCI'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            PESTAÑA 4: "MI PERFIL" (DATOS PERSONALES Y CARRERA)
           ======================================================== */}
        {activeTab === 'perfil' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="portal-card p-6 bg-white">
              <h2 className="text-lg font-black text-slate-900 mb-1 flex items-center gap-2">
                <i className="bi bi-person-gear text-[#0052ff]"></i>
                <span>Mi Perfil de Tesista</span>
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Información de contacto y afiliación académica en la UNA Puno:
              </p>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nombres y Apellidos
                  </label>
                  <input
                    type="text"
                    disabled
                    value={`${personalData.nombres} ${personalData.apellidos}`}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-bold"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    WhatsApp / Celular (Para avisos de entregas)
                  </label>
                  <input
                    type="tel"
                    value={personalData.whatsapp}
                    onChange={(e) => setPersonalData({ ...personalData, whatsapp: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#0052ff]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    disabled
                    value={personalData.email}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                  />
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <label className="block font-bold text-slate-700 mb-1">
                    Afiliación Universitaria
                  </label>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-1">
                    <span className="font-extrabold text-[#0052ff] block">
                      Universidad Nacional del Altiplano (UNA Puno)
                    </span>
                    <span className="text-slate-800 font-medium block">
                      {institutionalData.grado === 'pregrado'
                        ? `${institutionalData.escuela} — ${institutionalData.facultad}`
                        : institutionalData.programaPosgrado}
                    </span>
                    <span className="text-slate-500 text-[11px] font-mono block">
                      Expediente: {institutionalData.expediente}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => alert('¡Datos de contacto actualizados correctamente!')}
                  className="w-full py-2.5 bg-[#0052ff] hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer mt-2"
                >
                  Guardar Cambios de Perfil
                </button>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ========================================================
          MODAL DE PAGOS (YAPE, PLIN & BBVA)
         ======================================================== */}
      {paymentModalOpen && activePaymentStep && (
        <div className="modal-overlay">
          <div className="payment-modal-box p-6 sm:p-7">
            {/* Header del modal */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">
                  Pagar y Descargar mi Archivo
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  {activePaymentStep.titulo}
                </h3>
              </div>
              <button
                onClick={() => setPaymentModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <i className="bi bi-x-lg text-lg"></i>
              </button>
            </div>

            {/* Monto a Pagar */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between mb-5">
              <div>
                <span className="text-xs text-slate-600 block font-semibold">Total a pagar:</span>
                <span className="text-xs text-slate-500">
                  Archivo listo: {activePaymentStep.archivo}
                </span>
              </div>
              <span className="text-2xl font-black text-[#0052ff]">
                S/ {activePaymentStep.monto}.00
              </span>
            </div>

            {/* Pestañas de Métodos de Pago */}
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setPaymentTab('yape')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  paymentTab === 'yape' ? 'payment-tab-active' : 'payment-tab-inactive'
                }`}
              >
                <i className="bi bi-phone"></i> Yape / Plin
              </button>
              <button
                onClick={() => setPaymentTab('bbva')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  paymentTab === 'bbva' ? 'payment-tab-active' : 'payment-tab-inactive'
                }`}
              >
                <i className="bi bi-bank"></i> Transferencia BBVA
              </button>
            </div>

            {/* Contenido: Yape / Plin */}
            {paymentTab === 'yape' && (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-3 mb-5">
                <div className="w-36 h-36 mx-auto bg-white p-2 rounded-xl flex items-center justify-center shadow-xs border border-slate-200">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=YAPE-PLIN-951832940-TESISALTIPLANICA"
                    alt="QR Yape Plin"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-700 block">
                    Número Oficial de Yape & Plin:
                  </span>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="text-base font-black text-slate-900 font-mono tracking-wider">
                      951 832 940
                    </span>
                    <button
                      onClick={() => handleCopy('951832940', 'yapeNumberModal')}
                      className="copy-badge-btn px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <i className={`bi ${copiedField === 'yapeNumberModal' ? 'bi-check-lg' : 'bi-copy'}`}></i>
                      <span>{copiedField === 'yapeNumberModal' ? '¡Copiado!' : 'Copiar'}</span>
                    </button>
                  </div>
                  <span className="text-[11px] text-slate-500 block mt-1">
                    Titular: <strong>TesisAltiplánica Consultoría Académica</strong>
                  </span>
                </div>
              </div>
            )}

            {/* Contenido: Transferencia Bancaria BBVA */}
            {paymentTab === 'bbva' && (
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3 mb-5">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#0052ff] flex items-center justify-center font-bold text-xs">
                    BBVA
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-900 block">
                      BBVA Perú (Cuenta & CCI)
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Titular: TesisAltiplánica
                    </span>
                  </div>
                </div>

                {/* Número de Cuenta */}
                <div>
                  <span className="text-[11px] font-bold text-slate-600 block mb-0.5">
                    Número de Cuenta Corriente:
                  </span>
                  <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-200">
                    <span className="text-xs font-mono font-bold text-slate-900">
                      0011-0284-0200874123
                    </span>
                    <button
                      onClick={() => handleCopy('001102840200874123', 'cuentaBBVAModal')}
                      className="copy-badge-btn px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer"
                    >
                      {copiedField === 'cuentaBBVAModal' ? '¡Copiado!' : 'Copiar'}
                    </button>
                  </div>
                </div>

                {/* CCI */}
                <div>
                  <span className="text-[11px] font-bold text-slate-600 block mb-0.5">
                    Código de Cuenta Interbancario (CCI):
                  </span>
                  <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-200">
                    <span className="text-xs font-mono font-bold text-slate-900">
                      011-284-000200874123-14
                    </span>
                    <button
                      onClick={() => handleCopy('01128400020087412314', 'cciBBVAModal')}
                      className="copy-badge-btn px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer"
                    >
                      {copiedField === 'cciBBVAModal' ? '¡Copiado!' : 'Copiar CCI'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Subida de Voucher */}
            <div className="space-y-3 mb-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  1. Sube la foto de tu comprobante (voucher):
                </label>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => setVoucherFile(e.target.files[0])}
                  className="w-full text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#0052ff] file:text-white hover:file:bg-blue-700 cursor-pointer bg-white p-1.5 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  2. Número de Operación (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="ej. 048291"
                  value={operacionNumber}
                  onChange={(e) => setOperacionNumber(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052ff]"
                />
              </div>
            </div>

            {/* Alerta de Aprobación */}
            {paymentApprovedAlert && (
              <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-xs font-bold text-center mb-4">
                🎉 ¡Pago validado exitosamente! Tu archivo ha sido desbloqueado.
              </div>
            )}

            {/* Botón de Demostración */}
            <button
              onClick={handleSimulatePaymentApproval}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="bi bi-shield-check text-base"></i>
              Confirmar Pago y Desbloquear mi Archivo
            </button>
            <span className="block text-[10px] text-slate-400 text-center mt-2">
              (En producción administración valida el voucher en 1 clic; aquí puedes probar el desbloqueo instantáneo)
            </span>
          </div>
        </div>
      )}

    </div>
  );
}
