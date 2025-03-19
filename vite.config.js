import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  root: 'src/',
  server: {
    port: 3000,
  },
  build: {
    outDir: '../docs',
    target: 'esnext',
  },
});
