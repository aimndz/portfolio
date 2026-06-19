"use client";

import { Palette } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme, type Theme } from "@/components/theme-provider";

interface ThemeDropdownProps {
  align?: "start" | "center" | "end";
  isChatGptHeader?: boolean;
}

export function ThemeDropdown({ align = "start", isChatGptHeader = false }: ThemeDropdownProps) {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {isChatGptHeader ? (
          <Button
            className="flex h-8 items-center gap-1.5 rounded-lg border border-[#282424] bg-[#0b0b0a] px-3 text-xs font-medium text-[#fafbf8] transition-colors hover:bg-[#282424] hover:text-[#fafbf8] cursor-pointer"
            variant="ghost"
          >
            <Palette aria-hidden="true" className="size-3.5" />
            <span className="capitalize">Theme</span>
          </Button>
        ) : (
          <Button
            className="h-9 w-9 sm:w-auto cursor-pointer rounded-none border-border px-0 sm:px-4 font-mono text-[11px] uppercase text-secondary hover:bg-muted hover:text-foreground"
            variant="outline"
          >
            <Palette aria-hidden="true" className="size-3.5" />
            <span className="hidden sm:inline">Theme</span>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className={isChatGptHeader ? "bg-[#0b0b0a] border-[#282424] text-[#fafbf8] rounded-xl p-1.5 min-w-36" : ""}
      >
        <DropdownMenuRadioGroup onValueChange={(val) => setTheme(val as Theme)} value={theme}>
          <DropdownMenuRadioItem
            value="dark"
            className={isChatGptHeader ? "normal-case font-sans text-xs font-semibold text-[#fafbf8] rounded-lg focus:bg-[#282424] focus:text-[#fafbf8] hover:bg-[#282424] hover:text-[#fafbf8] px-2 py-1.5 pl-7 transition-colors cursor-pointer" : ""}
          >
            Dark Mode
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="light"
            className={isChatGptHeader ? "normal-case font-sans text-xs font-semibold text-[#fafbf8] rounded-lg focus:bg-[#282424] focus:text-[#fafbf8] hover:bg-[#282424] hover:text-[#fafbf8] px-2 py-1.5 pl-7 transition-colors cursor-pointer" : ""}
          >
            Light Mode
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="chatgpt"
            className={isChatGptHeader ? "normal-case font-sans text-xs font-semibold text-[#fafbf8] rounded-lg focus:bg-[#282424] focus:text-[#fafbf8] hover:bg-[#282424] hover:text-[#fafbf8] px-2 py-1.5 pl-7 transition-colors cursor-pointer" : ""}
          >
            ChatGPT
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
