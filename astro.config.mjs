import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://overlookart.github.io',
  base: '/ArtWebsite',
  // 集成
  integrations: [vue()]
});