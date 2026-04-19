import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://mohakchugh.github.io',
  base: '/dev-vibes',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()]
});
