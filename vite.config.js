import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Checker({ types: ['module'] })],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed
  },
});
