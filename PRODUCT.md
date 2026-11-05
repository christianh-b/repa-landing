# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 5 con islas de React (`client:visible`) y Tailwind CSS. Zero-JS por defecto: solo los componentes con estado (tabs de beneficios, calculadora de envío) se hidratan. Pedido explícito del usuario.

## Users

- **Comercios:** dueños o encargados de restaurantes, kioscos, almacenes, farmacias, perfumerías, tiendas y distribuidoras que necesitan mandar pedidos a domicilio sin armar su propia flota.
- **Repartidores:** profesionales con moto, auto o bici que quieren trabajar con rutas ordenadas y ver sus ganancias claras. Usan la app repa PRO (ver `../repa-app`).

## Product Purpose

repa conecta comercios con repartidores profesionales para envíos de última milla. Éxito: que un comercio se sume y despache su primer pedido, o que un repartidor se registre.

## Positioning

Envíos sin comisiones abusivas, con costos transparentes por kilómetro y seguimiento en tiempo real. Los repartidores tienen su propia app (repa PRO) con hoja de ruta, prueba de entrega y ganancias del día.

## Operating Context

- Comercio: pide un envío, sigue el pedido en un panel.
- Repartidor: recibe la ruta del día, navega, confirma cada entrega con foto, receptor y firma, ve sus ganancias.

## Capabilities and Constraints

- Cobertura confirmada: **Cañuelas y alrededores** (provincia de Buenos Aires).
- Precios: **no definidos**. Usar marcadores `[PRECIO POR KM]`, `[TARIFA MÍNIMA]`; cualquier calculadora es una estimación con valores de ejemplo.
- Enlaces de login, registro y redes: **no definidos**. Usar marcadores.

## Brand Commitments

- Nombre: "repa" en minúscula; la app de repartidores es "repa PRO" con badge azul y check de verificación.
- Voz: español rioplatense profesional ("Sumá tu comercio", "Optimizá tus entregas").
- Paleta y estética pinadas por el brief del usuario: blanco, gris hielo `#F8FAFC`, texto `#0F172A` / `#64748B`, acento `#0055FF`, éxito `#10B981`; clean UI estilo iOS / Vercel; Inter o Geist.

## Evidence on Hand

- Pantallas reales de la app repa PRO en `../repa-app` (rutas, entrega, historial, perfil).
- **No hay** clientes, logos, métricas ni testimonios reales. Se deja una sección reservada con marcadores; no inventar ninguno.

## Product Principles

1. Transparencia de costos antes que promesas.
2. Dos públicos, un sistema: comercio y repartidor ven el mismo pedido.
3. Velocidad real: la página misma tiene que cargar al instante.
4. Lo local importa: cobertura y voz de la zona.
