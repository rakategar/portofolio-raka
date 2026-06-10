import React from "react";
import SectionLabel from "./SectionLabel";

const STEPS = [
  {
    icon: "💡",
    title: "Ide",
    desc: "Masalah nyata: engagement Instagram, tugas sekolah, monitoring tim.",
    tag: "input",
  },
  {
    icon: "✦",
    title: "Claude Code",
    desc: "Pair programming bareng AI — dari arsitektur sampai baris kode.",
    tag: "build",
    highlight: true,
  },
  {
    icon: "⚙️",
    title: "Workflow n8n",
    desc: "Trigger, AI node, API — pipeline yang jalan sendiri 24/7.",
    tag: "automate",
  },
  {
    icon: "🚀",
    title: "Ship",
    desc: "Deploy ke Vercel, dipakai user beneran, iterasi lagi.",
    tag: "output",
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative border-y border-slate-800/70 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <SectionLabel
          label="02 · Workflow"
          title="Cara aku membangun sesuatu."
          desc="Web dev bertemu automation: setiap projek mengalir lewat pipeline yang sama — ide dieksekusi bareng AI, dirangkai jadi workflow, lalu di-ship."
        />

        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-stretch">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.title}>
              <div
                className={`relative flex-1 rounded-2xl border p-6 transition-colors ${
                  step.highlight
                    ? "border-clay/50 bg-clay/5 hover:border-clay"
                    : "border-slate-800 bg-slate-900/60 hover:border-slate-600"
                }`}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <span className="absolute top-4 right-4 text-[10px] font-mono text-slate-600 uppercase">
                  {step.tag}
                </span>
                <span className="text-2xl">{step.icon}</span>
                <h3
                  className={`mt-3 font-bold ${
                    step.highlight ? "text-clay" : "text-slate-100"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex items-center px-1 shrink-0">
                  <div className="flow-line w-8" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500 font-mono" data-aos="fade-up">
          {"// pipeline ini nyata — lihat hasilnya di Chapter 02 & 03 di bawah ↓"}
        </p>
      </div>
    </section>
  );
}
