import React from "react";
import { ReceiptIndianRupee } from "lucide-react";

export default function GenAiGstNotice({
  text,
  className = "",
  compact = false,
}) {
  if (!text) return null;

  return (
    <div
      className={`flex items-start gap-2.5 rounded-xl border border-amber-200/90 bg-[linear-gradient(90deg,#fffbeb_0%,#fef3c7_100%)] px-3.5 py-2.5 ${className}`}
      role="note"
    >
      <ReceiptIndianRupee
        className={`shrink-0 text-amber-800 ${compact ? "w-3.5 h-3.5 mt-0.5" : "w-4 h-4 mt-0.5"}`}
        aria-hidden
      />
      <p
        className={`text-amber-950 leading-relaxed ${
          compact ? "text-[10px] sm:text-[11px]" : "text-xs sm:text-sm"
        }`}
      >
        {text}
      </p>
    </div>
  );
}
