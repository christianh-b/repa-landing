---
name: repa
description: Envíos de última milla para comercios, con la app repa PRO para repartidores.
colors:
  signal-blue: "#0055FF"
  signal-blue-deep: "#0047D6"
  signal-blue-ink: "#0039AB"
  signal-blue-wash: "#EEF4FF"
  signal-blue-tint: "#DBE7FF"
  delivered-green: "#10B981"
  delivered-ink: "#047857"
  delivered-wash: "#ECFDF5"
  route-ink: "#0F172A"
  slate-text: "#64748B"
  slate-strong: "#475569"
  ice: "#F8FAFC"
  paper: "#FFFFFF"
  hairline: "#E2E8F0"
  mist: "#FBFCFE"
  sky-wash: "#F3F7FF"
  sky-fade: "#F5F8FD"
  sky-soft: "#F4F7FD"
  sky-soft-deep: "#EEF3FD"
  city-light: "#DCE6FF"
  city: "#CBD9FF"
  scooter: "#1E293B"
  skin: "#F5C6A5"
  lamp: "#FDE68A"
typography:
  display:
    fontFamily: "Geist, 'Geist Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: "4.25rem"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  display-mobile:
    fontFamily: "Geist, 'Geist Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.625rem"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, 'Geist Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Geist, 'Geist Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Geist, 'Geist Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  question:
    fontFamily: "Geist, 'Geist Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
  body-sm:
    fontFamily: "Geist, 'Geist Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
  caption:
    fontFamily: "Geist, 'Geist Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
  label:
    fontFamily: "Geist, 'Geist Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
  micro:
    fontFamily: "Geist, 'Geist Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
  wordmark:
    fontFamily: "Geist, 'Geist Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    letterSpacing: "-0.04em"
  figure:
    fontFamily: "Geist, 'Geist Fallback', ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    letterSpacing: "-0.04em"
    fontFeature: "'tnum'"
rounded:
  chip: "9999px"
  focus: "0.5rem"
  control: "0.75rem"
  card: "1rem"
  panel: "1.5rem"
  device: "1.75rem"
spacing:
  gutter: "1.25rem"
  gutter-wide: "2rem"
  section: "5rem"
  section-wide: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.chip}"
    padding: "0 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.signal-blue-deep}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.route-ink}"
    rounded: "{rounded.chip}"
    padding: "0 28px"
    height: "52px"
  chip-in-progress:
    backgroundColor: "{colors.signal-blue-wash}"
    textColor: "{colors.signal-blue-deep}"
    rounded: "{rounded.chip}"
    padding: "2px 8px"
  chip-delivered:
    backgroundColor: "{colors.delivered-wash}"
    textColor: "{colors.delivered-ink}"
    rounded: "{rounded.chip}"
    padding: "2px 8px"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "24px"
---

# Design System: repa

## Overview

**Creative North Star: "El pedido a la vista"**

repa se diseña como el recorrido de un pedido: del comercio a la puerta del cliente. El hero lo cuenta con una ilustración vectorial propia: un repartidor en scooter con la caja azul de repa, una ruta punteada que une un kiosco con una casa y un pin verde de entrega. Todo vive sobre fondos claros que nunca son blanco plano: lavados de cielo con auroras azules y verdes que se mueven lento.

La densidad es de producto, no de folleto: listas con divisores, números grandes y tabulares, píldoras de estado, y la vista del pedido en el panel y en la app (datos de ejemplo rotulados). El ritmo alterna lavados de cielo y niebla, y cierra con una banda azul degradada con puntos. El movimiento es parte del material: la escena del hero está viva (ruedas, ruta, pin, nubes), las secciones aparecen al hacer scroll y las tarjetas se elevan al pasar el mouse.

**Key Characteristics:**
- Un solo acento cromático (azul señal) para acción, movimiento y la marca; verde solo para "entregado".
- Fondos en degradé suave (cielo → niebla) con auroras radiales; nunca blanco sólido de punta a punta.
- Ilustración vectorial plana, sin contornos, con la paleta de la marca.
- Números en negrita, tracking apretado y cifras tabulares.
- Movimiento con ease-out exponencial, solo con transform, opacidad y filtros, y apagado con reduced-motion.

## Colors

Neutros fríos de pizarra con un azul eléctrico que solo aparece donde hay acción o movimiento.

### Primary
- **Azul señal** (signal-blue): botón principal, parada en curso, barra de progreso, ícono de cobertura, banda de cierre. **Azul señal profundo** (signal-blue-deep) es su hover y el texto sobre lavados azules; **lavado** y **tinte** (signal-blue-wash, signal-blue-tint) son fondos de chips, íconos y barras inactivas.

