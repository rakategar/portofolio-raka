import React, { useEffect, useState } from "react";
import { NAV_ITEMS, SOCIALS } from "./data";

export default function NavbarV3() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scrollspy: tandai menu sesuai section yang sedang terlihat
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.target);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-semibold text-slate-100 tracking-tight"
        >
          raka<span className="text-clay">.dev</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className={`relative text-sm transition-colors ${
                active === item.target
                  ? "text-clay font-semibold"
                  : "text-slate-400 hover:text-slate-100"
              }`}
            >
              {item.label}
              {active === item.target && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-clay" />
              )}
            </button>
          ))}
          <a
            href={SOCIALS.cv}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-full bg-clay text-slate-950 hover:bg-clay-light hover:scale-105 active:scale-95 transition-all"
          >
            Lihat CV
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-slate-300 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-slate-300 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-slate-300 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-slate-950/95 backdrop-blur ${
          open ? "max-h-96 border-b border-slate-800" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-left text-slate-300 hover:text-white"
            >
              {item.label}
            </button>
          ))}
          <a
            href={SOCIALS.cv}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-full bg-clay text-slate-950 w-max"
          >
            Lihat CV
          </a>
        </div>
      </div>
    </nav>
  );
}
