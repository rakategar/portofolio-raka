import React from "react";
import ProjectImageRight from "../ProjectImageRight";

export default function Project04_KinantiLMS() {
  return (
    <ProjectImageRight
      category="Web Dev Project"
      title="Kinanti LMS"
      href="https://kinantiku.com"
      description=", merupakan Learning Management System berbasis website yang terintegrasi dengan WhatsApp Bot Kinanti, memudahkan guru dan siswa dalam pengelolaan tugas, pengumuman, dan monitoring progress belajar melalui antarmuka web yang modern"
      techStack={["NextJS", "Tailwind", "Next Auth", "Supabase", "Baileys"]}
      imageSrc="/kinantiweb.png"
      githubLink="https://github.com/rakategar/kinanti"
      externalHref="https://kinantiku.com/"
    />
  );
}
