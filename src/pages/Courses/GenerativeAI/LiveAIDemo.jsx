import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Sparkles,
  Code2,
  FileText,
  MessagesSquare,
  Image as ImageIcon,
  Wand2,
  Send,
  Cpu,
} from "lucide-react";

/**
 * Interactive Generative AI playground.
 * Shows students what they will actually build during the program by simulating
 * realistic AI responses for common GenAI use cases (chat, code, summarize, RAG, image caption).
 */

const DEMOS = [
  {
    id: "chat",
    label: "Chat Assistant",
    icon: MessagesSquare,
    prompt: "Explain Generative AI to a 10 year old in 2 sentences.",
    response:
      "Generative AI is a smart computer brain that learns from millions of examples and then creates brand new things like stories, pictures, or code on its own. Think of it as a magic assistant that can imagine and build whatever you ask it to.",
    tag: "LLM + Prompt",
  },
  {
    id: "code",
    label: "Code Generator",
    icon: Code2,
    prompt: "Write a Python function to fetch weather data for a city.",
    response: `import requests

def get_weather(city: str) -> dict:
    url = f"https://api.weather.com/v1/{city}"
    response = requests.get(url, timeout=10)
    response.raise_for_status()
    data = response.json()
    return {
        "city": city,
        "temp": data["temperature"],
        "condition": data["condition"],
    }`,
    tag: "Function Calling",
    code: true,
  },
  {
    id: "summary",
    label: "Document Q&A",
    icon: FileText,
    prompt:
      "Summarize this 20-page research paper on Transformer architecture.",
    response:
      "Transformers replaced recurrent networks with self-attention, letting models process all tokens in parallel. The architecture uses encoder-decoder blocks with multi-head attention and feed-forward layers. This design powers modern LLMs like GPT and Gemini and enables training on massive datasets efficiently.",
    tag: "RAG + Embeddings",
  },
  {
    id: "image",
    label: "Image Caption",
    icon: ImageIcon,
    prompt: "Describe this image: a robot painting a sunset.",
    response:
      "A friendly white robot stands at an easel under an orange-pink sky, holding a brush and carefully painting a glowing sunset over distant mountains. The scene blends technology with creativity in a warm, dreamlike style.",
    tag: "Vision Model",
  },
  {
    id: "extract",
    label: "Extract JSON",
    icon: Wand2,
    prompt:
      "Extract structured data from: \"John Doe, 28, Software Engineer at Google, Bangalore\"",
    response: `{
  "name": "John Doe",
  "age": 28,
  "role": "Software Engineer",
  "company": "Google",
  "location": "Bangalore"
}`,
    tag: "Structured Output",
    code: true,
  },
];

function useTypewriter(text, speed = 12, trigger = 0) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOutput("");
    setDone(false);
    if (!text) return;

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOutput(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(id);
  }, [text, speed, trigger]);

  return { output, done };
}

export default function LiveAIDemo() {
  const [activeId, setActiveId] = useState(DEMOS[0].id);
  const [runKey, setRunKey] = useState(0);
  const responseRef = useRef(null);

  const active = useMemo(
    () => DEMOS.find((d) => d.id === activeId) ?? DEMOS[0],
    [activeId]
  );

  const { output, done } = useTypewriter(active.response, 10, runKey);

  useEffect(() => {
    if (responseRef.current) {
      responseRef.current.scrollTop = responseRef.current.scrollHeight;
    }
  }, [output]);

  const onSelect = (id) => {
    setActiveId(id);
    setRunKey((k) => k + 1);
  };

  const onRerun = () => setRunKey((k) => k + 1);

  return (
    <section
      id="live-ai-demo"
      className="relative px-4 sm:px-6 py-16 sm:py-20 bg-[radial-gradient(ellipse_at_top,#FBEAEB_0%,#ffffff_55%,#fafafa_100%)] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(177,28,32,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(177,28,32,0.08) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-1.5 bg-red-50 text-[#B11C20] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-red-100 mb-4">
            <Sparkles className="w-4 h-4" />
            See Generative AI in action
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
            This is what you will{" "}
            <span className="bg-linear-to-r from-[#B11C20] via-rose-600 to-[#87021C] bg-clip-text text-transparent">
              build, day one
            </span>
          </h2>

          <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Pick a real Generative AI use case below and watch a live model
            response. By the end of the program you will be building these and
            shipping them to production.
          </p>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-8">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x">
            {DEMOS.map((d) => {
              const Icon = d.icon;
              const active = d.id === activeId;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => onSelect(d.id)}
                  className={[
                    "snap-start shrink-0 lg:shrink group inline-flex items-center gap-3 text-left px-4 py-3 rounded-xl border transition",
                    active
                      ? "bg-white border-red-200 shadow-[0_8px_24px_rgba(177,28,32,0.18)] text-slate-900"
                      : "bg-white/60 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-300",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex items-center justify-center w-9 h-9 rounded-lg transition",
                      active
                        ? "bg-linear-to-br from-[#B11C20] to-[#87021C] text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200",
                    ].join(" ")}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-semibold whitespace-nowrap lg:whitespace-normal">
                      {d.label}
                    </span>
                    <span className="block text-[11px] text-slate-500 mt-0.5">
                      {d.tag}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_-20px_rgba(15,23,42,0.18)] overflow-hidden">
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-slate-500 truncate">
                vts-ai-playground · {active.label.toLowerCase().replace(/\s/g, "_")}
              </div>
              <div className="text-[10px] sm:text-xs px-2 py-1 rounded-full bg-red-50 text-[#B11C20] font-semibold">
                LIVE
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 sm:p-4 mb-4">
                <p className="text-[11px] uppercase tracking-wide text-slate-500 font-semibold mb-1">
                  Prompt
                </p>
                <p className="text-sm sm:text-[15px] text-slate-800 leading-relaxed">
                  {active.prompt}
                </p>
              </div>

              <div className="rounded-xl bg-linear-to-br from-slate-900 to-slate-800 text-slate-100 p-4 sm:p-5 relative">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span className="text-[11px] uppercase tracking-wide text-slate-400 font-semibold">
                    AI Response
                  </span>
                  {!done && (
                    <span className="ml-auto inline-flex items-center gap-1 text-[11px] text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      generating
                    </span>
                  )}
                </div>

                <div
                  ref={responseRef}
                  className={[
                    "min-h-[140px] max-h-[260px] overflow-auto text-sm sm:text-[14.5px] leading-relaxed",
                    active.code
                      ? "font-mono whitespace-pre text-emerald-200"
                      : "whitespace-pre-wrap text-slate-100",
                  ].join(" ")}
                >
                  {output}
                  {!done && (
                    <span className="inline-block w-2 h-4 align-middle bg-emerald-400 ml-0.5 animate-pulse" />
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs text-slate-500">
                  Powered by simulated model output. In class you will wire this
                  to real OpenAI, Gemini and Hugging Face APIs.
                </p>

                <button
                  type="button"
                  onClick={onRerun}
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-[#B11C20] to-[#87021C] text-white text-sm font-semibold hover:from-[#a01a1e] hover:to-[#700015] transition shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Run again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
