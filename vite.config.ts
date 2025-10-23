import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/epicemktdigital/',
  server: {
    port: 8080
  }
})
