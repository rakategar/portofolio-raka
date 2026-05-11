import React from "react";
import ProjectImageLeft from "../ProjectImageLeft";

export default function Project07_CekKodam() {
  return (
    <ProjectImageLeft
      category="Web Dev Project"
      title="Web Cek Kodam"
      href="https://cek-kodam-xi.vercel.app/"
      description=", merupakan aplikasi website yang bertujuan untuk memunculkan nama nama kodam/hewan random pick, berdasarkan nama yang di input oleh user"
      techStack={["NextJS", "Tailwind", "Daisy UI"]}
      imageSrc="/cekkodam.png"
      githubLink="https://github.com/rakategar/web-cek-kodam"
      externalHref="https://cek-kodam-xi.vercel.app/"
    />
  );
}
