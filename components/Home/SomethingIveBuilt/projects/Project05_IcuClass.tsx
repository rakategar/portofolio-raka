import React from "react";
import ProjectImageLeft from "../ProjectImageLeft";

export default function Project05_IcuClass() {
  return (
    <ProjectImageLeft
      category="Corporate Training Web App Project"
      title="I.C.U Class Bank Hana"
      description=", merupakan aplikasi web pendukung program pemulihan performa sales selama 10 hari kerja untuk tim Financial Advisor, FWSS, dan Branch Manager di Bank Hana. Mencakup autentikasi multi role, input aktivitas harian, scoring berbasis AI, serta Activity Watch untuk memantau slot aktivitas mingguan"
      techStack={["NextJS", "Tailwind", "Supabase", "Google Auth"]}
      imageSrc="/icuclass.png"
    />
  );
}
