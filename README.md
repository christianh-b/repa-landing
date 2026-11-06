# repa · landing en HTML, CSS y JS puro

La misma landing que `../repa-landing` (Astro), sin frameworks, sin dependencias y sin paso de compilación. Se ve y funciona igual: ilustración animada, fondos degradados, animaciones al hacer scroll, pestañas de beneficios, calculadora de envíos, preguntas frecuentes y SEO completo.

## Cómo abrirla

**Opción 1, la más simple:** doble clic en `index.html`. Se abre en el navegador y funciona todo.

**Opción 2, con un servidor local** (recomendado para probar como va a quedar publicado). Desde esta carpeta, con cualquiera de estos:

```bash
python3 -m http.server 8080
```

```bash
npx serve .
```

y abrí [http://localhost:8080](http://localhost:8080) (o la dirección que muestre `serve`). Para cortarlo, `Ctrl + C`.

Para verla en el celular, conectado al mismo Wi-Fi, abrí `http://<IP de tu compu>:8080`. La IP la ves en Ajustes del sistema → Red, o con:

```bash
ipconfig getifaddr en0
```

## Estructura

```
index.html        Página principal (todas las secciones)
terminos.html     Términos y condiciones (marcador)
privacidad.html   Política de privacidad (marcador)
css/styles.css    Todos los estilos
js/main.js        Pestañas de beneficios y calculadora (≈100 líneas, sin dependencias)
fonts/            Geist, servida desde el propio sitio
img/              favicon, ícono de Apple e imagen para compartir (og.png)
robots.txt, sitemap.xml
```

El menú de celular y las preguntas frecuentes usan `<details>` nativo y las animaciones son CSS: funcionan aunque JavaScript esté desactivado. Sin JS, la calculadora muestra el precio inicial y las pestañas quedan en "Para comercios".

## Cómo editar

- **Textos:** directo en `index.html`. Cada sección es un `<section>` con su `id` (`soluciones`, `beneficios`, `como-funciona`, `cotizar`, `faq`).
- **Tarifas de la calculadora:** el objeto `PRICING` al principio de `js/main.js`. Cuando tengas los valores reales, poné `IS_EXAMPLE: false` y desaparece el aviso "Valores de ejemplo".
- **Preguntas frecuentes:** están en dos lugares que tienen que coincidir: en el HTML (sección `#faq`) y en el bloque `<script type="application/ld+json">` del `<head>` (Schema.org `FAQPage`).
- **Header y footer:** están repetidos en las tres páginas. Si cambiás uno, cambialo en `index.html`, `terminos.html` y `privacidad.html`.
- **Año del footer:** está escrito a mano (`© 2026`); actualizalo cada año.

### Sobre los estilos

`css/styles.css` es CSS normal, generado a partir de Tailwind. En el HTML vas a ver clases como `rounded-2xl`, `text-slate-500` o `sm:text-6xl`: **solo funcionan las que ya existen en ese archivo**, que son todas las que usa la página. Para algo nuevo, escribí tu propia regla al final de `styles.css`:

```css
.mi-banner {
  background: var(--color-brand-50);
  color: var(--color-brand-700);
  border-radius: 1rem;
  padding: 1rem 1.25rem;
}
```

Los colores, sombras y la fuente están como variables al principio del archivo (`--color-brand-600`, `--shadow-card`, `--font-sans`, etc.).

La ilustración del hero es un SVG dentro de `index.html`. Sus animaciones están en `styles.css`, en las reglas que llevan `[data-illo]`.

## Antes de publicar: marcadores para reemplazar

Todo lo que está entre `[CORCHETES]` es un dato que falta.

| Dónde | Qué |
|---|---|
| `index.html`, `terminos.html`, `privacidad.html`, `robots.txt`, `sitemap.xml` | Reemplazá `https://repa.example` por tu dominio (buscar y reemplazar en todos los archivos). |
| Los tres `.html` | Enlaces de iniciar sesión, alta de comercios, alta de repartidores, app repa PRO y redes (hoy apuntan a `#`). |
| Footer | `[EMAIL DE CONTACTO]` y `[NÚMERO DE WHATSAPP]`. |
| `js/main.js` → `PRICING` | Tarifa mínima y precio por km. |
| `index.html` (preguntas y JSON-LD) | `[TARIFA MÍNIMA]`, `[PRECIO POR KM]`, integraciones, requisitos para repartidores y `[FRECUENCIA DE PAGO]`. También `[PRECIO]` en la vista del pedido. |
| `terminos.html`, `privacidad.html` | Textos legales (privacidad según la Ley 25.326). |

Revisá también que sean ciertas estas afirmaciones: "sin comisiones sobre el valor de tu venta" y "flota verificada".

La sección de testimonios de la versión Astro no está acá: solo se mostraba en desarrollo y no tiene contenido real todavía.

## Publicar

Subí la carpeta completa tal cual a cualquier hosting estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages o un hosting común por FTP). No hay comando de build.

Activá la compresión gzip o brotli en el hosting (casi todos la traen prendida): sin ella, el HTML pesa unos 120 KB en vez de 25 KB.

## Rendimiento

Lighthouse, servido con compresión: 100 en rendimiento, accesibilidad, buenas prácticas y SEO, en celular y escritorio. La página completa pesa unos 58 KB comprimida (HTML, CSS, fuente y JS). Es el mismo peso que la versión Astro, porque esa versión solo cargaba React cuando las islas entraban en pantalla.
