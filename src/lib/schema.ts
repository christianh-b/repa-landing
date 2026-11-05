import { site, faqs } from '../data/site';

/**
 * Schema.org en un solo @graph.
 * Nota: "DeliveryService" no existe en schema.org; el servicio de envíos se describe como
 * Service con serviceType, que es el tipo que Google reconoce.
 */
export function homeSchema(siteUrl: string) {
  const url = siteUrl.replace(/\/$/, '') + '/';
  const orgId = `${url}#organizacion`;
  const area = {
    '@type': 'City',
    name: site.area.locality,
    containedInPlace: { '@type': 'AdministrativeArea', name: site.area.region },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: site.name,
        url,
        logo: `${url}favicon.svg`,
        areaServed: area,
      },
      {
        '@type': 'WebSite',
        '@id': `${url}#sitio`,
        url,
        name: site.name,
        inLanguage: 'es-AR',
        publisher: { '@id': orgId },
      },
      {
        '@type': 'Service',
        '@id': `${url}#envios`,
        name: 'Envíos de última milla para comercios',
        serviceType: 'Servicio de envíos y reparto a domicilio',
        description: site.description,
        provider: { '@id': orgId },
        areaServed: area,
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Restaurantes, kioscos, almacenes, farmacias, perfumerías, tiendas y distribuidoras',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${url}#app`,
        name: site.appName,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description:
          'App para repartidores: hoja de ruta del día, confirmación de entregas con foto y firma, e historial de ganancias.',
        publisher: { '@id': orgId },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };
}
