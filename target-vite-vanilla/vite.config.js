import { defineConfig } from 'vite';

export default defineConfig({
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
});
