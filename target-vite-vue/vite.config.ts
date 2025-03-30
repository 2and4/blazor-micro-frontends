import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['blazor-custom-element', 'blazor-custom-element-scoped'].includes(tag),
      }
    }
  })],
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
