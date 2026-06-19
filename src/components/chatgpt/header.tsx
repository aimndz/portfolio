"use client";

import React from "react";
import { PanelLeft, Menu } from "lucide-react";
import { ThemeDropdown } from "@/components/theme-dropdown";

interface HeaderProps {
  isSidebarCollapsed: boolean;
  onOpenSidebar: () => void;
  onOpenMobileSidebar: () => void;
}

export function Header({
  isSidebarCollapsed,
  onOpenSidebar,
  onOpenMobileSidebar,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 w-full items-center justify-between border-b border-[#282424] bg-[#000101]/80 px-4 backdrop-blur">
      <div className="flex items-center gap-2">
        {/* Sidebar toggle buttons */}
        {isSidebarCollapsed && (
          <button
            onClick={onOpenSidebar}
            className="hidden cursor-pointer rounded-lg p-2 text-zinc-400 transition-colors hover:bg-[#282424] hover:text-[#fafbf8] md:block"
            title="Open sidebar"
          >
            <PanelLeft className="size-5" />
          </button>
        )}
        <button
          onClick={onOpenMobileSidebar}
          className="cursor-pointer rounded-lg p-2 text-zinc-400 transition-colors hover:bg-[#282424] hover:text-[#fafbf8] md:hidden"
        >
          <Menu className="size-5" />
        </button>
        <span className="pl-1 font-sans text-sm font-semibold text-[#fafbf8]">
          ChatGPT
        </span>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-2">
        {/* Integrated Theme Toggle dropdown styled for ChatGPT */}
        <ThemeDropdown align="end" isChatGptHeader={true} />
      </div>
    </header>
  );
}
