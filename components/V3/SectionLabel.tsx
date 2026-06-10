import React from "react";

export default function SectionLabel(props: {
  label: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-14" data-aos="fade-up">
      <p className="text-sm font-mono text-clay mb-3">{props.label}</p>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
        {props.title}
      </h2>
      {props.desc && (
        <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">{props.desc}</p>
      )}
    </div>
  );
}
