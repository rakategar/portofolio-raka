import React from "react";
import ProjectImageRight from "../ProjectImageRight";

export default function Project03_RategEngineering() {
  return (
    <ProjectImageRight
      category="Corporate Website Project"
      title="RATEG Engineering"
      description=", merupakan landing page konsultan teknik yang menangani perencanaan dermaga, jembatan, dan audit forensik struktur untuk klien BUMN seperti Pelindo, KAI, dan Pertamina. Bernuansa gelap industrial dengan aksen oranye, dilengkapi Asisten RATEG, chatbot AI yang mengkualifikasi kebutuhan proyek pengunjung secara real time"
      techStack={["NextJS", "Tailwind", "Supabase", "AI Chatbot"]}
      imageSrc="/rateg.jpg"
    />
  );
}
