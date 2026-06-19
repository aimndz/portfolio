"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ChatGPTView } from "@/components/chatgpt-view";

export type Theme = "dark" | "light" | "chatgpt";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const storageKey = "portfolio-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey) as Theme;
    const initialTheme: Theme =
      storedTheme === "light" || storedTheme === "chatgpt" || storedTheme === "dark"
        ? storedTheme
        : "dark";

    setTheme(initialTheme);

    const root = document.documentElement;
    root.classList.remove("light", "chatgpt");
    if (initialTheme !== "dark") {
      root.classList.add(initialTheme);
    }

    setMounted(true);
  }, []);

  const updateTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);

    const root = document.documentElement;
    root.classList.remove("light", "chatgpt");
    if (nextTheme !== "dark") {
      root.classList.add(nextTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function AppThemeContainer({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return standard children during SSR to avoid mismatch
    return <>{children}</>;
  }

  if (theme === "chatgpt") {
    return <ChatGPTView />;
  }

  return <>{children}</>;
}
