import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

import { buildSystemPrompt } from "@/lib/chatKnowledge";

const ANTHROPIC_MODEL = "claude-haiku-4-5-20251001";
const MAX_TURNS = 12;
const MAX_MESSAGE_LENGTH = 2000;

const FALLBACK_REPLY =
  "Désolé, je rencontre un souci technique. Vous pouvez nous écrire directement sur WhatsApp, on vous répond rapidement : https://wa.me/2250500259286";

type ChatMessage = { role: "user" | "assistant"; content: string };

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function sanitizeMessages(input: unknown): ChatMessage[] | null {
  if (!Array.isArray(input)) return null;
  const messages = input
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        typeof m === "object" &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_TURNS)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));
  return messages.length > 0 ? messages : null;
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return json({ reply: FALLBACK_REPLY }, 400);
        }

        const { messages: rawMessages, page } =
          (body as { messages?: unknown; page?: unknown }) ?? {};
        const messages = sanitizeMessages(rawMessages);
        if (!messages) {
          return json({ reply: FALLBACK_REPLY }, 400);
        }

        const apiKey = process.env.ANTHROPIC_API_KEY;
        if (!apiKey) {
          console.error("ANTHROPIC_API_KEY manquante — impossible d'appeler l'API Anthropic.");
          return json({ reply: FALLBACK_REPLY }, 500);
        }

        try {
          const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "x-api-key": apiKey,
              "anthropic-version": "2023-06-01",
            },
            body: JSON.stringify({
              model: ANTHROPIC_MODEL,
              max_tokens: 300,
              system: buildSystemPrompt(typeof page === "string" ? page : undefined),
              messages,
            }),
          });

          if (!response.ok) {
            console.error("Erreur API Anthropic:", response.status, await response.text());
            return json({ reply: FALLBACK_REPLY }, 502);
          }

          const data = (await response.json()) as {
            content?: { type: string; text?: string }[];
          };
          const reply = data.content?.find((block) => block.type === "text")?.text?.trim();
          return json({ reply: reply || FALLBACK_REPLY });
        } catch (error) {
          console.error("Échec de l'appel à l'API Anthropic:", error);
          return json({ reply: FALLBACK_REPLY }, 502);
        }
      },
    },
  },
});
