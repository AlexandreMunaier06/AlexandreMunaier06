import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AlexandreMunaier06/',
  build: {
    outDir: 'dist',
  },
})
