import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Pamrose-Skin-Prototype/',
  plugins: [react()],
  server: { port: 5173 }
})