### Secondary
- **Verde entregado** (delivered-green): solo el círculo de "entregado" y el punto de "en turno". Su texto va en **tinta verde** (delivered-ink) sobre **lavado verde** (delivered-wash) para pasar contraste.

### Neutral
- **Tinta de ruta** (route-ink): titulares, texto fuerte y fondos oscuros (calculadora, vista del repartidor).
- **Pizarra** (slate-text): texto secundario sobre blanco y gris hielo. Sobre lavados azules se usa **pizarra fuerte** (slate-strong) porque pizarra no llega a 4.5:1.
- **Hielo** (ice): fondo de secciones alternas y de chips de ejemplo.
- **Papel** (paper): fondo de tarjetas.
- **Niebla** (mist): fondo base de la página.
- **Lavados de cielo** (sky-wash, sky-fade, sky-soft, sky-soft-deep): extremos de los degradados de cada sección.
- **Línea** (hairline): bordes de tarjetas y divisores, siempre al 80 % de opacidad.

### Ilustración
- **Ciudad** (city, city-light): edificios del fondo, siempre detrás de la acción.
- **Scooter** (scooter), **piel** (skin) y **farol** (lamp): exclusivos de la ilustración; no se usan en la interfaz.

### Named Rules
**La regla del cielo.** Ninguna sección es blanco plano: cada una lleva un degradado de niebla a cielo o una aurora radial del azul de marca (≤ 22 % de opacidad) o del verde (≤ 25 %).

### Named Rules
**La regla de la señal.** El azul marca acción o movimiento, nunca decoración. Si algo azul no se puede tocar ni está "en curso", va en neutro.

**La regla del verde ganado.** El verde aparece solo cuando una entrega terminó. No se usa para "éxito" genérico ni para marketing.

## Typography

**Display Font:** Geist variable, autoalojada (con Geist Fallback: Arial con métricas ajustadas)
**Body Font:** Geist

**Character:** Una sola familia geométrica y neutra, que trabaja con peso y tracking en lugar de mezclar caras. Los titulares se aprietan (-0.04em) y los números se leen como en la app: tabulares y en negrita.

### Hierarchy
- **Display** (700, 2.625rem a 4.25rem, 1.04): único h1, en el hero.
- **Headline** (700, 1.875rem a 2.75rem, 1.08): h2 de cada sección.
- **Title** (600, 1.125rem a 1.25rem): h3 de tarjetas, pasos y preguntas.
- **Body** (400, 1.125rem en introducciones y 0.9375rem en tarjetas, 1.625): texto de apoyo; las respuestas del FAQ se limitan a 62ch.
- **Label** (600, 0.6875rem a 0.75rem): píldoras de estado y pies de figura.
- **Figure** (700, tracking -0.04em, tabular): montos, distancias, tiempos.

### Named Rules
**La regla del número de app.** Toda cifra (km, min, ARS) usa cifras tabulares; las cifras protagonistas van en 700 con tracking apretado.

## Layout

Contenedor de 72rem (max-w-6xl) con márgenes de 1.25rem en celular y 2rem desde 640px. Las secciones respiran 5rem en celular y 7rem en escritorio, con más aire arriba del título que abajo. El hero es una grilla de dos columnas (1.05fr y 0.95fr) desde 1024px; en celular, el mockup baja debajo de los botones. Las grillas de tarjetas pasan de 1 a 2 a 4 columnas. La navegación pasa a un menú `<details>` por debajo de 768px. Las anclas compensan el header fijo con 5.5rem de scroll-margin.

## Elevation & Depth

Plano con elevación suave. Cada tarjeta lleva un borde de línea más una sombra baja; el mockup del hero y el menú móvil, una sombra flotante más profunda. Las sombras siempre tienen desplazamiento vertical; nada de halos de color.

### Shadow Vocabulary
- **Tarjeta** (`box-shadow: 0 1px 2px rgb(15 23 42 / 0.04), 0 4px 12px -2px rgb(15 23 42 / 0.06)`): tarjetas, controles elevados y pestaña activa.
- **Flotante** (`box-shadow: 0 2px 4px rgb(15 23 42 / 0.04), 0 18px 40px -12px rgb(15 23 42 / 0.18)`): pantallas de la app en el hero y popovers.

## Shapes

