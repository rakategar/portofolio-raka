import React from "react";
import ProjectImageLeft from "../ProjectImageLeft";

export default function Project21_OpenDiary() {
  return (
    <ProjectImageLeft
      category="Web Dev Project"
      title="Open Diary"
      href="https://github.com/rakategar/opendiary"
      description=", merupakan aplikasi website yang terintegrasi oleh database Supabase dan autentikasi Clerk, aplikasi ini bertujuan agar pengguna dapat mengunggah Diary atau Curhatan mereka dan dapat ditanggapi oleh pengguna lain"
      techStack={["NextJS", "Tailwind", "Supabase", "Clerk"]}
      imageSrc="/Opendiary.png"
      githubLink="https://github.com/rakategar/opendiary"
    />
  );
}
