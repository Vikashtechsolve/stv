/** Client-side URLs from `.env` (Vite exposes only `VITE_*`). */

const strip = (value) => (value ? String(value).replace(/\/$/, "") : "");

/** Online course backend — registration, masterclass, contact, blogs, etc. */
export const onlineCourseApi = strip(import.meta.env.VITE_ONLINE_COURSE_API);

/** VTS admin dashboard (staff) — use for links / redirects */
export const adminAppUrl = strip(import.meta.env.VITE_ADMIN_APP);
