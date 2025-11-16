import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
=======
// https://vitejs.dev/config/
export default defineConfig({
  base: '/honeybee-cafe/',   // <--- add this line
  plugins: [react()]
>>>>>>> b2b44b3 (Initial commit)
})
