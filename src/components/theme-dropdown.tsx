"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Theme = "dark" | "light";

const storageKey = "portfolio-theme";

export function ThemeDropdown() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const nextTheme = storedTheme === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
  }, []);

  const updateTheme = (value: string) => {
    const nextTheme = value === "light" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="h-9 cursor-pointer rounded-none border-border px-6 font-mono text-[11px] uppercase text-secondary hover:bg-muted hover:text-foreground"
          variant="outline"
        >
          Themes
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuRadioGroup onValueChange={updateTheme} value={theme}>
          <DropdownMenuRadioItem value="dark">Dark Mode</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="light">Light Mode</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
