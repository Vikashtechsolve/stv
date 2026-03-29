/** Client-side URLs from `.env` (Vite exposes only `VITE_*`). */

const strip = (value) => (value ? String(value).replace(/\/$/, "") : "");

/** Avoid mixed-content blocking: HTTPS pages cannot fetch `http://` APIs. */
function upgradeApiToHttpsIfPageIsSecure(url) {
  if (!url || typeof window === "undefined") return url;
  if (window.location.protocol !== "https:") return url;
  return url.replace(/^http:\/\//i, "https://");
}

/** Online course backend — registration, masterclass, contact, blogs, etc. */
export const onlineCourseApi = upgradeApiToHttpsIfPageIsSecure(
  strip(import.meta.env.VITE_ONLINE_COURSE_API)
);

/** VTS admin dashboard (staff) — use for links / redirects */
export const adminAppUrl = strip(import.meta.env.VITE_ADMIN_APP);
