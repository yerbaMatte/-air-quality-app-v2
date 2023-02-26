import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
//change the base path
export default defineConfig({
  plugins: [react()],
  base: '/-air-quality-app-v2/',
});
