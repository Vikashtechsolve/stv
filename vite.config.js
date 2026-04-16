import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const vtsProxyTarget =
    env.VITE_VTS_BACKEND_API?.replace(/\/$/, "") || "http://localhost:8000";
  const onlineCourseProxyTarget =
    env.VITE_ONLINE_COURSE_API?.replace(/\/$/, "") || "http://localhost:8001";

  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: 3000,
      open: true,
      host: true,
      proxy: {
        "/api": {
          target: vtsProxyTarget,
          changeOrigin: true,
          secure: false,
        },
        // Online course backend proxy (for course-leads registration, etc.)
        "/oc-api": {
          target: onlineCourseProxyTarget,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/oc-api/, "/api"),
        },
      },
    },
  };
});
