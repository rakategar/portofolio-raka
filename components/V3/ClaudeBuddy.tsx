import React, { useEffect, useRef, useState } from "react";
import { SOCIALS } from "./data";

const SECTION_LINES: Record<string, string> = {
  hero: "Halo! Aku Klod, asisten kecil di portfolio ini. Coba klik di mana saja — jaring neuronnya ikut bergerak 😉",
  about: "Raka itu detail banget — IPK 3.91 lho. Dan ya, bahan bakarnya indomie goreng.",
  workflow: "Ini bagian favoritku: dari ide, dibangun bareng Claude Code, dirangkai dengan n8n, lalu ship! 🚀",
  projects: "Scroll pelan-pelan ya, tiap projek punya ceritanya sendiri. Chapter 02 itu AI yang bales komentar Instagram!",
  experience: "Selain ngoding, Raka juga Ketua Umum & Kepala Departemen. Multitasking-nya jalan.",
  contact: "Sampai di ujung halaman! Sapa Raka — kotak masuknya selalu terbuka 💌",
};

const QUIPS = [
  "Psst... portfolio ini dibangun bareng Claude Code 🧡",
  "Tekan tombol S di keyboard buat langsung ke WhatsApp Raka.",
  "Aku bukan Claude asli, tapi kami satu keluarga ✦",
  "Klik di area kosong — neuronnya ngumpul ke titik klikmu!",
  "Fun fact: Raka suka indomie goreng. Sama, aku juga... andai bisa makan.",
  "Coba hover ke kartu projek, ada detail kecil di mana-mana.",
];

export default function ClaudeBuddy() {
  const [message, setMessage] = useState("");
  const [typed, setTyped] = useState("");
  const [open, setOpen] = useState(true);
  const [spin, setSpin] = useState(false);
  const quipIdx = useRef(0);
  const pupilsRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // sapaan awal
  useEffect(() => {
    const t = setTimeout(() => setMessage(SECTION_LINES.hero), 1200);
    return () => clearTimeout(t);
  }, []);

  // komentar kontekstual per section
  useEffect(() => {
    const ids = Object.keys(SECTION_LINES);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setMessage(SECTION_LINES[entry.target.id]);
          }
        }
      },
      { threshold: 0.35 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // efek mengetik
  useEffect(() => {
    setTyped("");
    if (!message) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(message.slice(0, i));
      if (i >= message.length) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, [message]);

  // pupil mengikuti kursor
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const wrap = wrapRef.current;
      const pupils = pupilsRef.current;
      if (!wrap || !pupils) return;
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const d = Math.hypot(dx, dy) || 1;
      const max = 2.5;
      pupils.style.transform = `translate(${(dx / d) * max}px, ${(dy / d) * max}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const handleAvatarClick = () => {
    setSpin(true);
    setTimeout(() => setSpin(false), 700);
    if (!open) {
      setOpen(true);
    }
    setMessage(QUIPS[quipIdx.current % QUIPS.length]);
    quipIdx.current++;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* gelembung bicara — nuansa UI Claude (ivory) */}
      {open && message && (
        <div className="relative max-w-[260px] rounded-2xl rounded-br-sm bg-[#f5efe6] text-[#3d3929] shadow-xl shadow-black/30 px-4 py-3 text-sm leading-relaxed">
          <button
            onClick={() => setOpen(false)}
            aria-label="Tutup"
            className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-[#3d3929] text-[#f5efe6] text-[10px] leading-5 text-center hover:scale-110 transition-transform"
          >
            ×
          </button>
          <p className="font-medium min-h-[1.25rem]">{typed}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <a
              href={SOCIALS.cv}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-0.5 text-[11px] rounded-full bg-clay/15 text-clay-dark font-semibold hover:bg-clay/25 transition-colors"
            >
              CV Raka
            </a>
            <a
              href={SOCIALS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-0.5 text-[11px] rounded-full bg-clay/15 text-clay-dark font-semibold hover:bg-clay/25 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-0.5 text-[11px] rounded-full bg-clay/15 text-clay-dark font-semibold hover:bg-clay/25 transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="mt-1.5 text-[10px] text-[#8a8270]">✦ terinspirasi Claude</p>
        </div>
      )}

      {/* avatar starburst ala Claude */}
      <div
        ref={wrapRef}
        onClick={handleAvatarClick}
        role="button"
        aria-label="Klod — asisten portfolio"
        className={`relative w-14 h-14 cursor-pointer select-none buddy-float ${spin ? "buddy-spin" : ""}`}
        title="Klik aku!"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_12px_rgba(217,119,87,0.45)]">
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="20"
              rx="10"
              ry="22"
              fill="#D97757"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="20" fill="#D97757" />
        </svg>
        {/* mata */}
        <div
          ref={pupilsRef}
          className="absolute inset-0 flex items-center justify-center gap-[7px] transition-transform duration-75"
        >
          <span className="buddy-eye w-[5px] h-[8px] rounded-full bg-[#2a1810]" />
          <span className="buddy-eye w-[5px] h-[8px] rounded-full bg-[#2a1810]" />
        </div>
      </div>
    </div>
  );
}
