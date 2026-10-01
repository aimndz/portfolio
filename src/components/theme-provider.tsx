"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const storageKey = "portfolio-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);
    const initialTheme: Theme = storedTheme === "light" ? "light" : "dark";

    setTheme(initialTheme);

    // Sanitize obsolete or unexpected stored themes in localStorage
    if (storedTheme !== "light" && storedTheme !== "dark") {
      window.localStorage.setItem(storageKey, "dark");
    }

    const root = document.documentElement;
    root.classList.remove("light");
    if (initialTheme === "light") {
      root.classList.add("light");
    }
  }, []);

  const updateTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);

    const root = document.documentElement;
    root.classList.remove("light");
    if (nextTheme === "light") {
      root.classList.add("light");
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

