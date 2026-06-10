import React, { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };
type Pulse = { x: number; y: number; r: number; alpha: number };

// Jaring neuron interaktif: node melayang & saling terhubung, tertarik ke
// kursor, dan setiap klik memunculkan pulse + node baru yang bergabung ke
// jaring. Subtle — duduk di belakang konten sebagai tekstur hidup.
export default function NeuronCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const MAX_NODES = Math.min(110, Math.floor((width * height) / 16000));
    const nodes: Node[] = [];
    const pulses: Pulse[] = [];
    const rand = (a: number, b: number) => a + Math.random() * (b - a);

    for (let i = 0; i < MAX_NODES; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: rand(-0.18, 0.18),
        vy: rand(-0.18, 0.18),
        r: rand(1.2, 2.2),
      });
    }

    const mouse = { x: -9999, y: -9999 };
    // titik tarik sementara setelah klik — jaring "mengikuti" klik
    const attractor = { x: 0, y: 0, until: 0 };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onClick = (e: MouseEvent) => {
      attractor.x = e.clientX;
      attractor.y = e.clientY;
      attractor.until = performance.now() + 2200;
      pulses.push({ x: e.clientX, y: e.clientY, r: 4, alpha: 0.5 });
      // lahirkan beberapa neuron baru di titik klik (jaga jumlah total)
      for (let i = 0; i < 4; i++) {
        if (nodes.length >= MAX_NODES + 24) nodes.shift();
        nodes.push({
          x: e.clientX + rand(-12, 12),
          y: e.clientY + rand(-12, 12),
          vx: rand(-0.5, 0.5),
          vy: rand(-0.5, 0.5),
          r: rand(1.4, 2.4),
        });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("click", onClick);
    window.addEventListener("resize", resize);

    const LINK_DIST = 130;
    const CLAY = "217, 119, 87"; // warna aksen Claude
    const SLATE = "148, 163, 184";

    let frameId = 0;
    const tick = () => {
      frameId = requestAnimationFrame(tick);
      ctx.clearRect(0, 0, width, height);
      const now = performance.now();
      const attracting = now < attractor.until;

      for (const n of nodes) {
        // tarikan lembut ke titik klik
        if (attracting) {
          const dx = attractor.x - n.x;
          const dy = attractor.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d > 40 && d < 420) {
            n.vx += (dx / d) * 0.012;
            n.vy += (dy / d) * 0.012;
          }
        }
        // tarikan sangat halus ke kursor
        const mdx = mouse.x - n.x;
        const mdy = mouse.y - n.y;
        const md = Math.hypot(mdx, mdy);
        if (md < 180 && md > 30) {
          n.vx += (mdx / md) * 0.004;
          n.vy += (mdy / md) * 0.004;
        }

        n.vx *= 0.985;
        n.vy *= 0.985;
        // dorongan kecil supaya tidak pernah diam total
        n.vx += rand(-0.005, 0.005);
        n.vy += rand(-0.005, 0.005);
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }

      // sinapsis
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            const midx = (a.x + b.x) / 2;
            const midy = (a.y + b.y) / 2;
            const nearMouse = Math.hypot(mouse.x - midx, mouse.y - midy) < 140;
            const alpha = (1 - d / LINK_DIST) * (nearMouse ? 0.35 : 0.1);
            ctx.strokeStyle = `rgba(${nearMouse ? CLAY : SLATE}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // neuron
      for (const n of nodes) {
        const md = Math.hypot(mouse.x - n.x, mouse.y - n.y);
        const near = md < 140;
        ctx.fillStyle = near
          ? `rgba(${CLAY}, 0.9)`
          : `rgba(${SLATE}, 0.45)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, near ? n.r + 0.6 : n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // pulse klik
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.r += 2.4;
        p.alpha *= 0.96;
        if (p.alpha < 0.02) {
          pulses.splice(i, 1);
          continue;
        }
        ctx.strokeStyle = `rgba(${CLAY}, ${p.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.stroke();
      }
    };
    tick();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
