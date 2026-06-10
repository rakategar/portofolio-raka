import React from "react";
import { GlitchText, Typewriter } from "./ui";
import { SOCIALS } from "./data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      {/* HUD corner brackets */}
      <div className="pointer-events-none absolute top-24 left-5 sm:left-10 w-10 h-10 border-l-2 border-t-2 border-cyan-400/40" />
      <div className="pointer-events-none absolute bottom-10 right-5 sm:right-10 w-10 h-10 border-r-2 border-b-2 border-fuchsia-500/40" />

      <p className="font-mono text-cyan-400 text-sm sm:text-base mb-4 tracking-widest">
        &gt; inisialisasi_profil<span className="animate-pulse">_</span>
      </p>

      <p className="font-mono text-gray-400 mb-2">Haii, Aku</p>

      <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-tight">
        <GlitchText
          text="RAKA TEGAR"
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-fuchsia-500"
        />
        <br />
        <span className="text-white/90">WICAKSONO</span>
      </h1>

      <h2 className="mt-6 font-mono text-lg sm:text-2xl text-gray-300">
        <span className="text-fuchsia-400">const</span>{" "}
        <span className="text-cyan-300">role</span> ={" "}
        <Typewriter
          words={[
            '"UI/UX Designer"',
            '"Front-End Web Developer"',
            '"AI Automation Builder"',
            '"Penikmat Indomie Goreng 🍜"',
          ]}
          className="text-amber-300"
        />
      </h2>

      <p className="mt-8 max-w-xl text-gray-400 leading-relaxed">
        Cuma cowo biasa yang kebetulan suka{" "}
        <span className="text-cyan-300">Web Development</span>, sama suka
        indomie goreng. Menjelajah dunia digital lewat desain, kode, dan
        otomasi AI.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={SOCIALS.cv}
          target="_blank"
          rel="noreferrer"
          className="group relative px-7 py-3.5 font-mono text-sm text-[#030014] font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded clip-corner hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] transition-shadow"
        >
          ▸ Cek CV Ku !
        </a>
        <a
          href={SOCIALS.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="px-7 py-3.5 font-mono text-sm rounded border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all"
        >
          Hubungi via WhatsApp
        </a>
      </div>

      <div className="mt-8 flex items-center gap-3 font-mono text-xs text-gray-500">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.9)]" />
          SYSTEM ONLINE
        </span>
        <span className="text-cyan-400/40">|</span>
        <span>
          Tekan tombol{" "}
          <kbd className="px-1.5 py-0.5 border border-cyan-400/40 rounded text-cyan-300">
            S
          </kbd>{" "}
          untuk WhatsApp
        </span>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyan-400/60">
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <div className="w-5 h-9 border border-cyan-400/40 rounded-full flex justify-center pt-1.5">
          <span className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
