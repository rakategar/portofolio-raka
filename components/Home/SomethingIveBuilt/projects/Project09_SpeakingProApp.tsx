import React from "react";
import ProjectImageRight from "../ProjectImageRight";

export default function Project09_SpeakingProApp() {
  return (
    <ProjectImageRight
      category="Mobile Learning Web App Project"
      title="Speaking Pro™ Web App"
      description=", merupakan aplikasi web mobile-first yang jadi ruang latihan harian peserta Speaking Pro™. Mendorong konsistensi lewat target latihan 10 menit per hari, streak mingguan, modul rekaman mingguan dengan visual waveform, serta Rekomendasi AI yang memilih modul latihan sesuai level pengguna"
      techStack={["NextJS", "Tailwind", "Supabase", "AI"]}
      imageSrc="/speakingproapp.png"
    />
  );
}
