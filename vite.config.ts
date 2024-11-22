import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $assets: '/static/assets',
      $lib: '/src/lib'
    },
  },
  server: {
    hmr: {
      overlay: false // Désactive l'overlay si nécessaire
    },
  },
});
