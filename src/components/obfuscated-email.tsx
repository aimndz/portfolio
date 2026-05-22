"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";

interface ObfuscatedEmailProps {
  email: string;
  showIcon?: boolean;
  className?: string;
}

export function ObfuscatedEmail({
  email,
  showIcon = true,
  className,
}: ObfuscatedEmailProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render reversed email with RTL style to protect from bots and avoid visual flash
    const reversed = email.split("").reverse().join("");
    return (
      <span className={className}>
        {showIcon && <Mail aria-hidden="true" className="size-3.5 text-muted-foreground shrink-0" />}
        <span style={{ direction: "rtl", unicodeBidi: "bidi-override" }}>
          {reversed}
        </span>
      </span>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      className={className}
    >
      {showIcon && <Mail aria-hidden="true" className="size-3.5 text-muted-foreground shrink-0" />}
      <span>{email}</span>
    </a>
  );
}
