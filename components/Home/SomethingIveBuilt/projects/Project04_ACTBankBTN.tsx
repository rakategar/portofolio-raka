import React from "react";
import ProjectImageLeft from "../ProjectImageLeft";

export default function Project04_ACTBankBTN() {
  return (
    <ProjectImageLeft
      category="Enterprise Dashboard & Sales CRM Project"
      title="A.C.T Sales CRM Bank BTN"
      description=", merupakan dashboard eksekutif untuk memantau performa sales nasional Bank BTN lintas cabang dan area. Aku mengembangkan Pipeline Board per tahap Contact, Meet, Prospect, dan Close, Funnel Conversion Rate, Early Warning System, hingga AI Insight Center yang otomatis menyoroti cabang tertinggal"
      techStack={["NextJS", "Tailwind", "Supabase", "AI Insight"]}
      imageSrc="/crmbtn.png"
    />
  );
}
