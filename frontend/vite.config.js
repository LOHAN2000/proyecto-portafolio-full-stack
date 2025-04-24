import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: 'https://github.com/LOHAN2000/proyecto-portafolio-full-stack',
  plugins: [
    tailwindcss(),
  ],
})