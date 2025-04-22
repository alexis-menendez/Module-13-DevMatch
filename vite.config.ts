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
    port: 3000, // dev only, used locally
    allowedHosts: [
      'devmatch.onrender.com',
      'devmatch-u4a6.onrender.com',
      'peoples.onrender.com',
    ],
  },
  preview: {
    allowedHosts: [
      'devmatch.onrender.com',
      'devmatch-u4a6.onrender.com',
      'peoples.onrender.com',
    ],
  },
});