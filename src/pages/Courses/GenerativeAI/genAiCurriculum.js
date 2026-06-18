/** Gen AI curriculum — aligned with VTS_GenAi_Syllabus.pdf (8-week cohort plan). */

export const GENAI_LEARNING_SPLIT = [
  { label: "Theory & concepts", percent: 40, desc: "Intuition and mathematics behind each architecture" },
  { label: "Hands-on coding", percent: 40, desc: "Live, guided implementation in Python from day one" },
  { label: "Project build", percent: 20, desc: "Weekly deliverables and two major capstone sprints" },
];

export const GENAI_LIVE_SCHEDULE = {
  daysPerWeek: "6 days / week",
  hoursPerDay: "2 hours / day",
  format: "Live online · mentor-led cohort",
};

export const GENAI_CURRICULUM_WEEKS = [
  {
    week: 1,
    phase: "Foundation",
    phaseLabel: "Weeks 1–3 · Foundation phase",
    title: "Python & AI Foundations",
    type: "mini",
    topics: [
      "AI, ML, DL & Generative AI overview",
      "Python basics: variables, data types, loops, functions",
      "Lists, dictionaries & file handling",
    ],
    project: {
      name: "AI Study Assistant CLI",
      highlights: [
        "Enter a topic and store structured notes",
        "Search across saved notes",
        "Persist everything to file",
      ],
    },
    outcome:
      "Python fundamentals, learned while building your first working application.",
  },
  {
    week: 2,
    phase: "Foundation",
    title: "Mathematics, NumPy, Pandas & DL Basics",
    type: "mini",
    topics: [
      "Linear algebra & probability essentials",
      "NumPy and Pandas for data work",
      "Neural networks & backpropagation basics",
    ],
    project: {
      name: "Student Performance Predictor",
      highlights: [
        "Read and clean CSV data",
        "Analyse marks and generate insights",
        "Predict performance outcomes",
      ],
    },
    outcome:
      "Data preprocessing fluency and a working mental model of the AI data pipeline.",
  },
  {
    week: 3,
    phase: "Foundation",
    title: "CNNs, RNNs, Autoencoders & VAEs",
    type: "mini",
    topics: [
      "CNN, RNN, LSTM & GRU architectures",
      "Autoencoders & variational autoencoders (VAEs)",
      "Latent spaces & representation learning",
    ],
    project: {
      name: "Image Compression Tool",
      highlights: [
        "Compress images via learned representations",
        "Compare original vs. reconstructed size",
        "Visualise the reconstruction",
      ],
    },
    outcome: "Intuition for latent spaces and representation learning.",
  },
  {
    week: 4,
    phase: "Generative AI",
    phaseLabel: "Weeks 4–5 · Generative architectures",
    title: "GANs & Transformers",
    type: "mini",
    topics: [
      "GAN architecture, DCGAN & StyleGAN overview",
      "Attention mechanism & transformer architecture",
      "Tokenization fundamentals",
    ],
    project: {
      name: "Text Summarizer with Transformers",
      highlights: [
        "Input long-form text",
        "Generate concise summaries",
        "Compare output quality across settings",
      ],
    },
    outcome:
      "A working command of the transformer workflow that powers modern LLMs.",
  },
  {
    week: 5,
    phase: "Generative AI",
    title: "LLMs & Prompt Engineering",
    type: "mini",
    topics: [
      "BERT, GPT, T5 & LLaMA overview",
      "Prompt engineering patterns",
      "Fine-tuning concepts",
    ],
    project: {
      name: "AI Content Generator",
      highlights: [
        "Generate blog posts and articles",
        "Draft emails on demand",
        "Produce social-media copy",
      ],
    },
    outcome: "Real-world LLM API usage and prompt design that holds up in production.",
  },
  {
    week: 6,
    phase: "Production systems",
    phaseLabel: "Weeks 6–7 · Major build sprints",
    title: "RAG, Embeddings & Vector Databases",
    type: "major",
    topics: [
      "Embeddings & semantic search",
      "ChromaDB, FAISS & LangChain",
      "End-to-end RAG pipeline design",
    ],
    deliveryPlan: [
      "Day 1 · Embedding pipeline",
      "Day 2 · Vector database",
      "Day 3 · Retriever",
      "Day 4 · LLM integration",
      "Day 5 · Testing",
      "Day 6 · Deployment",
    ],
    project: {
      name: "Enterprise PDF Chatbot",
      highlights: [
        "Upload and index PDF documents",
        "Semantic document search",
        "Context-aware, grounded answers",
      ],
    },
    outcome: "An industry-standard Retrieval-Augmented Generation application.",
  },
  {
    week: 7,
    phase: "Production systems",
    title: "Agentic AI & Deployment",
    type: "major",
    topics: [
      "Stable Diffusion & Hugging Face Diffusers",
      "AI agents with CrewAI & LangGraph",
      "FastAPI, Streamlit & cloud deployment",
    ],
    deliveryPlan: [
      "Day 1 · Agent design",
      "Day 2 · Research agent",
      "Day 3 · Summariser agent",
      "Day 4 · Report generation",
      "Day 5 · Communication layer",
      "Day 6 · Deployment",
    ],
    project: {
      name: "Multi-Agent Research Assistant",
      highlights: [
        "Autonomous web-research agent",
        "Summariser agent",
        "Report-generator agent",
      ],
    },
    outcome: "A working implementation of orchestrated, agentic AI.",
  },
  {
    week: 8,
    phase: "Capstone",
    phaseLabel: "Week 8 · Capstone",
    title: "Enterprise Document Intelligence Platform",
    type: "capstone",
    topics: [
      "PDF upload & OCR",
      "RAG search & chat interface",
      "Report generation & multi-agent workflow",
      "FastAPI backend & Streamlit frontend",
    ],
    deliveryPlan: [
      "Day 1 · Architecture design",
      "Day 2 · Backend development",
      "Day 3 · RAG integration",
      "Day 4 · Frontend development",
      "Day 5 · Testing & optimisation",
      "Day 6 · Presentation & mock interview",
    ],
    capstoneOptions: [
      "Enterprise Document Intelligence Platform (recommended)",
      "AI Interview Assistant",
      "Resume Analyzer",
      "Customer Support AI Agent",
    ],
    project: {
      name: "Document Intelligence Platform",
      highlights: [
        "Ingest documents with OCR",
        "Grounded answers through RAG",
        "Multi-agent workflow with FastAPI & Streamlit",
      ],
    },
    outcome:
      "A production-grade capstone you present in a mock interview — the centrepiece of your portfolio.",
  },
];

export const GENAI_PORTFOLIO_PROJECTS = GENAI_CURRICULUM_WEEKS.map((w) => ({
  week: w.week,
  name: w.project.name,
  desc: w.outcome,
  type: w.type,
}));

/** Short module lines for “What you learn” checklist */
export const GENAI_MODULE_SUMMARIES = GENAI_CURRICULUM_WEEKS.map(
  (w) => `Week ${w.week}: ${w.title} — ${w.project.name}`
);
