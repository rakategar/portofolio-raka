import React from "react";
import ProjectImageLeft from "../ProjectImageLeft";

export default function Project01_CRMBTNN() {
  return (
    <ProjectImageLeft
      category="Web Dev Project"
      title="CRM Bank BTN"
      href="https://github.com/rakategar"
      description=", merupakan aplikasi CRM (Customer Relationship Management) yang dikembangkan bekerja sama dengan Bank BTN, dirancang khusus untuk memonitor dan mengelola aktivitas tim marketing dalam proses akuisisi nasabah dan pemasaran produk perbankan"
      techStack={["NextJS", "Tailwind", "Supabase"]}
      imageSrc="/crmbtn.png"
    />
  );
}
