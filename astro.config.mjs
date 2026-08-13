import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Sitio estatico. Salida HTML puro para maximo rendimiento.
export default defineConfig({
  site: 'https://YamilkaHC.github.io',
  base: '/Linux-course',
  integrations: [tailwind()],
  output: 'static',
});
