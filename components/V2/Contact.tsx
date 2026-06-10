import React from "react";
import { SectionHeading } from "./ui";
import { SOCIALS } from "./data";

export default function Contact() {
  return (
    <section id="contact" className="relative max-w-4xl mx-auto px-6 sm:px-12 py-24">
      <SectionHeading index="04" title="Kontak" />

      <div
        className="rounded-xl border border-cyan-400/25 bg-[#06001f]/70 backdrop-blur overflow-hidden shadow-[0_0_60px_rgba(157,78,255,0.12)]"
        data-aos="zoom-in"
      >
        <div className="flex items-center gap-2 px-5 py-3 border-b border-cyan-400/15 bg-cyan-400/5">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
          <span className="w-3 h-3 rounded-full bg-green-400/70" />
          <span className="ml-3 font-mono text-xs text-cyan-300/70 tracking-widest">
            terminal — establish_connection.sh
          </span>
        </div>

        <div className="p-6 sm:p-10 font-mono text-sm space-y-3">
          <p className="text-gray-500">
            <span className="text-green-400">user@raka-ai</span>
            <span className="text-cyan-400">:~$</span> ./hubungi_raka --mode=ramah
          </p>
          <h3 className="font-display text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-500 py-2">
            Hubungi Aku !
          </h3>
          <p className="text-gray-400 leading-relaxed font-sans max-w-xl">
            Aku selalu terbuka untuk setiap peluang baru, kotak masuk-ku
            terbuka. Apakah kamu memiliki pertanyaan atau hanya ingin menyapa,
            aku akan berusaha sebaik mungkin untuk menghubungimu kembali!
          </p>
          <p className="text-gray-500 pt-2">
            <span className="text-green-400">output</span>: koneksi siap —
            pilih protokol ▾
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={`mailto:${SOCIALS.email}`}
              className="px-7 py-3.5 rounded bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-[#030014] font-bold hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] transition-shadow"
            >
              ▸ Hai Raka !
            </a>
            <a
              href={SOCIALS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded border border-green-400/60 text-green-300 hover:bg-green-400/10 hover:shadow-[0_0_25px_rgba(74,222,128,0.35)] transition-all"
            >
              WhatsApp
            </a>
          </div>
          <p className="text-gray-600 pt-4 text-xs">{`// ${SOCIALS.email}`}</p>
        </div>
      </div>
    </section>
  );
}
