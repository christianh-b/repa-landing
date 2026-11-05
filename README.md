# repa · landing page

Astro 5 + React (islas) + Tailwind CSS 4. Todo es HTML y CSS estático, salvo dos islas de React que se hidratan con `client:visible`: las pestañas de beneficios y la calculadora de envíos.

## Cómo levantar el proyecto

### 1. Requisitos

- **Node.js 20 o más nuevo** (Astro 5 pide 18.20.8, 20.3 o 22+). Para ver tu versión:

  ```bash
  node -v
  ```

  Si no lo tenés, instalalo desde [nodejs.org](https://nodejs.org) (versión LTS) o con Homebrew:

  ```bash
  brew install node
  ```

- **npm**, que viene con Node.
- **Google Chrome**: solo si vas a regenerar la imagen para compartir (paso 6).

### 2. Entrar a la carpeta

```bash
cd ~/Desktop/repa-landing
```

### 3. Instalar las dependencias

```bash
npm install
```

Crea la carpeta `node_modules/`. Solo hace falta la primera vez y cada vez que cambie `package.json`.

Si npm muestra un aviso de `install-scripts` para `esbuild` o `sharp`, podés ignorarlo: el proyecto compila igual.

### 4. Levantar el servidor de desarrollo

```bash
npm run dev
```

Abrí [http://localhost:4321](http://localhost:4321). Cada vez que guardás un archivo, la página se actualiza sola. Para cortar el servidor, apretá `Ctrl + C` en la terminal.

En este modo también se ve la sección reservada de testimonios (`Proof.astro`), que no sale en la versión final hasta que la completes.

Para probarlo en tu celular, conectado a la misma red Wi-Fi:

```bash
npm run dev -- --host
```

y abrí en el celular la dirección `Network` que aparece en la terminal (por ejemplo `http://192.168.0.10:4321`).

### 5. Compilar la versión final y probarla

```bash
npm run build
```

Genera el sitio estático en `dist/`: es lo que se sube al hosting.

```bash
npm run preview
```

Sirve esa carpeta `dist/` en [http://localhost:4321](http://localhost:4321) para revisarla tal como va a quedar publicada.

### 6. (Opcional) Regenerar la imagen para compartir

Si cambiás la ilustración o los textos de `scripts/og-template.html`:

```bash
npm run build && npm run og
```

Actualiza `public/og.png` (1200×630, la que se ve al compartir el link por WhatsApp o redes) y `public/apple-touch-icon.png`. Usa Google Chrome en modo headless; en otra ruta o en Linux, indicala así:

```bash
CHROME=/ruta/a/chrome npm run og
```

### 7. Publicar

La carpeta `dist/` es HTML, CSS y JS estático: sirve en Netlify, Vercel, Cloudflare Pages, GitHub Pages o cualquier hosting.

- Comando de build: `npm run build`
- Carpeta a publicar: `dist`
- Variable de entorno `SITE_URL` con tu dominio (por ejemplo `https://repa.com.ar`), para que el canonical, el sitemap y la imagen para compartir usen las URLs correctas. Actualizá también la línea `Sitemap:` de `public/robots.txt`.

Activá la compresión (gzip o brotli) en el hosting: la mayoría la trae prendida. Sin compresión, el HTML pesa unos 125 KB en vez de 26 KB y baja el puntaje de rendimiento en celular.

### Problemas comunes

| Síntoma | Solución |
|---|---|
| `command not found: npm` | Falta Node.js (paso 1). |
| `Astro requires Node.js v18.20.8 or higher` | Actualizá Node a la versión LTS. |
| `Port 4321 is in use` | Ya hay otro servidor corriendo. Cerralo con `Ctrl + C` o usá otro puerto: `npm run dev -- --port 4322`. |
| La página no muestra los cambios en `npm run preview` | `preview` sirve la última compilación: volvé a correr `npm run build`. |
| Errores raros después de actualizar dependencias | Borrá `node_modules` y `package-lock.json`, y corré `npm install` de nuevo. |

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
