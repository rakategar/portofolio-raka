import React, { useState } from "react";
import { SectionHeading } from "./ui";
import { EDUCATION, ORGANIZATIONS, ExperienceItem } from "./data";

function Timeline(props: { items: ExperienceItem[] }) {
  return (
    <div className="relative pl-8 space-y-10">
      {/* vertical data stream */}
      <div className="absolute left-[7px] top-1 bottom-1 w-px bg-gradient-to-b from-cyan-400 via-purple-500/60 to-transparent" />
      {props.items.map((item, i) => (
        <div key={i} className="relative" data-aos="fade-up" data-aos-delay={i * 100}>
          <span className="absolute -left-8 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-cyan-400 bg-[#030014] shadow-[0_0_12px_rgba(0,240,255,0.8)]">
            <span className="absolute inset-1 rounded-full bg-cyan-400 animate-pulse" />
          </span>
          <p className="font-mono text-xs text-fuchsia-400 tracking-widest">{item.date}</p>
          <h3 className="text-white font-bold text-lg mt-1">
            {item.role} <span className="text-cyan-400">@</span>{" "}
            <span className="text-cyan-300">{item.place}</span>
          </h3>
          {item.desc && (
            <p className="text-gray-400 text-sm mt-2 leading-relaxed max-w-2xl">
              {item.desc}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  const [tab, setTab] = useState<"edu" | "org">("edu");

  return (
    <section id="experience" className="relative max-w-6xl mx-auto px-6 sm:px-12 py-24">
      <SectionHeading index="02" title="Pengalaman" />

      <div className="flex gap-3 mb-12 font-mono text-sm" data-aos="fade-up">
        <button
          onClick={() => setTab("edu")}
          className={`px-5 py-2.5 rounded border transition-all ${
            tab === "edu"
              ? "border-cyan-400 text-cyan-300 bg-cyan-400/10 shadow-[0_0_20px_rgba(0,240,255,0.25)]"
              : "border-gray-700 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-300"
          }`}
        >
          ▸ Pendidikan
        </button>
        <button
          onClick={() => setTab("org")}
          className={`px-5 py-2.5 rounded border transition-all ${
            tab === "org"
              ? "border-fuchsia-500 text-fuchsia-300 bg-fuchsia-500/10 shadow-[0_0_20px_rgba(255,46,196,0.25)]"
              : "border-gray-700 text-gray-400 hover:border-fuchsia-500/50 hover:text-fuchsia-300"
          }`}
        >
          ▸ Organisasi
        </button>
      </div>

      <div className="rounded-xl border border-cyan-400/15 bg-[#06001f]/40 backdrop-blur-sm p-6 sm:p-10">
        {tab === "edu" ? <Timeline items={EDUCATION} /> : <Timeline items={ORGANIZATIONS} />}
      </div>
    </section>
  );
}
