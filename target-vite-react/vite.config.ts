import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/blazor-components/": {
        target: "http://localhost:5157",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
})
