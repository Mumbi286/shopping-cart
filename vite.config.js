import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: process.env.VITE_BASE_PATH || "/shopping-cart",
  // Setting the proxies
  server: {
    proxy:{
      '/api':{
        target:'http://localhost:8001',
        rewrite:(path) => path.replace(/^\/api/, ''), 
        changeOrigin : true
      }
    }
  }
  
})
