---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Landing repa

Scope: página principal `src/pages/index.astro`. Mode: Persuade.

Audience: comercios de Cañuelas y alrededores (restaurantes, kioscos, farmacias, distribuidoras) y repartidores. Action: "Sumá tu comercio" (primaria), "Quiero ser repartidor" (secundaria), cotizar un envío. Proof on hand: pantallas reales de repa PRO; no hay clientes, precios ni métricas (marcadores).

Constraints: brief pinned by the user (palette, clean iOS/Vercel, Inter o Geist, sections and copy, mockup in HTML). Zero-JS by default; React islands only for tabs and the quote calculator. 100 in Lighthouse.

## Direction contract

THESIS: Del comercio a la puerta. El hero cuenta el recorrido de un pedido con una ilustración propia y viva (repartidor en scooter, kiosco, ruta, pin de entrega) sobre fondos de cielo degradados; más abajo, "un pedido, dos pantallas" muestra la misma entrega desde el comercio y desde repa PRO. Pedido del usuario (2026-11-04): sacar las tarjetas de la app del hero, ilustraciones de reparto, fondo degradado y animaciones.

OWN-WORLD: Blanco y gris hielo #F8FAFC, tinta #0F172A, pizarra #64748B, un solo azul #0055FF para acción y estado "en curso", esmeralda #10B981 solo para "entregado". Tarjetas rounded-2xl con borde slate-200/80 y sombra suave con offset, píldoras rounded-full, Geist con números tabulares en negrita y tracking apretado.

STORY: El comercio entiende en un vistazo que repa despacha y sigue sus pedidos, ve que el repartidor tiene una app seria, confía por la transparencia de costos y la cobertura local, y se suma.

FIRST VIEWPORT: Izquierda, h1 a 4.25rem ("rápidos" en azul) con subtítulo, los dos CTA y la píldora de cobertura; derecha, la ilustración SVG a ~40rem de ancho. Debajo, la cinta de rubros en movimiento. Fondo de cielo con tres auroras que se desplazan. En mobile, la ilustración debajo de los CTA.

FORM: Pinned by the user's brief and follow-up (clean UI with flat vector delivery illustration), not rolled. Signature interaction: la escena del hero está viva (scooter que rebota, ruedas, ruta que avanza, pin que salta); las secciones aparecen con scroll-driven animations en CSS. Motion grammar de ease-out exponencial, respeta reduced-motion.

seed: none (direction pinned by the user's brief; concept roll not run, per "a user- or brief-pinned direction beats the roll")

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
