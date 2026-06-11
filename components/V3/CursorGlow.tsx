import React, { useEffect, useRef } from "react";

// Lampu sorot halus warna clay yang mengikuti kursor — hanya di perangkat
// dengan pointer (desktop). Duduk di antara canvas neuron dan konten.
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (el) {
          el.style.background = `radial-gradient(560px at ${e.clientX}px ${e.clientY}px, rgba(217, 119, 87, 0.055), transparent 70%)`;
        }
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <div ref={ref} className="fixed inset-0 z-[5] pointer-events-none" aria-hidden="true" />;
}
