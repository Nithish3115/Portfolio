import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: './client',
  base: '/Portfolio/', // Replace with your actual repo name
  resolve: {
    alias: {
      '@': '/client/src',
      '@assets': '/client/src/assets',
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});