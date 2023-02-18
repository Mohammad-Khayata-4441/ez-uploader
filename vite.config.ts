import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import path from 'node:path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue() ,svgLoader() ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  build:{
    lib:{
      entry:path.resolve(__dirname , "src/main.ts"),
      name:'file-uploader',
      fileName:(format)=>`${format}.ts`
    },
    rollupOptions:{
      external:['vue'],
      output:{
        globals:{
          vue:'Vue'
        }
      }
    }
  }


})
