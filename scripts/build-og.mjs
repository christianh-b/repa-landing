// Arma scripts/.og-render.html: la plantilla con la ilustración del hero copiada del sitio compilado.
import { readFileSync, writeFileSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const match = html.match(/<svg[^>]*class="hero-illo[^"]*"[\s\S]*?<\/svg>/);
if (!match) {
  console.error('No encontré la ilustración en dist/index.html. Corré "npm run build" primero.');
  process.exit(1);
}
const template = readFileSync(new URL('./og-template.html', import.meta.url), 'utf8');
writeFileSync(new URL('./.og-render.html', import.meta.url), template.replace('<!--ILLUSTRATION-->', match[0]));
