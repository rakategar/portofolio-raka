import React, { useEffect, useRef } from "react";
import * as THREE from "three";

// Fullscreen fixed Three.js background: AI "neural core" + plexus network + starfield.
// Reacts to mouse (parallax) and scroll (camera drift + core energy).
export default function NeuralScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobile = window.innerWidth < 768;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030014, 0.035);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 14);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const CYAN = new THREE.Color(0x00f0ff);
    const PURPLE = new THREE.Color(0x9d4eff);
    const MAGENTA = new THREE.Color(0xff2ec4);

    // ---------- Starfield ----------
    const starCount = isMobile ? 500 : 1300;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starCol = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 90;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 60;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 60 - 10;
      const c = [CYAN, PURPLE, MAGENTA, new THREE.Color(0xffffff)][
        Math.floor(Math.random() * 4)
      ];
      starCol[i * 3] = c.r;
      starCol[i * 3 + 1] = c.g;
      starCol[i * 3 + 2] = c.b;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starCol, 3));
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({
        size: 0.07,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    scene.add(stars);

    // ---------- Plexus network (neurons + synapses) ----------
    const plexus = new THREE.Group();
    const nodeCount = isMobile ? 55 : 110;
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      // distribute on a thick spherical shell around the core
      const r = 5.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      nodes.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.7,
          r * Math.cos(phi)
        )
      );
    }
    const nodeGeo = new THREE.BufferGeometry().setFromPoints(nodes);
    const nodePoints = new THREE.Points(
      nodeGeo,
      new THREE.PointsMaterial({
        color: CYAN,
        size: 0.14,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    plexus.add(nodePoints);

    const linePositions: number[] = [];
    const lineColors: number[] = [];
    const maxDist = 3.4;
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodes[i].distanceTo(nodes[j]) < maxDist) {
          linePositions.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          );
          const c1 = Math.random() > 0.5 ? CYAN : PURPLE;
          lineColors.push(c1.r, c1.g, c1.b, PURPLE.r, PURPLE.g, PURPLE.b);
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    lineGeo.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));
    const lines = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    plexus.add(lines);
    scene.add(plexus);

    // ---------- AI core ----------
    const core = new THREE.Group();
    const icoMat = new THREE.MeshBasicMaterial({
      color: CYAN,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(2.2, 1), icoMat);
    core.add(ico);

    const innerMat = new THREE.MeshBasicMaterial({
      color: PURPLE,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(1.35, 0), innerMat);
    core.add(inner);

    const heartMat = new THREE.MeshBasicMaterial({
      color: 0x9bffff,
      transparent: true,
      opacity: 0.9,
    });
    const heart = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), heartMat);
    core.add(heart);

    // orbital rings
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: MAGENTA,
      transparent: true,
      opacity: 0.4,
      side: THREE.DoubleSide,
    });
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.015, 8, 120), ringMat1);
    ring1.rotation.x = Math.PI / 2.3;
    core.add(ring1);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: CYAN,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.9, 0.012, 8, 120), ringMat2);
    ring2.rotation.x = Math.PI / 1.8;
    ring2.rotation.y = Math.PI / 5;
    core.add(ring2);

    // electrons travelling on rings
    const electron1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 8, 8),
      new THREE.MeshBasicMaterial({ color: MAGENTA })
    );
    core.add(electron1);
    const electron2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 8, 8),
      new THREE.MeshBasicMaterial({ color: CYAN })
    );
    core.add(electron2);

    // shift the whole composition right on desktop so hero text breathes
    const composition = new THREE.Group();
    composition.add(core);
    composition.add(plexus);
    composition.position.x = isMobile ? 0 : 3.5;
    composition.position.y = isMobile ? 2.5 : 0;
    scene.add(composition);

    // ---------- Interaction state ----------
    const mouse = { x: 0, y: 0 };
    let scrollY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // ---------- Animation loop ----------
    const clock = new THREE.Clock();
    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      plexus.rotation.y = t * 0.05;
      plexus.rotation.x = Math.sin(t * 0.12) * 0.12;

      ico.rotation.y = t * 0.25;
      ico.rotation.x = t * 0.1;
      inner.rotation.y = -t * 0.5;
      inner.rotation.z = t * 0.3;
      ring1.rotation.z = t * 0.2;
      ring2.rotation.z = -t * 0.15;

      const pulse = 1 + Math.sin(t * 2.2) * 0.12;
      heart.scale.setScalar(pulse);
      heartMat.opacity = 0.6 + Math.sin(t * 2.2) * 0.3;
      icoMat.opacity = 0.45 + Math.sin(t * 1.4) * 0.15;

      electron1.position.set(Math.cos(t * 1.4) * 3.2, 0, Math.sin(t * 1.4) * 3.2);
      electron1.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2.3);
      electron2.position.set(Math.cos(-t * 1.1) * 3.9, 0, Math.sin(-t * 1.1) * 3.9);
      electron2.position.applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 1.8);

      stars.rotation.y = t * 0.008;

      // camera: mouse parallax + scroll dive
      const scrollT = scrollY * 0.0016;
      camera.position.x += (mouse.x * 1.4 - camera.position.x) * 0.04;
      camera.position.y += (mouse.y * 0.9 - scrollT * 2.2 - camera.position.y) * 0.04;
      camera.position.z = 14 - Math.min(scrollT * 1.6, 4);
      camera.lookAt(composition.position.x * 0.6, 0, 0);

      // network slowly "thinks" harder as you scroll
      lines.material.opacity = 0.18 + Math.min(scrollT * 0.04, 0.18) + Math.sin(t * 0.8) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points || obj instanceof THREE.LineSegments) {
          obj.geometry.dispose();
          const mat = obj.material as THREE.Material | THREE.Material[];
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat.dispose();
        }
      });
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
