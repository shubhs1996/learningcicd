import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

const timeStamp = new Date().getTime()

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true
    })
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  build: {
    outDir: `dist-${mode}`,
    rollupOptions: {
      output: {
        entryFileNames: `assests/[name]-[hash]_${timeStamp}.js`,
        chunkFileNames: `assests/[name]-[hash]_${timeStamp}.js`,
        assetFileNames: `assests/[name]-[hash]_${timeStamp}[extname]`
      }
    }
  },

  server: {
    port: 5173,
    open: true
  }
}))