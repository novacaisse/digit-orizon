import { useCallback, useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Loader2, MessageCircle, Send, X } from "lucide-react";

import { onOpenChat } from "@/lib/uiEvents";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/2250500259286";
const AUTO_OPEN_DELAY_MS = 9000;
const DISMISSED_KEY = "digitorizon-chat-dismissed";

const OPENERS: Record<string, string> = {
  "/": "Une question sur nos services ? Je peux vous aider à trouver l'offre la plus adaptée à votre activité.",
  "/services": "Vous voulez qu'on identifie ensemble l'offre la plus adaptée à votre activité ?",
  "/a-propos": "Des questions sur Digitorizon et notre façon de travailler ? Je suis là.",
  "/contact": "Besoin d'aide pour cadrer votre demande avant de l'envoyer ? Je peux vous guider.",
};

type Message = { role: "user" | "assistant"; content: string };

export function ChatWidget() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const autoTriggered = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const opener = OPENERS[pathname] ?? OPENERS["/"];

  const openWithGreeting = useCallback(() => {
    setOpen(true);
    setMessages((prev) => (prev.length > 0 ? prev : [{ role: "assistant", content: opener }]));
  }, [opener]);

  useEffect(() => onOpenChat(openWithGreeting), [openWithGreeting]);

  useEffect(() => {
    if (autoTriggered.current) return;
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISSED_KEY) === "1";
    } catch {
      // sessionStorage indisponible (navigation privée) — on se contente de ne pas mémoriser.
    }
    if (dismissed) return;

    const timer = window.setTimeout(() => {
      if (autoTriggered.current) return;
      autoTriggered.current = true;
      openWithGreeting();
    }, AUTO_OPEN_DELAY_MS);

    const target = document.getElementById("services-teaser");
    let observer: IntersectionObserver | undefined;
    if (target) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting && !autoTriggered.current) {
            autoTriggered.current = true;
            window.clearTimeout(timer);
            openWithGreeting();
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(target);
    }

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // ignore
    }
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const nextMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, page: pathname }),
      });
      const data = (await res.json()) as { reply?: string };
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "Désolé, je n'ai pas pu répondre. Essayez WhatsApp.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Désolé, une erreur est survenue. Vous pouvez nous écrire sur WhatsApp.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={openWithGreeting}
        aria-label="Ouvrir le chat Digitorizon"
        className="fixed bottom-24 right-5 sm:bottom-24 z-30 w-14 h-14 rounded-full bg-primary text-white shadow-[0_18px_40px_-12px_#F7941DB3] grid place-items-center hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-24 right-5 z-40 w-[calc(100vw-2.5rem)] max-w-sm rounded-2xl border border-border bg-card shadow-[0_30px_60px_-20px_#12100E40] overflow-hidden flex flex-col max-h-[70vh]">
      <div className="flex items-center justify-between px-4 py-3 bg-ink text-ink-foreground">
        <span className="text-sm font-semibold">Assistant Digitorizon</span>
        <button
          type="button"
          onClick={close}
          aria-label="Fermer le chat"
          className="opacity-80 hover:opacity-100"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[240px]">
        {messages.map((m, i) => (
          <div
            key={i}
            className={cn(
              "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm",
              m.role === "assistant" ? "bg-muted text-foreground" : "bg-primary text-white ml-auto",
            )}
          >
            {m.content}
          </div>
        ))}
        {loading && (
          <div className="bg-muted text-muted-foreground rounded-2xl px-4 py-2.5 text-sm w-fit flex items-center gap-2">
            <Loader2 className="w-3.5 h-3.5 animate-spin" /> En train d'écrire...
          </div>
        )}
      </div>

      <div className="border-t border-border p-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 flex items-center justify-center gap-2 text-xs font-semibold text-[#128C4A] hover:underline"
        >
          Continuer sur WhatsApp
        </a>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void send();
          }}
          className="flex items-center gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Écrivez votre message..."
            className="flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Envoyer"
            className="w-9 h-9 rounded-xl bg-primary text-white grid place-items-center disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
