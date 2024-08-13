import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://localhost:5000', // ASP.NET Core server port
        changeOrigin: true,
        secure: false, // Set to true if using HTTPS on the server
      },
    },
  },
  plugins: [react()],
});