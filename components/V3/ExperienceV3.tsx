import React from "react";
import SectionLabel from "./SectionLabel";
import { EDUCATION, ORGANIZATIONS, ExperienceItem } from "./data";

function Column(props: { title: string; items: ExperienceItem[] }) {
  return (
    <div data-aos="fade-up">
      <h3 className="font-bold text-slate-100 mb-6">{props.title}</h3>
      <div className="relative pl-6 space-y-8 border-l border-slate-800">
        {props.items.map((item, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-clay ring-4 ring-slate-950" />
            <p className="text-xs font-mono text-slate-500">{item.date}</p>
            <p className="mt-1 font-semibold text-slate-200">
              {item.role} <span className="text-slate-500">·</span>{" "}
              <span className="text-clay">{item.place}</span>
            </p>
            {item.desc && (
              <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceV3() {
  return (
    <section id="experience" className="relative border-y border-slate-800/70 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-24">
        <SectionLabel label="04 · Pengalaman" title="Jalan yang sudah dilalui." />
        <div className="grid md:grid-cols-2 gap-14">
          <Column title="🎓 Pendidikan" items={EDUCATION} />
          <Column title="🤝 Organisasi" items={ORGANIZATIONS} />
        </div>
      </div>
    </section>
  );
}
