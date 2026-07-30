import React from "react";
import ProjectImageRight from "../ProjectImageRight";

export default function Project23_WebWibu() {
  return (
    <ProjectImageRight
      category="Web Dev Project"
      title="WebWibu"
      href="https://github.com/rakategar/web-wibu.git"
      description=", merupakan aplikasi website yang terintegrasi oleh Database JikanApi dan Payment Gateway MidTrans, aplikasi ini bertujuan untuk menyajikan daftar anime baik secara rekomendasi, tingkat popularitas, serta ranking. Aplikasi ini disertai mini Youtube Player yang memudahkan pengguna"
      techStack={["NextJS", "Tailwind", "MySQL", "MidTrans"]}
      imageSrc="/Webwibu.png"
      githubLink="https://github.com/rakategar/web-wibu.git"
    />
  );
}
