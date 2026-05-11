import React from "react";
import ProjectImageLeft from "../ProjectImageLeft";

export default function Project07_Kinanti() {
  return (
    <ProjectImageLeft
      category="WhatsApp Bot Project"
      title="Kinanti"
      href="https://kinantiku.com"
      description=", merupakan WhatsApp Chatbot yang bertujuan untuk memudahkan distribusi dan pengumpulan tugas antara guru dan siswa langsung melalui WhatsApp"
      techStack={["Baileys", "Node.js", "Supabase"]}
      imageSrc="/Kinanti.png"
      githubLink="https://github.com/rakategar/kinanti"
      externalHref="https://kinantiku.com/"
    />
  );
}
