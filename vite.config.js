import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: '0.0.0.0',
    fs: { strict: false },
    allowedHosts: [
      'rashmimetaliks.uk',
      'www.rashmimetaliks.uk'
    ],
  },

  preview: {
    host: '0.0.0.0',
    allowedHosts: [
      'rashmimetaliks.uk',
      'www.rashmimetaliks.uk'
    ],
  },
})