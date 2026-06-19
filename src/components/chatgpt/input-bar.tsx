"use client";

import React, { useState } from "react";
import { Plus, Mic } from "lucide-react";
import { ALLOWED_PROMPTS } from "./types";

// Soundwave SVG to match search bar right icon
function SoundwaveIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="8"
        y1="10"
        x2="8"
        y2="14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="7"
        x2="12"
        y2="17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="16"
        y1="10"
        x2="16"
        y2="14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface InputBarProps {
  input: string;
  setInput: (val: string) => void;
  isStreaming: boolean;
  onSendMessage: (val?: string) => void;
}

export function InputBar({
  input,
  setInput,
  isStreaming,
  onSendMessage,
}: InputBarProps) {
  const [showSlashMenu, setShowSlashMenu] = useState(false);

  const handleInputFocus = () => {
    if (input === "") {
      setInput("/");
    }
    setShowSlashMenu(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    if (val === "") {
      val = "/";
    } else if (!val.startsWith("/")) {
      val = "/" + val;
    }

    setInput(val);

    if (val === "/" || val.startsWith("/")) {
      setShowSlashMenu(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.currentTarget;

    // Block backspace if it would delete the leading slash
    if (
      e.key === "Backspace" &&
      target.selectionStart === 1 &&
      target.selectionEnd === 1
    ) {
      e.preventDefault();
    }

    // Block delete if it would delete the leading slash
    if (
      e.key === "Delete" &&
      target.selectionStart === 0 &&
      target.selectionEnd === 0
    ) {
      e.preventDefault();
    }

    // Block cut of selection containing the leading slash
    if (e.key === "x" && e.ctrlKey && target.selectionStart === 0) {
      e.preventDefault();
    }

    if (e.key === "Enter") {
      onSendMessage();
    }
  };

  const selectPrompt = (cmd: string) => {
    setInput(cmd);
    setShowSlashMenu(false);
    onSendMessage(cmd);
  };

  const filteredPrompts = ALLOWED_PROMPTS.filter((item) =>
    item.cmd.toLowerCase().startsWith(input.toLowerCase()),
  );

  const hasText = input.trim() !== "" && input.trim() !== "/";

  return (
    <div className="relative w-full">
      {/* Autocomplete Menu dropdown */}
      {showSlashMenu && (
        <>
          <div
            onClick={() => setShowSlashMenu(false)}
            className="fixed inset-0 z-30"
          />
          <div className="absolute right-0 bottom-full left-0 z-40 mb-3 max-w-full rounded-2xl border border-[#282424] bg-[#0b0b0a] p-1.5 text-left shadow-2xl">
            <div className="chatgpt-scrollbar max-h-60 space-y-0.5 overflow-y-auto">
              {filteredPrompts.map((item) => (
                <button
                  key={item.cmd}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    selectPrompt(item.cmd);
                  }}
                  className="flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-semibold text-[#a7a7a7] transition-colors hover:bg-[#282424] hover:text-[#fafbf8]"
                >
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-[#fafbf8]">
                      {item.cmd}
                    </span>
                    <span className="text-[10px] font-medium text-zinc-500">
                      {item.desc}
                    </span>
                  </span>
                  <span className="rounded bg-[#282424] px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
                    {item.label}
                  </span>
                </button>
              ))}
              {filteredPrompts.length === 0 && (
                <div className="px-3 py-3 text-xs text-zinc-500 italic">
                  No matching sections found
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Search Capsule (Single-Row Pill Capsule) */}
      <div className="flex h-[52px] w-full items-center rounded-full border border-[#282424] bg-[#0b0b0a] pr-2 pl-5 shadow-lg transition-all focus-within:ring-1 focus-within:ring-[#282424]">
        <Plus className="mr-3 size-5 shrink-0 cursor-pointer text-[#a7a7a7] hover:text-[#fafbf8]" />

        <input
          type="text"
          placeholder="Ask anything"
          value={input}
          onFocus={handleInputFocus}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-1 border-0 bg-transparent py-1 text-base text-[#fafbf8] placeholder-zinc-600 outline-none"
        />

        <div className="flex shrink-0 items-center gap-3.5 pl-2">
          <Mic className="size-5 cursor-pointer text-zinc-500 hover:text-[#a7a7a7]" />

          <button
            onClick={() => {
              onSendMessage();
              setShowSlashMenu(false);
            }}
            disabled={!hasText || isStreaming}
            className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#fafbf8] text-[#000101] transition-opacity hover:opacity-90"
          >
            {hasText ? (
              <span
                className="text-lg leading-none font-bold"
                style={{ marginTop: "-2px" }}
              >
                ↑
              </span>
            ) : (
              <SoundwaveIcon className="size-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
