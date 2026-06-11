import React, { useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARS = "abcdefghjkmnpqrstuvwxyz<>/{}#*+";

// Judul "ter-decode" dengan efek scramble saat pertama kali terlihat.
function useScramble(text: string) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setInterval>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let frame = 0;
        const total = 22;
        timer = setInterval(() => {
          frame++;
          const reveal = Math.floor((frame / total) * text.length);
          setDisplay(
            text
              .split("")
              .map((c, i) =>
                i < reveal || c === " "
                  ? c
                  : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
              )
              .join("")
          );
          if (frame >= total) {
            clearInterval(timer);
            setDisplay(text);
          }
        }, 34);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [text]);

  return { ref, display };
}

export default function SectionLabel(props: {
  label: string;
  title: string;
  desc?: string;
}) {
  const { ref, display } = useScramble(props.title);

  return (
    <div className="mb-14" data-aos="fade-up">
      <p className="text-sm font-mono text-clay mb-3">{props.label}</p>
      <h2 ref={ref} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
        {display}
      </h2>
      {props.desc && (
        <p className="mt-4 text-slate-400 max-w-2xl leading-relaxed">{props.desc}</p>
      )}
    </div>
  );
}
