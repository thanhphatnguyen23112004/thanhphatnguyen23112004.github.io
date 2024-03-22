// import { defineConfig } from "vite";

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     hmr:
//       process.env.CODESANDBOX_SSE || process.env.GITPOD_WORKSPACE_ID
//         ? 443
//         : undefined,
//   },
// });

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/'
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  base: './', // Change the base configuration to an object
});