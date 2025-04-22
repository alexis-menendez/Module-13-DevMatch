// file path: Module-13-DevMatch/vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',  
      '@pages': '/src/pages',
      '@api': '/src/api',
      '@interfaces': '/src/interfaces',
    },
  },
  server: {
    host: '0.0.0.0', 
    port: Number(process.env.PORT) || 3000, 
  },
  preview: {
    allowedHosts: ['peoples.onrender.com'], 
  },
});