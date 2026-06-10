import React from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { useParallax } from "./hooks";

const STATS = [
  { value: "3.91", label: "IPK" },
  { value: "20+", label: "Projek selesai" },
  { value: "2", label: "Organisasi aktif" },
];

export default function AboutV3() {
  const photoRef = useParallax<HTMLDivElement>(0.06);

  return (
    <section id="about" className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24">
      <SectionLabel label="01 · Tentang" title="Kenalan dulu, yuk." />

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 space-y-5 text-slate-400 leading-relaxed" data-aos="fade-up">
          <p>
            Haloo aku <span className="text-slate-100 font-semibold">Raka</span>, mahasiswa
            Program Studi S1 Pendidikan Teknologi Informasi{" "}
            <span className="text-slate-200">Universitas Negeri Surabaya</span>. Punya banyak
            pengalaman kepemimpinan, aktif di organisasi intra & ekstra kampus — tekun, ulet,
            teliti, dan serius mengerjakan segala sesuatu, baik pekerjaan kecil maupun besar.
            Mengutamakan kejujuran dan suka berinovasi, makanya aku selalu tertantang mencoba
            hal baru.
          </p>
          <p>
            Basic-ku di <span className="text-clay">UI/UX design</span> dan{" "}
            <span className="text-clay">front end web development</span>, tapi aku juga pernah
            belajar mobile development dengan Flutter — dan belakangan ketagihan membangun
            otomasi AI. Workflow favoritku: ngobrol sama{" "}
            <span className="text-clay">Claude Code</span>, lalu biarkan pipeline-nya bekerja.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-5 text-center hover:border-slate-700 transition-colors"
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-100">{s.value}</p>
                <p className="mt-1 text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2" data-aos="fade-up" data-aos-delay="100">
          <div ref={photoRef} className="relative max-w-xs mx-auto">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-clay/25 to-sky-500/15 blur-xl" />
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900 p-2.5">
              <Image
                src="/img/pasfoto.png"
                alt="Raka Tegar Wicaksono"
                width={400}
                height={500}
                className="w-full rounded-xl object-cover"
              />
              <div className="flex items-center justify-between px-2 py-2.5">
                <p className="text-sm font-semibold text-slate-200">Raka Tegar W.</p>
                <p className="text-xs font-mono text-slate-500">est. 2003</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
