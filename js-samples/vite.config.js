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

import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  }
})