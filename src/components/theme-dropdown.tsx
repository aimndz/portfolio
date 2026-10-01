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
}

export function ThemeDropdown({ align = "start" }: ThemeDropdownProps) {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Select theme"
          className="border-border text-secondary hover:bg-muted hover:text-foreground relative h-9 w-9 cursor-pointer rounded-none px-0 font-mono text-[11px] uppercase after:absolute after:-inset-1 after:content-[''] sm:w-auto sm:px-4 sm:after:hidden"
          variant="outline"
        >
          <Palette aria-hidden="true" className="size-3.5" />
          <span className="hidden sm:inline">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        <DropdownMenuRadioGroup
          onValueChange={(val) => setTheme(val as Theme)}
          value={theme}
        >
          <DropdownMenuRadioItem value="dark">
            Dark Mode
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="light">
            Light Mode
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

