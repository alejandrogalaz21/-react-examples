import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@features': path.resolve(__dirname, 'src/features'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
})
