import React from "react";

/* Ikon aplikasi digambar ulang sebagai SVG agar menyerupai ikon aslinya
   (gradient + glyph khas masing-masing app) tanpa memuat aset eksternal. */

const TILE = { width: "100", height: "100", rx: "22" };

export function MessagesTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <defs>
        <linearGradient id="grMsg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#67F081" />
          <stop offset="1" stopColor="#0CBC2E" />
        </linearGradient>
      </defs>
      <rect {...TILE} fill="url(#grMsg)" />
      <path
        d="M50 24c-17.7 0-32 11.6-32 26 0 8.3 4.8 15.7 12.2 20.4-.8 4.4-3 8.3-6.6 11.2 5.6-.3 10.8-2.3 15-5.6 3.6 1.1 7.4 1.6 11.4 1.6 17.7 0 32-11.6 32-26S67.7 24 50 24z"
        fill="#fff"
      />
    </svg>
  );
}

export function CameraTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <defs>
        <linearGradient id="grCam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EDEEF0" />
          <stop offset="1" stopColor="#B9BDC6" />
        </linearGradient>
      </defs>
      <rect {...TILE} fill="url(#grCam)" />
      <rect x="18" y="32" width="64" height="42" rx="8" fill="#3C414D" />
      <path d="M38 32l4-7h16l4 7z" fill="#3C414D" />
      <circle cx="50" cy="53" r="14" fill="#5B6270" />
      <circle cx="50" cy="53" r="9" fill="#2A2E37" />
      <circle cx="46" cy="49" r="2.5" fill="#9CA3AF" />
    </svg>
  );
}

const PETALS = ["#F2B63D", "#E8893A", "#E8553A", "#D23A6E", "#9C45B4", "#5856D6", "#1C9CF6", "#30C75E"];

export function PhotosTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <rect {...TILE} fill="#fff" />
      {PETALS.map((c, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="31"
          rx="9.5"
          ry="19"
          fill={c}
          opacity="0.82"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
    </svg>
  );
}

export function SafariTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <defs>
        <radialGradient id="grSaf" cx="0.5" cy="0.3" r="0.9">
          <stop offset="0" stopColor="#3FD2FF" />
          <stop offset="1" stopColor="#1A6BF1" />
        </radialGradient>
      </defs>
      <rect {...TILE} fill="#F6F6F8" />
      <circle cx="50" cy="50" r="37" fill="url(#grSaf)" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="16"
          x2="50"
          y2="21"
          stroke="#fff"
          strokeWidth="2"
          opacity="0.85"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
      <g transform="rotate(45 50 50)">
        <polygon points="50,22 57,50 43,50" fill="#FF3B30" />
        <polygon points="43,50 57,50 50,78" fill="#F5F5F7" />
      </g>
    </svg>
  );
}

export function YouTubeTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <rect {...TILE} fill="#fff" />
      <rect x="16" y="28" width="68" height="44" rx="12" fill="#FF0000" />
      <polygon points="44,40 62,50 44,60" fill="#fff" />
    </svg>
  );
}

export function InstagramTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <defs>
        <radialGradient id="grIg" cx="0.25" cy="1.1" r="1.4">
          <stop offset="0" stopColor="#FFDD55" />
          <stop offset="0.45" stopColor="#FF543E" />
          <stop offset="0.8" stopColor="#C837AB" />
          <stop offset="1" stopColor="#7B3FE4" />
        </radialGradient>
      </defs>
      <rect {...TILE} fill="url(#grIg)" />
      <rect x="27" y="27" width="46" height="46" rx="14" fill="none" stroke="#fff" strokeWidth="5.5" />
      <circle cx="50" cy="50" r="11.5" fill="none" stroke="#fff" strokeWidth="5.5" />
      <circle cx="66.5" cy="33.5" r="3.6" fill="#fff" />
    </svg>
  );
}

const HANDSET =
  "M37.5 33c2-2 5.2-2 7.2 0l4.6 4.6c2 2 2 5.2 0 7.2l-2.8 2.8c3.8 7.6 10 13.8 17.6 17.6l2.8-2.8c2-2 5.2-2 7.2 0l4.6 4.6c2 2 2 5.2 0 7.2l-3.4 3.4c-3 3-7.6 4.2-11.6 2.6-15-6-27-18-33-33-1.6-4-0.4-8.6 2.6-11.6z";

