"use client";

import React from "react";
import { PanelLeftClose, X, SquarePen } from "lucide-react";
import Image from "next/image";

interface SidebarProps {
  activeThreadId: string | null;
  recentItems: { id: string; title: string }[];
  onStartNewChat: () => void;
  onSelectThread: (id: string) => void;
  onCloseSidebar: () => void;
  onCloseMobileSidebar: () => void;
}

export function Sidebar({
  activeThreadId,
  recentItems,
  onStartNewChat,
  onSelectThread,
  onCloseSidebar,
  onCloseMobileSidebar,
}: SidebarProps) {
  return (
    <div className="flex h-full flex-col border-r border-[#282424] bg-[#0b0b0a] text-[#fafbf8]">
      {/* Sidebar Header */}
      <div className="flex h-14 items-center justify-between px-3.5">
        <button
          onClick={onStartNewChat}
          className="flex cursor-pointer items-center gap-2 rounded-lg p-1 text-zinc-400 transition-colors hover:bg-[#282424] hover:text-[#fafbf8]"
          title="New chat"
        >
          <Image
            alt="ChatGPT Logo"
            src="/favicon.ico"
            width={24}
            height={24}
            className="size-6 object-contain"
          />
        </button>
        <button
          onClick={onCloseSidebar}
          className="hidden cursor-pointer rounded-lg p-2 text-zinc-400 transition-colors hover:bg-[#282424] hover:text-[#fafbf8] md:block"
          title="Close sidebar"
        >
          <PanelLeftClose className="size-5" />
        </button>
        <button
          onClick={onCloseMobileSidebar}
          className="cursor-pointer rounded-lg p-2 text-zinc-400 transition-colors hover:bg-[#282424] hover:text-[#fafbf8] md:hidden"
        >
          <X className="size-5" />
        </button>
      </div>

      {/* New chat button pill matching standard ChatGPT style */}
      <div className="px-3.5 py-1.5">
        <button
          onClick={onStartNewChat}
          className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg border border-[#282424] bg-[#282424]/40 px-3 py-2 text-left text-sm font-medium text-zinc-200 transition-colors hover:bg-[#282424] hover:text-[#fafbf8]"
        >
          <SquarePen className="size-4.5 text-zinc-300" />
          <span>New chat</span>
        </button>
      </div>

      {/* Recents title */}
      <div className="mt-4 px-5 pb-1">
        <p className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
          Recents
        </p>
      </div>

      {/* Recents list scrollable container */}
      <div className="chatgpt-scrollbar flex-1 overflow-y-auto px-2 pb-4">
        <div className="space-y-0.5">
          {recentItems.map((item) => {
            const isActive = activeThreadId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectThread(item.id)}
                className={`flex w-full cursor-pointer items-center gap-2 truncate rounded-lg px-3 py-3 text-left text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-[#282424] text-[#fafbf8]"
                    : "text-[#a7a7a7] hover:bg-[#282424]/40 hover:text-[#fafbf8]"
                }`}
              >
                <span className="truncate">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Profile Footer Section */}
      <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#282424] bg-[#0b0b0a] px-3.5 py-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="relative size-8 shrink-0 overflow-hidden rounded-full border border-[#282424] bg-[#0b0b0a]">
            <Image
              alt="Amiel Ian Mendoza"
              src="/images/me-img.webp"
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="truncate text-left leading-snug">
            <p className="truncate text-xs font-semibold text-zinc-200">
              Amiel Ian Mendoza
            </p>
            <p className="text-[10px] font-medium text-zinc-500">
              Full-Stack Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
