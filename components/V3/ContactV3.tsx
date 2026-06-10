import React from "react";
import { SOCIALS } from "./data";

export default function ContactV3() {
  return (
    <section id="contact" className="relative max-w-3xl mx-auto px-5 sm:px-8 py-28 text-center">
      <p className="text-sm font-mono text-clay mb-3">05 · Kontak</p>
      <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
        Hubungi Aku !
      </h2>
      <p className="mt-6 text-slate-400 leading-relaxed max-w-xl mx-auto">
        Aku selalu terbuka untuk setiap peluang baru — kotak masukku terbuka. Apakah kamu
        memiliki pertanyaan atau hanya ingin menyapa, aku akan berusaha sebaik mungkin untuk
        menghubungimu kembali!
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${SOCIALS.email}`}
          className="px-7 py-3.5 rounded-full bg-clay text-slate-950 font-semibold hover:bg-clay-light transition-colors"
        >
          Hai Raka ! 👋
        </a>
        <a
          href={SOCIALS.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="px-7 py-3.5 rounded-full border border-slate-700 text-slate-200 font-semibold hover:border-slate-500 hover:bg-slate-900 transition-colors"
        >
          WhatsApp
        </a>
      </div>
      <p className="mt-6 text-sm font-mono text-slate-600">
        {SOCIALS.email} · atau tekan tombol <kbd className="px-1.5 py-0.5 border border-slate-700 rounded text-slate-400">S</kbd>
      </p>
    </section>
  );
}
