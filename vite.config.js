import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The 2026 Magic Vite Config
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
