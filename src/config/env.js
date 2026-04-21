/** Client-side URLs from `.env` (Vite exposes only `VITE_*`). */

const strip = (value) => (value ? String(value).replace(/\/$/, "") : "");

/** Avoid mixed-content blocking: HTTPS pages cannot fetch `http://` APIs. */
function upgradeApiToHttpsIfPageIsSecure(url) {
  if (!url || typeof window === "undefined") return url;
  if (window.location.protocol !== "https:") return url;
  return url.replace(/^http:\/\//i, "https://");
}

/** VTS programs backend (vikashtechsolve backend). */
export const vtsBackendApi = upgradeApiToHttpsIfPageIsSecure(
  strip(import.meta.env.VITE_VTS_BACKEND_API)
);

/** Online course backend (course-leads, etc.). */
export const onlineCourseApi = upgradeApiToHttpsIfPageIsSecure(
  strip(import.meta.env.VITE_ONLINE_COURSE_API)
);
