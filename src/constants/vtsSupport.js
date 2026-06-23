/** VTS support contact — single source of truth for the public website. */
export const VTS_SUPPORT = {
  email: "support@vikastechsolutions.com",
  phone: "+91 9117018454",
  website: "https://www.vikashtechsolution.com",
  linkedin: "https://www.linkedin.com/company/vikash-tech-solution",
};

export function vtsPhoneTel(phone = VTS_SUPPORT.phone) {
  return `tel:${String(phone).replace(/\s/g, "")}`;
}

export function vtsWhatsAppUrl(phone = VTS_SUPPORT.phone) {
  const digits = String(phone).replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}
