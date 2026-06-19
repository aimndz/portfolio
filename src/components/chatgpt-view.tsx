"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sidebar } from "./chatgpt/sidebar";
import { Header } from "./chatgpt/header";
import { SuggestedPrompts } from "./chatgpt/suggested-prompts";
import { InputBar } from "./chatgpt/input-bar";
import { MessageLogs } from "./chatgpt/message-logs";
import {
  INITIAL_THREADS,
  EXPERIENCES_LIST_STRING,
  type Thread,
  type Message,
} from "./chatgpt/types";
import { about } from "@/data/portfolio";

export function ChatGPTView() {
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null);
  const [threads, setThreads] =
    useState<Record<string, Thread>>(INITIAL_THREADS);
  const [input, setInput] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize input to empty
  useEffect(() => {
    setInput("");
  }, [activeThreadId]);

  // Scroll to bottom on updates
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeThreadId, threads, streamingText]);

  // Handle typing simulation
  const typeText = (threadId: string, fullText: string) => {
    setIsStreaming(true);
    setStreamingText("");
    let currentLength = 0;

    // Determine speed
    const charsPerTick = fullText.length > 500 ? 5 : 2;
    const intervalTime = 15; // ms

    const timer = setInterval(() => {
      currentLength += charsPerTick;
      if (currentLength >= fullText.length) {
        clearInterval(timer);
        // Save the finished message
        setThreads((prev) => {
          const thread = prev[threadId];
          if (!thread) return prev;
          const updatedMessages = [...thread.messages];
          const lastMsgIdx = updatedMessages.length - 1;
          if (
            lastMsgIdx >= 0 &&
            updatedMessages[lastMsgIdx].sender === "assistant"
          ) {
            updatedMessages[lastMsgIdx] = {
              ...updatedMessages[lastMsgIdx],
              text: fullText,
              isStreaming: false,
            };
          }
          return {
            ...prev,
            [threadId]: {
              ...thread,
              messages: updatedMessages,
            },
          };
        });
        setStreamingText("");
        setIsStreaming(false);
      } else {
        setStreamingText(fullText.substring(0, currentLength));
      }
    }, intervalTime);
  };

  const handleSendMessage = (textToSend?: string) => {
    const queryText = (textToSend || input).trim();

    // Block sending if empty or just "/"
    if (!queryText || queryText === "/" || isStreaming) return;

    if (!textToSend) {
      // Reset input to empty
      setInput("");
    }

    const userMessage: Message = { sender: "user", text: queryText };
    const placeholderAssistantMessage: Message = {
      sender: "assistant",
      text: "",
      isStreaming: true,
    };

    let currentThreadId = activeThreadId;

    // Remove leading slash for search matching
    const searchVal = queryText.startsWith("/")
      ? queryText.substring(1)
      : queryText;

    if (!currentThreadId) {
      // Create new thread
      const newId = `custom-thread-${Date.now()}`;
      const firstWords =
        queryText.split(" ").slice(0, 4).join(" ") +
        (queryText.split(" ").length > 4 ? "..." : "");

      currentThreadId = newId;
      setThreads((prev) => ({
        ...prev,
        [newId]: {
          id: newId,
          title: firstWords,
          messages: [userMessage, placeholderAssistantMessage],
        },
      }));
      setActiveThreadId(newId);
      triggerAiResponse(newId, searchVal);
    } else {
      // Add to existing thread
      setThreads((prev) => {
        const thread = prev[currentThreadId!];
        if (!thread) return prev;
        return {
          ...prev,
          [currentThreadId!]: {
            ...thread,
            messages: [
              ...thread.messages,
              userMessage,
              placeholderAssistantMessage,
            ],
          },
        };
      });
      triggerAiResponse(currentThreadId, searchVal);
    }
  };

  const triggerAiResponse = (threadId: string, query: string) => {
    const q = query.toLowerCase();
    let responseText = "";

    if (
      q.includes("about") ||
      q.includes("who is") ||
      q.includes("bio") ||
      q.includes("amiel") ||
      q.includes("mendoza")
    ) {
      responseText = about.join("\n\n");
    } else if (
      q.includes("project") ||
      q.includes("portfolio") ||
      q.includes("work") ||
      q.includes("built") ||
      q.includes("all3rounds") ||
      q.includes("articuli")
    ) {
      responseText = `Here are the principal software and creative projects built by Amiel Ian Mendoza:\n\n[PROJECTS_LIST]`;
    } else if (
      q.includes("skill") ||
      q.includes("stack") ||
      q.includes("tech") ||
      q.includes("language") ||
      q.includes("nextjs") ||
      q.includes("react") ||
      q.includes("typescript")
    ) {
      responseText = `Amiel's technical stack spans across modern frontend frameworks, backend engines, and development DevOps tools:\n\n[SKILLS_GRID]`;
    } else if (
      q.includes("experience") ||
      q.includes("job") ||
      q.includes("intern") ||
      q.includes("work history")
    ) {
      responseText =
        `Here is Amiel Ian Mendoza's professional work experience:\n\n` +
        EXPERIENCES_LIST_STRING;
    } else if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("social") ||
      q.includes("github") ||
      q.includes("linkedin")
    ) {
      responseText = `You can easily reach out to Amiel Ian Mendoza or explore more of his work online:\n\n[CONTACT_INFO]`;
    } else if (
      q.includes("hello") ||
      q.includes("hi") ||
      q.includes("hey") ||
      q.includes("welcome")
    ) {
      responseText = `Hello! I am Amiel's virtual AI assistant in this ChatGPT theme.\n\nI can tell you all about Amiel's background, projects, skill sets, and experience. What can I help you find today?`;
    } else {
      responseText = `That's an interesting question! As an AI representative for Amiel Ian Mendoza, I'm best equipped to tell you about his:\n\n- **Projects & Selected Work** (type */projects*)\n- **Tech Stack & Skills** (type */skills*)\n- **About His Background** (type */about*)\n- **Contact Information** (type */contact*)\n\nWhich of these would you like to explore?`;
    }

    typeText(threadId, responseText);
  };

  const startNewChat = () => {
    setActiveThreadId(null);
    setInput("");
    setStreamingText("");
    setIsStreaming(false);
    setIsMobileSidebarOpen(false);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMessageId(id);
    setTimeout(() => setCopiedMessageId(null), 2000);
  };

  // Connected portfolio recent items
  const recentItems = [
    { id: "about", title: "About Amiel Ian Mendoza" },
    { id: "projects", title: "Amiel's Featured Projects" },
    { id: "skills", title: "Technical Skills & Stack" },
    { id: "experience", title: "Work Experience & History" },
    { id: "contact", title: "Get in Touch / Contact" },
  ];

  const activeThread = activeThreadId ? threads[activeThreadId] : null;

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#000101] font-sans text-[#fafbf8] antialiased">
      {/* Mobile Sidebar overlay */}
      {isMobileSidebarOpen && (
        <div
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity md:hidden"
        />
      )}

      {/* Sidebar Panel Drawer (Mobile) */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[270px] shrink-0 transform border-r border-[#282424] transition-transform duration-300 ease-in-out md:hidden ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar
          activeThreadId={activeThreadId}
          recentItems={recentItems}
          onStartNewChat={startNewChat}
          onSelectThread={(id) => {
            setActiveThreadId(id);
            setStreamingText("");
            setIsStreaming(false);
            setIsMobileSidebarOpen(false);
          }}
          onCloseSidebar={() => {
            setIsSidebarCollapsed(true);
            setIsMobileSidebarOpen(false);
          }}
          onCloseMobileSidebar={() => setIsMobileSidebarOpen(false)}
        />
      </div>

      {/* Sidebar Panel (Desktop) */}
      {!isSidebarCollapsed && (
        <div className="hidden h-screen w-[260px] shrink-0 border-r border-[#282424] md:block">
          <Sidebar
            activeThreadId={activeThreadId}
            recentItems={recentItems}
            onStartNewChat={startNewChat}
            onSelectThread={(id) => {
              setActiveThreadId(id);
              setStreamingText("");
              setIsStreaming(false);
              setIsMobileSidebarOpen(false);
            }}
            onCloseSidebar={() => {
              setIsSidebarCollapsed(true);
              setIsMobileSidebarOpen(false);
            }}
            onCloseMobileSidebar={() => setIsMobileSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main Chat Panel Area */}
      <div className="relative flex h-full flex-1 flex-col items-center overflow-hidden">
        <Header
          isSidebarCollapsed={isSidebarCollapsed}
          onOpenSidebar={() => setIsSidebarCollapsed(false)}
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
        />

        {/* Scrollable Chat Area */}
        <div
          ref={chatContainerRef}
          className="chatgpt-scrollbar flex w-full flex-1 flex-col overflow-y-auto bg-[#000101] px-4 pt-2 pb-6"
        >
          {!activeThread ? (
            /* Welcome Screen / New Chat State */
            <div className="mx-auto flex h-full w-full max-w-[840px] flex-1 flex-col items-center justify-center px-4 text-center">
              <h2 className="-mt-28 mb-8 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                Learn more about me
              </h2>

              {/* Central Capsule Input bar wrapper */}
              <div className="w-full max-w-[840px]">
                <InputBar
                  input={input}
                  setInput={setInput}
                  isStreaming={isStreaming}
                  onSendMessage={handleSendMessage}
                />
              </div>

              {/* Suggested Section Pills */}
              <SuggestedPrompts onSelectPrompt={handleSendMessage} />
            </div>
          ) : (
            /* Active Conversation Thread List */
            <MessageLogs
              activeThread={activeThread}
              streamingText={streamingText}
              copiedMessageId={copiedMessageId}
              onCopyToClipboard={copyToClipboard}
              onRegenerate={(text) => triggerAiResponse(activeThread.id, text)}
              messagesEndRef={messagesEndRef}
            />
          )}
        </div>

        {/* Sticky Input Bar at Bottom (when chat is active) */}
        {activeThread && (
          <div className="sticky bottom-0 z-20 flex w-full justify-center bg-[#000101] px-4 py-2 pt-0">
            <div className="flex w-full max-w-[840px] flex-col gap-2 px-4">
              <InputBar
                input={input}
                setInput={setInput}
                isStreaming={isStreaming}
                onSendMessage={handleSendMessage}
              />
              <p className="pb-2 text-center text-[10px] text-zinc-500">
                Amiel Ian Mendoza can make mistakes. Verify important info.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
