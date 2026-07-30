import React from "react";
import ProjectImageLeft from "../ProjectImageLeft";

export default function Project08_SpeakingPro() {
  return (
    <ProjectImageLeft
      category="AI Learning Platform Project"
      title="Speaking Pro™"
      description=", merupakan landing page beta launch platform pelatihan public speaking berbasis AI pertama di Indonesia, kolaborasi Coach Faisal Maulana dengan AI Mentor. Aku membangun funnel pendaftaran beta dengan Quick Registration yang langsung terhubung ke WhatsApp Admin, penjabaran sistem Daily Speaking Drill dan Weekly Audio Submission, serta modul pricing dengan progress bar slot terbatas"
      techStack={["NextJS", "Tailwind", "Supabase"]}
      imageSrc="/speakingpro.jpg"
    />
  );
}
