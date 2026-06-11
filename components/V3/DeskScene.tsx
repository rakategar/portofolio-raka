import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FEATURED, SOCIALS } from "./data";
import { ClaudeTile } from "./AppIcons";

/* ============================================================
   DeskScene — POV meja kerja Raka, dikemas seperti game first-person:
   - Layar loading level → kamera "berjalan masuk" ke ruangan
   - HUD: kartu pemain (energi indomie & kreativitas), quest log,
     hotbar item (tombol 1-5), FPS counter sungguhan
   - Objek interaktif disorot saat hover + prompt [E]; tekan E
     untuk berinteraksi dengan objek yang sedang ditunjuk
   - Klik MacBook (desktop) / tap HP (mobile) = misi utama
   ============================================================ */

function useNow() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  return now;
}

function useFps() {
  const [fps, setFps] = useState(60);
  useEffect(() => {
    let frames = 0;
    let last = performance.now();
    let raf = 0;
    const loop = (t: number) => {
      frames++;
      if (t - last >= 500) {
        setFps(Math.round((frames * 1000) / (t - last)));
        frames = 0;
        last = t;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  return fps;
}

const LOADING_TIPS = [
  "TIP: semua objek di meja bisa diklik — coba satu-satu",
  "TIP: tekan [E] untuk berinteraksi dengan objek yang ditunjuk",
  "TIP: galeri di dinding menyimpan cerita projek",
  "TIP: indomie = +100 energi developer",
];

export default function DeskScene(props: {
  device: "desktop" | "mobile";
  onLaptop: () => void;
  onPhone: () => void;
  onFinishToProjects: () => void;
}) {
  const { device } = props;
  const sceneRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const hoverAction = useRef<(() => void) | null>(null);
  const [phase, setPhase] = useState<"loading" | "play">("loading");
  const [zoom, setZoom] = useState<"" | "laptop" | "phone">("");
  const [missionDone, setMissionDone] = useState(false);
  const [toast, setToast] = useState("");
  const [gallery, setGallery] = useState(-1);
  const [quests, setQuests] = useState({ look: false, gallery: false });
  const toastTimer = useRef<ReturnType<typeof setTimeout>>();
  const tip = useRef(LOADING_TIPS[Math.floor(Math.random() * LOADING_TIPS.length)]);
  const now = useNow();
  const fps = useFps();

  const say = (msg: string) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2800);
  };

  // layar loading level
  useEffect(() => {
    const t = setTimeout(() => setPhase("play"), 1900);
    return () => clearTimeout(t);
  }, []);

  // tilt scene mengikuti pointer + quest "lihat sekeliling"
  useEffect(() => {
    const apply = (x: number, y: number) => {
      const el = sceneRef.current;
      if (!el) return;
      const rx = (y / window.innerHeight - 0.5) * -7;
      const ry = (x / window.innerWidth - 0.5) * 10;
      el.style.transform = `perspective(1200px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      setQuests((q) => (q.look ? q : { ...q, look: true }));
    };
    const onMouse = (e: MouseEvent) => apply(e.clientX, e.clientY);
    const onTouchStart = () => (dragging.current = true);
    const onTouchEnd = () => (dragging.current = false);
    const onTouchMove = (e: TouchEvent) => {
      if (dragging.current && e.touches[0]) apply(e.touches[0].clientX, e.touches[0].clientY);
    };
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  const openLaptop = () => {
    if (device === "mobile") {
      say("Layar MacBook-nya kegedean buat HP 😅 Tap HP di meja ya!");
      return;
    }
    setMissionDone(true);
    setZoom("laptop");
    setTimeout(props.onLaptop, 850);
  };

  const openPhone = () => {
    if (device === "desktop") {
      say("Itu HP Raka — intro versi mobile. Buka situs ini lewat HP-mu 😉");
      return;
    }
    setMissionDone(true);
    setZoom("phone");
    setTimeout(props.onPhone, 850);
  };

  const openGallery = (i: number) => {
    setGallery(i);
    setQuests((q) => ({ ...q, gallery: true }));
  };

  // keyboard: [E] interaksi dengan objek yang ditunjuk, 1-5 hotbar
  useEffect(() => {
    const hotbar: Record<string, () => void> = {
      "1": () => say("🍜 Indomie dimakan. Energi +100! Lanjut ngoding."),
      "2": () => say("🧋 Es teh diseruput. Segar. Fokus +20."),
      "3": () => openGallery(0),
      "4": () => window.open(SOCIALS.cv, "_blank"),
      "5": () => say("✦ Klod menunggumu di dalam website…"),
    };
    const onKey = (e: KeyboardEvent) => {
      if (phase !== "play") return;
      const k = e.key.toLowerCase();
      if (k === "e" && hoverAction.current) hoverAction.current();
      else if (hotbar[k]) hotbar[k]();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const hourDeg = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5;
  const minDeg = now.getMinutes() * 6;

  // helper props untuk objek interaktif: sorot + daftarkan aksi [E]
  const interact = (action: () => void) => ({
    onMouseEnter: () => (hoverAction.current = action),
    onMouseLeave: () => (hoverAction.current = null),
    onClick: action,
  });

  const promptCls =
    "pointer-events-none absolute left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-clay whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10";

  return (
    <div className="absolute inset-0 overflow-hidden desk-room cursor-crosshair select-none">
      {/* ====== LAYAR LOADING LEVEL ====== */}
      {phase === "loading" && (
        <div className="absolute inset-0 z-30 bg-[#0b0908] flex flex-col items-center justify-center gap-6 px-8">
          <p className="font-mono text-[10px] tracking-[0.4em] text-slate-500 uppercase">memuat level</p>
          <h2 className="font-mono text-xl sm:text-3xl font-bold text-slate-100 tracking-widest uppercase text-center">
            Meja Kerja <span className="text-clay">Raka</span>
          </h2>
          <div className="w-64 max-w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="boot-bar h-full bg-clay rounded-full" />
          </div>
          <p className="font-mono text-[11px] text-slate-500 text-center">{tip.current}</p>
        </div>
      )}

      {/* ====== DUNIA ====== */}
      <div className={phase === "play" ? "level-enter absolute inset-0" : "absolute inset-0 opacity-0"}>
        <div
          ref={sceneRef}
          className={`absolute inset-0 will-change-transform transition-opacity ${
            zoom === "laptop" ? "desk-zoom-laptop" : zoom === "phone" ? "desk-zoom-phone" : ""
          }`}
        >
          <div className="desk-sway absolute inset-0">
            {/* ====== DINDING ====== */}
            <div className="absolute left-[4%] top-[7%] w-[clamp(90px,13vw,180px)] aspect-[3/4] rounded-lg border-[6px] border-[#3b2f2a] bg-gradient-to-b from-[#0b1030] via-[#141a45] to-[#27184a] overflow-hidden shadow-xl shadow-black/40">
              <span className="absolute left-[18%] top-[14%] w-6 h-6 rounded-full bg-amber-100/90 shadow-[0_0_18px_rgba(254,243,199,0.7)]" />
              {[
                [70, 20], [40, 38], [80, 52], [22, 64], [60, 76], [30, 18],
              ].map(([x, y], i) => (
                <span
                  key={i}
                  className="absolute w-[3px] h-[3px] rounded-full bg-white/80 animate-pulse"
                  style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 0.4}s` }}
                />
              ))}
              <span className="absolute inset-x-0 top-1/2 h-[5px] bg-[#3b2f2a]" />
              <span className="absolute inset-y-0 left-1/2 w-[5px] bg-[#3b2f2a]" />
            </div>

            {/* galeri projek di dinding */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[7%] flex items-start gap-[2vw]">
              {FEATURED.slice(0, 3).map((p, i) => (
                <button
                  key={p.id}
                  {...interact(() => openGallery(i))}
                  className={`group relative rounded-sm bg-[#2a2118] p-[6px] shadow-xl shadow-black/50 hover:scale-105 hover:ring-2 hover:ring-clay/80 transition-all ${
                    i === 1 ? "mt-[1.5vh]" : ""
                  }`}
                  style={{ rotate: i === 0 ? "-2deg" : i === 2 ? "2.5deg" : "0deg" }}
                  aria-label={`Lihat projek ${p.title}`}
                >
                  <span className="block relative w-[clamp(72px,10vw,150px)] aspect-[4/3] overflow-hidden rounded-[2px]">
                    <Image src={p.image} alt={p.title} fill sizes="150px" className="object-cover object-top" />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </span>
                  <span className={`${promptCls} -bottom-6`}>[E] Lihat — {p.title}</span>
                  {i === 2 && (
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-clay text-slate-950 text-[10px] font-bold flex items-center justify-center shadow">
                      +{FEATURED.length - 3}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* neon sign */}
            <button
              {...interact(() => say("✦ raka.dev — handcrafted bareng Claude"))}
              className="group neon-flicker absolute right-[6%] top-[9%] font-mono text-[clamp(14px,2vw,26px)] font-bold text-clay drop-shadow-[0_0_14px_rgba(217,119,87,0.9)] -rotate-3"
            >
              raka<span className="text-white/90">.dev</span>
              <span className={`${promptCls} -bottom-6`}>[E] Baca</span>
            </button>

            {/* jam dinding analog (waktu asli) */}
            <div className="absolute right-[9%] top-[24%] w-[clamp(44px,5.5vw,72px)] aspect-square rounded-full bg-[#f4f3ee] border-4 border-[#2a2118] shadow-lg">
              <span
                className="absolute left-1/2 top-1/2 w-[3px] h-[26%] bg-[#2a2118] rounded origin-bottom"
                style={{ transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`, transformOrigin: "50% 100%" }}
              />
              <span
                className="absolute left-1/2 top-1/2 w-[2px] h-[36%] bg-[#b3543a] rounded origin-bottom"
                style={{ transform: `translate(-50%, -100%) rotate(${minDeg}deg)`, transformOrigin: "50% 100%" }}
              />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#2a2118]" />
            </div>

            {/* rak + tanaman */}
            <div className="absolute left-[6%] top-[52%] w-[clamp(80px,11vw,150px)]">
              <div className="h-2 rounded bg-[#4a382c] shadow-lg" />
              <span className="absolute -top-7 left-3 text-[clamp(18px,2.4vw,30px)]">🪴</span>
              <span className="absolute -top-6 right-6 w-3 h-6 bg-emerald-900 rounded-sm rotate-3" />
              <span className="absolute -top-6 right-2 w-3 h-6 bg-sky-900 rounded-sm -rotate-2" />
            </div>

            {/* ====== MEJA ====== */}
            <div className="absolute bottom-0 inset-x-0 h-[40%]">
              <div className="absolute inset-0 desk-wood border-t-4 border-[#5d4434]" />
              <div className="pointer-events-none absolute right-[8%] -top-10 w-56 h-40 rounded-full bg-amber-300/15 blur-2xl" />

              {/* MacBook — misi utama desktop */}
              <button
                {...interact(openLaptop)}
                className="group absolute left-1/2 -translate-x-1/2 bottom-[34%] focus:outline-none"
                aria-label="Nyalakan MacBook"
              >
                <span className="block relative w-[clamp(210px,30vw,360px)] aspect-[16/10] rounded-t-xl border-[5px] border-[#1a1d23] bg-gradient-to-b from-[#0c0f16] to-[#11141c] overflow-hidden shadow-2xl shadow-black/60 group-hover:shadow-[0_0_40px_rgba(217,119,87,0.35)] group-hover:ring-2 group-hover:ring-clay/70 transition-all">
                  <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.09]" />
                  <svg viewBox="0 0 100 100" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14%] opacity-25">
                    <path d="M50 32 C 34 20 14 32 14 54 c 0 20 14 36 25 36 c 5 0 7 -3 11 -3 c 4 0 6 3 11 3 c 11 0 25 -16 25 -36 c 0 -22 -20 -34 -36 -22 z" fill="#9ca3af" />
                    <path d="M52 28 c 0 -11 9 -19 17 -19 c 0 11 -9 19 -17 19 z" fill="#9ca3af" />
                  </svg>
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-clay animate-pulse" />
                </span>
                <span className="block mx-auto w-[112%] -translate-x-[5.5%] h-[clamp(8px,1.1vw,13px)] rounded-b-xl bg-gradient-to-b from-[#cbd5e1] to-[#8c97a8] shadow-lg relative">
                  <span className="absolute left-1/2 -translate-x-1/2 top-0 w-[18%] h-[45%] rounded-b-md bg-[#7d8898]" />
                </span>
                <span className={`${promptCls} -top-7`}>
                  {device === "desktop" ? "[E] Nyalakan MacBook ★ MISI UTAMA" : "MacBook"}
                </span>
                {device === "desktop" && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-clay text-lg animate-bounce group-hover:opacity-0 transition-opacity">
                    ▼
                  </span>
                )}
              </button>

              {/* HP — misi utama mobile */}
              <button
                {...interact(openPhone)}
                className="group absolute left-[68%] bottom-[33%] focus:outline-none"
                aria-label="Buka HP"
              >
                <span className="block relative w-[clamp(42px,5.5vw,64px)] aspect-[9/19] rounded-[14%] border-[3px] border-[#15181f] bg-gradient-to-b from-[#101321] to-[#1b1f33] shadow-xl shadow-black/50 rotate-[4deg] group-hover:rotate-0 group-hover:ring-2 group-hover:ring-clay/70 transition-all overflow-hidden">
                  <span className="absolute top-[3%] left-1/2 -translate-x-1/2 w-[34%] h-[4%] rounded-full bg-black" />
                  <span className="absolute top-[16%] inset-x-0 text-center text-[clamp(8px,1vw,12px)] font-semibold text-white/90">
                    {`${String(now.getHours()).padStart(2, "0")}.${String(now.getMinutes()).padStart(2, "0")}`}
                  </span>
                  <span className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[55%]">
                    <ClaudeTile className="w-full rounded-md" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 text-[7px] text-white font-bold flex items-center justify-center">
                      1
                    </span>
                  </span>
                </span>
                <span className="block mx-auto mt-[2px] w-[60%] h-[5px] rounded bg-[#2a2f3d] rotate-[4deg]" />
                <span className={`${promptCls} -top-7`}>
                  {device === "mobile" ? "Tap — MISI UTAMA ★" : "[E] HP Raka"}
                </span>
                {device === "mobile" && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-clay text-lg animate-bounce">
                    ▼
                  </span>
                )}
              </button>

              {/* gelas + uap */}
              <button
                {...interact(() => say("Kopi? Bukan — ini es teh manis. Prioritas. 🧋"))}
                className="group absolute left-[22%] bottom-[35%] focus:outline-none hover:scale-105 transition-transform"
                aria-label="Gelas minuman"
              >
                <span className="steam absolute -top-5 left-1/2 -translate-x-1/2 flex gap-1">
                  <span className="w-1 h-4 rounded-full bg-white/25" />
                  <span className="w-1 h-5 rounded-full bg-white/20" style={{ animationDelay: "0.5s" }} />
                  <span className="w-1 h-3.5 rounded-full bg-white/25" style={{ animationDelay: "1s" }} />
                </span>
                <span className="block w-[clamp(26px,3.4vw,40px)] aspect-[4/5] rounded-b-xl rounded-t-sm bg-gradient-to-b from-[#e9e2d4] to-[#cdc3ae] shadow-lg relative">
                  <span className="absolute -right-2.5 top-1.5 w-3 h-4 border-[3px] border-[#cdc3ae] rounded-r-full" />
                </span>
                <span className={`${promptCls} -top-6`}>[E] Minum</span>
              </button>

              {/* indomie cup */}
              <button
                {...interact(() => say("Indomie goreng: bahan bakar resmi developer ini 🍜"))}
                className="group absolute left-[10%] bottom-[18%] focus:outline-none hover:scale-105 transition-transform"
                aria-label="Indomie"
              >
                <span className="block w-[clamp(34px,4.6vw,56px)] aspect-square rounded-b-[40%] rounded-t-sm bg-gradient-to-b from-[#f0e0c0] to-[#dcc89e] shadow-lg relative overflow-hidden">
                  <span className="absolute inset-x-0 top-[28%] h-[26%] bg-[#c8372d]" />
                  <span className="absolute inset-x-0 top-[32%] text-center text-[clamp(5px,0.7vw,8px)] font-black text-amber-100 tracking-tight">
                    INDOMIE
                  </span>
                </span>
                <span className="absolute -top-2 right-0 rotate-45 w-1 h-6 bg-[#d9c9a8] rounded" />
                <span className={`${promptCls} -top-6`}>[E] Makan</span>
              </button>

              {/* sticky note */}
              <div className="absolute right-[12%] bottom-[16%] w-[clamp(54px,7vw,84px)] aspect-square bg-[#ffe88a] rotate-[-5deg] shadow-md p-1.5">
                <p className="text-[clamp(6px,0.8vw,9px)] font-semibold text-[#6b5d1f] leading-snug font-mono">
                  psst…
                  <br />
                  tekan{" "}
                  <span className="px-0.5 border border-[#6b5d1f]/50 rounded-sm">S</span> =
                  <br />
                  WhatsApp 💬
                </p>
              </div>

              {/* mouse */}
              <span className="absolute left-[60%] bottom-[20%] w-[clamp(20px,2.6vw,32px)] aspect-[3/4] rounded-[45%] bg-gradient-to-b from-[#d7dde6] to-[#aab3c0] shadow-md" />
            </div>
          </div>
        </div>

        {/* ====== HUD GAME ====== */}
        {/* vignette */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_60px_rgba(0,0,0,0.55)]" />

        {/* kartu pemain */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2.5 px-3 py-2 rounded-lg bg-black/45 backdrop-blur border border-white/10">
          <span className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-md overflow-hidden border border-clay/60">
            <Image src="/muka.png" alt="Raka" fill sizes="40px" className="object-cover" />
          </span>
          <div className="font-mono">
            <p className="text-[10px] sm:text-[11px] text-white/90 font-bold tracking-wider">
              RAKA <span className="text-clay">· LV.21 DEVELOPER</span>
            </p>
            <div className="mt-1 space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[8px] text-white/50 w-12">ENERGI</span>
                <span className="w-20 sm:w-28 h-1.5 rounded bg-white/15 overflow-hidden">
                  <span className="block h-full w-[100%] bg-clay rounded" />
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[8px] text-white/50 w-12">KREATIF</span>
                <span className="w-20 sm:w-28 h-1.5 rounded bg-white/15 overflow-hidden">
                  <span className="block h-full w-[92%] bg-sky-400 rounded" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* quest log */}
        <div className="absolute top-16 right-3 sm:top-20 sm:right-4 w-44 sm:w-52 px-3 py-2.5 rounded-lg bg-black/45 backdrop-blur border border-white/10 font-mono">
          <p className="text-[9px] tracking-[0.3em] text-clay font-bold mb-1.5">📜 MISI</p>
          <ul className="space-y-1 text-[10px] sm:text-[11px]">
            <li className={quests.look ? "text-emerald-400 line-through" : "text-white/80"}>
              {quests.look ? "✓" : "○"} Lihat sekeliling
            </li>
            <li className={quests.gallery ? "text-emerald-400 line-through" : "text-white/80"}>
              {quests.gallery ? "✓" : "○"} Buka galeri projek
            </li>
            <li className="text-amber-300">
              ★ {device === "desktop" ? "Nyalakan MacBook" : "Tap HP di meja"}
            </li>
          </ul>
        </div>

        {/* FPS counter */}
        <div className="absolute bottom-8 left-3 sm:bottom-9 sm:left-4 px-2 py-1 rounded bg-black/45 backdrop-blur border border-white/10 font-mono text-[9px] sm:text-[10px] text-emerald-400">
          {fps} FPS · POV
        </div>

        {/* hotbar */}
        <div className="absolute bottom-8 sm:bottom-9 inset-x-0 flex justify-center gap-1.5">
          {[
            { key: "1", icon: "🍜", run: () => say("🍜 Indomie dimakan. Energi +100! Lanjut ngoding.") },
            { key: "2", icon: "🧋", run: () => say("🧋 Es teh diseruput. Segar. Fokus +20.") },
            { key: "3", icon: "🖼️", run: () => openGallery(0) },
            { key: "4", icon: "📄", run: () => window.open(SOCIALS.cv, "_blank") },
            { key: "5", icon: "✦", run: () => say("✦ Klod menunggumu di dalam website…") },
          ].map((slot) => (
            <button
              key={slot.key}
              onClick={slot.run}
              className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-md bg-black/45 backdrop-blur border border-white/15 hover:border-clay/70 hover:bg-black/60 transition-colors flex items-center justify-center text-base sm:text-lg"
            >
              {slot.icon}
              <span className="absolute top-0.5 left-1 text-[7px] sm:text-[8px] font-mono text-white/50">
                {slot.key}
              </span>
            </button>
          ))}
        </div>

        {/* hint bawah */}
        <p className="absolute bottom-2 inset-x-0 text-center text-[10px] sm:text-[11px] font-mono text-white/45 pointer-events-none">
          {device === "desktop"
            ? "gerakkan mouse = lihat sekeliling · klik / [E] = interaksi · 1-5 = hotbar"
            : "geser jari = lihat sekeliling · tap objek = interaksi"}
        </p>

        {/* stempel misi selesai */}
        {missionDone && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-20">
            <p className="stamp-pop font-mono text-2xl sm:text-4xl font-black tracking-[0.2em] text-clay border-4 border-clay rounded-lg px-6 py-3 -rotate-6 bg-black/60 backdrop-blur">
              ✓ MISI SELESAI
            </p>
          </div>
        )}
      </div>

      {/* toast */}
      {toast && (
        <div className="toast-pop absolute bottom-24 inset-x-0 flex justify-center px-6 pointer-events-none z-20">
          <p className="px-4 py-2 rounded-full bg-black/70 backdrop-blur text-white/90 text-xs sm:text-sm shadow-xl font-mono">
            {toast}
          </p>
        </div>
      )}

      {/* lightbox galeri projek */}
      {gallery >= 0 && (
        <div
          className="absolute inset-0 z-20 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 cursor-default"
          onClick={() => setGallery(-1)}
        >
          <div
            className="palette-pop relative w-full max-w-md rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={FEATURED[gallery].image}
                alt={FEATURED[gallery].title}
                fill
                sizes="448px"
                className="object-cover object-top"
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-clay">
                Chapter {FEATURED[gallery].chapter} · {FEATURED[gallery].category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-slate-100 text-lg">{FEATURED[gallery].title}</h3>
              <p className="mt-1 text-sm text-clay/90 font-mono">{FEATURED[gallery].tagline}</p>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{FEATURED[gallery].story}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {FEATURED.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setGallery(i)}
                      aria-label={`Projek ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === gallery ? "bg-clay" : "bg-slate-700 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setGallery((gallery + 1) % FEATURED.length)}
                    className="px-3 py-1.5 rounded-full border border-slate-700 text-slate-300 text-xs hover:border-slate-500"
                  >
                    Berikutnya →
                  </button>
                  <button
                    onClick={props.onFinishToProjects}
                    className="px-3 py-1.5 rounded-full bg-clay text-slate-950 text-xs font-semibold hover:bg-clay-light"
                  >
                    Lihat di website
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={() => setGallery(-1)}
              aria-label="Tutup"
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/60 text-white/90 text-sm hover:bg-black/80"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
