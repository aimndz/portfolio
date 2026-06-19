"use client";

import React from "react";
import { SUGGESTED_SECTIONS } from "./types";

interface SuggestedPromptsProps {
  onSelectPrompt: (cmd: string) => void;
}

export function SuggestedPrompts({ onSelectPrompt }: SuggestedPromptsProps) {
  return (
    <div className="mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
      {SUGGESTED_SECTIONS.map((section) => (
        <button
          key={section.cmd}
          onClick={() => onSelectPrompt(section.cmd)}
          className="flex cursor-pointer items-center gap-2 rounded-full border border-[#282424] bg-[#0b0b0a] px-4 py-2 text-xs font-medium text-[#a7a7a7] transition-all hover:border-zinc-700 hover:bg-[#282424] hover:text-white"
        >
          <section.Icon className="size-3.5 text-zinc-500" />
          {section.label}
        </button>
      ))}
    </div>
  );
}
