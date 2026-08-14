import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowHosts: ['https://askmynotes2-1-uqfa.onrender.com'],
  },
})
