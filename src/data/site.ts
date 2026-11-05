// Datos del sitio en un solo lugar. Todo lo que está entre [CORCHETES] es un marcador:
// reemplazalo con el dato real antes de publicar (ver README).

export const site = {
  name: 'repa',
  appName: 'repa PRO',
  tagline: 'La plataforma de envíos rápidos para tu comercio',
  description:
    'Envíos de última milla para restaurantes, kioscos, farmacias y distribuidoras en Cañuelas y alrededores. Repartidores profesionales, costos transparentes por kilómetro y seguimiento en tiempo real.',
  locale: 'es_AR',
  area: {
    label: 'Cañuelas y alrededores',
    locality: 'Cañuelas',
    region: 'Provincia de Buenos Aires',
    country: 'AR',
  },
  links: {
    login: '#', // [URL DE INICIO DE SESIÓN]
    merchantSignup: '#', // [URL DE ALTA DE COMERCIOS]
    driverSignup: '#', // [URL DE ALTA DE REPARTIDORES]
    driverApp: '#', // [URL DE LA APP repa PRO]
  },
  contact: {
    email: '[EMAIL DE CONTACTO]',
    whatsapp: '[NÚMERO DE WHATSAPP]',
  },
  social: [
    { label: 'Instagram', href: '#' }, // [URL DE INSTAGRAM]
    { label: 'LinkedIn', href: '#' }, // [URL DE LINKEDIN]
    { label: 'WhatsApp', href: '#' }, // [LINK DE WHATSAPP]
  ],
} as const;

// Tarifas. Mientras isExample sea true, la calculadora avisa que los montos son ilustrativos.
export const pricing = {
  isExample: true,
  baseFare: 900, // [TARIFA MÍNIMA] en ARS
  perKm: 350, // [PRECIO POR KM] en ARS
  sizeFactor: { chico: 1, mediano: 1.25, grande: 1.6 },
  minutesBase: 8,
  minutesPerKm: 3,
} as const;

export const nav = [
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#faq', label: 'Preguntas' },
] as const;

// Se usan en la sección de preguntas Y en el Schema.org FAQPage: el texto tiene que ser idéntico.
export const faqs = [
  {
    q: '¿Cuánto cuesta cada envío?',
    a: 'Pagás por distancia: una tarifa mínima de [TARIFA MÍNIMA] más [PRECIO POR KM] por kilómetro. Ves el precio antes de confirmar el pedido y no hay comisiones sobre el valor de tu venta.',
  },
  {
    q: '¿En qué zonas tienen cobertura?',
    a: 'Hoy repartimos en Cañuelas y alrededores. Si tu comercio está fuera de esa zona, dejanos tus datos y te avisamos cuando lleguemos.',
  },
  {
    q: '¿Tengo que instalar algo o integrarlo con mi sistema?',
    a: 'No. Pedís los envíos desde el panel web de repa, desde la compu o el celular. [CONFIRMAR integraciones con tiendas online o sistemas de punto de venta].',
  },
  {
    q: '¿Cómo sigo un pedido?',
    a: 'Desde el panel ves en qué parada está el repartidor y cuándo se entregó. Cada entrega queda registrada con foto, quién la recibió y la hora.',
  },
  {
    q: '¿Qué necesito para ser repartidor?',
    a: 'Moto, auto o bici, un celular con datos móviles y la documentación al día que pide [REQUISITOS PARA REPARTIDORES]. Trabajás con la app repa PRO, que te ordena la ruta del día.',
  },
  {
    q: '¿Cuándo cobran los repartidores?',
    a: 'Las ganancias de cada entrega se ven al instante en la app. Los pagos se acreditan [FRECUENCIA DE PAGO].',
  },
] as const;
