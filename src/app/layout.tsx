import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider, AppThemeContainer } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amiel Ian Mendoza | Full-Stack Developer",
  description:
    "Explore the portfolio of Amiel Ian Mendoza, a full-stack developer based in Cavite, Philippines.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <AppThemeContainer>{children}</AppThemeContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
