import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: 'dist/docs',
    },
})
// https://github.com/vitejs/vite/issues/9656