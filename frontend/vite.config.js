import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/proyecto-portafolio-full-stack/',
  plugins: [
    tailwindcss(),
  ],
})