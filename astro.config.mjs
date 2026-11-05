// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// [DOMINIO] Reemplazá por el dominio real antes de publicar: canonical, Open Graph y sitemap salen de acá.
const SITE_URL = process.env.SITE_URL ?? 'https://repa.example';

export default defineConfig({
  site: SITE_URL,
  integrations: [
    react(),
    sitemap({ filter: (page) => !/\/(terminos|privacidad)\/?$/.test(page) }),
  ],
  build: {
    // El CSS es chico: va inline en el HTML y no bloquea el render con otra petición.
    inlineStylesheets: 'always',
  },
  prefetch: false,
  vite: {
    plugins: [tailwindcss()],
  },
});
