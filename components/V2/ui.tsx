import React, { useEffect, useRef, useState } from "react";

// ---------- Section heading with HUD index ----------
export function SectionHeading(props: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-12" data-aos="fade-up">
      <span className="font-mono text-cyan-400 text-sm sm:text-base">
        [{props.index}]
      </span>
      <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-wide uppercase">
        {props.title}
        <span className="text-cyan-400">_</span>
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/60 via-purple-500/30 to-transparent" />
    </div>
  );
}

// ---------- Typewriter ----------
export function Typewriter(props: { words: string[]; className?: string }) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = props.words[wordIdx % props.words.length];
    const speed = deleting ? 40 : 85;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIdx((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIdx, props.words]);

  return (
    <span className={props.className}>
      {text}
      <span className="animate-pulse text-cyan-400">▍</span>
    </span>
  );
}

// ---------- Glitch text ----------
export function GlitchText(props: { text: string; className?: string }) {
  return (
    <span className={`glitch relative inline-block ${props.className ?? ""}`} data-text={props.text}>
      {props.text}
    </span>
  );
}

// ---------- 3D tilt card wrapper ----------
export function TiltCard(props: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(0)`;
    el.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-200 will-change-transform ${props.className ?? ""}`}
    >
      {props.children}
    </div>
  );
}

// ---------- Holo chip ----------
export function Chip(props: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 text-[11px] font-mono rounded border border-cyan-400/30 bg-cyan-400/5 text-cyan-300 whitespace-nowrap">
      {props.children}
    </span>
  );
}
