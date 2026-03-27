import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-client-harika-paamu/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
