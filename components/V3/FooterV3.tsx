import React from "react";
import { SOCIALS } from "./data";

const LINKS = [
  { name: "GitHub", href: SOCIALS.github },
  { name: "LinkedIn", href: SOCIALS.linkedin },
  { name: "Instagram", href: SOCIALS.instagram },
  { name: "YouTube", href: SOCIALS.youtube },
];

export default function FooterV3() {
  return (
    <footer className="border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Raka Tegar Wicaksono — dibangun dengan Next.js, Tailwind,
          dan <span className="text-clay">Claude Code ✦</span>
        </p>
        <div className="flex gap-6">
          {LINKS.map((l) => (
            <a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
