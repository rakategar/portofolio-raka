import React, { useCallback, useEffect, useRef, useState } from "react";
import DeskScene from "./DeskScene";
import {
  MessagesTile,
  CameraTile,
  PhotosTile,
  SafariTile,
  YouTubeTile,
  InstagramTile,
  WhatsAppTile,
  SpotifyTile,
  PhoneTile,
  MailTile,
  MusicTile,
  FinderTile,
  TerminalTile,
  ClaudeTile,
} from "./AppIcons";

/* ============================================================
   IntroSequence — animasi pembuka sebelum website tampil.
   Desktop : boot MacBook → Terminal macOS → `claude` (Claude Code CLI)
             → prompt → tool calls → reveal.
   Mobile  : home screen iPhone → tap app Claude → chat ala claude.ai
             → prompt → balasan streaming → reveal.
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

const greetingByHour = (h: number) =>
  h < 11 ? "Selamat pagi" : h < 15 ? "Selamat siang" : h < 19 ? "Selamat sore" : "Selamat malam";

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

function AppleLogo(props: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <path
        d="M50 32 C 34 20 14 32 14 54 c 0 20 14 36 25 36 c 5 0 7 -3 11 -3 c 4 0 6 3 11 3 c 11 0 25 -16 25 -36 c 0 -22 -20 -34 -36 -22 z"
        fill={props.fill ?? "#e5e7eb"}
      />
      <path d="M52 28 c 0 -11 9 -19 17 -19 c 0 11 -9 19 -17 19 z" fill={props.fill ?? "#e5e7eb"} />
    </svg>
  );
}

/* ================= DESKTOP : macOS + Claude Code CLI ================= */

const TOOL_CALLS = [
  { main: "Read(struktur projek)", sub: "⎿  12 file dibaca" },
  { main: "Write(pages/index.tsx)", sub: "⎿  214 baris ditulis" },
  { main: "Write(components/NeuronCanvas.tsx)", sub: "⎿  jaring neuron interaktif siap" },
  { main: "Bash(vercel deploy --prod)", sub: "⎿  ✓ Production: portoraka.site" },
];

const PROMPT_DESKTOP = "buatkan website portofolio yang keren untuk Raka";

