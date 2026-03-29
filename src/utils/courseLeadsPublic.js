import { onlineCourseApi } from "../config/env";

/** Public course-lead API (no auth). */
export function courseLeadsUrl(path) {
  const pathWithApi = path.startsWith("/") ? `/api${path}` : `/api/${path}`;
  // Dev: same-origin `/api` → Vite proxy (avoids wrong port + CORS). Prod: full API URL.
  if (import.meta.env.DEV) {
    return pathWithApi;
  }
  if (onlineCourseApi) return `${onlineCourseApi}${pathWithApi}`;
  return pathWithApi;
}

export async function fetchActiveIntakeBatch(courseType) {
  const res = await fetch(
    courseLeadsUrl(`/course-leads/public/active-batch/${courseType}`)
  );
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.message || "Could not load batch");
    err.status = res.status;
    throw err;
  }
  return data.batch;
}

export async function submitCourseLeadRegistration(body) {
  const res = await fetch(courseLeadsUrl("/course-leads/register"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.message || "Registration failed");
  }
  return data;
}
