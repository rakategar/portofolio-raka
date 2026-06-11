import React, { useEffect, useState } from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { FEATURED, ARCHIVE, FeaturedProject, Project } from "./data";
import { useParallax } from "./hooks";

function LinkIcons(props: { project: Project; className?: string }) {
  return (
    <div className={`flex gap-3 text-slate-400 ${props.className ?? ""}`}>
      {props.project.github && (
        <a
          href={props.project.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hover:text-slate-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.13c0 .3.2.66.8.55A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
          </svg>
        </a>
      )}
      {props.project.link && (
        <a
          href={props.project.link}
          target="_blank"
          rel="noreferrer"
          aria-label="Kunjungi"
          className="hover:text-clay transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );
}

// Rail navigasi chapter di tepi kanan — muncul hanya saat menjelajah projek.
function ChapterRail() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("01");

  useEffect(() => {
    const section = document.getElementById("projects");
    if (!section) return;
    const sectionObs = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      threshold: 0.05,
    });
    sectionObs.observe(section);

    const chapterObs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.chapter || "01");
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    document.querySelectorAll<HTMLElement>("[data-chapter]").forEach((el) => chapterObs.observe(el));
    return () => {
      sectionObs.disconnect();
      chapterObs.disconnect();
    };
  }, []);

  return (
    <div
      className={`hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-2 transition-all duration-500 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
      }`}
    >
      {FEATURED.map((p) => (
        <button
          key={p.chapter}
          onClick={() =>
            document
              .querySelector(`[data-chapter="${p.chapter}"]`)
              ?.scrollIntoView({ behavior: "smooth", block: "center" })
          }
          title={p.title}
          className={`w-8 h-8 rounded-full border text-[10px] font-mono transition-all ${
            active === p.chapter
              ? "border-clay bg-clay text-slate-950 font-bold scale-110"
              : "border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300"
          }`}
        >
          {p.chapter}
        </button>
      ))}
    </div>
  );
}

function Chapter(props: { project: FeaturedProject; flip: boolean }) {
  const p = props.project;
  const imgRef = useParallax<HTMLDivElement>(0.08);
  const ghostRef = useParallax<HTMLDivElement>(-0.05);

  return (
    <div
      data-chapter={p.chapter}
      className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16"
    >
      {/* nomor chapter raksasa di belakang */}
      <div
        ref={ghostRef}
        className={`pointer-events-none absolute -top-2 select-none text-[7rem] sm:text-[9rem] font-extrabold leading-none text-slate-800/50 ${
          props.flip ? "right-0" : "left-0"
        }`}
        aria-hidden="true"
      >
        {p.chapter}
      </div>

      <div className={props.flip ? "lg:order-2" : ""} data-aos="fade-up">
        <div className="relative rounded-2xl border border-slate-800 overflow-hidden bg-slate-900 group">
          <div ref={imgRef} className="scale-110">
            <Image
              src={p.image}
              alt={p.title}
              width={900}
              height={560}
              className="w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className={`relative ${props.flip ? "lg:order-1" : ""}`} data-aos="fade-up" data-aos-delay="100">
        <p className="text-sm font-mono text-clay">
          Chapter {p.chapter} — {p.tagline}
        </p>
        <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-100">
          {p.title}
        </h3>
        <p className="mt-4 text-slate-400 leading-relaxed">{p.story}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-mono rounded-md border border-slate-800 bg-slate-900/70 text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
        <LinkIcons project={p} className="mt-5" />
      </div>
    </div>
  );
}

function ArchiveCard(props: { project: Project; index: number }) {
  const p = props.project;
  return (
    <div
      className="group rounded-xl border border-slate-800 bg-slate-900/50 p-5 hover:border-clay/50 hover:-translate-y-1 transition-all duration-200"
      data-aos="fade-up"
      data-aos-delay={(props.index % 3) * 80}
    >
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wide">{p.category}</p>
        <LinkIcons project={p} />
      </div>
      <h4 className="mt-2 font-bold text-slate-100 group-hover:text-clay transition-colors">
        {p.title}
      </h4>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <span key={t} className="text-[11px] font-mono text-slate-500">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsStory() {
  const [showAll, setShowAll] = useState(false);
  const archive = showAll ? ARCHIVE : ARCHIVE.slice(0, 6);

  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-5 sm:px-8 py-24">
      <SectionLabel
        label="03 · Projek"
        title="Lima chapter, satu cerita."
        desc="Setiap projek berangkat dari masalah nyata. Scroll pelan-pelan — ini cerita singkatnya."
      />

      <ChapterRail />
      <div className="divide-y divide-slate-800/60">
        {FEATURED.map((p, i) => (
          <Chapter key={p.id} project={p} flip={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-20">
        <div className="flex items-end justify-between mb-8" data-aos="fade-up">
          <div>
            <p className="text-sm font-mono text-clay mb-2">Epilog</p>
            <h3 className="text-2xl font-extrabold tracking-tight text-slate-100">
              Arsip projek lainnya
            </h3>
          </div>
          <p className="hidden sm:block text-sm text-slate-500 font-mono">{ARCHIVE.length} entri</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {archive.map((p, i) => (
            <ArchiveCard key={p.id} project={p} index={i} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 text-sm font-semibold hover:border-slate-500 hover:bg-slate-900 transition-colors"
          >
            {showAll ? "Tutup arsip ↑" : `Buka semua arsip (${ARCHIVE.length}) ↓`}
          </button>
        </div>
      </div>
    </section>
  );
}
