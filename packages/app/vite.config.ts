import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    modules: {
      generateScopedName: '[name]__[local]_[hash:base64:5]',
    },
  },
});
