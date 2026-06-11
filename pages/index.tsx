import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Aos from "aos";
import "aos/dist/aos.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NavbarV3 from "../components/V3/NavbarV3";
import HeroV3 from "../components/V3/HeroV3";
import AboutV3 from "../components/V3/AboutV3";
import Workflow from "../components/V3/Workflow";
import ProjectsStory from "../components/V3/ProjectsStory";
import ExperienceV3 from "../components/V3/ExperienceV3";
import ContactV3 from "../components/V3/ContactV3";
import FooterV3 from "../components/V3/FooterV3";
import Maintenance from "../components/Home/Maintenance/Maintenance";

// Komponen canvas, avatar & intro butuh browser API — render client-side saja.
const NeuronCanvas = dynamic(() => import("../components/V3/NeuronCanvas"), { ssr: false });
const ClaudeBuddy = dynamic(() => import("../components/V3/ClaudeBuddy"), { ssr: false });
const IntroSequence = dynamic(() => import("../components/V3/IntroSequence"), { ssr: false });
const ScrollProgress = dynamic(() => import("../components/V3/ScrollProgress"), { ssr: false });
const CursorGlow = dynamic(() => import("../components/V3/CursorGlow"), { ssr: false });
const CommandPalette = dynamic(() => import("../components/V3/CommandPalette"), { ssr: false });

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
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
    Aos.init({ duration: 700, once: true, offset: 60, easing: "ease-out-cubic" });
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
    title: "Raka Tegar — Web Dev & Automation",
    description: `Haii aku Raka, UI/UX & Front End Web Dev yang suka merangkai workflow AI. Yuk kenalan!`,
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
        <meta name="theme-color" content="#020617" />
        {/* cegah konten ter-flash sebelum intro: tandai html secepat mungkin */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(!sessionStorage.getItem("introPlayed")&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){document.documentElement.classList.add("intro-pending");}}catch(e){}`,
          }}
        />
      </Head>
      <SpeedInsights />
      {isBlackListed ? (
        <Maintenance />
      ) : (
        <div className="relative min-h-screen bg-slate-950 text-slate-300 overflow-x-hidden antialiased">
          <div className="intro-cover" aria-hidden="true" />
          {!introDone && <IntroSequence onDone={() => setIntroDone(true)} />}
          <NeuronCanvas />
          <CursorGlow />
          <CommandPalette />
          <div className={`relative z-10 ${introDone ? "page-reveal" : ""}`}>
            <ScrollProgress />
            <NavbarV3 />
            <main>
              <HeroV3 />
              <AboutV3 />
              <Workflow />
              <ProjectsStory />
              <ExperienceV3 />
              <ContactV3 />
            </main>
            <FooterV3 />
          </div>
          {introDone && <ClaudeBuddy />}
        </div>
      )}
    </>
  );
}
