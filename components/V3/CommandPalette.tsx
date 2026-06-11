import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SOCIALS } from "./data";

type Command = {
  id: string;
  label: string;
  hint: string;
  icon: string;
  run: () => void;
};

// Command palette ala editor (⌘K / Ctrl+K) — navigasi, link, dan easter egg.
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setCursor(0);
  }, []);

  const commands = useMemo<Command[]>(() => {
    const go = (id: string) => () => {
      close();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    const ext = (url: string) => () => {
      close();
      window.open(url, "_blank");
    };
    return [
      { id: "about", label: "Buka: Tentang", hint: "section", icon: "→", run: go("about") },
      { id: "workflow", label: "Buka: Workflow", hint: "section", icon: "→", run: go("workflow") },
      { id: "projects", label: "Buka: Projek", hint: "section", icon: "→", run: go("projects") },
      { id: "experience", label: "Buka: Pengalaman", hint: "section", icon: "→", run: go("experience") },
      { id: "contact", label: "Buka: Kontak", hint: "section", icon: "→", run: go("contact") },
      { id: "cv", label: "Lihat CV", hint: "pdf", icon: "⌘", run: ext(SOCIALS.cv) },
      { id: "github", label: "GitHub — rakategar", hint: "link", icon: "⌘", run: ext(SOCIALS.github) },
      { id: "linkedin", label: "LinkedIn", hint: "link", icon: "⌘", run: ext(SOCIALS.linkedin) },
      { id: "instagram", label: "Instagram", hint: "link", icon: "⌘", run: ext(SOCIALS.instagram) },
      { id: "wa", label: "Chat WhatsApp", hint: "link", icon: "⌘", run: ext(SOCIALS.whatsapp) },
      {
        id: "email",
        label: "Kirim Email",
        hint: "mailto",
        icon: "⌘",
        run: () => {
          close();
          window.location.href = `mailto:${SOCIALS.email}`;
        },
      },
      {
        id: "burst",
        label: "Ledakan neuron 🎆",
        hint: "easter egg",
        icon: "✦",
        run: () => {
          close();
          window.dispatchEvent(new CustomEvent("neuron:burst"));
        },
      },
      {
        id: "klod",
        label: "Sapa Klod",
        hint: "easter egg",
        icon: "✦",
        run: () => {
          close();
          window.dispatchEvent(new CustomEvent("klod:quip"));
        },
      },
      {
        id: "intro",
        label: "Putar ulang intro",
        hint: "replay",
        icon: "✦",
        run: () => {
          try {
            sessionStorage.removeItem("introPlayed");
          } catch {}
          window.location.reload();
        },
      },
    ];
  }, [close]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => (c.label + " " + c.hint).toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setCursor(0);
      } else if (e.key === "Escape") {
        close();
      }
    };
    const onOpen = () => {
      setOpen(true);
      setQuery("");
      setCursor(0);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("palette:open", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("palette:open", onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center pt-[18vh] px-4" onClick={close}>
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />
      <div
        className="palette-pop relative w-full max-w-lg rounded-xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black/50 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 border-b border-slate-800">
          <span className="text-slate-500 font-mono">&gt;</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCursor(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setCursor((c) => Math.min(c + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setCursor((c) => Math.max(c - 1, 0));
              } else if (e.key === "Enter" && filtered[cursor]) {
                filtered[cursor].run();
              }
            }}
            placeholder="Ketik perintah… (coba: neuron)"
            className="flex-1 bg-transparent py-3.5 text-sm text-slate-100 placeholder:text-slate-600 outline-none"
          />
          <kbd className="text-[10px] font-mono text-slate-500 border border-slate-700 rounded px-1.5 py-0.5">
            esc
          </kbd>
        </div>
        <div className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-sm text-slate-500 text-center font-mono">
              tidak ada hasil untuk &ldquo;{query}&rdquo; 😅
            </p>
          )}
          {filtered.map((c, i) => (
            <button
              key={c.id}
              onMouseEnter={() => setCursor(i)}
              onClick={c.run}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                i === cursor ? "bg-clay/10 text-clay" : "text-slate-300"
              }`}
            >
              <span className={`font-mono ${i === cursor ? "text-clay" : "text-slate-600"}`}>{c.icon}</span>
              <span className="flex-1">{c.label}</span>
              <span className="text-[10px] font-mono text-slate-600 uppercase">{c.hint}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 px-4 py-2 border-t border-slate-800 text-[10px] font-mono text-slate-600">
          <span>↑↓ navigasi</span>
          <span>↵ pilih</span>
          <span>esc tutup</span>
          <span className="ml-auto text-clay/70">raka.dev palette</span>
        </div>
      </div>
    </div>
  );
}
