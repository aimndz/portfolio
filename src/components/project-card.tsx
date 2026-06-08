"use client";

import { useState, useEffect, useMemo } from "react";

import { Card } from "@/components/ui/card";
import Image from "next/image";

type ProjectCardProps = {
  project: {
    name: string;
    year: string;
    description: string;
    href: string;
    featured: boolean;
    stack?: string[];
    github?: string;
    website?: string;
    images?: string[];
  };
  showStack?: boolean;
};

export function ProjectCard({ project, showStack = false }: ProjectCardProps) {
  const hasExternalLinks = !!(project.github || project.website);

  const displayImages = useMemo(() => project.images || [], [project.images]);
  const hasImages = displayImages.length > 0;
  const showActionBar = hasExternalLinks || hasImages;

  // Interactive state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  // Reset active image index when drawer closes
  useEffect(() => {
    if (!isDrawerOpen) {
      setActiveImgIndex(0);
      setIsFullscreenOpen(false);
    }
  }, [isDrawerOpen]);

  // Prevent scroll when mobile drawer is active
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  // Keyboard accessibility
  useEffect(() => {
    if (!isDrawerOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreenOpen) {
          setIsFullscreenOpen(false);
        } else {
          setIsDrawerOpen(false);
        }
      } else if (
        e.key === "ArrowLeft" &&
        hasImages &&
        displayImages.length > 1
      ) {
        setActiveImgIndex((prev) =>
          prev === 0 ? displayImages.length - 1 : prev - 1,
        );
      } else if (
        e.key === "ArrowRight" &&
        hasImages &&
        displayImages.length > 1
      ) {
        setActiveImgIndex((prev) =>
          prev === displayImages.length - 1 ? 0 : prev + 1,
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDrawerOpen, hasImages, displayImages, isFullscreenOpen]);

  // Get formatted domain or mock domain for retro browser mockup
  const getProjectDomain = () => {
    if (project.website) {
      try {
        return new URL(project.website).hostname;
      } catch {
        return project.website.replace(/^https?:\/\//, "");
      }
    }
    if (project.github) {
      try {
        const url = new URL(project.github);
        return `${url.hostname}/${url.pathname.replace(/^\//, "")}`;
      } catch {
        return project.github.replace(/^https?:\/\//, "");
      }
    }
    return `${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.dev`;
  };

  return (
    <>
      <Card className="group hover:bg-muted/50 relative -mt-px -ml-px flex min-h-36 cursor-pointer flex-col justify-between overflow-visible transition-colors hover:z-10">
        {/* Card absolute overlay to open modal instead of external navigation */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsDrawerOpen(true);
          }}
          aria-label={`View details for ${project.name}`}
          className="absolute inset-0 z-10 animate-none cursor-pointer border-0 bg-transparent p-0 outline-none"
        />

        {/* Card Content */}
        <div className="pointer-events-none relative z-10 flex flex-1 flex-col p-5 pb-4 sm:p-6">
          <span className="text-muted-foreground font-mono text-xs leading-none">
            {project.year}
          </span>
          <h3 className="text-foreground group-hover:text-primary mt-1.5 text-sm leading-5 font-semibold transition-colors">
            {project.name}
          </h3>
          <p className="text-secondary mt-1 flex-1 text-sm leading-6">
            {project.description}
          </p>

          {/* Tech Stack */}
          {showStack && project.stack && project.stack.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-muted text-muted-foreground px-1.5 py-0.5 font-mono text-[10px] tracking-wide uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* External links and Screenshots bar */}
        {showActionBar && (
          <div className="pointer-events-none relative z-20 flex gap-2 px-5 pt-0 pb-5 sm:px-6 sm:pb-6">
            {/* Screenshots Button (Desktop & Mobile) */}
            {hasImages && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsDrawerOpen(true);
                }}
                className="text-muted-foreground hover:border-primary hover:text-foreground border-border bg-card pointer-events-auto flex h-7 w-7 cursor-pointer items-center justify-center border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                title="View Screenshots"
                aria-label={`${project.name} Screenshots`}
              >
                {/* SVG Image Icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
                  <path
                    d="M21 15L16 10L5 21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:border-primary hover:text-foreground border-border bg-card pointer-events-auto flex h-7 w-7 cursor-pointer items-center justify-center border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                title="View GitHub Repository"
                aria-label={`${project.name} GitHub Repository`}
              >
                {/* GitHub icon */}
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                >
                  <path
                    d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            )}

            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:border-primary hover:text-foreground border-border bg-card pointer-events-auto flex h-7 w-7 cursor-pointer items-center justify-center border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                title="View Live Website"
                aria-label={`${project.name} Live Website`}
              >
                {/* Website icon */}
                <svg
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                >
                  <path
                    d="M3.82538 18.6746C1.85625 16.7055 0.75 14.0348 0.75 11.25C0.75 8.46523 1.85625 5.79451 3.82538 3.82538C5.79451 1.85625 8.46523 0.75 11.25 0.75C14.0348 0.75 16.7055 1.85625 18.6746 3.82538C20.6438 5.79451 21.75 8.46523 21.75 11.25C21.75 14.0348 20.6438 16.7055 18.6746 18.6746C16.7055 20.6438 14.0348 21.75 11.25 21.75C8.46523 21.75 5.79451 20.6438 3.82538 18.6746Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.06802 3.82538C7.22411 5.79451 6.75 8.46523 6.75 11.25C6.75 14.0348 7.22411 16.7055 8.06802 18.6746C8.91193 20.6438 10.0565 21.75 11.25 21.75C12.4435 21.75 13.5881 20.6438 14.432 18.6746C15.2759 16.7055 15.75 14.0348 15.75 11.25C15.75 8.46523 15.2759 5.79451 14.432 3.82538C13.5881 1.85625 12.4435 0.75 11.25 0.75C10.0565 0.75 8.91193 1.85625 8.06802 3.82538Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.5 14.75H21M1.5 7.75H21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            )}
          </div>
        )}
      </Card>

      {/* Responsive Dialog Modal (Desktop & Mobile) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center md:items-center md:justify-center">
          {/* Backdrop overlay with blur */}
          <div
            className="bg-background/80 animate-fade-in absolute inset-0 cursor-pointer backdrop-blur-sm"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Dialog frame: morphs between bottom sheet (mobile) and centered panel (desktop) */}
          <div className="bg-background border-border animate-slide-up relative z-10 flex max-h-[90vh] w-full flex-col border-t p-4 md:max-h-[85vh] md:max-w-2xl md:border md:p-6 md:shadow-2xl">
            {/* Retro Drawer Grab Handle (Mobile only) */}
            <div className="bg-muted-foreground/30 mx-auto mb-5 h-1 w-12 rounded-full md:hidden" />

            {/* Body: Scrollable image, carousel controls, and description */}
            <div className="flex-1 space-y-4 overflow-y-auto">
              {displayImages && displayImages.length > 0 && (
                <div className="space-y-2">
                  {/* Browser mockup window frame */}
                  <div className="border-border bg-background flex w-full flex-col overflow-hidden border">
                    {/* Browser window header */}
                    <div className="bg-muted/40 border-border relative flex h-8 items-center border-b px-4 select-none">
                      {/* Window dot controls (macOS style but monochrome retro) */}
                      <div className="flex items-center gap-1.5">
                        <div className="bg-muted-foreground/35 h-2 w-2 rounded-full" />
                        <div className="bg-muted-foreground/35 h-2 w-2 rounded-full" />
                        <div className="bg-muted-foreground/35 h-2 w-2 rounded-full" />
                      </div>

                      {/* URL bar (centered monospace text) */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-0 flex items-center justify-center">
                        <span className="text-muted-foreground max-w-[60%] truncate font-mono text-[10px] tracking-tight">
                          {getProjectDomain()}
                        </span>
                      </div>

                      {/* Image index counter on the right side */}
                      {displayImages && displayImages.length > 1 && (
                        <span className="text-muted-foreground z-10 ml-auto font-mono text-[10px] select-none">
                          {activeImgIndex + 1}/{displayImages.length}
                        </span>
                      )}
                    </div>

                    {/* Screenshot image container */}
                    <div
                      onClick={() => setIsFullscreenOpen(true)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setIsFullscreenOpen(true);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label="View screenshot fullscreen"
                      className="bg-background focus-visible:ring-ring relative w-full cursor-pointer overflow-hidden border-t-0 outline-none focus-visible:ring-1"
                    >
                      {displayImages.map((src, index) => {
                        const isActive = index === activeImgIndex;
                        return (
                          <Image
                            key={src}
                            src={src}
                            alt={`${project.name} preview screenshot ${index + 1}`}
                            width={1600}
                            height={1000}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                            className={`max-h-[50vh] object-contain md:max-h-[60vh] ${
                              isActive
                                ? "relative block h-auto w-full opacity-100"
                                : "pointer-events-none absolute inset-0 h-full w-full opacity-0"
                            }`}
                            priority={index === 0 || isActive}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Mono-styled Carousel controls */}
                  {displayImages.length > 1 && (
                    <div className="border-border bg-muted/20 flex items-center justify-between border px-3 py-2 font-mono text-[11px]">
                      <button
                        onClick={() =>
                          setActiveImgIndex((prev) =>
                            prev === 0 ? displayImages.length - 1 : prev - 1,
                          )
                        }
                        className="text-secondary hover:text-primary flex cursor-pointer items-center gap-1 font-semibold uppercase transition-colors select-none"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                        >
                          <path
                            d="M15 19L8 12L15 5"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Prev
                      </button>
                      <div className="flex items-center gap-1.5 select-none">
                        {displayImages.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveImgIndex(idx)}
                            className={`cursor-pointer text-[12px] font-bold transition-colors ${
                              idx === activeImgIndex
                                ? "text-primary"
                                : "text-muted-foreground/35 hover:text-muted-foreground"
                            }`}
                            title={`Go to screenshot ${idx + 1}`}
                          >
                            {idx === activeImgIndex ? "■" : "□"}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() =>
                          setActiveImgIndex((prev) =>
                            prev === displayImages.length - 1 ? 0 : prev + 1,
                          )
                        }
                        className="text-secondary hover:text-primary flex cursor-pointer items-center gap-1 font-semibold uppercase transition-colors select-none"
                      >
                        Next
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                        >
                          <path
                            d="M9 5L16 12L9 19"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div>
                <div className="flex items-baseline justify-between pt-1">
                  <h3 className="text-foreground text-lg font-bold">
                    {project.name}
                  </h3>
                  <span className="text-muted-foreground font-mono text-xs">
                    {project.year}
                  </span>
                </div>
                <p className="text-secondary pt-1 text-sm leading-6">
                  {project.description}
                </p>
                {/* Tech Stack (without heading) */}
                {project.stack && project.stack.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-muted text-muted-foreground px-1.5 py-0.5 font-mono text-[10px] tracking-wide uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className={`mt-6 grid gap-3 ${project.github && project.website ? "grid-cols-2" : "grid-cols-1"}`}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground border-border bg-card hover:bg-muted flex items-center justify-center gap-1.5 border py-2.5 text-center font-mono text-xs uppercase transition-colors"
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      d="M10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 14.42 2.87 18.17 6.84 19.5C7.34 19.58 7.5 19.27 7.5 19V17.31C4.73 17.91 4.14 15.97 4.14 15.97C3.68 14.81 3.03 14.5 3.03 14.5C2.12 13.88 3.1 13.9 3.1 13.9C4.1 13.97 4.63 14.93 4.63 14.93C5.5 16.45 6.97 16 7.54 15.76C7.63 15.11 7.89 14.67 8.17 14.42C5.95 14.17 3.62 13.31 3.62 9.5C3.62 8.39 4 7.5 4.65 6.79C4.55 6.54 4.2 5.5 4.75 4.15C4.75 4.15 5.59 3.88 7.5 5.17C8.29 4.95 9.15 4.84 10 4.84C10.85 4.84 11.71 4.95 12.5 5.17C14.41 3.88 15.25 4.15 15.25 4.15C15.8 5.5 15.45 6.54 15.35 6.79C16 7.5 16.38 8.39 16.38 9.5C16.38 13.32 14.04 14.16 11.81 14.41C12.17 14.72 12.5 15.33 12.5 16.26V19C12.5 19.27 12.66 19.59 13.17 19.5C17.14 18.16 20 14.42 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
                      fill="currentColor"
                    />
                  </svg>
                  GitHub
                </a>
              )}
              {project.website ? (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground bg-primary flex items-center justify-center gap-1.5 py-2.5 text-center font-mono text-xs uppercase transition-colors hover:opacity-90"
                >
                  <svg
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      d="M3.82538 18.6746C1.85625 16.7055 0.75 14.0348 0.75 11.25C0.75 8.46523 1.85625 5.79451 3.82538 3.82538C5.79451 1.85625 8.46523 0.75 11.25 0.75C14.0348 0.75 16.7055 1.85625 18.6746 3.82538C20.6438 5.79451 21.75 8.46523 21.75 11.25C21.75 14.0348 20.6438 16.7055 18.6746 18.6746C16.7055 20.6438 14.0348 21.75 11.25 21.75C8.46523 21.75 5.79451 20.6438 3.82538 18.6746Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.06802 3.82538C7.22411 5.79451 6.75 8.46523 6.75 11.25C6.75 14.0348 7.22411 16.7055 8.06802 18.6746C8.91193 20.6438 10.0565 21.75 11.25 21.75C12.4435 21.75 13.5881 20.6438 14.432 18.6746C15.2759 16.7055 15.75 14.0348 15.75 11.25C15.75 8.46523 15.2759 5.79451 14.432 3.82538C13.5881 1.85625 12.4435 0.75 11.25 0.75C10.0565 0.75 8.91193 1.85625 8.06802 3.82538Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.5 14.75H21M1.5 7.75H21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Visit Live
                </a>
              ) : (
                !project.github && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground bg-primary flex items-center justify-center gap-1.5 py-2.5 text-center font-mono text-xs uppercase transition-colors hover:opacity-90"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 3H21V9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 14L21 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Learn More
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Overlay */}
      {isFullscreenOpen && displayImages && displayImages.length > 0 && (
        <div
          className="animate-fade-in fixed inset-0 z-60 flex flex-col items-center justify-center bg-black/95 px-0 py-12 backdrop-blur-md"
          onClick={() => setIsFullscreenOpen(false)}
        >
          {/* Close button at top right */}
          <div className="absolute top-4 right-4 z-70">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFullscreenOpen(false);
              }}
              className="border-border bg-card text-foreground hover:bg-muted flex h-8 w-8 cursor-pointer items-center justify-center border transition-colors select-none active:translate-y-0.5"
              aria-label="Close fullscreen view"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Title/Counter at top left - hidden on desktop view */}
          <div className="text-muted-foreground absolute top-4 left-4 z-70 hidden font-mono text-[10px] select-none sm:block md:hidden">
            {project.name.toUpperCase()} &mdash; {activeImgIndex + 1}/
            {displayImages.length}
          </div>

          {/* Main image container */}
          <div
            className="relative flex max-h-[75vh] w-full items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsFullscreenOpen(false);
              }
            }}
          >
            {displayImages.map((src, index) => {
              const isActive = index === activeImgIndex;
              return (
                <Image
                  key={`fs-${src}`}
                  src={src}
                  alt={`${project.name} fullscreen screenshot ${index + 1}`}
                  width={2000}
                  height={1250}
                  sizes="100vw"
                  className={`max-h-[70vh] w-full max-w-full object-contain transition-all duration-300 select-none md:max-h-[75vh] ${
                    isActive
                      ? "relative block scale-100 opacity-100"
                      : "pointer-events-none absolute scale-95 opacity-0"
                  }`}
                  priority={isActive}
                />
              );
            })}
          </div>

          {/* Desktop-only Image Counter (placed below the image container, not covering it) */}
          {displayImages.length > 1 && (
            <div className="border-border text-muted-foreground z-75 mt-4 hidden border bg-black/75 px-2.5 py-1.5 font-mono text-[10px] select-none md:block">
              {activeImgIndex + 1} / {displayImages.length}
            </div>
          )}

          {/* Fullscreen Navigation Controls */}
          {displayImages.length > 1 && (
            <>
              {/* Left Floating Arrow (Desktop) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIndex((prev) =>
                    prev === 0 ? displayImages!.length - 1 : prev - 1,
                  );
                }}
                className="border-border bg-card text-foreground hover:bg-muted absolute top-1/2 left-6 z-70 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center border font-mono text-lg font-bold transition-colors select-none active:translate-y-[calc(-50%+2px)] md:flex"
                title="Previous Image"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M15 19L8 12L15 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Right Floating Arrow (Desktop) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIndex((prev) =>
                    prev === displayImages!.length - 1 ? 0 : prev + 1,
                  );
                }}
                className="border-border bg-card text-foreground hover:bg-muted absolute top-1/2 right-6 z-70 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center border font-mono text-lg font-bold transition-colors select-none active:translate-y-[calc(-50%+2px)] md:flex"
                title="Next Image"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M9 5L16 12L9 19"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Bottom Navigation controls (Mobile only) */}
              <div className="absolute bottom-6 z-70 flex items-center gap-4 font-mono text-[11px] select-none md:hidden">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImgIndex((prev) =>
                      prev === 0 ? displayImages!.length - 1 : prev - 1,
                    );
                  }}
                  className="border-border bg-card text-foreground hover:bg-muted flex cursor-pointer items-center gap-1.5 border px-3 py-1.5 uppercase transition-colors active:translate-y-0.5"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      d="M15 19L8 12L15 5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Prev
                </button>
                <span className="text-muted-foreground bg-background border-border border px-2 py-1">
                  {activeImgIndex + 1} / {displayImages.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImgIndex((prev) =>
                      prev === displayImages!.length - 1 ? 0 : prev + 1,
                    );
                  }}
                  className="border-border bg-card text-foreground hover:bg-muted flex cursor-pointer items-center gap-1.5 border px-3 py-1.5 uppercase transition-colors active:translate-y-0.5"
                >
                  Next
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      d="M9 5L16 12L9 19"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
