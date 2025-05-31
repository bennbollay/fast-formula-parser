import { path, resolve } from 'node:path';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/ and https://github.com/monaye/vite-vitest-react-ts-starter/tree/main
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {},
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'MyLib',
      // the proper extensions will be added
      fileName: '@assetcalc/fast-formula-parser',
    },
  },
});
