import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading, TiltCard, Chip } from "./ui";
import { PROJECTS, Project } from "./data";

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.13c0 .3.2.66.8.55A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function ProjectCard(props: { project: Project; index: number }) {
  const p = props.project;
  return (
    <TiltCard className="h-full">
      <div
        className="group relative h-full flex flex-col rounded-xl border border-cyan-400/15 bg-[#06001f]/60 backdrop-blur-sm overflow-hidden hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(0,240,255,0.18)] transition-all duration-300"
        data-aos="fade-up"
        data-aos-delay={(props.index % 3) * 100}
      >
        {/* image */}
        <div className="relative h-44 overflow-hidden border-b border-cyan-400/15">
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06001f] via-transparent to-transparent" />
          <span className="absolute top-3 left-3 px-2 py-1 text-[10px] font-mono rounded bg-[#030014]/80 border border-fuchsia-500/50 text-fuchsia-300 tracking-widest uppercase">
            {p.category}
          </span>
        </div>

        {/* body */}
        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-bold text-white text-lg group-hover:text-cyan-300 transition-colors">
              {p.title}
            </h3>
            <div className="flex gap-2 text-gray-400">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-cyan-300 transition-colors">
                  <GithubIcon />
                </a>
              )}
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" aria-label="Live link" className="hover:text-fuchsia-400 transition-colors">
                  <ExternalIcon />
                </a>
              )}
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed flex-1">
            {p.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-6 sm:px-12 py-24">
      <SectionHeading index="03" title="Projek" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="font-mono text-sm px-8 py-3.5 rounded border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all"
        >
          {showAll
            ? "▴ tutup_arsip()"
            : `▾ muat_semua_projek(${PROJECTS.length - 6}+)`}
        </button>
      </div>
    </section>
  );
}