Esquinas generosas y consistentes: píldora completa para botones, chips y pestañas; 0.75rem para controles y cuadros de íconos; 1rem para tarjetas; 1.5rem para paneles; 1.75rem para la "pantalla" de la app. Los bordes son de 1px; la única excepción es la parada en curso, que lleva un anillo azul doble.

## Components

### Buttons
- **Shape:** píldora completa (9999px), 52px de alto en hero y cierre, 40px en el header.
- **Primary:** azul señal con texto blanco y sombra de tarjeta; hover en azul profundo; al presionar escala a 0.98.
- **Secondary:** papel con borde pizarra 300 y texto tinta; hover en hielo con borde más oscuro.
- **Sobre azul (banda de cierre):** primario en papel con texto azul profundo, secundario con borde blanco al 40 %.

### Chips
- **Estado:** píldora con lavado más texto profundo del mismo color: "En curso" en azul, "Entregado" en verde, "Pendiente" en hielo con pizarra fuerte. "En curso" y "En turno" llevan un punto de 6px.
- **Ejemplo de pedido:** rectángulo de 0.5rem en hielo, texto de 12px tabular.

### Cards / Containers
- **Corner Style:** 1rem.
- **Background:** papel.
- **Shadow Strategy:** tarjeta (ver Elevation & Depth).
- **Border:** línea al 80 %.
- **Internal Padding:** 24px (32px en la calculadora desde 640px).

### Inputs / Fields
- **Slider:** pista de 8px en pizarra 200 con relleno azul hasta el valor y thumb nativo con accent-color azul.
- **Opciones (radio):** tarjetas de 0.75rem con borde línea; seleccionada con borde azul y lavado azul; el foco de teclado dibuja un contorno azul de 2px.

### Navigation
- Header fijo de 64px, blanco al 70–80 % con desenfoque de fondo y divisor inferior. Links en pizarra 600 que pasan a tinta sobre una píldora hielo en hover. En celular, un menú `<details>` que se despliega como tarjeta flotante.

### Ilustración del hero (signature)
SVG propio en estilo vectorial plano: repartidor con casco azul y campera blanca, scooter oscuro con franja azul, caja azul con el logo de repa, kiosco con toldo a rayas, casa con puerta azul, ruta punteada y pin verde de entrega. Animaciones en bucle suaves: el scooter rebota 3px, las ruedas giran, la calle y la ruta avanzan, el pin salta, las nubes y los paquetes flotan. Entra una sola vez con desplazamiento y desenfoque (1,1 s).

### Movimiento
- **Entrada del hero:** título, texto y botones suben 18px en cascada (80 ms entre cada uno), sin ocultarse, así no retrasan el LCP.
- **Aparición al hacer scroll:** las secciones y sus tarjetas suben 40px con opacidad y desenfoque, con `animation-timeline: view()` en CSS puro. Donde el navegador no lo soporta, el contenido ya está visible.
- **Hover:** las tarjetas se elevan 6px con sombra azul; su ícono gira -8° y se pinta de azul. El botón principal tiene un brillo que lo cruza.
- **Header:** gana sombra y opacidad durante los primeros 140px de scroll.
- **Cinta de rubros:** desplazamiento continuo de 38 s; se pausa al pasar el mouse.

### Vista del pedido (pestañas de beneficios)
Tarjetas que muestran el pedido #10236 desde el panel del comercio y desde repa PRO, siempre con un pie que dice "Datos de ejemplo".

## Do's and Don'ts

### Do:
- **Do** contar el envío con la ilustración propia (repartidor, comercio, ruta, destino) en el estilo vectorial plano de la marca.
- **Do** animar solo transform, opacidad y filtros, y respetar prefers-reduced-motion.
- **Do** rotular como "Datos de ejemplo" cualquier vista del producto con datos inventados.
- **Do** reservar el azul señal (#0055FF) para acción y estado en curso, y el verde (#10B981) para entregado.
- **Do** usar cifras tabulares en todo número de distancia, tiempo o dinero.
- **Do** usar pizarra fuerte, no pizarra, para texto chico sobre lavados de color.

### Don't:
- **Don't** usar fotos de stock ni ilustraciones de terceros con otro estilo o paleta.
- **Don't** usar fondos de grilla de líneas ni blanco sólido de punta a punta.
- **Don't** ocultar el título del hero en su animación de entrada (opacidad 0 retrasa el LCP).
- **Don't** poner etiquetas o "eyebrows" arriba de los títulos.
- **Don't** inventar precios, clientes o métricas: van marcadores entre corchetes hasta tener el dato.
- **Don't** agregar un segundo color de acento.
