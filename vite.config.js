import { defineConfig } from 'vite';

import path from 'path';
import { glob } from 'glob';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        ...generateChapter1VectorsEntries(),
      },
    },
  },
});

function generateChapter1VectorsEntries() {
  const entries = {};
  const tsFiles = glob.sync('src/**/*.ts'); // Use glob to find all .ts files

  for (const tsFile of tsFiles) {
    entries[tsFile] = path.resolve(__dirname, tsFile); // Resolve the file path
  }

  return entries;
}
