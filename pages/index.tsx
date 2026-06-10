import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Aos from "aos";
import "aos/dist/aos.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BootLoader from "../components/V2/BootLoader";
import Navbar from "../components/V2/Navbar";
import Hero from "../components/V2/Hero";
import About from "../components/V2/About";
import Experience from "../components/V2/Experience";
import Projects from "../components/V2/Projects";
import Contact from "../components/V2/Contact";
import FooterV2 from "../components/V2/FooterV2";
import Maintenance from "../components/Home/Maintenance/Maintenance";

// Three.js needs the browser — render the scene client-side only.
const NeuralScene = dynamic(() => import("../components/V2/NeuralScene"), {
  ssr: false,
});

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isBlackListed, setIsBlackListed] = useState(false);
  const IsBlackListEmpty = !process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES;

  useEffect(() => {
    if (!IsBlackListEmpty) {
      const fetchData = async () => {
        try {
          const ip = await fetch("https://api.ipify.org/?format=json")
            .then((res) => res.json())
            .then((data) => data.ip);
          const response = await fetch("/api/userInfoByIP/" + ip);
          setUserData(await response.json());
        } catch (error) {
          console.error("Error fetching data location and ip address:", error);
        }
      };
      fetchData();
    }
  }, [IsBlackListEmpty]);

  useEffect(() => {
    if (!IsBlackListEmpty && userData) {
      if (process.env.NEXT_PUBLIC_BLACKLIST_COUNTRIES?.includes(userData.country)) {
        setIsBlackListed(true);
      }
    }
  }, [IsBlackListEmpty, userData]);

  useEffect(() => {
    Aos.init({ duration: 900, once: true, offset: 80 });
  }, []);

  // shortcut: tekan "S" untuk WhatsApp
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
      if (event.key === "s") {
        window.open("https://wa.link/njvrbh", "_blank");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const meta = {
    title: "Raka Tegar — Web Dev & AI Builder",
    description: `Haii aku Raka, UI/UX & Front End Web Dev. Selamat datang di dunia digital-ku — futuristik, AI, dan 3D. Yuk kenalan!`,
    image: "/muka.png",
    type: "website",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://portoraka.site`} />
        <link rel="canonical" href={`https://portoraka.site`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Raka Tegar" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="theme-color" content="#030014" />
      </Head>
      <SpeedInsights />
      {isBlackListed ? (
        <Maintenance />
      ) : (
        <div className="relative min-h-screen bg-[#030014] text-gray-300 overflow-x-hidden">
          {!booted && <BootLoader onDone={() => setBooted(true)} />}

          <NeuralScene />

          {/* ambient grid + vignette overlays */}
          <div className="pointer-events-none fixed inset-0 z-[1] cyber-grid opacity-40" />
          <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,#030014_100%)]" />

          <div className="relative z-10">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </main>
            <FooterV2 />
          </div>
        </div>
      )}
    </>
  );
}
