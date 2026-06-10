import React, { useEffect, useState } from "react";

const BOOT_LINES = [
  "> RAKA.OS v3.0 — inisialisasi sistem...",
  "> memuat neural core............ OK",
  "> kalibrasi modul kreativitas... OK",
  "> sinkronisasi portofolio....... OK",
  "> menjalankan three.js engine... OK",
  "> AKSES DIBERIKAN — selamat datang, manusia.",
];

export default function BootLoader(props: { onDone: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setVisibleLines((v) => (v < BOOT_LINES.length ? v + 1 : v));
    }, 350);
    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 9 + 3, 100));
    }, 90);
    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100 && visibleLines >= BOOT_LINES.length) {
      setFading(true);
      const t = setTimeout(props.onDone, 700);
      return () => clearTimeout(t);
    }
  }, [progress, visibleLines, props]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#030014] flex items-center justify-center transition-opacity duration-700 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-[92%] max-w-xl">
        <div className="border border-cyan-400/30 rounded-lg bg-[#06001f]/80 shadow-[0_0_60px_rgba(0,240,255,0.15)] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-cyan-400/20 bg-cyan-400/5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <span className="w-3 h-3 rounded-full bg-green-400/70" />
            <span className="ml-3 text-xs text-cyan-300/70 font-mono tracking-widest">
              RAKA.AI — BOOT SEQUENCE
            </span>
          </div>
          <div className="p-5 font-mono text-sm space-y-1.5 min-h-[180px]">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <p
                key={i}
                className={
                  i === BOOT_LINES.length - 1
                    ? "text-fuchsia-400"
                    : "text-cyan-300/90"
                }
              >
                {line}
              </p>
            ))}
            <span className="inline-block w-2.5 h-4 bg-cyan-300 animate-pulse align-middle" />
          </div>
          <div className="px-5 pb-5">
            <div className="h-1.5 w-full bg-cyan-950 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 transition-all duration-100 shadow-[0_0_12px_rgba(0,240,255,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-right text-[10px] text-cyan-400/60 font-mono mt-1.5">
              {Math.floor(progress)}% — membangun dunia 3D...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
