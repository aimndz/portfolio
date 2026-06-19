"use client";

import React from "react";
import {
  Check,
  Copy,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Volume2,
  Mail,
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import { Thread, Message } from "./types";
import { profile, projects, techStack, experiences } from "@/data/portfolio";
import { techStackIcons } from "@/components/tech-stack-icons";

interface MessageLogsProps {
  activeThread: Thread;
  streamingText: string;
  copiedMessageId: string | null;
  onCopyToClipboard: (text: string, id: string) => void;
  onRegenerate: (text: string) => void;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export function MessageLogs({
  activeThread,
  streamingText,
  copiedMessageId,
  onCopyToClipboard,
  onRegenerate,
  messagesEndRef,
}: MessageLogsProps) {
  
  const formatInlineMarkdown = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const renderSpecialContent = (text: string) => {
    if (text.includes("[PROJECTS_LIST]")) {
      return (
        <div className="mt-4 flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col rounded-xl border border-[#282424] bg-[#0b0b0a] p-4 transition-all hover:border-zinc-700 hover:bg-[#282424]/30"
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-[#fafbf8]">
                    {project.name}
                  </h4>
                  <span className="font-mono text-xs text-zinc-500">
                    {project.year}
                  </span>
                </div>
                <p className="mt-1.5 flex-1 text-xs text-[#a7a7a7]">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded bg-[#282424] px-1.5 py-0.5 font-mono text-[10px] text-[#fafbf8]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-[11px] text-[#a7a7a7] uppercase transition-colors hover:text-[#fafbf8]"
                    >
                      GitHub
                      <ArrowUpRight className="size-3" />
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-[11px] text-[#a7a7a7] uppercase transition-colors hover:text-[#fafbf8]"
                    >
                      Website
                      <ArrowUpRight className="size-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (text.includes("[SKILLS_GRID]")) {
      const categories = [
        { name: "Frontend", items: techStack.frontend },
        { name: "Backend", items: techStack.backend },
        { name: "Tools", items: techStack.tools },
      ];

      return (
        <div className="mt-4 space-y-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-xl border border-[#282424] bg-[#0b0b0a] p-4"
            >
              <h4 className="mb-3 font-mono text-xs tracking-wider text-zinc-500 uppercase">
                {cat.name}
              </h4>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {cat.items.map((tech) => {
                  const iconKey = tech.icon as keyof typeof techStackIcons;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-lg bg-[#282424]/40 px-2 py-1.5 text-[#a7a7a7] transition-colors hover:bg-[#282424] hover:text-[#fafbf8]"
                    >
                      <span className="size-4 shrink-0 text-zinc-500">
                        {techStackIcons[iconKey]}
                      </span>
                      <span className="truncate text-xs">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (text.includes("[CONTACT_INFO]")) {
      return (
        <div className="mt-4 space-y-4 rounded-xl border border-[#282424] bg-[#0b0b0a] p-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#282424] text-[#fafbf8]">
              <Mail className="size-5" />
            </div>
            <div>
              <p className="font-mono text-[11px] text-zinc-600 uppercase">
                Email Address
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm font-medium text-zinc-200 transition-colors hover:text-white"
              >
                {profile.email}
              </a>
            </div>
          </div>

          <div className="border-t border-[#282424] pt-3">
            <p className="mb-2 font-mono text-[11px] text-zinc-600 uppercase">
              Social Accounts
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/aimndz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-[#282424] px-3 py-1.5 text-xs text-[#a7a7a7] transition-colors hover:bg-[#282424]/80 hover:text-[#fafbf8]"
              >
                <Github className="size-3.5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/amiel-ian-mendoza-aa8849312/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-[#282424] px-3 py-1.5 text-xs text-[#a7a7a7] transition-colors hover:bg-[#282424]/80 hover:text-[#fafbf8]"
              >
                <Linkedin className="size-3.5" />
                LinkedIn
              </a>
              <a
                href="https://x.com/aimndz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-[#282424] px-3 py-1.5 text-xs text-[#a7a7a7] transition-colors hover:bg-[#282424]/80 hover:text-[#fafbf8]"
              >
                <Twitter className="size-3.5" />
                X (Twitter)
              </a>
              <a
                href="https://www.instagram.com/aim.ndz/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg bg-[#282424] px-3 py-1.5 text-xs text-[#a7a7a7] transition-colors hover:bg-[#282424]/80 hover:text-[#fafbf8]"
              >
                <Instagram className="size-3.5" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      );
    }

    const paragraphs = text.split("\n\n");
    return (
      <div className="space-y-3 leading-relaxed text-[#fafbf8]">
        {paragraphs.map((p, idx) => {
          if (p.startsWith("1.") || p.startsWith("-")) {
            const listItems = p.split("\n");
            return (
              <ul
                key={idx}
                className={
                  p.startsWith("1.")
                    ? "list-decimal space-y-1.5 pl-5"
                    : "list-disc space-y-1.5 pl-5"
                }
              >
                {listItems.map((li, i) => {
                  const cleanedLi = li
                    .replace(/^\d+\.\s*/, "")
                    .replace(/^-\s*/, "");
                  return <li key={i}>{formatInlineMarkdown(cleanedLi)}</li>;
                })}
              </ul>
            );
          }
          return <p key={idx}>{formatInlineMarkdown(p)}</p>;
        })}
      </div>
    );
  };

  return (
    <div className="mx-auto w-full max-w-[840px] flex-1 space-y-6 px-4">
      {activeThread.messages.map((msg, index) => {
        const isLastMsg = index === activeThread.messages.length - 1;
        const showStreamingText = isLastMsg && msg.isStreaming;

        return (
          <div key={index} className="space-y-2">
            {msg.sender === "user" ? (
              /* User Message: bubble on the right */
              <div className="flex justify-end pl-12">
                <div className="max-w-[85%] rounded-2xl border border-[#282424] bg-[#0b0b0a] px-4 py-3 text-base text-[#fafbf8]">
                  {msg.text}
                </div>
              </div>
            ) : (
              /* ChatGPT Assistant Message */
              <div className="flex gap-4 pr-4">
                {/* Avatar logo */}
                <Image
                  alt="ChatGPT"
                  src="/favicon.ico"
                  width={28}
                  height={28}
                  className="size-7 shrink-0 object-contain"
                />
                {/* Response body */}
                <div className="min-w-0 flex-1 space-y-1">
                  <h3 className="font-mono text-base font-semibold text-[#fafbf8]">
                    Amiel Ian Mendoza
                  </h3>
                  <div className="text-base">
                    {showStreamingText ? (
                      <div className="chatgpt-blink">
                        {renderSpecialContent(streamingText)}
                      </div>
                    ) : (
                      renderSpecialContent(msg.text)
                    )}
                  </div>

                  {/* Message Actions */}
                  {!showStreamingText && (
                    <div className="mt-3 flex items-center gap-1 text-zinc-500">
                      <button
                        onClick={() =>
                          onCopyToClipboard(
                            msg.text,
                            `${activeThread.id}-${index}`,
                          )
                        }
                        className="cursor-pointer rounded p-1.5 transition-colors hover:bg-[#282424]/40 hover:text-zinc-300"
                        title="Copy"
                      >
                        {copiedMessageId === `${activeThread.id}-${index}` ? (
                          <Check className="size-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="size-3.5" />
                        )}
                      </button>
                      <button
                        className="cursor-pointer rounded p-1.5 transition-colors hover:bg-[#282424]/40 hover:text-zinc-300"
                        title="Good response"
                      >
                        <ThumbsUp className="size-3.5" />
                      </button>
                      <button
                        className="cursor-pointer rounded p-1.5 transition-colors hover:bg-[#282424]/40 hover:text-zinc-300"
                        title="Bad response"
                      >
                        <ThumbsDown className="size-3.5" />
                      </button>
                      <button
                        onClick={() => onRegenerate(activeThread.messages[index - 1]?.text || "")}
                        className="cursor-pointer rounded p-1.5 transition-colors hover:bg-[#282424]/40 hover:text-zinc-300"
                        title="Regenerate"
                      >
                        <RotateCcw className="size-3.5" />
                      </button>
                      <button
                        className="cursor-pointer rounded p-1.5 transition-colors hover:bg-[#282424]/40 hover:text-zinc-300"
                        title="Read aloud"
                      >
                        <Volume2 className="size-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}
