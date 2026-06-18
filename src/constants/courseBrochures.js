/** Brochure assets — import PDFs from src/assets (Vite resolves URL in dev & build). */

import genAiBrochurePdf from "../assets/VTS_GenAi_Syllabus.pdf";

export const FULLSTACK_BROCHURE = {
  href: "/fullstack-brochure.pdf",
  /** Suggested filename when browser saves the PDF */
  downloadAs: "VTS-Full-Stack-MERN-Brochure.pdf",
};

export const DATA_ANALYTICS_BROCHURE = {
  href: "/dabrochure.html",
};

export const GENAI_BROCHURE = {
  href: genAiBrochurePdf,
  downloadAs: "VTS-Generative-AI-Brochure.pdf",
};