function DesktopIntro(props: { onFinish: () => void }) {
  const [step, setStep] = useState(0);
  const [toolCount, setToolCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const now = useClock();
  const next = useCallback(() => setStep((s) => s + 1), []);

  useEffect(() => {
    const delays: Record<number, number> = { 0: 1900, 1: 800, 2: 600, 4: 1200, 7: 1400 };
    if (step in delays) {
      const t = setTimeout(next, delays[step]);
      return () => clearTimeout(t);
    }
    if (step === 6) {
      const t = setInterval(() => {
        setToolCount((c) => {
          if (c + 1 >= TOOL_CALLS.length) {
            clearInterval(t);
            setTimeout(next, 600);
          }
          return c + 1;
        });
      }, 560);
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

  const dockApps = [
    FinderTile,
    SafariTile,
    MailTile,
    PhotosTile,
    MusicTile,
    SpotifyTile,
  ];

  return (
    <div className={`fixed inset-0 z-[100] ${exiting ? "intro-exit" : ""}`}>
      {/* layar boot */}
      {step === 0 && (
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center gap-14">
          <AppleLogo className="w-16 h-16 opacity-95" />
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
              <AppleLogo className="w-3.5 h-3.5" fill="#fff" />
              <span className="font-bold">Terminal</span>
              <span className="hidden sm:inline text-white/70">File</span>
              <span className="hidden sm:inline text-white/70">Edit</span>
              <span className="hidden sm:inline text-white/70">View</span>
              <span className="hidden sm:inline text-white/70">Window</span>
              <span className="hidden sm:inline text-white/70">Help</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M12 18.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM12 13c2.1 0 4 .8 5.4 2.2l-1.8 1.8A5.2 5.2 0 0012 15.5c-1.4 0-2.7.6-3.6 1.5l-1.8-1.8A7.7 7.7 0 0112 13zm0-5c3.5 0 6.6 1.4 8.9 3.6l-1.8 1.8A10.2 10.2 0 0012 10.5c-2.8 0-5.3 1.1-7.1 2.9L3.1 11.6A12.7 12.7 0 0112 8z" />
              </svg>
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
            <div className="absolute inset-0 flex items-center justify-center px-4 pb-16">
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
                <div className="bg-[#1e1e1e]/95 backdrop-blur px-4 py-3 font-mono text-[13px] leading-relaxed min-h-[360px] text-neutral-200 flex flex-col">
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

                  {/* banner Claude Code */}
                  {step >= 4 && (
                    <div className="mt-2 border border-[#D97757]/70 rounded-md px-3 py-2 text-[12.5px] w-max max-w-full">
                      <p>
                        <span className="text-[#D97757]">✻</span>{" "}
                        <span className="text-neutral-100 font-bold">Welcome to Claude Code!</span>
                      </p>
                      <p className="text-neutral-500 mt-1.5 italic">/help for help, /status for your current setup</p>
                      <p className="text-neutral-500 mt-1">cwd: /Users/raka/portofolio</p>
                    </div>
                  )}

                  {/* prompt yang sudah dikirim */}
                  {step >= 6 && (
                    <p className="mt-3 text-neutral-400">
                      <span className="text-neutral-500">&gt; </span>
                      {PROMPT_DESKTOP}
                    </p>
                  )}

                  {/* tool calls */}
                  {step >= 6 && (
                    <div className="mt-2 space-y-0.5">
                      {TOOL_CALLS.slice(0, toolCount).map((l, i) => (
                        <div key={i}>
                          <p>
                            <span className="text-emerald-400 mr-2">⏺</span>
                            <span className="text-neutral-100">{l.main}</span>
                          </p>
                          <p className="text-neutral-500 ml-4">{l.sub}</p>
                        </div>
                      ))}
                      {step === 6 && toolCount < TOOL_CALLS.length && (
                        <p className="text-[#D97757]">
                          ✻ Membangun… <span className="text-neutral-600">(esc to interrupt)</span>
                        </p>
                      )}
                    </div>
                  )}

                  {step >= 7 && (
                    <p className="mt-2">
                      <span className="text-[#D97757]">✻ Selesai dalam 12.4s</span>
                      <span className="text-neutral-400"> — membuka </span>
                      <span className="text-neutral-100 underline">portoraka.site</span>
                      <span className="text-neutral-400">…</span>
                    </p>
                  )}

                  {/* kotak input ala Claude Code */}
                  {step >= 5 && (
                    <div className="mt-auto pt-3">
                      <div className="border border-neutral-600 rounded-md px-3 py-2 flex items-start">
                        <span className="text-neutral-400 mr-2">&gt;</span>
                        <span className="flex-1">
                          {step === 5 ? (
                            <TypeText text={PROMPT_DESKTOP} speed={38} onDone={next} />
                          ) : (
                            <span className="intro-caret" />
                          )}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-600 mt-1.5">
                        ? for shortcuts · Claude Code v2.1
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
              {dockApps.map((Tile, i) => (
                <Tile key={i} className="w-11 h-11 drop-shadow" />
              ))}
              <span className="relative">
                <TerminalTile className="w-11 h-11 drop-shadow" />
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white/90" />
              </span>
              <ClaudeTile className="w-11 h-11 drop-shadow" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= MOBILE : iPhone + app Claude (ala claude.ai) ================= */

const REPLY_LINES = [
  "Oke, kubuatkan! ✨",
  "▸ Merancang layout & jaring neuron…",
  "▸ Menyusun cerita projek…",
  "▸ Deploy ke production…",
];

const PROMPT_MOBILE = "buatkan website portofolio yang keren dong 🙏";

const HOME_APPS: { Tile: (p: { className?: string }) => JSX.Element; name: string }[] = [
  { Tile: MessagesTile, name: "Messages" },
  { Tile: CameraTile, name: "Camera" },
  { Tile: PhotosTile, name: "Photos" },
  { Tile: SafariTile, name: "Safari" },
  { Tile: YouTubeTile, name: "YouTube" },
  { Tile: InstagramTile, name: "Instagram" },
  { Tile: WhatsAppTile, name: "WhatsApp" },
  { Tile: SpotifyTile, name: "Spotify" },
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

  const statusBar = (dark: boolean) => (
    <div
      className={`relative flex items-center justify-between px-7 pt-3.5 pb-1 text-[13px] font-semibold ${
        dark ? "text-white" : "text-[#3d3929]"
      }`}
    >
      <span>{clock}</span>
      {/* dynamic island */}
      <span className="absolute left-1/2 -translate-x-1/2 top-2.5 w-24 h-[26px] rounded-full bg-black" />
      <div className="flex items-center gap-1.5">
        <span className="flex items-end gap-[2px]">
          {[4, 6, 8, 10].map((h) => (
            <span
              key={h}
              className={`w-[3px] rounded-sm ${dark ? "bg-white" : "bg-[#3d3929]"}`}
              style={{ height: h }}
            />
          ))}
        </span>
        <span className="text-[11px]">5G</span>
        <span className={`relative w-6 h-3 rounded-[3px] border ${dark ? "border-white/80" : "border-[#3d3929]/60"}`}>
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
          <div className="grid grid-cols-4 gap-x-4 gap-y-5 px-6 pt-10">
            {HOME_APPS.map(({ Tile, name }) => (
              <div key={name} className="flex flex-col items-center gap-1">
                <Tile className="w-14 h-14 drop-shadow-lg" />
                <span className="text-[10px] text-white/90 drop-shadow">{name}</span>
              </div>
            ))}
            {/* app Claude — yang akan di-tap */}
            <div className="flex flex-col items-center gap-1">
              <span className="relative w-14 h-14">
                <ClaudeTile className="w-14 h-14 drop-shadow-lg" />
                {step === 1 && <span className="tap-ring absolute inset-0 rounded-2xl border-2 border-white" />}
                {step === 1 && (
                  <span className="absolute -bottom-3 -right-3 text-2xl select-none">👆</span>
                )}
              </span>
              <span className="text-[10px] text-white font-semibold drop-shadow">Claude</span>
            </div>
          </div>
          {/* titik halaman */}
          <div className="mt-auto flex justify-center gap-1.5 pb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>
          {/* dock */}
          <div className="mb-4 mx-4 rounded-[28px] bg-white/20 backdrop-blur-xl px-4 py-3 flex justify-around">
            <PhoneTile className="w-[52px] h-[52px]" />
            <SafariTile className="w-[52px] h-[52px]" />
            <MessagesTile className="w-[52px] h-[52px]" />
            <MusicTile className="w-[52px] h-[52px]" />
          </div>
        </div>
      )}

      {/* app Claude — meniru claude.ai */}
      {step >= 2 && (
        <div className="app-open absolute inset-0 bg-[#F4F3EE] flex flex-col">
          {statusBar(false)}
          <div className="flex items-center justify-between px-4 py-2.5">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#3d3929]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h10" />
            </svg>
            <span className="flex items-center gap-1 text-[15px] font-semibold text-[#3d3929]">
              Claude Sonnet 4.6
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
            <span className="w-7 h-7 rounded-full bg-[#D97757] text-white text-[12px] font-bold flex items-center justify-center">
              R
            </span>
          </div>

          <div className="flex-1 px-5 py-4 overflow-hidden flex flex-col">
            {/* greeting serif ala claude.ai */}
            {step >= 3 && step < 5 && (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 -mt-10">
                <ClaudeStar className="w-10 h-10" />
                <p className="text-center text-[26px] leading-snug text-[#3d3929]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  {greetingByHour(now.getHours())}, Raka
                </p>
              </div>
            )}

            {step >= 5 && (
              <div className="space-y-5 pt-2">
                {/* pesan user — bubble tan ala claude.ai */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl bg-[#E5E1D5] px-4 py-2.5 text-[14px] text-[#3d3929]">
                    {PROMPT_MOBILE}
                  </div>
                </div>

                {/* balasan Claude — tanpa bubble, polos di background */}
                {step >= 6 && (
                  <div className="flex gap-2.5">
                    <ClaudeStar className="w-5 h-5 shrink-0 mt-0.5" />
                    <div className="text-[14px] text-[#3d3929] leading-relaxed space-y-1.5">
                      {step === 6 ? (
                        <span className="inline-flex gap-1 items-center pt-1.5">
                          <span className="typing-dot" />
                          <span className="typing-dot" style={{ animationDelay: "0.15s" }} />
                          <span className="typing-dot" style={{ animationDelay: "0.3s" }} />
                        </span>
                      ) : (
                        <>
                          {REPLY_LINES.slice(0, replyCount).map((l, i) => (
                            <p key={i} className={i === 0 ? "font-semibold" : "text-[#3d3929]/75"}>
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
            )}
          </div>

          {/* input ala claude.ai */}
          <div className="px-4 pb-3">
            <div className="rounded-2xl bg-white border border-[#3d3929]/10 shadow-sm px-4 pt-3 pb-2.5">
              <p className="text-[14px] text-[#3d3929] min-h-[1.3rem]">
                {step === 4 ? (
                  <TypeText text={PROMPT_MOBILE} speed={32} onDone={next} />
                ) : (
                  <span className="text-[#3d3929]/35">Balas ke Claude…</span>
                )}
              </p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-3 text-[#3d3929]/50">
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M4 8h2.5M4 12h5M4 16h3M12 8h8M13 12h7M11 16h9" />
                  </svg>
                </div>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] text-[#3d3929]/50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="9" y="3" width="6" height="11" rx="3" />
                    <path d="M5 11a7 7 0 0014 0M12 18v3" />
                  </svg>
                  <span
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-white transition-colors ${
                      step === 4 ? "bg-[#D97757]" : "bg-[#D97757]/30"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19V5M6 11l6-6 6 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <p className="text-center text-[10px] text-[#3d3929]/40 pt-2 pb-1">
              Claude bisa saja keliru. Mohon cek ulang jawabannya.
            </p>
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
  // stage "desk" = POV meja kerja; "device" = intro MacBook / app Claude
  const [stage, setStage] = useState<"desk" | "device">("desk");
  const doneRef = useRef(props.onDone);
  doneRef.current = props.onDone;

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem("introPlayed", "1");
    } catch {}
    document.documentElement.classList.remove("intro-pending");
    doneRef.current();
  }, []);

  const finishToProjects = useCallback(() => {
    finish();
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  }, [finish]);

  // skip instan bila sudah pernah diputar
  useEffect(() => {
    if (mode === "skip") {
      document.documentElement.classList.remove("intro-pending");
      doneRef.current();
    }
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
      {stage === "desk" ? (
        <div className="fixed inset-0 z-[100]">
          <DeskScene
            device={mode}
            onLaptop={() => setStage("device")}
            onPhone={() => setStage("device")}
            onFinishToProjects={finishToProjects}
          />
        </div>
      ) : mode === "desktop" ? (
        <DesktopIntro onFinish={finish} />
      ) : (
        <MobileIntro onFinish={finish} />
      )}
      <button
        onClick={finish}
        className={`fixed z-[110] px-4 py-1.5 rounded-full bg-black/40 backdrop-blur text-white/80 text-xs font-medium hover:bg-black/60 transition-colors ${
          stage === "desk"
            ? "top-4 right-4"
            : "bottom-40 right-4 md:bottom-auto md:top-11"
        }`}
      >
        Lewati intro →
      </button>
    </>
  );
}
