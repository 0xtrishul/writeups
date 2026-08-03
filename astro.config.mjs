import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://writeups.trishul.re',
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
      wrap: false,
    },
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
});
