import React, { useCallback, useEffect, useRef, useState } from "react";

/* ============================================================
   IntroSequence — animasi pembuka sebelum website tampil.
   Desktop : boot MacBook → Terminal macOS → `claude` → prompt → build.
   Mobile  : home screen → tap app Claude → chat prompt → build.
   Dilewati otomatis jika sudah pernah diputar di session ini,
   atau jika user memilih prefers-reduced-motion.
   ============================================================ */

function TypeText(props: {
  text: string;
  speed?: number;
  onDone?: () => void;
  className?: string;
  caret?: boolean;
}) {
  const { text, speed = 55, caret = true } = props;
  const [n, setN] = useState(0);
  const doneRef = useRef(props.onDone);
  doneRef.current = props.onDone;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setN(i);
      if (i >= text.length) {
        clearInterval(timer);
        setTimeout(() => doneRef.current && doneRef.current(), 400);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={props.className}>
      {text.slice(0, n)}
      {caret && n < text.length + 1 && <span className="intro-caret" />}
    </span>
  );
}

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  return now;
}

const pad = (n: number) => String(n).padStart(2, "0");

/* ---------------- ikon kecil bersama ---------------- */

function ClaudeStar(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="24"
          rx="9"
          ry="26"
          fill="#D97757"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="17" fill="#D97757" />
    </svg>
  );
}

/* ================= DESKTOP : macOS ================= */

const TOOL_LINES = [
  { icon: "⏺", text: "Write(pages/index.tsx)", dim: false },
  { icon: "⏺", text: "Menambahkan jaring neuron interaktif…", dim: false },
  { icon: "⏺", text: "Merangkai parallax & scrollytelling…", dim: false },
  { icon: "⏺", text: "Bash(vercel deploy --prod)", dim: false },
];

