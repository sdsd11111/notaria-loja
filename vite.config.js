import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    proxy: {
      // Configuración para manejar rutas en desarrollo
      '^/servicios/.*': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => '/index.html',
      },
    },
  },
}))
