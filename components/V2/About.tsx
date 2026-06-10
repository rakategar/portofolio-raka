import React from "react";
import Image from "next/image";
import { SectionHeading, TiltCard, Chip } from "./ui";
import { SKILLS } from "./data";

export default function About() {
  return (
    <section id="about" className="relative max-w-6xl mx-auto px-6 sm:px-12 py-24">
      <SectionHeading index="01" title="Tentang" />

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 space-y-5 text-gray-400 leading-relaxed" data-aos="fade-right">
          <p>
            Haloo aku <span className="text-cyan-300">Raka</span>, Mahasiswa
            Program Studi S1 Pendidikan Teknologi Informasi{" "}
            <span className="text-white">Universitas Negeri Surabaya</span>,
            memiliki banyak pengalaman kepemimpinan serta aktif dalam organisasi
            ekstra maupun intra kampus. Tekun, ulet, dan dengan IPK{" "}
            <span className="text-fuchsia-400 font-mono">3.91</span> menjadikanku
            sangat teliti dan serius dalam mengerjakan segala sesuatu, baik
            pekerjaan kecil maupun besar — mengutamakan kejujuran dan suka
            berinovasi, maka dari itu aku selalu tertantang mencoba hal baru.
          </p>
          <p>
            Aku sangat suka mencoba hal-hal baru. Walau basic-ku adalah{" "}
            <span className="text-cyan-300">UI/UX Design</span> dan{" "}
            <span className="text-cyan-300">Front End Web Development</span>,
            aku juga pernah belajar mobile development dengan Flutter. Selain
            itu aku aktif berkegiatan sosial dan organisasi — Himpunan Mahasiswa
            Teknik Informatika sebagai Kepala Departemen PSDM, dan Forum
            Mahasiswa Tuban Ronggolawe.
          </p>
          <p className="font-mono text-sm text-cyan-400">
            &gt; memuat_skill_modules...
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-2">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between font-mono text-xs mb-1">
                  <span className="text-gray-300 group-hover:text-cyan-300 transition-colors">
                    ▸ {skill.name}
                  </span>
                  <span className="text-cyan-400/70">{skill.level}%</span>
                </div>
                <div className="h-1 bg-cyan-950/80 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(0,240,255,0.6)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-center" data-aos="fade-left">
          <TiltCard className="relative w-64 sm:w-72">
            {/* rotating holo frame */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 opacity-40 blur-lg animate-pulse" />
            <div className="relative rounded-2xl border border-cyan-400/40 bg-[#06001f]/80 p-3 backdrop-blur">
              <div className="flex items-center gap-2 pb-2 px-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-[10px] text-cyan-300/70 tracking-widest">
                  ID-SCAN: RAKA_TEGAR.png
                </span>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/img/pasfoto.png"
                  alt="Raka Tegar Wicaksono"
                  width={400}
                  height={500}
                  className="w-full object-cover saturate-[0.85] hover:saturate-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-fuchsia-500/10 mix-blend-screen pointer-events-none" />
                <div className="scanline-overlay pointer-events-none absolute inset-0" />
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 px-1">
                <Chip>HUMAN: 100%</Chip>
                <Chip>MODE: CREATIVE</Chip>
                <Chip>☕ FUEL: INDOMIE</Chip>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