export function WhatsAppTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <defs>
        <linearGradient id="grWa" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5FFC7B" />
          <stop offset="1" stopColor="#1DBE38" />
        </linearGradient>
      </defs>
      <rect {...TILE} fill="url(#grWa)" />
      <path
        d="M50 20c-16.6 0-30 13-30 29 0 5.3 1.5 10.3 4.1 14.6L20 80l17-3.8c4 2 8.4 3 13 3 16.6 0 30-13.2 30-29.2S66.6 20 50 20z"
        fill="#fff"
      />
      <path d={HANDSET} fill="#1DBE38" transform="scale(0.62) translate(28 26)" />
    </svg>
  );
}

export function SpotifyTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <rect {...TILE} fill="#191414" />
      <circle cx="50" cy="50" r="34" fill="#1DB954" />
      <path d="M32 41c12-4 27-3 37 3" stroke="#191414" strokeWidth="5.5" fill="none" strokeLinecap="round" />
      <path d="M34 51.5c10-3 22-2 31 3" stroke="#191414" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M36 61.5c8-2.4 17-1.6 25 2.6" stroke="#191414" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <defs>
        <linearGradient id="grPh" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#67F081" />
          <stop offset="1" stopColor="#0CBC2E" />
        </linearGradient>
      </defs>
      <rect {...TILE} fill="url(#grPh)" />
      <path d={HANDSET} fill="#fff" transform="scale(1.05) translate(-2 -2)" />
    </svg>
  );
}

export function MailTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <defs>
        <linearGradient id="grMl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5FB6FF" />
          <stop offset="1" stopColor="#1D6BF3" />
        </linearGradient>
      </defs>
      <rect {...TILE} fill="url(#grMl)" />
      <rect x="19" y="32" width="62" height="40" rx="7" fill="#fff" />
      <path d="M21 36l29 22 29-22" fill="none" stroke="#1D6BF3" strokeWidth="3.5" strokeLinejoin="round" />
    </svg>
  );
}

export function MusicTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <defs>
        <linearGradient id="grMu" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FB5C74" />
          <stop offset="1" stopColor="#FA233B" />
        </linearGradient>
      </defs>
      <rect {...TILE} fill="url(#grMu)" />
      <ellipse cx="38" cy="67" rx="8" ry="6.5" fill="#fff" />
      <ellipse cx="64" cy="62" rx="8" ry="6.5" fill="#fff" />
      <path d="M44 67V36c0-2 1.3-3.7 3.2-4.2l20-5c2.5-.6 4.8 1.2 4.8 3.8V62h-4V40l-20 5v22z" fill="#fff" />
    </svg>
  );
}

export function FinderTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <defs>
        <linearGradient id="grFnL" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8ED7FB" />
          <stop offset="1" stopColor="#3F9FE8" />
        </linearGradient>
        <linearGradient id="grFnR" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2D7FE0" />
          <stop offset="1" stopColor="#1259B5" />
        </linearGradient>
        <clipPath id="clipFn">
          <rect {...TILE} />
        </clipPath>
      </defs>
      <g clipPath="url(#clipFn)">
        <rect width="100" height="100" fill="url(#grFnL)" />
        <path d="M55 0h45v100H55c-8-16-12-33-12-50S47 16 55 0z" fill="url(#grFnR)" />
        <rect x="30" y="34" width="5" height="18" rx="2.5" fill="#0B3B73" />
        <rect x="66" y="34" width="5" height="18" rx="2.5" fill="#0B3B73" />
        <path d="M28 66c14 10 31 10 45 0" stroke="#0B3B73" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function TerminalTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <defs>
        <linearGradient id="grTm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#444950" />
          <stop offset="0.12" stopColor="#1B1D21" />
          <stop offset="1" stopColor="#0C0D0F" />
        </linearGradient>
      </defs>
      <rect {...TILE} fill="url(#grTm)" />
      <path d="M24 34l16 14-16 14" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="48" y1="64" x2="72" y2="64" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function ClaudeTile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={props.className}>
      <rect {...TILE} fill="#F0EEE5" />
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="31"
          rx="7"
          ry="19"
          fill="#D97757"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="13" fill="#D97757" />
    </svg>
  );
}