function DesktopIntro(props: { onFinish: () => void }) {
  const [step, setStep] = useState(0);
  const [toolCount, setToolCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const now = useClock();
  const next = useCallback(() => setStep((s) => s + 1), []);

  useEffect(() => {
    const delays: Record<number, number> = { 0: 1900, 1: 800, 2: 600, 4: 1100, 7: 1300 };
    if (step in delays) {
      const t = setTimeout(next, delays[step]);
      return () => clearTimeout(t);
    }
    if (step === 6) {
      const t = setInterval(() => {
        setToolCount((c) => {
          if (c + 1 >= TOOL_LINES.length) {
            clearInterval(t);
            setTimeout(next, 500);
          }
          return c + 1;
        });
      }, 520);
      return () => clearInterval(t);
    }
    if (step === 8) {
      setExiting(true);
      const t = setTimeout(props.onFinish, 750);
      return () => clearTimeout(t);
    }
  }, [step, next, props.onFinish]);

  const clock = `${["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"][now.getDay()]} ${pad(
    now.getHours()
  )}.${pad(now.getMinutes())}`;

  return (
    <div className={`fixed inset-0 z-[100] ${exiting ? "intro-exit" : ""}`}>
      {/* layar boot */}
      {step === 0 && (
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center gap-14">
          <svg viewBox="0 0 100 100" className="w-16 h-16 opacity-95">
            <path
              d="M50 32 C 34 20 14 32 14 54 c 0 20 14 36 25 36 c 5 0 7 -3 11 -3 c 4 0 6 3 11 3 c 11 0 25 -16 25 -36 c 0 -22 -20 -34 -36 -22 z"
              fill="#e5e7eb"
            />
            <path d="M52 28 c 0 -11 9 -19 17 -19 c 0 11 -9 19 -17 19 z" fill="#e5e7eb" />
          </svg>
          <div className="w-44 h-1.5 rounded-full bg-neutral-800 overflow-hidden">
            <div className="boot-bar h-full bg-neutral-200 rounded-full" />
          </div>
        </div>
      )}

      {/* desktop macOS */}
      {step >= 1 && (
        <div className="absolute inset-0 mac-wallpaper overflow-hidden">
          {/* menu bar */}
          <div className="absolute top-0 inset-x-0 h-7 bg-black/30 backdrop-blur-md flex items-center justify-between px-4 text-[12px] text-white/90 font-medium">
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 100 100" className="w-3.5 h-3.5">
                <path
                  d="M50 32 C 34 20 14 32 14 54 c 0 20 14 36 25 36 c 5 0 7 -3 11 -3 c 4 0 6 3 11 3 c 11 0 25 -16 25 -36 c 0 -22 -20 -34 -36 -22 z"
                  fill="#fff"
                />
                <path d="M52 28 c 0 -11 9 -19 17 -19 c 0 11 -9 19 -17 19 z" fill="#fff" />
              </svg>
              <span className="font-bold">Terminal</span>
              <span className="hidden sm:inline text-white/70">File</span>
              <span className="hidden sm:inline text-white/70">Edit</span>
              <span className="hidden sm:inline text-white/70">View</span>
              <span className="hidden sm:inline text-white/70">Window</span>
              <span className="hidden sm:inline text-white/70">Help</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              {/* wifi */}
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M12 18.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 13c2.1 0 4 .8 5.4 2.2l-1.8 1.8A5.2 5.2 0 0012 15.5c-1.4 0-2.7.6-3.6 1.5l-1.8-1.8A7.7 7.7 0 0112 13zm0-5c3.5 0 6.6 1.4 8.9 3.6l-1.8 1.8A10.2 10.2 0 0012 10.5c-2.8 0-5.3 1.1-7.1 2.9L3.1 11.6A12.7 12.7 0 0112 8z" />
              </svg>
              {/* baterai */}
              <span className="flex items-center gap-1">
                <span className="relative w-6 h-3 rounded-[3px] border border-white/70">
                  <span className="absolute inset-[2px] right-[30%] bg-white/90 rounded-[1px]" />
                </span>
                <span className="w-[2px] h-1.5 bg-white/70 rounded-r" />
              </span>
              <span>{clock}</span>
            </div>
          </div>

          {/* jendela terminal */}
          {step >= 2 && (
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="window-pop w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl shadow-black/60 border border-white/10">
                <div className="relative flex items-center px-3.5 py-2.5 bg-[#38383d]">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10" />
                  </div>
                  <p className="absolute inset-x-0 text-center text-[12px] text-neutral-300 font-medium pointer-events-none">
                    raka — claude — 80×24
                  </p>
                </div>
                <div className="bg-[#1e1e1e]/95 backdrop-blur px-4 py-3 font-mono text-[13px] leading-relaxed min-h-[340px] text-neutral-200">
                  <p>
                    <span className="text-emerald-400">raka@macbook</span>
                    <span className="text-neutral-400"> ~ % </span>
                    {step === 3 ? (
                      <TypeText text="claude" speed={110} onDone={next} />
                    ) : step > 3 ? (
                      "claude"
                    ) : (
                      <span className="intro-caret" />
                    )}
                  </p>

                  {step >= 4 && (
                    <div className="mt-2 border border-[#D97757]/60 rounded px-3 py-2 text-[12.5px] w-max max-w-full">
                      <p className="text-[#D97757]">✻ Welcome to Claude Code!</p>
                      <p className="text-neutral-500 mt-1">cwd: /Users/raka/portofolio</p>
                    </div>
                  )}

                  {step >= 5 && (
                    <p className="mt-3">
                      <span className="text-[#D97757]">&gt; </span>
                      {step === 5 ? (
                        <TypeText
                          text="buatkan website portofolio yang keren untuk Raka"
                          speed={38}
                          onDone={next}
                        />
                      ) : (
                        "buatkan website portofolio yang keren untuk Raka"
                      )}
                    </p>
                  )}

                  {step >= 6 && (
                    <div className="mt-2 space-y-1.5">
                      {TOOL_LINES.slice(0, toolCount).map((l, i) => (
                        <p key={i}>
                          <span className="text-[#D97757] mr-2">{l.icon}</span>
                          <span className="text-neutral-300">{l.text}</span>
                        </p>
                      ))}
                    </div>
                  )}

                  {step >= 7 && (
                    <div className="mt-3">
                      <p className="text-emerald-400">✓ Selesai dalam 12.4s</p>
                      <p className="text-neutral-400 mt-1">
                        ✦ Membuka <span className="text-[#D97757]">portoraka.site</span>…
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* dock */}
          <div className="absolute bottom-2 inset-x-0 flex justify-center">
            <div className="flex items-end gap-2 px-3 py-2 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20">
              {[
                { bg: "from-sky-400 to-blue-600", label: "😀" },
                { bg: "from-neutral-200 to-neutral-400", label: "🧭" },
                { bg: "from-sky-300 to-blue-500", label: "✉️" },
                { bg: "from-amber-200 to-orange-400", label: "🌸" },
                { bg: "from-rose-400 to-red-500", label: "♫" },
              ].map((app, i) => (
                <span
                  key={i}
                  className={`w-10 h-10 rounded-xl bg-gradient-to-b ${app.bg} flex items-center justify-center text-lg shadow`}
                >
                  {app.label}
                </span>
              ))}
              {/* Terminal — sedang berjalan */}
              <span className="relative w-10 h-10 rounded-xl bg-neutral-900 border border-white/20 flex items-center justify-center text-white font-mono text-xs shadow">
                &gt;_
                <span className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-white/90" />
              </span>
              <span className="w-10 h-10 rounded-xl bg-[#f5efe6] flex items-center justify-center shadow">
                <ClaudeStar className="w-6 h-6" />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= MOBILE : iPhone + app Claude ================= */

const REPLY_LINES = [
  "Oke, kubuatkan! ✨",
  "▸ Merancang layout & jaring neuron…",
  "▸ Menyusun cerita projek…",
  "▸ Deploy ke production…",
];

function MobileIntro(props: { onFinish: () => void }) {
  const [step, setStep] = useState(0);
  const [replyCount, setReplyCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const now = useClock();
  const next = useCallback(() => setStep((s) => s + 1), []);

  useEffect(() => {
    const delays: Record<number, number> = { 0: 1100, 1: 900, 2: 550, 3: 700, 5: 600, 6: 1000, 8: 1500 };
    if (step in delays) {
      const t = setTimeout(next, delays[step]);
      return () => clearTimeout(t);
    }
    if (step === 7) {
      const t = setInterval(() => {
        setReplyCount((c) => {
          if (c + 1 >= REPLY_LINES.length) {
            clearInterval(t);
            setTimeout(next, 500);
          }
          return c + 1;
        });
      }, 550);
      return () => clearInterval(t);
    }
    if (step === 9) {
      setExiting(true);
      const t = setTimeout(props.onFinish, 750);
      return () => clearTimeout(t);
    }
  }, [step, next, props.onFinish]);

  const clock = `${pad(now.getHours())}.${pad(now.getMinutes())}`;
  const PROMPT = "buatkan website portofolio yang keren dong 🙏";

  const statusBar = (dark: boolean) => (
    <div
      className={`flex items-center justify-between px-6 pt-3 pb-1 text-[13px] font-semibold ${
        dark ? "text-white" : "text-[#3d3929]"
      }`}
    >
      <span>{clock}</span>
      <div className="flex items-center gap-1.5">
        {/* sinyal */}
        <span className="flex items-end gap-[2px]">
          {[3, 5, 7, 9].map((h) => (
            <span key={h} className={`w-[3px] rounded-sm ${dark ? "bg-white" : "bg-[#3d3929]"}`} style={{ height: h }} />
          ))}
        </span>
        <span className="text-[11px]">5G</span>
        {/* baterai */}
        <span className={`relative w-6 h-3 rounded-[3px] border ${dark ? "border-white/80" : "border-[#3d3929]/80"}`}>
          <span className={`absolute inset-[2px] right-[25%] rounded-[1px] ${dark ? "bg-white" : "bg-[#3d3929]"}`} />
        </span>
      </div>
    </div>
  );

  return (
    <div className={`fixed inset-0 z-[100] ${exiting ? "intro-exit" : ""}`}>
      {/* home screen */}
      {step < 2 && (
        <div className="absolute inset-0 phone-wallpaper flex flex-col">
          {statusBar(true)}
          <div className="grid grid-cols-4 gap-x-4 gap-y-5 px-6 pt-8">
            {[
              { bg: "from-green-400 to-green-600", label: "💬", name: "Messages" },
              { bg: "from-neutral-700 to-neutral-900", label: "📷", name: "Camera" },
              { bg: "from-white to-neutral-200", label: "🌸", name: "Photos" },
              { bg: "from-sky-300 to-blue-600", label: "🧭", name: "Safari" },
              { bg: "from-red-400 to-red-600", label: "▶️", name: "YouTube" },
              { bg: "from-fuchsia-500 to-amber-400", label: "📸", name: "Instagram" },
              { bg: "from-emerald-400 to-emerald-600", label: "📞", name: "WhatsApp" },
              { bg: "from-neutral-800 to-black", label: "🎵", name: "Spotify" },
            ].map((app) => (
              <div key={app.name} className="flex flex-col items-center gap-1">
                <span
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-b ${app.bg} flex items-center justify-center text-2xl shadow-lg`}
                >
                  {app.label}
                </span>
                <span className="text-[10px] text-white/90">{app.name}</span>
              </div>
            ))}
            {/* app Claude — yang akan di-tap */}
            <div className="flex flex-col items-center gap-1">
              <span className="relative w-14 h-14 rounded-2xl bg-[#f5efe6] flex items-center justify-center shadow-lg">
                <ClaudeStar className="w-9 h-9" />
                {step === 1 && <span className="tap-ring absolute inset-0 rounded-2xl border-2 border-white" />}
                {step === 1 && (
                  <span className="absolute -bottom-3 -right-3 text-2xl select-none">👆</span>
                )}
              </span>
              <span className="text-[10px] text-white/90 font-semibold">Claude</span>
            </div>
          </div>
          {/* dock */}
          <div className="mt-auto mb-3 mx-4 rounded-3xl bg-white/20 backdrop-blur-xl px-4 py-3 flex justify-around">
            {["📞", "🧭", "💬", "🎵"].map((l, i) => (
              <span
                key={i}
                className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-b from-neutral-100/90 to-neutral-300/90 flex items-center justify-center text-2xl"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* app Claude */}
      {step >= 2 && (
        <div className="app-open absolute inset-0 bg-[#f5efe6] flex flex-col">
          {statusBar(false)}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#3d3929]/10">
            <span className="text-xl text-[#3d3929]">≡</span>
            <span className="flex items-center gap-1.5 font-bold text-[#3d3929]">
              <ClaudeStar className="w-4 h-4" /> Claude
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#3d3929]/10 text-[#3d3929]/70">
              Sonnet
            </span>
          </div>

          <div className="flex-1 px-4 py-5 space-y-4 overflow-hidden">
            {step >= 3 && (
              <p className="text-center text-lg font-serif text-[#3d3929]">
                ✻ Halo Raka, mau bikin apa hari ini?
              </p>
            )}

            {/* bubble user */}
            {step >= 5 && (
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[#e8e0d1] px-4 py-2.5 text-sm text-[#3d3929]">
                  {PROMPT}
                </div>
              </div>
            )}

            {/* balasan Claude */}
            {step >= 6 && (
              <div className="flex gap-2.5">
                <ClaudeStar className="w-6 h-6 shrink-0 mt-1" />
                <div className="text-sm text-[#3d3929] leading-relaxed space-y-1.5">
                  {step === 6 ? (
                    <span className="inline-flex gap-1 items-center pt-2">
                      <span className="typing-dot" />
                      <span className="typing-dot" style={{ animationDelay: "0.15s" }} />
                      <span className="typing-dot" style={{ animationDelay: "0.3s" }} />
                    </span>
                  ) : (
                    <>
                      {REPLY_LINES.slice(0, replyCount).map((l, i) => (
                        <p key={i} className={i === 0 ? "font-semibold" : "text-[#3d3929]/80"}>
                          {l}
                        </p>
                      ))}
                      {step >= 8 && (
                        <p className="font-semibold text-[#B85C3D]">
                          ✓ Selesai! Membuka portoraka.site…
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* input */}
          <div className="px-4 pb-7">
            <div className="flex items-center gap-2 rounded-full bg-white border border-[#3d3929]/15 px-4 py-3 shadow-sm">
              <span className="text-[#3d3929]/40 text-lg leading-none">＋</span>
              <p className="flex-1 text-sm text-[#3d3929] min-h-[1.2rem]">
                {step === 4 ? (
                  <TypeText text={PROMPT} speed={32} onDone={next} />
                ) : step < 4 ? (
                  <span className="text-[#3d3929]/35">Chat dengan Claude…</span>
                ) : (
                  <span className="text-[#3d3929]/35">Chat dengan Claude…</span>
                )}
              </p>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm transition-colors ${
                  step === 4 ? "bg-[#D97757]" : "bg-[#3d3929]/20"
                }`}
              >
                ↑
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= wrapper ================= */

export default function IntroSequence(props: { onDone: () => void }) {
  const [mode] = useState<"desktop" | "mobile" | "skip">(() => {
    if (typeof window === "undefined") return "skip";
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem("introPlayed")) return "skip";
    return window.innerWidth < 768 ? "mobile" : "desktop";
  });
  const doneRef = useRef(props.onDone);
  doneRef.current = props.onDone;

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem("introPlayed", "1");
    } catch {}
    doneRef.current();
  }, []);

  // skip instan bila sudah pernah diputar
  useEffect(() => {
    if (mode === "skip") doneRef.current();
  }, [mode]);

  // kunci scroll selama intro berjalan
  useEffect(() => {
    if (mode === "skip") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mode]);

  if (mode === "skip") return null;

  return (
    <>
      {mode === "desktop" ? <DesktopIntro onFinish={finish} /> : <MobileIntro onFinish={finish} />}
      <button
        onClick={finish}
        className="fixed bottom-24 right-4 md:bottom-auto md:top-11 z-[110] px-4 py-1.5 rounded-full bg-black/40 backdrop-blur text-white/80 text-xs font-medium hover:bg-black/60 transition-colors"
      >
        Lewati intro →
      </button>
    </>
  );
}
