import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', /* other common libraries */],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // adjust as needed
  },
  base: '/bsptcl-edited-8-9/',
})
