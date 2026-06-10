import React, { useEffect, useState } from "react";
import { NAV_ITEMS, SOCIALS } from "./data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#030014]/70 border-b border-cyan-400/15 shadow-[0_0_30px_rgba(0,240,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-lg tracking-widest text-white group"
        >
          <span className="text-cyan-400">RT</span>
          <span className="text-fuchsia-500">://</span>
          <span className="hidden sm:inline text-white/80 group-hover:text-cyan-300 transition-colors">
            raka.ai
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.target)}
              className="font-mono text-sm text-gray-300 hover:text-cyan-300 transition-colors group"
            >
              <span className="text-cyan-400/80 group-hover:text-fuchsia-400 transition-colors">
                {item.id}.
              </span>{" "}
              {item.label}
            </button>
          ))}
          <a
            href={SOCIALS.cv}
            target="_blank"
            rel="noreferrer"
            className="relative font-mono text-sm px-4 py-2 rounded border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all"
          >
            CV.exe
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-cyan-300 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-cyan-300 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-cyan-300 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 backdrop-blur-xl bg-[#030014]/90 ${
          open ? "max-h-96 border-b border-cyan-400/15" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.target)}
              className="font-mono text-left text-gray-300 hover:text-cyan-300"
            >
              <span className="text-cyan-400">{item.id}.</span> {item.label}
            </button>
          ))}
          <a
            href={SOCIALS.cv}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-cyan-300 border border-cyan-400/50 rounded px-4 py-2 w-max"
          >
            CV.exe
          </a>
        </div>
      </div>
    </nav>
  );
}
