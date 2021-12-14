import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    lib: {
      formats: ['cjs', 'es'],
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: (format) => `my-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'classnames'],
    },
  },
  plugins: [react(), svgr()],
  css: {
    modules: {
      generateScopedName: '[name]__[local]_[hash:base64:5]',
    },
  },
});
