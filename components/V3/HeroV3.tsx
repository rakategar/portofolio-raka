import React, { useEffect, useState } from "react";
import { SOCIALS, STACK } from "./data";
import { useParallax } from "./hooks";

const TERMINAL_LINES = [
  { prefix: "$", text: "claude", color: "text-slate-300" },
  { prefix: ">", text: "Halo Raka! Mau build apa hari ini?", color: "text-clay" },
  { prefix: "$", text: "buatkan web yang interaktif & otomatis", color: "text-slate-300" },
  { prefix: "⏺", text: "Merancang UI ala Tailwind...", color: "text-slate-500" },
  { prefix: "⏺", text: "Merangkai workflow n8n + AI...", color: "text-slate-500" },
  { prefix: "✓", text: "Siap di-ship 🚀", color: "text-emerald-400" },
];

function Terminal() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= TERMINAL_LINES.length) return;
    const t = setTimeout(() => setStep(step + 1), step === 0 ? 600 : 750);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/80 backdrop-blur shadow-2xl shadow-slate-950/50 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-slate-500 font-mono">claude code — zsh</span>
      </div>
      <div className="p-5 font-mono text-sm space-y-2 min-h-[200px]">
        {TERMINAL_LINES.slice(0, step).map((line, i) => (
          <p key={i} className={line.color}>
            <span className="text-slate-600 mr-2">{line.prefix}</span>
            {line.text}
          </p>
        ))}
        <span className="inline-block w-2 h-4 bg-clay align-middle animate-pulse" />
      </div>
    </div>
  );
}

export default function HeroV3() {
  const blobRef = useParallax<HTMLDivElement>(-0.08);

  return (
    <section id="hero" className="relative pt-32 pb-20 px-5 sm:px-8">
      {/* gradient blob halus di belakang */}
      <div
        ref={blobRef}
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[420px] rounded-full bg-gradient-to-tr from-clay/15 via-sky-500/10 to-transparent blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 border border-slate-800 rounded-full px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            open to work — Surabaya, Indonesia
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
            Bikin web modern.
            <br />
            <span className="bg-gradient-to-r from-clay via-orange-300 to-sky-400 bg-clip-text text-transparent">
              Otomasi yang bekerja
            </span>{" "}
            untukmu.
          </h1>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-lg">
            Haii, aku <span className="text-slate-200 font-semibold">Raka Tegar Wicaksono</span> —
            UI/UX & Front End Web Developer yang suka merangkai workflow AI.
            Cuma cowo biasa yang kebetulan suka web development, sama suka
            indomie goreng.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SOCIALS.cv}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-clay text-slate-950 font-semibold hover:bg-clay-light hover:scale-105 active:scale-95 transition-all"
            >
              Cek CV Ku
            </a>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-full border border-slate-700 text-slate-200 font-semibold hover:border-slate-500 hover:bg-slate-900 hover:scale-105 active:scale-95 transition-all"
            >
              Lihat Cerita Projek ↓
            </button>
          </div>
          <p className="mt-6 text-xs text-slate-500 font-mono">
            tip: klik di area kosong — jaring neuronnya ikut bergerak ✦
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="150">
          <Terminal />
          <p className="mt-3 text-right text-xs text-slate-600 font-mono">
            dibangun bareng <span className="text-clay">Claude Code</span> ✦
          </p>
        </div>
      </div>

      {/* strip teknologi berjalan */}
      <div className="relative max-w-6xl mx-auto mt-20 overflow-hidden marquee-mask">
        <div className="marquee flex gap-3 w-max">
          {[...STACK, ...STACK].map((tech, i) => (
            <span
              key={i}
              className={`px-4 py-1.5 rounded-full border text-sm font-mono whitespace-nowrap ${
                tech === "Claude Code"
                  ? "border-clay/50 text-clay bg-clay/10"
                  : "border-slate-800 text-slate-400 bg-slate-900/50"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
