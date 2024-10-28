import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://overlookart.github.io',
  base: '/ArtWebsite',
  // 集成
  integrations: [vue({devtools: true}), tailwind(), db()],
  renderers: ['@astrojs/renderer-vue'],
});