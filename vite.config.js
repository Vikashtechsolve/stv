import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const apiProxyTarget =
    env.VITE_ONLINE_COURSE_API?.replace(/\/$/, "") || "http://localhost:8000";

  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: 3000,
      open: true,
      host: true,
      proxy: {
        "/api": {
          target: apiProxyTarget,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
