import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/proyecto-portafolio-full-stack/',
  plugins: [
    tailwindcss(),
  ],
}))