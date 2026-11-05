# repa · landing page

Astro 5 + React (islas) + Tailwind CSS 4. Todo es HTML y CSS estático, salvo dos islas de React que se hidratan con `client:visible`: las pestañas de beneficios y la calculadora de envíos.

## Comandos

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

```bash
npm run preview
```

`npm run og` regenera `public/og.png` y `public/apple-touch-icon.png` desde `scripts/*.html` (necesita Google Chrome).

## Antes de publicar: marcadores para reemplazar

Todo lo que está entre `[CORCHETES]` es un dato que no existía todavía y no se inventó.

| Dónde | Qué |
|---|---|
| `astro.config.mjs` y `public/robots.txt` | `SITE_URL`: el dominio real (canonical, Open Graph y sitemap salen de acá). También se puede pasar como variable de entorno. |
| `src/data/site.ts` → `links` | URLs de inicio de sesión, alta de comercios, alta de repartidores y app repa PRO (hoy apuntan a `#`). |
| `src/data/site.ts` → `contact`, `social` | Email, WhatsApp y redes. |
| `src/data/site.ts` → `pricing` | Tarifa mínima y precio por km reales. Cuando estén, poné `isExample: false` y la calculadora deja de mostrar el aviso. |
| `src/data/site.ts` → `faqs` | `[TARIFA MÍNIMA]`, `[PRECIO POR KM]`, integraciones, requisitos para repartidores y frecuencia de pago. |
| `src/components/BenefitsTabs.tsx` | `[FRECUENCIA DE PAGO]` y `[PRECIO]` en la vista previa del pedido. |
| `src/components/Proof.astro` | Testimonios reales; después poné `ready = true`. Mientras tanto la sección solo se ve en `npm run dev`. |
| `src/pages/terminos.astro`, `privacidad.astro` | Textos legales (privacidad según la Ley 25.326). |

Revisá también que estas afirmaciones sean ciertas para repa: "sin comisiones sobre el valor de tu venta" y "flota verificada (identidad, vehículo y documentación revisados)".

## Estructura

```
src/
  layouts/Layout.astro        SEO: title, description, canonical, Open Graph, Twitter, JSON-LD
  lib/schema.ts               Schema.org en un @graph: Organization, WebSite, Service, SoftwareApplication, FAQPage
  data/site.ts                Datos del sitio, tarifas y preguntas frecuentes (una sola fuente)
  components/
    Navbar.astro              Header fijo con menú mobile sin JS (<details>)
    Hero.astro                h1 + CTAs + mockup de repa PRO en HTML
    Verticals.astro           Soluciones para cada rubro
    Benefits.astro            Sección de beneficios (contiene la isla)
    BenefitsTabs.tsx          Isla: pestañas comercios / repartidores (patrón WAI-ARIA)
    HowItWorks.astro          3 pasos
    Quote.astro               Sección de la calculadora (contiene la isla)
    QuoteCalculator.tsx       Isla: calculadora de envío
    Proof.astro               Testimonios (reservado)
    FAQ.astro                 Preguntas con <details> nativo
    CtaBand.astro, Footer.astro
  styles/global.css           Tailwind, tokens de marca, fuente Geist autoalojada
```

## Notas de SEO

- `DeliveryService` no existe en schema.org: el servicio se describe como `Service` con `serviceType`, que es lo que Google reconoce.
- Google muestra resultados enriquecidos de FAQ solo para sitios de gobierno y salud. El marcado `FAQPage` sigue siendo válido, pero no esperes ver las preguntas desplegadas en los resultados.
- Las preguntas del FAQ y del JSON-LD salen del mismo array (`faqs`), así el texto siempre coincide.

## Diseño

`PRODUCT.md` y `DESIGN.md` describen el producto y el sistema visual para la skill Impeccable; `.impeccable/surfaces/` guarda la dirección de diseño de esta página.
