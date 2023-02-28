import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'node:path'
import minimist from 'minimist';
const { f } = minimist(process.argv.slice(2));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  build: {
    emptyOutDir: false,

    lib: {
      formats: f === 'iife' ? ['iife'] : ['es', 'umd'],
      entry: path.resolve(__dirname, 'src', "main.ts"),
      name: 'ez-uploader',
      fileName: (format) => `ez-uploader`,
    },

    rollupOptions: {
      external: f === 'iife' ? ['vue'] : ['vue', 'date-fns', 'date-fns-tz'],
      output: {
        globals: {
          vue: 'Vue',
          'date-fns': 'dateFns',
          'date-fns-tz': 'dateFnsTz',
        },
      },
    },
  },



})
